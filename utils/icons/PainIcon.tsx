"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { BiSolidDonateBlood } from "react-icons/bi";

const PainIcon = (props: ChakraProps) => {
  return <Icon as={BiSolidDonateBlood} {...props} />;
};

export default PainIcon;
