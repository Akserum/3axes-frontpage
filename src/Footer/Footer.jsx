import {
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import React from "react";
import logoSimple from "../Assets/logoSimple.webp";
import Facebook from "../Assets/facebook.png";
import Youtube from "../Assets/youtube.png";
import Instagram from "../Assets/instagram.png";
const Footer = () => {
  return (
    <Wrap w="100%" textColor="white" backgroundColor="black" justify={"center"}>
      <WrapItem>
        <Center>
          <Flex flexDir={"column"} m="5px">
            <Text fontSize={"3xl"} ml="5px" fontWeight={"bold"}>
              3AXES LILLE
            </Text>
            <Text ml="5px">53 rue de Lille</Text>
            <Text ml="5px">59200 TOURCOING</Text>
            <Button
              textColor="black"
              w="220px"
              m="5px"
              rightIcon={<PhoneIcon />}
            >
              03 20 11 22 07
            </Button>
            <Button
              textColor="black"
              w="220px"
              m="5px"
              rightIcon={<EmailIcon />}
            >
              CONTACT
            </Button>
            <Wrap>
              <Spacer />
              <Image
                onClick={() =>
                  window.open(
                    "Facebook",
                    "https://www.facebook.com/ecole.infographie.3D/"
                  )
                }
                src={Facebook}
                w="48px"
                h="48px"
                border="1px"
                borderRadius="lg"
                borderColor="white"
              />
              <Spacer />
              <Image
                onClick={() =>
                  window.open(
                    "Instagram",
                    "https://www.instagram.com/3axes_institut"
                  )
                }
                src={Instagram}
                w="48px"
                h="48px"
                border="1px"
                borderRadius="lg"
                borderColor="white"
              />
              <Spacer />
              <Image
                onClick={() =>
                  window.open(
                    "YouTube",
                    "https://www.youtube.com/@3axes-institut"
                  )
                }
                src={Youtube}
                w="48px"
                h="48px"
                border="1px"
                borderRadius="lg"
                borderColor="white"
              />
              <Spacer />
            </Wrap>
          </Flex>
        </Center>
      </WrapItem>
      <WrapItem alignItems={"center"}>
        <Center>
          <Image src={logoSimple} w="50%"></Image>
        </Center>
      </WrapItem>
      <WrapItem>
        <Center>
          <Flex flexDir={"column"} m="5px">
            <Text fontSize={"3xl"} ml="5px" fontWeight={"bold"}>
              3AXES RENNES
            </Text>
            <Text ml="5px">7a Rue des Charmilles</Text>
            <Text ml="5px">35510 CESSON-SÉVIGNÉ</Text>
            <Button
              textColor="black"
              w="220px"
              m="5px"
              rightIcon={<PhoneIcon />}
            >
              09 54 86 44 66
            </Button>
            <Button
              textColor="black"
              w="220px"
              m="5px"
              rightIcon={<EmailIcon />}
            >
              CONTACT
            </Button>
            <Wrap>
              <Spacer />
              <Image
                onClick={() =>
                  window.open(
                    "Facebook",
                    "https://www.facebook.com/ecole.infographie.3D"
                  )
                }
                src={Facebook}
                w="48px"
                h="48px"
                border="1px"
                borderRadius="lg"
                borderColor="white"
              />
              <Spacer />
              <Image
                onClick={() =>
                  window.open(
                    "Instagram",
                    "https://www.instagram.com/3axes_institut_rennes/"
                  )
                }
                src={Instagram}
                w="48px"
                h="48px"
                border="1px"
                borderRadius="lg"
                borderColor="white"
              />
              <Spacer />
              <Image
                onClick={() =>
                  window.open(
                    "YouTube",
                    "https://www.youtube.com/channel/UCYtJf4j7Uv5iV3XSY3ZLZ5w"
                  )
                }
                src={Youtube}
                w="48px"
                h="48px"
                border="1px"
                borderRadius="lg"
                borderColor="white"
              />
              <Spacer />
            </Wrap>
          </Flex>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default Footer;
