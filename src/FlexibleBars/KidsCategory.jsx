import React from "react";
import styled from "styled-components";
import zara from "../assets/navbar_assets/zara.svg";
import adidas from "../assets/navbar_assets/adidas.svg";
import nike from "../assets/navbar_assets/nike.svg";
import lacoste from "../assets/navbar_assets/lacoste.svg";
import supreme from "../assets/navbar_assets/supreme.svg";
import geox from "../assets/navbar_assets/geox.svg";
import soliver from "../assets/navbar_assets/soliver.svg";

export default function KidsCategory() {
  return (
    <Container>
      <CategoryGrid>
        <Column>
          <Title>Shoes</Title>
          <Item>Boots — 686</Item>
          <Item>Sneakers — 327</Item>
          <Item>Shoes — 198</Item>
        </Column>

        <Column>
          <Title>Clothing</Title>
          <Item>Pants — 5759</Item>
          <Item>Outerwear — 6605</Item>
          <Item>Jumpers, sweaters, cardigans — 4674</Item>
          <Item>Homewear — 982</Item>
          <Item>Pajamas - 512</Item>
        </Column>

        <Column>
          <Title>Sport</Title>
          <Item>All sporting goods — 676</Item>
          <Item>Running — 3</Item>
          <Item>Swimming — 11</Item>
          <Item>Tennis — 3</Item>
        </Column>

        <Column>
          <Title>Accessories</Title>
          <Item>Hats — 148</Item>
          <Item>Bags — 41</Item>
          <Item>Gloves — 4</Item>
          <Item>Scarves and shawls — 6</Item>
        </Column>
      </CategoryGrid>

      <LogoRow>
        <img src={zara} alt="Zara" />
        <img src={adidas} alt="Adidas" />
        <img src={lacoste} alt="Lacoste" />
        <img src={nike} alt="Nike" />
        <img src={supreme} alt="Supreme" />
        <img src={geox} alt="Geox" />
        <img src={soliver} alt="sOliver" />
      </LogoRow>
    </Container>
  );
}

// 🔹 Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Item = styled.span`
  font-size: 15px;
  color: #333;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 40px;
    object-fit: contain;
    opacity: 0.8;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
