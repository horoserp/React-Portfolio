import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import headshot from '../images/Headshot.png'

const greeting = "Hello, I am Robert!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    >
    {/* <Avatar name="Robert Horosewski" minH={150} maxW={150} size='2xl' src={headshot} />{' '} */}
    <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src={headshot}
         size="2xl" 
         name="Robert Horosewski" 
         minH={150}
         maxW={150}
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 

export default LandingSection;
