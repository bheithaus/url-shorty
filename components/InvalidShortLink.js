import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function InvalidShortLink() {
  const router = useRouter()
  const invalidShortLink = router.query['invalid_short_link']

  if (invalidShortLink !== 'true') return null
  return (
    <p className={styles.invalidShortLink}>You used an invalid short link.  Please feel free to create a new one here</p>
  )
}
