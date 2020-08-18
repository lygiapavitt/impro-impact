import React from "react"

import DefaultLayout from "../components/default_layout"
import ScienceLayout from "../components/science_layout"
import PropTypes from "prop-types"

const Index = () => (
    <DefaultLayout>
        <ScienceLayout />
    </DefaultLayout>
)

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
