import styled from "styled-components"

const TitleText = styled.h1`
  margin: 55px auto 12px auto;
  color: rgb(33, 43, 50);
  font-size: 28px;
  line-height: 1.16667;
`

const Title = ({ children, style }) => (
  <TitleText style={!!style ? style : {}}>{children}</TitleText>
)

export const SmallTitle = styled(TitleText)`
  font-size: 2rem;
`

export default Title
