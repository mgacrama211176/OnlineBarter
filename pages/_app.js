import Layout from "../component/layout";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../library/theme";
import createEmotionCache from "../library/createEmotionCache";
import { CacheProvider } from "@emotion/react";

//NextAuth
import { SessionProvider } from "next-auth/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <SessionProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

export default MyApp;
