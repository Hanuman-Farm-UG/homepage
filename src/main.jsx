import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

const Layout = ({ children }) => (
  <div className="font-sans text-base bg-[#fdf6e3] text-[#2d2d2d]">
    <header className="flex justify-between items-center p-4 bg-[#2f4f4f] text-white">
      <h1 className="text-xl font-bold">Hanuman Farm</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/benefits" className="hover:underline">Health Benefits</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <button className="ml-4">EN | DE</button>
      </nav>
    </header>
    <main className="p-6">{children}</main>
    <footer className="bg-[#eee8d5] text-center py-4 mt-10 text-sm">
      <p>© 2025 Hanuman Farm</p>
      <button className="underline mt-2" onClick={() => alert('Impressum details here')}>Impressum</button>
    </footer>
  </div>
);

const Home = () => (
  <section>
    <h2 className="text-3xl font-semibold mb-4">Cultivate Wellness with Lion’s Mane</h2>
    <p className="mb-4">Welcome to Hanuman Farm. Discover the health benefits of our top-quality Lion’s Mane mushrooms.</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Link to="/dried">Dried Mushrooms</Link>
      <Link to="/kits">Grow Kits</Link>
      <Link to="/substrate">Substrate Boxes</Link>
      <Link to="/frozen">Frozen Fresh Mushrooms</Link>
    </div>
  </section>
);

const DriedMushrooms = () => (
  <section>
    <h2 className="text-2xl font-semibold mb-2">Lion’s Mane Dried Mushrooms</h2>
    <p>Perfect for teas, cooking, or supplements. Long shelf life and easy to use.</p>
    <p className="mt-4 font-semibold">$14.99 – $29.99</p>
    <button className="mt-2 px-4 py-2 bg-[#dc762f] text-white rounded">Add to Cart</button>
  </section>
);

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dried" element={<DriedMushrooms />} />
      </Routes>
    </Layout>
  </Router>
);

const container = document.getElementById('root');
createRoot(container).render(<App />);
