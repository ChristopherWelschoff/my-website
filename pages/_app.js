import GlobalStyle from "@/styles/globalstyles";
import Layout from "@/components/Layout/Layout";


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
