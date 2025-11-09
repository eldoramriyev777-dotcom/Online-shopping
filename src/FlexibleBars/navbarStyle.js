import styled from "styled-components"

export const FullWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const NavbarAllWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #202020;
width: 100%;
`
export const NavbarTopWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1300px;
width: 100%;
height: 36px;
padding: 0 20px 0 20px;
.location {
display: flex;
gap: 8px;
p{
    width: 214;
opacity: 1;
font-weight: 400;
font-style: Regular No 2;
font-size: 14px;
color: #FFFFFF;
}
}
.options {
display: flex;
gap: 50px;
p{
    display: flex;
    align-items: center;
    gap: 8px;
    small{
        opacity: 1;
        font-weight: 400;
        font-style: Regular No 2;
        font-size: 14px;
        color: #FFFFFF;
    }
}
}
`
export const NavbarBottomPartAllWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-color: #F7F7F7;
`
export const MidAndBotJointWrap = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 25px;
max-width: 1300px;
width: 100%;
padding: 0 20px 0 20px;
height: 132px;
.freeline{
width: 1260px;
opacity: 0.1;
border-width: 1px;
background-color: #202020;
border: 1px solid #202020
}
`
export const NavbarCenterWrap = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
.leftsidewrap{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .breakline{
        width: 30px;
        rotate: 90deg;
        opacity: 0.1;
        border-width: 1px;
        background-color: #202020;
        border: 1px solid #202020;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
}
`
export const BurgerImg = styled.img`
  cursor: pointer;
  border-radius: 2px;
  object-fit: cover;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FullscreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6); /* 🔹 qoraygan fon */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px); /* 🔹 xiralik */
  padding: 40px; /* 🔹 tashqi margin (ichkariga joy bo‘lishi uchun) */
  box-sizing: border-box;
`;

export const ModalContent = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  position: relative;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Header = styled.h2`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-align: center;
  line-height: 1.7;
  font-size: 17px;
  max-width: 750px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 32px;
  background: transparent;
  border: none;
  color: #333;
  transition: color 0.2s ease;

  &:hover {
    color: #d32f2f;
  }
`;

export const ActionButton = styled.button`
  padding: 10px 25px;
  border: none;
  background: #2d89ef;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.25s ease;

  &:hover {
    background: #1b63b0;
  }
`;

export const NavbarBottomWrap = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 46px;
}
p{
font-weight: 400;
font-size: 18px;
color: rgba(32, 32, 32, 1);
}
`