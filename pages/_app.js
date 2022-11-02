import '../styles/reset.css';
import '../scss/style.scss';
import React from 'react';
import App from 'next/app';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { getStores, StoreProvider } from '../store/store';

class CustomApp extends App {

  render() {
    const { Component, pageProps, initialData } = this.props;
    const stores = getStores(initialData);
    return (

            <StoreProvider value={stores}>
                <Component {...pageProps} />
            </StoreProvider>


    );
  }

}

export default CustomApp;
