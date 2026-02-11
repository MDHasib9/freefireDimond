import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Diamonds from './pages/Dimonds';     // ← keeping your current spelling
import EvoGuns from './pages/EvoGuns';
import Clothing from './pages/Clothing';
import Cart from './pages/Cart';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="grow bg-[#898989]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diamonds" element={<Diamonds />} />
          <Route path="/evo-guns" element={<EvoGuns />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<OrderSuccess />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;