import "styles/_globals.scss";
import AuthUpdater from "@fb/components/authUpdater";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // Update Redux state when user state change

  useEffect(() => {
    console.log("bruh moment");
  }, []);

  return (
    <>
      <Component {...pageProps} /> <AuthUpdater />
    </>
  );
}

export default MyApp;
