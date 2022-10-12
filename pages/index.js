import Head from 'next/head'
import { MainLayout } from '../components/mainLayout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <MainLayout className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Bitcoin" />
        <link rel="icon" href="/bitcoin.ico" />
      </Head>
      <h1 className={styles.title}>Some content</h1>
      <div></div>
    </MainLayout>
  );
}
