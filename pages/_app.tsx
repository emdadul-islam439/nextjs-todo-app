import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <React.Fragment>
        <Head>
          <title>My Todo List</title>
          <meta name="description" content="my to do items" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    </Provider>
  );
};

export default MyApp;
