'use client';

import { useState, useRef, useEffect } from 'react';
import style from './Select.module.scss'

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function CustomSelect({ options, value, onChange, placeholder = "Select..." }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState('');

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleOptionClick = (option: Option) => {
    setSelected(option.label);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={style.customSelectContainer} ref={containerRef}>
      <div
        className={style.customSelectToggle}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setIsOpen((prev) => !prev);
        }}
      >
        {selected ? (
            <span>{selected}</span>
        ) : (
            <span className="placeholder">{placeholder}</span>
        )}
        <span className={style.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className={style.customSelectOptions}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${style.customOption} ${value === option.value ? style.selected : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
