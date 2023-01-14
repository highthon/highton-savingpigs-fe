import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
    * {
        margin:0px;
        padding:0px;
        box-sizing:border-box;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
