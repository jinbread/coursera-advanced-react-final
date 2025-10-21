import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack align="start" bg="white" borderRadius="10px" overflow="hidden">
      <Image src={imageSrc} borderRadius="10px"/>
      <VStack p="16px" color="black" align="start" gap="4px">
        <Heading size="sm">{title}</Heading>
        <Text fontSize="sm" color="gray.500">{description}</Text>
        <HStack>
          <Text fontSize="sm">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );

};

export default Card;
