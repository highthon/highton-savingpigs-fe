import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Img from "../../assets/images/index";

function Login() {
  const navigate = useNavigate();
  return (
    <TotalWrapper>
      <img src={Img.Img_startlogo} />
      <h1>어때, 거래돼지?</h1>
      <InputContainer>
        <Input placeholder="아이디" onChange={() => {}} />
        <Input placeholder="비밀번호" onChange={() => {}} />
        <img src={Img.Img_saveid} alt="" />
      </InputContainer>
      <ButtonWrapper>
        <button onClick={() => navigate("/home")}>로그인</button>
        <span>
          <p id="link">아이디 찾기</p>
          <p>|</p> <p id="link">비밀번호 찾기</p> <p>|</p>{" "}
          <p id="link" onClick={() => navigate("/signup")}>
            회원가입
          </p>
        </span>
      </ButtonWrapper>
    </TotalWrapper>
  );
}

export default Login;

interface InputProps {
  placeholder: string;
  onChange: () => void;
}

function Input({ onChange, placeholder }: InputProps) {
  return (
    <InputWrapper>
      <input type="text" placeholder={placeholder} />
    </InputWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    width: 350px;
    height: 64px;
    background: #fb9bbe;
    border: 4px solid #fb9bbe;
    border-radius: 27.5px;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-top: 97px;
  }
  > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 283px;
    height: 19px;
    margin-top: 10px;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */
    color: rgba(0, 0, 0, 0.72);
    #link {
      cursor: pointer;
    }
  }
`;

const InputWrapper = styled.div`
  width: 290px;
  height: 38px;
  border-bottom: 1px solid #767676;
  > input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    color: black;
    :focus::placeholder {
      opacity: 0;
    }
    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100px;
  margin-top: 360px;
  > img {
    position: absolute;
    bottom: -35px;
    left: 0px;
  }
`;

const TotalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    position: absolute;
    top: 149px;
    left: 105px;
  }
  > h1 {
    position: absolute;
    left: 116px;
    top: 325px;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: rgba(0, 0, 0, 0.84);
  }
`;
