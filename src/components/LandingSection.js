import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm Robert!";
const bio1 = "A frontend developer";
const bio2 = "specializing in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundImage="https://i.ibb.co/gVfXXcL/Home-BG-Photo.jpg"
    backgroundSize="cover"
    width="100vw"
    maxWidth="100%"
    id="top-section"
    >
    <VStack spacing={16}>
     <VStack spacing={4} alignItems="center">
        <Avatar
         src="https://i.ibb.co/z8FXYDX/Headshot.png"
         size="2xl"
         name="Robert Horosewski"
         minH={150}
         maxW={150}
       />
       <Heading as="h4" size="xl" noOfLines={1} textShadow={"5px 5px 5px purple"}>
         {greeting}
       </Heading>
     </VStack>
     <VStack spacing={6}>
       <Heading as="h1" fontSize={{ base: "28px", md: "40px", lg: "56px"}} lineHeight={1.4} noOfLines={1} textShadow={"5px 5px 5px purple"}>
         {bio1}
       </Heading>
       <Heading as="h1" fontSize={{ base: "28px", md: "40px", lg: "56px"}} lineHeight={1.4} noOfLines={1} textShadow={"5px 5px 5px purple"}>
         {bio2}
       </Heading>
     </VStack>
   </VStack>
 </FullScreenSection>
);

export default LandingSection;
