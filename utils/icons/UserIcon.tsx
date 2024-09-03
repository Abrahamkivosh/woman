"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const UserIcon = (props: ChakraProps) => {
  return <Icon as={FaUser} {...props} />;
};

export default UserIcon;
