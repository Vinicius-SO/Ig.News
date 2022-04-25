import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ignews</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get accesstoall the publications <br />
            <span>for$9.98 month</span>
          </p>
          <SubscribeButton></SubscribeButton>
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
    
  )
}
