"use client"

import { Box, Container, Flex,  Heading, Center } from "@chakra-ui/react"
import { RevealList } from "next-reveal"
import CardComponent from "./CardComponent"

function Course() {
  return (
    <Box backgroundColor={"#E9D8FD"} padding={{lg:20, base:5}}>
      <Container maxW={1400}>
        <RevealList origin="top" interval={60} delay={400} duration={2000} distance='400px' reset={true}>
          <Flex gap={3} marginBottom={10} marginTop={0} justifyContent={{lg:"center", base:"start"}} flexDirection={{lg:"row", md:"row", base:"column"}}>
            <Heading borderLeft="6px solid purple" paddingLeft={3} size={"2xl"}>Our Top </Heading><Heading size={"2xl"} color="purple"> Courses</Heading>
          </Flex>
          <Flex flexDirection={{lg:"row", md:"column", base:"column"}}>
            <CardComponent heading="Metaverse" paragraph="Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, 
                startup founders and service providers. Panaverse DAO is struggling to produce professionals."/>

            <CardComponent heading="Blockchain" paragraph="Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers,
                 startup founders and service providers. Panaverse DAO is struggling to produce professionals." />

            <CardComponent heading="Typescript" paragraph="Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. 
                Panaverse DAO is struggling to produce professionals." />
          </Flex>
        </RevealList>
      </Container>
    </Box>
  )
}

export default Course