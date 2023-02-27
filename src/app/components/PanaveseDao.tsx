"use client"

import { Box, Button, Container, Heading, Text, Flex, Center } from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function PanaverseDao() {
  const router = useRouter();
    return (
      <Box py={0}>
        <Container maxW={1400}>
          <Flex flexDirection={{ lg: "row", md: "column", base: "column" }}>
            <Box flexBasis="50%">
              <Image
                src="/logo3.webp"
                alt="Web3 logo"
                width={500}
                height="200"
                className="grow"
              />
            </Box>
            <Box
              flexBasis="50%"
              mt={{ lg: "10", base: "5" }}
              order={{ base: "-1", md: "1", lg: "1" }}
            >
              <Flex
                gap={3}
                marginBottom={10}
                marginTop={0}
                flexDirection={{ lg: "row", base: "column" }}
              >
                <Heading
                  borderLeft="6px solid purple"
                  paddingLeft={3}
                  size={"2xl"}
                >
                  What is
                </Heading>
                <Heading size={"2xl"} color="purple">
                  Panaverse Dao?
                </Heading>
              </Flex>
              <Text my={5}>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
                Panaverse DAO is struggling to produce professional metaverse
                developers from Pakistan for the upcoming Era of Internet.
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
