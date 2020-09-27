import React from "react"

import BaseLayout from "../layouts/base_layout"
import HelvetiaLayout from "../layouts/helvetia_layout"
import PropTypes from "prop-types"

const Index = () => (
    <BaseLayout>
        <HelvetiaLayout />
    </BaseLayout>
)

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
