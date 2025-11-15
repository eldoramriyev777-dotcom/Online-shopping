import React, { useState, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NavbarComponent from "../FlexibleBars/navbar";
import Footer from "../FlexibleBars/footer";
import { Breadcrumbs, Typography, Link as MUILink, Divider } from "@mui/material";
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

const ProductsComponent = () => {
  
  const colors = ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#007AFF", "#AF52DE"];
  const [active, setActive] = useState(colors[0]);
  const [expanded, setExpanded] = React.useState("panel1");


  const images = [relateimg1, relateimg2, relateimg3, relateimg1, relateimg2, relateimg3];

  // swiper ref (agar kerak bo'lsa)
  const swiperRef = useRef(null);

  // ensure wrapperStyle has position: relative for absolute nav buttons
  const wrapperWithPos = { ...(wrapperStyle || {}), position: "relative" };

  const handleChange = (panel, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    const { id } = useParams();
    const product = data.find((p) => p.id === parseInt(id));
  
    if (!product) return <p>Product not found</p>;  
    const current = `${product.category}`;
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

              <div className="colorpickerSide">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", gap: "4px" }}>
                  <p style={{color: "#202020", fontSize: "18px"}}>Color</p>
                  <span style={{color: "#9EA3A8", fontSize: "14px"}}>Silver</span>
                </div>

                <div className="color-picker">
                  {colors.map((clr) => (
                    <button
                      key={clr}
                      className={`color-btn ${active === clr ? "active" : ""}`}
                      style={{ ["--clr"]: clr }} // agar css var ishlatilsa
                      onClick={() => setActive(clr)}
                    />
                  ))}
                </div>
              </div>

              <Divider />

              <div className="sizeWrap">
                <div>
                  <p style={{display: "flex", alignItems: "center", justifyContent: "left", gap: "4px",
                    color: "#202020", fontSize: "18px"
                  }}> Size <img src={extraInfo} alt="extraInfo" /> </p>
                  <span style={{color: "#9EA3A8", fontSize: "14px"}}>Medium</span>
                </div>
                <div className="sizeButtons">
                  <button className="sizeBtn">XS</button>
                  <button className="sizeBtn">S</button>
                  <button className="sizeBtn">M</button>
                  <button className="sizeBtn">L</button>
                </div>
              </div>

              <button className="addBtn">Add to cart</button>

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
          {images.map((img, i) => (
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
          ))}
        </Swiper>

        {/* Navigation Buttons (inside wrapper so absolute positions work) */}
        <button
          className="prev-btn"
          style={{
            position: "absolute",
            right: "96%",
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            cursor: "pointer",
            zIndex: 50,
            fontSize: "32px"
          }}
        >
          ‹
        </button>

        <button
          className="next-btn"
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            cursor: "pointer",
            zIndex: 50,
            fontSize: "32px"
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
