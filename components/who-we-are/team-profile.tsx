"use client";
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { RenderContent } from "../common";

interface Props {
  about: string;
  full_name: string;
}

const TeamProfileModal = ({ about, full_name }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="brand.primary"
        color="brand.white"
        size="sm"
        onClick={onOpen}
        _hover={{
          bg: "brand.black",
        }}
      >
        View Profile
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", sm: "xl", md: "2xl", lg: "4xl" }}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton color="red" />
          <ModalBody maxH="80vh" pt="2rem" overflowY="auto">
            <Heading mb={0} fontSize="2xl">
              {full_name}
            </Heading>
            <RenderContent content={about} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TeamProfileModal;
