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
        <nav className="my-3 flex justify-between gap-5 align-middle md:w-full">
            <div className="my-auto h-fit w-fit flex-row rounded-xl border-2 border-white bg-button font-bold text-white hover:bg-buttonHover sm:w-36 sm:justify-between">
                <a
                    className="pointer-events-auto mx-auto flex items-center text-right align-middle text-lg uppercase sm:gap-4 lg:p-0"
                    href="https://buyholdearn.com"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/rugs2riches.jpg"
                        alt="Rugs2Riches logo"
                        className="ml-0 h-10 w-auto overflow-hidden rounded-xl p-1"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="w-0 scale-0 sm:w-fit sm:scale-100">Home</div>
                </a>
            </div>
            <BuyButton ticker={ticker1} ca={ca1}></BuyButton>
            <BuyButton ticker={ticker2} ca={ca2}></BuyButton>
        </nav>


    );
}