import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../FlexibleBars/navbar';
import Footer from '../FlexibleBars/footer';
import styled from 'styled-components';
import shoes from '../assets/home_assets/shoesCategory.jpg';
import clothes from '../assets/home_assets/clothesCategory.jpg';
import jeans from '../assets/home_assets/jeansCategory.jpg';
import tShirts from '../assets/home_assets/tshirtsCategory.jpg';
import jacket from '../assets/home_assets/jacketCategory.jpg';
import accessories from '../assets/home_assets/accessoriesCategory.avif';
import Spinner from './Spinner';

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  // 🔹 Spinner uchun useEffect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    fetch('/productsData.json') // public papkadan
      .then(res => res.json())
      .then(data => {
        const uniqueCategories = Array.from(new Set(data.map(item => item.category)))
          .map((cat, index) => ({
            id: index + 1,
            name: cat,
            // LoremFlickr dan kategoriya nomiga mos rasm
            image: [shoes, clothes, jeans, tShirts, jacket, accessories]
          }));
        setCategories(uniqueCategories);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {loading ? (<Spinner /> ) : (
        <div>
        <NavbarComponent />
        <PageWrapperCategory>
        <PageWrapper>
          <h1>Categories</h1>
          <CardsWrapper>
            {categories.map((cat, index) => (
              <Card key={cat.id} onClick={() => navigate('/shops', { state: { category: cat.name } })}>
                <img src={cat.image[index]} alt={cat.name} />
                <h3>{cat.name}</h3>
                <button>View Products</button>
              </Card>
            ))}
          </CardsWrapper>
        </PageWrapper>
        </PageWrapperCategory>
        <Footer />
      </div>
      )}
    </div>
  );
};

export default CategoryComponent;

const PageWrapperCategory = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 60px 20px;
  max-width: 1300px;
  width: 100%;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 50px;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, scale 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 12px 35px rgba(0,0,0,0.2);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    background-color: #F54F1F;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #ff7350;
    }
  }
`;
