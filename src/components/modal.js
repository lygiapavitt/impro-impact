/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Title from "../components/title"
import {
    lettersSpacingBreakpoints,
    contentTitleFontSizeBreakpoints,
    navbarTitleFontSizeBreakpoints,
} from "../helpers/globals"

import { Box, Flex, Text, Button } from "rebass"
import { Parallax } from "react-scroll-parallax"
import { Hero } from "react-landing-page"

const defaultBgColor = "#f0f0f0"

class Modal extends React.Component {
    constructor(props) {
        super(props)

        this.bgColor = props.bgColor ? props.bgColor : defaultBgColor
        this.onOpen = props.onOpen ? props.onOpen : () => {}
        this.onClose = props.onClose ? props.onClose : () => {}
        this.state = {
            open: props.open,
        }
    }
    open = () => {
        this.setState({ open: true })
        this.onOpen()
    }
    close = () => {
        this.setState({ open: false })
        this.onClose()
    }
    render() {
        return (
            <Box
                width="100vw"
                height="100vh"
                sx={{
                    backgroundColor: this.bgColor,
                    position: "fixed",
                    zIndex: "99998",
                    top: "0",
                    left: this.state.open ? "0" : "100vw",
                    opacity: this.state.open ? 1 : 0,
                }}
                {...this.props}
            >
                <Flex justifyContent="flex-end">
                    <Box
                        m="35px"
                        onClick={this.close}
                        sx={{
                            backgroundColor: this.bgColor,
                            zIndex: "99999",
                            top: "0",
                            right: "0",
                            position: "absolute",
                        }}
                    >
                        <div className="close-container">
                            <div className="leftright"></div>
                            <div className="rightleft"></div>
                        </div>
                    </Box>
                </Flex>
                {this.props.children}
            </Box>
        )
    }
}

export class TeamMemberModal extends React.Component {
    constructor(props) {
        super(props)
        this.bgImageXOffset = props.bgImageXOffset
            ? props.bgImageXOffset
            : "-200px"
        this.bgImageYOffset = props.bgImageYOffset
            ? props.bgImageYOffset
            : "0px"

        this.modalRef = React.createRef()

        this.bgColor = props.bgColor ? props.bgColor : defaultBgColor
    }
    open() {
        this.modalRef.current.open()
    }
    close() {
        this.modalRef.current.close()
    }

    defaultHero() {
        return (
            <Hero
                sx={{
                    backgroundImage: "url(" + this.props.avatar + ")",
                    backgroundPosition:
                        "" + this.bgImageXOffset + " " + this.bgImageYOffset,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                }}
                css={{
                    "@media screen and (min-width: 941px)": {
                        display: "block",
                    },
                    "@media screen and (max-width: 940px)": {
                        display: "none",
                    },
                }}
            >
                <Box
                    height="100vh"
                    sx={{
                        backgroundImage:
                            "linear-gradient(to right, transparent, transparent, transparent, " +
                            this.bgColor +
                            ", " +
                            this.bgColor +
                            ", " +
                            this.bgColor +
                            ", " +
                            this.bgColor +
                            ")",
                    }}
                >
                    <Flex
                        flexDirection="column"
                        height="100vh"
                        justifyContent="center"
                    >
                        <Flex justifyContent="flex-end">
                            <Box width={0.5} px="40px" py="100px">
                                <Flex flexDirection="column">
                                    <Box width={1}>
                                        <Title
                                            sx={{
                                                textAlign: "center",
                                                fontSize: navbarTitleFontSizeBreakpoints,
                                                letterSpacing: lettersSpacingBreakpoints,
                                            }}
                                        >
                                            {this.props.title}
                                        </Title>
                                    </Box>
                                    <Box width={1}>
                                        <Text
                                            width={1}
                                            sx={{
                                                fontSize: 16,
                                                textAlign: "justify",
                                            }}
                                        >
                                            {this.props.content}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Hero>
        )
    }

    mobileHero() {
        return (
            <Hero
                sx={{
                    backgroundImage: "url(" + this.props.avatar + ")",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
                css={{
                    "@media screen and (min-width: 941px)": {
                        display: "none",
                    },
                    "@media screen and (max-width: 940px)": {
                        display: "block",
                    },
                }}
            >
                <Box
                    height="100vh"
                    sx={{
                        backgroundImage:
                            "linear-gradient(to bottom, transparent, transparent, transparent, " +
                            this.bgColor +
                            ", " +
                            this.bgColor +
                            ", " +
                            this.bgColor +
                            ")",
                    }}
                >
                    <Flex justifyContent="center">
                        <Flex
                            height="100vh"
                            flexDirection="column"
                            justifyContent="flex-end"
                        >
                            <Box
                                width={0.8}
                                mx="auto"
                                px="40px"
                                py={[
                                    "20px",
                                    "40px",
                                    "60px",
                                    "100px",
                                    "100px",
                                    "100px",
                                ]}
                            >
                                <Flex flexDirection="column">
                                    <Box width={1}>
                                        <Title
                                            sx={{
                                                textAlign: "center",
                                                fontSize: navbarTitleFontSizeBreakpoints,
                                                letterSpacing: lettersSpacingBreakpoints,
                                            }}
                                        >
                                            {this.props.title}
                                        </Title>
                                    </Box>
                                    <Box width={1}>
                                        <Text
                                            width={1}
                                            sx={{
                                                fontSize: 16,
                                                textAlign: "justify",
                                            }}
                                        >
                                            {this.props.content}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Hero>
        )
    }
    render() {
        return (
            <Modal
                ref={this.modalRef}
                {...this.props}
                sx={{
                    transition:
                        "opacity 0.35s ease-in-out, left 0.35s ease-in-out",
                }}
            >
                {this.defaultHero()}
                {this.mobileHero()}
            </Modal>
        )
    }
}

export default Modal
