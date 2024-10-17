import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "My Resume",
    description:
      "This page demonstrates my ability to build a site with HTML5, making use of lists and a table. It utilizes CSS to implement blinking text and a scroll bar. I use jQuery to disable unwanted CSS while printing. ",
    //  imageSrc: "https://i.ibb.co/MDkJKyF/Resume.png",
    imageSrc: "/React-Portfolio/Resume.png",
    url: "https://horoserp.github.io/Resume/",
  },
  {
    title: "Reservation Page",
    description:
      "React-built, responsive site illustrating skills including implementing forms with validation (custom JavaScript, Formik and Yup), hooks, JSX, the map function, as well as props and children.",
    //  imageSrc: "https://i.ibb.co/4jbLdPY/Reservations.png",
    imageSrc: "/React-Portfolio/Reservations.png",
    url: "https://horoserp.github.io/Capstone",
  },
  {
    title: "Travel Page",
    description:
      "React-built, responsive site demonstrating React and CSS skills. Includes implementation of video on landing page.",
    imageSrc: "/React-Portfolio/travel-snap.jpg",
    url: "https://horoserp.github.io/trvl-website",
  },
  {
    title: "Bootstrap 5 Tutorial",
    description:
      "This page is built using Bootstrap 5. As a certified Bootstrap 5 Developer, I built this page to demonstrate how to code multiple components in Bootstrap, as well as listing definitions and other key information.",
    //  imageSrc: "https://i.ibb.co/xfTm8N3/Containers.jpg",
    imageSrc: "/React-Portfolio/Containers.jpg",
    url: "https://horoserp.github.io/bootstrap/containers.html",
  },
  {
    title: "Landscape Page",
    description:
      "A responsive HTML5 page focusing on CSS skills including selectors (descendant, child, adjacent sibling, and pseudo-class), animations and shadow effects.",
    //  imageSrc: "https://i.ibb.co/52wSwtj/Landscape.png",
    imageSrc: "/React-Portfolio/Landscape.png",
    url: "https://horoserp.github.io/Lucky-Shrub/",
  },
  {
    title: "Ponemah Crossing Dental, P.C. Page",
    description:
      "I made numerous improvements to this company's WordPress website including adding an employee slider that could be updated directly from the practice management software, adding FAQS and COVID-19 pages, and updating the News and Contact pages regularly.",
    imageSrc: "/React-Portfolio/ponemah.jpg",
    url: "https://ponemahdental.com",
  },
  {
    title: "Figma Designs",
    description:
      "Various designs including style guides, problem statements, components, wireframes, user personas, journey maps and high-fidelity prototypes.",
    //  imageSrc: "https://i.ibb.co/zX8Wm78/Figma.png",
    imageSrc: "/React-Portfolio/Figma.png",
    url: "https://www.figma.com/file/j00TSoQR2Q0GwXSEvkareQ/Reservations---From-Style-Guide-to-Prototype?type=design&mode=design&t=ZVCIhMwV8E1akEKb-1",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      py={8}
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
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
