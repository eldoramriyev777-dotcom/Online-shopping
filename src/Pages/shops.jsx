import React, { useEffect, useState } from 'react';
import NavbarComponent from '../FlexibleBars/navbar';
import { FilterProductsWrap, NavLinks, NavLinksWrap } from './shopsStyle';
import { Breadcrumbs, Typography, Link as MUILink, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { GridImg, GridInsideWrap, ProductsGrid, TrendingGridWrap, TrendProductGridCon, TrendViewButton } from './homeStyle';
import like from '../assets/home_assets/like.svg';
import data from "../FlexibleBars/productsData.json";


const ShopsComponent = () => {
  const current = "Products";
  const [title, setTitle] = useState("All products");

  useEffect(() => {
    const saved = localStorage.getItem("shopTitle");
    if (saved) {
      setTitle(saved);
    }
  }, []);

  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [popular, setPopular] = useState("");

  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  const navigate = useNavigate();

  // 🟦 DYNAMIC VALUES FROM DATA
  const categories = [...new Set(data.map(i => i.category))];
  const sizes = [...new Set(data.flatMap(i => i.size))];
  const colors = [...new Set(data.flatMap(i => i.color))];
  const brands = [...new Set(data.map(i => i.brand))];

  const priceOptions = [
    "$0 - $50",
    "$50 - $100",
    "$100 - $200",
    "$200+"
  ];

  // 🟩 Filtering + Sorting
  useEffect(() => {
    let filtered = data;

    // Category
    if (category) {
      filtered = filtered.filter(item => item.category === category);
    }

    // Size
    if (size) {
      filtered = filtered.filter(item => item.size?.includes(size));
    }

    // Color
    if (color) {
      filtered = filtered.filter(item => item.color?.includes(color));
    }

    // Brand
    if (brand) {
      filtered = filtered.filter(item => item.brand === brand);
    }

    // Price
    if (price) {
      if (price.includes("-")) {
        const [min, max] = price
          .replace(/\$/g, "")
          .split("-")
          .map(v => parseInt(v.trim()));

        filtered = filtered.filter(item =>
          item.price >= min && item.price <= max
        );
      } else if (price.includes("+")) {
        const min = parseInt(price.replace(/\$/g, "").replace("+", "").trim());
        filtered = filtered.filter(item => item.price >= min);
      }
    }

    // SORTING (Popular select)
    if (popular === "By ratings") {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    if (popular === "By discount") {
      filtered = [...filtered].sort((a, b) => {
        const discA = a.price - a.discount_price;
        const discB = b.price - b.discount_price;
        return discB - discA;
      });
    }

    setProducts(filtered);
  }, [category, size, color, brand, price, popular]);



  const commonSx = {
    borderRadius: '36px',
    width: "130px",
    backgroundColor: '#ffffff',
    border: "1px solid var(--Dark-Color-202020, #202020)",
    height: 36,
    fontSize: 14,
    fontWeight: 400,
    "& .MuiSelect-select": {
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      paddingLeft: '20px'
    },
    "& .MuiSvgIcon-root": {
      right: 16,
      position: 'absolute'
    }
  };

  return (
    <div>
      <NavbarComponent />

      {/* Breadcrumbs */}
      <NavLinksWrap>
        <NavLinks>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
            sx={{ display: "flex", alignItems: "center", py: 1 }}
          >
            <MUILink
              component={RouterLink}
              to="/home"
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <HomeIcon fontSize="small" />
              Home
            </MUILink>
            <Typography color="text.primary">{current}</Typography>
          </Breadcrumbs>
        </NavLinks>
      </NavLinksWrap>


      {/* Filters */}
      <FilterProductsWrap>
        <div style={{
          maxWidth: "1300px",
          width: "100%",
          display: 'flex',
          alignItems: 'start',
          flexDirection: "column",
          justifyContent: 'space-between',
          padding: "0 20px"
        }}>
          <Typography
            sx={{
              color: '202020',
              fontSize: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px"
            }}
          >
            {title}
            <span style={{ fontSize: "40px", fontStyle: "italic" }}>
              ({products.length})
            </span>
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <p style={{ fontSize: "18px", color: "#202020" }}>Filter</p>

              {/* CATEGORY */}
              <FormControl>
                <Select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={commonSx}
                >
                  <MenuItem  value="">
                    <span style={{ color: "#999" }}>Category</span>
                  </MenuItem>
                  {categories.map(c => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* SIZE */}
              <FormControl>
                <Select
                  value={size}
                  onChange={e => setSize(e.target.value)}
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={commonSx}
                >
                  <MenuItem  value="">
                    <span style={{ color: "#999" }}>Size</span>
                  </MenuItem>
                  {sizes.map(s => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* COLOR */}
              <FormControl>
                <Select
                  value={color}
                  onChange={e => setColor(e.target.value)}
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={commonSx}
                >
                  <MenuItem  value="">
                    <span style={{ color: "#999" }}>Color</span>
                  </MenuItem>
                  {colors.map(c => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* BRAND */}
              <FormControl>
                <Select
                  value={brand}
                  onChange={e => setBrand(e.target.value)}
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={commonSx}
                >
                  <MenuItem  value="">
                    <span style={{ color: "#999" }}>Brand</span>
                  </MenuItem>
                  {brands.map(b => (
                    <MenuItem key={b} value={b}>{b}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* PRICE */}
              <FormControl>
                <Select
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={commonSx}
                >
                  <MenuItem  value="">
                    <span style={{ color: "#999" }}>Price</span>
                  </MenuItem>
                  {priceOptions.map(p => (
                    <MenuItem key={p} value={p}>{p}</MenuItem>
                  ))}
                </Select>
              </FormControl>

            </div>


            {/* SORTING */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Select
                value={popular}
                onChange={e => setPopular(e.target.value)}
                displayEmpty
                IconComponent={ArrowDropDownIcon}
                sx={commonSx}
              >
                <MenuItem  value="">
                  <span style={{ color: "#999" }}>Popular</span>
                </MenuItem>

                <MenuItem value="By ratings">By ratings</MenuItem>
                <MenuItem value="By discount">By discount</MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </FilterProductsWrap>






      {/* PRODUCT GRID */}
      <TrendingGridWrap>
        <TrendProductGridCon>
          <ProductsGrid>

            {products.slice(0, visibleCount).map(product => (
              <GridInsideWrap
                key={product.id}
                onClick={() => navigate(`/products/${product.id}`)}
                style={{ cursor: "pointer" }}
              >
                <div className='trendproimgwrap' style={{ width: "400px" }}>
                  <GridImg src={`https://picsum.photos/seed/${product.id}/300/400`} alt={product.name} />
                  <button>-{Math.round((1 - product.discount_price / product.price) * 100)}%</button>
                </div>
                <div>
                  <p>
                    <span>{product.name}</span>
                    <img src={like} alt="like" />
                  </p>
                  <small>${product.discount_price} <del>${product.price}</del></small>
                </div>
              </GridInsideWrap>
            ))}

          </ProductsGrid>

          {visibleCount < products.length && (
            <TrendViewButton onClick={() => setVisibleCount(prev => prev + 9)}>
              View more
            </TrendViewButton>
          )}
        </TrendProductGridCon>
      </TrendingGridWrap>

    </div>
  );
};

export default ShopsComponent;
