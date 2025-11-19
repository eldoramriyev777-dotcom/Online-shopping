import { Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Done } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 33px;
  min-width: 100vh;
  min-height: 100vh;
`;
const Header = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
.steps{
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: center;
  .step{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .doneStep{
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #AEEA00;
  }
  .undoneStep{
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DCDCDC;
  }
}
`
const BottomWrap = styled.div`
display: flex;
gap: 70px;
justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  border-radius: 15px;
`;

const Right = styled.div`
  flex: 1;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;


  @media (max-width: 900px) {
    height: 400px;
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  color: var(--black, #000);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 32px; /* 100% */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  margin-bottom: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 55px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0 5px 0;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  background: transparent;
  transition: 0.2s;

  &:focus {
    border-color: #ff5a00;
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #777;
  transition: 0.2s ease;
  pointer-events: none;

  ${InputWrapper}:focus-within & {
    top: 0;
    font-size: 11px;
    color: #ff5a00;
  }

  /* Inputda text bo‘lsa ham yuqorida turishi uchun */
  ${({ hasValue }) =>
    hasValue &&
    `
    top: 0;
    font-size: 11px;
    color: #000;
  `}
`;

const ShippingOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin-top: 10px;
  border-radius: 15px;
  background-color: var(--Gray-bg, #F5F6F6);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border-color: #ff5a00;
    background-color: #fff4e6;
  }
`;

const ContinueButton = styled.button`
  margin-top: 25px;
  padding: 15px 0;
  display: flex;
  width: 200px;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  background: #ff5a00;
  color: white;
  border: none;
  border-radius: 90px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 90, 0, 0.4);
  }
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ShippingPage = () => {

  const [shippingMethod, setShippingMethod] = useState("standard");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");

  const handleBack = () => {
  navigate("/cart");
}

  const handlePayment = () => {
  navigate("/shopping-payment");
}

  return (
    <Container>
      <Header>
        <Button onClick={handleBack} sx={{display: "flex", gap: "10px", backgroundColor: "transparent", color: "black"}}> <ArrowBackIcon /> Back cart</Button>
        <div className="steps">
          <div className="step">
           <div className="doneStep"><Done /></div>  <p>Login</p>
          </div>
          <Divider sx={{width: "60px"}} />
          <div className="step">
            <div className="doneStep">2</div>  <p>Shipping adress</p>
          </div>
          <Divider sx={{width: "60px"}} />
          <div className="step">
            <div className="undoneStep">3</div>  <p>Billing Address</p>
          </div>
        </div>
      </Header>
      <Divider sx={{m: -2}} /> 
      <BottomWrap>
      <Left>
      <Title>Shipping Address</Title>
        <Form>
          <InputGroup>
          <InputWrapper>
            <Label hasValue={firstName !== ""}>First Name</Label>
            <Input
            type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label hasValue={firstName !== ""}>Last Name</Label>
            <Input
            type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <InputWrapper>
            <Label hasValue={firstName !== ""}>Company</Label>
            <Input
            type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label hasValue={firstName !== ""}>Country / Region</Label>
            <Input
            type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <InputWrapper>
            <Label hasValue={firstName !== ""}>Address</Label>
            <Input
            type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label hasValue={firstName !== ""}>Apartment, suite, etc.</Label>
            <Input
            type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <InputWrapper>
            <Label hasValue={firstName !== ""}>City</Label>
            <Input
            type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label hasValue={firstName !== ""}>Zip code</Label>
            <Input
            type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <InputWrapper>
            <Label hasValue={firstName !== ""}>Phone number</Label>
            <Input
            type="tel"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label hasValue={firstName !== ""}>Email address</Label>
            <Input
            type="email"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
          <Typography>Shipping method</Typography>
          <ShippingOption
            selected={shippingMethod === "standard"}
            onClick={() => setShippingMethod("standard")}
          >
            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <input name="shippingMethod" type="radio" />
            <p style={{display: "flex", flexDirection: "column"}}> <small>Standard Shipping</small> <span>2 to 5 business days</span></p>
            </div>
            <span>Free</span>
          </ShippingOption>
          <ShippingOption
            selected={shippingMethod === "express"}
            onClick={() => setShippingMethod("express")}
          >
            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <input name="shippingMethod" type="radio" />
            <p style={{display: "flex", flexDirection: "column"}}> <small>Express Shipping</small> <span>1 to 2 business days</span></p>
            </div>
            <span>$10</span>
          </ShippingOption>

          <ContinueButton onClick={handlePayment}>Continue</ContinueButton>
        </Form>
      </Left>

      <Right>
        <MapIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531785!3d-37.81627974202156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f9e1db%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        />
      </Right>
      </BottomWrap>
    </Container>
  );
};

export default ShippingPage;
