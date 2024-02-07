import { House, MagnifyingGlass } from "@phosphor-icons/react";
import { Library } from "lucide-react";
import Link from "next/link";
import React from "react";

import { useFetch } from "@/lib/hooks";
import { SidebarPlaylist } from "@/components/fragments/SidebarPlaylist";
import { Separator } from "@/components/ui/separator";
import { SidebarPlaylistData } from "@/types";
import { SidebarPlaylistSkeleton } from "@/components/fragments/SidebarPlaylist/Skeleton";

export const Sidebar = () => {
  const { data: userPlaylists, isLoading } = useFetch(
    "user-playlist",
    "/api/playlist",
  );

  const navigation = [
    {
      label: "Home",
      href: "/",
      icon: <House size={24} />,
    },
    {
      label: "Search",
      href: "/search",
      icon: <MagnifyingGlass size={24} />,
    },
  ];

  return (
    <>
      <div className="mx-2 w-auto rounded-lg bg-secondary">
        <div className="flex flex-col gap-y-4 p-4">
          {navigation.map((item) => (
            <Link
              className="group flex items-center gap-x-3 font-semibold text-white/70 transition-all hover:text-foreground hover:underline"
              href={item.href}
              key={item.label}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-2 mt-2 w-auto rounded-lg bg-secondary">
        <div className="flex flex-col gap-y-4 text-white/70 transition-all">
          <div className="flex flex-col gap-y-5 px-4 pt-4">
            <div className="group flex items-center gap-x-3 font-semibold hover:cursor-pointer hover:text-foreground">
              <Library size={24} />
              <span>Your Library</span>
            </div>
            <div className="">
              <p className="text-sm font-semibold tracking-widest text-white/70">
                PLAYLIST
              </p>
            </div>
            <Separator className="-my-1 bg-white/30" orientation="horizontal" />
          </div>
          <div className="flex h-96 flex-col gap-y-1 overflow-y-scroll px-2 pb-2">
            {isLoading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <SidebarPlaylistSkeleton key={index} />
                ))
              : userPlaylists.data.items.map((item: SidebarPlaylistData) => (
                  <SidebarPlaylist
                    key={item.id}
                    id={item.id}
                    image={item.images[0].url}
                    name={item.name}
                    type={item.type}
                    owner={item.owner.display_name}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};
