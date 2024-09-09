import { ContactDetails } from "@/components/contact";
import { Heading, Stack } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Stack spacing={6} pt={10}>
        <Heading as="h1" size={"3xl"} textAlign={"center"}>
          Contact Us Here
        </Heading>
      </Stack>

      <ContactDetails />
    </>
  );
};

export default page;
