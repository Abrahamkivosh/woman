import { CommonHero } from "@/components/common";
import WhoWeAre from "@/components/whoWeAre/WhoWeAre";

const page = () => {
  return (
    <>
      <CommonHero title="Who We Are" path="who-we-are" h="30vh" />
      <WhoWeAre />
    </>
  );
};

export default page;
