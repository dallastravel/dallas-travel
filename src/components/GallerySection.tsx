import React, { useState } from 'react';

// Import gambar secara langsung agar aman saat di-build oleh Vite & GitHub Pages
import foto1 from '../assets/images/foto-1.jpeg';
import foto2 from '../assets/images/foto-2.jpeg';
import foto3 from '../assets/images/foto-3.jpeg';
import foto4 from '../assets/images/foto-4.jpeg';
import foto5 from '../assets/images/foto-5.jpeg';
import foto6 from '../assets/images/foto-6.jpeg';
import foto7 from '../assets/images/foto-7.jpeg';
import foto8 from '../assets/images/foto-8.jpeg';
import foto9 from '../assets/images/foto-9.jpeg';
import foto10 from '../assets/images/foto-10.jpeg';
import foto11 from '../assets/images/foto-11.jpeg';
import foto12 from '../assets/images/foto-12.jpeg';
import foto13 from '../assets/images/foto-13.jpeg';
import foto14 from '../assets/images/foto-14.jpeg';
import foto15 from '../assets/images/foto-15.jpeg';
import foto16 from '../assets/images/foto-16.jpeg';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const galleryItems = [
    { id: 1, category: 'makkah', src: foto1, caption: 'Suasana Tawaf Jamaah di Masjidil Haram' },
    { id: 2, category: 'makkah', src: foto2, caption: "Pelaksanaan Sa'i di Shafa dan Marwah" },
    { id: 3, category: 'madinah', src: foto3, caption: 'Ziarah Raudhah di Masjid Nabawi' },
    { id: 4, category: 'madinah', src: foto4, caption: 'Kunjungan Sejarah ke Jabal Uhud' },
    { id: 5, category: 'manasik', src: foto5, caption: 'Manasik Umroh Perdana Calon Jamaah' },
    { id: 6, category: 'manasik', src: foto6, caption: 'Simulasi Tata Cara Ihram & Tawaf' },
    { id: 7, category: 'hotel', src: foto7, caption: 'Akomodasi Hotel Ring Satu Dekat Pelataran' },
    { id: 8, category: 'hotel', src: foto8, caption: 'Layanan Restoran & Menu Nusantara 3x Sehari' },
    { id: 9, category: 'makkah', src: foto9, caption: "Doa Bersama di Depan Ka'bah" },
    { id: 10, category: 'madinah', src: foto10, caption: 'Suasana Halaman Utama Masjid Nabawi' },
    { id: 11, category: 'manasik', src: foto11, caption: 'Pemberian Materi Bimbingan Manasik' },
    { id: 12, category: 'hotel', src: foto12, caption: 'Lobby Hotel dan Area Sambutan Jamaah' },
    { id: 13, category: 'makkah', src: foto13, caption: 'City Tour Napak Tilas Sejarah Makkah' },
    { id: 14, category: 'madinah', src: foto14, caption: 'Kunjungan ke Masjid Quba' },
    { id: 15, category: 'manasik', src: foto15, caption: 'Manasik Akbar dan Pelepasan Jamaah' },
    { id: 16, category: 'makkah', src: foto16, caption: 'Dokumentasi Spesial "My First Umrah"' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeri" className="py-20 bg-gray-900 text-white min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Dokumentasi Perjalanan</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Galeri Momen Berharga Jamaah</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Rekaman kebersamaan, kekhusyukan ibadah, dan kenyamanan fasilitas bersama Dallas Tour & Travel.</p>
        </div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {[
            { id: 'all', label: 'Semua Foto' },
            { id: 'makkah', label: 'Makkah' },
            { id: 'madinah', label: 'Madinah' },
            { id: 'manasik', label: 'Manasik' },
            { id: 'hotel', label: 'Akomodasi & Hotel' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 font-bold' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage({ src: item.src, caption: item.caption })}
              className="overflow-hidden rounded-xl shadow-xl group relative cursor-pointer bg-gray-800 border border-gray-700 hover:border-amber-500/50 transition-all"
            >
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-sm font-medium text-white">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)} 
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-amber-500 transition"
            >
              &times;
            </button>
            <img 
              src={selectedImage.src} 
              alt="Zoomed Gallery" 
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain border border-gray-700" 
            />
            <p className="text-white mt-4 text-base md:text-lg font-medium text-center bg-gray-900/80 px-6 py-2 rounded-full border border-gray-800">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
