import styled from "styled-components";

export const NavLinksWrapProduct = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const NavLinksProduct = styled.div`
display: flex;
align-items: center;
justify-content: left;
max-width: 1300px;
width: 100%;
padding: 50px 20px;
`
export const ProductDetailsWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const ProductDetails = styled.div`
display: flex;
align-items: start;
max-width: 1300px;
width: 100%;
justify-content: space-between;
padding: 0 20px 25px 20px;
gap: 30px;
`
export const ProductsPictures = styled.div`
display: grid;
align-items: center;
grid-template-areas: "a a";
gap: 10px;
div{
    width: 350px;
    height: 510px;
    flex-shrink: 0;
    border-radius: 15px;
    img{
        width: 100%;
        border-radius: 15px;
    }
}
`
export const ProductsInfo = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: flex-start;
gap: 30px;
width: 100%;
.nameDetails{
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        width: 300px;
        color: var(--Dark-Color-202020, #202020);
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 42px; /* 131.25% */
    }
}
h3{
    color: var(--Dark-Color-202020, #202020);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
}
.priceWrap{
    display: flex;
    width: 100%;
    height: 82px;
    flex-shrink: 0; 
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    background-color: var(--Grey-F7F7F7, #F7F7F7);
    padding: 24px 30px;
    span{
        color: var(--Dark-Color-202020, #202020);
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.64px;
    }
    small{
        color: #9EA3A8;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.4px;
        text-decoration-line: line-through;
    }
    p{
        display: inline-flex;
        padding: 5px 9px 3px 9px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 100px;
        background-color: var(--Brand-Color-F54F1F, #F54F1F);
        color: var(--White, #FFF);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.32px;
    }
}
.colorpickerSide{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .color-picker {
        display: flex;
        gap: 12px;
        align-items: center;
        }

        .color-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 3px solid transparent;
        background: var(--clr);
        cursor: pointer;
        transition: 0.25s ease;
        }

        /* Hover effekti – rang yorqinlashadi va biroz kattalashadi */
        .color-btn:hover {
        filter: brightness(1.2);
        transform: scale(1.12);
        }

        /* Tanlangan rang – outline bilan */
        .color-btn.active {
        border-color: #00000055;
        box-shadow: 0 0 0 3px #00000022;
        }
}
.addBtn{
    display: flex;
    width: 100%;
    padding: 19px 80px;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
    border: 1px solid var(--Dark-Color-202020, #202020);
    background-color: var(--Dark-Color-202020, #202020);
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
}
.sizeWrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sizeButtons{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 4px;
        .sizeBtn {
            width: 64px;
            height: 44px;
            display: flex;
            justify-content: center;
            align-items: center;  /* 🔥 Matnni vertikal o‘rtaga keltiradi */
            flex-shrink: 0;
            margin-left: 10px;
            border: none;
            padding: 0; /* 🔥 Endi padding kerak emas */
            text-align: center;
            color: var(--Dark-Color-202020, #202020);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            border-radius: 76px;
            background-color: var(--Grey-F7F7F7, #F7F7F7);

            &:hover {
                border: 1px solid var(--Dark-Color-202020, #202020);
            }

            &.active {
                background-color: var(--Dark-Color-202020, #202020);
                color: #FFF;
            }
        }
    }
}
`
export const wrapperStyle = {
    maxWidth: "1300px",
    width: "100%",
    padding: "25px 20px",
    margin: "0 auto",
  };
  
  export const cardWrap = {
    position: "relative",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
    minHeight: "400px",
  };
  
  export const imgStyle = {
    width: "100%",
    height: "320px",
    objectFit: "cover",
    borderRadius: "15px",
    height: "auto",
  };
  
  export const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(3px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "0.3s",
  };
  
  export const iconStyle = {
    background: "white",
    borderRadius: "50%",
    padding: "10px",
    fontSize: "32px",
  };