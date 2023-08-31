import { Header } from "@/components/Feed/Header";

type FeedLayoutProps = {
  children: React.ReactNode;
};

const FeedLayout = ({ children }: FeedLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default FeedLayout;
