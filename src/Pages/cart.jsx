import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  Divider,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NavbarComponent from "../FlexibleBars/navbar";
import { HeaderCart } from "./cartStyle";
import Footer from "../FlexibleBars/footer";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert, Button } from "@mui/material";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState([]);

  const activeColor = "Blue"; // Misol uchun
  const activeSize = "M";     // Misol uchun

  // Component mount bo‘lganda localStorage’dan o‘qish
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartWithQty = storedCart.map((item, index) => ({
      ...item,
      qty: item.qty || 1,
      id: item.id || index + 1,
    }));
    setCart(cartWithQty);
    setSelected(cartWithQty.map((item) => item.id));
  }, []);

  // localStorage yangilash
  const updateCartStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Qty o‘zgartirish
  const handleQtyChange = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    );
    updateCartStorage(updatedCart);
  };

  // Delete item
  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setSelected((prev) => prev.filter((itemId) => itemId !== id));
    updateCartStorage(updatedCart);
  };

  // Delete selected items
  const handleDeleteSelected = () => {
    const updatedCart = cart.filter((item) => !selected.includes(item.id));
    setSelected([]);
    updateCartStorage(updatedCart);
  };

  // Select / Select all
  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selected.length === cart.length) setSelected([]);
    else setSelected(cart.map((item) => item.id));
  };

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.productId === product.id &&
          item.color === activeColor &&
          item.size === activeSize
      );

      if (existingIndex !== -1) {
        // Shu item allaqachon mavjud, faqat qty oshirish
        const updatedCart = [...prevCart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          qty: updatedCart[existingIndex].qty + 1,
        };
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // Yangi item qo‘shish
        const maxId =
          prevCart.length > 0 ? Math.max(...prevCart.map((i) => i.id)) : 0;
        const cartItem = {
          id: maxId + 1,
          productId: product.id,
          name: product.name,
          price: product.price,
          color: activeColor,
          size: activeSize,
          image: `https://picsum.photos/seed/${product.id}/300/400`,
          qty: 1,
        };
        const updatedCart = [...prevCart, cartItem];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  // Total hisoblash (discount bo‘lsa hisoblash mumkin)
  const total = cart
    .filter((item) => selected.includes(item.id))
    .reduce(
      (acc, item) =>
        acc + (item.price * (1 - (item.discount || 0) / 100)) * item.qty,
      0
    );

    const [disabledBtn, setDisabledBtn] = useState(false);
    const navigate = useNavigate()
    const [snack, setSnack] = useState(false);

    const handleShipping = () => {
      setDisabledBtn(true);
      setSnack(true);
      setTimeout(() => {
        navigate("/shipping");
      }, 1000);
    }
    const handleCloseSnack = (event, reason) => {
      if (reason === "clickaway") return;
      setOpen(false);
    };

  return (
    <div>
      <NavbarComponent />
      <HeaderCart>
        <div>
          <h3>Shopping Cart</h3>
          <p>
            {cart.length} {cart.length === 1 ? "item" : "items"}
          </p>
        </div>
      </HeaderCart>
      <Box display="flex" gap={4} p={4}>
        {/* Left Cart Items */}
        <Box flex={3}>
          <Box
            sx={{ backgroundColor: "#F7F7F7", padding: "20px", borderRadius: "15px" }}
            display="flex"
            alignItems="center"
            mb={2}
            gap={2}
          >
            <Checkbox
              checked={selected.length === cart.length && cart.length > 0}
              onChange={handleSelectAll}
            />
            <Typography>Select all</Typography>
            <Button
              startIcon={<DeleteIcon />}
              onClick={handleDeleteSelected}
              disabled={selected.length === 0}
            >
              Delete selected
            </Button>
          </Box>

          <Divider />

          {cart.length === 0 ? (
            <Typography mt={2}>Your cart is empty.</Typography>
          ) : (
            cart.map((item) => (
              <Box
                key={item.id}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                py={2}
              >
                <Checkbox
                  checked={selected.includes(item.id)}
                  onChange={() => handleSelect(item.id)}
                />
                <Box display="flex" alignItems="center" gap={2}>
                  <img
                    style={{ borderRadius: "20px" }}
                    src={item.image}
                    alt={item.name}
                    width={80}
                  />
                  <Box>
                    <Typography fontWeight={500}>{item.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Size: {item.size} • Colour: {item.color}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ backgroundColor: "#F7F7F7", padding: "2px", borderRadius: "20px" }}
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <IconButton onClick={() => handleQtyChange(item.id, -1)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{item.qty}</Typography>
                  <IconButton onClick={() => handleQtyChange(item.id, 1)}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Typography>${item.price || 0}</Typography>
                  {item.oldPrice && (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${item.oldPrice}
                    </Typography>
                  )}
                  {item.discount && (
                    <Typography color="error">-{item.discount}%</Typography>
                  )}
                </Box>
                <IconButton onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))
          )}
        </Box>

        {/* Right Summary */}
        <Box
          sx={{ backgroundColor: "#F7F7F7" }}
          flex={1}
          p={2}
          border="1px solid #ddd"
          borderRadius={2}
        >
          <Typography variant="h6">Total</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography>{selected.length} Products</Typography>
          <Typography>Weight: 0.2 kg</Typography>
          <Typography>Subtotal: ${total.toFixed(2)}</Typography>
          <TextField fullWidth placeholder="Promo code" sx={{ my: 1 }} />
          <Typography color="error">Discounts: -$40</Typography>
          <Button
            disabled={disabledBtn}
            onClick={handleShipping}
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#F54F1F" }}
          >
            Go to checkout
          </Button>
        </Box>

        <Snackbar
          open={snack}
          autoHideDuration={3000}
          onClose={handleCloseSnack}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert 
            severity="success" 
            variant="filled"     // 🔥 To'liq background rangi bilan chiqadi
            onClose={handleCloseSnack}
            sx={{ width: "100%" }}
          >
            Great Go On!
          </Alert>
        </Snackbar>

      </Box>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
