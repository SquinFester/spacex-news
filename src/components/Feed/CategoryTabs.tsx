"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { categories } from "@/lib/categoriesList";

export const CategoryTabs = () => {
  const pathname = usePathname();
  const isActive = (name: string) => {
    const path = pathname.split("/");
    return name === path[path.length - 1];
  };

  return (
    <nav className="max-w-4xl mx-auto">
      <ul className="grid grid-cols-4 text-center">
        {categories.map((tab, index) => (
          <li
            key={index}
            className={`pb-3 capitalize text-lightGray border-solid border-b-2 
          ${
            isActive(tab)
              ? " border-customRed font-medium text-white"
              : "border-lightGray"
          }
          `}
          >
            <Link href={`/feed/${tab}`}>{tab}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
