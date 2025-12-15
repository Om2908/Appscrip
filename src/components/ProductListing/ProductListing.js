'use client';

import { useState } from 'react';
import FilterSidebarClient from '../FilterSidebar/FilterSidebarClient';
import ProductGridClient from '../ProductGrid/ProductGridClient';
import styles from './ProductListing.module.css';

export default function ProductListing({ products, totalItems }) {
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const closeFilter = () => {
    setFilterOpen(false);
  };

  return (
    <div className={styles.productListing}>
      <div className={styles.mobileFilterToggle}>
        <button 
          className={styles.filterButton}
          onClick={toggleFilter}
          aria-label="Toggle filters"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span className={styles.filterButtonText}>FILTER</span>
        </button>
      </div>
      {filterOpen && (
        <div className={styles.overlay} onClick={closeFilter}></div>
      )}
      <div className={styles.contentWrapper}>
        <FilterSidebarClient isOpen={filterOpen} onToggle={toggleFilter} />
        <ProductGridClient 
          products={products} 
          totalItems={totalItems}
          onToggleFilter={toggleFilter}
        />
      </div>
    </div>
  );
}

