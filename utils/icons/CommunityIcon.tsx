"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";

const Community = (props: ChakraProps) => {
  return <Icon as={FaUsers} {...props} />;
};

export default Community;
