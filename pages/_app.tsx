import { AnimateSharedLayout } from "framer-motion";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
