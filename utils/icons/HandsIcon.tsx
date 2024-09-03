"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaHands } from "react-icons/fa";

const HandsIcon = (props: ChakraProps) => {
  return <Icon as={FaHands} {...props} />;
};

export default HandsIcon;
