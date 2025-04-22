import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="bg-[#f4f4f6] pt-[6.25rem]">{children}</div>
      <Footer />
    </div>
  );
}
