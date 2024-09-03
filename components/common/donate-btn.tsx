import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";

const DonateButton = ({ ...props }: ButtonProps) => {
  return (
    <Link href="/donate">
      <Button borderRadius="xl" {...props} rightIcon={<BiSolidDonateHeart />}>
        Donate
      </Button>
    </Link>
  );
};

export default DonateButton;
