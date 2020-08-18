import React from "react"

import DefaultLayout from "../components/default_layout"
import LandingLayout from "../components/landing_layout"
import PropTypes from "prop-types"

const Index = () => (
    <DefaultLayout>
        <LandingLayout />
    </DefaultLayout>
)

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
