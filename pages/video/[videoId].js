import { useRouter } from "next/router"
import Modal from "react-modal"
import styles from "../../styles/Video.module.css"
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
          type="text/html"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"
        ></iframe>
      </Modal>
    </div>
  )
}

export default Video
