import React from "react"

import App, { Container } from "next/app"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import reduxStore from "../components/Store"
import withRedux from "next-redux-wrapper"
import "../components/css.css"

import SetMobile from "../components/sharedLibrary/SetMobile"
import SetBusinessHours from "../components/sharedLibrary/SetBusinessHours"
import DeliveryTime from "../components/sharedLibrary/DeliveryTime"

import { config, library } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { PageTransition } from "next-page-transitions"

import {
  faExclamationCircle,
  faUser,
  faHome,
  faUserCog,
  faSignInAlt,
  faSignOutAlt,
  faStarHalfAlt,
  faMinusCircle,
  faPlusCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons"
import { faEvernote } from "@fortawesome/free-brands-svg-icons"
import LoadStripe from "../components/sharedLibrary/LoadStripe"
import DataCleanupOnUpdate from "../components/sharedLibrary/DataCleanupOnUpdate"

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false
library.add(
  faSignInAlt,
  faSignOutAlt,
  faHome,
  faUserCog,
  faUser,
  faExclamationCircle,
  faStarHalfAlt,
  faMinusCircle,
  faPlusCircle,
  faTimesCircle,
  faEvernote,
)

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    return { pageProps }
  }

  render() {
    const { Component, pageProps, store, router } = this.props

    return (
      <Container style={{ height: "100%", minHeight: "100%" }}>
        <LoadStripe>
          <Provider store={store}>
            <PersistGate loading={null} persistor={store.__PERSISTOR}>
              <DataCleanupOnUpdate>
                <SetMobile>
                  <SetBusinessHours>
                    <DeliveryTime>
                      <PageTransition
                        timeout={300}
                        loadingDelay={500}
                        loadingTimeout={{
                          enter: 400,
                          exit: 0,
                        }}
                        classNames="page-transition"
                      >
                        <Component {...pageProps} key={router.route} />
                      </PageTransition>
                    </DeliveryTime>
                  </SetBusinessHours>
                </SetMobile>
              </DataCleanupOnUpdate>
            </PersistGate>
          </Provider>
        </LoadStripe>
        <style jsx global>{`
          .page-transition-enter-done {
            height: 100%;
            min-height: 100%;
          }
          .page-transition {
            height: 100%;
            min-height: 100%;
          }
          .page-transition-enter {
            opacity: 0;
            height: 100%;
            min-height: 100%;
          }
          .page-transition-enter-active {
            height: 100%;
            min-height: 100%;
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            height: 100%;
            min-height: 100%;
            opacity: 1;
          }
          .page-transition-exit-active {
            height: 100%;
            min-height: 100%;
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Container>
    )
  }
}

export default withRedux(reduxStore)(MyApp)
