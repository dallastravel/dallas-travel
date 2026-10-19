import React, { useState } from 'react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const galleryItems = [
    { id: 1, category: 'makkah', src: `${import.meta.env.BASE_URL}assets/images/foto-1.jpeg`, caption: 'Suasana Tawaf Jamaah di Masjidil Haram' },
    { id: 2, category: 'makkah', src: `${import.meta.env.BASE_URL}assets/images/foto-2.jpeg`, caption: "Pelaksanaan Sa'i di Shafa dan Marwah" },
    { id: 3, category: 'madinah', src: `${import.meta.env.BASE_URL}assets/images/foto-3.jpeg`, caption: 'Ziarah Raudhah di Masjid Nabawi' },
    { id: 4, category: 'madinah', src: `${import.meta.env.BASE_URL}assets/images/foto-4.jpeg`, caption: 'Kunjungan Sejarah ke Jabal Uhud' },
    { id: 5, category: 'manasik', src: `${import.meta.env.BASE_URL}assets/images/foto-5.jpeg`, caption: 'Manasik Umroh Perdana Calon Jamaah' },
    { id: 6, category: 'manasik', src: `${import.meta.env.BASE_URL}assets/images/foto-6.jpeg`, caption: 'Simulasi Tata Cara Ihram & Tawaf' },
    { id: 7, category: 'hotel', src: `${import.meta.env.BASE_URL}assets/images/foto-7.jpeg`, caption: 'Akomodasi Hotel Ring Satu Dekat Pelataran' },
    { id: 8, category: 'hotel', src: `${import.meta.env.BASE_URL}assets/images/foto-8.jpeg`, caption: 'Layanan Restoran & Menu Nusantara 3x Sehari' },
    { id: 9, category: 'makkah', src: `${import.meta.env.BASE_URL}assets/images/foto-9.jpeg`, caption: "Doa Bersama di Depan Ka'bah" },
    { id: 10, category: 'madinah', src: `${import.meta.env.BASE_URL}assets/images/foto-10.jpeg`, caption: 'Suasana Halaman Utama Masjid Nabawi' },
    { id: 11, category: 'manasik', src: `${import.meta.env.BASE_URL}assets/images/foto-11.jpeg`, caption: 'Pemberian Materi Bimbingan Manasik' },
    { id: 12, category: 'hotel', src: `${import.meta.env.BASE_URL}assets/images/foto-12.jpeg`, caption: 'Lobby Hotel dan Area Sambutan Jamaah' },
    { id: 13, category: 'makkah', src: `${import.meta.env.BASE_URL}assets/images/foto-13.jpeg`, caption: 'City Tour Napak Tilas Sejarah Makkah' },
    { id: 14, category: 'madinah', src: `${import.meta.env.BASE_URL}assets/images/foto-14.jpeg`, caption: 'Kunjungan ke Masjid Quba' },
    { id: 15, category: 'manasik', src: `${import.meta.env.BASE_URL}assets/images/foto-15.jpeg`, caption: 'Manasik Akbar dan Pelepasan Jamaah' },
    { id: 16, category: 'makkah', src: `${import.meta.env.BASE_URL}assets/images/foto-16.jpeg`, caption: 'Dokumentasi Spesial "My First Umrah"' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeri" className="py-20 bg-gray-900 text-white">
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
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30' 
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
              className="overflow-hidden rounded-xl shadow-xl group relative cursor-pointer bg-gray-800 border border-gray-700"
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