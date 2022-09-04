import styles from "./banner.module.css"
import Image from "next/image"

const Banner = props => {
  const { title, subTitle, imgUrl } = props
  const handleOnPlay = () => {
    console.log("clicked")
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.seris}>S E R I S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image src="/static/svg/play-arrow.svg" alt="play icon" width="32px" height="32px" />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      ></div>
    </div>
  )
}

export default Banner
