import React from 'react'
import { AdverSlideWrapper, CategoryCon, CategorySwiper, CategoryWrap, GridImg, GridInsideWrap, MenAndWomenSortCon, MenVsWomenWrap, PremiumShopWrap, PremShopCon, ProductsGrid, SliderPartCon, TrendingGridWrap, TrendProductGridCon, Trendtext, TrendViewButton } from './homeStyle'
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
                  <small style={{display: "flex", gap: "16px", cursor: "pointer"}}> <img src={vec} alt="vec" /> View all products</small>
              </div>
            </div>
            <div className='categwrap'>
              <img style={{width: "616px"}} src={manca} alt="manca" />
              <div>
                <p>Men’s shirts — 1254 items</p>
                <small style={{display: "flex", gap: "16px", cursor: "pointer"}}> <img src={vec} alt="vec" /> View all products</small>
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
                    <GridImg src={trend1} alt="trend1" />
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
  )
}

export default HomeCompanent