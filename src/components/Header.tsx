'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-transparent">
      <h1 className="text-2xl font-bold">Amaras</h1>
      <ConnectButton />
    </header>
  );
}
