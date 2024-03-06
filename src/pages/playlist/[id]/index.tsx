import React from "react";
import { CaretLeft } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFetch } from "@/lib/hooks";

export default function PlaylistDetail() {
  const router = useRouter();
  const { data } = useSession();

  const {
    data: PlaylistData,
    isLoading: isLoadingPlaylistData,
    isError: isErrorPlaylistData,
    error: errorPlaylistData,
  } = useFetch(
    `playlists-${router.query.id}`,
    `/api/user/playlists/${router.query.id}`,
  );

  console.log(PlaylistData);

  return (
    <div className="p-4">
      <nav className="flex justify-between">
        <div>
          <button
            className="rounded-full bg-secondary p-2"
            onClick={() => router.back()}
          >
            <CaretLeft size={24} />
          </button>
        </div>
        <Avatar>
          <AvatarImage
            src={data?.user?.image || ""}
            alt={data?.user?.name || "profile picture"}
          />
          <AvatarFallback>
            {data?.user?.name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </nav>
      <article>
        <section>
          <figure>
            <Image src></Image>
          </figure>
          <div></div>
        </section>
      </article>
    </div>
  );
}
