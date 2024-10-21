import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import MailchimpForm from "./MailchimpForm";

export default function Footer ()  {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm/> */}
          <Col size={12} sm={6}>
          Arpit&apos;s Portfolio
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-4">
            <div className="social-icon">
              <a href="https://github.com/arrpitgupta"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/rockstar.arpit.17200"><img src={navIcon2} alt="Icon" /></a>
              <a target="" href="https://www.linkedin.com/in/arpit-gupta-0a75a2227/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>© Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
