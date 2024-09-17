import "./About.css";
import Chatpop from "../Chatpopup/chatpop";
const About = () => {
  return (
    <div className="a">
      <div className="about-us">
        <hr></hr>
        <h2>About Us</h2>
        <hr></hr>
        <p>
          Welcome to our website! We are a group of enthusiastic IT students
          from Vidyalankar Polytechnic. Allow us to introduce ourselves:
          Mohammed Hassan Qureshi, Manav Chudasama, and Mohammed Rumaan Shaikh.
          Currently in our third year of studies, we are passionate about the
          field of technology and committed to honing our skills to make a
          positive impact.
        </p>
        <p>
          Being IT students at Vidyalankar Polytechnic has provided us with a
          strong foundation in various technical aspects. We have gained a
          comprehensive understanding of programming languages, data structures,
          algorithms, and more. These skills have enabled us to take on the
          challenge of building a sophisticated chatbot that can effectively
          understand and respond to user queries.
        </p>
        <p>
          As a socially responsible company, we actively contribute to the
          communities we operate in and promote sustainable practices. We value
          diversity and inclusion, fostering an environment where every team
          members contributions are valued and respected.
        </p>
        <h3 id="we">Our Mission</h3>
        <p>
          Our primary focus and ongoing project revolve around the development
          of a customer support chatbot. We recognize the increasing demand for
          efficient and automated customer service, and our aim is to create a
          chatbot that can provide seamless assistance to users. Through our
          website, we aspire to enhance the overall user experience by offering
          a reliable and user-friendly customer support system.
        </p>
        <div className="b">
          <h3 id="cs">Our Values</h3>
          <ul>
            <li>
              Excellence: We strive for excellence in all aspects of our
              business.
            </li>
            <li>
              Customer Satisfaction: We prioritize customer satisfaction and go
              the extra mile to meet their expectations.
            </li>
            <li>
              Innovation: We embrace innovation and constantly seek new ways to
              improve and stay ahead.
            </li>
            <li>
              Social Responsibility: We are committed to being a responsible
              corporate citizen and making a positive impact.
            </li>
            <li>
              Teamwork: We value collaboration and teamwork, recognizing that
              our collective efforts lead to greater success.
            </li>
          </ul>
        </div>
      </div>
      <Chatpop />
    </div>
  );
};

export default About;
