import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { Lato, Montserrat } from "next/font/google";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({ subsets: ["latin"] });

export const theme = extendTheme(
  {
    fonts: {
      heading: lato.style.fontFamily,
      body: montserrat.style.fontFamily,
    },
    colors: {
      brand: {
        black: "#000000",
        white: "#FFFFFF",
        primary: "#0086FF",
        secondary: "#b333b5",
        gray: "#F3F3F3",
      },
      primary: {
        50: "#e7e9fb", // Lightest shade
        100: "#c2c6f5",
        200: "#9ca2ee",
        300: "#757ee8",
        400: "#5865e4",
        500: "#4d59db", // Base primary color
        600: "#444fb6",
        700: "#3b4490",
        800: "#322d6a",
        900: "#281f44", // Darkest shade
      },
    },
  },
  withProse({})
);
