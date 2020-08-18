import React from "react"

import { Hero } from "react-landing-page"
import { Box, Flex } from "rebass"

import { siteTitle } from "../helpers/globals"

import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Title from "../components/title"

import DefaultLayout from "../components/default_layout"

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <DefaultLayout>
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
        </DefaultLayout>
    </>
)

export default NotFoundPage
