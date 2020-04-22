import styled from "styled-components"

const Subtitle = styled.h2`
  display: block;
  margin: 0px auto 23px auto;
  font-size: 16px;
  line-height: 1.16667;
`

export default ({ children, style }) => (
  <Subtitle style={!!style ? style : {}}>{children}</Subtitle>
)
