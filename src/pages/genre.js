import React from "react"

import DefaultLayout from "../components/default_layout"
import GenreLayout from "../components/genre_layout"
import PropTypes from "prop-types"

const Index = () => (
    <DefaultLayout>
        <GenreLayout />
    </DefaultLayout>
)

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
