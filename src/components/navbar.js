/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { slide as Menu } from "react-burger-menu"
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

        this.noChaptersvisible = 0
        this.helvetiaChaptersVisible = 1
        this.genreChaptersVisible = 2
        this.scienceChaptersVisible = 3

        this.renderChapters = () => {}

        this.state = {
            mode: this.transparent,
            chaptersVisible: 0,
            menuOpen: false,
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }
    closeMenu = () => {
        this.setState(state => ({ menuOpen: false }))
    }

    setTransparent = () => {
        this.setState(state => ({ mode: this.transparent }))
    }
    setBlur = () => {
        this.setState(state => ({ mode: this.blur }))
    }
    setOpaque = () => {
        this.setState(state => ({ mode: this.opaque }))
    }

    hideAllChapters = () => {
        this.setState(state => ({ chaptersVisible: this.noChaptersvisible }))
    }
    setHelvetiaChaptersVisible = renderChapters => {
        this.renderChapters = renderChapters
        this.setState(state => ({
            chaptersVisible: this.helvetiaChaptersVisible,
        }))
    }
    setGenreChaptersVisible = renderChapters => {
        this.renderChapters = renderChapters
        this.setState(state => ({ chaptersVisible: this.genreChaptersVisible }))
    }
    setScienceChaptersVisible = renderChapters => {
        this.renderChapters = renderChapters
        this.setState(state => ({
            chaptersVisible: this.scienceChaptersVisible,
        }))
    }

    showSettings(event) {
        event.preventDefault()
    }

    renderHelvetiaChapters() {
        return <Box mx="auto">helvetia chapter</Box>
    }

    renderGenreChapters() {
        return <Box mx="auto">genre chapter</Box>
    }

    renderScienceChapters() {
        return <Box mx="auto">science chapter</Box>
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
                <Menu
                    right
                    width={"100%"}
                    isOpen={this.state.menuOpen}
                    onStateChange={state => this.handleStateChange(state)}
                >
                    <Link to="/helvetia2050/" variant="nav">
                        Helvetia2050
                    </Link>
                    <Box mx="auto" />
                    {this.state.chaptersVisible === this.helvetiaChaptersVisible
                        ? this.renderChapters(this)
                        : ""}
                    <Link to="/genre/" variant="nav">
                        Genre
                    </Link>
                    {this.state.chaptersVisible === this.genreChaptersVisible
                        ? this.renderChapters(this)
                        : ""}
                    <Box mx="auto" />
                    <Link to="/science/" variant="nav">
                        Sciences en scène
                    </Link>
                    {this.state.chaptersVisible === this.scienceChaptersVisible
                        ? this.renderChapters(this)
                        : ""}
                    <Box mt="40%">
                        <Flex alignItems="center" justifyContent="spaceEvenly">
                            <Box width={iconWidthBreakpoints} mx="auto">
                                <RebassLink href="https://www.facebook.com/Helvetia2050-107783550783658/">
                                    <Img
                                        fluid={
                                            this.props.images.facebook
                                                .childImageSharp.fluid
                                        }
                                    ></Img>
                                </RebassLink>
                            </Box>
                            <Box width={iconWidthBreakpoints} mx="auto">
                                <RebassLink href="mailto:impro-impact@pm.me">
                                    <Img
                                        fluid={
                                            this.props.images.mail
                                                .childImageSharp.fluid
                                        }
                                    ></Img>
                                </RebassLink>
                            </Box>
                            <Box width={iconWidthBreakpoints} mx="auto">
                                <RebassLink href="https://www.instagram.com/helvetia2050/">
                                    <Img
                                        fluid={
                                            this.props.images.instagram
                                                .childImageSharp.fluid
                                        }
                                    ></Img>
                                </RebassLink>
                            </Box>
                        </Flex>
                    </Box>
                </Menu>
            </Box>
        )
    }
}

export default Navbar
