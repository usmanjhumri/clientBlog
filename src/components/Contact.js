import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <p>Contact us</p>
        <h2>Let’s Start a Conversation</h2>
      </div>
      <div className="container">
        <div className="contactForm">
          <div className="box">
            <div className="icon1">
              <AiOutlineMail />
            </div>
            <div className="text">
              <p>aziz@shakarzahillc.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon1">
              <AiOutlineMail />
            </div>
            <div className="text">
              <p>legal@shakarzahillc.com</p>
            </div>
          </div>
          <form action="">
            <div className="inputBox">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required />
              <span>Your Email</span>
            </div>
            <div className="inputBox">
              <textarea required></textarea>
              <span>Message</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
