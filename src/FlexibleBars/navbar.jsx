import React, { useState, useRef, useEffect } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {
  BurgerImg,
  CloseButton,
  FullscreenWrapper,
  FullWrap,
  Header,
  MidAndBotJointWrap,
  ModalContent,
  NavbarAllWrap,
  NavbarBottomPartAllWrap,
  NavbarBottomWrap,
  NavbarCenterWrap,
  NavbarTopWrap
} from './navbarStyle'

import cursor from '../assets/navbar_assets/cursor.svg'
import vector_down from '../assets/navbar_assets/vector_down.svg'
import time from '../assets/navbar_assets/time.svg'
import world from '../assets/navbar_assets/world.svg'
import currency from '../assets/navbar_assets/currency.svg'
import burger from '../assets/navbar_assets/burger_logo.svg'
import blossom from '../assets/navbar_assets/BLOSSOM.svg'
import parcel from '../assets/navbar_assets/parcel.svg'
import like from '../assets/navbar_assets/like.svg'
import login from '../assets/navbar_assets/login.svg'
import search from '../assets/navbar_assets/search.svg'
import linen from '../assets/navbar_assets/linen.png'
import beige from '../assets/navbar_assets/beige.png'
import jacket_search from '../assets/navbar_assets/jacket_search.png'
import pants_search from '../assets/navbar_assets/pants_search.png'
import nike_shoes from '../assets/navbar_assets/nike_shoes.png'

import { NavLink, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import ManCategory from './ManCategory'
import styled from 'styled-components'
import WomanCategory from './WomanCategory'
import KidsCategory from './KidsCategory'
import productsData from './productsData.json'
import { TrendViewButton } from '../Pages/homeStyle'

const NavbarComponent = () => {
  const navigate = useNavigate()
  const [fadeOut, setFadeOut] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedCity, setSelectedCity] = useState('Amsterdam')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')

  const locationRef = useRef(null)
  const languageRef = useRef(null)
  const currencyRef = useRef(null)

  const [locationPosition, setLocationPosition] = useState('bottom left')
  const [languagePosition, setLanguagePosition] = useState('bottom left')
  const [currencyPosition, setCurrencyPosition] = useState('bottom left')

  const cities = [
    { city: 'Amsterdam', country: 'Netherlands' },
    { city: 'Berlin', country: 'Germany' },
    { city: 'Seoul', country: 'South Korea' },
    { city: 'Tashkent', country: 'Uzbekistan' },
    { city: 'Tokyo', country: 'Japan' },
  ]

  const languages = [
    { label: 'English', country: 'United States' },
    { label: 'Russian', country: 'Russia' },
    { label: 'Uzbek', country: 'Uzbekistan' }
  ]

  const currencies = [
    { code: 'USD', symbol: '$', name: 'United States dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' }
  ]

  const handleCurrencySelect = (code) => {
    setSelectedCurrency(code)
    setOpen(false); // ✅ Tanlanganidan keyin avtomatik yopiladi
  }

  const handleClick = (e) => {
    e.preventDefault()
    setFadeOut(true)
    setTimeout(() => setLoading(true), 500)
    setTimeout(() => navigate('/login/sign-in'), 1500)
  }

  const handleCityChange = (cityName) => {setSelectedCity(cityName)
    setOpen(false); // ✅ Tanlanganidan keyin avtomatik yopiladi
  }
  const handleLanguageChange = (lang) => {setSelectedLanguage(lang)
    setOpen(false); // ✅ Tanlanganidan keyin avtomatik yopiladi 
  // Responsive dropdown position
  }
  const handleResize = () => {
    if (locationRef.current) {
      const rect = locationRef.current.getBoundingClientRect()
      setLocationPosition(rect.right + 250 > window.innerWidth ? 'bottom right' : 'bottom left')
    }
    if (languageRef.current) {
      const rect = languageRef.current.getBoundingClientRect()
      setLanguagePosition(rect.right + 250 > window.innerWidth ? 'bottom right' : 'bottom left')
    }
    if (currencyRef.current) {
      const rect = currencyRef.current.getBoundingClientRect()
      setCurrencyPosition(rect.right + 250 > window.innerWidth ? 'bottom right' : 'bottom left')
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [open, setOpen] = useState(false);

  const handleSelect = (code) => {
    handleCurrencySelect(code);
    setOpen(false); // ✅ Tanlanganidan keyin avtomatik yopiladi
  };

  const [activeTab, setActiveTab] = useState("man"); // default holatda "man"
  const renderContent = () => {
    switch (activeTab) {
      case "woman":
        return <WomanCategory />;
      case "kids":
        return <KidsCategory />;
      default:
        return <ManCategory />;
    }
  };

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(""); // category/brand/name filter
    const [visibleCount, setVisibleCount] = useState(18);
  
    // fetch products from JSON
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          // Agar real fetch qilmoqchi bo'lsangiz:
          // const res = await fetch("/productsData.json");
          // const data = await res.json();
          const data = productsData;
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    }, []);
  
    // search query filtering
    useEffect(() => {
      if (query.trim() === "") {
        setResults([]);
      } else {
        const filtered = products.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.brand.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      }
    }, [query, products]);

    const bestTags = [...new Set(results.map((item) => item.category))].slice(
      0,
      8
    );
  
// online rasm mapping
const imageMap = {
  "Linen Blazer Jacket": "https://source.unsplash.com/100x100/?blazer",
  "Beige Blazer Jacket": "https://source.unsplash.com/100x100/?beige-jacket",
  "Jacket": "https://source.unsplash.com/100x100/?jacket",
  "Pants with soft material": "https://source.unsplash.com/100x100/?pants",
  "Nike Air Max 90": "https://source.unsplash.com/100x100/?nike-shoes"
};

// Best tags – doimiy
const allCategories = [...new Set(products.map((item) => item.category))].slice(0, 8);

// Filter button click
const handleFilterClick = (filter) => {
  setSelectedFilter(filter);
};

// Filtered topsellers
const filteredTopSellers = selectedFilter
  ? products.filter(
      (item) =>
        item.category === selectedFilter ||
        item.brand === selectedFilter ||
        item.name === selectedFilter
    )
  : results.length > 0
  ? results
  : products;

  const handleSearched = (item) => {
    // 1) O'sha mahsulotga o'tish
    navigate(`/products/${item.id}`);
    setQuery("");
    setResults([]);
    // // 2) Searchni tozalash
    // setQuery("");
  };

  return (
    <FullWrap style={{ position: 'relative', overflow: 'hidden' }}>
      <NavbarAllWrap>
        <NavbarTopWrap>
          {/* LOCATION DROPDOWN */}
          <Popup
            trigger={
              <div ref={locationRef} className='location' style={{ cursor: 'pointer' }}>
                <img src={cursor} alt='cursor' />
                <p>Shipping location — {selectedCity}</p>
                <img src={vector_down} alt='vector_down' />
              </div>
            }
            position={locationPosition}
            closeOnDocumentClick
            arrow={false}
          >
            <div style={{
              width: '250px',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#f5f5f5',
                borderRadius: '8px',
                padding: '8px 10px'
              }}>
                <img src={search} alt="search" width="18" height="18" />
                <input
                  type="text"
                  placeholder="Enter the address"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ border: 'none', outline: 'none', background: 'transparent', width: '100%', fontSize: '14px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '200px', overflowY: 'auto' }}>
                {cities
                  .filter((c) => c.city.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((c, i) => (
                    <label key={i} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      background: '#fafafa',
                      borderRadius: '8px',
                      padding: '8px 10px',
                      cursor: 'pointer',
                      border: selectedCity === c.city ? '1px solid #F54F1F' : '1px solid transparent'
                    }}
                      onClick={() => handleCityChange(c.city)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input type='checkbox' checked={selectedCity === c.city} readOnly />
                        <strong>{c.city}</strong>
                      </div>
                      <small style={{ color: '#888', marginLeft: '26px' }}>{c.country}</small>
                    </label>
                  ))}
              </div>
            </div>
          </Popup>

          {/* OPTIONS */}
          <div className='options'>
            <p><img src={time} alt='time' /><small>How we are doing now?</small></p>

            {/* LANGUAGE DROPDOWN */}
            <Popup
              trigger={
                <p ref={languageRef} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={world} alt='world' />
                  <small>{selectedLanguage}</small>
                </p>
              }
              position={['bottom center', 'top center']}
              repositionOnResize
              keepTooltipInside={true}
              closeOnDocumentClick
              arrow={false}
            >
              <div style={{
                width: 'auto',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxHeight: 'auto'
              }}>
                {languages.map((lang, index) => (
                  <label key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    border: "1px solid #c5c4c4",
                    padding: '5px 8px',
                    borderRadius: '5px',
                    background: selectedLanguage === lang.label ? '#f5f5f5' : 'transparent'
                  }}
                    onClick={() => handleLanguageChange(lang.label)}
                  >
                    <input type="checkbox" checked={selectedLanguage === lang.label} readOnly />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <strong>{lang.label}</strong>
                      <small style={{ color: '#888' }}>{lang.country}</small>
                    </div>
                  </label>
                ))}
              </div>
            </Popup>

            {/* CURRENCY DROPDOWN */}
            <Popup
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              trigger={
                <p ref={currencyRef} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={currency} alt='currency' />
                  <small>{selectedCurrency}</small>
                </p>
              }
              position={['bottom center', 'top center']}
              repositionOnResize
              keepTooltipInside={true}
              closeOnDocumentClick
              arrow={false}
            >
              <div style={{
                width: 'auto',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxHeight: 'auto'
              }}>
                {currencies.map((cur, idx) => (
                  <label key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    padding: '5px 8px',
                    border: "1px solid #c5c4c4",
                    borderRadius: '5px',
                    background: selectedCurrency === cur.code ? '#f5f5f5' : 'transparent'
                  }}
                  onClick={() => handleSelect(cur.code)} // ✅ tanlansa yopiladi
                  >
                    <input type="checkbox" checked={selectedCurrency === cur.code} readOnly />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <strong>{cur.code} - {cur.symbol}</strong>
                      <small style={{ color: '#888' }}>{cur.name}</small>
                    </div>
                  </label>
                ))}
              </div>
            </Popup>
          </div>
        </NavbarTopWrap>
      </NavbarAllWrap>

      {/* Bottom sections (unchanged) */}
      <NavbarBottomPartAllWrap>
        <MidAndBotJointWrap>
          <NavbarCenterWrap>

          <Popup
            trigger={<BurgerImg src={burger} alt="burger" />}
            modal
            nested
            closeOnDocumentClick
            contentStyle={{
              padding: 0,
              border: "none",
              background: "transparent",
            }}
          >
            {(close) => (
              <FullscreenWrapper>
                <ModalContent>
                  <CloseButton onClick={close}>&times;</CloseButton>
                  <Header>
                    <Tabs>
                    <Tab
                    active={activeTab === "woman"}
                    onClick={() => setActiveTab("woman")}
                  >
                    Woman
                  </Tab>
                  <Tab
                    active={activeTab === "man"}
                    onClick={() => setActiveTab("man")}
                  >
                    Man
                  </Tab>
                  <Tab
                    active={activeTab === "kids"}
                    onClick={() => setActiveTab("kids")}
                  >
                    Kids
                  </Tab>
                    </Tabs>
                  </Header>
                  {renderContent()}
                </ModalContent>
              </FullscreenWrapper>
            )}
          </Popup>
            {/* <CategoryModal/> */}

            <img src={blossom} alt='blossom' />
            <div className='leftsidewrap'>
              <img src={parcel} alt='parcel' />
              <img src={like} alt='like' />
              <div className='breakline'></div>
              <p
                onClick={handleClick}
                style={{
                  cursor: 'pointer',
                  transition: 'opacity 1s ease, transform 1s ease',
                  opacity: fadeOut ? 0 : 1,
                  transform: fadeOut ? 'scale(0.95)' : 'scale(1)'
                }}
              >
                <img src={login} alt='login' />
                <small>Login</small>
              </p>
            </div>
          </NavbarCenterWrap>
          <div className='freeline'></div>
          <NavbarBottomWrap>
            <div>
              <p>Ideas</p>
              <p>New</p>
              <p>Clothing</p>
              <p>Shoes</p>
              <p>Accessories</p>
              <p>Brands</p>
              <p>Sports</p>
              <p>Premium</p>
              <p style={{ color: '#F54F1F' }}>Sale</p>
            </div>
            <Popup
            trigger={<img src={search} alt="search" style={{ cursor: "pointer" }} />}
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <FullSearchWrapper>
                <SearchTop>
                  <h2>
                    <img src={search} alt="search" />
                  </h2>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                  />
                  {query && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "84px",
                        backgroundColor: "var(--Brand-Color-F54F1F, #F54F1F)",
                        height: "24px",
                        borderRadius: "100px",
                      }}
                      className="results-info"
                    >
                      <span style={{ fontSize: "12px", color: "#FFF", textAlign: "center" }}>
                        {results.length} products
                      </span>
                    </div>
                  )}
                  <button onClick={close}>✕</button>
                </SearchTop>

                <SearchContent>
                  {/* Best tags – doimiy */}
                  <div className="results">
                    <p>Best tags</p>
                    <div>
                      {allCategories.map((tag) => (
                        <button key={tag} onClick={() => handleFilterClick(tag)}>
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Search results */}
                  <div className="results-list">
                    {results.map((item) => (
                      <div style={{cursor: "pointer"}}  onClick={() => handleSearched(item)} key={item.id} className="result-item">
                        <strong>{item.category}</strong> {item.name}
                      </div>
                    ))}
                    {query && results.length === 0 && <p className="no-results">No products found</p>}
                  </div>

                  {/* Topsellers section */}
                  <div className="topsellers">
                    <p>Popular Products</p>
                    <div className="popularProductItems">
                      {filteredTopSellers.slice(0, visibleCount).map((item) => {
                        const imgSrc =
                          imageMap[item.name] ||
                          `https://source.unsplash.com/100x100/?${encodeURIComponent(item.name)}`;
                        return (
                          <div  key={item.id}>
                          <img
                            src={`https://picsum.photos/seed/${item.id}/100/100`}
                            alt={item.name}
                            loading="lazy"
                          />
                            <span>{item.name}</span>
                            <small>${item.price.toFixed(2)}</small>
                          </div>  
                        );
                      })}
                    </div>
                  </div>
                   <TrendViewButton onClick={() => setVisibleCount(prev => prev + 9)}>
                                View more
                    </TrendViewButton>
                </SearchContent>
              </FullSearchWrapper>
            )}
          </Popup>
          </NavbarBottomWrap>
        </MidAndBotJointWrap>
      </NavbarBottomPartAllWrap>

      {/* Loading overlay */}
      {loading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255,255,255,0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999
        }}>
          <ClipLoader color='#F54F1F' size={60} />
        </div>
      )}
    </FullWrap>
  )
}
const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 40px;
`;

const Tab = styled(NavLink)`
  display: flex;
  width: 250px;
  height: 50px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 95px;
  padding: 4px 3px;
  border-bottom: 2px solid transparent;
  background-color: ${(props) => (props.active ? "#000" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  transition: all 0.3s ease;

  &:hover {
    color: white;
    background-color: ${(props) => (props.active ? "#000" : "#ddd")};
    padding: 4px 3px;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
  }
`;

const FullSearchWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 95vh; /* pastda 10% joy qolsin */
  background: rgba(255, 255, 255, 0.98);
  display: flex;
  flex-direction: column;
  border-radius: 0 0 20px 20px;
  margin-top: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  .search-modal {
  width: 800px;
  max-width: 90%;
  background: white;
  border-radius: 10px;
  padding: 20px 25px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  font-family: 'Inter', sans-serif;
}

.search-header {
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #eee;
}

.search-header input {
  flex: 1;
  padding: 10px 15px;
  border: none;
  outline: none;
  font-size: 16px;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
  font-size: 14px;
  margin-top: 10px;
}

.results-list {

}

.result-item {
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 15px;
  color: #333;
}

.result-item strong {
  color: #111;
  font-weight: 600;
}

.no-results {
  text-align: center;
  color: #888;
}

`;

const SearchTop = styled.div`
background-color: #e9e9e9;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: 15px;
    font-size: 1rem;
    border-radius: 15px;
    background-color: #fcf6f6;
    border: none;
    outline: none;
  }

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const SearchContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .results {
    display: flex;
    flex-direction: column;
    gap: 20px;
    p{
      color: var(--Black, #000);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.4;
    }
    div{
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 10px;
      button{
        display: inline-flex;
        padding: 8px 17px 6px 17px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 34px;
        border: 1px solid rgba(0, 0, 0, 0.10);
        background-color: transparent;
        color: var(--Black, #000);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
          background-color: rgba(0, 0, 0, 0.08); /* yumshoq kulrang fon */
          transform: translateY(-2px); /* yengil ko‘tarilish */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* nozik soya */
        }
        &:active{
          background-color: rgba(0, 0, 0, 0.15);
          color: #fff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
          transform: translateY(-1px);
        }
      }
    }
  }
  .topsellers{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    p{
      color: var(--Black, #000);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.4;
    }
    .popularProductItems{
      display: grid;
      align-items: center;
      grid-template-areas: "a a a a a a";
      justify-content: left;
      gap: 20px;
      div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        span{
          color: var(--Dark-Color-202020, #202020);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        small{
          color: var(--Dark-Color-202020, #202020);
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -0.32px;
        }
      }
    }
  }
`;

export default NavbarComponent
