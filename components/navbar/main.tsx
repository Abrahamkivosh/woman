import { APP_NAME } from "@/config";
import { marginX, navData } from "@/utils/constants";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import MenuDropdown from "./menu-dropdown";

const MainNav = () => {
  return (
    <Flex justify="space-between" py="2" align="center" marginX={marginX}>
      <Box>
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt={APP_NAME}
            width={110}
            height={110}
            blurDataURL="/images/logo.jpg"
            priority
            loading="eager"
          />
        </Link>
      </Box>

      <Flex align="center" gap={3} display={{ base: "none", xl: "flex" }}>
        {navData.map((item, i) => (
          <MenuDropdown key={i} menuItem={item} />
        ))}
      </Flex>

      <Box display={{ base: "block", xl: "none" }}>
        {/* <MobileNav data={navData} /> */}
      </Box>
    </Flex>
  );
};

export default MainNav;
