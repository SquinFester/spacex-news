import Menu from "@/components/Menu";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Menu />
    </>
  );
}
