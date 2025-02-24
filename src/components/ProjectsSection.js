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
    title: "Ponemah Crossing Dental, P.C. Page",
    description:
      "I made numerous improvements to this company's WordPress/Divi website including adding an employee slider that could be updated directly from the practice management software, adding FAQS and COVID-19 pages, and updating the News and Contact pages regularly.",
    imageSrc: "/React-Portfolio/ponemah.jpg",
    url: "https://ponemahdental.com",
    tags: ["Wordpress"],
  },
  {
    title: "Figma Design - Reservation Page",
    description:
      "Various designs including style guides, problem statements, components, wireframes, user personas, journey maps and high-fidelity prototypes.",
    imageSrc: "/React-Portfolio/Figma.png",
    url: "https://www.figma.com/file/j00TSoQR2Q0GwXSEvkareQ/Reservations---From-Style-Guide-to-Prototype?type=design&mode=design&t=ZVCIhMwV8E1akEKb-1",
    tags: ["Figma"],
  },
  {
    title: "Figma Design - QR Component",
    description:
      "Design files used for the creation of the QR Component page, including style guide and main page designs for both mobile and desktop versions.",
    imageSrc: "/React-Portfolio/Figma-QR-Code.jpeg",
    url: "https://www.figma.com/design/lPBmw322pLrhUVi3pA3NkA/qr-code-component?node-id=2-2&p=f&t=5iC7KL52pDm0h6QQ-0",
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
      "This was a fun challenge that gave me an opportunity to practice my JavaScript and CSS skills. I was able to apply a 'border' only on the corners of the summary categories using CSS.",
    imageSrc: "/React-Portfolio/results-summary.jpeg",
    url: "https://horoserp.github.io/results-summary",
    tags: ["HTML5", "CSS", "Mentor"],
  },
  {
    title: "Product Preview Card",
    description:
      "This is a Frontend Mentor challenge built using Bootstrap 5. I was able to integrate new knowledge in the form of the :where() Pseudo-Selector and overriding Bootstraps default color themes.",
    imageSrc: "/React-Portfolio/product-preview-card.jpg",
    url: "https://horoserp.github.io/product-card",
    tags: ["Bootstrap 5", "Mentor"],
  },
  {
    title: "Interactive Rating Component",
    description:
      "This is a Frontend Mentor challenge built using HTML, CSS and JavaScript. It utilizes @media (hover:hover) to only show hover states on devices that support it. The 'Thank You' page integrates the rating from the home page.",
    imageSrc: "/React-Portfolio/rating-component.jpg",
    url: "https://horoserp.github.io/rating-component",
    tags: ["JavaScript", "Mentor"],
  },
  {
    title: "QR Code Component",
    description:
      "I build this Frontend Mentor challege with React and CSS. I was able to utilize Figma files to precisely create the vision of the designer.",
    imageSrc: "/React-Portfolio/qr-code.jpg",
    url: "https://horoserp.github.io/qr-code",
    tags: ["React", "CSS", "Mentor"],
  },
  {
    title: "NFT Preview Card",
    description:
      "This project showcases my ability to use CSS to create unique overlays by utilizing hidden containers and active states.",
    imageSrc: "/React-Portfolio/nft-screenshot.jpg",
    url: "https://horoserp.github.io/nft-preview-card",
    tags: ["Mentor", "CSS"],
  },
  {
    title: "Order Summary Card",
    description:
      "I was able to demonstrate my skills with box shadows and background images in this project. The mobile version makes use of @media(hover:hover) to prevent unexpected behavior.",
    imageSrc: "/React-Portfolio/order-summary.jpg",
    url: "https://horoserp.github.io/order-summary",
    tags: ["Mentor", "CSS"],
  },
  {
    title: "Stats Preview Card",
    description:
      "This challenge gave me the opportunity to show off the HTML5 picture tag. Additionally, I was able to encorporate the CSS 'flex-direction: column-reverse' property:value pair.",
    imageSrc: "/React-Portfolio/stats-preview-screenshot.jpg",
    url: "https://horoserp.github.io/stats-preview",
    tags: ["Mentor", "HTML5"],
  },
  {
    title: "3-Column Card",
    description:
      "I was able to demonstrate nice responsiveness through use of CSS Media Queries in this challenge. I also used CSS the :nth-child() pseudo-class successfully.",
    imageSrc: "/React-Portfolio/3-column-card.jpg",
    url: "https://horoserp.github.io/column-card",
    tags: ["Mentor", "CSS"],
  },
  {
    title: "Profile Card Component",
    description:
      "In this project, I am able to demonstrate the use of two background images and how to use the CSS background-position property to separate them.",
    imageSrc: "/React-Portfolio/profile-card.jpg",
    url: "https://horoserp.github.io/profile-card",
    tags: ["Mentor", "CSS"],
  },
  {
    title: "Social Proof Card",
    description:
      "I used a combination of CSS Grid (as it is a 2-dimensional desing) and CSS Flexbox (to create the rating boxes and review cards). I focused on responsiveness for this project.",
    imageSrc: "/React-Portfolio/social-proof.jpg",
    url: "https://horoserp.github.io/social-proof",
    tags: ["Mentor", "CSS"],
  },
  {
    title: "Article Preview Component",
    description:
      "In this component, I make use of JavaScript to 'open' a hidden social links navbar when the user clicks a button. Careful use of the CSS position property allows me to control the location.",
    imageSrc: "/React-Portfolio/article-preview.jpg",
    url: "https://horoserp.github.io/article-preview",
    tags: ["Mentor", "JavaScript"],
  },
  {
    title: "Four Card Feature Section",
    description:
      "This project uses multiple flexbox displays to create a four card display in a diamond structure. It is responsive across all devices, showing the optimal display.",
    imageSrc: "/React-Portfolio/four-card-section.jpg",
    url: "https://horoserp.github.io/four-card-section",
    tags: ["Mentor", "HTML5"],
  },
  {
    title: "Coming Soon - Base Apparel",
    description:
      "This page provided the perfect opportunity to demonstrate the utilization of React, Chakra-UI (for the repsponsiveness), Formik (for the form) and Yup (for the form validation). ",
    imageSrc: "/React-Portfolio/coming-soon.jpg",
    url: "https://horoserp.github.io/coming-soon",
    tags: ["Mentor", "React"],
  },
  {
    title: "Single Price Grid",
    description:
      "I was able to utilize CSS Grid to create this project for joining a community. I focused on Semantic HTML and responsiveness. I added hover and active states using @media (hover: hover) and CSS nesting.",
    imageSrc: "/React-Portfolio/single-price-grid.jpg",
    url: "https://horoserp.github.io/single-price-grid",
    tags: ["Mentor", "CSS"],
  },
  {
    title: "Landscape Page",
    description:
      "A responsive HTML5 page focusing on CSS skills including selectors (descendant, child, adjacent sibling, and pseudo-class), animations and shadow effects.",
    imageSrc: "/React-Portfolio/Landscape.png",
    url: "https://horoserp.github.io/Lucky-Shrub/",
    tags: ["Bootstrap 5", "CSS"],
  },
  {
    title: "Bootstrap 5 Tutorial",
    description:
      "This page is built using Bootstrap 5. As a certified Bootstrap 5 Developer, I made this page to demonstrate how to code multiple components in Bootstrap, as well as listing definitions and other key information.",
    imageSrc: "/React-Portfolio/Containers.jpg",
    url: "https://horoserp.github.io/bootstrap/containers.html",
    tags: ["Bootstrap 5"],
  },
];

const featuredProjects = [
  // {
  //   title: "My Resume",
  //   description:
  //     "This page demonstrates my ability to build a site with HTML5, making use of lists and a table. It utilizes CSS to implement blinking text and a scroll bar. I use jQuery to disable unwanted CSS while printing. ",
  //   imageSrc: "/React-Portfolio/Resume.png",
  //   url: "https://horoserp.github.io/Resume/",
  //   tags: ["HTML5", "CSS"],
  // },
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
    title: "Single Price Grid",
    description:
      "I was able to utilize CSS Grid to create this project for joining a community. I focused on Semantic HTML and responsiveness. I added hover and active states using @media (hover: hover) and CSS nesting.",
    imageSrc: "/React-Portfolio/single-price-grid.jpg",
    url: "https://horoserp.github.io/single-price-grid",
    tags: ["Mentor", "CSS"],
  },
  {
    title: "Coming Soon - Base Apparel",
    description:
      "This page provided the perfect opportunity to demonstrate the utilization of React, Chakra-UI (for the repsponsiveness), Formik (for the form) and Yup (for the form validation). ",
    imageSrc: "/React-Portfolio/coming-soon.jpg",
    url: "https://horoserp.github.io/coming-soon",
    tags: ["React", "Mentor"],
  },
  {
    title: "Four Card Feature Section",
    description:
      "This project uses multiple flexbox displays to create a four card display in a diamond structure. It is responsive across all devices, showing the optimal display.",
    imageSrc: "/React-Portfolio/four-card-section.jpg",
    url: "https://horoserp.github.io/four-card-section",
    tags: ["Mentor", "HTML5"],
  },
  {
    title: "Article Preview Component",
    description:
      "In this component, I make use of JavaScript to 'open' a hidden social links navbar when the user clicks a button. Careful use of the CSS position property allows me to control the location.",
    imageSrc: "/React-Portfolio/article-preview.jpg",
    url: "https://horoserp.github.io/article-preview",
    tags: ["Mentor", "JavaScript"],
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
              <option value="JavaScript" style={{ backgroundColor: "#50CC66" }}>
                JavaScript
              </option>
              <option
                value="Bootstrap 5"
                style={{ backgroundColor: "#50CC66" }}
              >
                Bootstrap 5
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
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        w="85vw"
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
