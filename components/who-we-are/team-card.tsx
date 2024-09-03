import { getImageUrl } from "@/utils/functions";
import { EmailIcon, PhoneIcon } from "@/utils/icons";
import FacebookIcon from "@/utils/icons/FacebookIcon";
import LinkedinIcon from "@/utils/icons/LinkedinIcon";
import XIcon from "@/utils/icons/XIcon";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import TeamProfileModal from "./team-profile";

interface Props {
  member: Team;
}

const TeamCard = ({ member }: Props) => {
  const {
    facebook_link,
    linkedin_link,
    x_link,
    full_name,
    position,
    profile_pic,
    phone,
    email,
  } = member;

  const socials = getTeamSocials(
    facebook_link,
    x_link,
    linkedin_link,
    phone,
    email
  );
  return (
    <Stack
      className="team-card"
      borderRadius="20px"
      bg="brand.white"
      padding="20px"
      boxShadow="0px 4px 15px 0px rgba(0,0,0,0.4)"
      zIndex={2}
      gap={4}
      marginTop="40px"
      transition="all .4s ease-in-out"
      height="fit-content"
    >
      <Box height="25rem" overflow="hidden" borderRadius="20px">
        <Image
          className="team-card__image"
          src={getImageUrl(profile_pic)}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          alt="team"
          width={500}
          height={500}
        />
      </Box>

      <Stack align="center" gap={3}>
        <Heading
          as="h5"
          fontSize="xl"
          fontWeight="semibold"
          cursor="pointer"
          _hover={{
            color: "brand.primary",
          }}
        >
          {full_name}
        </Heading>
        <Text>{position}</Text>

        <Flex align="center" gap={2}>
          {socials.map((social) => (
            <Stack
              key={social.link}
              bg="brand.black"
              as="a"
              target="_blank"
              href={social.link}
              p=".6rem"
              borderRadius="full"
              transition="all .3s ease-in-out"
              color="brand.white"
              cursor="pointer"
              _hover={{
                bg: "brand.primary",
              }}
            >
              <Box key={social.link} as={social.icon} boxSize="4" />
            </Stack>
          ))}
        </Flex>
        <TeamProfileModal about={member.about} full_name={member.full_name} />
      </Stack>
    </Stack>
  );
};

export default TeamCard;

function getTeamSocials(
  fb?: string,
  x?: string,
  linkedin?: string,
  phone?: string,
  email?: string
) {
  const socials = [];

  if (fb) {
    socials.push({
      name: "facebook",
      link: fb,
      icon: FacebookIcon,
    });
  }
  if (phone) {
    socials.push({
      name: "phone",
      link: `tel:${phone}`,
      icon: PhoneIcon,
    });
  }
  if (email) {
    socials.push({
      name: "email",
      link: `mailto:${email}`,
      icon: EmailIcon,
    });
  }
  if (x) {
    socials.push({
      name: "x",
      link: x,
      icon: XIcon,
    });
  }
  if (linkedin) {
    socials.push({
      name: "LinkendIn",
      link: linkedin,
      icon: LinkedinIcon,
    });
  }

  return socials;
}
