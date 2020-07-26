/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { slide as Menu } from "react-burger-menu"
import { HamburgerMenu as HamburgerButton } from "react-hamburger-menu"
import { Box, Flex, Link as RebassLink } from "rebass"
import Img from "gatsby-image"

import Link from "./custom_link"

import "./layout.css"

import { iconWidthBreakpoints } from "../helpers/globals"

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.transparent = 0
        this.blur = 1
        this.opaque = 2

        this.modes = {
            0: {
                mixBlendMode: "normal",
                backdropFilter: "none",
                backgroundColor: "rgba(128, 128, 128, 0)",
            },
            1: {
                mixBlendMode: "luminosity",
                backdropFilter: "blur(70px)",
                backgroundColor: "rgba(128, 128, 128, 0.4)",
            },
            2: {
                mixBlendMode: "normal",
                backdropFilter: "none",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
        }

        this.oldState = this.transparent
        this.state = {
            mode: this.transparent,
        }
    }

    setTransparent = () => {
        this.oldState = this.state.mode
        this.setState(state => ({ mode: this.transparent }))
    }
    setBlur = () => {
        this.oldState = this.state.mode
        this.setState(state => ({ mode: this.blur }))
    }
    setOpaque = () => {
        this.oldState = this.state.mode
        this.setState(state => ({ mode: this.opaque }))
    }

    showSettings(event) {
        event.preventDefault()
    }

    render() {
        return (
            <Box
                width={1}
                sx={{
                    position: "fixed",
                    zIndex: 9999,
                    borderTop: 0,
                    borderLeft: 0,

                    mixBlendMode: this.modes[this.state.mode].mixBlendMode,
                }}
                css={{
                    "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)": {
                        backdropFilter: this.modes[this.state.mode]
                            .backdropFilter,
                        backgroundColor: this.modes[this.state.mode]
                            .backgroundColor,
                    },
                    backgroundColor: this.modes[this.opaque].mixBlendMode,
                }}
            >
                <Flex
                    px={[10, 20, 30, 80, 100, 100]}
                    pt={33}
                    pb={33}
                    alignItems="center"
                >
                    <Link to="/" variant="nav">
                        {this.props.title}
                    </Link>
                    <Box mx="auto" />
                </Flex>
                <Menu right>
                    <Link to="/helvetia2050/" variant="nav">
                        Helvetia2050
                    </Link>
                    <Box mx="auto" />
                    <Link to="/genre/" variant="nav">
                        Genre
                    </Link>
                    <Box mx="auto" />
                    <Link to="/genre/" variant="nav">
                        Sciences et Avenir
                    </Link>
                    <Box mt="40%">
                        <Flex alignItems="center" justifyContent="spaceEvenly">
                            <Box width={iconWidthBreakpoints} mx="auto">
                                <Img
                                    fluid={
                                        this.props.images.facebook
                                            .childImageSharp.fluid
                                    }
                                ></Img>
                            </Box>
                            <Box width={iconWidthBreakpoints} mx="auto">
                                <Img
                                    fluid={
                                        this.props.images.mail.childImageSharp
                                            .fluid
                                    }
                                ></Img>
                            </Box>
                            <Box width={iconWidthBreakpoints} mx="auto">
                                <Img
                                    fluid={
                                        this.props.images.instagram
                                            .childImageSharp.fluid
                                    }
                                ></Img>
                            </Box>
                        </Flex>
                    </Box>
                </Menu>
            </Box>
        )
    }
}

export default Navbar
