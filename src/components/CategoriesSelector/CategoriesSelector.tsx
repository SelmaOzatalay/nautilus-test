"use client"
import { useEffect } from 'react';
import { useScanStore } from '@/store/scanStore';
import { IssueCategory } from "@/lib/types";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import style from './CategoriesSelector.module.scss';

type CategoryListProps = {
    categories: IssueCategory[];
}

export default function CategoriesSelector({ categories }: CategoryListProps) {
    const addCategories = useScanStore((state) => state.setCategories);
    const removeCategories = useScanStore((state) => state.removeCategories);
    const selectedCategories = useScanStore((state) => state.categories);

    useEffect(() => {
            removeCategories();
    },[removeCategories])

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target;
        if (checked) {
            const foundCategory = categories.find(category => category.name === value);
            if (foundCategory) {
                addCategories([...selectedCategories, foundCategory]);
            }
        } else {
            addCategories(selectedCategories.filter(category => category.name !== value));
        }
    };

    return (
        <div className={`light-bg ${style.categoriesList} ${selectedCategories.length ? 'is-ready' : ''}`}>
            <h2><span className={'step-number'}>3</span> Select category</h2>
            <div className={style.scrollContainer}>
                {categories.map((category, idx) => (
                    <div key={category.name+idx} className={style.categoryItem}>
                        <input type="checkbox" onChange={handleCategoryChange} id={category.name+idx} name={category.name+idx} value={category.name} />
                        <label htmlFor={category.name+idx}>{category.name}</label>
                        <InfoTooltip>{category.description}</InfoTooltip>
                    </div>
                ))}
            </div>
        </div>
    )
}