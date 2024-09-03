import { marginX } from "@/utils/constants";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import EventCard from "./event-card";

const EventsListing = () => {
  return (
    <Stack mx={marginX} my="2rem" gap={8}>
      <Heading color="brand.primary"> Upcoming Events</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {new Array(6).fill(0).map((_, i) => (
          <EventCard key={i} />
        ))}
      </SimpleGrid>

      <Heading color="brand.primary" mt="1.5rem">
        Past Events
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {new Array(6).fill(0).map((_, i) => (
          <EventCard key={i} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default EventsListing;
