import Head from "next/head"
import styles from "../styles/Home.module.css"
import Banner from "../components/banner/banner"
import Navbar from "../components/nav/navbar"
import SectionCards from "../components/card/section-cards"
import { useEffect, useState } from "react"
import { getVideos } from "../lib/videos"

export async function getServerSideProps() {
  const allVideos = await getVideos()
  console.log(allVideos)
  return { props: { allVideos } }
}

export default function Home(porps) {
  const { allVideos } = porps
  const [videos, setVideos] = useState(allVideos)

  console.log(videos)
  useEffect(() => {}, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="discover video from youtube api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar username="mehrab.kor@gmail.com" />
      <Banner title="Game Of Throne" subTitle="amazing move" imgUrl="/static/images/got.jpg" />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Game Of Throne" videos={videos} size="large" />
      </div>
    </div>
  )
}
