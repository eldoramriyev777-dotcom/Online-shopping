import styled from "styled-components";

export const SignInAllWrap = styled.div`
display: flex;
max-width: 1400px;
width: 100%;
align-items: center;
justify-content: center;
gap: 20px;
padding: 20px;
height: 900px;
.imgwrap{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;       /* ichidagi blossomni joylash uchun kerak */
    width: 100%;
    height: auto;
    overflow: hidden;
    .blossom{
        position: absolute;
        top: 30px;
        left: 30px;
        z-index: 2;               /* ustida turishi uchun */
        width: auto;
        height: auto;
    }
}
`
export const LoginImg = styled.img`
width: 969px;
height: 860px;
top: 20px;
left: 20px;
rotate: 0 deg;
opacity: 1;
border-radius: 15px;
width: 100%;
display: block;
`
export const SignInContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 900px;
gap: 10px;
padding: 20px;
`
export const SignInTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 411px;
height: 752px;
flex-shrink: 0;
background-color: #FFF;
border-radius: 15px;
padding: 30px;
opacity: 1;
.topdivision{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: left;
    flex-direction: column;
    gap: 10px;
    p{
        color: var(--Black, #000);
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px; /* 142.857% */
    }
    small{
        color: #9EA3A8;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    span{
        color: var(--Black, #000);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
    }
}
.midinputwrap{
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 100%;
    gap: 16px;
    input{
        font-size: 16px;
        padding: 10px 6px;
        background: transparent;
        border: none;                /* remove all borders */
        border-bottom: 2px solid rgba(0,0,0,0.2); /* only bottom border visible */
        outline: none;               /* avoid default outline */
        transition: border-color .15s ease, box-shadow .15s ease;
        color: black;
        width: 100%;
    }
    p{
        color: var(--Dark-Color-202020, #202020);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
    }
}
.buttonWrap{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    button{
        display: flex;
        width: 351px;
        padding: 13px 30px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 90px;
        background-color: var(--Brand-Color-F54F1F, #F54F1F);
        color: #FFF;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border: none;
        cursor: pointer;
    }
}
`
export const SignInFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 411px;
height: 98px;
flex-shrink: 0;
border-radius: 15px;
background-color: #FFF;
opacity: 1;
padding: 24px 30px;
.mediawrap{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 50px;
        flex-shrink: 0;
        border-radius: 10px;
        background-color: #D3D3D3;
    }
}
`
export const SignUpImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;       /* ichidagi blossomni joylash uchun kerak */
width: 100%;
height: auto;
overflow: hidden;
.signupimg{
    width: 969px;
    height: 860px;
    top: 20px;
    left: 20px;
    rotate: 0 deg;
    opacity: 1;
    border-radius: 15px;
    width: 100%;
    display: block;
}
.blossom{
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 2;               /* ustida turishi uchun */
    width: auto;
    height: auto;
}
`
export const SignUpContainer = styled.div`
padding: 30px;
width: 411px;
height: 860px;
flex-shrink: 0;
border-radius: 15px;
background-color: #FFF;
`
export const SignUpTop = styled.div`
display: flex;
flex-direction: column;
background-color: #FFF;
gap: 100px;
.topdivision{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: left;
    flex-direction: column;
    gap: 10px;
    p{
        color: var(--Black, #000);
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px; /* 142.857% */
    }
    small{
        color: #9EA3A8;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    span{
        color: var(--Black, #000);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
    }
}
/* FormComponent.css */
.form-container {
  width: 350px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-size: 14px;
  color: #7a7a7a;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 8px 0;
  font-size: 16px;
  outline: none;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border-bottom: 2px solid black;
}

.form-checkbox {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
}

.form-checkbox input[type="checkbox"] {
  margin-right: 10px;
}

button {
  width: 100%;
  margin-top: 120px;
  display: flex;
    width: 351px;
    padding: 13px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    border-radius: 90px;
    background-color: var(--Brand-Color-F54F1F, #F54F1F);
    border: none;
    cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

`
export const SignUpButtonWrap = styled.div`

`
export const SignUpTopForReset = styled.div`
display: flex;
flex-direction: column;
background-color: #FFF;
align-items: center;
justify-content: space-between;
.topdivision{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: left;
    flex-direction: column;
    gap: 10px;
    p{
        color: var(--Black, #000);
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px; /* 142.857% */
    }
}
/* FormComponent.css */
.form-container {
  width: 350px;
  margin: 0 auto;
  .backbutton{
    display: flex;
    width: 139px;
    padding: 13px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--Dark-Color-202020, #202020);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 90px;
    border: 2px solid var(--Dark-Color-202020, #202020);
    background-color: transparent;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-size: 14px;
  color: #7a7a7a;
  margin-bottom: 5px;
}

input[type="email"]
{
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 8px 0;
  font-size: 16px;
  outline: none;
}

input[type="email"]:focus {
  border-bottom: 2px solid black;
}

button {
    width: 100%;
    margin-top: 120px;
    display: flex;
    width: 351px;
    padding: 13px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    border-radius: 90px;
    margin-top: 350px;
    background-color: var(--Brand-Color-F54F1F, #F54F1F);
    border: none;
    cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
`
export const ResetWrap = styled.div`
display: flex;
background-color: #FFF;
padding: 35px;
border-radius: 10px;
width: 411px;
height: 860px;
flex-shrink: 0;
`
export const ConfirmPwForm = styled.form`
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
width: 100%;
height: 100%;
.confirmTexts{
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  gap: 10px;
  p{
      color: var(--Black, #000);
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; /* 142.857% */
  }
  small{
      color: #9EA3A8;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
  }
  span{
      color: var(--Black, #000);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-decoration-skip-ink: none;
      text-decoration-thickness: auto;
      text-underline-offset: auto;
      text-underline-position: from-font;
  }
}
.midinputswithtime{
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  .inputswrap{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 12px;
    input{
      width: 79px;
      height: 52px;
      flex-shrink: 0;
      border-radius: 15px;
      border: 2px solid var(--Gray-text, #9EA3A8);
      background-color: transparent;
      text-align: center;
      font-size: 28px;
    }
    input:focus{
        outline: 1px solid green;
      }
    p{
      color: var(--Black, #000);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 128.571% */
    }
  }
}
.buttonswrap{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  .back{
    display: flex;
    width: 139px;
    padding: 13px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 90px;
    border: 2px solid var(--Dark-Color-202020, #202020);
    background-color: transparent;
    color: var(--Dark-Color-202020, #202020);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
  .submit{
    display: flex;
    width: 204px;
    padding: 13px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 90px;
    border: none;
    background-color: var(--Brand-Color-F54F1F, #F54F1F);
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
}
`
export const RecreatePwForm = styled.form`
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
width: 100%;
height: 100%;
.confirmTexts{
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  gap: 10px;
  p{
      color: var(--Black, #000);
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; /* 142.857% */
  }
}
.buttonswrap{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  .back{
    display: flex;
    width: 139px;
    padding: 13px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 90px;
    border: 2px solid var(--Dark-Color-202020, #202020);
    background-color: transparent;
    color: var(--Dark-Color-202020, #202020);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
  .submit{
    display: flex;
    width: 204px;
    padding: 13px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 90px;
    border: none;
    background-color: var(--Brand-Color-F54F1F, #F54F1F);
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
}
/* CSS */
.form{
  display: flex;
  flex-direction: column;
  gap: 18px;            /* elementlar orasidagi bo'sh joy */
  width: 320px;         /* kerak bo'lsa o'zgartiring */
  box-sizing: border-box;
}
.input{
  background: transparent;     /* shaffof */
  border: none;                /* umumiy border yo'q */
  border-bottom: 2px solid #000; /* faqat pastki chiziq, qora */
  padding: 10px 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

/* focus paytida ozgina effekt */
.input:focus{
  border-bottom-color: #000;
  box-shadow: 0 2px 0 rgba(0,0,0,0.06);
}

/* placeholder rangi */
.input::placeholder{
  color: rgba(0,0,0,0.35);
}

`