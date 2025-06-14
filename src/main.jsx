import React, { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// Translation dictionaries
const translations = {
  nav: {
    home: { en: 'Home', de: 'Startseite' },
    shop: { en: 'Shop', de: 'Shop' },
    about: { en: 'About', de: 'Über uns' },
    benefits: { en: 'Health Benefits', de: 'Gesundheitsvorteile' },
    faq: { en: 'FAQ', de: 'FAQ' },
    contact: { en: 'Contact', de: 'Kontakt' },
    impressum: { en: 'Impressum', de: 'Impressum' },
    toggle: { en: 'DE', de: 'EN' }
  },
  footer: { en: '© 2025 Hanuman Farm', de: '© 2025 Hanuman Farm' },
  home: {
    heroTitle: { en: "Cultivate Wellness with Lion’s Mane", de: "Wellness kultivieren mit Löwenmähne" },
    heroText: { en: "Discover the cognitive and wellness benefits of our premium Lion’s Mane mushrooms grown sustainably on Hanuman Farm.", de: "Entdecken Sie die kognitiven und Wellness-Vorteile unserer nachhaltig angebauten Premium-Löwenmähnenpilze." },
    shopNow: { en: 'Shop Now', de: 'Jetzt einkaufen' },
    learnMore: { en: 'Learn More', de: 'Mehr erfahren' },
    newsletterTitle: { en: 'Join Our Newsletter', de: 'Newsletter abonnieren' },
    newsletterText: { en: 'Get a free guide to growing your own mushrooms and exclusive deals.', de: 'Holen Sie sich einen kostenlosen Leitfaden zum Pilzanbau und exklusive Angebote.' },
    newsletterPlaceholder: { en: 'Your email', de: 'Ihre E-Mail' },
    newsletterSubscribe: { en: 'Subscribe', de: 'Abonnieren' }
  },
  shop: {
    title: { en: 'Shop All Products', de: 'Alle Produkte' }
  },
  dried: {
    title: { en: "Lion’s Mane Dried Mushrooms", de: 'Löwenmähne Trockenpilze' },
    description: { en: 'Slow-dried to preserve nutrients. Great for tea, soups, or cooking.', de: 'Schonend getrocknet für Nährstoff- und Geschmacksbewahrung. Perfekt für Tee, Suppen und Küche.' },
    specs: { en: ['50g, 100g, 200g pouches', '12-month shelf life', '100% organic'], de: ['50g, 100g, 200g Beutel', '12 Monate Haltbarkeit', '100 % Bio'] },
    price: { en: '$14.99 – $29.99', de: '14,99 € – 29,99 €' },
    addToCart: { en: 'Add to Cart', de: 'In den Warenkorb' }
  },
  kits: {
    title: { en: "Lion’s Mane Grow Kits", de: 'Löwenmähne Grow-Kits' },
    description: { en: 'Includes substrate block & tent, easy for beginners.', de: 'Enthält Substratblock & Zelt, ideal für Anfänger.' },
    specs: { en: ['5kg block', '60x60x120cm tent', 'Instructions'], de: ['5kg Block', '60x60x120cm Zelt', 'Anleitung'] },
    price: { en: '$79.99', de: '79,99 €' },
    addToCart: { en: 'Add to Cart', de: 'In den Warenkorb' }
  },
  substrate: {
    title: { en: "Lion’s Mane Substrate Boxes", de: 'Löwenmähne Substrat-Boxen' },
    description: { en: 'Refill your tent with ready-to-fruit substrate.', de: 'Zelt mit fruchtbarem Substrat nachfüllen.' },
    specs: { en: ['Pre-inoculated', 'Minimal setup', 'Plastic-free'], de: ['Vorinokuliert', 'Minimaler Aufbau', 'Ohne Plastik'] },
    price: { en: '$39.99', de: '39,99 €' },
    addToCart: { en: 'Add to Cart', de: 'In den Warenkorb' }
  },
  frozen: {
    title: { en: "Frozen Fresh Lion’s Mane Mushrooms", de: 'Gefrorene frische Löwenmähne' },
    description: { en: 'Flash-frozen for peak freshness.', de: 'Blitzgefrostet für höchste Frische.' },
    specs: { en: ['500g packs', 'Shipped frozen', 'No preservatives'], de: ['500g Packungen', 'Gefroren versendet', 'Ohne Konservierungsstoffe'] },
    price: { en: '$34.99', de: '34,99 €' },
    addToCart: { en: 'Add to Cart', de: 'In den Warenkorb' }
  },
  about: {
    title: { en: 'About Us', de: 'Über uns' },
    text: { en: 'Family-run farm since 2020, dedicated to sustainable Lion’s Mane cultivation.', de: 'Familienbetrieb seit 2020, fokussiert auf nachhaltigen Löwenmähnen-Anbau.' }
  },
  benefits: {
    title: { en: 'Health Benefits of Lion’s Mane', de: 'Gesundheitsvorteile der Löwenmähne' },
    list: { en: ['Neuroprotective', 'Anti-inflammatory', 'Immune support', 'Mood & focus', 'Digestive health'], de: ['Neuroprotektiv', 'Entzündungshemmend', 'Immunsystem', 'Stimmung & Fokus', 'Verdauungsgesundheit'] }
  },
  faq: {
    items: [
      { q: { en: 'How to use dried mushrooms?', de: 'Wie verwendet man Trockenpilze?' }, a: { en: 'Steep, cook, or supplement.', de: 'Aufbrühen, kochen oder als Nahrungsergänzung.' } },
      { q: { en: 'Shipping frozen products?', de: 'Versand gefrorener Produkte?' }, a: { en: 'Insulated packaging with dry ice.', de: 'Isolierverpackung mit Trockeneis.' } }
    ]
  },
  contact: {
    title: { en: 'Contact Us', de: 'Kontakt' },
    placeholders: { name: { en: 'Name', de: 'Name' }, email: { en: 'Email', de: 'E-Mail' }, message: { en: 'Message', de: 'Nachricht' }, submit: { en: 'Send Message', de: 'Senden' } }
  },
  impressum: {
    title: { en: 'Impressum', de: 'Impressum' },
    lines: [
      { en: 'Hanuman Farm GmbH', de: 'Hanuman Farm GmbH' },
      { en: 'Musterstraße 1, 12345 Berlin', de: 'Musterstraße 1, 12345 Berlin' },
      { en: 'Email: info@hanumanfarm.de', de: 'E-Mail: info@hanumanfarm.de' },
      { en: 'CEO: John Doe', de: 'Geschäftsführer: John Doe' }
    ]
  }
};

// Language context
const LanguageContext = createContext();

// Layout with Nav and Footer
const Layout = ({ children }) => {
  const { lang, toggleLang } = useContext(LanguageContext);
  const t = (section, key) => translations[section][key]?.[lang] || '';
  return (
    <div className="flex flex-col min-h-screen text-[#2d2d2d] bg-[#fdf6e3]">
      <header className="bg-[#2f4f4f] text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hanuman Farm</h1>
        <nav className="flex space-x-4">
          {['home','shop','about','benefits','faq','contact'].map((key) => (
            <Link key={key} to={key==='home'?'/':`/${key}`}>{translations.nav[key][lang]}</Link>
          ))}
          <button onClick={toggleLang} className="ml-4 p-1 border rounded">{translations.nav.toggle[lang]}</button>
        </nav>
      </header>
      <main className="flex-grow p-6">{children}</main>
      <footer className="bg-[#eee8d5] text-center py-4">
        <p>{translations.footer[lang]}</p>
        <Link to="/impressum" className="underline block mt-2">{translations.nav.impressum[lang]}</Link>
      </footer>
    </div>
  );
};

// ProductCard component
const ProductCard = ({ section, img, path }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <Link to={path} className="block border rounded-lg overflow-hidden hover:shadow-lg">
      <img src={img} alt={translations[section].title[lang]} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{translations[section].title[lang]}</h3>
      </div>
    </Link>
  );
};

// Page components
const Home = () => {
  const { lang } = useContext(LanguageContext);
  const tHome = translations.home;
  return (
    <div>
      <section className="bg-green-100 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">{tHome.heroTitle[lang]}</h1>
        <p className="mb-6">{tHome.heroText[lang]}</p>
        <div className="flex justify-center space-x-4">
          <Link to="/shop" className="bg-[#2f4f4f] text-white px-6 py-2 rounded">{tHome.shopNow[lang]}</Link>
          <Link to="/benefits" className="bg-[#dc762f] text-white px-6 py-2 rounded">{tHome.learnMore[lang]}</Link>
        </div>
      </section>
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard section="dried" img="/images/dried-thumb.jpg" path="/dried" />
        <ProductCard section="kits" img="/images/kits-thumb.jpg" path="/kits" />
        <ProductCard section="substrate" img="/images/substrate-thumb.jpg" path="/substrate" />
        <ProductCard section="frozen" img="/images/frozen-thumb.jpg" path="/frozen" />
      </section>
      <section className="mt-16 bg-[#f4f4f4] p-6 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">{tHome.newsletterTitle[lang]}</h2>
        <p className="mb-4">{tHome.newsletterText[lang]}</p>
        <form className="flex justify-center">
          <input type="email" placeholder={tHome.newsletterPlaceholder[lang]} className="p-2 border rounded-l w-64" />
          <button type="submit" className="bg-[#2f4f4f] text-white px-4 py-2 rounded-r">{tHome.newsletterSubscribe[lang]}</button>
        </form>
      </section>
    </div>
  );
};

const GenericProduct = ({ section }) => {
  const { lang } = useContext(LanguageContext);
  const t = translations[section];
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <img src={`/images/${section}-detail.jpg`} alt={t.title[lang]} className="w-full rounded-lg" />
      <h2 className="text-3xl font-semibold">{t.title[lang]}</h2>
      <p>{t.description[lang]}</p>
      <ul className="list-disc list-inside">
        {t.specs[lang].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <p className="text-xl font-bold mt-2">{t.price[lang]}</p>
      <button className="bg-[#2f4f4f] text-white px-6 py-2 rounded">{t.addToCart[lang]}</button>
    </div>
  );
};

const About = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-semibold">{translations.about.title[lang]}</h2>
      <p>{translations.about.text[lang]}</p>
      <img src="/images/farm-detail.jpg" alt="Farm" className="w-full rounded-lg" />
    </div>
  );
};

const Benefits = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-semibold">{translations.benefits.title[lang]}</h2>
      <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
        {translations.benefits.list[lang].map((b) => (<li key={b}>{b}</li>))}
      </ul>
    </div>
  );
};

const FAQ = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-semibold">FAQ</h2>
      {translations.faq.items.map(({ q, a }) => (
        <details key={q[lang]} className="border rounded p-4">
          <summary className="font-medium">{q[lang]}</summary>
          <p className="mt-2">{a[lang]}</p>
        </details>
      ))}
    </div>
  );
};

const Contact = () => {
  const { lang } = useContext(LanguageContext);
  const p = translations.contact.placeholders;
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-semibold">{translations.contact.title[lang]}</h2>
      <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
        <label className="block"><span>{p.name[lang]}</span><input type="text" name="name" required className="mt-1 p-2 border rounded w-full" /></label>
        <label className="block"><span>{p.email[lang]}</span><input type="email" name="email" required className="mt-1 p-2 border rounded w-full" /></label>
        <label className="block"><span>{p.message[lang]}</span><textarea name="message" rows="4" required className="mt-1 p-2 border rounded w-full"></textarea></label>
        <button type="submit" className="bg-[#2f4f4f] text-white px-6 py-2 rounded">{p.submit[lang]}</button>
      </form>
    </div>
  );
};

const Impressum = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-semibold">{translations.impressum.title[lang]}</h2>
      {translations.impressum.lines.map((line) => (<p key={line[lang]}>{line[lang]}</p>))}
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState('en');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'de' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Home />} />
            <Route path="/dried" element={<GenericProduct section="dried" />} />
            <Route path="/kits" element={<GenericProduct section="kits" />} />
            <Route path="/substrate" element={<GenericProduct section="substrate" />} />
            <Route path="/frozen" element={<GenericProduct section="frozen" />} />
            <Route path="/about" element={<About />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageContext.Provider>
  );
};

const root = document.getElementById('root');
createRoot(root).render(<App />);
