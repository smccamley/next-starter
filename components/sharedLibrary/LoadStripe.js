import { useRouter } from "next/router"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_APIKEY)

export default ({ children }) => {
  //const router = useRouter()
  //let isCheckout = false
  // const pathname = router.pathname
  // if (pathname && pathname.indexOf("PlaceOrder") > -1) isCheckout = true

  // if (!isCheckout) return children

  return <Elements stripe={stripePromise}>{children}</Elements>
}
