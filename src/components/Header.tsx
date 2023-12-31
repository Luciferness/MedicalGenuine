import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import herogb from "../assets/doc.jpg";

function Header() {
  return (
    <Container
      className="hero-container"
      position={"relative"}
      overflowX={"hidden"}
      backgroundImage={herogb}
      top={0}
      bottom={0}
      left={0}
      p={"0px 0px 0px 0px"}
      right={0}
      minH={"100vh"}
      minW={"100vw"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      bgSize={"cover"}
      flexShrink={0}
    >
      <Flex
        flexDir={"column"}
        bg={"rgba(0, 0, 0, 0.50)"}
        overflowX={"hidden"}
        w={"100%"}
        minH={"100vh"}
        m={"0px 0px 0px 0px"}
        className="wrapper"
        overflowY={"hidden"}
        justify={"center"}
        align={"center"}
      >
        <Flex
          position={"relative"}
          overflowY={"hidden"}
          overflowX={"hidden"}
          wrap={"wrap"}
          w={{ base: "100%", xl: "699px" }}
          h={"100%"}
          top={{ base: "0", xl: "200" }}
          flexDir={"column"}
          m={{
            base: "0px 0px 7px 0px",
            sm: "0px 0px 7px 0px",
            md: "0px 0px 7px 0px",
            lg: "0px 195px 7px 195px",
            xl: "-300px 195px 7px 195px",
          }}
          p={{
            base: "20vh 4px 10px 4px",
            md: "90px 5px 112px 5px",
            lg: "112px 0px",
            xl: "112px 0px",
          }}
          alignItems={"center"}
          gap={"80px"}
        >
          <Text variant={"green"} fontSize={"2xl"}>
            Join us
          </Text>
          <Heading variant={"header-big"} fontSize={{ base: "3xl", xl: "7xl" }}>
            Meet The Best Hospital
          </Heading>
          <Heading
            variant={"header-small"}
            fontSize={{ base: "xl", xl: "3xl" }}
            overflowY={"hidden"}
          >
            We are always fully focused on helping your child and you
          </Heading>
          <Button
            p={"15px 25px 15px 25px"}
            h={"100%"}
            size={"lg"}
            fontSize={18}
            fontWeight={700}
            lineHeight={"22px"}
            letterSpacing={0.2}
            backgroundColor={"#96BB7C"}
          >
            JOIN US
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Header;
