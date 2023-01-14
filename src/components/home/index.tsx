import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Img_bannertext,
  Img_home,
  Img_homeselected,
  Img_product,
  Img_product2,
  Img_product3,
  Img_product4,
  Img_product5,
  Img_saveid,
} from "../../assets/images";
import Footer from "../footer";
import Product from "../product";

function Home() {
  const navigate = useNavigate();
  const arr = [
    "디지털기기",
    "생활가전",
    "가구/인테리어",
    "의류",
    "뷰티/미용",
    "스포츠/레저",
    "도서",
    "기타",
  ];

  return (
    <TotalWrapper>
      <img src={Img_home} alt="" />
      <img src={Img_bannertext} id="imgtext" />
      <div id="search" onClick={() => navigate("/search")} />
      <div id="alarm" />
      <div id="digital" />
      <IconWrapper>
        {arr.map((value) => {
          return <div className="icon" />;
        })}
      </IconWrapper>
      <ProductWrapper>
        <h1>슬라임 도둑을 위한 추천</h1>
        <div id="container">
          <Product
            name="내셔널지오그래픽 패딩"
            price={220000}
            src={Img_product2}
          />
          <Product name="구찌 신발" price={350000} src={Img_product3} />
          <Product name="빈티지 목걸이" price={20000} src={Img_product4} />
          <Product name="아크메드라비 도넛" price={45000} src={Img_product5} />
          <Product name="록시땅 핸드크림" price={30000} src={Img_product} />
        </div>
      </ProductWrapper>
      <Footer src={Img_homeselected} />
    </TotalWrapper>
  );
}

export default Home;

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
