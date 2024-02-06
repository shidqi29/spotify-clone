import { signIn, signOut, useSession } from "next-auth/react";

import { useFetch } from "@/lib/hooks";

export default function Home() {
  const { data } = useSession();

  const { data: list } = useFetch("user-playlist", "/api/playlist");

  return (
    <>
      Signed in as {data?.user?.email} <br />
      {list &&
        list.data.items.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.images[0]?.url} width="100" />
            <p>{item.description}</p>
          </div>
        ))}
      {data ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </>
  );
}
