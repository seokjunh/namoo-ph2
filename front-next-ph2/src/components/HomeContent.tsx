import HomeItem1 from "./HomeItem1";
import HomeItem2 from "./HomeItem2";
import HomeItem3 from "./HomeItem3";
import HomeItem4 from "./HomeItem4";

const HomeContent = () => {
  return (
    <div className="">
      <HomeItem1 />
      <div className="space-y-16 max-w-[120rem] mx-auto py-[6.25rem]">
        <HomeItem2 />
        <HomeItem3 />
        <HomeItem4 />
      </div>
    </div>
  );
};
export default HomeContent;
