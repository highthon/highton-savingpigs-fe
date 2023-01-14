import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  src: string;
}

function Footer({ src }: Props) {
  const arr = ["home", "search", "create", "chat", "mypage"];
  const navigate = useNavigate();

  return (
    <TotalWrapper>
      <img src={src} alt="" />
      <div id="container">
        {arr.map((value) => (
          <div className="icon" onClick={() => navigate("/" + value)} />
        ))}
      </div>
    </TotalWrapper>
  );
}

export default Footer;

const TotalWrapper = styled.div`
  width: 390px;
  height: 84px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  > #container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 52px;
    position: absolute;
    top: 0px;
    padding-left: 30px;
    z-index: 99;
    > .icon {
      width: 25px;
      height: 40px;
    }
  }
`;
