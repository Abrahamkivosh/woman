"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  data: NavType[];
}

const MobileNav = ({ data }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  function navigateTo(url: string) {
    if (!url) {
      onClose();
      return;
    }
    router.push(url);
    onClose();
  }
  return (
    <Box>
      <IconButton
        aria-label="Open Menu"
        icon={<Icon as={RxHamburgerMenu} />}
        onClick={onOpen}
        boxSize={9}
        bg="none"
        _hover={{ background: "none" }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.primary">
          <DrawerCloseButton
            color="brand.black"
            w="48px"
            h="48px"
            _focus={{
              color: "brand.white",
              boxShadow: "none",
              border: "none",
              outline: "none",
            }}
          />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={5}>
            <Stack
              direction="column"
              align="flex-start"
              fontWeight="300"
              color="brand.white"
            >
              <Accordion allowToggle color="brand.white" w="100%">
                {data.map((item, i) => (
                  <AccordionItem borderColor="transparent" mb="3" key={i}>
                    {({ isExpanded }) => (
                      <Stack>
                        <Stack
                          bg={isExpanded ? "brand.white" : "brand.black"}
                          transition="all .3s ease"
                          color={isExpanded ? "brand.black" : "brand.white"}
                          borderRadius="md"
                        >
                          {item.subItems ? (
                            <AccordionButton
                              _active={{
                                bg: "none",
                              }}
                            >
                              <Box
                                as="span"
                                flex="1"
                                fontWeight="bold"
                                textAlign="left"
                                fontSize="xl"
                              >
                                {item.label}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          ) : (
                            <AccordionButton
                              as="button"
                              onClick={() => navigateTo(item.link || "")}
                            >
                              <Box
                                as="span"
                                flex="1"
                                fontWeight="bold"
                                textAlign="left"
                                fontSize="xl"
                              >
                                {item.label}
                              </Box>
                            </AccordionButton>
                          )}
                        </Stack>
                        {item.subItems && (
                          <AccordionPanel bg="brand.black">
                            <Stack gap={3}>
                              {item.subItems?.map((s, i) => (
                                <Flex
                                  gap={2}
                                  key={i}
                                  fontSize="xl"
                                  align="center"
                                  onClick={() => navigateTo(s.link)}
                                >
                                  <Box as="span">{s.label}</Box>
                                </Flex>
                              ))}
                            </Stack>
                          </AccordionPanel>
                        )}
                      </Stack>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
