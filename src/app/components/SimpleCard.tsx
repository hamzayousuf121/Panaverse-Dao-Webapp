"use client"

import { Heading, Text, Card, CardBody, Stack, Box } from "@chakra-ui/react"

function SimpleCard({ heading, text, bgColor}: any) {
    return (
        <>
            <Box className="grow">
                <Card maxW='md' color={"white"} bg={bgColor} minW="100%" boxShadow={"2xl"}>
                    <CardBody px={10} py={20}>
                        <Stack>
                            <Heading size={"lg"} pb="5" textAlign={"center"}>{heading}</Heading>
                            <Text textAlign={"center"}>
                                {text}
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </>

    )
}

export default SimpleCard