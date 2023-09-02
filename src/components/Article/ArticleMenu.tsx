"use client";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ArticleMenu = () => {
  const { back } = useRouter();
  return (
    <header className="flex justify-between items-center py-3 px-4">
      <nav>
        <ChevronLeft width={30} height={30} onClick={back} />
      </nav>
      <section className="flex justify-between gap-4">
        <Image src="/text-icon.svg" alt="Aa icon" width={40} height={40} />
        <Image src="/save-icon.svg" alt="Aa icon" width={40} height={40} />
        <Image src="/triple-dot.svg" alt="Aa icon" width={40} height={40} />
      </section>
    </header>
  );
};
