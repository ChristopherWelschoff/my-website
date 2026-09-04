import GlobalStyle from "@/styles/globalstyles";
import Layout from "@/components/Layout/Layout";
import Skillbar from "@/components/Skillbar/skillbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
        <Skillbar />
      </Layout>
    </>
  );
}
