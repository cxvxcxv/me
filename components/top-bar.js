import Link from 'next/link';

export default function TopBar({ currentPage }) {
    return (
        <>
            <div className='top-bar'>
                <Link href="/"><a className={currentPage == "home" ? 'main' : ''}>Home Page</a></Link>
                <Link href='/contacts'><a className={currentPage == "contacts" ? 'main' : ''}>Contacts</a></Link>
            </div>
        </>
    )
}