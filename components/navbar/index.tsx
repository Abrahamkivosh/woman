import { Box } from "@chakra-ui/react";
import MainNav from "./main";
import TopNav from "./top";

const Navbar = () => {
  return (
    <Box as="nav" boxShadow="md">
      <TopNav />
      <MainNav />
    </Box>
  );
};

export default Navbar;
