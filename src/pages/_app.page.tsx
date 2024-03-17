import { FC, useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { GlobalStyle, defaultTheme, lightTheme, store } from "~/core";
import { Provider, ThemeProvider, observer } from "~/modules";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<Mode>("dark");
  const {
    themeStore: { mode },
  } = store;

  useEffect(() => {
    setTheme(mode);
  }, [mode]);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Desenvolvedor front-end, frontend developer, criar site, desenvolvimento e programação, aprenda a programar, portfólio de desenvolvedor"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="author" content="Raimones Barros" />
      </Head>
      <Analytics />
      <Provider rootStore={store}>
        <ThemeProvider theme={theme === "light" ? lightTheme : defaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default observer(App);
