import React from "react";
import styled from "styled-components";
import { FaInstagram, FaTelegramPlane, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import visa from "../assets/home_assets/visa.svg";
import mastercard from "../assets/home_assets/mastercard.svg";
import paypal from "../assets/home_assets/paypal.svg";
import gpay from "../assets/home_assets/gpay.svg";

const FooterContainer = styled.footer`
  padding: 25px 20px;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  font-family: Arial, sans-serif;

  h4 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p,
  a {
    font-size: 14px;
    color: #000;
    text-decoration: none;
    line-height: 1.8;
  }

  a:hover {
    text-decoration: underline;
  }

  .social-icons {
    display: flex;
    gap: 15px;
    font-size: 18px;
  }

  .payment-icons {
    display: flex;
    gap: 10px;
    margin-top: 10px;

    img {
      width: 40px;
      height: auto;
      object-fit: contain;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h4>CUSTOMER CARE</h4>
        <p>Address: 4140 Parker Rd. Allentown, New York 31134</p>
        <p>Call now: +31 (0) 20 775 99 77</p>
        <p>Email: blossomshop@example.com</p>
      </div>

      <div>
        <h4>OUR COMPANY</h4>
        <a href="#">About us</a>
        <br />
        <a href="#">Find a Store</a>
        <br />
        <a href="#">Careers</a>
      </div>

      <div>
        <h4>LEGAL AREA</h4>
        <a href="#">Cookie Policy</a>
        <br />
        <a href="#">Terms of Use</a>
        <br />
        <a href="#">Conditions of Sale</a>
        <br />
        <a href="#">Privacy</a>
      </div>

      <div>
        <h4>CONTACT US</h4>
        <div className="social-icons">
          <FaInstagram />
          <FaTelegramPlane />
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
        <h4 style={{ marginTop: "20px" }}>PAYMENT METHODS</h4>
        <div className="payment-icons">
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
          <img src={paypal} alt="paypal" />
          <img src={gpay} alt="gpay" />
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
