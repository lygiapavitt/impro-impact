/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Box, Flex, Card, Text } from "rebass"
import { Contributor } from "react-landing-page"

const TeamMember = props => (
    <Flex
        alignItems="center"
        ml="auto"
        width={[1, 1, 1 / 3, 1 / 3, 1 / 3, 1 / 3]}
    >
        <Card
            ml="auto"
            width={1}
            py={5}
            sx={{ bg: "primary", color: "background" }}
        >
            <Flex alignItems="center" flexWrap="wrap" ml="auto" width={1}>
                <Contributor avatar={props.avatar} width={1} />
                <Flex alignItems="center" width={1}>
                    <Box mx="auto">
                        <Text width={1} sx={{ fontSize: 36 }}>
                            {props.name}
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    alignItems="stretch"
                    width={1}
                    py={3}
                    px={[5, 6, 4, 5, 5, 5]}
                >
                    <Box mx="auto">
                        <Text
                            width={1}
                            sx={{ fontSize: 16, textAlign: "justify" }}
                        >
                            Looking down into the dark gulf below, I could see a
                            ruddy light streaming through a rift in the clouds.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Card>
    </Flex>
)

export default TeamMember
