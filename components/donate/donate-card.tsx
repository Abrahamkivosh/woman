"use client";

import { handleDonate } from "@/actions/donate";
import { DonateFormData, DonateFormSchema } from "@/schemas";
import { monthlyPlans } from "@/utils/constants";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const donateInputStyles = {
  bg: "brand.white",
  border: "3px solid var(--chakra-colors-brand-black)",
  borderRadius: "none",
  _active: { border: "none" },
  _hover: { border: "3px solid var(--chakra-colors-brand-primary)" },
  focusBorderColor: "brand.primary",
  size: "lg",
};

const currencyOptions = [
  {
    label: "KES",
    value: "KES",
  },
  {
    label: "USD",
    value: "USD",
  },
];

const DonateCard = () => {
  const toast = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"single" | "monthly">(
    "single"
  );
  const [selectedCode, setSelectedCode] = useState<string>("");

  const {
    register,
    resetField,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<DonateFormData>({
    resolver: zodResolver(DonateFormSchema),
    mode: "onChange",
    defaultValues: {
      currency: "KES",
    },
  });
  const selectedCurrency = watch("currency");

  useEffect(() => {
    if (selectedCurrency && selectedPlan === "monthly") {
      setSelectedCode(monthlyPlans[selectedCurrency][1].plan_code);
      setValue("amount", monthlyPlans[selectedCurrency][1].amount);
    }
  }, [selectedCurrency]);

  const onSubmit = async (data: DonateFormData) => {
    setIsLoading(true);
    const res = await handleDonate(data, selectedCode);

    // console.log(res);

    if (res.status && res.authorization_url) {
      reset();
      router.push(res.authorization_url);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast({
        title: "Error",
        description: res.message,
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const handlePlan = (plan: "single" | "monthly") => {
    if (plan === selectedPlan) return;
    if (plan === "single") {
      resetField("amount");
      setSelectedCode("");
    }
    if (plan === "monthly" && selectedCurrency) {
      setSelectedCode(monthlyPlans[selectedCurrency][1].plan_code);
      setValue("amount", monthlyPlans[selectedCurrency][1].amount);
    }

    setSelectedPlan(plan);
  };

  const updatePlanCode = (plan: {
    name: string;
    plan_code: string;
    amount: number;
    description: string;
    symbol: string;
    id: number;
  }) => {
    setSelectedCode(plan.plan_code);
    setValue("amount", plan.amount);
  };

  return (
    <Stack
      bg="rgba(255,255,255,0.8)"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w={{ base: "100%", sm: "27rem", md: "30rem" }}
      borderRadius="xl"
      border="none"
      overflow="hidden"
      h={{ base: "100%", sm: "auto" }}
    >
      <Box bg="brand.primary" padding="1.5rem 1.5rem 1.2rem 1.5rem">
        <Heading
          as="h1"
          color="brand.white"
          fontSize={{ base: "18px", sm: "25px" }}
          fontWeight={600}
          fontFamily="inherit"
          textTransform="uppercase"
        >
          Donate
        </Heading>
      </Box>
      <Stack padding="1.5rem" gap={3}>
        <FormControl isRequired isInvalid={!!errors.name}>
          <FormLabel fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
            Your Name
          </FormLabel>
          <Input
            {...register("name")}
            type="text"
            placeholder="Enter your full Name"
            {...donateInputStyles}
          />
          {errors.name && (
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.name.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.phone}>
          <FormLabel fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
            Your Phone
          </FormLabel>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="Enter your phone +254 700 000 000"
            {...donateInputStyles}
          />
          {errors.phone && (
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.phone.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
            Email
          </FormLabel>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter your email address"
            {...donateInputStyles}
          />
          {errors.email && (
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.email.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.currency}>
          <FormLabel fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
            Select Currency
          </FormLabel>
          <Select
            placeholder="Select"
            {...donateInputStyles}
            fontWeight={600}
            defaultValue="KES"
            {...register("currency")}
          >
            {currencyOptions.map((option) => (
              <Box
                as="option"
                fontWeight={600}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </Box>
            ))}
          </Select>
          {errors.currency && (
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.currency.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <Flex gap={3}>
          <Tooltip
            label="Donate once"
            aria-label="A tooltip"
            hasArrow
            placement="top-start"
            bg="brand.red"
          >
            <Button
              bg={selectedPlan === "single" ? "brand.black" : "transparent"}
              color={selectedPlan === "single" ? "brand.white" : "brand.black"}
              borderRadius="none"
              transition="all 0.2s ease-in-out"
              border="3px solid"
              borderColor={
                selectedPlan === "single" ? "transparent" : "brand.black"
              }
              py="1.3rem"
              onClick={() => handlePlan("single")}
              _hover={{
                bg: selectedPlan === "single" ? "brand.black" : "brand.primary",
                border: "3px solid",
                borderColor:
                  selectedPlan === "single" ? "brand.black" : "brand.primary",
                color: "brand.white",
              }}
              flex={1}
            >
              SINGLE
            </Button>
          </Tooltip>

          <Tooltip
            label="Donate monthly"
            aria-label="A tooltip"
            hasArrow
            placement="top-end"
            colorScheme="blue.300"
          >
            <Button
              border="3px solid"
              bg={selectedPlan === "monthly" ? "brand.black" : "transparent"}
              color={selectedPlan === "monthly" ? "brand.white" : "brand.black"}
              flex={1}
              borderRadius="none"
              isDisabled={true}
              py="1.3rem"
              transition="all 0.2s ease-in-out"
              onClick={() => handlePlan("monthly")}
              _hover={{
                bg:
                  selectedPlan === "monthly" ? "brand.black" : "brand.primary",
                borderColor:
                  selectedPlan === "monthly" ? "brand.black" : "brand.primary",

                color:
                  selectedPlan === "monthly" ? "brand.white" : "brand.black",
              }}
              borderColor="brand.black"
            >
              MONTHLY
            </Button>
          </Tooltip>
        </Flex>
        <AnimatePresence>
          <>
            {selectedPlan === "monthly" && (
              <motion.div
                initial={{ y: "-50%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-50%", opacity: 0 }}
              >
                <HStack gap={2} flexWrap="wrap">
                  {!monthlyPlans[selectedCurrency] ? (
                    <Alert status="warning">
                      <AlertIcon />
                      Select a currency to view monthly plans
                    </Alert>
                  ) : (
                    monthlyPlans[selectedCurrency].map((plan) => (
                      <Button
                        key={plan.id}
                        bg={
                          selectedCode === plan.plan_code
                            ? "brand.red"
                            : "brand.black"
                        }
                        color="brand.white"
                        borderRadius="none"
                        transition="hover 0.3s ease-in-out"
                        border="3px solid"
                        borderColor="transparent"
                        flex={1}
                        py="1.8rem"
                        fontSize="lg"
                        display="flex"
                        gap={2}
                        flexDir="column"
                        onClick={() => updatePlanCode(plan)}
                        _hover={{
                          bg: "brand.red",
                          border: "3px solid var(--chakra-colors-brand-red)",
                          color: "brand.white",
                        }}
                      >
                        <Box as="span">{plan.name}</Box>
                        <Box as="span">
                          {plan.symbol} {plan.amount}
                        </Box>
                      </Button>
                    ))
                  )}
                </HStack>
              </motion.div>
            )}
          </>

          <FormControl isRequired isInvalid={!!errors.amount}>
            <FormLabel
              fontWeight="semibold"
              fontSize={{ base: "md", sm: "lg" }}
            >
              Amount
            </FormLabel>

            <Input
              disabled={selectedPlan === "monthly"}
              type="number"
              placeholder="Enter Amount"
              {...register("amount", { valueAsNumber: true })}
              {...donateInputStyles}
            />

            {errors.amount && (
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.amount.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <Button
            type="submit"
            isLoading={isLoading}
            isDisabled={isLoading}
            bg="brand.primary"
            color="brand.white"
            borderRadius="none"
            transition="all 0.3s ease-in-out"
            border="3px solid"
            borderColor="transparent"
            py="1.3rem"
            _hover={{
              bg: "brand.black",
            }}
          >
            DONATE NOW
          </Button>
        </AnimatePresence>
      </Stack>
    </Stack>
  );
};

export default DonateCard;
