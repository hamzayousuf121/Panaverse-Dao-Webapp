"use Client";

import {
  Box,
  Container,
  Flex,
  Image,
  Card,
  Stack,
  Text,
  CardBody,
  Heading,
  Center,
} from "@chakra-ui/react";
import { RevealList, RevealWrapper } from "next-reveal";
import { cities } from "../Data/cities";

function OperationCities() {
  return (
    <Box margin={{ lg: 20, base: 0 }}>
      <Container maxW={1400}>
        <Flex
          gap={3}
          marginBottom={10}
          marginTop={0}
          justifyContent={{ lg: "center", base: "start" }}
        >
          <Heading borderLeft="6px solid purple" paddingLeft={3} size={"2xl"}>
            Operational
          </Heading>
          <Heading size={"2xl"} color="purple">
            Cities
          </Heading>
        </Flex>
        <Flex flexDirection={{ lg: "row", md: "column", base: "column" }}>
          <Box flexBasis={"50%"}>
            <RevealWrapper
              origin="top"
              delay={400}
              duration={2000}
              distance="400px"
              reset={true}
            >
              <Image
                src={"/pakistanMap.png"}
                alt="Pakistan Map"
                height={{ lg: "800px", md: "800px", base: "400px" }}
                width={{ lg: "700px", md: "600px", base: "400px" }}
              />
            </RevealWrapper>
          </Box>
          <RevealList
            origin="top"
            interval={60}
            delay={400}
            duration={2000}
            distance="400px"
            reset={true}
          >
            <Box flexBasis={"50%"} gap="10">
              {cities.map((city) => (
                <Card
                  boxShadow={"2xl"}
                  key={city.id}
                  m="5"
                  className="grow"
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "300px" }}
                    src={city.src}
                    alt={city.heading}
                  />
                  <Stack direction={{ base: "column", sm: "row" }}>
                    <CardBody>
                      <Heading size="md">{city.heading}</Heading>
                      <Text>Location: {city.location}</Text>
                      <Text>{city.timing}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Box>
          </RevealList>
        </Flex>
      </Container>
    </Box>
  );
}

export default OperationCities;
