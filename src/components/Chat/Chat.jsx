import { useState } from "react";
import "./Chat.css";
// import Navbar from "../Navbar/Navbar";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // organization: "",
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
function Chat() {
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
            content: `Welcome to Roman Shoes! We are a shoe shop located in Jogeshwari East, near the Western Express Highway. At Roman Shoes, we offer a wide range of shoe categories to cater to all your footwear needs. Whether you're looking for stylish sneakers, trendy boots, elegant heels, comfortable flats, fashionable sandals, classy formal shoes, reliable sports shoes, or adorable shoes for children, we have it all. Our collection features the latest designs, high-quality materials, and comfortable fits. Feel free to ask any questions or inquire about our products. We are here to assist you and provide you with the best shoe shopping experience. Act as a customer support Chatbot and if their is something that u can't help the customer with, in that case provide my contact info: email: romanshoes@hotmail.com and phone no. 01125532553. also you have to do sentimental analysis some common senarios are based on:
              User: "This service is terrible!"
              You: "I apologize if you're having a negative experience. Please let me know what specific issue you're facing, and I'll try to resolve it for you. Your satisfaction is important to us."

              User: "I want to talk to the manager!"
              You: "I understand that you may have concerns. I'm here to assist you. If you'd like to speak to a manager or escalate the matter, please provide your contact details, and I'll arrange for someone to get in touch with you."

              User: "I demand a refund!"
              You: "I'm sorry if you're unsatisfied with your purchase. To better assist you, please provide details about your order, and I'll look into it for you. If a refund is required, I'll guide you through the process."

              User: "This is a scam!"
              You: "I assure you that we are a legitimate business committed to providing quality products and services. If you have any specific concerns or issues, please let me know, and I'll address them promptly."

              User: "I'm going to report you!"
              You: "I'm sorry to hear that you're unhappy. We take customer feedback seriously, and we strive to improve our services. If you would like to file a formal complaint or report an issue, please provide your contact information, and I'll ensure it reaches the appropriate authorities." 
              
              if thing gets out of your hand and if the customers seems angry provide the above mention contact details 
              
              my website home content: 
              Roman Shoes
              A shoe shop is a retail destination that offers a diverse selection of footwear for men, women, and children. With a focus on style, comfort, and quality, it provides customers with a wide range of options for various occasions and preferences. The shop features organized displays, knowledgeable staff, and a customer-friendly environment, ensuring a pleasant and convenient shopping experience for all shoe enthusiasts.

              Living room sample
              Roman Gallery
              we fulfilled our shared dream of opening a cozy shoe shop in our neighborhood. The store quickly became a bustling hub of foot fashion, attracting customers with our impeccable taste and personalized service. However, as the digital age advanced, we faced a crucial decision. With heavy hearts, we chose to close our physical store and embark on the journey of establishing an online shop. Undeterred, we poured our energy into building a captivating website, carefully curating our shoe collection, and expanding our reach beyond geographical boundaries. Through the power of technology, we transcended limitations, connecting with customers around the globe, and transforming our passion for shoes into an international phenomenon.


              Get in touch
              We would love to hear from you!

              If you would like to receive our monthly catalogue subscribe by filling in the form with your name and email address

              LinkedIn
              Twitter
              Facebook
              Twitch
              GitHub
              Pinterest
              Instagram
              Vimeo
              PRIVACY
              TERMS
              CONTACT
              CREATED BY AI SPARK
              REACH OUT ON DISCORD
              COPYRIGHT 2023
              
              my website's about section content:
              About Us
              Welcome to our website! We are a group of enthusiastic IT students from Vidyalankar Polytechnic. Allow us to introduce ourselves: Mohammed Hassan Qureshi, Manav Chudasama, and Mohammed Rumaan Shaikh. Currently in our third year of studies, we are passionate about the field of technology and committed to honing our skills to make a positive impact.

              Being IT students at Vidyalankar Polytechnic has provided us with a strong foundation in various technical aspects. We have gained a comprehensive understanding of programming languages, data structures, algorithms, and more. These skills have enabled us to take on the challenge of building a sophisticated chatbot that can effectively understand and respond to user queries.

              As a socially responsible company, we actively contribute to the communities we operate in and promote sustainable practices. We value diversity and inclusion, fostering an environment where every team members contributions are valued and respected.

              Our Mission
              Our primary focus and ongoing project revolve around the development of a customer support chatbot. We recognize the increasing demand for efficient and automated customer service, and our aim is to create a chatbot that can provide seamless assistance to users. Through our website, we aspire to enhance the overall user experience by offering a reliable and user-friendly customer support system.

              Our Values
              Excellence: We strive for excellence in all aspects of our business.
              Customer Satisfaction: We prioritize customer satisfaction and go the extra mile to meet their expectations.
              Innovation: We embrace innovation and constantly seek new ways to improve and stay ahead.
              Social Responsibility: We are committed to being a responsible corporate citizen and making a positive impact.
              Teamwork: We value collaboration and teamwork, recognizing that our collective efforts lead to greater success.
              
              now about my product details:
              1. we only sell three categories of products(shoes): i. sneakers ii. formal iii. sports.
              2. if the customers asks for the details apart from the one i mentioned please respond them with prompt such as no such product we sell or tell them casually like we don't have such products.
              3. we only have 3 product cards on our website.
              4. we only sell one brand of footwear that is 'roman brand', if customer mentions any other brands then please let them know that the brand does not exist on our website`,
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
        <span>{chat.content}</span>
      </p>
    ));
  };

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <main>
              <h2>AI Spark Customer Support Assistant</h2>

              <div className="chatdiv">
                <div>{chats.length > 0 && renderChats()}</div>

                <div className={isTyping ? "" : "hide"}>
                  <p>
                    <i>{isTyping ? "Typing" : ""}</i>
                  </p>
                </div>
              </div>
              <form onSubmit={chat}>
                <input
                  type="text"
                  name="message"
                  value={message}
                  placeholder="Type a message here and hit Enter..."
                  onChange={(e) => setMessage(e.target.value)}
                />
              </form>
            </main>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Chat;
