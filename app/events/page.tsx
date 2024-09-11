"use client";

import { CommonHero } from "@/components/common";
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface EventInterface {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  tags: string[];
}

const events: EventInterface[] = [
  {
    title: "Tech Conference 2024",
    date: "2024-11-15",
    time: "10:00 AM - 4:00 PM",
    description: "A conference exploring the future of tech and innovation.",
    image: "/images/empowerment.jpg",
    tags: ["Technology", "Innovation", "Conference"],
  },
  {
    title: "Music Fest 2024",
    date: "2023-04-22",
    time: "6:00 PM - 11:00 PM",
    description: "Join us for a night of incredible performances and fun!",
    image: "/images/girlpower.png",
    tags: ["Music", "Festival", "Live Performance"],
  },
];

const isPastEvent = (eventDate: string) => new Date(eventDate) < new Date();

const EventCard = ({
  event,
  isPast,
}: {
  event: EventInterface;
  isPast: boolean;
}) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="lg"
    _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
  >
    <Image src={event.image} alt={event.title} />
    <Box p={6}>
      <Heading size="md" mb={2}>
        {event.title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        {event.date} | {event.time}
      </Text>
      <Text mb={4}>{event.description}</Text>
      <Flex gap={2} mb={4}>
        {event.tags.map((tag, i) => (
          <Tag key={i} colorScheme={isPast ? "gray" : "teal"}>
            {tag}
          </Tag>
        ))}
      </Flex>
    </Box>
  </Box>
);

const Eventspage = () => {
  const [pastEvents, setPastEvents] = useState<EventInterface[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<EventInterface[]>([]);

  useEffect(() => {
    setPastEvents(events.filter((event) => isPastEvent(event.date)));
    setUpcomingEvents(events.filter((event) => !isPastEvent(event.date)));
  }, []);

  return (
    <>
      <CommonHero
        title="Events"
        path="events"
        h="30vh"
        imgUrl="/images/woman02.jpg"
      />

      <Stack mx={{ base: "3%", sm: "5%", md: "6%", lg: "8%" }} my="2rem">
        <Heading size="lg" mb={8}>
          Upcoming Events
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {upcomingEvents.map((event, idx) => (
            <EventCard key={idx} event={event} isPast={false} />
          ))}
        </SimpleGrid>
      </Stack>

      <Stack mx={{ base: "3%", sm: "5%", md: "6%", lg: "8%" }} my="2rem">
        <Heading size="lg" mb={8}>
          Past Events
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {pastEvents.map((event, idx) => (
            <EventCard key={idx} event={event} isPast={true} />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Eventspage;
