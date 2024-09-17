import "./Chatpop.css";
import { useEffect } from "react";
import { useState } from "react";
// import "./Chat.css";
// import Navbar from "../Navbar/Navbar";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // organization: "",
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function Chatpop() {
  useEffect(() => {
    const chatwindow = document.getElementById("window");
    function handlepop() {
      chatwindow.classList.toggle("chatpop");
    }

    const chatButton = document.querySelector(".open-chat-button");
    chatButton.addEventListener("click", handlepop);

    return () => {
      chatButton.removeEventListener("click", handlepop);
    };
  }, []);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e) => {
    e.preventDefault();

    if (!message) return;

    setIsTyping(true);

    let msgs = [...chats, { role: "user", content: message }];
    setChats(msgs);

    setMessage("");

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Welcome to Roman Shoes! We are a shoe shop located in Jogeshwari East, near the Western Express Highway. At Roman Shoes, we offer a wide range of shoe categories to cater to all your footwear needs. Whether you're looking for stylish sneakers, trendy boots, elegant heels, comfortable flats, fashionable sandals, classy formal shoes, reliable sports shoes, or adorable shoes for children, we have it all. Our collection features the latest designs, high-quality materials, and comfortable fits. Feel free to ask any questions or inquire about our products. We are here to assist you and provide you with the best shoe shopping experience. Act as a customer support Chatbot and if their is something that u can't help the customer with, in that case provide my contact info: email: romanshoes@hotmail.com and phone no. 01125532553. thanks",
          },
          ...msgs,
        ],
      });

      const aiMessage = response.data.choices[0].message;
      msgs.push(aiMessage);
      setChats(msgs);
    } catch (error) {
      console.log(error);
    }

    setIsTyping(false);
    scrollTo(0, 1e10);
  };

  const renderChats = () => {
    return chats.map((chat, index) => (
      <p key={index} className={chat.role === "user" ? "user_msg" : "bot"}>
        <span>
          <b>{chat.role.toUpperCase()}</b>
        </span>
        <span>:</span>
        <span style={{ padding: "0 10px" }}>{chat.content}</span>
      </p>
    ));
  };
  return (
    <>
      <div className="chat-popup">
        <div id="window" className="chat-window chatpop">
          <div
            style={{
              height: "50px",
              boxSizing: "border-box",
              padding: "15px",
            }}
          >
            AI Spark ChatBot
          </div>
          <div className="chat-box">
            <div>{chats.length > 0 && renderChats()}</div>
            <div className={isTyping ? "" : "hide"}>
              <p>
                <i>{isTyping ? "Typing" : ""}</i>
              </p>
            </div>
          </div>
          <div className="imp chat-input">
            <form onSubmit={chat}>
              <input
                type="text"
                name="message"
                value={message}
                placeholder="Type a message here and hit Enter..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </form>
            {/* <button className="char-input">send</button> */}
          </div>
        </div>
      </div>
      <button className="open-chat-button">chat</button>
    </>
  );
}
