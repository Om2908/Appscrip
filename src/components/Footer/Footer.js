import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.newsletterSection}>
          <h3 className={styles.sectionTitle}>BE THE FIRST TO KNOW</h3>
          <p className={styles.sectionDescription}>
            Sign up for updates from metta muse.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.emailInput}
              aria-label="Email address"
            />
            <button type="submit" className={styles.subscribeButton}>
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.contactBlock}>
            <h3 className={styles.sectionTitle}>CONTACT US</h3>
            <p className={styles.contactInfo}>+44 221 133 5360</p>
            <p className={styles.contactInfo}>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currencyBlock}>
            <h3 className={styles.sectionTitle}>CURRENCY</h3>
            <div className={styles.currencySelector}>
              <img src="/usa.png" />
              <span>USD</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 4.5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerColumn}>
          <h4 className={styles.brandName}>metta muse</h4>
          <ul className={styles.linksList}>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#stories">Stories</a>
            </li>
            <li>
              <a href="#artisans">Artisans</a>
            </li>
            <li>
              <a href="#boutiques">Boutiques</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#compliance">EU Compliances Docs</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h5 className={styles.linksTitle}>QUICK LINKS</h5>
          <ul className={styles.linksList}>
            <li>
              <a href="#orders">Orders & Shipping</a>
            </li>
            <li>
              <a href="#seller">Join/Login as a Seller</a>
            </li>
            <li>
              <a href="#payment">Payment & Pricing</a>
            </li>
            <li>
              <a href="#returns">Return & Refunds</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h5 className={styles.linksTitle}>FOLLOW US</h5>
          <div className={styles.socialIcons}>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <div className={styles.paymentSection}>
            <h5 className={styles.linksTitle}>metta muse ACCEPTS</h5>
            <div className={styles.paymentMethods}>
              <img src="/Gpay.png" />
              <img src="/mastercard.png" />
              <img src="/paypal.png" />
              <img src="/amex.png" />
              <img src="/ApplePay.png" />
              <img src="/pay.png" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
