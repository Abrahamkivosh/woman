"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";

const CalendarIcon = (props: ChakraProps) => {
  return <Icon as={FaCalendar} {...props} />;
};

export default CalendarIcon;
