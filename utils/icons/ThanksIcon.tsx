"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { PiHandsPrayingBold } from "react-icons/pi";
const ThanksIcon = (props: ChakraProps) => {
  return <Icon as={PiHandsPrayingBold} {...props} color="brand.white" />;
};

export default ThanksIcon;
