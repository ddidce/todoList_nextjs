import App, { AppContext, AppProps, AppInitialProps } from "next/app";
import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <AddTodo /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default app;
