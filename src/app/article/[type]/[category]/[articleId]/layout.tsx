import { ArticleMenu } from "@/components/Article/ArticleMenu";

const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ArticleMenu />
      {children}
    </>
  );
};
export default ArticleLayout;
