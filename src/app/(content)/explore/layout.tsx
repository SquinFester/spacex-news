import { ExploreTabs } from "@/components/Explore/ExploreTabs";
import { Searchbar } from "@/components/Explore/Searchbar";

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Searchbar />
      <ExploreTabs />
      {children}
    </>
  );
};
export default ExploreLayout;
