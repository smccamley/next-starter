import styled from "styled-components"
import Link from "next/link"

const FooterContainer = styled.div`
  background-image: url("/shack.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  a {
    margin: 10px;
    color: #383838;
    text-decoration: none;
  }
`

const FooterLinks = styled.div`
  text-align: center;
  margin: 132px 0 36px 0;
  padding-top: 55px;
  display: flex;
  background-color: #000;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  a {
    color: white;
    font-family: Luminari;
  }
  a:hover {
    color: #005eb8;
  }
`

const Copywite = styled.div`
  font-size: 12px;
  color: #525252;
  width: 200px;
  margin-top: 55px;
  margin-bottom: 21px;
  a {
    font-family: Lato;
    color: #525252;
  }
`

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <Link href="#"></Link>
      <Copywite>
        'Indian Shack' is a trading name of{" "}
        <a href="https://www.itrex.co.uk" target="_blank">
          ITrex Web Services LTD
        </a>
      </Copywite>
    </FooterLinks>
  </FooterContainer>
)
export default Footer
