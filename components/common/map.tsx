import { Box, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ChakraProps {
  children?: ReactNode;
}

const Map = ({ ...props }: Props) => {
  return (
    <Box {...props}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7490.4596827757205!2d36.791785610481746!3d-1.2793918276090226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f174d455fb175%3A0x588b6536bc5a2694!2s658%20Tabere%20Cres%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1723189125274!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;
