import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ProductListing from "../components/ProductListing/ProductListing";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";

// Ensure Node.js runtime for better API compatibility on Vercel
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic'; // Force dynamic rendering to ensure API calls happen

async function getProducts() {
  const maxRetries = 3;
  let lastError = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Use fetch without caching for production to ensure fresh data
      const response = await fetch("https://fakestoreapi.com/products?limit=20", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        // Disable caching to ensure API is called on each request in production
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const products = await response.json();
      
      // Validate response
      if (!Array.isArray(products)) {
        throw new Error("Invalid response format: expected array");
      }

      if (products.length === 0) {
        console.warn("Received empty products array from API");
      }

      console.log(`Successfully fetched ${products.length} products (attempt ${attempt})`);
      return products;
    } catch (error) {
      lastError = error;
      console.error(`Attempt ${attempt}/${maxRetries} failed:`, {
        message: error.message,
        name: error.name,
        cause: error.cause,
      });
      
      // Wait before retrying (exponential backoff)
      if (attempt < maxRetries) {
        const delay = 1000 * attempt;
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // All retries failed
  console.error("All retry attempts failed. Last error:", lastError?.message);
  return [];
}

export default async function Home() {
  const products = await getProducts();
  const totalItems = 3425;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Discover Our Products - mettä muse",
            description:
              "Browse our collection of handcrafted products at mettä muse",
            url: "https://mettamuse.com/products",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: totalItems,
              itemListElement: (products || []).slice(0, 10).map((product, index) => ({
                "@type": "Product",
                position: index + 1,
                name: product?.title || "Product",
                image: product?.image || "",
                description: product?.description || "",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "EUR",
                },
              })),
            },
          }),
        }}
      />
      <div className={styles.page}>
        <Header />
        <Hero />
        <ProductListing products={products} totalItems={totalItems} />
        <Footer />
      </div>
    </>
  );
}
