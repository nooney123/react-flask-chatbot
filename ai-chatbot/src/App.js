import React, { useState } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post("http://127.0.0.1:5000/chat", { message: input });
      const aiMessage = { sender: "ai", text: res.data.reply };
      setMessages([...messages, userMessage, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>AI Chatbot</h2>
      <div style={{ border: "1px solid gray", padding: "10px", height: "400px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <strong>{msg.sender === "user" ? "You: " : "AI: "}</strong>
            {msg.text}
          </p>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        style={{ width: "80%" }} 
      />
      <button onClick={sendMessage} style={{ width: "18%" }}>Send</button>
    </div>
  );
}

export default App;
