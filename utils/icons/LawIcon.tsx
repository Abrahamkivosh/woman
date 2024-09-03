"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { GoLaw } from "react-icons/go";

const LawIcon = (props: ChakraProps) => {
  return <Icon as={GoLaw} {...props} />;
};

export default LawIcon;
