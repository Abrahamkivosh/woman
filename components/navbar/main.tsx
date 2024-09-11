import { APP_NAME } from "@/config";
import { marginX, navData } from "@/utils/constants";
import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import MenuDropdown from "./menu-dropdown";
import MobileNav from "./mobile-nav";

const MainNav = () => {
  return (
    <Flex justify="space-between" py="0" align="center" marginX={marginX}>
      <Box>
        <Link href="/">
          <Image
            src="/images/logo_blue.svg"
            alt={APP_NAME}
            loading="eager"
            style={{ cursor: "pointer", width: "60%", height: "50%" }}
          />
        </Link>
      </Box>

      <Flex align="center" gap={3} display={{ base: "none", xl: "flex" }}>
        {navData.map((item, i) => (
          <MenuDropdown key={i} menuItem={item} />
        ))}
      </Flex>

      <Box display={{ base: "block", xl: "none" }}>
        <MobileNav data={navData} />
      </Box>
    </Flex>
  );
};

export default MainNav;
