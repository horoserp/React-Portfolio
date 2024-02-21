import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Stack, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: robert.horosewski@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/horoserp/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/robert-horosewski-8a0608196/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/12617284/horoserp",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com/@horoserp",
  // },
];

/**
* This component illustrates the use of both the useRef hook and useEffect hook.
* The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation.
* The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted.
* Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements.
*/

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [display, changeDisplay] = useState('none');

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Flex>
        <Flex
          position="fixed"
          display={[ 'none', 'none', 'flex', 'flex' ]}
          align="center"
          justifyContent="center"
          direction={[ 'column', 'row', 'row', 'row']}
          color="white"
          backgroundColor="#18181b"
          width="100%"
          p={5}
        >
          <Flex
            ml={"10%"}
            display="flex"
            direction={[ 'column', 'row', 'row', 'row' ]}
            alignItems="center"
            gap={16}
          >
            {socials.map(({ icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={icon} size="2x" key={url} />
              </a>
            ))}
          </Flex>
          <Spacer/>
          <Flex
            mr={"10%"}
            display="flex"
            gap={16}
            direction={[ 'column', 'row', 'row', 'row' ]}
            alignItems="center"
          >
            <a href="#top" onClick={handleClick('top')}>Home</a>
            <a href="#projects" onClick={handleClick('projects')}>Projects</a>
            <a href="#contactme" onClick={handleClick('contactme')}>Contact Me</a>
          </Flex>
        </Flex>
        {/* Moblie */}
        <IconButton
          size="lg"
          // ml={100}
          icon={<HamburgerIcon/>}
          onClick={() => changeDisplay("flex")}
          display={[ 'flex', 'flex', 'none', 'none' ]}
          colorScheme="black"
        />
        {/* Moblie Content */}
        <Flex
          display={display}
        >
          <Flex>
            <IconButton
              size="lg"
              icon={<CloseIcon/>}
              onClick={() => changeDisplay('none')}
              colorScheme="black"
            />
          </Flex>
          <Flex
            display="flex"
            gap={4}
            pl={6}
            pt={5}
            direction="column"
            alignItems="center"
            color="white"
          >
            <a href="#top" onClick={handleClick('top')}>Home</a>
            <a href="#projects" onClick={handleClick('projects')}>Projects</a>
            <a href="#contactme" onClick={handleClick('contactme')}>Contact Me</a>
          </Flex>
          <Flex
            display="flex"
            direction="column"
            alignItems="center"
            gap={4}
            pl={10}
            pt={5}
            pb={5}
            color="white"
          >
            {socials.map(({ icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={icon} size="2x" key={url} />
              </a>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Header;
