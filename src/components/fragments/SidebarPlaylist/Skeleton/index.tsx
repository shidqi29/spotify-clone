import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

export const SidebarPlaylistSkeleton = () => {
  return (
    <div className="w-full rounded-lg p-1">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-[50px] w-[55px] rounded-lg" />
        <div className="w-full space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
    </div>
  );
};
