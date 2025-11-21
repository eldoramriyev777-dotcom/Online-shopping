// IdeasComponent.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavbarComponent from '../FlexibleBars/navbar';
import Footer from '../FlexibleBars/footer';
import Spinner from '../Pages/Spinner';

const IdeasComponent = () => {
  const sampleIdeas = [
    {
      id: 1,
      title: "Top Online Deals",
      description: "Find the best online shopping deals and save big on your favorite brands.",
      image: "https://images.unsplash.com/photo-1606813903149-6c1fc3c8c38b?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: 2,
      title: "Fashion Must-Haves",
      description: "Explore trending clothes, shoes, and accessories online.",
      image: "https://images.unsplash.com/photo-1616628182751-1c1c5b735e15?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: 3,
      title: "Gadgets & Electronics",
      description: "Shop the latest gadgets, electronics, and smart devices from top online stores.",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: 4,
      title: "Home Essentials",
      description: "Upgrade your home with trending furniture, decor, and kitchen essentials online.",
      image: "https://images.unsplash.com/photo-1580584128098-6be4e2d2a274?auto=format&fit=crop&w=300&h=200&q=80"
    }
  ];

  const [loading, setLoading] = useState(true); // 🔹 Loading state
  // 🔹 Spinner uchun useEffect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {loading ? (<Spinner />) : (
        <div>
           <NavbarComponent />
      <IdeasWrapper>
        {/* Hero Section */}
        <HeroSection>
          <h1>Get Inspired: Online Shopping Ideas</h1>
          <p>Explore trending products, top deals, and exclusive recommendations.</p>
        </HeroSection>

        {/* Trending Ideas */}
        <Section>
          <h2>Trending Ideas</h2>
          <CardsWrapper>
            {sampleIdeas.map((idea) => (
              <Card key={idea.id}>
                <img src={idea.image} alt={idea.title} />
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
              </Card>
            ))}
          </CardsWrapper>
        </Section>

        {/* Call to Action */}
        <CTASection>
          <h2>Subscribe for Shopping Updates</h2>
          <p>Join our newsletter and stay updated with the latest deals.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </CTASection>
      </IdeasWrapper>
      <Footer />
        </div>
      )}
    </div>
  );
};

export default IdeasComponent;

// Styled Components
const IdeasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
`;

const HeroSection = styled.div`
  text-align: center;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.1rem;
    color: #555;
  }
`;

const Section = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.95rem;
    color: #555;
  }
`;

const CTASection = styled.div`
  background-color: #F54F1F;
  color: #fff;
  border-radius: 20px;
  padding: 40px;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  input {
    padding: 10px 15px;
    border-radius: 50px;
    border: none;
    width: 250px;
    margin-right: 10px;
  }

  button {
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    background-color: #fff;
    color: #F54F1F;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #fce6e6;
  }
`;
