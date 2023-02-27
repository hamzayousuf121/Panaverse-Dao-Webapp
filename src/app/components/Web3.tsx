"use client";

import { Box, Button, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { RevealList, RevealWrapper } from "next-reveal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Web3() {
  const router = useRouter();
  return (
    <Box>
      <Container maxW={1400}>
        <Flex flexDirection={{ lg: "row", md: "column", base: "column" }}>
          <Box flexBasis={"50%"} mt={{ lg: 50, base: 5 }}>
            <RevealList
              origin="top"
              interval={60}
              delay={400}
              duration={2000}
              distance="400px"
              reset={true}
            >
              <Heading
                size={"2xl"}
                borderLeft="6px solid purple"
                paddingLeft={3}
              ></Heading>
              <Flex
                gap={3}
                marginBottom={{ lg: 10, base: 3 }}
                marginTop={0}
                flexDirection={{ base: "column", lg: "row" }}
              >
                <Heading
                  borderLeft="6px solid purple"
                  paddingLeft={3}
                  size={"2xl"}
                >
                  What is
                </Heading>
                <Heading size={"2xl"} color="purple">
                  Web 3.0?
                </Heading>
              </Flex>
              <Text my={5} textAlign="justify">
                Web 3.0 has the potential to change the internet as we know it
                forever. You are still early in catching the trend and building
                your first blockchain application, acquiring the skills to get a
                high- paying job, or creating your own web 3.0 projects that can
                make you money. In Web 2.0 all the data is controlled by the Big
                Tech companies, such as Google, Apple, etc. In the decentralized
                web, no single person/ company owns any data or information
                about anyone, and everything is visible to the public. Web3,
                also known as the decentralized web, is the third and latest
                phase of the internet. Web3 is built on peer-to-peer networks of
                computers that talk to each other without middlemen.
              </Text>
              <Link href={"/syllabus"}>
                <Button colorScheme="purple" size={"lg"}>
                  Read More
                </Button>
              </Link>
            </RevealList>
          </Box>

          <Box flexBasis={"50%"}>
            <RevealWrapper
              origin="top"
              delay={400}
              duration={2000}
              distance="400px"
              reset={true}
            >
              <Image
                src="/get-started.webp"
                alt="Web3 logo"
                width={500}
                height="200"
                className="float-right grow"
              />
            </RevealWrapper>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
