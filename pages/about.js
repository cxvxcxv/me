import Head from 'next/head';
import Link from 'next/link';
import TopBar from '../components/top-bar';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';

export default function About () {
    useEffect(() => {
        console.log(document.URL);
    })
    return (
        <>
            <Head>
                <title>About Site</title>
            </Head>
            <TopBar />
            <Link href='/'><a>return back</a></Link>
            <Footer />
        </>
    )
}