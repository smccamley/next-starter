import styled from "styled-components"

const GreenButtonWrapper = styled.div`
  padding: 10px;
  font-size: 17px;
  text-align: center;
  background-color: #80ae36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #adadad;
  cursor: pointer;
  font-family: Luminari, Arial, Sans-serif;
`

const GreenButton = ({ onClick, children, style = {}, disabled }) => {
  if (disabled) style.backgroundColor = "grey"

  const onClickPreventDisabled = () => {
    if (disabled) return
    onClick()
  }
  return (
    <GreenButtonWrapper style={style} onClick={onClickPreventDisabled}>
      {children}
    </GreenButtonWrapper>
  )
}

export default GreenButton
