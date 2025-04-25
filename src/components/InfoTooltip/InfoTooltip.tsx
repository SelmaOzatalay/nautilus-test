import React from 'react';
import Image from 'next/image';
import styles from './InfoTooltip.module.scss';

type LayoutProps = {
    children: React.ReactNode;
};

export default function InfoTooltip({ children }: LayoutProps) {
    return (
        <div className={styles.infoTooltip}>
            <button>
                <Image
                    src={`/icons/info.svg`}
                    alt={'info'}
                    width={30}
                    height={30}/>
            </button>
            <div className={styles.toolTipBox}><p>{children}</p></div>
        </div>

    );
}  