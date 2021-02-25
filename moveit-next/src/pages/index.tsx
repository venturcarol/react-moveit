import Head from 'next/head'
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Profile } from "../components/Profile";
import { ExperienceBar } from '../components/ExperienceBar';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home | Moveit</title>
      </Head>
      
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
