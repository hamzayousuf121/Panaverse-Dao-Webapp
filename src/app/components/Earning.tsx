"use client";

import { Box, Container, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { RevealList, RevealWrapper } from "next-reveal";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EarWhileYouLearn() {
  const router = useRouter();
  return (
    <Box>
      <Container maxW={1400}>
        <Flex
          py={"30"}
          flexDirection={{ lg: "row", md: "column", base: "column" }}
        >
          <Box flexBasis="50%">
            <RevealList
              origin="top"
              interval={60}
              delay={500}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Heading
                borderLeft="6px solid purple"
                paddingLeft={3}
                size={"2xl"}
              >
                The Program in a Nutshell
              </Heading>
              <Heading
                size={{ lg: "2xl", base: "lg" }}
                paddingLeft={3}
                color="purple"
              >
                {" "}
                Earn While You Learn
              </Heading>
              <Text my={5}>
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in the classroom and will begin
                doing so within six months of the program’s beginning. It
                resembles a cross between a corporate venture and an educational
                project.
              </Text>
              <Button
                colorScheme="purple"
                size={"lg"}
                onClick={() => router.push("/syllabus")}
              >
                Read More
              </Button>
            </RevealList>
          </Box>

          <Box flexBasis="50%" mt={{ lg: 0, base: 5 }}>
            <RevealWrapper
              origin="top"
              delay={500}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Image
                src="/dollars.png"
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
