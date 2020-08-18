import React from "react"

import DefaultLayout from "../components/default_layout"
import HelvetiaLayout from "../components/helvetia_layout"
import PropTypes from "prop-types"

const Index = () => (
    <DefaultLayout>
        <HelvetiaLayout />
    </DefaultLayout>
)

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
