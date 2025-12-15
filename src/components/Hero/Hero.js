import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
      <h2 className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
        Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </h2>
    </section>
  );
}

