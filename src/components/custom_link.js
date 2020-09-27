/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link as GatsbyLink } from "gatsby"
import { Text } from "rebass"

const Link = props => (
    <GatsbyLink
        {...props}
        width={props.width ? props.width : 1}
        style={{
            boxShadow: "none",
            textDecoration: "none",
            border: "none",
            outline: "none !important",
        }}
    >
        <Text
            p={2}
            sx={{
                color: props.inline ? "primary" : "text",
                display: props.inline ? "inline" : "block",
            }}
        >
            {props.children}
        </Text>
    </GatsbyLink>
)

export default Link
