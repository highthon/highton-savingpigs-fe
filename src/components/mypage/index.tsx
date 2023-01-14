import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Img_bannertext,
  Img_home,
  Img_homeselected,
  Img_mypage,
  Img_mypageselected,
  Img_product,
  Img_saveid,
} from "../../assets/images";
import Footer from "../footer";
import Product from "../product";

function Mypage() {
  const navigate = useNavigate();

  return (
    <TotalWrapper>
      <img src={Img_mypage} alt="" onClick={() => navigate("/home")} />
      <Footer src={Img_mypageselected} />
    </TotalWrapper>
  );
}

export default Mypage;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > #imgtext {
    position: absolute;
    top: 131px;
    left: 20px;
  }
  > #search {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 58px;
    right: 65px;
  }
  > #alarm {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 58px;
    right: 26px;
  }
`;

const IconWrapper = styled.div`
  width: 330px;
  height: 160px;
  position: absolute;
  top: 280px;
  left: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  > .icon {
    margin-left: 10px;
    width: 40px;
    height: 40px;
  }
`;
const ProductWrapper = styled.div`
  margin-top: 50px;
  width: calc(100% - 40px);
  height: 210px;
  > h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.8);
  }
  > #container {
    width: 350px;
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    overflow-y: hidden;
    gap: 10px;
    overflow-x: scroll;
  }
`;
