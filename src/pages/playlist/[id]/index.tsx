import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { useFetch } from "@/lib/hooks";
import { Navbar } from "@/components/layouts";

export default function PlaylistDetail() {
  const router = useRouter();

  const {
    data: PlaylistData,
    isLoading: isLoadingPlaylistData,
    isError: isErrorPlaylistData,
    error: errorPlaylistData,
  } = useFetch(
    `playlists-${router.query.id}`,
    `/api/user/playlists/${router.query.id}`,
  );

  if (isLoadingPlaylistData) return <p>Loading...</p>;

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <Navbar />
      <article>
        <section className="flex max-h-56 gap-x-4">
          <figure className="h-56 w-56">
            <Image
              src={PlaylistData?.data.images[0].url}
              alt="Playlist Cover"
              width={500}
              height={500}
              className="h-full w-full rounded"
            />
          </figure>
          <div className="flex flex-1 flex-col justify-end gap-y-2">
            <p className="font-medium capitalize">{PlaylistData?.data.type}</p>
            <h1 className="text-4xl font-bold">{PlaylistData?.data.name}</h1>
            {PlaylistData?.data.description && (
              <p className="text-sm font-medium text-white/70">
                {PlaylistData?.data.description.replace(/&quot;/g, '"')}
              </p>
            )}
            <div className="flex items-center gap-x-2 font-medium">
              <Link
                href={PlaylistData?.data.owner.href}
                className="font-bold hover:underline"
              >
                {PlaylistData?.data.owner.display_name}
              </Link>
              <div className="h-1 w-1 rounded-full bg-white" />
              <p>{PlaylistData?.data.followers.total} Likes</p>
              <div className="h-1 w-1 rounded-full bg-white" />
              <p>{PlaylistData?.data.tracks.total} Songs</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
