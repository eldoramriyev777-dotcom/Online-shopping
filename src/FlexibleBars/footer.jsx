import React from "react";
import styled from "styled-components";
import { FaInstagram, FaTelegramPlane, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import visa from "../assets/home_assets/visa.svg";
import mastercard from "../assets/home_assets/mastercard.svg";
import paypal from "../assets/home_assets/paypal.svg";
import gpay from "../assets/home_assets/gpay.svg";

const AllFooterWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
 const SubscribeWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 25px auto;
`;

 const SubscribeInner = styled.div`
  background-color: var(--Grey-F7F7F7, #F7F7F7);
  border-radius: 15px;
  padding: 34px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

 const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    color: var(--Black, #000);
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 142.857% */
    letter-spacing: -0.28px;
  }

  p {
    color: var(--Dark-Color-202020, #202020);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 120% */
    letter-spacing: -0.15px;
  }
`;

 const FormArea = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;

  input {
    width: 448px;
    padding: 12px 0px;
    border: none;
    background-color: transparent;
    outline: none;
    width: 250px;
    font-size: 15px;
    border-bottom: 1px solid #333;
  }

  button {
    padding: 12px 24px;
    border: none;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
    width: 137px;
    border-radius: 97px;
    background-color: var(--Dark-Color-202020, #202020);
  }

  button:hover {
    background-color: #333;
  }
`;

const FooterContainer = styled.footer`
  padding: 25px 20px;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  h4 {
    color: var(--Black, #000);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  p,
  a {
    color: var(--Black, #000);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    color: orange;
  }

  .social-icons {
    display: flex;
    gap: 24px;
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
    <AllFooterWrap>
       <SubscribeWrapper>
      <SubscribeInner>
        <TextArea>
          <h3>Get a discount for the first order</h3>
          <p>Subscribe to our news and special offers</p>
        </TextArea>

        <FormArea>
          <input type="email" placeholder="Enter your email" />
          <button>Shop now</button>
        </FormArea>
      </SubscribeInner>
      </SubscribeWrapper>
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
    </AllFooterWrap>
  );
};

export default Footer;
