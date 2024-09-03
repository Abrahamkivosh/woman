import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ContactForm = () => {
  return (
    <Stack>
      <Heading fontSize="xl">Leave us a message</Heading>
      <Stack>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            className="custom-input"
            type="text"
            placeholder="Your full name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            className="custom-input"
            placeholder="Your email address"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Subject</FormLabel>
          <Input type="text" className="custom-input" placeholder="Subject**" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea className="custom-input" placeholder="Your full name" />
        </FormControl>
        <Button
          bg="brand.primary"
          color="brand.white"
          _hover={{
            bg: "brand.black",
          }}
        >
          Send Message
        </Button>
      </Stack>
    </Stack>
  );
};

export default ContactForm;
