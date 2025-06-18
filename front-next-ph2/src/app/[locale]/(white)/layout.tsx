import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function WhiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <Header bgColor={"bg-white"} />
      <div className="pt-[6.25rem]">{children}</div>
      <Footer />
    </div>
  );
}
