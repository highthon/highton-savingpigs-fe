import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Img from "../../assets/images/index";
import Product from "../product";

function Search() {
  const navigate = useNavigate();
  const [onoff, setonoff] = useState(false);

  return (
    <TotalWrapper>
      <SearchWrapper>
        <img src={Img.Img_backarrow} onClick={() => navigate("/home")} />
        <SearchInput>
          <input type="text" placeholder="검색" />
          <img src={Img.Img_search} alt="" onClick={() => setonoff(true)} />
        </SearchInput>
      </SearchWrapper>
      <RecentWrapper>
        <h1>최근 검색어</h1>
        <div id="container">
          <Tag name="구찌" />
          <Tag name="나이키 뭐시기" />
          <Tag name="아크메드라비 옷" />
        </div>
      </RecentWrapper>
      <RecentWrapper>
        <h1>이건 많이 거래돼지</h1>
        <div id="container">
          <Tag name="나이키" />
          <Tag name="애플" />
          <Tag name="샤넬" />
          <Tag name="디올" />
          <Tag name="닌텐도" />
        </div>
      </RecentWrapper>
      <Banner src={Img.Img_banner} />
      {onoff ? (
        <>
          <ProductWrapper>
            <h1>검색 결과 20건</h1>
            <div id="container">
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
            </div>
          </ProductWrapper>
          <ProductWrapper>
            <h1>인기순</h1>
            <div id="container">
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
            </div>
          </ProductWrapper>
          <ProductWrapper>
            <h1>최신순</h1>
            <div id="container">
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
              <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
            </div>
          </ProductWrapper>
        </>
      ) : (
        <ProductWrapper>
          <h1>최근 본 상품</h1>
          <div id="container">
            <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
            <Product
              name="빈티지 목걸이"
              price={20000}
              src={Img.Img_product4}
            />
            <Product
              name="아크메드라비 도넛"
              price={45000}
              src={Img.Img_product5}
            />
            <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
            <Product
              name="빈티지 목걸이"
              price={20000}
              src={Img.Img_product4}
            />
            <Product
              name="아크메드라비 도넛"
              price={45000}
              src={Img.Img_product5}
            />
            <Product name="구찌 신발" price={350000} src={Img.Img_product3} />
            <Product
              name="빈티지 목걸이"
              price={20000}
              src={Img.Img_product4}
            />
            <Product
              name="아크메드라비 도넛"
              price={45000}
              src={Img.Img_product5}
            />
          </div>
        </ProductWrapper>
      )}
    </TotalWrapper>
  );
}

export default Search;

function Tag({ name }: { name: string }) {
  return (
    <TagBox>
      <p>{name}</p>
    </TagBox>
  );
}

const TotalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchWrapper = styled.div`
  margin-top: 50px;
  margin-left: 3px;
  width: 343px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.div`
  width: 316px;
  height: 48px;
  background: #f9f9f9;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  > input {
    width: 80%;
    height: 100%;
    position: absolute;
    left: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    ::placeholder {
      color: rgba(134, 134, 134, 0.6);
    }
    :focus::placeholder {
      opacity: 0;
    }
  }
  > img {
    position: absolute;
    right: 10px;
    top: 11px;
  }
`;

const RecentWrapper = styled.div`
  margin-top: 30px;
  width: calc(100% - 40px);
  height: 78px;
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
    gap: 8px;
    overflow-x: scroll;
  }
`;

const TagBox = styled.div`
  height: 36px;
  border: 1px solid rgba(217, 217, 217, 0.6);
  border-radius: 51px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  width: fit-content;
  margin-right: 8px;
  > p {
    width: fit-content;
    word-break: keep-all;
  }
`;

const Banner = styled.img`
  margin-top: 30px;
  width: 100%;
`;

const ProductWrapper = styled.div`
  margin-top: 20px;
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
