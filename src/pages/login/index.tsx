import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  // Get the callback URL from the query parameters.
  const callbackUrl: any = router.query.callbackUrl || "/";

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-10">
          <Image
            src={"/spotify_logo.webp"}
            alt="spotify logo"
            width={400}
            height={200}
          />
          <Button
            className="w-1/2 rounded-full"
            onClick={() =>
              signIn("spotify", {
                callbackUrl,
                redirect: false,
              })
            }
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}
