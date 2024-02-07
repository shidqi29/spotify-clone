import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SidebarPlaylistProps } from "@/types";

export const SidebarPlaylist = ({
  id,
  image,
  name,
  type,
  owner,
}: SidebarPlaylistProps) => {
  return (
    <Link
      className="w-full rounded-lg p-1 transition-all hover:bg-secondary-foreground/10"
      href={`/playlist/${id}`}
    >
      <div className="flex gap-x-4">
        <Image
          src={image}
          alt={`${name} playlist`}
          width={50}
          height={50}
          className="h-[50px] w-[50px] rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <p className="line-clamp-1">{name}</p>
          <p className="line-clamp-1">
            <span className="capitalize">{type}</span> • <span>{owner}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
