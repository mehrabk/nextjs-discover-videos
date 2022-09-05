import React, { useState } from "react"
import Image from "next/image"
import styles from "./card.module.css"

import { FallbackImage } from "../../utils/constants"

function Card(props) {
  const { imgUrl = FallbackImage, size = "medium" } = props
  const [imageSrc, setImageSrc] = useState(imgUrl)

  console.log(styles.lgItem)

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem
  }
  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        <Image
          src={imageSrc}
          onError={e => setImageSrc(FallbackImage)}
          alt="image"
          layout="fill"
          className={styles.cardImg}
        />
      </div>
    </div>
  )
}

export default Card
