import React from "react"

import BaseLayout from "../layouts/base_layout"
import GenreLayout from "../layouts/genre_layout"
import PropTypes from "prop-types"

const Index = () => (
    <BaseLayout>
        <GenreLayout />
    </BaseLayout>
)

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
