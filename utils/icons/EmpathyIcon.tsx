"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { GiAwareness } from "react-icons/gi";

const EmpathyIcon = (props: ChakraProps) => {
  return <Icon as={GiAwareness} {...props} />;
};

export default EmpathyIcon;
