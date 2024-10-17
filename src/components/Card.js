import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url, tags }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      borderRadius="xl"
      m="50px 50px"
    >
      <Image borderRadius="xl" src={imageSrc} alt={title} />
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
        <HStack
          spacing={2}
          alignItems="center"
          w={"100%"}
          justifyContent="space-between"
          pr={10}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
          <HStack>
            {tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  background: "#50CC66",
                  borderRadius: "10px",
                  padding: "2px 7px",
                }}
              >
                {tag}
              </span>
            ))}
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
