import { CommonHero } from "@/components/common";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";

interface SectionProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  aosAnimation: string;
}

const Section: FC<SectionProps> = ({
  title,
  description,
  image,
  alt,
  aosAnimation,
}) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      px={{ base: "1rem", lg: "8rem" }}
      py={{ base: "4rem", lg: "6rem" }}
      bgGradient="linear(to-r, purple.500, pink.300)"
      color="white"
      borderRadius="xl"
      shadow="2xl"
      position="relative"
      data-aos={aosAnimation} // Apply AOS animation
    >
      <Box flex="1" zIndex={2}>
        <Heading
          fontSize={{ base: "2xl", lg: "4xl" }}
          mb={4}
          fontWeight="bold"
          lineHeight="1.2"
        >
          {title}
        </Heading>
        <Text
          fontSize="lg"
          mb={6}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Button
          bg="white"
          color="brand.primary"
          size="lg"
          _hover={{ bg: "purple.300", color: "white" }}
          shadow="lg"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <Link href="/contact-us">Join Us Today</Link>
        </Button>
      </Box>
      <Box flex="1" mt={{ base: 6, md: 0 }}>
        <Image
          src={image}
          alt={alt}
          borderRadius="xl"
          style={{ objectFit: "cover" }}
          maxH="400px"
          shadow="2xl"
          data-aos="zoom-out-up"
          data-aos-duration="2000"
        />
      </Box>
    </Flex>
  );
};

const CommunityPage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <CommonHero
        title="Community"
        path="programs/community"
        imgUrl="/images/woman02.jpg"
      />

      {/* Main Content Section */}
      <Stack spacing={16} py={0} bg="gray.100">
        {/* Section 1: Welcome to Our Community */}
        <Section
          title="Welcome to Our Vibrant Community"
          description="Building a strong and supportive community is at the heart of everything we do at WITIA. We are dedicated to creating a space where women in technology can come together, share, learn, and grow."
          image="/images/girlpower.png"
          alt="Community Together"
          aosAnimation="fade-up"
        />
        {/* Section 2: Our community initiatives include: */}
        <Box px={{ base: "2rem", lg: "8rem" }} py="6rem">
          <Heading
            textAlign="center"
            fontSize={{ base: "3xl", lg: "5xl" }}
            mb={12}
          >
            Our community initiatives include:
          </Heading>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-around"
            align="center"
          >
            <VStack
              spacing={6}
              flex="1"
              maxW="300px"
              textAlign="center"
              data-aos="fade-up"
            >
              <Image src="/images/community.jpg" alt="Events and Forums" />
              <Heading fontSize="2xl" color="purple.700">
                Events and Forums:
              </Heading>
              <Text>
                We host regular events, including conferences, panel
                discussions, and forums, where women in tech can engage with
                industry leaders, share insights, and discuss the latest trends
                in technology and innovation
              </Text>
            </VStack>
            <VStack
              spacing={6}
              flex="1"
              maxW="300px"
              textAlign="center"
              data-aos="fade-up"
            >
              <Image src="/images/empowerment.jpg" alt="Online Platforms" />
              <Heading fontSize="2xl" color="purple.700">
                Online Platforms
              </Heading>
              <Text>
                Our online platforms provide a space for women to connect,
                collaborate, and support each other. Whether it&apos;s through
                our forums, social media groups, or digital meetups, we ensure
                that our community members have access to a network of
                like-minded women across Africa.
              </Text>
            </VStack>
            <VStack
              spacing={6}
              flex="1"
              maxW="300px"
              textAlign="center"
              data-aos="fade-up"
            >
              <Image
                src="/images/innovation.jpeg"
                alt="Collaborative Projects:"
              />
              <Heading fontSize="2xl" color="purple.700">
                Collaborative Projects:
              </Heading>
              <Text>
                We encourage our members to work together on projects that push
                the boundaries of technology and innovation. Through
                collaboration, we believe that we can drive change and create
                solutions that have a lasting impact on the tech industry in
                Africa.
              </Text>
            </VStack>
          </Flex>
        </Box>
        {/* Section 3: Two Column Layout */}
        <Box px={{ base: "2rem", lg: "8rem" }} py="6rem" bg="white">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
          >
            {/* Column 1 */}
            <Box flex="1" mb={{ base: "4rem", md: "0" }} pr={{ md: "2rem" }}>
              <Image
                src="/images/Aledu_Girls__Teacher_Emily_Story_Large.jpg"
                alt="Our Story"
                borderRadius="xl"
                shadow="xl"
                style={{ objectFit: "cover" }}
                data-aos="fade-left"
              />
            </Box>

            {/* Column 2 */}
            <Box flex="1" pl={{ md: "2rem" }} data-aos="fade-right">
              <Heading
                fontSize={{ base: "2xl", lg: "3xl" }}
                mb={4}
                fontWeight="bold"
                color="brand.primary"
              >
                Our Community&apos;s Story
              </Heading>
              <Text fontSize="lg" mb={6} color="gray.700">
                At WITIA, our community is more than just a network—it&apos;s a
                movement of women supporting and uplifting each other in the
                technology space. Through regular events, forums, and
                collaborative projects, we create opportunities for women to
                engage with industry leaders, share knowledge, and drive
                innovation. Our online platforms foster continuous connection
                and support, bringing together women from all corners of Africa
                to collaborate, learn, and grow. Together, we are not just
                participating in the tech industry—we are shaping its future,
                empowering each other to push boundaries and create meaningful
                change across the continent.
              </Text>
            </Box>
          </Flex>
        </Box>
        {/* Section 4: Call to Action */}
        <Box
          bgImage="/images/africa-woman.jpg"
          bgSize="cover"
          bgPos="center"
          color="white"
          py={{ base: "4rem", lg: "8rem" }}
          position="relative"
          zIndex={1}
          h={{ base: "400px", lg: "400px" }}
          overflow={{ base: "hidden", lg: "visible" }}
        >
          <Box
            bg="rgba(0, 0, 0, 0.6)"
            py="4rem"
            px={{ base: "2rem", lg: "6rem" }}
            borderRadius="xl"
            maxW="100%"
            maxH={{ base: "100%", lg: "100%" }}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={-1}
          >
            <Heading
              textAlign="center"
              fontSize={{ base: "3xl", lg: "5xl" }}
              mb={6}
              data-aos="fade-up-right"
            >
              Become Part of the Change
            </Heading>
            <Text
              fontSize="lg"
              textAlign="center"
              maxW="3xl"
              mx="auto"
              mb={8}
              lineHeight="1.6"
              data-aos="fade-up-left"
            >
              Our community is dedicated to uplifting one another and promoting
              equality. Whether you want to contribute your time, skills, or
              resources, there&apos;s always a place for you. Let&apos;s build a
              better future together.
            </Text>
            <Flex justify="center">
              <Button
                size="lg"
                bg="brand.primary"
                color="white"
                _hover={{ bg: "purple.400" }}
                shadow="xl"
                as="a"
                href="/contact-us"
                data-aos="fade-down-right"
              >
                Get Involved
              </Button>
            </Flex>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default CommunityPage;
