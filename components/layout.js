import React from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeadMeta from "./layout/HeadMeta";
import {SmoothScrollProvider} from "./hooks/SmoothScrollProvider";
import {useRouter} from "next/router";

const Layout = ({ children, title })=>{
    const router = useRouter();

    return (
        <SmoothScrollProvider>
            <div className={`${router.asPath === '/contacts' ? 'container bg' : 'container'}`}>
                <HeadMeta title={title}/>
                <Header/>
                    <main className={'main-content'}>
                            {children}
                    </main>
                <Footer/>
            </div>
        </SmoothScrollProvider>
    );
}

export default Layout;