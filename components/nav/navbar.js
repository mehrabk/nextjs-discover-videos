import React, { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { magic } from "../../lib/magic-client"

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [username, setUsername] = useState(null)
  const router = useRouter()

  const getUserInfo = async () => {
    try {
      console.log("user")
      const { email } = await magic.user.getMetadata()
      if (email) setUsername(email)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  const handleClickHome = e => {
    e.preventDefault()
    router.push("/")
  }

  const handleClickMyList = e => {
    e.preventDefault()
    router.push("/browse/my-list")
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleSignout = async e => {
    e.preventDefault()
    try {
      await magic.user.logout()
      console.log(await magic.user.isLoggedIn())
      router.push("/login")
    } catch (error) {
      console.error("logout error", error)
      router.push("/login")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image src={"/static/svg/netflix.svg"} alt="netflix logo" width="128px" height="24px" />
          </div>
        </a>
        <ul className={styles.navItems}>
          <li onClick={handleClickHome} className={styles.navItem}>
            Home
          </li>
          <li onClick={handleClickMyList} className={styles.navItem2}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button onClick={toggleDropdown} className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
              {/** expand more icon */}
              <Image src={"/static/svg/expand_more.svg"} alt="expand dropdown" width="24px" height="24px" />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a onClick={handleSignout} className={styles.linkName}>
                    Sign Out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
