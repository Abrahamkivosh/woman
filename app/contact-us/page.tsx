import { CommonHero } from "@/components/common";
import { ContactDetails } from "@/components/contact";
import { Heading, Stack } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <CommonHero
        title="Contact Us"
        path="contact-us"
        h="30vh"
        imgUrl="/images/woman02.jpg"
      />
      <Stack spacing={6} pt={10}>
        <Heading as="h1" size={"3xl"} textAlign={"center"}>
          Get in touch with us
        </Heading>
      </Stack>

      <ContactDetails />
    </>
  );
};

export default page;
