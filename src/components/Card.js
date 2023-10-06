import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      px={1}
      py={4}
      justifyContent="space-between"
      alignItems="left"
    >
      <Box 
        color='black' 
        border='1px' 
        borderRadius='20px'
        bg='white'>
        <Image 
          borderRadius="20px"
          src={imageSrc} 
          alt={description} />
        <Heading 
          as='h2' 
          paddingLeft="20px"
          paddingTop="10px"
          size='md'>
          {title}
        </Heading>
        <br />
        <Heading 
          as='h3' 
          fontWeight='normal'
          paddingLeft="20px"
          paddingRight="20px"
          size='sm'>
          {description}
        </Heading>
        <br />
        <Text 
          paddingBottom="10px"
          fontWeight="600"
          paddingLeft="20px">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Box>
    </VStack>
  );
};

export default Card;
