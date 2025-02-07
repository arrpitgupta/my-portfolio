import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState(null);

  const onFormUpdate = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    const emailParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    setButtonText("Sending...");

    emailjs
      .send(serviceID, templateID, emailParams, userID)
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setStatus({ success: true, message: "Message sent successfully!" });
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus({ success: false, message: "Failed to send message. Please try again." });
        }
      )
      .finally(() => {
        setButtonText("Send");
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formData.firstName} placeholder="First Name" name="firstName" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formData.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" value={formData.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="tel" value={formData.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)} />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="6" value={formData.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
