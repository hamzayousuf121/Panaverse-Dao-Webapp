"use client"

import {Card, CardBody, Heading, Text, Stack } from "@chakra-ui/react"

export default function CardComponent({heading, paragraph}:any) {
    return (
        <Card maxW='md' rounded={"2xl"} boxShadow={"2xl"} margin={{lg:5,base:2}} className="grow">
            <CardBody p={"10"}>
                <Stack mt='3' spacing='3'>
                    <Heading size={"xl"} textAlign={"center"} paddingBottom={"3"} borderBottom={"5px solid purple"}>{heading}</Heading>
                    <Text textAlign={"justify"}>
                        {paragraph}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}