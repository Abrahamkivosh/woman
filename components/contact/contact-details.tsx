import { contactsData, marginX } from "@/utils/constants";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ContactForm from "./contact-form";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={8}
      my="4rem"
      marginX={marginX}
      alignItems="center"
    >
      <Stack gap="1rem">
        <Heading fontSize="xl">Send Direct Message</Heading>
        {contactsData.map((d, i) => (
          <Flex
            key={i}
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            gap={4}
            align="center"
            bg="brand.primary"
            color="brand.white"
            transition="background-color 0.3s"
            _hover={{
              bg: "brand.black",
            }}
          >
            <Stack p={3} bg={d.bg} h="fit-content" borderRadius="full">
              <Box as={d.icon} color={d.color} boxSize={7} />
            </Stack>
            <Stack>
              <Heading fontSize="lg">{d.title}</Heading>
              <Link href={d.link}>
                <Text fontSize="lg">{d.label}</Text>
              </Link>
            </Stack>
          </Flex>
        ))}
      </Stack>
      <ContactForm />
    </SimpleGrid>
  );
};

export default ContactDetails;
