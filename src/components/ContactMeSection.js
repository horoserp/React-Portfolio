import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import { wait } from "@testing-library/user-event/dist/utils";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Required"),
    email: Yup.string()
      .email('Invalid email address')
      .required("Required"),
    type: Yup.string()
      .oneOf(["hireMe", "openSource", "other"], "Please select a type of enquiry")
      .required("Required"),
    comment: Yup.string()
      .min(25, "Must be at least 25 characters long")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '', 
      email: '', 
      type: 'select', 
      comment: '',
    },
    onSubmit: (values) => {
       submit('https://www.example.com', values);
    },
    validationSchema: validationSchema
  });

  useEffect(()=>{
    if (response) {
      onOpen(response.type, response.message)
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  },[response])

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      id="contactme-section"
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit= {formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                {<FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>}                
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                  id="type" 
                  name="type"
                  {...formik.getFieldProps('type')}
                  >
                  <option value="select" style={{backgroundColor: "#512DA8"}}>--Select--</option>
                  <option value="hireMe" style={{backgroundColor: "#512DA8"}}>Freelance project proposal</option>
                  <option value="openSource" style={{backgroundColor: "#512DA8"}}>
                    Open source consultancy session
                  </option>
                  <option value="other" style={{backgroundColor: "#512DA8"}}>Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
