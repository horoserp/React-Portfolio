import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import headshot from '../images/Headshot.png'

const greeting = "Hello, I am Robert!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing='32px'>
      {/* <Avatar size='4xl' src='https://i.pravatar.cc/150?img=7' />{' '} */}
      <Avatar name="Robert Horosewski" minH={150} maxW={150} size='2xl' src={headshot} />{' '}
      <Heading as='h1' size='md'>
        {greeting}
      </Heading>
      <Heading as="h5" size='4sxl'>
        <br />
      </Heading>
      <Heading as='h2' size='2xl'>
        {bio1}
      </Heading>
      <Heading as='h2' size='2xl'>
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
