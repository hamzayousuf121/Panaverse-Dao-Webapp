"use client"

import { Box, Button, Container, Heading, Text, Flex } from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function ProgramStudy() {
  const router = useRouter();
    return (
      <Box>
        <Container maxW={1400}>
          <Flex
            py={{ lg: 10, base: 0 }}
            flexDirection={{ lg: "row", md: "column", base: "column" }}
          >
            <Box flexBasis="50%">
              <Image
                src="/programstudy.webp"
                alt="Web3 logo"
                width={500}
                height={200}
                className="grow"
              />
            </Box>
            <Box
              flexBasis="50%"
              mt={{ lg: 20, base: 5 }}
              order={{ base: "-1", md: "1", lg: "1" }}
            >
              <Flex
                gap={3}
                marginBottom={10}
                marginTop={0}
                flexDirection={{ lg: "row", md: "column", base: "column" }}
              >
                <Heading
                  borderLeft="6px solid purple"
                  paddingLeft={3}
                  size={"2xl"}
                >
                  Program of{" "}
                </Heading>
                <Heading size={"2xl"} color="purple">
                  {" "}
                  Studies
                </Heading>
              </Flex>
              <Text my={5}>
                This curriculum is intended for beginners who want to learn
                software development from the ground up. It is going to be a
                fifteen-month-long hybrid program that includes both onsite and
                online classes and is divided into five quarters of 13 weeks
                each. The emphasis will be on hands-on learning by educating
                students to produce projects.
              </Text>
              <Button
                colorScheme="purple"
                size={"lg"}
                onClick={() => router.push("/syllabus")}
              >
                Read More
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    );
}
