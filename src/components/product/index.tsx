import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Img_heart,
  Img_nhicon,
  Img_product,
  Img_unheart,
} from "../../assets/images";

interface Props {
  src: string;
  name: string;
  price: number;
}

function Product({ src, name, price }: Props) {
  const [onoff, setOnOff] = useState(false);
  const navigate = useNavigate();

  return (
    <TotalWrapper onClick={() => navigate("/buy")}>
      <ImgWrapper>
        <img src={!src ? Img_nhicon : src} alt="" id="view" />
        {onoff ? (
          <img
            src={Img_heart}
            alt=""
            className="icon"
            onClick={() => setOnOff(false)}
          />
        ) : (
          <img
            src={Img_unheart}
            alt=""
            className="icon"
            onClick={() => setOnOff(true)}
          />
        )}
      </ImgWrapper>
      <h1>{!price ? 999999 : price}원</h1>
      <h2>{!name ? "구찌" : name}</h2>
    </TotalWrapper>
  );
}

export default Product;

const TotalWrapper = styled.div`
  width: 120px;
  height: 167px;
  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.8);
    margin-top: 10px;
  }
  h2 {
    font-weight: 500;
    font-size: 11px;
    line-height: 15px;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.6);
    margin-top: 3px;
  }
`;
const ImgWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  position: relative;
  > .icon {
    position: absolute;
    top: 8px;
    right: 8px;
  }
  > #view {
    width: 100%;
    height: 100%;
  }
`;
