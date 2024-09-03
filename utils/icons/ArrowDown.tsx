"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaLongArrowAltDown } from "react-icons/fa";

const ArrowDown = (props: ChakraProps) => {
  return <Icon as={FaLongArrowAltDown} {...props} />;
};

export default ArrowDown;
