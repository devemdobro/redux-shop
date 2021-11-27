import { Provider } from "react-redux";
import { Header } from "./components/header";
import { Products } from "./components/products";
import store from "./store/store";
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Products />
      </Provider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`

export default App;
