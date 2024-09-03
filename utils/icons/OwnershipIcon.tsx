"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaHandsHoldingCircle } from "react-icons/fa6";

const OwnershipIcon = (props: ChakraProps) => {
  return <Icon as={FaHandsHoldingCircle} {...props} />;
};

export default OwnershipIcon;
