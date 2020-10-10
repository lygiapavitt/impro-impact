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
                backgroundColor="background"
                sx={{
                    position: "fixed",
                    zIndex: "99998",
                    top: "0",
                    left: "0",
                    display: this.state.open ? "block" : "none",
                }}
            >
                <Button
                    m="10px"
                    onClick={this.close}
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

        this.modalRef = React.createRef()
    }
    open() {
        this.modalRef.current.open()
    }
    close() {
        this.modalRef.current.close()
    }
    render() {
        return (
            <Modal ref={this.modalRef} {...this.props}>
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
