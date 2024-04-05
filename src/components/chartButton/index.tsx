import Link from 'next/link';
import React from 'react';

type Props = {
    url: string;
};

export default function ChartButton({ url }: Props) {
    return (
        <div className="w-24 h-10 px-3 py-2 flex items-center gap-2 bg-violet-500/20 backdrop-blur rounded-md border-l-highlight border-l-2 justify-center hover:bg-highlight/50">
            <Link className="font-bold" href={url}>CHART</Link>
        </div>

    );
}