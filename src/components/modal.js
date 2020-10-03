/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Title from "../components/title"
import { lettersSpacingBreakpoints } from "../helpers/globals"

import { Box, Flex, Text, Button } from "rebass"
import { Parallax } from "react-scroll-parallax"
import { Hero } from "react-landing-page"

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: props.open,
            onClose: props.onClose,
        }
    }
    render() {
        return (
            <Box
                width="100vw"
                height="100vh"
                backgroundColor="background"
                sx={{
                    position: "fixed",
                    zIndex: "99998",
                    top: "0",
                    left: "0",
                    display: this.state.open ? "box" : "none",
                }}
            >
                <Button
                    m="10px"
                    onClick={this.props.onClose}
                    sx={{
                        position: "fixed",
                        zIndex: "99999",
                        top: "0",
                        right: "0",
                    }}
                >
                    X
                </Button>
                {this.props.children}
            </Box>
        )
    }
}

export class TeamMemberModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: props.open,
        }
    }
    render() {
        return (
            <Modal open={this.props.open}>
                <Hero>
                    <Title
                        sx={{
                            textAlign: "center",
                            fontSize: [24, 30, 40, 56, 64, 80],
                            letterSpacing: lettersSpacingBreakpoints,
                        }}
                    >
                        {this.props.title}
                    </Title>
                </Hero>
            </Modal>
        )
    }
}

export default Modal
