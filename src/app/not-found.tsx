"use client";

import { Menu } from "@/components/Menu/Menu";
import { Button } from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const { back } = useRouter();

  return (
    <>
      <main className="w-full h-screen flex flex-col justify-center items-center gap-2">
        <h2 className="text-1xl font-semibold">Something went wrong!</h2>
        <Button
          onClick={back}
          aria-label="back to previous page"
          variant="secondary"
          className="text-center"
        >
          <ChevronLeft width={25} height={25} />
          <p>Go Back</p>
        </Button>
      </main>
      <Menu />
    </>
  );
}
