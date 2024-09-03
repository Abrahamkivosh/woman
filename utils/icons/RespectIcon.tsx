"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaExpandArrowsAlt } from "react-icons/fa";

const RespectIcon = (props: ChakraProps) => {
  return <Icon as={FaExpandArrowsAlt} {...props} />;
};

export default RespectIcon;
