import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return (
    <>
      Signed in as {data?.user?.email} <br />
      {data ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </>
  );
}
