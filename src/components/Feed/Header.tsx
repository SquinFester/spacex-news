import Link from "next/link";
import { CategoryTabs } from "./CategoryTabs";
import { HamburgerMenu } from "./HamburgerMenu";
import { UserAvatar } from "./UserAvatar";

export const Header = () => {
  return (
    <header className="bg-darkGray">
      <section className="flex container justify-between py-8 items-center max-w-4xl mx-auto">
        <HamburgerMenu />
        <Link href="/profile" aria-label="link to profile">
          <UserAvatar />
        </Link>
      </section>
      <CategoryTabs />
    </header>
  );
};
