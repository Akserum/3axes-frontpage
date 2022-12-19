import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "../Assets/logo.png";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box position="fixed" zIndex={100} w="100%">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src={logo} w="30" h="30" />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("orange.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            fontSize="xs"
            transition={"all .3s ease"}
            _groupHover={{ color: "orange.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"orange.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "ACCUEIL",
    href: "#",
  },
  {
    label: "SCHÉMAS DE FORMATION",
    href: "https://www.3axes-institut.com/schemas-de-formation/",
  },
  {
    label: "DÉCOUVRIR 3AXES",
    children: [
      {
        label: "PORTES OUVERTES",
        subLabel: "",
        href: "https://www.3axes-institut.com/journee-portes-ouvertes/",
      },
      {
        label: "STAGE DÉCOUVERTE",
        subLabel: "",
        href: "https://www.3axes-institut.com/journees-decouverte/",
      },
      {
        label: "SUMMER SCHOOL",
        subLabel: "",
        href: "https://www.3axes-institut.com/summer-school/",
      },
    ],
  },
  {
    label: "POST-BAC CYCLE I",
    children: [
      {
        label: "ANIMATION 3D",
        subLabel: "",
        href: "https://www.3axes-institut.com/animation-3d/",
      },
      {
        label: "JEU VIDEO",
        subLabel: "",
        href: "https://www.3axes-institut.com/jeu-video/",
      },
      {
        label: "MOTION DESIGN",
        subLabel: "",
        href: "https://www.3axes-institut.com/motion-design/",
      },
    ],
  },
  {
    label: "MASTÈRE CYCLE II",
    children: [
      {
        label: "CHEF DE PROJET 3D",
        subLabel: "",
        href: "https://www.3axes-institut.com/chef-de-projet-animation-3d/",
      },
      {
        label: "CHEF DE PROJET JEU VIDEO",
        subLabel: "",
        href: "https://www.3axes-institut.com/chef-de-projet-jeu-video/",
      },
    ],
  },
  {
    label: "NOS ÉCOLES",
    children: [
      {
        label: "LE GROUPE 3AXES",
        subLabel: "",
        href: "https://www.3axes-institut.com/nos-ecoles/",
      },
      {
        label: "3AXES LILLE",
        subLabel: "",
        href: "https://www.3axes-institut.com/3axes-institut-lille/",
      },
      {
        label: "3AXES RENNES",
        subLabel: "",
        href: "https://www.3axes-institut.com/3axes-institut-rennes/",
      },
    ],
  },
  {
    label: "INSCRIPTION ET TARIFS",
    children: [
      {
        label: "INSCRIPTION",
        subLabel: "",
        href: "https://www.3axes-institut.com/inscription/",
      },
      {
        label: "TARIFS 3AXES LILLE",
        subLabel: "",
        href: "https://www.3axes-institut.com/tarifs-3axes-lille/",
      },
      {
        label: "TARIFS 3AXES RENNES",
        subLabel: "",
        href: "https://www.3axes-institut.com/tarifs-3axes-rennes/",
      },
      {
        label: "FOIRE AUX QUESTIONS",
        subLabel: "",
        href: "https://www.3axes-institut.com/foire-aux-questions/",
      },
      {
        label: "AIDES & FINANCEMENTS",
        subLabel: "",
        href: "https://www.3axes-institut.com/aides-financements/",
      },
    ],
  },
  {
    label: "FORMATION CONTINUE",
    href: "https://www.3axes-institut.com/formation-continue/",
  },
  {
    label: "PÔLE DE COMPÉTENCES",
    href: "https://www.3axes-institut.com/pole-de-competences/",
  },
  {
    label: "DÉPOSER UNE OFFRE DE STAGE",
    href: "https://www.3axes-institut.com/espace-entreprise/",
  },
];
