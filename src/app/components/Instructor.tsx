"use client";

import {
  Avatar,
  Box,
  Container,
  Heading,
  WrapItem,
  Text,
  Flex,
  Center,
  Wrap,
} from "@chakra-ui/react";
import { RevealList } from "next-reveal";
import { teachers } from "../Data/teachers";

function Instructor() {
  return (
    <Box margin={10}>
      <Container maxW={1400}>
        <Center gap={3} marginBottom={10} marginTop={0}>
          <Heading borderLeft="6px solid purple" paddingLeft={3} size={"2xl"}>
            Our
          </Heading>
          <Heading size={"2xl"} color="purple">
            {" "}
            Instructors
          </Heading>
        </Center>

        <Flex
          gap={10}
          flexDirection={{ lg: "row", md: "column", base: "column" }}
        >
          {teachers.map((teacher) => (
            <RevealList
              origin="top"
              interval={60}
              delay={700}
              duration={1000}
              distance="500px"
              reset={true}
              key={teacher.id}
            >
              <Box>
                <Wrap className="flex justify-center pb-3">
                  <WrapItem>
                    <Avatar
                      size="2xl"
                      name={teacher.heading}
                      src={teacher.src}
                    />{" "}
                  </WrapItem>
                </Wrap>
                <Heading textAlign="center" size="md" marginBottom={3}>
                  {teacher.heading}
                </Heading>
                <Text textAlign="justify">{teacher.text}</Text>
              </Box>
            </RevealList>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

export default Instructor;
