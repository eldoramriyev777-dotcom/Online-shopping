import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const initialCart = [
  {
    id: 1,
    name: "Blouse BAON, women, color Blue",
    size: "XS",
    color: "thunder",
    price: 120,
    oldPrice: 175,
    discount: 25,
    qty: 1,
    image: "https://via.placeholder.com/80x80?text=Blue+Blouse",
  },
  {
    id: 2,
    name: "Blouse BAON, women, color Red",
    size: "XS",
    color: "thunder",
    price: 120,
    oldPrice: 175,
    discount: 25,
    qty: 1,
    image: "https://via.placeholder.com/80x80?text=Red+Blouse",
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState(initialCart);
  const [selected, setSelected] = useState(cart.map((item) => item.id));

  const handleQtyChange = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const handleDelete = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setSelected((prev) => prev.filter((itemId) => itemId !== id));
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selected.length === cart.length) setSelected([]);
    else setSelected(cart.map((item) => item.id));
  };

  const total = cart
    .filter((item) => selected.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <Box display="flex" gap={4} p={4}>
      {/* Left Cart Items */}
      <Box flex={3}>
        <Box display="flex" alignItems="center" mb={2}>
          <Checkbox
            checked={selected.length === cart.length}
            onChange={handleSelectAll}
          />
          <Typography>Select all</Typography>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() =>
              cart.forEach((item) => selected.includes(item.id) && handleDelete(item.id))
            }
          >
            Delete selected
          </Button>
        </Box>

        <Divider />

        {cart.map((item) => (
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
              <img src={item.image} alt={item.name} width={80} />
              <Box>
                <Typography fontWeight={500}>{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Size: {item.size} • Colour: {item.color}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <IconButton onClick={() => handleQtyChange(item.id, -1)}>
                <RemoveIcon />
              </IconButton>
              <Typography>{item.qty}</Typography>
              <IconButton onClick={() => handleQtyChange(item.id, 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Box>
              <Typography>${item.price}</Typography>
              <Typography variant="body2" color="textSecondary" sx={{ textDecoration: "line-through" }}>
                ${item.oldPrice}
              </Typography>
              <Typography color="error">-{item.discount}%</Typography>
            </Box>
            <IconButton onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Right Summary */}
      <Box flex={1} p={2} border="1px solid #ddd" borderRadius={2}>
        <Typography variant="h6">Total</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography>{selected.length} Products</Typography>
        <Typography>Weight: 0.2 kg</Typography>
        <Typography>Subtotal: ${total}</Typography>
        <TextField fullWidth placeholder="Promo code" sx={{ my: 1 }} />
        <Typography color="error">Discounts: -$40</Typography>
        <Button variant="contained" color="error" fullWidth sx={{ mt: 2 }}>
          Go to checkout
        </Button>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
