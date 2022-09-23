import Link from 'next/link';

export default function TopBar() {
    return (
        <>
            <div className='top-bar'>
                <Link href="/about"><a>About Site</a></Link>
            </div>
        </>
    )
}