import React, { useState } from "react"
import styles from "./navbar.module.css"

import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

function Navbar(props) {
  const { username } = props

  const [showDropdown, setShowDropdown] = useState(false)

  const router = useRouter()

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
                  <Link href="/login">
                    <a>Sign Out</a>
                  </Link>
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
