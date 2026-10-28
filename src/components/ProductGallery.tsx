
import { useState } from 'react';
import { products } from '../data/products';
import './ProductGallery.css';
import { getWhatsAppEnquiryLink } from '../utils/whatsapp';

const categories = [
  { id: 0, name: 'All Designs' },
  { id: 1, name: 'Lehengas' },
  { id: 2, name: 'Sarees' },
  { id: 3, name: 'Handwork Blouses' },
];

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const visibleProducts =
    selectedCategory === 0
      ? products
      : products.filter(
          (product) => product.collectionId === selectedCategory
        );

  return (
    <section id="products" className="product-gallery">
      <div className="gallery-container">
        <p className="gallery-eyebrow">
          JYOTHI JAIN BOUTIQUE
        </p>

        <h2>Explore Our Designs</h2>

        <p className="gallery-intro">
          Thoughtfully curated styles for every special occasion.
        </p>

        {/* CATEGORY FILTERS */}
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={
                selectedCategory === category.id ? 'active' : ''
              }
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* PRODUCT CARDS */}
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article
              className="product-card"
              key={product.id}
            >
              <div className="product-placeholder">
                <span className="placeholder-icon">✦</span>
                <span>JYOTHI JAIN</span>
                <small>DESIGN COMING SOON</small>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <a
                  href={getWhatsAppEnquiryLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
