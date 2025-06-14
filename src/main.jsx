import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

const Layout = ({ children }) => (
  <div className="font-sans text-base bg-[#fdf6e3] text-[#2d2d2d] min-h-screen flex flex-col">
    <header className="flex justify-between items-center p-4 bg-[#2f4f4f] text-white">
      <h1 className="text-2xl font-bold">Hanuman Farm</h1>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/benefits" className="hover:underline">Health Benefits</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <button className="ml-4 px-2 py-1 border rounded">EN | DE</button>
      </nav>
    </header>
    <main className="flex-grow p-6">{children}</main>
    <footer className="bg-[#eee8d5] text-center py-4 text-sm">
      <p>© 2025 Hanuman Farm</p>
      <button
        className="underline mt-2"
        onClick={() => alert('Hanuman Farm GmbH, Musterstraße 1, 12345 Berlin, Germany. Email: info@hanumanfarm.de. CEO: John Doe')}
      >
        Impressum
      </button>
    </footer>
  </div>
);

const ProductCard = ({ title, imgSrc, link }) => (
  <Link to={link} className="block border rounded-lg overflow-hidden hover:shadow-lg">
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  </Link>
);

const Home = () => (
  <section>
    <div className="hero bg-green-100 p-8 rounded-lg text-center">
      <h1 className="text-4xl font-bold mb-4">Cultivate Wellness with Lion’s Mane</h1>
      <p className="mb-6 text-lg">
        Discover the cognitive and wellness benefits of our premium Lion’s Mane mushrooms grown sustainably on Hanuman Farm.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/shop" className="px-6 py-2 bg-[#2f4f4f] text-white rounded">Shop Now</Link>
        <Link to="/benefits" className="px-6 py-2 bg-[#dc762f] text-white rounded">Learn More</Link>
      </div>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard title="Dried Mushrooms" imgSrc="/images/dried-thumb.jpg" link="/dried" />
      <ProductCard title="Grow Kits" imgSrc="/images/kits-thumb.jpg" link="/kits" />
      <ProductCard title="Substrate Boxes" imgSrc="/images/substrate-thumb.jpg" link="/substrate" />
      <ProductCard title="Frozen Fresh Mushrooms" imgSrc="/images/frozen-thumb.jpg" link="/frozen" />
    </div>
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
      <blockquote className="border-l-4 border-[#2f4f4f] pl-4 italic mb-4">
        "Since I started using Hanuman Farm's Lion’s Mane, my focus and clarity have improved dramatically!" – Alex J.
      </blockquote>
      <blockquote className="border-l-4 border-[#2f4f4f] pl-4 italic">
        "I love the grow kit. It was so simple to get a fresh harvest at home." – Maria K.
      </blockquote>
    </div>
    <div className="mt-16 bg-[#e8f5e9] p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Health Benefits Snapshot</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-start"><span className="mr-3">🧠</span><div><strong>Neuroprotective</strong> – Supports brain health.</div></li>
        <li className="flex items-start"><span className="mr-3">🛡️</span><div><strong>Immune Support</strong> – Boosts immunity.</div></li>
        <li className="flex items-start"><span className="mr-3">⚡</span><div><strong>Energy & Focus</strong> – Enhances mental clarity.</div></li>
        <li className="flex items-start"><span className="mr-3">🌿</span><div><strong>Anti-inflammatory</strong> – Reduces inflammation.</div></li>
      </ul>
    </div>
    <div className="mt-16 bg-[#f4f4f4] p-6 rounded-lg text-center">
      <h2 className="text-xl font-semibold mb-2">Join Our Newsletter</h2>
      <p className="mb-4">Get a free guide to growing your own mushrooms and exclusive deals.</p>
      <form className="flex justify-center">
        <input type="email" placeholder="Your email" className="p-2 border rounded-l-lg w-64" />
        <button type="submit" className="px-4 bg-[#2f4f4f] text-white rounded-r-lg">Subscribe</button>
      </form>
    </div>
  </section>
);

const Shop = () => (
  <section>
    <h2 className="text-3xl font-semibold mb-6">Shop All Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard title="Dried Mushrooms" imgSrc="/images/dried-thumb.jpg" link="/dried" />
      <ProductCard title="Grow Kits" imgSrc="/images/kits-thumb.jpg" link="/kits" />
      <ProductCard title="Substrate Boxes" imgSrc="/images/substrate-thumb.jpg" link="/substrate" />
      <ProductCard title="Frozen Fresh Mushrooms" imgSrc="/images/frozen-thumb.jpg" link="/frozen" />
    </div>
  </section>
);

const DriedMushrooms = () => (
  <section className="max-w-3xl mx-auto space-y-4">
    <img src="/images/dried-detail.jpg" alt="Dried Mushrooms" className="w-full rounded-lg" />
    <h2 className="text-3xl font-semibold">Lion’s Mane Dried Mushrooms</h2>
    <p>Our dried mushrooms are slow-dried to preserve flavor and nutrients. Perfect for tea, soup, or cooking.</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Available in 50g, 100g, 200g pouches</li>
      <li>12-month shelf life</li>
      <li>100% organic, sustainably sourced</li>
    </ul>
    <p className="text-xl font-bold">$14.99 – $29.99</p>
    <button className="px-6 py-2 bg-[#2f4f4f] text-white rounded">Add to Cart</button>
  </section>
);

const Kits = () => (
  <section className="max-w-3xl mx-auto space-y-4">
    <img src="/images/kits-detail.jpg" alt="Grow Kits" className="w-full rounded-lg" />
    <h2 className="text-3xl font-semibold">Lion’s Mane Grow Kits</h2>
    <p>All-in-one kits include a pre-inoculated substrate block and grow tent—ideal for beginners.</p>
    <ul className="list-disc list-inside space-y-1">
      <li>5kg substrate block</li>
      <li>60x60x120cm grow tent</li>
      <li>Step-by-step instructions</li>
    </ul>
    <p className="text-xl font-bold">$79.99</p>
    <button className="px-6 py-2 bg-[#2f4f4f] text-white rounded">Add to Cart</button>
  </section>
);

const Substrate = () => (
  <section className="max-w-3xl mx-auto space-y-4">
    <img src="/images/substrate-detail.jpg" alt="Substrate Boxes" className="w-full rounded-lg" />
    <h2 className="text-3xl font-semibold">Lion’s Mane Substrate Boxes</h2>
    <p>Refill your tent with nutrient-rich substrate. Cost-effective and eco-friendly.</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Pre-inoculated, ready to fruit</li>
      <li>Minimal setup required</li>
      <li>Plastic-free packaging</li>
    </ul>
    <p className="text-xl font-bold">$39.99</p>
    <button className="px-6 py-2 bg-[#2f4f4f] text-white rounded">Add to Cart</button>
  </section>
);

const Frozen = () => (
  <section className="max-w-3xl mx-auto space-y-4">
    <img src="/images/frozen-detail.jpg" alt="Frozen Fresh Mushrooms" className="w-full rounded-lg" />
    <h2 className="text-3xl font-semibold">Frozen Fresh Lion’s Mane Mushrooms</h2>
    <p>Flash-frozen to preserve peak freshness. Perfect for cooking straight from the bag.</p>
    <ul className="list-disc list-inside space-y-1">
      <li>500g vacuum-sealed packs</li>
      <li>Shipped frozen—schedule at checkout</li>
      <li>No preservatives</li>
    </ul>
    <p className="text-xl font-bold">$34.99</p>
    <button className="px-6 py-2 bg-[#2f4f4f] text-white rounded">Add to Cart</button>
  </section>
);

const About = () => (
  <section className="max-w-3xl mx-auto space-y-4">
    <h2 className="text-3xl font-semibold">About Us</h2>
    <p>Hanuman Farm is a family-run farm dedicated to organic, sustainable Lion’s Mane cultivation. Founded in 2020 with a passion for natural health.</p>
    <img src="/images/farm-detail.jpg" alt="Hanuman Farm" className="w-full rounded-lg" />
  </section>
);

const BenefitsPage = () => (
  <section className="max-w-3xl mx-auto space-y-4">
    <h2 className="text-3xl font-semibold">Health Benefits of Lion’s Mane</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Neuroprotection:</strong> Promotes nerve growth factor and cognitive health.</li>
      <li><strong>Anti-inflammatory:</strong> Reduces inflammation and oxidative stress.</li>
      <li><strong>Immune Modulation:</strong> Strengthens the immune system.</li>
      <li><strong>Mood & Focus:</strong> Aids balanced mood and concentration.</li>
      <li><strong>Digestive Support:</strong> Improves gut health and nutrient absorption.</li>
    </ul>
    <p>For studies, visit <a href="https://www.ncbi.nlm.nih.gov" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">NCBI</a>.</p>
  </section>
);

const FAQ = () => (
  <section className="max-w-3xl mx-auto space-y-4">
    <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
    <details className="border rounded p-4">
      <summary className="font-medium">How do I use dried mushrooms?</summary>
      <p className="mt-2">Steep in hot water for tea, add to dishes, or grind into powder for supplements.</p>
    </details>
    <details className="border rounded p-4">
      <summary className="font-medium">Shipping policy for frozen products?</summary>
      <p className="mt-2">Frozen items ship in insulated packaging with dry ice. Delivery dates shown at checkout.</p>
    </details>
  </section>
);

const Contact = () => (
  <section className="max-w-3xl mx-auto space-y-4">
    <h2 className="text-3xl font-semibold">Contact Us</h2>
    <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
      <label className="block">
        <span>Name</span>
        <input type="text" name="name" required className="mt-1 p-2 border rounded w-full" />
      </label>
      <label className="block">
        <span>Email</span>
        <input type="email" name="email" required className="mt-1 p-2 border rounded w-full" />
      </label>
      <label className="block">
        <span>Message</span>
        <textarea name="message" rows="4" required className="mt-1 p-2 border rounded w-full"></textarea>
      </label>
      <button type="submit" className="px-6 py-2 bg-[#2f4f4f] text-white rounded">Send Message</button>
    </form>
  </section>
);

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dried" element={<DriedMushrooms />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/substrate" element={<Substrate />} />
        <Route path="/frozen" element={<Frozen />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
);

const root = document.getElementById('root');
createRoot(root).render(<App />);
