import styled from "styled-components";
import { Img_chat, Img_chatselected } from "../../assets/images";
import Footer from "../footer";

function Chat() {
  return (
    <TotalWrapper>
      <img src={Img_chat} alt="" />
      <Footer src={Img_chatselected} />
    </TotalWrapper>
  );
}

export default Chat;

const TotalWrapper = styled.div``;
