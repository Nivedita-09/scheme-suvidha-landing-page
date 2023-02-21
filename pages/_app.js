import "@/styles/globals.css";
import Navbar from "@/components/home/navbar/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
