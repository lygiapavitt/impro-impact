/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Title from "../components/title"
import { lettersSpacingBreakpoints } from "../helpers/globals"
import { TeamMemberModal } from "../components/modal"

import { Box, Flex, Text } from "rebass"
import { Parallax } from "react-scroll-parallax"

class TeamMember extends React.Component {
    constructor(props) {
        super(props)
        this.modalRef = React.createRef()
        this.delay = Math.random() * 10 // between 0 and 10 seconds
        this.numPeople = props.numberOfPeople ? props.numberOfPeople : 3
    }

    render() {
        return (
            <>
                <Flex
                    alignItems="center"
                    ml="auto"
                    width={[
                        1,
                        1,
                        1 / this.numPeople,
                        1 / this.numPeople,
                        1 / this.numPeople,
                        1 / this.numPeople,
                    ]}
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
                            cursor: "pointer",

                            transition: "transform 0.35s ease-in-out",
                            ":hover": {
                                // transform: "scale(1.05, 1.05)",
                                transform: "scale(0.95, 0.95)",
                                zIndex: 999,
                            },
                        }}
                        // css={{
                        //     "@keyframes clickIncentive": {
                        //         "0%": {
                        //             transform: "scale(1, 1)",
                        //         },
                        //         "5%": {
                        //             transform: "scale(0.95, 0.95)",
                        //         },
                        //         "10%": {
                        //             transform: "scale(1, 1)",
                        //         },
                        //         "100%": {
                        //             transform: "scale(1, 1)",
                        //         },
                        //     },

                        //     animationName: "clickIncentive",
                        //     animationDuration: "7s",
                        //     animationTimingFunction: "ease-in-out",
                        //     animationIterationCount: "infinite",
                        //     animationDelay: "" + this.delay + "s",
                        // }}
                        onClick={() => {
                            this.modalRef.current.open()
                        }}
                    >
                        <Box
                            pt={5}
                            pb={4}
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
                                            <Text
                                                width={1}
                                                sx={{ fontSize: 36 }}
                                            >
                                                {this.props.name}
                                            </Text>
                                        </Parallax>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
                <TeamMemberModal
                    ref={this.modalRef}
                    open={false}
                    avatar={this.props.avatar}
                    title={this.props.name}
                    content={this.props.content}
                ></TeamMemberModal>
            </>
        )
    }
}

export default TeamMember
