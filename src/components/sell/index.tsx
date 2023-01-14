import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Img_sell } from "../../assets/images";

function Sell() {
  const navigate = useNavigate();
  return (
    <TotalWrapper>
      <img src={Img_sell} onClick={() => navigate("/home")} />
    </TotalWrapper>
  );
}

export default Sell;

const TotalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
