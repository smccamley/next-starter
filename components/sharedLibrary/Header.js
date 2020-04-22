import Link from "next/link"
import styled from "styled-components"

const HeaderContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 50%;
  border-bottom: 2px solid #d8d8d8;
`

const H1 = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: 75px;
  margin-bottom: 10px;
`

const H2 = styled.h2`
  text-align: center;
  font-size: 14px;
  width: 200px;
  margin: 0 auto 100px auto;
  text-align: center;
  font-family: Lato;
  font-weight: 100;
  font-size: 15px;
  line-height: 23px;
`

const Back = styled.div`
  background-image: url(/back.png);
  width: 95px;
  height: 48px;
  background-repeat: no-repeat;
  background-size: 19px;
  background-position: 10px;
  padding: 12px 7px 7px 42px;
  font-size: 16px;
  position: absolute;
  margin: 5px;
  a {
    text-decoration: none;
    color: black;
  }
  a:visitied {
    color: black;
  }
`

const MarginBottomForSubTitle = styled.div`
  margin-bottom: 15px;
`
export default ({ hideSubtitle = false, showBack = false }) => (
  <HeaderContainer>
    {showBack && (
      <Link href="/GettingStarted">
        <a className={"not-purple"}>
          <Back>Home</Back>
        </a>
      </Link>
    )}
    <H1>Indian Shack</H1>
    {!hideSubtitle && (
      <H2>The newest and most exciting delivered Indian cuisine</H2>
    )}
    {hideSubtitle && <MarginBottomForSubTitle />}
  </HeaderContainer>
)
