document.getElementById('analyze-button').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: extractTextFromPage,
    }, (results) => {
        const text = results[0].result;

        // Show loading state
        document.getElementById('result').innerHTML = "⏳ <strong>Analyzing...</strong>";

        // Send the text to the Flask backend
        fetch('http://localhost:5000/analyze', {  // Ensure Flask server is running!
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text }),
        })
        .then(response => response.json())
        .then(data => {
            let sentimentEmoji, sentimentLabel, color;
            if (data.compound >= 0.05) {
                sentimentEmoji = '😊';
                sentimentLabel = 'Positive';
                color = 'green';
            } else if (data.compound <= -0.05) {
                sentimentEmoji = '😠';
                sentimentLabel = 'Negative';
                color = 'red';
            } else {
                sentimentEmoji = '😐';
                sentimentLabel = 'Neutral';
                color = 'gray';
            }

            // Display formatted result with colors
            document.getElementById('result').innerHTML = `
                <strong style="font-size: 18px; color: ${color};">${sentimentEmoji} ${sentimentLabel}</strong>
                <br>🔹 <strong>Positive:</strong> ${Math.round(data.pos * 100)}%
                <br>🔹 <strong>Neutral:</strong> ${Math.round(data.neu * 100)}%
                <br>🔹 <strong>Negative:</strong> ${Math.round(data.neg * 100)}%
                <br>🏆 <strong>Overall Score:</strong> ${data.compound}
            `;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `❌ <strong style="color: red;">Error:</strong> ${error.message}`;
        });
    });
});

function extractTextFromPage() {
    return document.body.innerText;  // Extract text from the webpage
}
