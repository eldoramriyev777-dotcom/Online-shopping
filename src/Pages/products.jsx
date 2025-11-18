import React, { useState, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NavbarComponent from "../FlexibleBars/navbar";
import Footer from "../FlexibleBars/footer";
import { Breadcrumbs, Typography, Link as MUILink, Divider, Modal, Box, Button, Snackbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink, useParams } from "react-router-dom";
import data from "../FlexibleBars/productsData.json"; // JSON import

// style imports from your file
import {
  cardWrap,
  imgStyle,
  NavLinksProduct,
  NavLinksWrapProduct,
  ProductDetails,
  ProductDetailsWrap,
  ProductsInfo,
  ProductsPictures,
  wrapperStyle,
} from "./productStyle";

// product images
import imgpro1 from "../assets/products_assets/imgpro1.png";
import imgpro2 from "../assets/products_assets/imgpro2.png";
import imgpro3 from "../assets/products_assets/imgpro3.png";
import imgpro4 from "../assets/products_assets/imgpro4.png";
import likeBig from "../assets/products_assets/likeBig.svg";
import extraInfo from "../assets/products_assets/extraInfo.svg";

// related images
import relateimg1 from "../assets/products_assets/relateimg1.png";
import relateimg2 from "../assets/products_assets/relateimg2.png";
import relateimg3 from "../assets/products_assets/relateimg3.png";

import info from '../assets/products_assets/info.svg'

// Swiper (React) imports — **TOʻGʻRI**
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MiniCart from "./MiniCart";

const ProductsComponent = () => {
  
    // 1️⃣ URL parametri orqali mahsulotni olish
    const { id } = useParams();
    const product = data.find((p) => p.id === parseInt(id));
    if (!product) return <p>Product not found</p>;
    const current = `${product.category}`;
  
    // 2️⃣ State-lar (hook'lar doimo componentning yuqorisida bo‘lishi kerak)
    const [modalOpen, setModalOpen] = useState(false);
    const [activeColor, setActiveColor] = useState(product.color[0]);
    const [activeSize, setActiveSize] = useState(product.size[0]);
    const [expanded, setExpanded] = useState("panel1");
  
    const [cart, setCart] = useState([]);        // Cart state
    const [cartOpen, setCartOpen] = useState(false); // Mini cart ochilishi
    const [notify, setNotify] = useState(false); // Snackbar notification
  
    // 3️⃣ Swiper ref (agar kerak bo‘lsa)
    const swiperRef = useRef(null);
  
    // 4️⃣ Accordion toggle funksiyasi
    const handleChange = (panel, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    // 5️⃣ Related products filter
    const relatedProducts = data.filter(
      (p) => p.category === product.category && p.id !== product.id
    );
  
    // 6️⃣ Mini cart va localStorage uchun Add to Cart funksiyasi
    const handleCart = () => {
    // Cartdagi oxirgi id ni topamiz
      const maxId = cart.length > 0 ? Math.max(...cart.map(item => item.id)) : 0;

      const cartItem = {
        id: maxId + 1,           // Cart ichidagi ketma-ket id
        productId: product.id,    // Asl mahsulot id
        name: product.name,
        price: product.price,
        color: activeColor,
        size: activeSize,
        image: `https://picsum.photos/seed/${product.id}/300/400`,
        qty: 1
      };
      
      console.log("Added to cart:", cartItem);
  
      // LocalStorage ga saqlash
      const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
      oldCart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(oldCart));
  
      // React state-ni ham yangilash
      setCart(oldCart);
      setCartOpen(true);
      setNotify(true);
    };
  
    // 7️⃣ Style object
    const wrapperWithPos = { ...(wrapperStyle || {}), position: "relative" };
    
    
  return (
    <div>
      <NavbarComponent />

      {/* Breadcrumbs */}
      <NavLinksWrapProduct>
        <NavLinksProduct>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
            sx={{ display: "flex", alignItems: "center", py: 1 }}
          >
            <MUILink component={RouterLink} to="/home" underline="hover" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <HomeIcon fontSize="small" /> Home
            </MUILink>

            <MUILink component={RouterLink} to="/shops" underline="hover" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              Products shop
            </MUILink>

            <Typography color="text.primary">{current}</Typography>
          </Breadcrumbs>
        </NavLinksProduct>
      </NavLinksWrapProduct>

      <ProductDetailsWrap>
        <ProductDetails>
          <ProductsPictures>
            <div><img src={`https://picsum.photos/seed/${product.id}/300/400`} alt="imgpro1" /></div>
            <div><img src={imgpro2} alt="imgpro2" /></div>
            <div><img src={imgpro3} alt="imgpro3" /></div>
            <div><img src={imgpro4} alt="imgpro4" /></div>
          </ProductsPictures>
              <ProductsInfo>
              <div className="nameDetails">
                <p>{product.name}</p>
                <img src={likeBig} alt="likeBig" />
              </div>

              <h3>SKU: 21SBBMJKT00008_BEIGE46</h3>

              <div className="priceWrap">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                  <span>${product.price}.00</span>
                  <small>$649.00</small>
                </div>
                <p>-67%</p>
              </div>

                {/* Color Picker */}
                <div className="colorpickerSide">
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <p style={{ fontSize: "18px", color: "#202020" }}>Color</p>
                    <span style={{ fontSize: "14px", color: "#9EA3A8" }}>{activeColor}</span>
                  </div>

                  <div className="color-picker">
                    {product.color.map((clr) => (
                      <button
                        key={clr}
                        className={`color-btn ${activeColor === clr ? "active" : ""}`}
                        style={{ ["--clr"]: clr }}
                        onClick={() => setActiveColor(clr)}
                      />
                    ))}
                  </div>
                </div>

                <Divider />

                {/* Size Picker */}
                <div className="sizeWrap">
                  <div style={{ display: "flex", alignItems: "start", flexDirection: "column", gap: "4px" }}>
                    <p style={{display: "flex", gap: "8px", fontSize: "18px", color: "#202020" }}>
                      Size
                      <img
                        src={extraInfo}
                        alt="extraInfo"
                        style={{ cursor: "pointer" }}
                        onClick={() => setModalOpen(true)}
                      />
                    </p>
                    <span style={{ fontSize: "14px", color: "#9EA3A8" }}>{activeSize}</span>
                  </div>

                  {/* Modal for Size Details */}
                  <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 300,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 3,
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        Size Details
                      </Typography>
                      <ul>
                        {/* {product.sizeDetails.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))} */}
                        <li>Size S: Chest 34-36", Waist 28-30"</li>
                        <li>Size M: Chest 38-40", Waist 32-34"</li>
                        <li>Size L: Chest 42-44", Waist 36-38"</li>
                        <li>Size XL: Chest 46-48", Waist 40-42"</li>
                      </ul>
                      <Box mt={2} textAlign="right">
                      <Button variant="contained" onClick={() => setModalOpen(false)}>
                        Close
                      </Button>
                      </Box>
                    </Box>
                  </Modal>

                  <div className="sizeButtons">
                    {product.size.map((size) => (
                      <button
                        key={size}
                        className={`sizeBtn ${activeSize === size ? "active" : ""}`}
                        onClick={() => setActiveSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

              <button onClick={handleCart} className="addBtn">Add to cart</button>

              <MiniCart cart={cart} cartOpen={cartOpen} setCartOpen={setCartOpen} />

              <Snackbar
                  open={notify}
                  autoHideDuration={3000}
                  onClose={() => setNotify(false)}
                  message="Product added to the cart!"
                />


              <div style={{ display: "flex", gap: "8px", alignItems: "start", justifyContent: "space-between", flexDirection: "column" }}>
                {/* 1 - Accordion */}
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={(e, isExpanded) => handleChange("panel1", isExpanded)}
                  sx={{ width: "100%", border: "none", backgroundColor: "#F7F7F7", borderRadius: "15px" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <img src={info} alt="info" />
                    <Typography>Product information</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {product.description}
                  </AccordionDetails>
                </Accordion>

                {/* 2 - Accordion */}
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={(e, isExpanded) => handleChange("panel2", isExpanded)}
                  sx={{ width: "100%", border: "none", backgroundColor: "#F7F7F7", borderRadius: "15px" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <img src={info} alt="info" />
                    <Typography>Complimentary Delivery and Return</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  Enjoy free delivery on all orders with no additional cost. Most orders are delivered within 
                  2–7 business days and include a tracking number for easy monitoring.
                  If you are not satisfied with your purchase, you can return it free of charge within 30 days, provided 
                  the product is in its original condition and packaging. Our customer support is available to guide you 
                  through the return process.
                  Free delivery and returns may vary depending on the country or region, but special promotions typically 
                  retain these benefits.
                  </AccordionDetails>
                </Accordion>

                {/* 3 - Accordion */}
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={(e, isExpanded) => handleChange("panel3", isExpanded)}
                  sx={{ width: "100%", border: "none", backgroundColor: "#F7F7F7", borderRadius: "15px" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <img src={info} alt="info" />
                    <Typography>Exclusive Online Packaging </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  Available online only, your dress will be delivered exclusively. A stylish travel bag is included
                   in your package to accompany you on your journey (this offer does not include Connected Clothing). 
                   These clothes are delivered in special packaging.                  
                   </AccordionDetails>
                </Accordion>

                {/* 4 - Accordion */}
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={(e, isExpanded) => handleChange("panel4", isExpanded)}
                  sx={{ width: "100%", border: "none", backgroundColor: "#F7F7F7", borderRadius: "15px" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                  >
                    <img src={info} alt="info" />
                    <Typography>Credit and debit cards, Paypal, Wire Transfer</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  We accept credit/debit cards, PayPal, and wire transfers for secure and convenient payments.
                  </AccordionDetails>
                </Accordion>

                {/* 5 - Accordion */}
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={(e, isExpanded) => handleChange("panel5", isExpanded)}
                  sx={{ width: "100%", border: "none", backgroundColor: "#F7F7F7", borderRadius: "15px" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel5" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                  >
                    <img src={info} alt="info" />
                    <Typography>Automatic Warranty activation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  Your product comes with an automatic warranty that is activated as soon as your purchase is confirmed. 
                  There is no need for manual registration or additional steps. This ensures that your product is 
                  fully protected from the moment it arrives, giving you peace of mind and hassle-free support in case 
                  of any defects or issues. Our warranty covers manufacturing defects and guarantees prompt assistance through 
                  our customer service team.
                  </AccordionDetails>
                </Accordion>
              </div>
            </ProductsInfo>
        </ProductDetails>
      </ProductDetailsWrap>

      {/* RELATED PRODUCTS CAROUSEL */}
      <div style={wrapperWithPos}>
        <h2 style={{ marginBottom: "20px" }}>Related products</h2>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          style={{ paddingBottom: "40px" }}
        >
          {/* {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                style={cardWrap}
                onMouseEnter={(e) => (e.currentTarget.querySelector(".overlay").style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.querySelector(".overlay").style.opacity = 0)}
              >
                <img src={img} alt={`related-${i}`} style={imgStyle} />

              </div>

              <p style={{ marginTop: "10px", fontWeight: "500" }}>Product name</p>
              <p style={{ fontWeight: "600" }}>$199.00</p>
            </SwiperSlide>
          ))} */}
          {relatedProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <div style={cardWrap}>
                <img src={`https://picsum.photos/seed/${p.id}/300/400`} alt={p.name} style={imgStyle} />
              </div>
              <p style={{ marginTop: "10px", fontWeight: "500" }}>{p.name}</p>
              <p style={{ fontWeight: "600" }}>${p.price}.00</p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons (inside wrapper so absolute positions work) */}
        <button
          className="prev-btn"
          style={{
            display: "flex", 
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: "-6px",
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            cursor: "pointer",
            zIndex: 50,
            fontSize: "36px"
          }}
        >
          ‹
        </button>

        <button
          className="next-btn"
          style={{
            display: "flex", 
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: "-6px",
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            cursor: "pointer",
            zIndex: 50,
            fontSize: "36px"
          }}
        >
          ›
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsComponent;
