import "./App.css";

import { BitcoinAdapter } from "@reown/appkit-adapter-bitcoin";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  bitcoin,
  bsc,
  mainnet,
  type AppKitNetwork,
} from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { ConnectWallet } from "./connect-wallet";

// 1. Get projectId from https://cloud.reown.com
const projectId = "b56e18d47c72ab683b10814fe9495694";

const queryClient = new QueryClient();

// 2. Set the networks
const networks = [mainnet, bsc] as [AppKitNetwork, ...AppKitNetwork[]];

// 3. Set up Bitcoin Adapter
const bitcoinAdapter = new BitcoinAdapter({
  projectId,
});

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
});

// 4. Create a metadata object - optional
const metadata = {
  name: "AppKit",
  description: "AppKit Bitcoin Example",
  url: "https://demo.reown.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 5. Create modal
createAppKit({
  adapters: [bitcoinAdapter, wagmiAdapter],
  networks: [bitcoin, ...networks],
  metadata,
  projectId,
  features: {
    analytics: true,
  },
});

export default function App() {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
