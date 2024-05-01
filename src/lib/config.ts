import { http, createConfig } from "@wagmi/core";
import { bsc } from "@wagmi/core/chains";
import { getDefaultConfig } from "connectkit";
import { cookieStorage, createStorage } from "wagmi";

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [bsc],
    transports: {
      // RPC URL for each chain
      [bsc.id]: http(`${process.env.NEXT_PUBLIC_RPC_BSC}`),
    },
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    appName: process.env.NEXT_PUBLIC_PROJECT_NAME as string,
    walletConnectProjectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,

    // Optional App Info
    appDescription:
      "Welcome to FlamelingBets where you can tell your friend &quot;Ha, told you so!&quot;",
    appUrl: "https://flamelingbets.com", // your app's url
    appIcon: "https://flamelingbets.com/rugs2riches.jpg", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);
