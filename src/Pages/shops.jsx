import React from 'react';
import NavbarComponent from '../FlexibleBars/navbar';
import { FilterProductsWrap, NavLinks, NavLinksWrap } from './shopsStyle';
import { Breadcrumbs, Typography, Link as MUILink, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { GridImg, GridInsideWrap, ProductsGrid, TrendingGridWrap, TrendProductGridCon, Trendtext, TrendViewButton } from './homeStyle';
import trend1 from '../assets/home_assets/trend1.png'
import trend2 from '../assets/home_assets/trend2.png'
import trend3 from '../assets/home_assets/trend3.png'
import trend4 from '../assets/home_assets/trend4.png'
import trend5 from '../assets/home_assets/trend5.png'
import trend6 from '../assets/home_assets/trend6.png'
import like from '../assets/home_assets/like.svg'


const ShopsComponent = ({ category, size, color, price, brand, onChange }) => {
  const current = "Products";

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

  const selectData = [
    { label: "Category", value: category, options: ["Men", "Women", "Kids", "Accessories"] },
    { label: "Size", value: size, options: ["S", "M", "L", "XL", "XXL"] },
    { label: "Color", value: color, options: ["Black", "White", "Blue", "Red", "Green"] },
    { label: "Price", value: price, options: ["$0 - $50", "$50 - $100", "$100 - $200", "$200+"] },
    { label: "Brand", value: brand, options: ["Nike", "Adidas", "Puma", "Levis", "Zara"] }
  ];

  return (
    <div>
      {/* Navbar */}
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
              to="/"
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

      {/* Filter Selects */}
      <FilterProductsWrap>
      <div
        style={{
        maxWidth: "1300px",
          width: "100%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: "0 20px"
        }}
      >
        <div style={{display: "flex", alignItems: "center", justifyContent: "left", gap: "8px"}}>
            <p style={{fontSize: "18px", color: "#202020"}}>Filter</p>
        {selectData.map((item) => (
          <FormControl key={item.label} sx={{ display: "flex" }}>
            <InputLabel shrink sx={{ display: 'none' }}>
              {item.label}
            </InputLabel>
            <Select
              value={item.value || ""}
              onChange={(e) => onChange(item.label.toLowerCase(), e.target.value)}
              displayEmpty
              IconComponent={ArrowDropDownIcon}
              sx={commonSx}
              inputProps={{ 'aria-label': item.label }}
            >
              <MenuItem disabled value="">
                <span style={{ color: "#999" }}>{item.label}</span>
              </MenuItem>
              {item.options.map((opt) => (
                <MenuItem key={opt} value={opt} sx={{ fontSize: 18 }}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
        </div>
        <div>
        <InputLabel shrink sx={{ display: 'none' }}>
             Popular
            </InputLabel>
            <Select
            sx={{
                borderRadius: '36px',
                backgroundColor: '#ffffff',
                border: '2px solid #d9d9d9',
                paddingX: 2,
                height: 56,
                fontSize: 20,
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
                }}
              displayEmpty
              IconComponent={ArrowDropDownIcon}
            >
              <MenuItem disabled value="">
                <span style={{ color: "#999" }}>Select your type</span>
              </MenuItem>
                <MenuItem sx={{ fontSize: 18 }}>
                 By sales
                </MenuItem>
                <MenuItem sx={{ fontSize: 18 }}>
                Popular
                </MenuItem>
            </Select>
        </div>
      </div>
      </FilterProductsWrap>
       <TrendingGridWrap>
        <TrendProductGridCon>
            <Trendtext>Men's clothes (950)</Trendtext>
            <ProductsGrid>
            <GridInsideWrap>
                <div className='trendproimgwrap' style={{width: "400px"}}>
                <GridImg src={trend1} alt="trend1" />
                <button>-46%</button>
                </div>
                <div>
                <p> <span>Athletic pants</span> <img src={like} alt="like" /> </p>
                <small>$259.00</small> 
                </div>
            </GridInsideWrap>
            <GridInsideWrap>
                <GridImg src={trend2} alt="trend2" />
                <div>
                <p> <span>Athletic pants</span> <img src={like} alt="like" /> </p>
                <small>$259.00</small>
                </div>
            </GridInsideWrap>
            <GridInsideWrap>
                <GridImg src={trend3} alt="trend3" />
                <div>
                <p> <span>Athletic pants</span> <img src={like} alt="like" /> </p>
                <small>$259.00</small>
                </div>
            </GridInsideWrap>
            <GridInsideWrap>
                <GridImg src={trend4} alt="trend4" />
                <div>
                <p> <span>Athletic pants</span> <img src={like} alt="like" /> </p>
                <small>$259.00</small>
                </div>
            </GridInsideWrap>
            <GridInsideWrap>
                <GridImg src={trend5} alt="trend5" />
                <div>
                <p> <span>Athletic pants</span> <img src={like} alt="like" /> </p>
                <small>$259.00</small> 
                </div>
            </GridInsideWrap>
            <GridInsideWrap>
                <GridImg src={trend6} alt="trend6" />
                <div>
                <p> <span>Athletic pants</span> <img src={like} alt="like" /> </p>
                <small>$259.00</small>
                </div>
            </GridInsideWrap>
            </ProductsGrid>
            <TrendViewButton>View all</TrendViewButton>
        </TrendProductGridCon>
    </TrendingGridWrap>
    </div>
  );
};

export default ShopsComponent;
