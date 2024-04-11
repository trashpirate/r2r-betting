"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import Team from "../components/team";
import { limelight } from './fonts'
import Footer from "@/components/footer";
import { useEffect, useState } from "react";


const TEAM222_ADDRESS = "0xB9A5869Cf215aA9e15eeaE4AA06d8AcB928341e2";
const TEAM237_ADDRESS = "0x69967F2129a2cCE02AEB647A31573b93f59cD4a2";

const TEAM222_CA = "0x85063a8c52c81f8c270d10bc2056d5e703157de4";
const TEAM237_CA = "0x517316ab1bf91296c821a2ab98e3d0924a625237";

const TEAM222_PAIR = "0xa1728386594cbfaa9d0a4b533d50346fc98ae6a8";
const TEAM237_PAIR = "0xbee0d2e7172aa4fcfbe2fa6a30bf1af973df0204";


export default function Home() {

  const [rugsBalance, setRugsBalance] = useState<number>(0);
  const [richesBalance, setRichesBalance] = useState<number>(0);
  const [rugsOdds, setRugsOdds] = useState<string>("--");
  const [richesOdds, setRichesOdds] = useState<string>("--");

  function getWalletStatus() {
    fetch("/api/bets").then(response => response.json()).then(data => {
      setRugsBalance((data.rugs));
      setRichesBalance((data.riches));

      const odds1 = data.rugs / 1000000;
      const odds2 = data.riches / 1000000;
      setRugsOdds(odds1.toFixed(0));
      setRichesOdds(odds2.toFixed(0));
    });
  }

  useEffect(() => {
    getWalletStatus();
  }, [])

  useEffect(() => {

    getWalletStatus();
    const interval = setInterval(() => {
      getWalletStatus()
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  function getOdds(balance1: number, balance2: number): [string, string] {
    let oddsRugs: string = "--";
    let oddsRiches: string = "--";

    if (balance1 !== undefined && balance2 !== undefined) {
      if (balance1 >= balance2) {
        const ratio = balance2 > 0 ? balance1 / balance2 : balance1;
        oddsRugs = `${ratio.toFixed(1).toLocaleString()}`
        oddsRiches = `${(1).toFixed(1).toLocaleString()}`;
      }
      else {
        const ratio = balance1 > 0 ? balance2 / balance1 : balance2;
        oddsRugs = `${(1).toFixed(1).toLocaleString()}`;
        oddsRiches = `${ratio.toFixed(1).toLocaleString()}`
      }

    }
    else {
      oddsRugs = "--";
      oddsRiches = "--";
    }
    return [oddsRugs, oddsRiches];
  }

  return (
    <main className="flex min-h-screen flex-col justify-between bg-hero-pattern bg-scroll   text-white bg-blend-darken bg-background ">

      <Navbar ticker1="OX222" ticker2="0X237" ca1={TEAM222_CA} ca2={TEAM237_CA}></Navbar>
      <section className="px-4 xl:px-64 scroll-m-36 mt-16 mb-24">
        <div className="text-lg flex flex-col justify-center text-center mt-16 mb-10 bg-violet-500/10 p-4 lg:p-8 rounded-3xl max-w-[1000px] mx-auto">
          {/* <h1 className="my-4 text-3xl font-bold text-highlight">FLAMELING BET</h1> */}
          <Image
            src="/banner.jpg"
            alt="Flameling bets"
            className="rounded-xl w-full h-auto "
            width={1800}
            height={600}
            priority
          />
          <div className="text-xl px-4 lg:px-8 ">
            <h1 className="mt-8 mb-4 text-4xl ">When is the last time you and a friend settled an arguement with a small wager?</h1>
            <div className="my-4 text-3xl text-indigo-300"><div>Welcome to FlamelingBets where you can tell your friend</div><div>&quot;Ha, told you so!&quot;</div></div>
            <div className="my-4 text-highlight text-3xl flex flex-col">
              <div className="text-left sm:text-center ml-6 sm:ml-none">It is simple:</div>
              <div className="mx-auto p-4">
                <ol className="list-decimal text-left text-2xl">
                  <li className="ml-8">Pick a side</li>
                  <li className="ml-8">If you are team Rug$, send 1 Million Ox222 to his address.</li>
                  <li className="ml-8">If you are team Riche$, send 1 Million 0x237 to his address.</li>
                  <li className="ml-8">If your team wins you recieve BNB back to your wallet!</li>
                </ol>
              </div>

            </div>
          </div>

        </div>
        <div className="text-4xl xs:text-5xl sm:text-7xl flex flex-col justify-center text-center my-10 bg-violet-500/10 py-8 px-10 rounded-3xl max-w-[800px] mx-auto">
          <div className="text-4xl text-white mb-4 uppercase">BMF TITLE FIGHT</div>
          <div className="text-xl text-highlight mb-4">04/13/24 8ish PM EST</div>


          <div className="text-red-600 flex justify-center align-bottom  font-limelight font-outline-2"><h1 className={limelight.className}>Justin Gaethje</h1><div className={limelight.className + " font-outline-none text-xl xs:text-3xl mb-0 mt-auto"}>(Rug$)</div></div>
          <div><h1 className={limelight.className + " font-limelight font-outline-2"}>VRS</h1></div>
          <div className="text-yellow-400 flex  justify-center  font-limelight font-outline-2"><h1 className={limelight.className}>Max Halloway</h1><div className={limelight.className + " font-outline-none text-xl xs:text-3xl mb-0 mt-auto"}>(Riche$)</div></div>
          <div className="bg-white/10 w-fit mx-auto py-2 px-4 rounded-lg mt-8 mb-4 text-center flex flex-col">
            <div className="text-2xl xs:text-3xl text-white uppercase">Betting Odds</div>
            <div className="flex flex-row text-2xl xs:text-3xl mx-auto align-middle">
              <div className="text-red-600 my-auto">{rugsOdds}</div>
              <div className="px-2  my-auto">:</div>
              <div className="text-yellow-400  my-auto">{richesOdds}</div>
            </div>

          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center md:justify-between h-full w-full gap-10 mx-auto my-10">
          <Team name="Rug$" ticker="0X222" ca={TEAM222_CA} pair={TEAM222_PAIR} wallet={TEAM222_ADDRESS} img="/0x222.gif" balance={rugsBalance} wins={1} bnbpaid={0.06}></Team>
          <Team name="Riche$" ticker="0X237" ca={TEAM237_CA} pair={TEAM237_PAIR} wallet={TEAM237_ADDRESS} img="/0x237.gif" balance={richesBalance} wins={0} bnbpaid={0}></Team>
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
}
