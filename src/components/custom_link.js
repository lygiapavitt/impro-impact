/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link as GatsbyLink } from "gatsby"
import { Text } from "rebass"

const Link = props => (
    <GatsbyLink
        {...props}
        width={1}
        style={{ boxShadow: "none", textDecoration: "none", border: "none" }}
    >
        <Text p={2} sx={{ color: "text" }}>
            {props.children}
        </Text>
    </GatsbyLink>
)

export default Link
