import Footer from "@/components/Footer/_index";
import HeaderAnnouncement from "@/components/HeaderAnnouncement/_index";
import { HeaderClient } from "@/components/HeaderClient/_index";

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
