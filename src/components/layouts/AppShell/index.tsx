import React from "react";
import { useRouter } from "next/router";

import { Sidebar } from "../Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

type AppShellProps = {
  children: React.ReactNode;
};

// digunakan sebagai layout untuk semua halaman yang membungkus _app.tsx
export const AppShell = ({ children }: AppShellProps) => {
  const router = useRouter();
  const onlyLogin = ["/login"];

  return (
    <>
      <main className={`relative mx-auto flex max-h-screen flex-col`}>
        {onlyLogin.includes(router.pathname) ? (
          children
        ) : (
          <ResizablePanelGroup direction="horizontal" className="py-2">
            <ResizablePanel defaultSize={23} minSize={23}>
              <Sidebar />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={72}>{children}</ResizablePanel>
          </ResizablePanelGroup>
        )}
      </main>
    </>
  );
};
