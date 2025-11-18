import styled from "styled-components";

export const HeaderCart = styled.div`
display: flex;
align-items: center;
justify-content: center;
div{
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 20px;
    gap: 15px;
    max-width: 1300px;
    width: 100%;
    h3{
        color: var(--Dark-Color-202020, #202020);
        font-size: 45px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    p{
        color: var(--Dark-Color-202020, #202020);
        font-size: 24px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
    }
}
`