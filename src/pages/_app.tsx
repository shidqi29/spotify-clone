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
      <SessionProvider session={session}>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </SessionProvider>
    </Providers>
  );
}
