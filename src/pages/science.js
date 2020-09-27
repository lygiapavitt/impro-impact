import React from "react"

import BaseLayout from "../layouts/base_layout"
import ScienceLayout from "../layouts/science_layout"
import PropTypes from "prop-types"

const Index = () => (
    <BaseLayout>
        <ScienceLayout />
    </BaseLayout>
)

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
