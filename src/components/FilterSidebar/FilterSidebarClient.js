'use client';

import { useState } from 'react';
import styles from './FilterSidebar.module.css';

export default function FilterSidebarClient({ isOpen, onToggle }) {
  const [expandedFilters, setExpandedFilters] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    customizable: false,
    idealFor: [],
    occasion: 'All',
    work: 'All',
    fabric: 'All',
    segment: 'All',
    suitableFor: 'All',
    rawMaterials: 'All',
    pattern: 'All',
  });

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const handleCheckboxChange = (filterType, value) => {
    if (filterType === 'customizable') {
      setSelectedFilters(prev => ({
        ...prev,
        customizable: !prev.customizable
      }));
    } else if (filterType === 'idealFor') {
      setSelectedFilters(prev => ({
        ...prev,
        idealFor: prev.idealFor.includes(value)
          ? prev.idealFor.filter(item => item !== value)
          : [...prev.idealFor, value]
      }));
    }
  };

  const filterCategories = [
    { name: 'IDEAL FOR', key: 'idealFor', options: ['Men', 'Women', 'Baby & Kids'] },
    { name: 'OCCASION', key: 'occasion' },
    { name: 'WORK', key: 'work' },
    { name: 'FABRIC', key: 'fabric' },
    { name: 'SEGMENT', key: 'segment' },
    { name: 'SUITABLE FOR', key: 'suitableFor' },
    { name: 'RAW MATERIALS', key: 'rawMaterials' },
    { name: 'PATTERN', key: 'pattern' },
  ];

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <button 
        className={styles.closeButton}
        onClick={onToggle}
        aria-label="Close filters"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M15 5L5 15M5 5l10 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className={styles.filterContent}>
        <div className={styles.filterItem}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedFilters.customizable}
              onChange={() => handleCheckboxChange('customizable')}
              className={styles.checkbox}
            />
            <span className={styles.filterTitle}>CUSTOMIZABLE</span>
          </label>
        </div>

        {filterCategories.map((category) => (
          <div key={category.key} className={styles.filterItem}>
            <div 
              className={styles.filterHeader}
              onClick={() => toggleFilter(category.key)}
            >
              <span className={styles.filterTitle}>{category.name}</span>
              <span className={styles.filterValue}>
                {category.key === 'idealFor' 
                  ? selectedFilters.idealFor.length > 0 
                    ? selectedFilters.idealFor.join(', ')
                    : 'All'
                  : selectedFilters[category.key]}
              </span>
              <svg 
                className={`${styles.arrow} ${expandedFilters[category.key] ? styles.expanded : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none"
              >
                <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            
            {expandedFilters[category.key] && category.options && (
              <div className={styles.filterOptions}>
                {category.options.map((option) => (
                  <label key={option} className={styles.optionLabel}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.idealFor.includes(option)}
                      onChange={() => handleCheckboxChange('idealFor', option)}
                      className={styles.checkbox}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

