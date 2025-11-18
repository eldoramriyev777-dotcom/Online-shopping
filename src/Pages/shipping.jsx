import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  font-family: 'Arial', sans-serif;
  gap: 50px;
  background-color: #f8f9fa;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
`;

const Right = styled.div`
  flex: 1;
  height: 600px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    height: 400px;
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 25px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
  &:focus {
    border-color: #ff5a00;
    box-shadow: 0 0 5px rgba(255, 90, 0, 0.3);
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #555;
`;

const ShippingOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin-top: 10px;
  border: 1px solid ${({ selected }) => (selected ? "#ff5a00" : "#ddd")};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#fff4e6" : "#fff")};
  transition: all 0.2s;
  &:hover {
    border-color: #ff5a00;
    background-color: #fff4e6;
  }
`;

const ContinueButton = styled.button`
  margin-top: 25px;
  padding: 15px 0;
  font-size: 18px;
  background: linear-gradient(90deg, #ff5a00 0%, #ff8a00 100%);
  color: white;
  border: none;
  border-radius: 10px;
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

  return (
    <Container>
      <Left>
        <Title>Shipping Address</Title>
        <Form>
          <InputGroup>
            <div style={{ flex: 1 }}>
              <Label>First Name</Label>
              <Input placeholder="Marvin" />
            </div>
            <div style={{ flex: 1 }}>
              <Label>Last Name</Label>
              <Input placeholder="Antonio" />
            </div>
          </InputGroup>
          <Input placeholder="Company" />
          <Input placeholder="Country / Region" />
          <Input placeholder="Address" />
          <Input placeholder="Apartment, suite, etc." />
          <Input placeholder="City" />
          <Input placeholder="Zip code" />
          <Input placeholder="Phone number" />
          <Input placeholder="Email address" />

          <Label>Shipping Method</Label>
          <ShippingOption
            selected={shippingMethod === "standard"}
            onClick={() => setShippingMethod("standard")}
          >
            <span>Standard Shipping (2 to 5 business days)</span>
            <span>Free</span>
          </ShippingOption>
          <ShippingOption
            selected={shippingMethod === "express"}
            onClick={() => setShippingMethod("express")}
          >
            <span>Express Shipping (1 to 2 business days)</span>
            <span>$10</span>
          </ShippingOption>

          <ContinueButton>Continue</ContinueButton>
        </Form>
      </Left>

      <Right>
        <MapIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531785!3d-37.81627974202156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f9e1db%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        />
      </Right>
    </Container>
  );
};

export default ShippingPage;
