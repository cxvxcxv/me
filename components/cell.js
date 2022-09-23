import Image from 'next/image';

export default function Cell({ img, name=img, link }) {
    return (
        <div onClick={() => window.open(link, "_blank")} className='box'>
            <Image src={`/../public/img/${img}`} alt={img} width={100} height={100} />
            <p className='name'>{name}</p>
        </div>
    );
};