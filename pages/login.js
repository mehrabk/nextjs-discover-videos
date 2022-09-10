import Head from "next/head"
import { useRouter } from "next/router"

import styles from "../styles/Login.module.css"
import Image from "next/image"
import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [userMsg, setUserMsg] = useState("")

  const router = useRouter()

  const handleLoginClick = e => {
    e.preventDefault()
    if (email) {
      if (email === "test@test.com") {
        router.push("/")
      } else {
        setUserMsg("something went wrong")
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
          <button className={styles.loginBtn} onClick={handleLoginClick}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login
