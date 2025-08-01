import { useAppKitAccount } from "@reown/appkit/react";

export function ConnectWallet() {
  const { address, allAccounts } = useAppKitAccount();
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <appkit-button namespace="bip122" label="Connect BTC" />
      <appkit-button namespace="eip155" label="Connect EVM" />

      <pre>{JSON.stringify({ address, allAccounts }, null, 2)}</pre>
    </main>
  );
}
