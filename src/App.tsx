import './App.css';

// Boutique services with one image per category
const services = [
  {
    title: 'Designer Lehengas',
    description:
      'Elegant lehenga designs with beautiful detailing for weddings, celebrations, and special occasions.',
    image: '/images/lehenga.png',
  },
  {
    title: 'Elegant Sarees',
    description:
      'Timeless saree styling and traditional elegance inspired by graceful craftsmanship.',
    image: '/images/saree.png',
  },
  {
    title: 'Blouse Handwork',
    description:
      'Beautifully handcrafted blouse designs featuring intricate Aari and Maggam work.',
    image: '/images/blouse.png',
  },
];

// WhatsApp number: India country code (91) + 10-digit number
const whatsappNumber = '917022222482';

function getWhatsAppLink(): string {
  const message =
    'Hello JYOTHI JAIN Boutique! I would like to know more about your designs and services.';

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function App() {
  return (
    <div className="app">

      {/* NAVIGATION */}
      <header className="navbar">
        <a className="logo" href="#home">
          JYOTHI <span>JAIN</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">What We Do</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              A CELEBRATION OF TIMELESS ELEGANCE
            </p>

            <h1>
              Where Every Thread
              <br />
              Tells a Story
            </h1>

            <p className="hero-description">
              A world of graceful lehengas, elegant sarees,
              and intricate handwork — where traditional
              artistry meets modern elegance.
            </p>

            <a href="#services" className="primary-button">
              Explore Our Creations
            </a>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="services" id="services">
          <p className="eyebrow">
            CRAFTED WITH LOVE
          </p>

          <h2>What We Do</h2>

          <p className="section-description">
            Bringing elegance and creativity together
            through beautiful designs and craftsmanship.
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.title}
              >
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={`${service.title} design inspiration`}
                    loading="lazy"
                  />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <p className="inspiration-note">
            Images shown are for illustrative purposes only.
          </p>
        </section>

        {/* ABOUT SECTION */}
        <section className="about" id="about">
          <p className="eyebrow">
            THE STORY BEHIND THE LABEL
          </p>

          <h2>
            Designed with Passion,
            <br />
            Worn with Love
          </h2>

          <p>
            At JYOTHI JAIN Boutique, we believe every outfit
            tells a story — a story of elegance, individuality,
            and timeless beauty.
          </p>

          <p>
            Inspired by the richness of Indian traditions and
            the artistry of handcrafted details, we bring
            together graceful designs and thoughtful craftsmanship
            to celebrate every special moment.
          </p>

          <p className="about-signature">
            Because every woman deserves to feel beautiful,
            confident, and uniquely herself.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact" id="contact">
          <p className="eyebrow">
            LET'S CONNECT
          </p>

          <h2>
            Let's Create Something Beautiful
          </h2>

          <p>
            Have a design in mind? We'd love to hear your ideas
            and discuss your requirements.
          </p>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Enquire on WhatsApp"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.04 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2 1.72c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92z" />
            </svg>

            <span>Enquire on WhatsApp</span>
          </a>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>
          JYOTHI JAIN — A Celebration of Elegance
        </p>

        <small>
          © {new Date().getFullYear()} JYOTHI JAIN.
          All rights reserved.
        </small>
      </footer>

    </div>
  );
}

export default App;
