import React from "react"

import { Hero } from "react-landing-page"
import { Box, Flex } from "rebass"

import { siteTitle } from "../helpers/globals"

import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Title from "../components/title"

const NotFound = () => {
    const navref = React.createRef()
    const navbar = <Navbar ref={navref} title={siteTitle} />

    const NotFoundPage = () => (
        <>
            <SEO title="404: Not found" />
            {navbar}
            <Hero>
                <Title>404</Title>

                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width={0.5}
                >
                    <Box>You seem lost...</Box>
                </Flex>
            </Hero>
        </>
    )

    return <NotFoundPage />
}

export default NotFound
