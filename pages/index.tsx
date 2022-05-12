import { GetStaticProps} from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }:HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={ product.priceId }/>
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
    
  )
}

export const getStaticProps : GetStaticProps = async () =>{
  const price = await stripe.prices.retrieve('price_1KsSa2KzM0q6B1zBqjzClmS1')

  const product = {
    priceID: price.id,
    amount: new Intl.NumberFormat('en-us',{
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  console.log('ok');
  return {
    props:{
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}