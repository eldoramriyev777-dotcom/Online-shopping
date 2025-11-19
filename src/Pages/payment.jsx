import { Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Done } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import paypal from "../assets/payment_assets/paypal.svg";
import googlePay from "../assets/payment_assets/googlePay.svg";
import zip from "../assets/payment_assets/zip.svg";
import {
  Box,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  .buttons{
    .backBtn{
      display: flex;
      width: 160px;
      padding: 15px 53px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 30px;
      border: 1px solid var(--Black, #000);
      color: var(--Black, #000);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 128.571% */
      background-color: transparent;
      cursor: pointer;
      transition: all 0.3s;
      &:hover{
        background-color: #f5f5f5;
          }
}
    .payBtn{
      display: flex;
      width: 160px;
      height: 48px;
      padding: 19px 50px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 90px;
      background-color: var(--Brand-Color-F54F1F, #F54F1F);
      border: none;
      color: #FFF;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      cursor: pointer;
      transition: all 0.3s;
      &:hover{
        background-color: #ff5a00;
      }
    }
}
`

const Right = styled.div`
  flex: 1;
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
  margin: 20px 0;
`;
const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  margin-bottom: 30px;
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
    color: #ff5a00;
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

const PaymentComponent = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const navigate = useNavigate();
const handleBack = () => {
  navigate("/cart");
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
            <div className="doneStep"><Done /></div>  <p>Shipping adress</p>
          </div>
          <Divider sx={{width: "60px"}} />
          <div className="step">
            <div className="doneStep">3</div>  <p>Billing Address</p>
          </div>
        </div>
      </Header>
      <Divider sx={{m: -2}} /> 
      <BottomWrap>
      <Left>
      <Title>Payment Information</Title>
      <ShippingOption
            selected={shippingMethod === "express"}
            onClick={() => setShippingMethod("express")}
          >
            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <input name="card" type="radio" />
            <p>Credit Card</p>
            </div>
           <Button startIcon={<CreditCardIcon/>}></Button>
        </ShippingOption>
        
        <Form>
          <InputGroup>
          <InputWrapper>
            <Label >Name on card</Label>
            <Input
            type="text"
              // value={firstName}
              // onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <InputWrapper>
            <Label >Card number</Label>
            <Input
            type="number"
              // value={firstName}
              // onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <InputWrapper>
            <Label >Expiration date (MM / YY)</Label>
            <Input
            type="text"
              // value={firstName}
              // onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label >Security code (CVV)</Label>
            <Input
            type="text"
              // value={lastName}
              // onChange={(e) => setLastName(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
        </Form>

        <ShippingOption
            selected={shippingMethod === "express"}
            onClick={() => setShippingMethod("express")}
          >
            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <input name="paymentMethod" type="radio" />
            <p>Paypal</p>
            </div>
           <Button> <img src={paypal} alt="paypal"/> </Button>
        </ShippingOption>

        <ShippingOption
            selected={shippingMethod === "express"}
            onClick={() => setShippingMethod("express")}
          >
            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <input name="paymentMethod" type="radio" />
            <p>Google Pay</p>
            </div>
           <Button> <img src={googlePay} alt="googlePay"/> </Button>
        </ShippingOption>

        <ShippingOption
            selected={shippingMethod === "express"}
            onClick={() => setShippingMethod("express")}
          >
            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <input name="paymentMethod" type="radio" />
            <p>Zip - Buy one, pay later</p>
            </div>
           <Button> <img src={zip} alt="zip"/> </Button>
        </ShippingOption>

        <div className="buttons" style={{display: "flex", gap: "20px", justifyContent: "left", alignItems: "center", marginTop: "30px"}}>
          <button className="backBtn">Back</button>
          <button className="payBtn">Pay</button>
        </div>

      </Left>

      <Right>
      <Paper
        elevation={0}
        sx={{
          width: 420,
          borderRadius: "20px",
          p: 3,
          backgroundColor: "#fff",
          border: "1px solid #f1f1f1",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* PRODUCT ITEM 1 */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <img
            src="https://i.imgur.com/pDl6Z8K.jpeg"
            alt="item"
            width={80}
            height={80}
            style={{ borderRadius: 12, objectFit: "cover" }}
          />
          <Box>
            <Typography fontWeight={600}>
              Blouse BAON, women, color Blue
            </Typography>
            <Typography fontSize={14} color="gray">
              Size: XS • Colour: thunder
            </Typography>
            <Typography
              sx={{
                textDecoration: "line-through",
                fontSize: 14,
                color: "#888",
                mt: 0.5,
              }}
            >
              $ 175.00
            </Typography>
            <Typography fontWeight={700} fontSize={18}>
              $ 120.00
            </Typography>
          </Box>
        </Box>

        {/* PRODUCT ITEM 2 */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <img
            src="https://i.imgur.com/EFVn8qu.jpeg"
            alt="item"
            width={80}
            height={80}
            style={{ borderRadius: 12, objectFit: "cover" }}
          />
          <Box>
            <Typography fontWeight={600}>
              Blouse BAON, women, color Blue
            </Typography>
            <Typography fontSize={14} color="gray">
              Size: XS • Colour: thunder
            </Typography>
            <Typography
              sx={{
                textDecoration: "line-through",
                fontSize: 14,
                color: "#888",
                mt: 0.5,
              }}
            >
              $ 175.00
            </Typography>
            <Typography fontWeight={700} fontSize={18}>
              $ 120.00
            </Typography>
          </Box>
        </Box>

        {/* PROMO CODE INPUT */}
        <Typography fontSize={14} color="#777">
          Promo code
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <TextField
            fullWidth
            placeholder="200"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <IconButton sx={{ ml: -6 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* SUMMARY SECTION */}
        <Box sx={{ mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1.5,
              fontSize: 16,
            }}
          >
            <Typography color="#444">2 Products • 0,2 kg</Typography>
            <Typography>$240</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1.5,
            }}
          >
            <Typography color="#444">Promo code</Typography>
            <Typography sx={{ color: "red" }}>- $10</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography color="#444">Discounts</Typography>
            <Typography sx={{ color: "red" }}>- $40</Typography>
          </Box>

          <Divider sx={{ my: 1.5 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Typography fontWeight={600} fontSize={20}>
              Total
            </Typography>
            <Typography fontWeight={800} fontSize={28}>
              $190
            </Typography>
          </Box>
        </Box>
      </Paper>
      </Right>
      </BottomWrap>
    </Container>
  );
};

export default PaymentComponent;
