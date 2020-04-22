import styled from "styled-components"

const ErrorBubble = styled.div`
  background: #7d0808;
  box-shadow: 0px 4px 0px #5f0909;
  border-radius: 4px;
  color: white;
  padding: 4px 10px;
  font-size: 15px;
  position: relative;
  top: -15px;
  font-weight: 500;
`

const ErrorArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #5f0909;
  position: absolute;
  bottom: -12px;
  left: 20px;
  transform: translate(-50%);
`

export default ({ children }) => (
  <ErrorBubble>
    {children}
    <ErrorArrowDown />
  </ErrorBubble>
)
