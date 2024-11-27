import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Button,
  FormLabel,
  Heading,
  HStack,
  Select,
  VStack,
} from "@chakra-ui/react";
import Card from "./Card";
import { useFormik } from "formik";

const projects = [
  {
    title: "My Resume",
    description:
      "This page demonstrates my ability to build a site with HTML5, making use of lists and a table. It utilizes CSS to implement blinking text and a scroll bar. I use jQuery to disable unwanted CSS while printing. ",
    imageSrc: "/React-Portfolio/Resume.png",
    url: "https://horoserp.github.io/Resume/",
    tags: ["HTML5", "CSS"],
  },
  {
    title: "Reservation Page",
    description:
      "React-built, responsive site illustrating skills including implementing forms with validation (custom JavaScript, Formik and Yup), hooks, JSX, the map function, as well as props and children.",
    imageSrc: "/React-Portfolio/Reservations.png",
    url: "https://horoserp.github.io/Capstone",
    tags: ["React", "Hooks", "Forms"],
  },
  {
    title: "Travel Page",
    description:
      "React-built, responsive site demonstrating React and CSS skills. Includes implementation of video on landing page.",
    imageSrc: "/React-Portfolio/travel-snap.jpg",
    url: "https://horoserp.github.io/trvl-website",
    tags: ["React", "CSS"],
  },
  {
    title: "Bootstrap 5 Tutorial",
    description:
      "This page is built using Bootstrap 5. As a certified Bootstrap 5 Developer, I built this page to demonstrate how to code multiple components in Bootstrap, as well as listing definitions and other key information.",
    imageSrc: "/React-Portfolio/Containers.jpg",
    url: "https://horoserp.github.io/bootstrap/containers.html",
    tags: ["Bootstrap 5"],
  },
  {
    title: "Ponemah Crossing Dental, P.C. Page",
    description:
      "I made numerous improvements to this company's WordPress website including adding an employee slider that could be updated directly from the practice management software, adding FAQS and COVID-19 pages, and updating the News and Contact pages regularly.",
    imageSrc: "/React-Portfolio/ponemah.jpg",
    url: "https://ponemahdental.com",
    tags: ["Wordpress"],
  },
  {
    title: "Figma Designs",
    description:
      "Various designs including style guides, problem statements, components, wireframes, user personas, journey maps and high-fidelity prototypes.",
    imageSrc: "/React-Portfolio/Figma.png",
    url: "https://www.figma.com/file/j00TSoQR2Q0GwXSEvkareQ/Reservations---From-Style-Guide-to-Prototype?type=design&mode=design&t=ZVCIhMwV8E1akEKb-1",
    tags: ["Figma"],
  },
  {
    title: "Recipe Page",
    description:
      "This is a Frontend Mentor challenge that I completed using React. I was given a simple style guide containing screenshots and fonts and had to duplicate the page.",
    imageSrc: "/React-Portfolio/recipe.jpg",
    url: "https://horoserp.github.io/recipe",
    tags: ["React", "Mentor"],
  },
  {
    title: "Social Links Page",
    description:
      "This is another Frontend Mentor challenge that I completed using React. Again, I was given a minimal style guide and had to replicate the page.",
    imageSrc: "/React-Portfolio/social-links.jpeg",
    url: "https://horoserp.github.io/social-links",
    tags: ["React", "Mentor"],
  },
  {
    title: "Card Style Blog Page",
    description:
      "One of my favorite Frontend Mentor challenges so far. It replicates a blog post using a common card format, which I used a React component to render.",
    imageSrc: "/React-Portfolio/blog-card.jpeg",
    url: "https://horoserp.github.io/blog-card",
    tags: ["React", "Mentor"],
  },
  {
    title: "FAQs Accordion Page",
    description:
      "During this challenge, I went back to the basics: HTML5, CSS and pure JavaScript. Coding the accordion to open and close was a fun challenge that I handled deftly.",
    imageSrc: "/React-Portfolio/faq-accordion.jpeg",
    url: "https://horoserp.github.io/faq-accordion",
    tags: ["HTML5", "CSS", "Mentor"],
  },
  {
    title: "Results Summary Page",
    description:
      "This was a fun challenge that gave me an opportunity to practice my JavaScript skills and learn more about lessor used CSS properties.",
    imageSrc: "/React-Portfolio/results-summary.jpeg",
    url: "https://horoserp.github.io/results-summary",
    tags: ["HTML5", "CSS", "Mentor"],
  },
  {
    title: "Landscape Page",
    description:
      "A responsive HTML5 page focusing on CSS skills including selectors (descendant, child, adjacent sibling, and pseudo-class), animations and shadow effects.",
    imageSrc: "/React-Portfolio/Landscape.png",
    url: "https://horoserp.github.io/Lucky-Shrub/",
    tags: ["HTML5", "CSS"],
  },
];

const featuredProjects = [
  {
    title: "My Resume",
    description:
      "This page demonstrates my ability to build a site with HTML5, making use of lists and a table. It utilizes CSS to implement blinking text and a scroll bar. I use jQuery to disable unwanted CSS while printing. ",
    imageSrc: "/React-Portfolio/Resume.png",
    url: "https://horoserp.github.io/Resume/",
    tags: ["HTML5", "CSS"],
  },
  {
    title: "Reservation Page",
    description:
      "React-built, responsive site illustrating skills including implementing forms with validation (custom JavaScript, Formik and Yup), hooks, JSX, the map function, as well as props and children.",
    imageSrc: "/React-Portfolio/Reservations.png",
    url: "https://horoserp.github.io/Capstone",
    tags: ["React", "Hooks", "Forms"],
  },
  {
    title: "Travel Page",
    description:
      "React-built, responsive site demonstrating React and CSS skills. Includes implementation of video on landing page.",
    imageSrc: "/React-Portfolio/travel-snap.jpg",
    url: "https://horoserp.github.io/trvl-website",
    tags: ["React", "CSS"],
  },
  {
    title: "Card Style Blog Page",
    description:
      "One of my favorite Frontend Mentor challenges so far. It replicates a blog post using a common card format, which I used a React component to render.",
    imageSrc: "/React-Portfolio/blog-card.jpeg",
    url: "https://horoserp.github.io/blog-card",
    tags: ["React", "Mentor"],
  },
  {
    title: "FAQs Accordion Page",
    description:
      "During this challenge, I went back to the basics: HTML5, CSS and pure JavaScript. Coding the accordion to open and close was a fun challenge that I handled deftly.",
    imageSrc: "/React-Portfolio/faq-accordion.jpeg",
    url: "https://horoserp.github.io/faq-accordion",
    tags: ["HTML5", "CSS", "Mentor"],
  },
  {
    title: "Results Summary Page",
    description:
      "This was a fun challenge that gave me an opportunity to practice my JavaScript skills and learn more about lessor used CSS properties.",
    imageSrc: "/React-Portfolio/results-summary.jpeg",
    url: "https://horoserp.github.io/results-summary",
    tags: ["HTML5", "CSS", "Mentor"],
  },
];

const ProjectsSection = () => {
  const [filteredProjects, setFilteredProjects] = useState(featuredProjects);

  const myForm = useFormik({
    initialValues: {
      tag: "Featured",
    },
    onSubmit: (values) => {
      values.tag != "Featured"
        ? setFilteredProjects(
            projects.filter((project) => project.tags.includes(values.tag))
          )
        : setFilteredProjects(featuredProjects);
    },
  });

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
      <form onSubmit={myForm.handleSubmit} style={{ marginTop: "0" }}>
        <HStack>
          <VStack>
            <FormLabel htmlFor="tag" style={{ marginBottom: "0" }}>
              Sort Projects By:
            </FormLabel>
            <Select id="tag" name="tag" {...myForm.getFieldProps("tag")}>
              <option value="Featured" style={{ backgroundColor: "#50CC66" }}>
                Featured
              </option>
              <option value="React" style={{ backgroundColor: "#50CC66" }}>
                React
              </option>
              <option value="HTML5" style={{ backgroundColor: "#50CC66" }}>
                HTML5
              </option>
              <option value="CSS" style={{ backgroundColor: "#50CC66" }}>
                CSS
              </option>
              <option value="Mentor" style={{ backgroundColor: "#50CC66" }}>
                Frontend Mentor
              </option>
              <option value="Hooks" style={{ backgroundColor: "#50CC66" }}>
                Hooks
              </option>
              <option value="Forms" style={{ backgroundColor: "#50CC66" }}>
                Forms
              </option>
              <option value="Wordpress" style={{ backgroundColor: "#50CC66" }}>
                Wordpress
              </option>
              <option value="Figma" style={{ backgroundColor: "#50CC66" }}>
                Figma
              </option>
            </Select>
          </VStack>
          <Button
            type="submit"
            background="#50CC66"
            style={{ marginTop: "32px", marginLeft: "25px" }}
          >
            Submit
          </Button>
        </HStack>
      </form>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        w="70vw"
        id="grid"
      >
        {filteredProjects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            url={project.url}
            tags={project.tags}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
