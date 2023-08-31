"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const CategoryTabsList = [
  { name: "tech", path: "/feed/tech" },
  { name: "science", path: "/feed/science" },
  { name: "education", path: "/feed/education" },
  { name: "business", path: "/feed/business" },
];

export const CategoryTabs = () => {
  const pathname = usePathname();
  const isActive = (name: string) => {
    const path = pathname.split("/");
    return name === path[path.length - 1];
  };

  return (
    <nav>
      <ul className="grid grid-cols-4 text-center">
        {CategoryTabsList.map((tab, index) => (
          <li
            key={index}
            className={`pb-3 capitalize text-lightGray
          ${
            isActive(tab.name)
              ? "border-solid border-b-2 border-red-500 font-medium text-white"
              : ""
          }
          `}
          >
            <Link href={tab.path}>{tab.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
