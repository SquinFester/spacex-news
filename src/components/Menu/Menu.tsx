"use client";

import Link from "next/link";
import { FeedIcon, ExploreIcon, SavedIcon, ProfileIcon } from "../Icons/Icons";
import { usePathname } from "next/navigation";

const MenuList = [
  {
    name: "feed",
    path: "/feed",
    icon: (color: string) => <FeedIcon color={color} />,
  },
  {
    name: "explore",
    path: "/explore",
    icon: (color: string) => <ExploreIcon color={color} />,
  },
  {
    name: "saved",
    path: "/saved",
    icon: (color: string) => <SavedIcon color={color} />,
  },
  {
    name: "profile",
    path: "/profile",
    icon: (color: string) => <ProfileIcon color={color} />,
  },
];

const Menu = () => {
  const pathname = usePathname();
  const isActive = (name: string) => {
    const path = pathname.split("/");
    return name === path[1];
  };
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark border-t border-solid border-lightGray/70">
      <ul className="grid grid-cols-4">
        {MenuList.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={`capitalize flex flex-col items-center py-4 text-lightGray text-sm ${
                isActive(item.name) && "text-white"
              }`}
            >
              {item.icon(isActive(item.name) ? "#fff" : "#595959")}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Menu;
