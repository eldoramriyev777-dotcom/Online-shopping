import { Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { Snackbar, Alert } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

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

const PaymentComponent = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const navigate = useNavigate();
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [open, setOpen] = useState(false);


const handleBack = () => {
  navigate("/cart");
}
const handleProceedToPay = () => {
  setOpen(true);
  setTimeout(() => {
    navigate("/home");
  }, 3000);
}
const handleClose = (event, reason) => {
  if (reason === "clickaway") return;
  setOpen(false);
};
const handleBackToShipping = () => {
  navigate("/shipping");
}


const [cart, setCart] = useState([]);
const [promo, setPromo] = useState("");
const [discount, setDiscount] = useState(0);

useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("cart")) || [];
  const normalized = stored.map((item, index) => ({
    ...item,
    qty: item.qty || 1,
    id: item.id || index + 1,
  }));
  setCart(normalized);
}, []);

const updateCart = (updated) => {
  setCart(updated);
  localStorage.setItem("cart", JSON.stringify(updated));
};

const handleQty = (id, delta) => {
  const updated = cart.map((item) =>
    item.id === id
      ? { ...item, qty: Math.max(1, item.qty + delta) }
      : item
  );
  updateCart(updated);
};

const handleDelete = (id) => {
  const updated = cart.filter((item) => item.id !== id);
  updateCart(updated);
};

const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
const shipping = subtotal > 200 ? 0 : 9.99;
const total = subtotal - discount + shipping;

const applyPromo = () => {
  if (promo.toLowerCase() === "eldor10") {
    setDiscount(subtotal * 0.1);
  } else if (promo.toLowerCase() === "free") {
    setDiscount(subtotal);
  } else {
    setDiscount(0);
  }
};


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
            <Label hasValue={nameOnCard !== ""} >Name on card</Label>
            <Input
            type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <InputWrapper>
            <Label hasValue={cardNumber !== ""}>Card number</Label>
            <Input
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <InputWrapper>
            <Label hasValue={expirationDate !== ""}>Expiration date (MM / YY)</Label>
            <Input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label hasValue={securityCode !== ""}>Security code (CVV)</Label>
            <Input
            type="text"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)} 
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
          <button onClick={handleBackToShipping} className="backBtn">Back</button>
          <button onClick={handleProceedToPay} className="payBtn">Pay</button>
        </div>

        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert 
          onClose={handleClose} 
          severity="success" 
          variant="filled"
          sx={{ width: "100%" }}
        >
          Payment done!
        </Alert>
      </Snackbar>

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
    <Typography variant="h5" fontWeight={700} mb={3}>
      Shopping Cart
    </Typography>

    {/* PRODUCT LIST */}
    {cart.map((item) => (
      <Box
        key={item.id}
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
          p: 2,
          borderRadius: 2,
          bgcolor: "#f9f9f9",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          width={90}
          height={90}
          style={{ borderRadius: 12, objectFit: "cover" }}
        />

        <Box sx={{ flexGrow: 1 }}>
          <Typography fontWeight={600}>{item.title}</Typography>

          {item.size && (
            <Typography fontSize={14} color="gray">
              Size: {Array.isArray(item.size) ? item.size[0] : item.size}
            </Typography>
          )}

          {item.oldPrice && (
            <Typography
              sx={{
                textDecoration: "line-through",
                fontSize: 14,
                color: "#888",
                mt: 0.5,
              }}
            >
              ${item.oldPrice}
            </Typography>
          )}

          <Typography fontWeight={700} fontSize={18}>
            ${item.price}
          </Typography>

          {/* QTY Faqat ko‘rsatish (o‘zgartirish bo‘lmaydi) */}
          <Typography sx={{ mt: 1, fontWeight: 600 }}>
            Qty: {item.qty}
          </Typography>
        </Box>

        {/* Delete button mumkin bo‘lsa qoldirdim */}
        <IconButton onClick={() => handleDelete(item.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </Box>
    ))}

    <Divider sx={{ my: 2 }} />

    {/* PROMO CODE */}
    <Typography fontWeight={600} mb={1}>
      Promo Code
    </Typography>

    <Box sx={{ display: "flex", gap: 1 }}>
      <TextField
        fullWidth
        placeholder="Enter promo code"
        value={promo}
        onChange={(e) => setPromo(e.target.value)}
      />
      <Button variant="contained" onClick={applyPromo}>
        Apply
      </Button>
    </Box>

    <Divider sx={{ my: 3 }} />

    {/* PRICE SUMMARY */}
    <Typography fontWeight={600} mb={1}>
      Order Summary
    </Typography>

    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Typography color="gray">Subtotal</Typography>
      <Typography>${subtotal.toFixed(2)}</Typography>
    </Box>

    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Typography color="gray">Discount</Typography>
      <Typography>-${discount.toFixed(2)}</Typography>
    </Box>

    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Typography color="gray">Shipping</Typography>
      <Typography>{shipping === 0 ? "FREE" : `$${shipping}`}</Typography>
    </Box>

    <Divider sx={{ my: 2 }} />

    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography fontWeight={700} fontSize={20}>
        Total
      </Typography>
      <Typography fontWeight={700} fontSize={20}>
        ${total.toFixed(2)}
      </Typography>
    </Box>
  </Paper>
</Right>
      </BottomWrap>
    </Container>
  );
};

export default PaymentComponent;
