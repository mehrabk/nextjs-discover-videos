import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Loading from "../components/loading/loading"
import { magic } from "../lib/magic-client"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  console.log("App Running")

  // subscribing router & solve flicker when route
  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false)
    }
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  }, [router])

  const isLoggedIn = async () => {
    const result = await magic.user.isLoggedIn()
    console.log({ result })
    if (result) {
      router.push("/")
    } else {
      router.push("/login")
    }
  }
  useEffect(() => {
    isLoggedIn()
  }, [])
  return isLoading ? <Loading /> : <Component {...pageProps} />
}

export default MyApp
