import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import videoBg from "../Assets/2020_BandeDemo.mp4";

const Homepage = () => {
  return (
    <Box>
      <video
        autoPlay
        loop
        muted
        src={videoBg}
        type="video/mp4"
        width="100%"
        height="100%"
        cover=""
      />
      {/*content */}
      <Flex
        zIndex={1}
        position="absolute"
        width="100%"
        height="100%"
        top="0"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <Box
          m="5"
          shadow={"2xl"}
          w="30%"
          bgColor="blackAlpha.700"
          borderRadius="2xl"
          textAlign={"center"}
        >
          <Text fontSize={"3xl"} mb="3">
            INSCRIPTION
          </Text>
          <Text>
            Inscrivez-vous à une formation dans le domaine du film d'animation,
            du jeu vidéo ou du motion design.
          </Text>
          <Button textColor="black" w="70%" textAlign={"center"} m={5}>
            INSCRIPTION AU CONCOURS
          </Button>
        </Box>
        <Flex
          shadow={"2xl"}
          w="30%"
          bgColor="blackAlpha.700"
          borderRadius="2xl"
          p="5"
        >
          <Box h="100%" w="50%" textAlign={"center"}>
            <Box>
              <Text fontSize={"3xl"}>Agenda Lille</Text>
              <Text>Portes ouvertes virtuelles 27 janv.</Text>
              <Text>Journées portes ouvertes 28 janv.</Text>
              <Text>Concours à distance 10 févr.</Text>
              <Text>Concours d'entrée 11 févr.</Text>
            </Box>
          </Box>
          <Box h="100%" w="50%" textAlign={"center"}>
            <Box>
              <Text fontSize={"3xl"}>Agenda Rennes</Text>
              <Text>Concours d'entrée 21 janv.</Text>
              <Text>Journées portes ouvertes 21 janv.</Text>
              <Text>Concours d'entrée 28 janv.</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
      {/* overlay */}
      <Box
        zIndex={0}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="black"
        opacity="0%"
      ></Box>
    </Box>
  );
};

export default Homepage;
