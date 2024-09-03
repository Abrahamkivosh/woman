"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaAward } from "react-icons/fa";
const CommitIcon = (props: ChakraProps) => {
  return <Icon as={FaAward} {...props} />;
};

export default CommitIcon;
