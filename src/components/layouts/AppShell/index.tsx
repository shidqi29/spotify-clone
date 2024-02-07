import React from "react";
import { SideBar } from "../SideBar";
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
  return (
    <>
      <main className={`relative mx-auto flex max-h-screen flex-col py-2`}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={23} minSize={23}>
            <SideBar />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={72}>{children}</ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
};
