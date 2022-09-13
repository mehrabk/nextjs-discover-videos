import Head from "next/head"
import { useRouter } from "next/router"
import styles from "../styles/Login.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { magic } from "../lib/magic-client"

const Login = () => {
  const [email, setEmail] = useState("")
  const [userMsg, setUserMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

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

  const handleLoginClick = async e => {
    e.preventDefault()
    if (email) {
      setIsLoading(true)
      try {
        const didToken = await magic.auth.loginWithMagicLink({ email })
        console.log(didToken)
        if (didToken) {
          router.push("/")
        }
      } catch {
        // Handle errors if required!
        console.log("didToken error")
        setIsLoading(false)
      }
    } else {
      setUserMsg("Enter valid email")
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <a className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image src={"/static/svg/netflix.svg"} alt="netflix logo" width="128px" height="24px" />
            </div>
          </a>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            value={email}
            className={styles.emailInput}
            type="text"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
          />
          <p className={styles.userMsg}>{userMsg}</p>
          <button disabled={isLoading} className={styles.loginBtn} onClick={handleLoginClick}>
            {isLoading ? "Loading" : "Sign In"}
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login
