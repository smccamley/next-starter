import React from "react"
import Fonts from "../components/sharedLibrary/Fonts"

import { useEffect } from "react"
import Splash from "./Splash"

export default () => {
  useEffect(() => {
    Fonts()
  }, [])

  return <Splash />
}
