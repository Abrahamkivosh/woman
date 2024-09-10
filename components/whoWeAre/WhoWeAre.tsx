"use client";
import { APP_NAME } from "@/config";
import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Divider,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaGlobeAfrica,
  FaGraduationCap,
  FaHandshake,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";
import { MdTimeline } from "react-icons/md";

const histories = [
  {
    icon: FaRocket,
    title: "Our Foundation",
    description:
      "Founded in 2015, WITIA began as a grassroots initiative to address the gender gap in the tech industry by providing women with access to technology education and mentorship.",
  },
  {
    icon: FaGraduationCap,
    title: "Training Programs",
    description:
      "Over the years, we have trained more than 5,000 women across Africa in various tech fields, including software development, data science, and cloud computing.",
  },
  {
    icon: FaHandshake,
    title: "Global Partnerships",
    description:
      "We partnered with leading global tech companies and local businesses to provide internship opportunities, mentorship, and career placements for our graduates.",
  },
  {
    icon: FaGlobeAfrica,
    title: "Community Impact",
    description:
      "Our community-driven approach has empowered women not only to excel in their careers but also to give back through mentoring others, creating a ripple effect across the tech industry.",
  },
  {
    icon: FaTrophy,
    title: "Recognition and Growth",
    description:
      "WITIA has been recognized by numerous international organizations for its impactful work in bridging the gender gap in technology, continuing to expand its reach and influence across Africa.",
  },
];

const HistorySection = () => {
  return (
    <Stack marginX={marginX} py={{ base: "1rem", sm: "2rem" }}>
      <Heading
        as="h3"
        textAlign="center"
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight="bold"
        color="brand.primary"
        data-aos="fade-up"
      >
        Our Journey
      </Heading>

      {/* Timeline Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        mt={8}
        data-aos="fade-up"
      >
        {/* Milestone 1 */}
        <Box display="flex" alignItems="center">
          <Icon as={MdTimeline} w={10} h={10} color="purple.400" />
          <Stack ml={4}>
            <Heading
              fontSize="lg"
              color="purple.600"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              2010 - Foundation
            </Heading>
            <Text
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              WITIA was founded with the goal of empowering women in tech. Our
              first steps involved small local programs that quickly gained
              national attention.
            </Text>
          </Stack>
        </Box>

        {histories.map((history, i) => (
          <Box
            display="flex"
            alignItems="center"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <Icon as={history.icon} w={10} h={10} color="purple.400" />
            <Stack ml={4}>
              <Heading fontSize="lg" color="purple.600">
                {history.title}
              </Heading>
              <Text>{history.description}</Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>

      <Box mt={10} data-aos="fade-up">
        <Heading as="h4" fontSize="xl" mb={4} color="purple.500">
          Moments in Time
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
          <Box
            height="15rem"
            overflow="hidden"
            borderRadius="xl"
            boxShadow="xl"
          >
            <Image
              src="/images/history01.webp"
              alt="Historical Moment"
              width={800}
              height={800}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </Box>
          <Box
            height="15rem"
            overflow="hidden"
            borderRadius="xl"
            boxShadow="xl"
          >
            <Image
              src="/images/history02.webp"
              alt="Historical Moment"
              width={800}
              height={800}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </Box>
        </SimpleGrid>
      </Box>

      {/* Call to Action */}
      <Box textAlign="center" mt={12} py={4}>
        <Divider
          my={6}
          borderColor="purple.400"
          borderWidth={2}
          borderRadius="full"
        />
        <Heading as="h5" fontSize="2xl" color="purple.400">
          Ready to join us?
        </Heading>
        <Text>
          <Text
            fontSize="lg"
            fontWeight="bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Be a part of our journey. Join us as we continue to shape the
            future.
          </Text>
        </Text>
        <Box>
          <Button
            colorScheme="purple"
            size="lg"
            mt={4}
            data-aos="fade-up"
            data-aos-delay="100"
            as="a"
            href="/contact-us"
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

const WhoWeAre = () => {
  return (
    <Stack>
      <Box
        width="100%"
        bg="purple.400"
        color="brand.white"
        fontWeight="bold"
        py={{ base: "1.5rem", sm: "1.5rem" }}
        textAlign="center"
      >
        Explore our technology solutions company and discover how we leverage
        cutting-edge technologies to transform Women.
      </Box>
      <Box>
        <SimpleGrid
          marginX={marginX}
          columns={{ base: 1, md: 2 }}
          spacing={8}
          alignItems="center"
          my={{ base: "1rem", sm: "1rem" }}
        >
          <Box
            height={{ base: "20rem", sm: "30rem" }}
            overflow="hidden"
            borderRadius="xl"
            boxShadow="xl"
            data-aos-delay="100"
            data-aos="fade-left"
          >
            <Image
              src="/images/woman01.jpg"
              alt={APP_NAME}
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack gap={{ base: 2, sm: 4 }} data-aos="fade-up">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", sm: "6xl" }}
              display="flex"
              flexDir={{ base: "row", sm: "row" }}
            >
              <Text color="brand.primary" className="welcomeText">
                Who we are?
              </Text>
              <Text pl={4}> WITIA</Text>
            </Heading>
            <Text fontSize={{ base: "md", sm: "lg" }} data-aos="fade-up-right">
              Women In Technology & Innovation Africa (WITIA) is a dedicated
              platform that empowers women by providing access to technology
              education, mentorship, and resources. Our mission is to work with
              women across Africa to break barriers in technology and foster
              innovation that transforms lives and communities.
            </Text>
          </Stack>
        </SimpleGrid>

        <Box
          marginX={marginX}
          my={{ base: "1rem", sm: "4rem" }}
          display="flex"
          flexDir={{ base: "column", sm: "row" }}
        >
          <Box
            fontWeight="bold"
            fontSize="2rem"
            width="40%"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
          >
            About The Organization
          </Box>
          <Stack
            spacing={4}
            textAlign="justify"
            width={{ base: "100%", sm: "60%" }}
          >
            <Text
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
              data-aos-delay="100"
            >
              WITIA was founded with a clear vision: to bridge the gender gap in
              the technology sector by equipping women with the skills,
              resources, and opportunities they need to succeed. We believe in
              creating a future where women lead the way in innovation and
              digital transformation.
            </Text>

            <SimpleGrid columns={2} spacing={4}>
              <Box
                height="10rem"
                overflow="hidden"
                borderRadius="xl"
                boxShadow="xl"
                data-aos-delay="100"
                data-aos="fade-left"
              >
                <Image
                  src="/images/woman01.jpg"
                  alt={APP_NAME}
                  width={800}
                  height={800}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                height="10rem"
                overflow="hidden"
                borderRadius="xl"
                boxShadow="xl"
                data-aos-delay="100"
                data-aos="fade-right"
              >
                <Image
                  src="/images/woman02.jpg"
                  alt={APP_NAME}
                  width={800}
                  height={800}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </SimpleGrid>

            <Text
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
              data-aos-delay="200"
            >
              Since our inception, we have trained over 5,000 women in
              cutting-edge technologies, ranging from software development to
              data science, cloud computing, and AI. Through partnerships with
              global tech companies and local businesses, we create avenues for
              women to gain hands-on experience and secure employment in the
              tech industry.
            </Text>
            <Text
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              Our community-driven approach ensures that women not only excel in
              their careers but also give back by mentoring and uplifting other
              women, creating a ripple effect that drives lasting change in
              society.
            </Text>
          </Stack>
        </Box>
      </Box>

      <HistorySection />
    </Stack>
  );
};

export default WhoWeAre;
