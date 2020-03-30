/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

const Title = props => (
    <h2
        {...props}
        sx={{
            fontWeight: "heading",
        }}
    >
        {props.children}
    </h2>
)

export default Title
