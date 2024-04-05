import Link from 'next/link';
import React from 'react';

type Props = {
    ca: string;
    ticker: string;
};

export default function BuyButton({ ca, ticker }: Props) {
    return (
        <div className="h-10 px-1 xs:px-2 py-2 text-xs text-center sm:text-lg flex items-center bg-white/20 backdrop-blur rounded-md border-l-cyan-300 border-l-2 justify-center hover:bg-highlight/50 w-16 xs:w-24 sm:w-40 my-auto">
            <Link className="font-bold" href={`https://pancakeswap.finance/swap?chain=bsc&outputCurrency=${ca}`}>{`BUY ${ticker}`}</Link>
        </div>

    );
}