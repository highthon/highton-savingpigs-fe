import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Img_addpicture,
  Img_collectset,
  Img_exit,
  Img_modelexit,
  Img_product,
  Img_stockpig,
  Img_wallet,
} from "../../assets/images";
import { Input } from "../signup";

function Create() {
  const navigate = useNavigate();
  const [onoff, setOnOff] = useState(false);
  const [addimg, setaddimg] = useState(false);

  return (
    <TotalWrapper>
      <Head>
        <img src={Img_exit} onClick={() => navigate("/home")} />
        <h1>올리면돼지</h1>
      </Head>
      <ImgWrapper>
        <img
          src={Img_addpicture}
          alt=""
          onClick={() => {
            setTimeout(() => {
              setaddimg(true);
            }, 1000);
          }}
        />
        {addimg && <img src={Img_product} />}
        <p>{addimg ? 1 : 0}/4</p>
      </ImgWrapper>
      <Input name="상품명" placeholder="상품명 입력" />
      <Input name="상품설명" placeholder="상품설명 입력" />
      <Input name="카테고리" placeholder="카테고리 설정" />
      <Input name="#태그" placeholder="#" />
      <Input name="₩가격" placeholder="₩" />
      <img src={Img_wallet} style={{ marginBottom: "28px" }} />
      <img
        src={Img_collectset}
        style={{ marginBottom: "158px" }}
        onClick={() => setOnOff(true)}
      />
      <Button onClick={() => navigate("/home")}>
        <p>등록하기</p>
      </Button>
      {onoff && (
        <OutsideClickHandler onOutsideClick={() => setOnOff(false)}>
          <Pig src={Img_stockpig} onClick={() => navigate("/sell")} />
        </OutsideClickHandler>
      )}
    </TotalWrapper>
  );
}

export default Create;

const Button = styled.div`
  width: 350px;
  height: 64px;
  left: 20px;
  top: 726px;
  background: #f593b7;
  border-radius: 58px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

const Pig = styled.img`
  position: fixed;
  bottom: 0px;
  left: 0px;
`;

const TotalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
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
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-align: center;

    color: rgba(0, 0, 0, 0.89);
    position: absolute;
    height: 27px;
    left: 149px;
    top: 62px;
  }
  > img {
    position: absolute;
    width: 16px;
    height: 16px;
    left: 27px;
    top: 66px;
  }
`;

const ImgWrapper = styled.div`
  height: 120px;
  margin-top: 134px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  width: calc(100% - 40px);
  margin-bottom: 31px;
  position: relative;
  > img {
    width: 110px;
    height: 110px;
    border-radius: 18px;
  }
  > p {
    position: absolute;
    bottom: 20px;
    left: 48px;
  }
`;
