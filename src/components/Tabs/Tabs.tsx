"use client";
import React, { useState, ReactNode } from 'react';
import styles from './Tabs.module.scss';

type Tab = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultIndex?: number;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList}>
        <div className={styles.scrollWrapper}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${styles.tabButton} ${
                index === activeIndex ? styles.tabButtonActive : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.tabContent}>{tabs[activeIndex].content}</div>
    </div>
  );
};
