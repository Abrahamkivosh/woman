"use client";

import { CommonHero } from "@/components/common";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

interface EventInterface {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

const events: EventInterface[] = [
  {
    title: "Tech Conference 2024",
    date: "2024-11-15",
    time: "10:00 AM - 4:00 PM",
    description: "A conference exploring the future of tech and innovation.",
    image: "/images/empowerment.jpg",
  },
  {
    title: "Music Fest 2024",
    date: "2023-04-22",
    time: "6:00 PM - 11:00 PM",
    description: "Join us for a night of incredible performances and fun!",
    image: "/images/girlpower.png",
  },
];

const isPastEvent = (eventDate: string) => new Date(eventDate) < new Date();

const EventCard = ({
  event,
  isPast,
  onOpenRegisterModal,
}: {
  event: EventInterface;
  isPast: boolean;
  onOpenRegisterModal: (event: EventInterface) => void;
}) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
    _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
    position="relative"
  >
    <Image
      src={event.image}
      alt={event.title}
      style={{ width: "100%", height: "200px" }}
      loading="eager"
      width={500}
      height={350}
    />
    <Box p={6}>
      <Heading size="md" mb={2}>
        {event.title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        {event.date} | {event.time}
      </Text>
      <Text
        mb={4}
        fontSize="sm"
        color="gray.600"
        dangerouslySetInnerHTML={{ __html: event.description }}
      />
      {!isPast && (
        <Button
          mt={4}
          variant="solid"
          width="full"
          bgColor={"brand.primary"}
          color={"white"}
          _hover={{ bg: "purple.600" }}
          onClick={() => onOpenRegisterModal(event)}
        >
          Register Now
        </Button>
      )}
    </Box>
  </Box>
);

const Eventspage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState<EventInterface | null>(
    null
  );
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const onOpenRegisterModal = (event: EventInterface) => {
    setSelectedEvent(event);
    onOpen();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    // Add form submission logic here (e.g., API call)
    console.log(
      "Registered for",
      selectedEvent?.title,
      "with details:",
      formData
    );
    onClose();
  };

  return (
    <>
      <CommonHero title="Events" path="events" imgUrl="/images/woman02.jpg" />
      <Box
        width="100%"
        bgGradient="linear(to-r, purple.500, purple.700)"
        color="white"
        py={{ base: "2rem", sm: "3rem" }}
        textAlign="center"
      >
        <Text
          fontSize={{ base: "xl", sm: "2xl" }}
          fontWeight="bold"
          data-aos="fade-up"
          px={{ base: "3%", sm: "5%", md: "6%", lg: "8%" }}
        >
          Stay updated with our upcoming events that bring together women in
          tech, industry leaders, and stakeholders from across Africa. From
          hackathons and coding bootcamps to conferences and roundtable
          discussions, our events are designed to inspire, educate, and empower.
        </Text>
      </Box>

      <Stack mx={{ base: "3%", sm: "5%", md: "6%", lg: "8%" }} my="2rem">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {events.map((event, idx) => (
            <EventCard
              key={idx}
              event={event}
              isPast={isPastEvent(event.date)}
              onOpenRegisterModal={onOpenRegisterModal}
            />
          ))}
        </SimpleGrid>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register for {selectedEvent?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Full Name"
                autoComplete="name"
                autoCorrect="yes"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="phone" mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Phone Number"
                autoComplete="mobile tel"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                autoComplete="email"
                placeholder="Email Address"
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={handleRegister}>
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Eventspage;
