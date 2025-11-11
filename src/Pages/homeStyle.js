import styled from "styled-components";

export const AdverSlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderPartCon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  padding: 0 20px;
  max-width: 1300px;
  width: 100%;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      object-fit: cover;
    }
  }

  .custom-nav {
    position: absolute;
    bottom: 20px;
    right: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: rgba(255, 255, 255, 0.7);
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: 500;
    font-size: 14px;
    backdrop-filter: blur(6px);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }

  .custom-nav button {
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
    &:hover {
      transform: scale(1.3);
      color: #f54f1f;
    }
  }

  @media (max-width: 768px) {
    .custom-nav {
      bottom: 10px;
      right: 15px;
      gap: 15px;
      font-size: 12px;
    }
  }
`;

export const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1300px;
  width: 100%;
  padding: 50px 20px;

  .infoCategory {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    p {
      color: var(--Dark-Color-202020, #202020);
      font-size: 45px;
      font-weight: 400;
      transition: color 0.3s ease;
      &:hover {
        color: #f54f1f;
      }
    }

    button {
      color: var(--Black, #000);
      font-size: 18px;
      font-weight: 400;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      transition: color 0.3s ease, transform 0.3s ease;
      &:hover {
        color: #f54f1f;
        transform: translateY(-2px);
      }
    }
  }
`;

export const CategorySwiper = styled.div`
  display: flex;

  .swiper {
    width: 100%;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide {
    width: 195px !important;
    height: 194px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }
`;

export const MenVsWomenWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenAndWomenSortCon = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
  padding: 10px 20px 60px 20px;
  align-items: center;
  justify-content: space-between;

  .categwrap {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 12px;

      p {
        color: var(--Dark-Color-202020, #202020);
        font-size: 24px;
        font-weight: 500;
        letter-spacing: -0.24px;
        transition: color 0.3s ease;
        &:hover {
          color: #f54f1f;
        }
      }

      small {
        color: var(--Dark-Color-202020, #202020);
        font-size: 18px;
      }
    }
  }
`;

export const PremiumShopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PremShopCon = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
  margin: 20px;

  div {
    width: 380px;
    height: 379px;
    flex-shrink: 0;
    border-radius: 15px 80px 80px 15px;
    background-color: #fff;
    display: flex;
    position: absolute;
    margin: 30px 0 0 30px;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    padding: 40px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.2);
    }

    .infowrapimg {
      display: flex;
      align-items: start;
      flex-direction: column;

      small {
        width: 290px;
        color: var(--Dark-Color-202020, #202020);
        font-family: "Playfair Display";
        font-size: 50px;
        font-weight: 600;
        line-height: 64px;
        letter-spacing: -1px;
        text-transform: uppercase;
      }

      span {
        color: var(--Brand-Color-F54F1F, #f54f1f);
        font-family: "Playfair Display";
        font-size: 50px;
        font-style: italic;
        font-weight: 800;
        line-height: 64px;
        letter-spacing: -1px;
        text-transform: uppercase;
      }
    }
  }
`;

export const TrendingGridWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrendProductGridCon = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  gap: 40px;
`;

export const Trendtext = styled.p`
  color: var(--Dark-Color-202020, #202020);
  font-size: 45px;
  font-weight: 400;
  letter-spacing: -0.45px;
  transition: color 0.3s ease;
  &:hover {
    color: #f54f1f;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  row-gap: 40px;
  column-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const GridInsideWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    align-items: start;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    gap: 10;

    p {
      display: flex;
      width: 400px;
      align-items: center;
      justify-content: space-between;
    }
  }
  .trendproimgwrap{
    button{
    display: inline-flex;
    padding: 5px 9px 3px 9px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px 0 0 20px;
    color: var(--White, #FFF);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    position: absolute;
    border-radius: 100px;
    background-color: var(--Brand-Color-F54F1F, #F54F1F);
    border: none;
  }
  }
`;

export const GridImg = styled.img`
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const TrendViewButton = styled.button`
  display: inline-flex;
  padding: 20px 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 125px;
  background-color: var(--Grey-F7F7F7, #f7f7f7);
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background-color: #f54f1f;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  }
`;
