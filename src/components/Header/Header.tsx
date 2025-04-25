"use client";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import style from './Header.module.scss';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={style.mainHeader}>
            <h1>
                <Link href="/">
                    <Image src={"/giskard-logo.svg"} alt="Giskard Nautilus" width={70} height={45} />
                </Link>


                Nautilus
                {(pathname === '/' || pathname === '/scan') && <span className={style.pageName}> - Run a security scan</span>}
                {pathname === '/data-processing' && <span className={style.pageName}> - Process your data</span>}
                {pathname === '/report' && <span className={style.pageName}> - Scan report</span>}
            </h1>
            {pathname === '/report' &&
                <Link href={'/scan'} className='button'>Re-run scan</Link>
            }
        </header>
    )
} 