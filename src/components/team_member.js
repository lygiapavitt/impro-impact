/** @jsx jsx */
import { jsx } from "theme-ui"

import { Box, Flex, Text } from "rebass"
import { Parallax } from "react-scroll-parallax"

const TeamMember = props => (
    <Flex
        alignItems="center"
        ml="auto"
        width={[1, 1, 1 / 3, 1 / 3, 1 / 3, 1 / 3]}
    >
        <Box
            ml="auto"
            width={1}
            pt={256}
            sx={{
                color: "background",
                backgroundImage: "url(" + props.avatar + ")",
                backgroundPosition: "50%",
                backgroundSize: "cover",
            }}
        >
            <Box
                pt={5}
                pb={3}
                css={{
                    "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)": {
                        backdropFilter: "blur(2px)",
                    },
                    mask:
                        "linear-gradient(transparent 1%, black, black, black, black, black)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            >
                <Flex
                    alignItems="center"
                    flexWrap="wrap"
                    ml="auto"
                    my={0}
                    width={1}
                >
                    <Flex alignItems="center" width={1}>
                        <Box mx="auto">
                            <Parallax x={[10, -10]}>
                                <Text width={1} sx={{ fontSize: 36 }}>
                                    {props.name}
                                </Text>
                            </Parallax>
                        </Box>
                    </Flex>
                    <Flex
                        alignItems="stretch"
                        width={1}
                        py={3}
                        px={[5, 6, 4, 5, 5, 5]}
                    >
                        <Box mx="auto">
                            <Parallax x={[-10, 10]}>
                                <Text
                                    width={1}
                                    sx={{ fontSize: 16, textAlign: "justify" }}
                                >
                                    Looking down into the dark gulf below, I
                                    could see a ruddy light streaming through a
                                    rift in the clouds.
                                </Text>
                            </Parallax>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    </Flex>
)

export default TeamMember
