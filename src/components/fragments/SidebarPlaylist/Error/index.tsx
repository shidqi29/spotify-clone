import React from "react";

import { Button } from "@/components/ui/button";

type SidebarPlaylistErrorProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const SidebarPlaylistError = ({
  children,
  onClick,
}: SidebarPlaylistErrorProps) => {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center gap-y-4">
        <p className="text-center">{children}</p>
        <Button onClick={onClick} size={"sm"}>
          Retry
        </Button>
      </div>
    </>
  );
};
