"use client";
import {
  Box,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    avatar: "/images/woman01.jpg",
    testimonial:
      "WITIA has been a life-changing experience for me. The support and training I received have empowered me to pursue a career in technology.",
  },
  {
    id: 2,
    name: "Mary Smith",
    avatar: "/images/woman02.jpg",
    testimonial:
      "Thanks to the mentorship at WITIA, I am now confident in my skills and ready to take on new challenges in the tech industry.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    avatar: "/images/woman01.jpg",
    testimonial:
      "WITIA provided me with the resources and community I needed to grow and succeed as a woman in technology.",
  },
  {
    id: 4,
    name: "Sarah Lee",
    avatar: "/images/woman01.jpg",
    testimonial:
      "Joining WITIA was one of the best decisions I've made. The support and opportunities have been invaluable in my journey as a tech professional.",
  },
];

const TestimonialsSection = () => {
  const cardBgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box
      as="section"
      py={{ base: "2rem", sm: "2rem" }}
      px={{ base: "1rem", sm: "2rem", md: "4rem" }}
      bgImage={"/images/testimony.svg"}
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={10}
        color={textColor}
      >
        What Our Members Say
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.id}
            bg={cardBgColor}
            p={8}
            rounded="lg"
            shadow="lg"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{ transform: "translateY(-10px)", shadow: "2xl" }}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Stack align="center" spacing={6}>
              <Image
                borderRadius="full"
                boxSize="120px"
                src={testimonial.avatar}
                alt={testimonial.name}
                style={{ objectFit: "cover" }}
                shadow="md"
              />
              <Text
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
                color={textColor}
              >
                {testimonial.name}
              </Text>
              <Text textAlign="center" color={textColor} fontStyle="italic">
                &quot; {testimonial.testimonial} &quot;
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TestimonialsSection;
