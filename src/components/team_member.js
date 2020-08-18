/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Title from "../components/title"
import { Box, Flex, Text } from "rebass"
import { Parallax } from "react-scroll-parallax"
import { Modal } from "react-responsive-modal"
import { Hero } from "react-landing-page"

class TeamMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    onOpenModal = () => {
        this.setState({ open: true })
    }

    onCloseModal = () => {
        this.setState({ open: false })
    }

    render() {
        const { open } = this.state
        const lettersSpacingBreakpoints = [
            "0.18em",
            "0.19em",
            "0.20em",
            "0.21em",
            "0.22em",
            "0.23em",
        ]
        return (
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
                        backgroundImage: "url(" + this.props.avatar + ")",
                        backgroundPosition: "50%",
                        backgroundSize: "cover",

                        transition: "transform 0.35s ease-in-out",
                        ":hover": {
                            // transform: "scale(1.05, 1.05)",
                            transform: "scale(0.95, 0.95)",
                            zIndex: 999,
                        },
                    }}
                    onClick={this.onOpenModal}
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
                                            {this.props.name}
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
                                            sx={{
                                                fontSize: 16,
                                                textAlign: "justify",
                                            }}
                                        >
                                            {this.props.content}
                                        </Text>
                                    </Parallax>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>

                {/*<Modal open={open} onClose={this.onCloseModal} center>
                    <Title
                        sx={{
                            textAlign: "center",
                            fontSize: [24, 30, 40, 56, 64, 80],
                            letterSpacing: lettersSpacingBreakpoints,
                        }}
                    >
                        {this.props.name}
                    </Title>
                    </Modal>*/}
            </Flex>
        )
    }
}

export default TeamMember
