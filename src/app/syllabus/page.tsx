"use client";

import { Box, Container, Heading, Text, Center, Flex } from "@chakra-ui/react";
import Web3 from "../components/Web3";
import EarWhileYouLearn from "../components/Earning";
import SimpleCard from "../components/SimpleCard";
import Instructor from "../components/Instructor";
import { syllabusRecords } from "../Data/syllabus";
import { RevealList, RevealWrapper } from "next-reveal";

function page() {
  return (
    <Box>
      <Container maxW={1400}>
        <Center gap={3} marginBottom={10} marginTop={{ lg: 20, base: 10 }}>
          <Heading borderLeft="6px solid purple" paddingLeft={3} size={"3xl"}>
            Course
          </Heading>
          <Heading size={"3xl"} color="purple">
            {" "}
            Syllabus
          </Heading>
        </Center>

        <Web3 />

        <EarWhileYouLearn />

        <Box my={{ lg: 10, base: 5 }}>
          <RevealList
            className="load-hidden"
            interval={60}
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center gap={3} my={{ lg: 10, base: 5 }}>
              <Heading
                borderLeft="6px solid purple"
                paddingLeft={3}
                size={"2xl"}
              >
                {" "}
                Program
              </Heading>
              <Heading size={"2xl"} color="purple">
                {" "}
                Structure
              </Heading>
            </Center>
            <Text textAlign="justify">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, and Ambient Computing/IoT Technologies
            </Text>
          </RevealList>
        </Box>

        {syllabusRecords.map((syllabus) => (
          <RevealWrapper
            className="load-hidden"
            origin="left"
            delay={200}
            duration={1500}
            distance="400px"
            reset={true}
            key={syllabus.id}
          >
            <Box my={5}>
              <Heading
                size={"lg"}
                borderLeft="6px solid purple"
                paddingLeft={3}
              >
                {syllabus.heading}
              </Heading>
              <Text textAlign="justify">{syllabus.text}</Text>
              <Flex
                gap={10}
                mt={"10"}
                flexDirection={{ base: "column", lg: "row" }}
              >
                {syllabus?.cards?.map((card) => (
                  <SimpleCard key={card.id}
                    heading={card.cardheading}
                    text={card.cardText}
                    bgColor={card.bgcolor}
                  />
                ))}
              </Flex>
            </Box>
          </RevealWrapper>
        ))}

        <Box my={10}>
          <Heading>The Outcome for Participants of the Program</Heading>
          <Text>
            The graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) that are marketed
            globally by the Panaverse DAO and, if they like, will also be able
            to start off by offering services at a rate of $50 per hour ($96,000
            per year). This would give Pakistani professionals and students a
            fantastic opportunity to better their financial situation while also
            giving the economy a much-needed boost by expanding software
            exports.
          </Text>
        </Box>
        <Instructor />
      </Container>
    </Box>
  );
}

export default page;
