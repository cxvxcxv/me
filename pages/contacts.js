import Head from 'next/head';
import Link from 'next/link';
import TopBar from '../components/top-bar';

export default function Contacts() {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <TopBar currentPage='contacts' />
            <div className='wrapper'>
                <h1>You can write directly to author of this website</h1>
                <p><Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdLSQnlQwmmLBlzjXfHGMTBnQTrGzkpZDTbDGxksMHXChPfTtvjHNVKhsBCqgrMtJvTRHfB'><a>ami145388@gmail.com</a></Link> | @cxv192(telegram) | <Link href='https://vk.com/cxv192'><a>Cxv Zisgeim (VK)</a></Link> | cxv#3247 (discord)</p>
            </div>
        </>
    )
}