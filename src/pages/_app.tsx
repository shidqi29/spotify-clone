import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import { Providers } from "@/components/providers";
import { AppShell } from "@/components/layouts/AppShell";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Providers>
      <AppShell>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </AppShell>
    </Providers>
  );
}
