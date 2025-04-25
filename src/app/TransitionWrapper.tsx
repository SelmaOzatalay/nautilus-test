'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayedPathname, setDisplayedPathname] = useState(pathname);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (pathname !== displayedPathname) {
      setTransitionStage('fadeOut');
      const timeout = setTimeout(() => {
        setDisplayedPathname(pathname);
        setTransitionStage('fadeIn');
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [pathname, displayedPathname]);

  return <span className={`page-transition ${transitionStage}`}>{children}</span>;
}
