import App, { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
MyApp.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
