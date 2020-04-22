import styled from "styled-components"

const HeaderContainer = styled.div`
  padding: 5px;
  color: white;
  text-align: center;
  font-size: 14px;
  line-height: 15px;
  text-align: left;
  h3 {
    width: 90%;
    margin: 6px auto;
    max-width: 400px;
    font-size: 15px;
    font-weight: 300;
  }
`

export default ({ children, color }) => {
  const dark = "#382116"
  const medium = "#6B4634"
  const light = "#AA6A4B"
  let backgroundColor = null
  if (color === "dark") backgroundColor = dark
  if (color === "medium") backgroundColor = medium
  if (color === "light") backgroundColor = light
  return (
    <HeaderContainer style={{ backgroundColor }}>
      <h3>{children}</h3>
    </HeaderContainer>
  )
}
