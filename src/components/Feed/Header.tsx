import { CategoryTabs } from "./CategoryTabs";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  return (
    <header className="bg-darkGray">
      <section className="flex container justify-between py-8 items-center">
        <HamburgerMenu />
        <div className="w-12 h-12 rounded-full bg-red-500" />
      </section>
      <CategoryTabs />
    </header>
  );
};
