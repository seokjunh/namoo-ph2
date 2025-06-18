import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function BlackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#1C1C1C] text-white">
      <Header bgColor="bg-[#1C1C1C]" />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
