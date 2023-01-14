import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Img_buy, Img_buy2 } from "../../assets/images";

function Buy() {
  const [onoff, setonoff] = useState(false);
  const navigate = useNavigate();

  return (
    <TotalWrapper>
      <img src={Img_buy} />
      {onoff && (
        <img
          src={Img_buy2}
          alt=""
          id="modal"
          onClick={() => navigate("/home")}
        />
      )}
      <div id="buy" onClick={() => setonoff(true)} />
      <div id="chat" onClick={() => navigate("/chat")} />
      <div id="back" onClick={() => navigate("/home")} />
    </TotalWrapper>
  );
}

export default Buy;

const TotalWrapper = styled.div`
  width: 100%;
  height: 100%;
  > #modal {
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 1;
  }
  > #buy {
    width: 150px;
    height: 64px;
    position: absolute;
    bottom: 46px;
    right: 19px;
  }
  #back {
    position: absolute;
    left: 27px;
    top: 66px;
    width: 20px;
    height: 20px;
  }
  #chat {
    position: absolute;
    left: 63px;
    bottom: 46px;
    width: 150px;
    height: 64px;
  }
`;
