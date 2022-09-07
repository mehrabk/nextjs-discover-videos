import React, { useState } from "react"
import Image from "next/image"
import styles from "./card.module.css"
import { motion } from "framer-motion"
import cls from "classnames"
import { FallbackImage } from "../../utils/constants"

function Card(props) {
  const { imgUrl = FallbackImage, size = "medium", id = 1 } = props
  const [imageSrc, setImageSrc] = useState(imgUrl)

  const scale = id === 0 ? { scaleY: 1.05 } : { scale: 1.05 }

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem
  }
  return (
    <div className={styles.container}>
      <motion.div
        whileHover={{
          ...scale
        }}
        className={cls(styles.imgMotionWrapper, classMap[size])}
      >
        <Image
          src={imageSrc}
          onError={e => setImageSrc(FallbackImage)}
          alt="image"
          layout="fill"
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  )
}

export default Card
