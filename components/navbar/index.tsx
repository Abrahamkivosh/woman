import { Box } from "@chakra-ui/react";
import MainNav from "./main";

const Navbar = () => {
  return (
    <Box as="nav" boxShadow="md" bg={["brand.primary", "blue.500"]}>
      {/* <TopNav /> */}
      <MainNav />
    </Box>
  );
};

export default Navbar;
