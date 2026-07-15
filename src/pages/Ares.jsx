import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import navigation from "../ai/navigation";
import brain from "../ai/brain";
import "../styles/Ares.css";

function Ares() {
  const hour = new Date().getHours();

let greeting = "Good evening";

if (hour < 12) greeting = "Good morning";
else if (hour < 18) greeting = "Good afternoon";

const [messages, setMessages] = useState([
  {
    sender: "ARES",
    text: `${greeting}, Sanjeev. Systems online. Awaiting your command.`,
  },
]);

  const [input, setInput] = useState("");
  
  const navigate = useNavigate();

  const chatRef = useRef(null);

useEffect(() => {
  chatRef.current?.scrollTo({
    top: chatRef.current.scrollHeight,
    behavior: "smooth",
  });
}, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "You",
      text: input,
    };

    const action = navigation(input, navigate);

const aresReply = {
  sender: "ARES",
  text: action || brain(input),
};

    setMessages([...messages, userMessage, aresReply]);
    setInput("");
  };

  return (
  <div className="ares-page">

    <div className="ares-topbar">
      <div>
        <h1>⚔️ ARES</h1>
        <p>Personal AI Operating System</p>
      </div>

      <div className="status">
        🟢 ONLINE
      </div>
    </div>

    <div className="ares-main">

      <div className="left-panel">

        <h3>Quick Actions</h3>

        <button onClick={() => navigate("/planner")}>📅 Planner</button>
        <button onClick={() => navigate("/finance")}>💰 Finance</button>
        <button onClick={() => navigate("/health")}>❤️ Health</button>
        <button onClick={() => navigate("/habits")}>✅ Habits</button>

      </div>

      <div className="right-panel">

        <div className="ares-chat" ref={chatRef}>
          {messages.map((msg, index) => (
  <div
    key={index}
    className={`ares-message ${
      msg.sender === "You" ? "user-message" : "bot-message"
    }`}
  >
    <strong>{msg.sender}</strong>
    <br />
    {msg.text}
  </div>
))}
        </div>

        <div className="ares-input">

          <button>🎤</button>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Type your command..."
          />

          <button onClick={sendMessage}>
            Send
          </button>

        </div>

      </div>

    </div>

  </div>
);
}

export default Ares;