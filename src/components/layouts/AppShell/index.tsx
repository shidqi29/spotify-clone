import React from "react";

type AppShellProps = {
  children: React.ReactNode;
};

// digunakan sebagai layout untuk semua halaman yang membungkus _app.tsx
export const AppShell = ({ children }: AppShellProps) => {
  return (
    <>
      <main className={`relative mx-auto flex min-h-screen flex-col p-2`}>
        {children}
      </main>
    </>
  );
};
