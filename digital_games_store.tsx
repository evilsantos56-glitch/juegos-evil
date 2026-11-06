import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Key, ShieldCheck, Zap, Globe, Copy, Check, 
  Trash2, Plus, Minus, CreditCard, ChevronRight, Star, Tag, Mail, X, Headphones, AlertCircle
} from 'lucide-react';

const SELLER_EMAIL = 'evilsantos56@gmail.com';

// Mock Game Catalog Data in Spanish with ARS prices
const INITIAL_GAMES = [
  {
    id: 'g1',
    title: 'Cyber Chronicles 2088',
    genre: 'RPG',
    platform: ['PC', 'PlayStation', 'Xbox'],
    price: 65000,
    discountPrice: 32500,
    discountPercent: 50,
    rating: 4.9,
    reviewsCount: 1420,
    featured: true,
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Sumérgete en una metrópolis neón de mundo abierto donde tus mejoras cibernéticas definen tu destino. Experimenta acción de alto octanaje y una historia profunda.',
    features: ['Ray Tracing Activado', 'Soporte 4K Ultra HD', 'Modo Cooperativo Multijugador', 'Más de 100 Horas de Juego'],
    sysReq: {
      os: 'Windows 11 64-bit',
      processor: 'Intel Core i7-12700K / AMD Ryzen 7 7800X3D',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 4070 / AMD RX 7800 XT',
      storage: '85 GB espacio en SSD'
    }
  },
  {
    id: 'g2',
    title: 'Eldritch Horizons',
    genre: 'Acción',
    platform: ['PC', 'PlayStation'],
    price: 78000,
    discountPrice: 54600,
    discountPercent: 30,
    rating: 4.8,
    reviewsCount: 890,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Lucha contra bestias míticas y descubre misterios cósmicos en un reino brutal y hermoso al estilo souls-like.',
    features: ['Combates de Jefes Desafiantes', 'Combate con Espada Fluido', 'Clima Dinámico', 'Juego Cruzado (Cross-play)'],
    sysReq: {
      os: 'Windows 10/11 64-bit',
      processor: 'Intel i5-10400F',
      memory: '12 GB RAM',
      graphics: 'NVIDIA RTX 3060',
      storage: '60 GB SSD'
    }
  },
  {
    id: 'g3',
    title: 'Velocity Apex Racing',
    genre: 'Deportes',
    platform: ['PC', 'Xbox', 'Nintendo Switch'],
    price: 45000,
    discountPrice: 18000,
    discountPercent: 60,
    rating: 4.6,
    reviewsCount: 650,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Siente la emoción extrema de las carreras a hipervelocidad en circuitos internacionales con física en tiempo real y vehículos personalizados.',
    features: ['Más de 200 Hiperautos Licenciados', 'Ligas Clasificatorias Online', 'Soporte para Casco VR'],
    sysReq: {
      os: 'Windows 10 64-bit',
      processor: 'AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GTX 1660 Ti',
      storage: '50 GB'
    }
  },
  {
    id: 'g4',
    title: 'Starlight Tactics: Empire',
    genre: 'Estrategia',
    platform: ['PC'],
    price: 38000,
    discountPrice: 26600,
    discountPercent: 30,
    rating: 4.7,
    reviewsCount: 420,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Comanda armadas espaciales masivas, coloniza sistemas estelares lejanos y participa en guerras tácticas de flotas por turnos.',
    features: ['Combate por Turnos en Hexágonos', 'Soporte para Mods en Workshop', 'IA de Diplomacia Profunda'],
    sysReq: {
      os: 'Windows 10 64-bit',
      processor: 'Intel i3-9100',
      memory: '8 GB RAM',
      graphics: 'GTX 1050 Ti',
      storage: '25 GB'
    }
  },
  {
    id: 'g5',
    title: 'Shadow Realm: Pixel Dungeon',
    genre: 'Indie',
    platform: ['PC', 'Nintendo Switch', 'PlayStation', 'Xbox'],
    price: 22000,
    discountPrice: 11000,
    discountPercent: 50,
    rating: 4.9,
    reviewsCount: 3100,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Un encantador rogue-lite de mazmorras con salas generadas procedimentalmente, cientos de objetos únicos y rejugabilidad infinita.',
    features: ['Estética Pixel Art', 'Banda Sonora Chiptune', 'Más de 100 Objetos Sinérgicos'],
    sysReq: {
      os: 'Windows 7/8/10/11',
      processor: 'Dual Core 2.0 GHz',
      memory: '4 GB RAM',
      graphics: 'Gráficos Integrados',
      storage: '2 GB'
    }
  },
  {
    id: 'g6',
    title: 'Galactic Odyssey: Zero',
    genre: 'Terror',
    platform: ['PC', 'PlayStation'],
    price: 52000,
    discountPrice: 39000,
    discountPercent: 25,
    rating: 4.5,
    reviewsCount: 512,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Sobrevive en una estación espacial abandonada infomada por entes oscuros. Gestión de recursos exigente y atmósfera terrorífica.',
    features: ['Narrativa Ramificada', 'Naves Personalizables', 'Historia Rica y Misiones Secundarias'],
    sysReq: {
      os: 'Windows 10/11',
      processor: 'Ryzen 5 5600',
      memory: '16 GB RAM',
      graphics: 'RTX 3070',
      storage: '70 GB SSD'
    }
  }
];

// ARS Currency Formatter
const formatARS = (amount) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(amount);
};

// Key Generator Helper
const generateLicenseKey = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const block = () => Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `${block()}-${block()}-${block()}-${block()}`;
};

export default function App() {
  // State Management
  const [games] = useState(INITIAL_GAMES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [selectedPlatform, setSelectedPlatform] = useState('Todas');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedGameModal, setSelectedGameModal] = useState(null);
  
  // Checkout & Order Completed States
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mercadopago');
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState(null);
  const [copiedKeyIndex, setCopiedKeyIndex] = useState(null);

  // Cart Logic
  const addToCart = (game) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === game.id);
      if (existing) {
        return prev.map(item => item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...game, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (gameId) => {
    setCart(prev => prev.filter(item => item.id !== gameId));
  };

  const updateQuantity = (gameId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === gameId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const applyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'GAMER10') {
      setDiscountApplied(true);
    } else {
      alert('Código de cupón no válido. Intenta con: GAMER10');
    }
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0);
  const discountAmount = discountApplied ? cartSubtotal * 0.1 : 0;
  const cartTotal = cartSubtotal - discountAmount;

  // Checkout Execution
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!customerEmail || !customerEmail.includes('@')) {
      alert('Por favor ingresa un correo electrónico válido');
      return;
    }

    const completedOrder = cart.map(item => ({
      ...item,
      licenseKeys: Array.from({ length: item.quantity }, () => generateLicenseKey())
    }));

    setPurchasedItems({
      email: customerEmail,
      date: new Date().toLocaleDateString('es-AR'),
      orderNumber: `ARG-${Math.floor(100000 + Math.random() * 900000)}`,
      totalPaid: cartTotal,
      items: completedOrder
    });

    setCart([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedKeyIndex(index);
    setTimeout(() => setCopiedKeyIndex(null), 2000);
  };

  // Filtered Catalog
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          game.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'Todos' || 
                         (selectedGenre === 'Ofertas' ? game.discountPercent >= 40 : game.genre === selectedGenre);
    const matchesPlatform = selectedPlatform === 'Todas' || game.platform.includes(selectedPlatform);
    return matchesSearch && matchesGenre && matchesPlatform;
  });

  const featuredGame = games.find(g => g.featured) || games[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Banner Contact */}
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>Entrega automática de claves digitales las 24 horas</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${SELLER_EMAIL}`} className="hover:underline flex items-center gap-1.5 font-mono">
              <Mail className="w-3.5 h-3.5" />
              Soporte: {SELLER_EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Key className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent">
                EVIL<span className="text-emerald-400">GAMES</span>
              </span>
              <span className="block text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Tienda Digital Argentina</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por título, género o plataforma..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition"
            />
          </div>

          {/* Action Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 p-2.5 rounded-xl transition flex items-center gap-2 group"
            >
              <ShoppingCart className="w-5 h-5 group-hover:text-emerald-400 transition" />
              <span className="text-xs font-bold hidden sm:inline">Carrito</span>
              {cart.length > 0 && (
                <span className="bg-emerald-500 text-slate-950 font-black text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="px-4 pb-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60"
            />
          </div>
        </div>
      </header>

      {/* Hero Showcase Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Hero Left Content */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">
                <Tag className="w-3.5 h-3.5" />
                Destacado de la Semana -50% OFF
              </div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-white">
                {featuredGame.title}
              </h1>
              <p className="text-slate-400 text-sm md:text-base line-clamp-3 leading-relaxed">
                {featuredGame.description}
              </p>

              {/* Price & Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-emerald-400">{formatARS(featuredGame.discountPrice)}</span>
                  <span className="text-lg text-slate-400 line-through">{formatARS(featuredGame.price)}</span>
                  <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded">
                    -{featuredGame.discountPercent}%
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => addToCart(featuredGame)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition active:scale-95 text-sm"
                >
                  <ShoppingCart className="w-4 h-4" /> Comprar Clave Digital
                </button>
                <button
                  onClick={() => setSelectedGameModal(featuredGame)}
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold px-5 py-3 rounded-xl transition text-sm"
                >
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Hero Right Banner Image */}
            <div className="md:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group-hover:border-emerald-500/40 transition duration-500">
                <img 
                  src={featuredGame.bannerImage} 
                  alt={featuredGame.title} 
                  className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs">
                  <span className="bg-slate-950/80 backdrop-blur text-slate-300 px-3 py-1.5 rounded-lg font-mono border border-slate-800">
                    Plataformas: {featuredGame.platform.join(', ')}
                  </span>
                  <span className="flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-500/30 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {featuredGame.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Features Bar */}
      <section className="bg-slate-950 border-b border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-3 p-2">
            <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-slate-200">Entrega Instantánea</span>
              <span className="block text-[11px] text-slate-400">Recibe tu clave al instante</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-slate-200">Garantía 100% Oficial</span>
              <span className="block text-[11px] text-slate-400">Códigos originales</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-2">
            <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-slate-200">Activación Global/LATAM</span>
              <span className="block text-[11px] text-slate-400">Sin bloqueos regionales</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-2">
            <Headphones className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-slate-200">Atención Personalizada</span>
              <span className="block text-[11px] text-slate-400">Soporte directo por email</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-black text-white">Catálogo de Juegos</h2>
            <p className="text-xs text-slate-400 mt-1">Explora nuestras ofertas digitales en Pesos Argentinos</p>
          </div>

          {/* Genre Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {['Todos', 'Acción', 'RPG', 'Estrategia', 'Indie', 'Deportes', 'Terror', 'Ofertas'].map(genre => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap ${
                  selectedGenre === genre 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20' 
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {genre === 'Ofertas' ? '🔥 Ofertas Especiales' : genre}
              </button>
            ))}
          </div>

          {/* Platform Filters */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">Plataforma:</span>
            {['Todas', 'PC', 'PlayStation', 'Xbox', 'Nintendo Switch'].map(platform => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedPlatform === platform
                    ? 'bg-slate-700 text-emerald-400 border border-emerald-500/50'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length === 0 ? (
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center my-8">
            <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-200">No se encontraron juegos</h3>
            <p className="text-xs text-slate-500 mt-1">Prueba cambiando tus términos de búsqueda o filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <div 
                key={game.id}
                className="bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden group hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition duration-300 flex flex-col"
              >
                {/* Cover Image & Discount Badge */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img 
                    src={game.coverImage} 
                    alt={game.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-md shadow-md">
                    -{game.discountPercent}%
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    {game.platform.map(p => (
                      <span key={p} className="bg-slate-950/80 backdrop-blur text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Game Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-semibold text-emerald-400">{game.genre}</span>
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star className="w-3 h-3 fill-amber-400" />
                        {game.rating}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition line-clamp-1">
                      {game.title}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2 mt-1.5 leading-relaxed">
                      {game.description}
                    </p>
                  </div>

                  {/* Footer / Buy Action */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Llave Digital</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-white">{formatARS(game.discountPrice)}</span>
                        <span className="text-xs text-slate-400 line-through">{formatARS(game.price)}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedGameModal(game)}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition"
                        title="Ver detalles"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => addToCart(game)}
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3.5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition active:scale-95 shadow-md shadow-emerald-500/10"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Detail Game Modal */}
      {selectedGameModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full overflow-hidden relative max-h-[90vh] flex flex-col shadow-2xl">
            <button
              onClick={() => setSelectedGameModal(null)}
              className="absolute top-4 right-4 z-10 bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white p-2 rounded-full border border-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-800">
                <img src={selectedGameModal.coverImage} alt={selectedGameModal.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    {selectedGameModal.genre}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Plataformas: {selectedGameModal.platform.join(', ')}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white">{selectedGameModal.title}</h2>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">{selectedGameModal.description}</p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Características Principales</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedGameModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/80 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Requirements */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Requisitos del Sistema (PC)</h4>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5 text-slate-300">
                  <div><span className="text-slate-500">SO:</span> {selectedGameModal.sysReq.os}</div>
                  <div><span className="text-slate-500">Procesador:</span> {selectedGameModal.sysReq.processor}</div>
                  <div><span className="text-slate-500">Memoria:</span> {selectedGameModal.sysReq.memory}</div>
                  <div><span className="text-slate-500">Gráficos:</span> {selectedGameModal.sysReq.graphics}</div>
                  <div><span className="text-slate-500">Almacenamiento:</span> {selectedGameModal.sysReq.storage}</div>
                </div>
              </div>

              {/* Buy Section */}
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">Edición con Clave Digital</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-emerald-400">{formatARS(selectedGameModal.discountPrice)}</span>
                    <span className="text-sm text-slate-400 line-through">{formatARS(selectedGameModal.price)}</span>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-2 py-0.5 rounded">
                      Ahorras {selectedGameModal.discountPercent}%
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    addToCart(selectedGameModal);
                    setSelectedGameModal(null);
                  }}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5" /> Comprar Clave Digital
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
          <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-black text-white">Tu Carrito Digital</h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <ShoppingCart className="w-12 h-12 text-slate-700 mx-auto" />
                  <p className="text-sm font-bold text-slate-400">Tu carrito está vacío</p>
                  <p className="text-xs text-slate-500">¡Explora el catálogo y agrega tus juegos favoritos!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 flex gap-3 items-center">
                      <img src={item.coverImage} alt={item.title} className="w-16 h-16 object-cover rounded-lg shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-white line-clamp-1">{item.title}</h4>
                        <div className="text-xs font-black text-emerald-400 mt-0.5">{formatARS(item.discountPrice)}</div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-slate-900 rounded-lg p-1 border border-slate-800">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-0.5 text-slate-400 hover:text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold px-1.5">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-0.5 text-slate-400 hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-500 hover:text-red-400 transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-6 border-t border-slate-800 space-y-4 mt-6">
                {/* Coupon Input */}
                <form onSubmit={applyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Cupón (ej: GAMER10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                  <button type="submit" className="bg-slate-800 hover:bg-slate-700 text-xs font-bold px-4 rounded-xl transition">
                    Aplicar
                  </button>
                </form>

                {/* Subtotals */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>{formatARS(cartSubtotal)}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Descuento Promo (10%)</span>
                      <span>-{formatARS(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-black text-white pt-2 border-t border-slate-800">
                    <span>Total Final</span>
                    <span className="text-emerald-400">{formatARS(cartTotal)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition active:scale-95"
                >
                  <CreditCard className="w-4 h-4" />
                  Proceder al Pago
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-white mb-1">Finalizar Compra</h3>
            <p className="text-xs text-slate-400 mb-6">Tus llaves digitales se enviarán inmediatamente a tu casilla de correo.</p>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Correo Electrónico para la Entrega
                </label>
                <input
                  type="email"
                  required
                  placeholder="tuemail@ejemplo.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Selecciona Método de Pago Local
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mercadopago', name: 'Mercado Pago' },
                    { id: 'transfer', name: 'Transferencia CBU/CVU' },
                    { id: 'card', name: 'Tarjeta Crédito/Débito' }
                  ].map(method => (
                    <button
                      type="button"
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-3 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center text-center gap-1 ${
                        paymentMethod === method.id 
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' 
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      {method.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Total de Juegos</span>
                  <span>{cart.reduce((a, b) => a + b.quantity, 0)}</span>
                </div>
                <div className="flex justify-between font-black text-sm text-white pt-2 border-t border-slate-800">
                  <span>Total a Pagar</span>
                  <span className="text-emerald-400">{formatARS(cartTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 rounded-xl text-sm transition active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                Pagar y Generar Claves
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Purchased Keys Delivery Success Modal */}
      {purchasedItems && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-xl w-full p-6 space-y-6 relative shadow-2xl my-8">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-black text-white">¡Pago Confirmado!</h3>
              <p className="text-xs text-slate-400">
                Hemos enviado un resumen y comprobante a <span className="text-emerald-400 font-mono">{purchasedItems.email}</span>
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs space-y-2 font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Orden:</span>
                <span className="text-white">{purchasedItems.orderNumber}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Fecha:</span>
                <span className="text-white">{purchasedItems.date}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Vendedor Soporte:</span>
                <span className="text-emerald-400">{SELLER_EMAIL}</span>
              </div>
            </div>

            {/* Keys Listing */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Tus Licencias / Claves Digitales:</h4>
              {purchasedItems.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={item.coverImage} alt={item.title} className="w-10 h-10 object-cover rounded-lg" />
                    <div>
                      <h5 className="text-sm font-bold text-white">{item.title}</h5>
                      <span className="text-[10px] text-slate-400">Plataforma: {item.platform.join(', ')}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-900">
                    {item.licenseKeys.map((key, keyIdx) => {
                      const globalIdx = `${itemIdx}-${keyIdx}`;
                      return (
                        <div key={keyIdx} className="flex items-center justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800 font-mono text-xs">
                          <span className="text-emerald-400 font-bold tracking-wider">{key}</span>
                          <button
                            onClick={() => copyToClipboard(key, globalIdx)}
                            className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded-lg text-[11px] transition"
                          >
                            {copiedKeyIndex === globalIdx ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" /> ¡Copiado!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" /> Copiar
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPurchasedItems(null)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-sm transition"
            >
              Cerrar y Volver a la Tienda
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 mt-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Key className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-lg font-black text-white">EVIL GAMES</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Tu tienda de confianza para la compra de llaves digitales oficiales de videojuegos en Argentina.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Contacto Directo</h4>
            <ul className="space-y-2 font-mono">
              <li>
                <a href={`mailto:${SELLER_EMAIL}`} className="hover:text-emerald-400 transition flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  {SELLER_EMAIL}
                </a>
              </li>
              <li className="text-slate-500">Atención al cliente: 24/7</li>
            </ul>
          </div>

          {/* Quick FAQ Section */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Preguntas Frecuentes</h4>
            {[
              {
                q: "¿Qué tan rápido recibiré mi clave digital?",
                a: "¡La entrega es instantánea! Una vez completado el pago, tu código de activación aparecerá directamente en pantalla y se enviará a tu correo."
              },
              {
                q: "¿Qué medios de pago aceptan en Argentina?",
                a: "Aceptamos Mercado Pago, transferencias por CBU/CVU y tarjetas de crédito o débito de todos los bancos locales."
              },
              {
                q: "¿Las claves de los juegos son oficiales y válidas?",
                a: `Sí, todas las claves son 100% originales y legítimas. Para soporte o consultas específicas escribe a ${SELLER_EMAIL}.`
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-950/60 rounded-xl border border-slate-800/80 overflow-hidden">
                <details className="group p-3">
                  <summary className="font-bold text-slate-300 cursor-pointer flex justify-between items-center text-xs">
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-slate-500 group-open:rotate-90 transition" />
                  </summary>
                  <p className="mt-2 text-slate-400 text-xs leading-relaxed">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-900 py-4 text-center text-slate-600">
          <p>© {new Date().getFullYear()} EVIL GAMES. Todos los derechos reservados. Contacto: {SELLER_EMAIL}</p>
        </div>
      </footer>
    </div>
  );
}