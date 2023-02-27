"use client"
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <Box bg='#0c0c0c' px={{lg:10, base:5}} py={{lg:10, base:10}}>
      <Container maxW={1400}>
      <SimpleGrid textAlign={'start'} spacing='30px' py={{lg:"20px",md:'15px', base:"0px"}} templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
          <Box paddingRight={{lg:10, base:0}}>
            <Heading fontSize="25" color={"white"} borderLeft="6px solid purple" paddingLeft="3">About</Heading>
            <Image src={"/panaverse-logo.webp"} alt="Panaverse Dao Logo" height="150" width="100" className="py-3" />
            <Text color={"gray"} textAlign={"justify"}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
          </Box>
          <Box color={"gray"}>
            <Heading fontSize="25" color={"white"} borderLeft="6px solid purple" paddingLeft="3">Programs</Heading>
            <Text className="pt-5 hover:underline hover:text-white">Web 3.0 and Metaverse Developer</Text>
            <Text className="hover:underline hover:text-white">Artificial Intelligence</Text>
            <Text className="hover:underline hover:text-white">Cloud-Native Computing</Text>
            <Text className="hover:underline hover:text-white">Ambient Computing and IoT</Text>
            <Text className="hover:underline hover:text-white">Genomics and Bioinformatics</Text>
            <Text className="hover:underline hover:text-white">Network Programmability and Automation</Text>
          </Box>
          <Box>
            <Heading fontSize="25" color={"white"} borderLeft="6px solid purple" paddingLeft="3">Pages</Heading>
            <Flex gap={"2"} color={"gray"} flexDirection={"column"}>
              <Link href={"/"} className="pt-5 hover:underline hover:text-white">Home</Link>
              <Link href={"/syllabus"} className="hover:underline hover:text-white">Syllabus</Link>
              <Link href={"/about"} className="hover:underline hover:text-white">About</Link>
            </Flex>
          </Box>
          <Box>
            <Heading fontSize="25" color={"white"} borderLeft="6px solid purple" paddingLeft="3">Contact us</Heading>
            <Text color={"gray"} className="pt-5 hover:underline hover:text-white"><PhoneIcon /> +92314-231628</Text>
            <Text color={"gray"} className="hover:underline hover:text-white"><EmailIcon /> hamzayousuf121@gmail.com</Text>
            <Text color={"gray"} className="hover:underline hover:text-white">Karachi Pakistan</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer