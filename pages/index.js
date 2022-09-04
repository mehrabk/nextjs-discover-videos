import Head from "next/head"
import styles from "../styles/Home.module.css"
import Banner from "../components/banner/banner"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="discover video from youtube api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner title="Game Of Throne" subTitle="amazing move" imgUrl="/static/images/got.jpg" />
      {/* <NavBar /> */}
      {/* <Card /> */}
    </div>
  )
}
