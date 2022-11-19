import '../styles/reset.css';
import '../scss/style.scss';
import React from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { getStores, StoreProvider } from '../store/store';

export default function MyApp({ Component, pageProps, initialData }) {
    const stores = getStores(initialData);

    return (
        <StoreProvider value={stores}>
            <Component {...pageProps} />
        </StoreProvider>
    );
}
