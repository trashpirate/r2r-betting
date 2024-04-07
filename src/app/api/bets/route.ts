import { NextResponse } from "next/server";
import { formatEther } from "viem";

import { flamelingABI } from "@/assets/flamelingTokenABI";

import { createPublicClient, http } from "viem";
import { bsc } from "viem/chains";

const TEAM222_ADDRESS = "0xB9A5869Cf215aA9e15eeaE4AA06d8AcB928341e2";
const TEAM237_ADDRESS = "0x69967F2129a2cCE02AEB647A31573b93f59cD4a2";

const TEAM222_CA = "0x85063a8c52c81f8c270d10bc2056d5e703157de4";
const TEAM237_CA = "0x517316ab1bf91296c821a2ab98e3d0924a625237";

const client = createPublicClient({
  chain: bsc,
  transport: http(
    `https://rpc.ankr.com/bsc/${process.env.NEXT_PUBLIC_ANKR_API_KEY}`
  ),
});

export async function GET() {
  let rugs_balance: number | undefined = undefined;
  let riches_balance: number | undefined = undefined;
  const data = await client.multicall({
    contracts: [
      {
        address: TEAM222_CA,
        abi: flamelingABI,
        functionName: "balanceOf",
        args: [TEAM222_ADDRESS],
      },
      {
        address: TEAM237_CA,
        abi: flamelingABI,
        functionName: "balanceOf",
        args: [TEAM237_ADDRESS],
      },
    ],
  });

  if (data[0].status == "success" && data[1].status == "success") {
    rugs_balance = Number(formatEther(data[0].result));
    riches_balance = Number(formatEther(data[1].result));
  }

  return NextResponse.json(
    { rugs: rugs_balance, riches: riches_balance },
    { status: 200 }
  );
}
