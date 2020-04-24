/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Box, Flex } from "rebass"

import Link from "../components/customLink"

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
                backgroundColor: "rgba(193, 193, 174, 0)",
            },
            1: {
                mixBlendMode: "luminosity",
                backdropFilter: "blur(70px)",
                backgroundColor: "rgba(193, 193, 174, 0.4)",
            },
            2: {
                mixBlendMode: "normal",
                backdropFilter: "none",
                backgroundColor: "rgba(193, 193, 174, 0.8)",
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

    render() {
        return (
            <Flex
                px={[10, 20, 30, 80, 100, 100]}
                pt={33}
                pb={33}
                width={1}
                alignItems="center"
                sx={{
                    position: "fixed",
                    zIndex: 9999,
                    borderTop: 0,
                    borderLeft: 0,

                    mixBlendMode: this.modes[this.state.mode].mixBlendMode,
                }}
                css={{
                    "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)": {
                        /*"@keyframes backgroundFade": {
                            from: {
                                backgroundColor: this.modes[this.oldState]
                                    .backgroundColor,
                                backdropFilter: this.modes[this.oldState]
                                    .backdropFilter,
                            },
                            to: {
                                backgroundColor: this.modes[this.state.mode]
                                    .backgroundColor,
                                backdropFilter: this.modes[this.state.mode]
                                    .backdropFilter,
                            },
                        },*/

                        backdropFilter: this.modes[this.state.mode]
                            .backdropFilter,
                        backgroundColor: this.modes[this.state.mode]
                            .backgroundColor,
                    },
                    backgroundColor: this.modes[this.opaque].mixBlendMode,

                    // animationName: "backgroundFade",
                    // animationDuration: "1s",
                    // animationTimingFunction: "ease-in-out",
                    // animationFillMode: "forwards",

                    mask:
                        "linear-gradient(black, black, black, black, black, black, black, black, black, transparent 100%)",
                }}
            >
                <Link to="/" variant="nav">
                    {this.props.title}
                </Link>
                <Box mx="auto" />
                <Link to="/helvetia2050/" variant="nav">
                    Helvetia2050
                </Link>
            </Flex>
        )
    }
}

export default Navbar
