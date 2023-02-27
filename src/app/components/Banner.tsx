"use client"

import { Box, Button, Container, Heading, Text, Flex } from "@chakra-ui/react"
import { RevealList } from "next-reveal"
import Image from "next/image"
import Link from "next/link"

export default function Banner() {
    return (
      <Box className="main-banner">
        <Container maxW={1400}>
          <Flex py={"100"}>
            <RevealList
              origin="top"
              interval={60}
              delay={400}
              duration={2000}
              distance="400px"
              reset={true}
            >
              <Box flexBasis="50%" mt="20">
                <Heading size={"2xl"} color="white">
                  Prepare yourself for the Next Generation of Internet with
                </Heading>
                <Heading size={"2xl"} color={"dodgerblue"}>
                  Panaverse
                </Heading>
                <Text my={5} color="white">
                  One Year Panaverse DAO Earn as you Learn Program.
                  Consolidating Web 3.0, Metaverse, Artificial Intelligence
                  (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
                </Text>
                <Link href={"/syllabus"}>
                  <Button colorScheme="purple" size={"lg"}>
                    More Info
                  </Button>
                </Link>
              </Box>
            </RevealList>
            <Box flexBasis="50%" display={{ lg: "flex", base: "none" }}>
              <Image
                src="/web3.webp"
                alt="Web3 logo"
                width={500}
                height="200"
                className="grow"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    );
}
