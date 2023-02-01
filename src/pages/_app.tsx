import Footer from "@/components/Footer";
import { HeaderAnnouncement } from "@/components/HeaderAnnouncement";
import HeaderClient from "@/components/HeaderClient";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <HeaderAnnouncement />
      <HeaderClient />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
