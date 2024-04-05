import Image from "next/image";
import CopyToClipboard from "../copyToClipboard";
import ChartButton from "../chartButton";
import { limelight, teamNameFont } from "@/app/fonts";
type Props = {
    name: string;
    ticker: string;
    ca: string;
    pair: string;
    img: string;
    wallet: string;
}

export default function Team({ name, ticker, ca, pair, wallet, img }: Props) {


    return (
        <div className="flex flex-col h-full max-w-[500px] w-full mx-auto justify-center bg-violet-500/10 p-8 rounded-3xl border-2 border-highlight text-center">
            <div className="mx-auto mt-10 mb-4 text-5xl font-bold text-white">
                <div className={limelight.className}>{`TEAM ${name}`}</div>
                <div className={limelight.className}>{`(${ticker})`}</div>
            </div>
            <Image
                src={img}
                alt={name}
                className="overflow-hidden rounded-xl p-1 mx-auto my-4 w-full h-auto"
                width={40}
                height={40}
                priority
            />
            <div className="flex flex-col justify-center my-4 max-w-40 xs:max-w-56 sm:max-w-64 2xl:max-w-none mx-auto">
                <div className="mx-auto mt-2 text-xl uppercase">Total wins: 0</div>
            </div>
            <div className="flex flex-col justify-center my-4 max-w-40 xs:max-w-56 sm:max-w-64 2xl:max-w-none mx-auto">
                <div className="mx-auto my-4 text-xl">{`${name}' Wallet Address`}</div>
                <CopyToClipboard text={wallet} copyText={wallet} textColor="text-highlight" textSize="text-md" iconSize="text-[10px]"></CopyToClipboard>
            </div>

            <div className="flex flex-col justify-center my-4 max-w-40 xs:max-w-56 sm:max-w-64 2xl:max-w-none mx-auto">
                <div className="mx-auto my-4  text-xl">{`${ticker} Contract Address`}</div>
                <CopyToClipboard text={ca} copyText={ca} textColor="text-highlight" textSize="text-md" iconSize="text-[10px]"></CopyToClipboard>
            </div>

            <div className="flex justify-center my-8">
                <ChartButton url={`https://www.dextools.io/app/en/bnb/pair-explorer/${pair}`}></ChartButton>
            </div>

        </div>
    );
}