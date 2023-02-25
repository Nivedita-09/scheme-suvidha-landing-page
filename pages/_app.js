import "@/styles/globals.css";
import Navbar from "@/components/home/navbar/Navbar";
import Footer from "@/components/footer/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
