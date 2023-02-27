"use client";

import { Box, Container, Heading, SimpleGrid, Text,Center } from "@chakra-ui/react";
import Image from "next/image";
import Instructor from "../components/Instructor";
import { RevealWrapper } from 'next-reveal'
import { RevealList } from 'next-reveal'


function page() {
  return (
    <Box>
      <Container maxW={1400}>
        <Center marginBottom={10} marginTop={{ lg: 20, base: 10 }}>
          <Heading borderLeft="6px solid purple" paddingLeft={3} size={"3xl"}>
            About
          </Heading>
        </Center>
        <SimpleGrid
          templateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          marginBottom={20}
        >
          <Box
            className="flex justify-center"
            order={{ base: 1, lg: 0 }}
            mt={{ lg: 0, base: 10 }}
          >
            <RevealWrapper
              className="load-hidden"
              origin="left"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Image
                src="/President.webp"
                alt="Arif Alvi"
                width="300"
                height="200"
                className="grow"
              />
            </RevealWrapper>
          </Box>

          <Box marginTop={{ lg: 10, base: 5 }}>
            <RevealList
              className="load-hidden"
              origin="top"
              interval={60}
              delay={500}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Heading borderLeft="6px solid purple" paddingLeft={3}>
                Dr Arif Alvi
              </Heading>
              <Text textAlign="justify" paddingY={4}>
                Dr. Arif Alvi was sworn in as the 13th President of Islamic
                Republic of Pakistan on 9th September 2018.
              </Text>
              <Text textAlign="justify">
                Dr. Arif Alvi was born in 1949 and completed his early education
                in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
                Montmorency College of Dentistry, Lahore where he was declared
                the “Best Graduate”. He completed his Masters of Science in the
                field of Prosthodontics from University of Michigan (1975) and
                in Orthodontics from University of Pacific, San Francisco
                (1982). He was awarded fellowship ‘Diplomatic American Board of
                Orthodontists (1995)’.
              </Text>
              <Text paddingTop={3} textAlign="justify">
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
            </RevealList>
          </Box>
        </SimpleGrid>

        <SimpleGrid
          templateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          marginBottom={20}
        >
          <Box>
            <RevealList
              className="load-hidden"
              origin="top"
              interval={60}
              delay={1000}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Heading borderLeft="6px solid purple" paddingLeft={3}>
                Panaverse DAO
              </Heading>
              <Text textAlign="justify" paddingY={4}>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
                Panaverse DAO is struggling to produce professional metaverse
                developers from Pakistan for the upcoming Era of Internet.
              </Text>
              <Text paddingTop={3} textAlign="justify">
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
            </RevealList>
          </Box>
          <Box marginTop={10} className="flex justify-center">
            <RevealWrapper
              className="load-hidden"
              origin="left"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Image
                src="/panaverse-logo.webp"
                alt="panaverse Dao"
                width="300"
                height="200"
                className="grow"
              />
            </RevealWrapper>
          </Box>
        </SimpleGrid>

        <SimpleGrid
          templateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          marginBottom={20}
        >
          <Box className="flex justify-center" order={{ base: 1, lg: 0 }}>
            <RevealWrapper
              className="load-hidden"
              origin="left"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Image
                src="/Zia.webp"
                alt="Zia Khan"
                width="300"
                height="200"
                className="grow"
              />
            </RevealWrapper>
          </Box>
          <Box marginTop={10}>
            <RevealList
              className="load-hidden"
              origin="top"
              interval={60}
              delay={1000}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Heading borderLeft="6px solid purple" paddingLeft={3}>
                Dr Zia Khan
              </Heading>
              <Text textAlign="justify" paddingY={4}>
                CEO of Panacloud, the world’s first Integrated API Ownership
                Economy, Crowdfunding, and Development Platform. Volunteer COO
                of PIAIC, an initiative by the President of Pakistan for AI and
                computing mass education. Mentor and software developer with 20+
                years of expertise in cloud and serverless computing, software
                design, project management, and API and App development. Expert
                in concept, business modeling & strategy development for
                startups, specializing in DeFi and token economics. Mentored and
                trained hundreds of thousands of developers. Triple masters
                degrees in business administration, engineering, and finance
                from Arizona State University. Master in Economics from KU.
                Certified Public Accountant and Certified Management Accountant
                in USA.
              </Text>
              <Text paddingTop={3} textAlign="justify">
                Extensive experience in software architecture, design,
                development, implementation, and integration. Worked as a
                developer in Silicon Valley for 7 years. Hands-on work including
                thousands of hours of development work logged recently resulting
                in multiple successful projects for cutting edge startups like
                Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy,
                Cloudspot, OnSeen, Unicharts, etc.
              </Text>
            </RevealList>
          </Box>
        </SimpleGrid>
        <Instructor />
      </Container>
    </Box>
  );
}

export default page