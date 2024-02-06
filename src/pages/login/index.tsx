import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data } = useSession();
  console.log(data);

  if (data) {
    return (
      <>
        Signed in as {data?.session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
