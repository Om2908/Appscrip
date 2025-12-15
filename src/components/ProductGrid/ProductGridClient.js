'use client';

import { useState } from 'react';
import styles from './ProductGrid.module.css';

export default function ProductGridClient({ products, totalItems, onToggleFilter }) {
  // Initialize some products as favorited (like product 3 in the image)
  const [wishlist, setWishlist] = useState(new Set([products[2]?.id]));
  const [imageErrors, setImageErrors] = useState(new Set());

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const handleImageError = (productId, event) => {
    setImageErrors(prev => new Set(prev).add(productId));
    // Fallback to direct URL if proxy fails, then to placeholder
    if (event?.target) {
      const currentSrc = event.target.src;
      // If proxy failed, try direct URL
      if (currentSrc.includes('/api/image-proxy')) {
        const urlMatch = currentSrc.match(/url=([^&]+)/);
        if (urlMatch) {
          const directUrl = decodeURIComponent(urlMatch[1]);
          event.target.src = directUrl;
          return;
        }
      }
      // Final fallback to placeholder
      event.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
    }
  };

  return (
    <div className={styles.productSection}>
      <div className={styles.controls}>
        <span className={styles.itemCount}>{totalItems} ITEMS</span>
        <button className={`${styles.filterToggle} ${styles.desktopOnly}`} onClick={onToggleFilter} aria-label="Hide filter sidebar">
          &lt; HIDE FILTER
        </button>
        <div className={styles.sortDropdown}>
          <select className={styles.sortSelect}>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map((product, index) => {
          // Determine badge type based on product index for demo
          const badgeType = index === 0 ? 'new' : index === 1 ? 'outOfStock' : null;
          
          // Ensure image URL is absolute and valid
          let imageSrc = product.image || 'https://via.placeholder.com/300x300?text=No+Image';
          if (imageSrc && !imageSrc.startsWith('http')) {
            imageSrc = `https://${imageSrc}`;
          }
          
          const hasError = imageErrors.has(product.id);
          
          // Always use proxy for external images to ensure Vercel compatibility
          // Proxy will work on both localhost and Vercel
          const finalImageSrc = hasError 
            ? 'https://via.placeholder.com/300x300?text=No+Image'
            : (imageSrc.startsWith('https://fakestoreapi.com') || imageSrc.startsWith('https://via.placeholder.com'))
            ? `/api/image-proxy?url=${encodeURIComponent(imageSrc)}`
            : imageSrc;

          return (
            <article key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img
                  src={finalImageSrc}
                  alt={`${product.title} - Handcrafted product from mettä muse`}
                  width={300}
                  height={300}
                  className={styles.productImage}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  onError={(e) => handleImageError(product.id, e)}
                  referrerPolicy="no-referrer"
                />
                {badgeType === 'new' && (
                  <div className={styles.badgeNew}>NEW PRODUCT</div>
                )}
                {badgeType === 'outOfStock' && (
                  <div className={styles.badgeOutOfStock}>OUT OF STOCK</div>
                )}
              </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.pricingText}>
                Sign in or Create an account to see pricing
              </p>
              <button
                className={styles.wishlistButton}
                onClick={() => toggleWishlist(product.id)}
                aria-label={`Add ${product.title} to wishlist`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill={wishlist.has(product.id) ? '#ff0000' : 'none'}
                  stroke={wishlist.has(product.id) ? '#ff0000' : '#000'}
                  strokeWidth="1.5"
                  style={{ display: 'block' }}
                >
                  <path d="M10 17.5l-1.5-1.35C4.5 12.5 2 10.25 2 7.5 2 5.5 3.5 4 5.5 4c1.3 0 2.55.65 3.5 1.65C9.95 4.65 11.2 4 12.5 4 14.5 4 16 5.5 16 7.5c0 2.75-2.5 5-6.5 8.65L10 17.5z"/>
                </svg>
              </button>
            </div>
          </article>
          );
        })}
      </div>
    </div>
  );
}

