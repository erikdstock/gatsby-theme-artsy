import React from "react"
import { Flex, Sans, ArtsyLogoIcon } from "@artsy/palette"

const IndexPage = () => (
  <Flex width={[1, 0.75, 0.6]} px={1} mx="auto" textAlign="center" maxWidth="500px" flexDirection="column">
    <ArtsyLogoIcon />
    <Sans my={1} size={4}>
      {` `}
      gatsby-theme-artsy{` `}
    </Sans>
    <Sans my={1} size={5} color="purple100">
      gatsby-theme-artsy
    </Sans>
    <Sans my={1} size={6} color="green100">
      gatsby-theme-artsy
    </Sans>
    <Sans my={1} size={8} color="red100">
      gatsby-theme-artsy
    </Sans>
  </Flex>
)

export default IndexPage
