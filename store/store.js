import React from "react";
import NextStore from "./NextStore";

let clientSideStores;

const isServer = typeof window === 'undefined';

export function getStores(initialData = { postStoreInitialData: {} }) {
    if (isServer) {
        return {
            nextStore: new NextStore(),
        };
    }
    if (!clientSideStores) {
        clientSideStores = {
            nextStore: new NextStore(),
        };
    }

    return clientSideStores;
}

const StoreContext = React.createContext();

export function StoreProvider(props) {
    return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
}

export function useMobxStores() {
    return React.useContext(StoreContext);
}