"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { GiInjustice } from "react-icons/gi";

const JusticeIcon = (props: ChakraProps) => {
  return <Icon as={GiInjustice} {...props} />;
};

export default JusticeIcon;
