import { Provider } from "react-redux";
import { Header } from "./components/header";
import store from "./store/store";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { CartProducts } from './pages/cart-products'

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart-products" element={<CartProducts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    background-color: #1e1d2b;
    color: #ffffff;
  }

  main {
    padding: 20px 30px;
    min-height: calc(100vh - 77px);
    box-sizing: border-box;

    section {
      display: flex;
    }

    h1 {
      margin-bottom: 20px;
    }

    ul {
      list-style-type: none;
      flex-grow: 1;
    }
  }
`;

export default App;
