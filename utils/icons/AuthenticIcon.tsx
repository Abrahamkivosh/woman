"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { SiGoogleauthenticator } from "react-icons/si";

const AuthenticIcon = (props: ChakraProps) => {
  return <Icon as={SiGoogleauthenticator} {...props} />;
};

export default AuthenticIcon;
