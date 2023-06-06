import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import React from "react";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>My Todo List</title>
        <meta name="description" content="my to do items" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
