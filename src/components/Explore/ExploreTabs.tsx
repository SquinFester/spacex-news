"use client";
import { categoriesList } from "@/lib/categoriesList";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ExploreTabs = () => {
  const pathname = usePathname();
  const isActive = (name: string) => {
    const path = pathname.split("/");
    return name === path[path.length - 1];
  };

  return (
    <nav>
      <ul className="flex justify-between text-center overflow-auto px-4 gap-2">
        {categoriesList.map((tab, index) => (
          <li
            key={index}
            className={`rounded-2xl text-sm capitalize py-2 px-4 mt-8 mb-4 ${
              isActive(tab.name)
                ? "text-white bg-secondLightGray"
                : "text-white/70 bg-darkGray "
            }`}
          >
            <Link
              href={`/explore/${tab.name}`}
              className="flex gap-2 min-w-[100px] justify-center"
            >
              {tab.icon(
                isActive(tab.name) ? "" : "rgb(255 255 255 / 0.7)",
                20,
                20
              )}
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
