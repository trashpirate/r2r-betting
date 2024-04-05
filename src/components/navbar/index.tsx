import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import BuyButton from '../buyButton';


type Props = {
    ticker1: string;
    ticker2: string;
    ca1: string;
    ca2: string;
}


export default function Navbar({ ticker1, ticker2, ca1, ca2 }: Props) {
    return (
        <nav className="h-20 top-0 fixed py-3 flex justify-between gap-2 align-middle w-full bg-white/20 backdrop-blur px-4 xs:px-8 xl:px-64">

            <Link href="https://buyholdearn.com" className='my-auto h-full'>
                <Image
                    src="/earn.jpg"
                    alt="Rugs2Riches logo"
                    className="rounded-lg h-full w-auto "
                    width={50}
                    height={50}
                    priority
                />
            </Link>
            <BuyButton ticker={ticker1} ca={ca1}></BuyButton>
            <BuyButton ticker={ticker2} ca={ca2}></BuyButton>
            <Link href="https://www.youtube.com/@FromRugs2Riches" className='my-auto h-full'>
                <Image
                    src="/rugs2riches.jpg"
                    alt="Rugs2Riches logo"
                    className="rounded-lg h-full w-auto "
                    width={50}
                    height={50}
                    priority
                />
            </Link>
        </nav>


    );
}