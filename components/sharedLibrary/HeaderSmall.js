import { connect } from "react-redux"
import styled from "styled-components"
import Router, { useRouter } from "next/router"

const HeaderContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #d8d8d8;
  background-color: white;
  z-index: 1;
`

const H1 = styled.h1`
  text-align: center;
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 12px;
`

const Back = styled.div`
  background-image: url(/back.png);
  width: 50px;
  height: 48px;
  background-repeat: no-repeat;
  background-size: 19px;
  background-position: 14px;
  padding: 12px 7px 7px 48px;
  font-size: 16px;
  position: absolute;
  margin: 2px;
  a {
    text-decoration: none;
    color: black;
  }
  a:visitied {
    color: black;
  }
`
const HeaderSmall = ({ user }) => {
  const router = useRouter()
  const path = router.pathname
  const goBack = () => {
    if (path === "/Menu") Router.push("/GettingStarted")
    if (path === "/MyOrder") Router.push("/Menu")
    if (path === "/PlaceOrder") Router.push("/MyOrder")
    if (path === "/OrderComplete") Router.push("/MyOrder")
  }

  return (
    <HeaderContainer>
      <div style={{ cursor: "pointer" }} onClick={goBack}>
        <Back />
      </div>
      <H1>Indian Shack</H1>
    </HeaderContainer>
  )
}

export default connect((state) => ({ user: state.user }))(HeaderSmall)
