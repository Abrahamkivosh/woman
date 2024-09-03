"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";

const SendIcon = (props: ChakraProps) => {
  return <Icon as={IoIosSend} {...props} />;
};

export default SendIcon;
