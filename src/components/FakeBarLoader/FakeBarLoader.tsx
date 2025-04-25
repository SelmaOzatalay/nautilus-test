"use client"
import { useEffect, useState } from 'react';
import styles from './FakeBarLoader.module.scss';

type FakeBarLoaderProps = {
    complete: () => void;
}

const FakeBarLoader = ({complete}: FakeBarLoaderProps) => {
  const [width, setWidth] = useState(0);

  // Fake loading animation
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += 2; 
        setWidth(progress);
      } else {
        clearInterval(interval);
        complete()
      }
    }, 200); 

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} style={{ width: `${width}%` }} />
    </div>
  );
};

export default FakeBarLoader;
