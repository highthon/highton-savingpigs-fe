import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import theme from "../styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from "recoil";
import Background from "./components/background";
import Login from "./components/login";
import SignUp from "./components/signup";
import Search from "./components/search";
import Home from "./components/home";
import Create from "./components/create";
import Mypage from "./components/mypage";
import Sell from "./components/sell";
import Buy from "./components/buy";
import Chat from "./components/chat";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <BrowserRouter>
            <Background>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/search" element={<Search />} />
                <Route path="/home" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </Background>
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
