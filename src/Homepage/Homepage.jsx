import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import videoBg from "../Assets/2020_BandeDemo.mp4";
import logo from "../Assets/logoSimple.webp";
import "./Homepage.css";
const Homepage = () => {
  return (
    <Box>
      <Box w="100%" h="100%">
        <video
          autoPlay
          loop
          muted
          src={videoBg}
          type="video/mp4"
          className="frontpage-video"
        />
      </Box>
      {/*content */}
      <Flex
        zIndex={1}
        position="absolute"
        width="100%"
        height="60%"
        top="60px"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <Box
          m="5"
          p="15px"
          shadow={"2xl"}
          bgColor="blackAlpha.700"
          borderRadius="2xl"
          textAlign={"center"}
        >
          <Box>
            <Center mb="5px">
              <Image src={logo} w="30%" />
            </Center>
            <Text>Ecole de jeu vidéo, animation et motion design</Text>
            <Button textColor="black" w="70%" textAlign={"center"} m={5}>
              DÉCOUVRIR 3AXES
            </Button>
          </Box>
          <Flex>
            <Box p="10px" h="100%" w="50%" textAlign={"center"}>
              <Box>
                <Text fontSize={"3xl"}>Agenda Lille</Text>
                <Text>Portes ouvertes virtuelles 27 janv.</Text>
                <Text>Journées portes ouvertes 28 janv.</Text>
                <Text>Concours à distance 10 févr.</Text>
                <Text>Concours d'entrée 11 févr.</Text>
              </Box>
            </Box>
            <Box p="10px" h="100%" w="50%" textAlign={"center"}>
              <Box>
                <Text fontSize={"3xl"}>Agenda Rennes</Text>
                <Text>Concours d'entrée 21 janv.</Text>
                <Text>Journées portes ouvertes 21 janv.</Text>
                <Text>Concours d'entrée 28 janv.</Text>
              </Box>
            </Box>
          </Flex>
          {/*inscription*/}
          <Box textAlign={"center"}>
            <Text fontSize={"3xl"} mb="3">
              INSCRIPTION
            </Text>
            <Text>
              Inscrivez-vous à une formation dans le domaine du film
              d'animation,
              <br />
              du jeu vidéo ou du motion design.
            </Text>
            <Button textColor="black" w="70%" textAlign={"center"} m={5}>
              INSCRIPTION AU CONCOURS
            </Button>
          </Box>
        </Box>
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
