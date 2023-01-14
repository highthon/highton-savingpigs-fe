import React, {
  forwardRef,
  LegacyRef,
  MutableRefObject,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Img from "../../assets/images/index";

function SignUp() {
  const [modal, setModal] = useState(false);
  const [last, setLast] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(inputRef.current);
  }, []);
  return (
    <TotalWrapper>
      {modal && (
        <ModalWrapper>
          <OutsideClickHandler
            onOutsideClick={() => {
              setModal(false);
            }}
          >
            <div>
              <img src={Img.Img_groupmodal} />
              <img
                src={Img.Img_nhicon}
                id="icon"
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = "농협";
                  }
                  setModal(false);
                }}
              />
              <img
                src={Img.Img_modelexit}
                id="exit"
                onClick={() => setModal(false)}
              />
            </div>
          </OutsideClickHandler>
        </ModalWrapper>
      )}
      <Head>
        <img src={Img.Img_backarrow} onClick={() => navigate("/")} />
        <h1>회원가입</h1>
      </Head>
      <Input name="이름" placeholder="이름" onChange={() => {}} />
      <Input name="아이디" placeholder="아이디" onChange={() => {}} />
      <Input
        name="비밀번호"
        placeholder="비밀번호 입력 (영어+숫자 8자리 이상)"
        onChange={() => {}}
      />
      <Input
        name="비밀번호 재확인"
        placeholder="비밀번호 재확인"
        onChange={() => {}}
      />
      <Input
        name="닉네임"
        placeholder="닉네임 입력"
        onChange={() => {}}
        check
      />
      <Input name="계좌번호" placeholder="계좌번호 입력" onChange={() => {}} />
      <Input
        name="은행"
        placeholder="은행 선택"
        onChange={() => {}}
        bank
        onClick={() => {
          setModal(true);
        }}
        ref={inputRef}
      />
      <Input
        name="예금주명"
        placeholder="예금주명 입력"
        onChange={() => {
          setLast(true);
        }}
      />
      <ButtonWrapper isLast={last}>
        <button onClick={() => navigate("/")}>가입하기</button>
      </ButtonWrapper>
    </TotalWrapper>
  );
}

interface InputProps {
  placeholder: string;
  name: string;
  onChange?: () => void;
  check?: boolean;
  bank?: boolean;
  onClick?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, onChange, placeholder, bank, check, onClick }, ref) => {
    return (
      <InputWrapper>
        <h2>{name}</h2>
        <InputBox onClick={bank ? onClick : null}>
          <input
            type="text"
            placeholder={placeholder}
            ref={ref}
            onChange={onChange}
          />
          {check && (
            <p onClick={() => alert("사용 가능한 닉네임입니다.")}>중복확인</p>
          )}
          {bank && <img src={Img.Img_bankselect} />}
        </InputBox>
      </InputWrapper>
    );
  }
);
export default SignUp;

const ModalWrapper = styled.div`
  border: 1px solid black;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100vh;
  background-color: #c7c7c791;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  > div {
    position: relative;
    #icon {
      position: absolute;
      top: 94px;
      left: 26px;
    }
    #exit {
      position: absolute;
      top: 35px;
      right: 36px;
    }
  }
`;

const Head = styled.div`
  position: fixed;
  background-color: white;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  > h1 {
    position: absolute;
    width: 80px;
    height: 27px;
    left: 158px;
    top: 62px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: rgba(0, 0, 0, 0.89);
  }
  > img {
    position: absolute;
    width: 8px;
    height: 16px;
    left: 27px;
    top: 66px;
  }
`;

const ButtonWrapper = styled.div<{ isLast: boolean }>`
  position: fixed;
  width: 100%;
  height: 102px;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  > button {
    width: 350px;
    height: 64px;
    background: ${(props) => (props.isLast ? "#FB9BBE" : "#c7c7c7")};
    border-radius: 27.5px;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
    border: none;
  }
`;

const TotalWrapper = styled.div`
  overflow-y: scroll;
  padding-top: 110px;
  width: 100%;
  height: calc(100% - 102px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 30px;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const InputBox = styled.div`
  width: 290px;
  height: 38px;
  position: relative;
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
  > p {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #1b90e4;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  > img {
    position: absolute;
    bottom: 16px;
    right: 10px;
  }
`;
