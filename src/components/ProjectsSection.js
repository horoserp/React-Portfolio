import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
 {
   title: "My Resume",
   description:
     "This page demonstrates my ability to build a site with HTML5, making use of lists and a table. It utilizes CSS to implement blinking text and a scroll bar. I use jQuery to disable unwanted CSS while printing. ",
   imageSrc: "https://i.ibb.co/MDkJKyF/Resume.png",
 },
 {
   title: "Reservation Page",
   description:
     "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
   imageSrc: "https://i.ibb.co/4jbLdPY/Reservations.png",
 },
 {
   title: "Landscape Page",
   description:
     "A responsive HTML5 page focusing on CSS skills including selectors (descendant, child, adjacent sibling, and pseudo-class), animations and shadow effects.",
   imageSrc: "https://i.ibb.co/52wSwtj/Landscape.png",
 },
 {
   title: "Figma Designs",
   description:
     "Various designs including style guides, problem statements, components, wireframes, user personas, journey maps and high-fidelity prototypes.",
   imageSrc: "https://i.ibb.co/zX8Wm78/Figma.png",
 },
];

const ProjectsSection = () => {
 return (
   <FullScreenSection
     backgroundColor="#14532d"
     isDarkBackground
     p={8}
     spacing={8}
     id="projects-section"
   >
     <Heading as="h1" p={12}>
       Featured Projects
     </Heading>
     <Box
       display="grid"
       gridTemplateColumns="repeat(2,minmax(0,1fr))"
       w="70vw"
       id="grid"
     >
       {projects.map((project) => (
         <Card
           key={project.title}
           title={project.title}
           description={project.description}
           imageSrc={project.imageSrc}
         />
       ))}
     </Box>
   </FullScreenSection>
 );
};

export default ProjectsSection;