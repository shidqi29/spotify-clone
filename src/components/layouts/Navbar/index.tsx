import { CaretLeft } from "@phosphor-icons/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useOutsideClick } from "@/lib/hooks";

export const Navbar = () => {
  const router = useRouter();
  const { data } = useSession();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const toggleDropDown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className="flex justify-between">
      <div>
        <button
          className="rounded-full bg-secondary p-2"
          onClick={() => router.back()}
        >
          <CaretLeft size={24} />
        </button>
      </div>
      <div className="relative" ref={dropdownRef}>
        <Avatar onClick={toggleDropDown} className="cursor-pointer">
          <AvatarImage
            src={data?.user?.image || ""}
            alt={data?.user?.name || "profile picture"}
          />
          <AvatarFallback>
            {data?.user?.name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div
          className={`absolute ${isDropdownOpen ? "block" : "hidden"} right-0 top-12 z-10`}
        >
          <Button variant={"destructive"} onClick={() => signOut()}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};
