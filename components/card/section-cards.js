import Link from "next/link"
import { Fragment } from "react"
import Card from "./card"
import styles from "./section-cards.module.css"

const SectionCards = props => {
  const { title, videos = [], size = "medium" } = props
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardsWrapper}>
        {videos.map((video, index) => (
          <Link href={`/video/${video.id}`} key={index}>
            <Card imgUrl={video.imgUrl} size={size} id={index} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SectionCards
