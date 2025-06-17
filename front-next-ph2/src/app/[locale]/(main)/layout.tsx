import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#1C1C1C] text-white">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
