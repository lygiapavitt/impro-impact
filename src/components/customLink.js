/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link as GatsbyLink } from "gatsby"
import { Link as RebassLink, Text } from "rebass"

const Link = props => (
    <GatsbyLink
        {...props}
        style={{ boxShadow: "none", textDecoration: "none" }}
    >
        <Text p={2} sx={{ color: "text" }}>
            {props.children}
        </Text>
    </GatsbyLink>
)

export default Link
