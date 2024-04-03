import Image from "next/image";
import Navbar from "../components/navbar";
import Team from "../components/team";


const TEAM222_ADDRESS = "0x85063a8c52c81f8c270d10bc2056d5e703157de4";
const TEAM237_ADDRESS = "0x85063a8c52c81f8c270d10bc2056d5e703157de4";

const TEAM222_CA = "0x85063a8c52c81f8c270d10bc2056d5e703157de4";
const TEAM237_CA = "0x517316ab1bf91296c821a2ab98e3d0924a625237";

const TEAM222_PAIR = "0xa1728386594cbfaa9d0a4b533d50346fc98ae6a8";
const TEAM237_PAIR = "0xbee0d2e7172aa4fcfbe2fa6a30bf1af973df0204";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-hero-pattern bg-scroll pt-8 pb-36 px-8 text-white bg-blend-darken bg-background xl:px-64 ">

      <Navbar ticker1="OX222" ticker2="0X237" ca1={TEAM222_CA} ca2={TEAM237_CA}></Navbar>
      <div className="text-lg flex flex-col justify-center text-center mt-16 mb-10 bg-white/10 py-8 px-10 rounded-3xl max-w-[800px] mx-auto">
        <h1 className="my-4 text-3xl font-bold text-highlight">THE GAME</h1>
        <h1 className="my-4">When is the last time you and a friend settled an arguement with a small wager?</h1>
        <div className="my-4">Welcome to FlamelingBet where where you can tell your friend "Ha, told you so!"</div>
        <div className="my-4">Each Game you pick a side, you either bet with Rug$ (0x222) or you bet with Riche$ (0x237). It is simple; if you think Rug$ is right simply send him 1 millon 0x222 tokens. If you think Riches is right simply send him 1 millon 0x237 tokens.</div>
      </div>
      <div className="text-lg flex flex-col justify-center text-center my-10 bg-white/10 py-8 px-10 rounded-3xl max-w-[800px] mx-auto">
        Current Bet
      </div>
      <div className="flex flex-col lg:flex-row justify-center md:justify-between h-full w-full gap-10 mx-auto my-10">
        <Team name="Rug$ (0X222)" ca={TEAM222_CA} pair={TEAM222_PAIR} wallet={TEAM222_ADDRESS} img="/222.jpg"></Team>
        <Team name="Riche$ (0X237)" ca={TEAM237_CA} pair={TEAM237_PAIR} wallet={TEAM237_ADDRESS} img="/237.jpg"></Team>
      </div>

    </main>
  );
}
