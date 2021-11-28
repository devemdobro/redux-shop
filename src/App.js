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
            <Route path="/cart-products" element={<CartProducts />} />
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
`;

export default App;
