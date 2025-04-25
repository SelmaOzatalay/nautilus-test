"use client";
import { useEffect } from 'react';
import { useScanStore } from '@/store/scanStore';
import style from './ScanLevelSelector.module.scss';

export default function ModelSelector() {

    const levels = [{name: 'Fast', value: 1},{name: 'Standard', value: 2},{name: 'Deep', value: 3}];
    const addLevel = useScanStore((state) => state.setLevel);
    const selectedLevel = useScanStore((state) => state.level);
    const removeLevel = useScanStore((state) => state.removeLevel);

    useEffect(() => {
        removeLevel();
    },[removeLevel])

    return (
        <div className={`light-bg ${selectedLevel.name ? 'is-ready' : ''}`}>
            <h2><span className={'step-number'}>2</span> Select level</h2>
            <div className={style.scanLevelSelectorButtons}>
                {levels.map((level) => (
                    <div key={level.value} className={`${style.levelButton} ${selectedLevel.value === level.value ? style.selected : ''}`} onClick={()=>addLevel(level)}>
                        {level.name}
                    </div>
                ))}
            </div>
        </div>
    )
}