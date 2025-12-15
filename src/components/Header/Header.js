import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarItem}>
          <svg
            className={styles.gridIcon}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
            <rect
              x="7.5"
              y="0.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
            <rect
              x="0.5"
              y="7.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
            <rect
              x="7.5"
              y="7.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
          </svg>
          <span>Appscrip</span>
        </div>
        <div className={`${styles.topBarItem} ${styles.desktopOnly}`}>
          <svg
            className={styles.gridIcon}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
            <rect
              x="7.5"
              y="0.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
            <rect
              x="0.5"
              y="7.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
            <rect
              x="7.5"
              y="7.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
          </svg>
          <span>Appscrip</span>
        </div>
        <div className={`${styles.topBarItem} ${styles.desktopOnly}`}>
          <svg
            className={styles.gridIcon}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
            <rect
              x="7.5"
              y="0.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
            <rect
              x="0.5"
              y="7.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
            <rect
              x="7.5"
              y="7.5"
              width="4"
              height="4"
              stroke="#ff6b9d"
              strokeWidth="1"
            />
          </svg>
          <span>Appscrip</span>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <img src="/Logo.png" />
          </div>
        </div>

        <div className={styles.logoTextCenter}>
          <span>LOGO</span>
        </div>

        <div className={styles.utilityIcons}>
          <button className={styles.iconButton} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM15.293 15.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className={styles.iconButton} aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 17.5l-1.5-1.35C4.5 12.5 2 10.25 2 7.5 2 5.5 3.5 4 5.5 4c1.3 0 2.55.65 3.5 1.65C9.95 4.65 11.2 4 12.5 4 14.5 4 16 5.5 16 7.5c0 2.75-2.5 5-6.5 8.65L10 17.5z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <button className={styles.iconButton} aria-label="Shopping bag">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 7h10l-1 8H6l-1-8zM7 7V5a3 3 0 0 1 6 0v2"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </button>
          <button className={styles.iconButton} aria-label="User account">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="7"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M4 18c0-3.314 2.686-6 6-6s6 2.686 6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </button>
          <div className={styles.languageSelector}>
            <span>ENG</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M3 4.5l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </header>

      <nav className={styles.navBar}>
        <a href="#shop">SHOP</a>
        <a href="#skills">SKILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
      </nav>
    </>
  );
}
