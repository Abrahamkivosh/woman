"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { MdOutlineWeb } from "react-icons/md";

const NormIcon = (props: ChakraProps) => {
  return <Icon as={MdOutlineWeb} {...props} />;
};

export default NormIcon;
