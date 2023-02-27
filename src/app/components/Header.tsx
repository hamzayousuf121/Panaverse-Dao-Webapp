"use client"
import Image from "next/image"
import Link from "next/link"
import { Container, Flex, Box, SimpleGrid, Button, MenuList, Menu, IconButton, MenuButton, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation';

function Header() {

  const router = useRouter();

  return (
    <Box boxShadow={"dark-lg"} position="sticky" top="0" zIndex={10} background="white">
      <Container maxW={1400}>
        <SimpleGrid templateColumns={{ lg: "repeat(3, 1fr)", base: 'repeat(2, 1fr)' }}>
          <Box marginY="3">
            <Image src={"/panaverse-logo.webp"} onClick={() => router.push('/')} alt="Panaverse Dao Logo" height="150" width="100" />
          </Box>

          <Flex display={{ lg: 'flex', base: 'none' }} gap={"10"} placeItems="center" color={"black"} fontSize={18} fontWeight='semibold'>
            <Link href={"/"} className="hover:text-purple-800 hover:underline">Home</Link>
            <Link href={"/syllabus"} className="hover:text-purple-800 hover:underline">Syllabus</Link>
            <Link href={"/about"} className="hover:text-purple-800 hover:underline">About</Link>
          </Flex>

          <Box display={{ lg: 'initial', base: 'none' }}>
            <Button colorScheme={"purple"} size={"lg"} float="right" marginBottom={3} marginTop="5">
              <a href="https://portal.piaic.org/signup">
                Apply
              </a>
            </Button>
          </Box>

          <Box pt='20px' display={{ lg: 'none', base: 'initial' }}>
            <Menu>
              <MenuButton float='right'
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                <MenuItem onClick={() => router.push('/')}>
                  Home
                </MenuItem>
                <MenuItem onClick={() => router.push('/syllabus')}>
                  Syllabus
                </MenuItem>
                <MenuItem onClick={() => router.push('/about')}>
                  About
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>

      </Container>
    </Box>

  )
}

export default Header