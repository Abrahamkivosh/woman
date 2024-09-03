import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import TeamCard from "./team-card";
import { marginX } from "@/utils/constants";
import { CMS_URL } from "@/config";

const OurTeam = async () => {
  const team = await getTeam();
  const boardMembers = team.filter((m) => m.is_board_member);
  const employees = team.filter((m) => !m.is_board_member);
  const sortedEmployees = employees.sort((a, b) => {
    if (!b.layout_number) return -1;
    if (!a.layout_number) return 1;
    return a.layout_number - b.layout_number;
  });

  return (
    <Box bgImage="/team-wave.svg" bgSize="cover" bgRepeat="no-repeat">
      <Stack marginX={marginX} my="2rem" align="center">
        <Heading color="brand.primary">Board of Directors</Heading>

        <SimpleGrid
          py={{ base: "1rem", sm: "3rem" }}
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={8}
          padding={{ base: "5px", sm: "20px" }}
        >
          {boardMembers.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </SimpleGrid>
        <Heading color="brand.primary">The Staff</Heading>

        <SimpleGrid
          py={{ base: "1rem", sm: "3rem" }}
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={8}
          padding="20px"
        >
          {sortedEmployees.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default OurTeam;

async function getTeam() {
  const url =
    CMS_URL +
    "/items/team/" +
    "?filter[status][_eq]=active&fields=slug,full_name,position,is_board_member,profile_pic,x_link,facebook_link,linkedin_link,phone,email,about,layout_number&sort=date_created";

  try {
    const response = await fetch(url, {
      cache: "no-cache",
    });

    const data: {
      data: Team[];
    } = await response.json();

    if (!data) {
      throw new Error("No data found");
    }

    return data.data;
  } catch (error) {
    console.log(error);
    return [] as Team[];
  }
}
