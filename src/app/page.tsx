import Image from "next/image";
import Navbar from "../components/navbar";
import Team from "../components/team";
import { limelight } from './fonts'
import Footer from "@/components/footer";

const TEAM222_ADDRESS = "0xB9A5869Cf215aA9e15eeaE4AA06d8AcB928341e2";
const TEAM237_ADDRESS = "0x69967F2129a2cCE02AEB647A31573b93f59cD4a2";

const TEAM222_CA = "0x85063a8c52c81f8c270d10bc2056d5e703157de4";
const TEAM237_CA = "0x517316ab1bf91296c821a2ab98e3d0924a625237";

const TEAM222_PAIR = "0xa1728386594cbfaa9d0a4b533d50346fc98ae6a8";
const TEAM237_PAIR = "0xbee0d2e7172aa4fcfbe2fa6a30bf1af973df0204";


export default function Home() {
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
        <div className="text-5xl sm:text-7xl flex flex-col justify-center text-center my-10 bg-violet-500/10 py-8 px-10 rounded-3xl max-w-[800px] mx-auto font-limelight font-outline-2">
          <h1 className={limelight.className}>TYSON</h1>
          <h1 className={limelight.className}>VRS</h1>
          <h1 className={limelight.className}>JAKE PAUL</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center md:justify-between h-full w-full gap-10 mx-auto my-10">
          <Team name="Rug$" ticker="0X222" ca={TEAM222_CA} pair={TEAM222_PAIR} wallet={TEAM222_ADDRESS} img="/0x222.gif"></Team>
          <Team name="Riche$" ticker="0X237" ca={TEAM237_CA} pair={TEAM237_PAIR} wallet={TEAM237_ADDRESS} img="/0x237.gif"></Team>
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
}
