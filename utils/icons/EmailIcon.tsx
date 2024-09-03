"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { MdOutlineMail } from "react-icons/md";

const EmailIcon = (props: ChakraProps) => {
  return <Icon as={MdOutlineMail} {...props} />;
};

export default EmailIcon;
