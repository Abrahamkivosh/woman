import { Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const CHeading = ({ children }: { children: ReactNode }) => {
  return <Heading textAlign="center">{children}</Heading>;
};

export default CHeading;
