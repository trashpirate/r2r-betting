import Link from 'next/link';
import React from 'react';

type Props = {
    ca: string;
    ticker: string;
};

export default function BuyButton({ ca, ticker }: Props) {
    return (
        <div className="h-10 px-2 py-2 flex items-center gap-2 bg-white/20 backdrop-blur rounded-md border-l-cyan-300 border-l-2 justify-center hover:bg-highlight/50 w-40">
            <Link className="font-bold" href={`https://pancakeswap.finance/swap?chain=bsc&outputCurrency=${ca}`}>{`BUY ${ticker}`}</Link>
        </div>

    );
}