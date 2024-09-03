"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { LuHelpingHand } from "react-icons/lu";

const EmpowerIcon = (props: ChakraProps) => {
  return <Icon as={LuHelpingHand} {...props} />;
};

export default EmpowerIcon;
