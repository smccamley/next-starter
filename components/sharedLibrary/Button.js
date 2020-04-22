import styled from "styled-components"

const Button = styled.div`
  color: black;
  font-size: 18px;
  font-family: Lato;
  display: inline-block;
  padding-bottom: 15px;
  min-width: 60px;
  text-align: center;
  cursor: pointer;
`

const Plus = styled.div`
  width: 30px;
  height: 30px;
  color: black;
  font-size: 30px;
  position: relative;
  top: -9px;
  left: 4px;
`

const Items = styled.div`
  display: flex;
`
const Item = styled.div``

const ArrowRight = styled.img`
  transform: rotate(180deg);
  position: relative;
  top: 4px;
  margin-left: 11px;
`

//gree"#80AE36"
//red"#B31515"

const FullButtonContainer = styled.div`
  font-family: Lato;
  display: inline-block;
  padding: 10px 20px;
  min-width: 60px;
  text-align: center;
  cursor: pointer;
  background: white;
  border-radius: 4px;
  padding-top: 10px;
  color: white;
  font-size: 13px;
`

export const RenderIcon = ({ icon, color, size }) => {
  switch (icon) {
    case "plus":
      return <Plus style={{ color }}>+</Plus>
    case "arrow-right":
      return <ArrowRight style={{ color, height: size }} src={"/back.png"} />
    default:
      return null
  }
}

export default ({
  onClick,
  children,
  color,
  icon,
  size,
  full,
  style,
  disabled,
}) => {
  let green = { borderBottom: "3px solid #80AE36" }
  let red = { borderBottom: "3px solid #B31515" }
  if (full) {
    green = {
      borderBottom: "1px solid rgb(36, 40, 28)",
      backgroundColor: "#80ae37",
    }
    red = {
      borderBottom: "1px solid rgb(125, 13, 13)",
      backgroundColor: "#ba2e2f",
    }
  }

  if (disabled && full) {
    red.backgroundColor = "grey"
    green.backgroundColor = "grey"
  }

  return (
    <React.Fragment>
      <a onClick={onClick}>
        {full && (
          <FullButtonContainer
            style={Object.assign(color === "green" ? green : red, style)}
          >
            {children}
          </FullButtonContainer>
        )}
        {!full && (
          <Button style={Object.assign(color === "green" ? green : red, style)}>
            {!icon && children}
            {icon && (
              <Items>
                <Item>{children}</Item>
                <Item>
                  <RenderIcon size={size} icon={icon} />
                </Item>
              </Items>
            )}
          </Button>
        )}
      </a>
    </React.Fragment>
  )
}
