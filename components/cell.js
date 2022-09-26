import Image from 'next/image';

export default function Cell({ imgLink, name, link }) {
    return (
        <div onClick={() => window.open(link, "_blank")} className='box'>
            <Image src={imgLink} alt={name} width={100} height={100} />
            <p className='name'>{name}</p>
        </div>
    );
};