from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)

# Load Hugging Face GPT-2 Model
generator = pipeline("text-generation", model="gpt2")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    # Generate AI response
    response = generator(user_message, max_length=100, num_return_sequences=1)
    ai_reply = response[0]["generated_text"]

    return jsonify({"reply": ai_reply})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
