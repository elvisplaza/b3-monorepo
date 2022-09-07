import "./../../styles/globals.css"
import { NextComponentType, NextPageContext } from "next";
import type { AppProps } from "next/app";

// types
type ComponentWithFunc<P = {}> = NextComponentType<NextPageContext, any, P> & {
  getLayout: Function;
};
type AppPropsWithLayout = AppProps & {
  Component: ComponentWithFunc;
};


function HowToApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(
    <>
        <Component {...pageProps} />
    </>
  );
}

export default HowToApp;


