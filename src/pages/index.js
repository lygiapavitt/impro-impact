import React from "react"

import BaseLayout from "../layouts/base_layout"
import LandingLayout from "../layouts/landing_layout"
import PropTypes from "prop-types"

const Index = () => (
    <BaseLayout>
        <LandingLayout />
    </BaseLayout>
)

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
