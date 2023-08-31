import Image from "next/image";
import Link from "next/link";

const MenuList = [
  { name: "feed", path: "/feed", icon: "/feed.svg" },
  { name: "explore", path: "/explore", icon: "/explore.svg" },
  { name: "saved", path: "/saved", icon: "/saved.svg" },
  { name: "profile", path: "/profile", icon: "/profile.svg" },
];

const Menu = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark border-t border-solid border-lightGray">
      <ul className="grid grid-cols-4">
        {MenuList.map((item, index) => (
          <li
            key={index}
            className="capitalize flex flex-col items-center py-4"
          >
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={24}
              height={24}
            />
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Menu;
