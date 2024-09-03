"use client";

import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Popup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 5000);
  }, []);
  return (
    <Stack>
      <Modal
        size={{ base: "full", sm: "md" }}
        isOpen={isOpen}
        isCentered
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent overflow="hidden">
          <ModalCloseButton
            color="white"
            bg="red"
            mr={{ base: "1rem", sm: "0" }}
          />
          <ModalBody p={0}>
            <Stack mt="2rem">
              <Stack p={4} gap={3} textAlign="center" align="center">
                <Heading>Join us in Creating Second Chances.</Heading>
                <Text fontSize="lg">
                  Re-imagining justice globally by transforming lives of women,
                  girls and children impacted by the justice system
                </Text>
                <Link href="/donate">
                  <Button w="fit-content" colorScheme="primary" size="sm">
                    Donate Now
                  </Button>
                </Link>
              </Stack>
              <Box bg="red" height={{ base: "100%", sm: "15rem" }}>
                <Image
                  src="/popup-img.jpg"
                  alt="Donate now image in popup"
                  width={500}
                  height={500}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Popup;
