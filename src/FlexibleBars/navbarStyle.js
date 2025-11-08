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