import { useRouter } from "next/router"
import Modal from "react-modal"
import styles from "../../styles/Video.module.css"
import clsx from "classnames"

Modal.setAppElement("#__next")

const Video = () => {
  const router = useRouter()
  const { videoId } = router.query

  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        onRequestClose={() => router.back()}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          id="ytplayer"
          className={styles.videoPlayer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com&controls=0&rel=0`}
          frameborder="0"
        ></iframe>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>publishTime</p>
              <p className={styles.title}>Title</p>
              <p className={styles.description}>description</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>cast:</span>
                <span className={styles.channelTitle}>subtext</span>
              </p>

              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>cast:</span>
                <span className={styles.channelTitle}>View Count</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Video
