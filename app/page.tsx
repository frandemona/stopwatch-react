'use client';

import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { useMemo, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  function startTimer() {
    if (!isRunning) {
      setIsRunning(true);
      setIntervalId(
        setInterval(() => {
          setTime((time) => time + 1);
        }, 1000)
      );
    }
  }

  function stopTimer() {
    if (isRunning && intervalId !== null) {
      setIsRunning(false);
      clearInterval(intervalId);
    }
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  const formattedTime = useMemo(() => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    return { hours: `${hours < 10 ? '0' + hours : hours}`, minutes: `${minutes < 10 ? '0' + minutes : minutes}`, seconds: `${seconds < 10 ? '0' + seconds : seconds}` };
  }, [time]);

  return (
    <main className={`${inter.className} ${styles.main}`}>
      <h1>
        {formattedTime.hours}:{formattedTime.minutes}:{formattedTime.seconds}
      </h1>
      <div className={styles.buttons}>
        <button type='button' onClick={startTimer}>
          Start
        </button>
        <button type='button' onClick={stopTimer}>
          Stop
        </button>
        <button type='button' onClick={resetTimer}>
          Reset
        </button>
      </div>
    </main>
  );
}
