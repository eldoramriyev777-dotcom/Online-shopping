import styled, { keyframes } from "styled-components";

/* --- Keyframes animatsiyalar --- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.95); opacity: 0.7; }
  to { transform: scale(1); opacity: 1; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const buttonPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const loadingSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

/* --- SignIn va SignUp wrapper --- */
export const SignInAllWrap = styled.div`
display: flex;
max-width: 1200px;
width: 100%;
align-items: center;
justify-content: center;
gap: 20px;
padding: 20px;
animation: ${fadeIn} 0.5s ease forwards;

.imgwrap{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    .blossom{
        position: absolute;
        top: 30px;
        left: 30px;
        z-index: 2;
        width: auto;
        height: auto;
        transition: all 0.4s ease;
        &:hover{
            transform: scale(1.05) rotate(2deg);
        }
    }
}
`;

export const LoginImg = styled.img`
width: 100%;
height: auto;
border-radius: 15px;
display: block;
transition: all 0.4s ease;
&:hover{
    transform: scale(1.02);
    opacity: 0.95;
}
`;

export const SignInContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 10px;
padding: 20px;
animation: ${fadeIn} 0.5s ease forwards;
`;

export const SignInTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 411px;
flex-shrink: 0;
background-color: #FFF;
border-radius: 15px;
padding: 30px;
opacity: 1;
transition: all 0.3s ease;

.topdivision{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: left;
    flex-direction: column;
    gap: 10px;
    p{
        color: var(--Black, #000);
        font-size: 24px;
        font-weight: 400;
        line-height: 40px;
        transition: color 0.3s ease;
    }
    small{
        color: #9EA3A8;
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        transition: color 0.3s ease;
    }
    span{
        color: var(--Black, #000);
        font-size: 16px;
        font-weight: 500;
        text-decoration-line: underline;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
            color: #F54F1F;
            transform: translateY(-2px);
        }
    }
}

.midinputwrap{
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 340px;
    gap: 16px;
    input{
        font-size: 16px;
        padding: 10px 6px;
        background: transparent;
        border: none;
        border-bottom: 2px solid rgba(0,0,0,0.2);
        outline: none;
        transition: all 0.3s ease;
        color: black;
        width: 100%;
        &:focus{
            border-color: #F54F1F;
            box-shadow: 0 2px 8px rgba(245,79,31,0.2);
        }
    }
    p{
        color: var(--Dark-Color-202020, #202020);
        font-size: 14px;
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.3s ease;
        &:hover{
            color: #F54F1F;
        }
    }
}

.buttonWrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    button{
        display: flex;
        width: 100%;
        padding: 13px 30px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 90px;
        background-color: var(--Brand-Color-F54F1F, #F54F1F);
        color: #FFF;
        font-size: 18px;
        font-weight: 500;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
            transform: scale(1.05);
            background-color: #d43c0d;
        }
        &:active{
            transform: scale(0.98);
        }
    }
}
`;

/* --- SignInFooter --- */
export const SignInFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 411px;
flex-shrink: 0;
border-radius: 15px;
background-color: #FFF;
opacity: 1;
padding: 24px 30px;
transition: all 0.3s ease;

p{
  align-items: center;
  font-size: 14px;
}

.mediawrap{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 40px;
        border-radius: 10px;
        background-color: #D3D3D3;
        transition: all 0.3s ease;
        &:hover{
            transform: scale(1.05);
            background-color: #B0B0B0;
        }
    }
}
`;

/* --- Loading overlay --- */
export const LoadingOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
z-index: 9999;
animation: ${fadeIn} 0.3s ease forwards;

.spinner {
  width: 50px;
  height: 50px;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #F54F1F;
  border-radius: 50%;
  animation: ${loadingSpin} 1s linear infinite;
}
`;

/* --- SignUp Image Wrapper --- */
export const SignUpImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 100%;
height: auto;
overflow: hidden;
animation: ${fadeIn} 0.5s ease forwards;

.signupimg{
    width: 100%;
    height: auto;
    top: 20px;
    left: 20px;
    rotate: 0deg;
    opacity: 1;
    border-radius: 15px;
    display: block;
    transition: all 0.4s ease;
    &:hover{
        transform: scale(1.03);
        opacity: 0.95;
    }
}
.blossom{
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 2;
    width: auto;
    height: auto;
    transition: all 0.4s ease;
    &:hover{
        transform: scale(1.05) rotate(2deg);
    }
}
`;

/* --- SignUp Container --- */
export const SignUpContainer = styled.div`
padding: 30px;
width: 411px;
flex-shrink: 0;
border-radius: 15px;
background-color: #FFF;
animation: ${scaleUp} 0.5s ease forwards;
`;

/* --- SignUp Top --- */
export const SignUpTop = styled.div`
display: flex;
flex-direction: column;
background-color: #FFF;
gap: 50px;
.topdivision{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: left;
    flex-direction: column;
    gap: 5px;
    p{
        color: var(--Black, #000);
        font-size: 28px;
        font-weight: 400;
        line-height: 40px;
        transition: color 0.3s ease;
    }
    small{
        color: #9EA3A8;
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        transition: color 0.3s ease;
    }
    span{
        color: var(--Black, #000);
        font-size: 16px;
        font-weight: 500;
        text-decoration-line: underline;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
            color: #F54F1F;
            transform: translateY(-2px);
        }
    }
}

/* --- Form Styles --- */
.form-container {
  width: 350px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease forwards;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-size: 12px;
  color: #7a7a7a;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  &:focus{
      border-color: #F54F1F;
      box-shadow: 0 2px 8px rgba(245,79,31,0.2);
  }
  &::placeholder{
      color: rgba(0,0,0,0.35);
  }
}

.form-checkbox {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 45px;
}

.form-checkbox input[type="checkbox"] {
  margin-right: 10px;
}

button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #FFF;
  font-size: 18px;
  font-weight: 500;
  border-radius: 90px;
  height: 40px;
  background-color: var(--Brand-Color-F54F1F, #F54F1F);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
      transform: scale(1.05);
      background-color: #d43c0d;
  }
  &:active{
      transform: scale(0.98);
  }
}
`;

export const SignUpButtonWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
animation: ${fadeIn} 0.5s ease forwards;
`;


/* --- SignUpTopForReset --- */
export const SignUpTopForReset = styled.div`
display: flex;
flex-direction: column;
background-color: #FFF;
align-items: center;
gap: 180px;
justify-content: space-between;
animation: ${fadeIn} 0.5s ease forwards;

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
        font-weight: 400;
        line-height: 40px;
        transition: color 0.3s ease;
    }
}

/* --- Form Container --- */
.form-container {
  width: 350px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease forwards;
  .backbutton{
    display: flex;
    width: 139px;
    padding: 13px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--Dark-Color-202020, #202020);
    font-size: 18px;
    font-weight: 500;
    border-radius: 90px;
    border: 2px solid var(--Dark-Color-202020, #202020);
    background-color: transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover{
        background-color: rgba(0,0,0,0.05);
        transform: translateY(-2px);
    }
    &:active{
        transform: translateY(0);
    }
  }
}

/* --- Form Group & Input --- */
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

input[type="email"]{
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 8px 0;
  font-size: 16px;
  outline: none;
  margin-bottom: 180px;
  transition: all 0.3s ease;
  &:focus{
      border-bottom-color: var(--Brand-Color-F54F1F, #F54F1F);
      box-shadow: 0 2px 8px rgba(245,79,31,0.2);
  }
}

/* --- Submit Button --- */
button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 13px 30px;
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
    border-radius: 90px;
    background-color: var(--Brand-Color-F54F1F, #F54F1F);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.05);
        background-color: #d43c0d;
    }
    &:active{
        transform: scale(0.98);
    }
}
`;

/* --- Reset Wrap --- */
export const ResetWrap = styled.div`
display: flex;
background-color: #FFF;
padding: 35px;
border-radius: 10px;
width: 411px;
flex-shrink: 0;
animation: ${scaleUp} 0.5s ease forwards;
transition: all 0.3s ease;
&:hover{
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}
`;

export const ConfirmPwForm = styled.form`
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
width: 100%;
height: 100%;
gap: 150px;
animation: ${fadeInUp} 0.5s ease forwards;

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
      font-weight: 400;
      line-height: 40px;
      transition: color 0.3s ease;
  }
  small{
      color: #9EA3A8;
      font-size: 16px;
      font-weight: 400;
      line-height: normal;
      transition: color 0.3s ease;
  }
  span{
      color: var(--Black, #000);
      font-size: 16px;
      font-weight: 500;
      text-decoration: underline;
      transition: color 0.3s ease, transform 0.3s ease;
      &:hover {
        color: var(--Brand-Color-F54F1F, #F54F1F);
        transform: translateX(3px);
      }
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
      transition: all 0.3s ease;
      &:focus{
          outline: none;
          border-color: var(--Brand-Color-F54F1F, #F54F1F);
          box-shadow: 0 4px 10px rgba(245,79,31,0.2);
          transform: scale(1.05);
      }
    }
    p{
      color: var(--Black, #000);
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      transition: color 0.3s ease;
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
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
      background-color: rgba(0,0,0,0.05);
      transform: translateY(-2px);
    }
    &:active{
      transform: translateY(0);
    }
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
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
      animation: ${buttonPulse} 0.6s ease-in-out;
      background-color: #d43c0d;
      transform: scale(1.05);
    }
    &:active{
      transform: scale(0.98);
    }
  }
}
`;

export const RecreatePwForm = styled.form`
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
width: 100%;
height: 100%;
gap: 180px;
animation: ${fadeInUp} 0.5s ease forwards;

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
      font-weight: 400;
      line-height: 40px;
      transition: color 0.3s ease;
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
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
      background-color: rgba(0,0,0,0.05);
      transform: translateY(-2px);
    }
    &:active{
      transform: translateY(0);
    }
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
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
      animation: ${buttonPulse} 0.6s ease-in-out;
      background-color: #d43c0d;
      transform: scale(1.05);
    }
    &:active{
      transform: scale(0.98);
    }
  }
}

/* Inputs styling */
.form{
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 320px;
  box-sizing: border-box;
}
.input{
  background: transparent;
  border: none;
  border-bottom: 2px solid #000;
  padding: 10px 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:focus{
    border-bottom-color: var(--Brand-Color-F54F1F, #F54F1F);
    box-shadow: 0 4px 10px rgba(245,79,31,0.2);
    transform: scale(1.03);
  }

  &::placeholder{
    color: rgba(0,0,0,0.35);
    transition: color 0.3s ease;
  }

  &:hover::placeholder{
    color: rgba(0,0,0,0.5);
  }
}
`;
