import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="discover video from youtube api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Netflix</h1>
      </main>
    </div>
  )
}
