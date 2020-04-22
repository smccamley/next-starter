import styled from "styled-components"
import RotateLoader from "react-spinners/RotateLoader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Button = styled.div`
  background: white;
  display: inline-block;
  border-bottom: 3px solid #d8dde0;
  width: 100%;
`

export const ButtonText = styled.span`
  padding: 24px;
  font-weight: 600;
  color: #005eb8;
  font-size: 16px;
  line-height: 1.5;
  font-size: 1.5rem;
  display: block;
  text-decoration: underline;
  :hover {
    color: #330072;
  }
`

export const SubmitButton = styled.button`
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.5;
  -webkit-appearance: none;
  background-color: #007f3b;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 4px 0 #00401e;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  margin-top: 0;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  vertical-align: top;
  width: auto;
  :active {
    box-shadow: 0 0px #00401e;
    transform: translateY(4px);
  }
`

export const SubmitButtonLinkComponent = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.5;
  -webkit-appearance: none;
  background-color: #007f3b;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 4px 0 #00401e;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  margin-top: 0;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  vertical-align: top;
  width: auto;
  :active {
    box-shadow: 0 0px #00401e;
    transform: translateY(4px);
  }
`

const getSize = (size) => {
  const sizeSmall = {
    fontSize: "12px",
    padding: "10px",
  }
  const sizeMedium = {
    fontSize: "12px",
    padding: "10px",
  }
  const sizeLarge = {
    fontSize: "12px",
    padding: "10px",
  }
  switch (size) {
    case "small":
      return sizeSmall
    case "medium":
      return sizeMedium
    case "large":
      return sizeLarge
    default:
      return sizeMedium
  }
}

export const SubmitButtonDiv = ({ size, children }) => (
  <SubmitButtonLinkComponent style={size ? getSize(size) : null}>
    {children}
  </SubmitButtonLinkComponent>
)

export const SubmitButtonGrey = styled(SubmitButton)`
  background-color: #4c6272;
  box-shadow: 0 4px 0 #263139;
  :active {
    box-shadow: 0 0px #263139;
  }
`

export const SubmitButtonSmall = styled(SubmitButton)`
  box-shadow: 0 3px 0 #263139;
  padding: 2px 14px;
  :active {
    box-shadow: 0 0px #263139;
    transform: translateY(3px);
  }
`

const ButtonTextRightMargin = styled.div`
  display: inline-block;
  margin-right: 10px;
`

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

export default ({
  loading,
  children,
  onClick,
  buttonSubmittingText,
  icon,
  full,
}) => {
  if (loading) {
    return (
      <SubmitButtonGrey disabled={"disabled"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={icon ? { marginRight: "10px" } : {}}>
            {buttonSubmittingText ? buttonSubmittingText : children}
          </span>
          {icon && <FontAwesomeIcon icon={["fas", icon]} />}
          <div
            style={{ width: "40px", marginLeft: "40px", marginRight: "15px" }}
          >
            <RotateLoader
              size={11}
              color="rgba(255,255,255,0.5)"
              loading={loading}
            />
          </div>
        </div>
      </SubmitButtonGrey>
    )
  }
  if (icon)
    return (
      <SubmitButton onClick={onClick}>
        <ButtonTextRightMargin>{children}</ButtonTextRightMargin>
        <FontAwesomeIcon icon={icon} />
      </SubmitButton>
    )

  if (full)
    return (
      <FullButtonContainer onClick={onClick}>{children}</FullButtonContainer>
    )
  return <SubmitButton onClick={onClick}>{children}</SubmitButton>
}
