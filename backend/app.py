from flask import Flask, request, jsonify
from flagsmith import Flagsmith
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from flask_cors import CORS  # Import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize Flagsmith client
flagsmith = Flagsmith(
    environment_key="7Jizsra6AEgfh4Baiiu8RX",  # Replace with your actual Flagsmith environment key
)

# Initialize VADER sentiment analyzer
analyzer = SentimentIntensityAnalyzer()

# Root route
@app.route('/')
def home():
    return "Sentiment Analysis Backend is running!"

# Sentiment analysis route
@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    # Get environment flags from Flagsmith
    try:
        flags = flagsmith.get_environment_flags()
        print("Feature Flags:", flags.all_flags())  # Debugging Flagsmith response
    except Exception as e:
        print("Flagsmith Error:", str(e))
        return jsonify({"error": "Failed to fetch feature flags"}), 500  # Return error if Flagsmith API fails

    # Check if sentiment analysis is enabled via Flagsmith
    if not flags.is_feature_enabled("enable_sentiment_analysis"):
        return jsonify({"error": "Sentiment analysis is disabled"}), 403

    # Get text from the request
    data = request.json
    text = data.get('text')
    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Perform sentiment analysis using VADER
    sentiment = analyzer.polarity_scores(text)
    return jsonify(sentiment)

if __name__ == '__main__':
    app.run(debug=True)
