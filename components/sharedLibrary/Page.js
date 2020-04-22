import styled from "styled-components"
import Header from "./Header"
import Head from "next/head"
import BreadCrumbs from "./BreadCrumbs"
import HeaderSmall from "./HeaderSmall"

const PageContainer = styled.div`
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: auto;
  position: relative;
`

const PageBackground = styled.div`
  background: #fff;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: auto;
  background: url(/indian-style.jpg);
  background-size: cover;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.25;
`

const Content = styled.div`
  padding: 0;
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Spacer = styled.div`
  width: 100%;
  height: 53px;
`

const OnTopSpacer = styled.div`
  width: 100%;
  height: 141px;
`

const OnTopContent = styled.div`
  padding: 0;
  margin: 0;
  flex: 1;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  z-index: 10;
`

export default ({
  header = "large",
  children,
  title,
  breadcrumbs = [],
  onTop = false,
  hideSubtitle = false,
  showBackground = true,
}) => {
  const siteTitle = "Change me"
  return (
    <PageContainer>
      {showBackground && <PageBackground />}
      <Head>
        <title>{title ? `${siteTitle} - ${title}` : siteTitle}</title>
        <meta charset="UTF-8" />

        <meta name="author" content="Change me" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {header === "large" && <Header hideSubtitle={hideSubtitle} />}
      {header === "small" && <HeaderSmall />}
      {!onTop && (
        <Content>
          {header === "small" && <Spacer />}
          {!!breadcrumbs.length && <BreadCrumbs breadcrumbs={breadcrumbs} />}
          {children}
        </Content>
      )}
      {onTop && (
        <OnTopContent>
          {<OnTopSpacer />}
          {!!breadcrumbs.length && <BreadCrumbs breadcrumbs={breadcrumbs} />}
          {children}
        </OnTopContent>
      )}
    </PageContainer>
  )
}
