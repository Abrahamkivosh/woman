"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { handleContactUsNotificationAction } from "@/actions/sendContactUsNotification";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty().min(3).max(255),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().nonempty().min(3).max(255),
  message: z.string().nonempty().min(3).max(2055),
});

type ContactFormInputs = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const toast = useToast();

  const onSubmit = async (data: ContactFormInputs) => {
    setLoading(true);
    const res = await handleContactUsNotificationAction(data);
    setLoading(false);

    if (res.status === 200) {
      setMessage(res.message);
      toast({
        title: "Message sent",
        description: res.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      // Clear the form
      // @ts-ignore
      document.getElementById("contact-form").reset();
    } else {
      setMessage(res.message);
      toast({
        title: "Message not sent",
        description: res.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Stack>
      <Heading fontSize="xl">Leave us a message</Heading>

      <Stack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="100%"
        method="post"
        id="contact-form"
      >
        <FormControl
          id="name"
          isRequired
          isInvalid={errors.name ? true : false}
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Your name"
            {...register("name")}
            className="custom-input"
            autoComplete="name"
            autoFocus
          />
          <Text color="red.500">{errors.name?.message}</Text>
        </FormControl>

        <FormControl
          id="email"
          isRequired
          isInvalid={errors.email ? true : false}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Your email"
            {...register("email")}
            className="custom-input"
            autoComplete="email"
          />
          <Text color="red.500">{errors.email?.message}</Text>
        </FormControl>

        <FormControl
          id="subject"
          isRequired
          isInvalid={errors.subject ? true : false}
        >
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className="custom-input"
          />
          <Text color="red.500">{errors.subject?.message}</Text>
        </FormControl>

        <FormControl
          id="message"
          isRequired
          isInvalid={errors.message ? true : false}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="Your message"
            {...register("message")}
            className="custom-input"
          />
          <Text color="red.500">{errors.message?.message}</Text>
        </FormControl>

        <Button
          type="submit"
          isLoading={loading}
          loadingText="Submitting"
          bg={"brand.primary"}
          color={"brand.white"}
          _hover={{
            bg: "brand.black",
          }}
        >
          Submit
        </Button>
        <Text>{message}</Text>
      </Stack>
    </Stack>
  );
};

export default ContactForm;
