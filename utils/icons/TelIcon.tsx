"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const TelIcon = (props: ChakraProps) => {
  return <Icon as={BsFillTelephoneOutboundFill} {...props} />;
};

export default TelIcon;
