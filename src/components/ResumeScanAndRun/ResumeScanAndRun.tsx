"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScanStore } from '@/store/scanStore';
import style from './ResumeScanAndRun.module.scss';

export default function ResumeScanAndRun() {

    const selectedModel = useScanStore((state) => state.model);
    const selectedLevel = useScanStore((state) => state.level);
    const selectedCategories = useScanStore((state) => state.categories);

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (selectedModel.name && selectedLevel.name && selectedCategories.length > 0) {
            setIsReady(true);
        } else {
            setIsReady(false);
        }
    }, [selectedModel, selectedLevel, selectedCategories]);

    return (
        <div className={`light-bg ${style.resumeScanAndRun}`}>
            <div className={style.content}>
                <h2><span className={'step-number'}>4</span> Run scan</h2>
                <p>model : {selectedModel.name} {selectedModel.version}</p>
                <p>level : {selectedLevel.name}</p>
                <p>categories : </p>
                <ul>
                {selectedCategories.map((cat)=>{
                    return <li key={cat.name} className={style.categoryItem}>{cat.name}</li>
                })}
                </ul>
            </div>
            <label className='info'>
                Click the button below to start the scan. This will take a few minutes.
                Make sure you’ve completed the previous steps before starting the scan.
                <Link href='/data-processing' className={`button ${!isReady ? 'disabled':''}`}>Run scan</Link>
            </label>
        </div>
    )
}