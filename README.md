**_SentiFlags_** 🔥  
🚀 **_Real-time Sentiment Analysis Chrome Extension with Flagsmith Integration_**

**_SentiFlags_** 🔍 **_SentiFlags – Instant Sentiment Analysis for Webpages_**  
SentiFlags is a **_Chrome extension_** that instantly analyzes the sentiment of any selected text on a webpage. It leverages:  
🚀 **_Flask (Backend)_**  
📊 **_VADER NLP (Sentiment Analysis)_**  
🎛 **_Flagsmith (Feature Toggling)_**

Enable or disable sentiment analysis dynamically using Flagsmith without modifying the code! 💡 It uses **_Flask (Backend)_**, **_VADER NLP (Sentiment Analysis)_**, and **_Flagsmith (Feature Toggling)_** to provide real-time insights.

✨ **_Features_**  
✅ **_One-click sentiment analysis_** (😊 Positive, 😐 Neutral, 😡 Negative)  
✅ **_Real-time analysis using VADER NLP_**  
✅ **_Feature toggling with Flagsmith_**  
✅ **_Simple Chrome extension UI_**

📌 **_Demo_**  
🎥
https://github.com/user-attachments/assets/6764e123-391c-4b0e-9dc0-2e6d4818b139




🛠 **_Installation_**  
1️⃣ **_Clone the Repository_**  
```bash
git clone https://github.com/Adii0906/SentiFlags.git  
cd SentiFlags
```

2️⃣ **_Backend Setup (Flask API)_**  
🔹 **_Install Dependencies_**  
```bash
pip install -r requirements.txt
```  
🔹 **_Configure Flagsmith_**  
Go to **_Flagsmith_** and create an account.  
Create an environment and get the **_Environment Key_**.  
Replace the `environment_key` in `app.py` with your **_Flagsmith Environment Key_**.  

🔹 **_Run the Flask Server_**  
```bash
python app.py
```  
(Flask will start running on `http://127.0.0.1:5000`)

3️⃣ **_Load the Chrome Extension_**  
Open Chrome and go to `chrome://extensions/`  
Enable **_Developer Mode_**  
Click **_Load Unpacked_** and select the **_SentiFlags_** folder  
Done! 🎉  

🔥 **_How to Use_**  
1️⃣ Select any text on a webpage  
2️⃣ Click the **_SentiFlags_** extension icon  
3️⃣ The popup will display the sentiment analysis result  

⚙️ **_Feature Flagging with Flagsmith_**  
The extension checks **_Flagsmith_** to see if sentiment analysis is enabled.  
**_Feature ON_**: Sentiment analysis runs smoothly.  
**_Feature OFF_**: Users see an error message stating "Sentiment analysis is disabled."  
✅ Toggle this feature **_ON/OFF_** in **_Flagsmith_** without changing the code!

💡 **_Tech Stack_**  
- **_Flask (Backend API)_**  
- **_VADER NLP (Sentiment Analysis)_**  
- **_Flagsmith (Feature Toggling)_**  
- **_JavaScript, HTML, CSS (Chrome Extension)_**

