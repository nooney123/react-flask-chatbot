# react-flask-chatbot
A simple AI chatbot built with React (frontend) and Flask (backend), using Hugging Face GPT-2 for text generation. The app lets users chat with an AI in real time, showcasing the power of Generative AI in a full-stack web project.
💬 GenAI Chatbot
A simple AI-powered chatbot web application built using React (frontend) and Flask (backend), powered by GPT-2 from Hugging Face 🤗. This project showcases how to integrate a generative AI model into a full-stack web app for real-time chatbot conversations.

🚀 Features
🌐 Frontend: Built with React for an interactive chat interface

🧠 Backend: Flask API that connects to Hugging Face GPT-2 model

💡 AI-Powered: Uses Hugging Face's transformers pipeline for text generation

🔄 Async Chat: Sends and receives messages with real-time AI responses

🔒 CORS Enabled: Fully cross-origin compatible for frontend-backend communication

🛠️ Tech Stack
Frontend: React, Axios, CSS

Backend: Flask, Flask-CORS, Hugging Face Transformers

AI Model: GPT-2 (text-generation pipeline)

📁 Project Structure
csharp
Copy
Edit
genai-chatbot/
│
├── ai-chatbot/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── app.py               # Flask backend
├── requirements.txt     # Python dependencies
└── venv/ (optional)     # Python virtual environment
🧪 How It Works
User types a message in the React chat interface.

The message is sent to the Flask backend (/chat endpoint).

Flask uses Hugging Face's GPT-2 model to generate a response.

The response is sent back and displayed in the chat window.

✅ Getting Started
Set up your virtual environment

Install dependencies:

nginx
Copy
Edit
pip install flask flask-cors transformers torch
Run the Flask app:

nginx
Copy
Edit
python app.py
Start the React frontend in the ai-chatbot folder:

sql
Copy
Edit
npm install
npm start