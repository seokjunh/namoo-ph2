import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 bg-black px-5 py-24 text-white">
      <div className="text-xl">(주)나무아이앤씨</div>
      <div className="flex space-x-4">
        <Link href={"/"}>Business</Link>
        <Link href={"/"}>Solution</Link>
        <Link href={"/"}>Product</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Support</Link>
      </div>
      <div>
        <div>
          서울특별시 강남구 도산대로28길 38(논현동, 대경빌딩 3층) | 대표 :
          김경식
        </div>
        <div>
          사업자 번호 : 211-87-61350 | 대표번호 : 02-3018-5114 | 팩스 :
          02-3018-3026
        </div>
      </div>
    </div>
  );
};
export default Footer;
