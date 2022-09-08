import Head from "next/head"
import styles from "../styles/Home.module.css"
import Banner from "../components/banner/banner"
import Navbar from "../components/nav/navbar"
import SectionCards from "../components/card/section-cards"
import { getPopularVideos, getVideos } from "../lib/videos"

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney")
  const gotVideos = await getVideos("game of throne")
  const spidermanVideos = await getVideos("spiderman")
  const popularVideos = await getPopularVideos()

  return { props: { disneyVideos, gotVideos, spidermanVideos, popularVideos } }
}

export default function Home(porps) {
  const { disneyVideos, gotVideos, spidermanVideos, popularVideos } = porps

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="discover video from youtube api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar username="mehrab.kor@gmail.com" />
        <Banner title="Game Of Throne" subTitle="amazing move" imgUrl="/static/images/got.jpg" />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Game Of Throne" videos={gotVideos} size="large" />
          <SectionCards title="Disney" videos={disneyVideos} size="medium" />
          <SectionCards title="Spiderman" videos={spidermanVideos} size="small" />
          <SectionCards title="Popular Videos" videos={popularVideos} size="medium" />
        </div>
      </main>
    </div>
  )
}
