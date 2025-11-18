import React from "react";
import { Drawer, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MiniCart = ({ cartOpen, setCartOpen, cart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    setCartOpen(false);        // Mini cart yopiladi
    navigate("/cart");         // cart.jsx sahifaga o'tadi
  };

  return (
    <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
      <Box sx={{ width: 350, padding: 2 }}>
        <h3>Shopping Cart</h3>

        {/* Cart itemlar */}
        {cart.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            {item.name} - ${item.price}
          </div>
        ))}

        {/* Checkout button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </Box>
    </Drawer>
  );
};

export default MiniCart;
