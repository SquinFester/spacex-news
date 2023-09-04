import { CategoryTabs } from "./CategoryTabs";
import { HamburgerMenu } from "./HamburgerMenu";
import { UserAvatar } from "./UserAvatar";

export const Header = () => {
  return (
    <header className="bg-darkGray">
      <section className="flex container justify-between py-8 items-center">
        <HamburgerMenu />
        <UserAvatar />
      </section>
      <CategoryTabs />
    </header>
  );
};
