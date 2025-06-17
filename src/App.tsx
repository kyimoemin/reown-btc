import "./App.css";

// App.tsx
import { createAppKit, useAppKitAccount } from "@reown/appkit/react";
import { BitcoinAdapter } from "@reown/appkit-adapter-bitcoin";
import { bitcoin, type AppKitNetwork } from "@reown/appkit/networks";

// 1. Get projectId from https://cloud.reown.com
const projectId = "b56e18d47c72ab683b10814fe9495694";

// 2. Set the networks
const networks = [bitcoin] as [AppKitNetwork, ...AppKitNetwork[]];

// 3. Set up Bitcoin Adapter
const bitcoinAdapter = new BitcoinAdapter({
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
  adapters: [bitcoinAdapter],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true,
  },
});

export default function App() {
  const { address, allAccounts } = useAppKitAccount();
  return (
    <main>
      <appkit-button />
      <pre>{JSON.stringify({ address, allAccounts }, null, 2)}</pre>
    </main>
  );
}
