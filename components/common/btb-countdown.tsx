"use client";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import CountDown from "count-down-react";

const CoundownRenderer = ({ days, hours, minutes, seconds }: any) => {
  const rendererData = [
    {
      title: "Days",
      value: days,
    },
    {
      title: "Hours",
      value: hours,
    },
    {
      title: "Minutes",
      value: minutes,
    },
    {
      title: "Seconds",
      value: seconds,
    },
  ];

  return (
    <Box>
      <Stack
        py="2rem"
        justify="space-around"
        gap={{ base: 1, sm: 4 }}
        flexDir="row"
        divider={
          <Heading
            display={{ base: "none", lg: "block" }}
            alignSelf="center"
            justifySelf="center"
            color="brand.white"
          >
            :
          </Heading>
        }
      >
        {rendererData.map((item, i) => (
          <Stack
            key={i}
            w={{ base: "4.4rem", sm: "8.4rem", lg: "10rem" }}
            align="center"
            bg="brand.bg"
            p={{ base: 1, sm: 5 }}
          >
            <Heading
              fontSize={{ base: "1.7rem", sm: "5rem" }}
              color="brand.color"
            >
              {item.value}
            </Heading>
            <Text
              color="brand.color"
              fontWeight="bold"
              fontSize={{ base: "sm", sm: "md" }}
            >
              {item.title}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

const Countdown = () => {
  let futureDate = new Date("2025-01-09T09:00:00");
  return (
    <Box>
      <CountDown date={futureDate} renderer={CoundownRenderer} />
    </Box>
  );
};

export default Countdown;
