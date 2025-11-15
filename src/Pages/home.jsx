import React from 'react'
import { AdverSlideWrapper, CarouselWrap, CategoryCon, CategorySwiper, CategoryWrap, GridImg, GridImgForOneType, GridInsideWrap, GridInsideWrapOneType, MenAndWomenSortCon, MenVsWomenWrap, OneTypeProductGrid, PremiumShopWrap, PremShopCon, ProductsGrid, SliderPartCon, TrendingGridWrap, TrendingGridWrapOneType, TrendProductGridCon, TrendProductGridConOneType, Trendtext, TrendtextOneType, TrendViewButton } from './homeStyle'
import NavbarComponent from '../FlexibleBars/navbar'
import slider_woman from '../assets/home_assets/trendy-woman.png'
import eCommerce from '../assets/home_assets/ecommerce.jpg'
import shopify from '../assets/home_assets/shopify.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import cate1 from  "../assets/home_assets/cate1.png"
import cate2 from  "../assets/home_assets/cate2.png"
import cate3 from  "../assets/home_assets/cate3.png"
import cate4 from  "../assets/home_assets/cate4.png"
import cate5 from  "../assets/home_assets/cate5.png"
import cate6 from  "../assets/home_assets/cate6.png"
import womanca from '../assets/home_assets/womanca.png'
import manca from '../assets/home_assets/manca.png'
import vec from '../assets/home_assets/Vector_right.svg'
import bgImg from "../assets/home_assets/goodsPremium.png";
import trend1 from '../assets/home_assets/trend1.png'
import trend2 from '../assets/home_assets/trend2.png'
import trend3 from '../assets/home_assets/trend3.png'
import trend4 from '../assets/home_assets/trend4.png'
import trend5 from '../assets/home_assets/trend5.png'
import trend6 from '../assets/home_assets/trend6.png'
import like from '../assets/home_assets/like.svg'
import styled from 'styled-components'
import sweet_girl from '../assets/home_assets/sweet_girl.png'
import sweet_boy from '../assets/home_assets/sweet_boy.png'
import shoes1 from '../assets/home_assets/shoes1.png'
import shoes2 from '../assets/home_assets/shoes2.png'
import shoes3 from '../assets/home_assets/shoes3.png'
import InstagramIcon from "@mui/icons-material/Instagram"; // ✅ To‘g‘rilangan import
import Footer from '../FlexibleBars/footer'
import { useNavigate } from 'react-router-dom'

const HomeCompanent = () => {
  const images = [
    cate1,
    cate2,
    cate3,
    cate4,
    cate5,
    cate6,
    cate1,
    cate2,
    cate3,
    cate4,
    cate5,
    cate6,
  ];
  const images_media = [
    "https://picsum.photos/300/300?random=1",
    "https://picsum.photos/300/300?random=2",
    "https://picsum.photos/300/300?random=3",
    "https://picsum.photos/300/300?random=4",
    "https://picsum.photos/300/300?random=5",
    "https://picsum.photos/300/300?random=6",
    "https://picsum.photos/300/300?random=7",
    "https://picsum.photos/300/300?random=8",
    "https://picsum.photos/300/300?random=9",
    "https://picsum.photos/300/300?random=10"
  ];
  const navigate = useNavigate()
  const shopsPageOpener = (title) => {
    localStorage.setItem("shopTitle", title);
    navigate("/shops");
  };
  return (
    <div>
        <NavbarComponent/>
        <AdverSlideWrapper>
          <SliderPartCon>
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img src={slider_woman} alt="slider_woman" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eCommerce} alt="eCommerce" />
            </SwiperSlide>
            <SwiperSlide>
             <img src={shopify} alt="shopify" />
            </SwiperSlide>
            </Swiper>
          </SliderPartCon>
        </AdverSlideWrapper>
        <CategoryWrap>
          <CategoryCon>
              <div className='infoCategory'>
                <p>Category</p>
                <button>View all categories</button>
              </div>
              <CategorySwiper>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  1024: { slidesPerView: 6 },
                  768: { slidesPerView: 3 },
                  480: { slidesPerView: 2 },
                }}
              >
                {images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={src} alt={`slide-${idx}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
              </CategorySwiper>
          </CategoryCon>
        </CategoryWrap>
        <MenVsWomenWrap>
          <MenAndWomenSortCon>
            <div className='categwrap'>
              <img style={{width: "616px"}} src={womanca} alt="womanca" />
              <div>
                  <p>Girls T-shirts — 924 items</p>
                  <small onClick={() => shopsPageOpener("Girls T-shirts")} style={{display: "flex", gap: "16px", cursor: "pointer"}}> <img src={vec} alt="vec" /> View all products</small>
              </div>
            </div>
            <div className='categwrap'>
              <img style={{width: "616px"}} src={manca} alt="manca" />
              <div>
                <p>Men’s shirts — 1254 items</p>
                <small onClick={() => shopsPageOpener("Men's clothes")} style={{display: "flex", gap: "16px", cursor: "pointer"}}> <img src={vec} alt="vec" /> View all products</small>
              </div>
            </div>
          </MenAndWomenSortCon>
        </MenVsWomenWrap>
        <PremiumShopWrap>
          <PremShopCon>
              <img style={{width: "100%"}} src={bgImg} alt="bgImg" />
              <div>
                 <p className='infowrapimg'>
                    <small>Goods for sports</small>
                    <span>— 20%</span>
                  </p> 
                  <small style={{display: "flex", gap: "16px", cursor: "pointer"}}> <img src={vec} alt="vec" /> Premium shop</small>
              </div>
          </PremShopCon>
        </PremiumShopWrap>
        <TrendingGridWrap>
            <TrendProductGridCon>
                <Trendtext>Trending products</Trendtext>
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
        <Container>
          <Card>
            <img src={sweet_girl} alt="Sweet girls" />
            <div className="content">
              <h2>For sweet girls</h2>
              <button>Shop now</button>
            </div>
          </Card>

          <Card>
            <img src={sweet_boy} alt="Cheerful guys" />
            <div className="content">
              <h2>For cheerful guys</h2>
              <button>Shop now</button>
            </div>
          </Card>
        </Container>
        <TrendingGridWrapOneType>
            <TrendProductGridConOneType>
                <TrendtextOneType>Trending shoes</TrendtextOneType>
                <OneTypeProductGrid>
                  <GridInsideWrapOneType>
                    <div className='trendproimgwrap' style={{width: "400px"}}>
                     <GridImgForOneType src={shoes1} alt="shoes1" />
                     <button>-46%</button>
                    </div>
                    <div>
                      <p> <span>Blazer Mid 77 PRM</span> <img src={like} alt="like" /> </p>
                      <small>$209.00</small> 
                    </div>
                  </GridInsideWrapOneType>
                  <GridInsideWrapOneType>
                    <GridImgForOneType src={shoes2} alt="shoes2" />
                    <div>
                      <p> <span>Nike Air Max 90</span> <img src={like} alt="like" /> </p>
                      <small>$309.00</small>
                    </div>
                  </GridInsideWrapOneType>
                  <GridInsideWrapOneType>
                    <GridImgForOneType src={shoes3} alt="shoes3" />
                    <div>
                      <p> <span>ThomasMunz Force</span> <img src={like} alt="like" /> </p>
                      <small>$259.00</small>
                    </div>
                  </GridInsideWrapOneType>
                </OneTypeProductGrid>
            </TrendProductGridConOneType>
        </TrendingGridWrapOneType>
        <CarouselWrap>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={5}
            loop
          >
            {images_media.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Slide ${index}`} className="slide-img" />
                <div className="slide-overlay">
                  <InstagramIcon className="insta-icon" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CarouselWrap>
        <Footer/>
    </div>
  )
}

export default HomeCompanent
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  max-width: 1300px;
  width: 100%;
  padding: 25px 20px;
  margin: 0 auto;
`;

const Card = styled.div`
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background-color: #f8f8f8;
  display: flex;
  align-items: flex-end;
  justify-content: left;
  min-height: 930px;
  padding: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 2;
    text-align: left;
    color: white;
    padding-bottom: 25px;
  }

  h2 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  button {
    background: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #f2f2f2;
  }
`;
