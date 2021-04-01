import Button from '../components/button/button.js'

import Link from 'next/link'

import styles from './Styles.module.css'

export default function Home() {
  return (
    <div className={styles.titleContainer}>
      <Link href="/create">
        <h1>LET'S PLAY PERUDO</h1>
      </Link>
    </div>
  )
}
