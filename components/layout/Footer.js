import React from 'react';
import {useRouter} from "next/router";


const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    const router = useRouter();

    return (
        <footer className="footer ">

        </footer>
    )
}

export default Footer;