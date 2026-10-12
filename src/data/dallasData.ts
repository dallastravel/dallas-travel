import { PackageTier, DepartureSchedule, BranchOffice, SpiritualLeader, TrackingRecord } from '../types';

export const COMPANY_INFO = {
  legalName: 'PT. DELTA LARAS WISATA',
  brandName: 'DALLAS TOUR & TRAVEL',
  tagline: 'Pintu Menuju Baitullah · Journey of Faith, A Better You',
  subTagline: 'Ingat Umrah, Ingat Dallas',
  motto: 'Keberkahan Setiap Langkah Menuju Ridha Allah',
  foundedYear: 2013,
  address: 'BINAWAN BUILDING Lobby 3 Lantai LG No. 01-03, Jl. Kalibata Raya No. 25-30 Jakarta Timur, DKI Jakarta',
  phone: '021 - 8087 8321',
  fax: '021 - 8090 215',
  email: 'info@dallastourtravel.com',
  website: 'www.dallastourtravel.com',
  whatsapp: '+6281280878321',
  vision: 'Menjadi Penyelenggara IBADAH UMROH yang Handal dan Amanah.',
  mission: 'Meningkatkan Kualitas dan Profesionalitas Kerja Menuju Terciptanya Pelayanan dan Bimbingan Ibadah yang Optimal Bagi Jamaah Umroh sesuai dengan Prinsip Ajaran Islam dan Ketentuan Perundang-Undangan Yang Berlaku.',
  legalities: [
    {
      title: 'SK KEMENAG RI PPIU',
      number: 'No. 64 Tahun 2020',
      description: 'Penyelenggara Perjalanan Ibadah Umroh Resmi Terdaftar Kementerian Agama RI'
    },
    {
      title: 'SK KEMENAG RI PIHK',
      number: 'No. 690 Tahun 2020',
      description: 'Penyelenggara Ibadah Haji Khusus Resmi Terdaftar Kementerian Agama RI'
    },
    {
      title: 'AKREDITASI KAN',
      number: 'Sertifikasi Sistem Mutu',
      description: 'Komite Akreditasi Nasional untuk Penjaminan Mutu Layanan Ibadah'
    },
    {
      title: 'IATA ACCREDITED AGENT',
      number: 'International Certification',
      description: 'Sertifikasi Asosiasi Maskapai Penerbangan Internasional'
    },
    {
      title: 'ANGGOTA RESMI AMPHURI',
      number: 'Keanggotaan Utama',
      description: 'Asosiasi Muslim Penyelenggara Haji dan Umrah Republik Indonesia'
    },
    {
      title: 'ANGGOTA RESMI ASITA',
      number: 'Keanggotaan Industri Wisata',
      description: 'Association of The Indonesian Tours and Travel Agencies'
    }
  ],
  quotes: [
    {
      quote: "Orang yang suka berkata jujur akan mendapatkan tiga keuntungan, yaitu kepercayaan, cinta dan rasa hormat.",
      author: "Sayyidina Ali bin Abi Thalib RA"
    },
    {
      quote: "Perjalanan yang baik lahir dari kepercayaan, dan kepercayaan tumbuh dari pelayanan yang tulus.",
      author: "Buya Hamka"
    },
    {
      quote: "Rasulullah sangat piawai memperingati manusia. Bahwa lawan Rohani mereka bukan musuh yang memakai senjata tajam, tetapi Hawa nafsu yang melekat di dalam diri...",
      author: "Pesan Ruhani Perjalanan"
    }
  ]
};

export const LEADERSHIP = {
  commissioner: {
    name: 'H. Ujang Ridwan Abdullah',
    role: 'Komisaris Utama PT. Delta Laras Wisata',
    speech: `Puji dan syukur saya panjatkan kepada Allah SWT atas Rahmat dan Karunia-Nya, serta Sholawat dan Salam senantiasa tercurah kepada Tauladan Mulia Nabi Muhammad SAW. Saya sebagai Komisaris Utama PT. Delta Laras Wisata atau Dallas Tour and Travel mengucapkan terima kasih kepada para Jamaah Umroh maupun Haji Khusus yang telah mempercayakan perjalanan ibadah Umroh maupun Haji Khusus kepada Dallas Tour & Travel.

Indonesia merupakan negara muslim terbesar di dunia, sekitar 80% penduduk Indonesia adalah muslim. Masyarakat muslim Indonesia melaksanakan Umrah dan Haji menuju Masjidil Haram di Arab Saudi melalui biro perjalanan yang mempunyai izin resmi khusus menyelenggarakan jasa perjalanan umrah dan haji yang banyak tersebar di Indonesia. Mereka menyediakan berbagai fasilitas yang memudahkan jamaah sehingga konsentrasi jamaah hanya pada pelaksanaan ibadah umrah saja di Masjidil Haram di Mekkah dan Madinah.

Dallas Travel hadir sebagai Penyelenggara Umroh yang Amanah dan berkomitmen memberikan layanan Umroh yang Aman dan Nyaman didukung oleh karyawan kami yang berdedikasi tinggi, Amanah, bekerja keras dan semangat untuk menjadi Travel yang Handal dan Amanah.

Komitmen kami adalah memahami dengan baik kebutuhan para Jamaah dalam melaksanakan Ibadah Umroh maupun Haji Khusus. Kami bermitra baik dengan provider yang kompeten dan berpengalaman dalam menyediakan akomodasi & hotel di Arab Saudi, penyediaan tiket airline, Bank maupun lembaga keuangan Syariah yang mendukung pelaksanaan ibadah Umroh maupun Haji Khusus dengan Amanah, Aman dan Nyaman.`
  },
  director: {
    name: 'Sandi Muhammad Ridwan',
    role: 'Direktur Utama PT. Delta Laras Wisata',
    speech: `Dallas Tour & Travel menjamin pelayanan yang handal dan amanah, dengan Tour Leader atau Pembimbing yang kompeten, berpengalaman, dan bersertifikat resmi. Kami bermitra dengan Perusahaan Airline, Lembaga Keuangan Syariah terkemuka di Indonesia, dan Wholesaler Perusahaan Hotel & akomodasi di Arab Saudi untuk menghadirkan ketenangan lahir batin bagi seluruh tamu-tamu Allah SWT.`
  }
};

export const SERVICES = [
  {
    id: 'haji-plus',
    title: 'Haji Plus & Haji Khusus',
    subtitle: 'Solusi Perjalanan Suci Tanpa Antrean Panjang',
    description: 'Program Haji Khusus kuota resmi Kemenag RI, Haji Furoda Mujamalah, Semi Furoda, dan Haji Smart dengan pendampingan bimbingan intensif sesuai Sunnah serta hotel ring satu di Makkah & Madinah.',
    icon: 'Crown'
  },
  {
    id: 'umroh-reguler-wisata',
    title: 'Umroh Reguler & Plus Wisata',
    subtitle: 'Kenyamanan Ibadah Khusyuk & Edukasi Sejarah',
    description: 'Paket ibadah Umroh 9 Hari, Arbain 15 Hari di Madinah, serta opsi Umroh Plus Wisata Religi (Turki, Dubai, Kairo Mesir, Masjid Al-Aqsa) dengan jadwal pasti berangkat dan bimbingan manasik komprehensif.',
    icon: 'Compass'
  },
  {
    id: 'land-arrangement',
    title: 'Land Arrangement (Jeddah to Jeddah)',
    subtitle: 'Layanan Pengaturan Darat Terlengkap di Tanah Suci',
    description: 'Penyediaan akomodasi hotel Makkah & Madinah, armada bus VIP full AC mutakhir, tim muthawwif/guide berpengalaman, handling bandara VIP, dan ziarah napak tilas sejarah Islam.',
    icon: 'Bus'
  },
  {
    id: 'ticketing',
    title: 'Ticketing Airlines Internasional',
    subtitle: 'Tiket Pesawat Resmi Domestik & Internasional',
    description: 'Pemesanan dan pemrosesan tiket pesawat maskapai ternama (Garuda Indonesia, Saudia Airlines, Emirates, Turkish Airlines) dengan alokasi grup block seat dan harga kompetitif.',
    icon: 'Plane'
  },
  {
    id: 'provider-visa',
    title: 'Provider Visa Umroh & Haji',
    subtitle: 'Akses Resmi Pengurusan Visa Cepat & Legal',
    description: 'Sebagai provider visa terakreditasi, Dallas memproses E-Visa Umroh dan Haji langsung terhubung dengan sistem Kementerian Haji & Umrah Arab Saudi (MoFA) secara aman dan transparan.',
    icon: 'FileBadge'
  },
  {
    id: 'wisata-halal',
    title: 'Wisata Halal Mancanegara',
    subtitle: 'Jelajah Dunia dengan Nilai Islami Autentik',
    description: 'Program wisata edukasi dan sejarah Islam domestik maupun mancanegara dengan kepastian kuliner halal 100%, waktu shalat yang terjaga, dan pemandu berpengalaman.',
    icon: 'Globe'
  }
];

export const PACKAGES: PackageTier[] = [
  {
    id: 'platinum-9d',
    name: 'Paket Umroh Platinum 9 Hari',
    tier: 'platinum',
    stars: 5,
    duration: '9 Hari',
    makkahHotel: 'Pullman Zam-Zam / Royal Dar Al Eiman / Setaraf (Bintang 5)',
    makkahNights: 4,
    madinahHotel: 'Rawdah Royal Inn / Nokhba Royal Inn / Setaraf (Bintang 5)',
    madinahNights: 3,
    quadPrice: 38500000,
    triplePrice: 40500000,
    doublePrice: 43500000,
    currency: 'IDR',
    featured: true,
    description: 'Layanan VVIP eksekutif dengan hotel persis di pelataran Masjidil Haram dan Masjid Nabawi, kenyamanan ekstra tanpa lelah berjalan kaki.',
    highlights: [
      'Hotel Bintang 5 di pelataran utama (Zero Distance ke Ka\'bah)',
      'Penerbangan langsung (Direct Flight) Garuda Indonesia / Saudia',
      'Buffet Dining Masakan Indonesia & Internasional di Restoran Bintang 5',
      'Tasreh Raudhah As-Syarifah diprioritaskan',
      'Exclusive Handling & Lounge Bandara Internasional'
    ]
  },
  {
    id: 'gold-9d',
    name: 'Paket Umroh Gold 4★ (9 Hari)',
    tier: 'gold',
    stars: 4,
    duration: '9 Hari',
    makkahHotel: 'Elaf Mashaer / Anjum / Makareem Ajyad / Setaraf (Bintang 4)',
    makkahNights: 4,
    madinahHotel: 'Nozol Royal Inn / Emaar Royal / Setaraf (Bintang 4)',
    madinahNights: 3,
    quadPrice: 32500000,
    triplePrice: 34500000,
    doublePrice: 36900000,
    currency: 'IDR',
    featured: false,
    description: 'Kombinasi sempurna antara kenyamanan hotel bintang 4 strategis, bimbingan ustadz berpengalaman, dan harga yang sangat rasional.',
    highlights: [
      'Hotel Bintang 4 Ring Satu Makkah & Madinah (Jalan kaki nyaman)',
      'Tiket PP Garuda Indonesia / Saudia Airlines',
      'Makan 3x sehari full board menu nusantara',
      'City Tour Kota Suci Makkah, Madinah & Jeddah',
      'Perlengkapan umrah koper fiber premium'
    ]
  },
  {
    id: 'silver-9d',
    name: 'Paket Umroh Silver 3★ (9 Hari)',
    tier: 'silver',
    stars: 3,
    duration: '9 Hari',
    makkahHotel: 'Emaar Group / Final Rehab / Alrayya Grand / Setaraf (Bintang 3)',
    makkahNights: 4,
    madinahHotel: 'ODST / Durrat Aleiman / Dyar Aleiman / Setaraf (Bintang 3)',
    madinahNights: 3,
    quadPrice: 28900000,
    triplePrice: 30500000,
    doublePrice: 32500000,
    currency: 'IDR',
    featured: false,
    description: 'Solusi ibadah umroh hemat berkualitas dengan kepastian izin Kemenag RI, fasilitas higienis, dan pendampingan muthawwif ramah.',
    highlights: [
      'Hotel Bintang 3 Nyaman & Dekat Fasilitas Umum',
      'Fasilitas Bus Full AC selama ziarah dan transfer',
      'Menu masakan khas nusantara 3x sehari',
      'Bimbingan manasik sebelum keberangkatan',
      'Air Zamzam resmi sesuai ketentuan'
    ]
  },
  {
    id: 'arbain-15d',
    name: 'Paket Umroh Arbain 15 Hari',
    tier: 'gold',
    stars: 4,
    duration: '15 Hari',
    makkahHotel: 'Elaf Mashaer / Makareem Ajyad (Bintang 4)',
    makkahNights: 6,
    madinahHotel: 'Nozol Royal Inn / Setaraf (Bintang 4)',
    madinahNights: 8,
    quadPrice: 39500000,
    triplePrice: 42000000,
    doublePrice: 45000000,
    currency: 'IDR',
    featured: false,
    description: 'Ibadah Shalat 40 Waktu berjamaah tanpa putus di Masjid Nabawi Madinah Munawwarah, mendulang pahala tak terhingga di Tanah Suci.',
    highlights: [
      'Durasi 8 Hari di Madinah untuk Ibadah Sholat Arbain',
      '6 Hari Ibadah Khusyuk di Makkah Al-Mukarramah',
      'Kajian rutin Sirah Nabawiyah & Fiqih Ibadah setiap malam',
      'Ziarah komprehensif ke situs bersejarah Islam',
      'Air Zamzam kemasan resmi'
    ]
  },
  {
    id: 'haji-furoda',
    name: 'Paket Haji Khusus / Furoda Mujamalah',
    tier: 'platinum',
    stars: 5,
    duration: '25-30 Hari',
    makkahHotel: 'Pullman Zam-Zam / Fairmont Makkah Clock Royal Tower (Bintang 5)',
    makkahNights: 12,
    madinahHotel: 'Rawdah Royal Inn / Oberoi Madinah (Bintang 5)',
    madinahNights: 8,
    quadPrice: 285000000,
    triplePrice: 310000000,
    doublePrice: 345000000,
    currency: 'IDR',
    featured: true,
    description: 'Berangkat Haji di tahun yang sama dengan Visa Haji Mujamalah resmi Kerajaan Arab Saudi, Maktab VIP ber-AC di Arafah & Mina.',
    highlights: [
      'Visa Haji Resmi (Tanpa Antre Bertahun-tahun)',
      'Tenda Maktab VIP Arafah & Mina Ber-AC dengan Kasur Nyaman',
      'Hotel Bintang 5 Transit dan Ring Satu Ka\'bah',
      'Bimbingan Ibadah oleh Ulama & Dokter Pendamping 24 Jam',
      'Layanan Kereta Cepat Haramain & Ziarah Lengkap'
    ]
  }
];

export const INCLUSIONS = [
  'Tiket Pesawat PP Kelas Ekonomi (Garuda Indonesia / Saudia Airlines)',
  'Visa Umroh Resmi MoFA Arab Saudi',
  'Hotel Makkah & Madinah sesuai paket pilihan',
  'Makan 3x sehari buffet (Menu autentik cita rasa Indonesia)',
  'Transportasi Bus Eksekutif Full AC selama di Arab Saudi',
  'Ziarah Makkah, Madinah dan City Tour Jeddah',
  'Perlengkapan Ibadah Umroh Eksklusif, Airport Handling & Lounge',
  'Air Zamzam resmi (sesuai regulasi penerbangan Saudi)'
];

export const EXCLUSIONS = [
  'Transportasi dan Akomodasi dari domisili asal ke Bandara Soekarno-Hatta Jakarta',
  'Biaya pengurusan paspor, kartu kuning meningitis / biometrik visa mandiri',
  'Pengeluaran pribadi jamaah (telepon internasional, laundry hotel, room service, dll.)',
  'Biaya kelebihan bagasi maskapai (excess baggage)',
  'Acara tour tambahan di luar program yang tercantum',
  'Tambahan biaya visa progresif apabila diberlakukan regulasi pemerintah Saudi'
];

export const PACKAGE_COMPARISON = [
  { feature: 'Standar Akomodasi Hotel', packageA: 'Hotel Bintang 3-4 (Jarak wajar)', packageB: 'Hotel Bintang 4-5 Premium (Depan Pelataran)' },
  { feature: 'Transportasi Selama Ibadah', packageA: 'Bus Pariwisata Standard AC', packageB: 'Bus VIP Eksekutif Full AC Mutakhir' },
  { feature: 'Visa & Administrasi Resmi', packageA: 'Termasuk Visa Umroh', packageB: 'Termasuk Visa Umroh + Fast-track' },
  { feature: 'Bimbingan Manasik', packageA: 'Manasik Teori di Tanah Air', packageB: 'Manasik Teori + Simulasi Praktik + Kajian Intensif' },
  { feature: 'Pembimbing Ibadah (Muthawwif)', packageA: 'Ustadz Bersertifikat', packageB: 'Ulama Senior & Pembimbing Manasik Kemenag' },
  { feature: 'Ziarah & City Tour', packageA: 'Ziarah Pokok Makkah & Madinah', packageB: 'Ziarah Lengkap + Taif / Museum Wahyu / Jeddah City Tour' },
  { feature: 'Travel Kit Perlengkapan', packageA: 'Koper Standard & Kain Ihram/Mukena', packageB: 'Graduation Umrah Kit & Koper Fiber Hard-shell' },
  { feature: 'Dokumentasi & Kenangan', packageA: 'Dokumentasi Grup', packageB: 'Fotografer Khusus, Jurnal Umrah & Album Kenangan' },
  { feature: 'Layanan Makanan (Catering)', packageA: 'Prasmanan Menu Indonesia', packageB: 'VIP Buffet Menu Indonesia & Timur Tengah' },
  { feature: 'Family Experience Program', packageA: 'Bimbingan Reguler', packageB: 'Pendampingan Khusus Lansia, Anak & Keluarga' }
];

export const SPIRITUAL_LEADERS: SpiritualLeader[] = [
  {
    name: 'KH. Nimat Rahmatillah',
    role: 'Dewan Pembimbing Utama',
    specialization: 'Fiqih Ibadah Haji & Tafsir Al-Quran'
  },
  {
    name: 'Ust. H. Kamaluddin Sofyan Tsauri',
    role: 'Pembimbing Ibadah Senior',
    specialization: 'Tahsin & Bimbingan Doa Tawaf / Sa\'i'
  },
  {
    name: 'Ust. H. Ahmad Burhanuddin Arridwani',
    role: 'Pembimbing Ibadah & Manasik',
    specialization: 'Sejarah Islam & Sirah Nabawiyah'
  },
  {
    name: 'Ust. H. Abdurrahman',
    role: 'Pembimbing Ibadah',
    specialization: 'Bimbingan Ruhani & Tadabbur Tanah Suci'
  },
  {
    name: 'Ust. H. M. Zein Fitri',
    role: 'Pembimbing Bersertifikat Kemenag RI',
    certification: 'No. B.15.106/DJ.III/PH.01/02/2018',
    specialization: 'Manasik Haji Profesional Kementerian Agama'
  },
  {
    name: 'Ust. H. Endang Saepuloh',
    role: 'Pembimbing Ibadah & Mutawwif',
    specialization: 'Pendampingan Ziarah Napak Tilas Rasulullah'
  },
  {
    name: 'Ust. H. Falahudin Alhudry',
    role: 'Pembimbing Ibadah',
    specialization: 'Tarbiyah & Kajian Khusyuk Umrah'
  },
  {
    name: 'KH. DR. Deddy Soedy M.Si',
    role: 'Konsultan Spiritual & Pembimbing Tamu Kehormatan',
    specialization: 'Kajian Peradaban Islam & Tazkiyatun Nafs'
  },
  {
    name: 'Dr. Imbar Qemar Gazali, MH.Kes',
    role: 'Ketua Tim Kesehatan Jamaah',
    certification: 'Ketua IDI Tangerang Selatan Periode 2015 - 2018',
    specialization: 'Manajemen Kesehatan & Keselamatan Jamaah Lansia'
  }
];

export const BRANCH_OFFICES: BranchOffice[] = [
  { id: 1, name: 'Cabang Kota Sukabumi', city: 'Sukabumi', region: 'Jawa Barat', address: 'Jl. R.E. Martadinata No. 42, Kota Sukabumi', phone: '0266-221890', whatsapp: '+6281280878321', manager: 'Ust. Ridwan Fauzi' },
  { id: 2, name: 'Cabang Bandung - Kota Soreang', city: 'Soreang, Bandung', region: 'Jawa Barat', address: 'Jl. Raya Soreang No. 88, Kab. Bandung', phone: '022-589211', whatsapp: '+6281280878321', manager: 'H. Asep Kurnia' },
  { id: 3, name: 'Cabang Bandung - Banjaran', city: 'Banjaran, Bandung', region: 'Jawa Barat', address: 'Jl. Raya Banjaran No. 105, Kab. Bandung', phone: '022-594032', whatsapp: '+6281280878321', manager: 'Ibu Hj. Nurlaila' },
  { id: 4, name: 'Cabang Bandung - Arcamanik', city: 'Arcamanik, Bandung', region: 'Jawa Barat', address: 'Jl. Pacuan Kuda No. 16, Arcamanik, Kota Bandung', phone: '022-720199', whatsapp: '+6281280878321', manager: 'Ust. Dani Rahman' },
  { id: 5, name: 'Cabang Bandung - Soekarno-Hatta Buah Batu', city: 'Buah Batu, Bandung', region: 'Jawa Barat', address: 'Komplek Metro Indah Mall, Jl. Soekarno-Hatta No. 590', phone: '022-756123', whatsapp: '+6281280878321', manager: 'H. Dede Sulaeman' },
  { id: 6, name: 'Cabang Utama Kota Bandung', city: 'Kota Bandung', region: 'Jawa Barat', address: 'Jl. Asia Afrika No. 120, Kota Bandung', phone: '022-423588', whatsapp: '+6281280878321', manager: 'Drs. H. Mulyadi' },
  { id: 7, name: 'Cabang Bandung - Kota Cimahi', city: 'Cimahi', region: 'Jawa Barat', address: 'Jl. Amir Machmud No. 312, Kota Cimahi', phone: '022-665190', whatsapp: '+6281280878321', manager: 'Ust. Yusuf Mansur' },
  { id: 8, name: 'Cabang Banten - Kota Cilegon', city: 'Cilegon', region: 'Jabodetabek', address: 'Jl. Ahmad Yani No. 55, Kota Cilegon, Banten', phone: '0254-389100', whatsapp: '+6281280878321', manager: 'H. Tb. Fachruddin' },
  { id: 9, name: 'Cabang Bekasi - Pondok Gede', city: 'Pondok Gede, Bekasi', region: 'Jabodetabek', address: 'Jl. Raya Pondok Gede No. 28, Kota Bekasi', phone: '021-849921', whatsapp: '+6281280878321', manager: 'Ust. H. Syarif' },
  { id: 10, name: 'Cabang Utama Kota Bekasi', city: 'Kota Bekasi', region: 'Jabodetabek', address: 'Ruko Sinpasa Commercial Blok A-12, Summarecon Bekasi', phone: '021-295712', whatsapp: '+6281280878321', manager: 'Hj. Siti Rohmah' },
  { id: 11, name: 'Cabang Ciamis - Banjar', city: 'Banjar / Ciamis', region: 'Jawa Barat', address: 'Jl. Letjen Suwarto No. 18, Banjar, Ciamis, Jawa Barat', phone: '0265-741289', whatsapp: '+6281280878321', manager: 'Ust. Agus Supriatna' },
  { id: 12, name: 'Cabang Cikarang 1', city: 'Cikarang Barat, Bekasi', region: 'Jabodetabek', address: 'Jl. Cikarang-Cibarusah No. 45, Kab. Bekasi', phone: '021-898322', whatsapp: '+6281280878321', manager: 'H. Bambang S.' },
  { id: 13, name: 'Cabang Cikarang 2', city: 'Cikarang Pusat, Bekasi', region: 'Jabodetabek', address: 'Komplek Delta Silicon, Cikarang Pusat, Kab. Bekasi', phone: '021-899014', whatsapp: '+6281280878321', manager: 'Ibu Rina Marlina' },
  { id: 14, name: 'Cabang Depok', city: 'Kota Depok', region: 'Jabodetabek', address: 'Jl. Margonda Raya No. 240, Depok, Jawa Barat', phone: '021-772091', whatsapp: '+6281280878321', manager: 'Ust. H. Fauzi' },
  { id: 15, name: 'Kantor Pusat Resmi DKI Jakarta', city: 'Jakarta Timur', region: 'Jabodetabek', address: 'BINAWAN BUILDING Lobby 3 Lt. LG No. 01-03, Jl. Kalibata Raya No. 25-30 Jakarta Timur', phone: '021-80878321', whatsapp: '+6281280878321', manager: 'Head Office Team' },
  { id: 16, name: 'Cabang Garut 1 - Kota Garut', city: 'Kota Garut', region: 'Jawa Barat', address: 'Jl. Cimanuk No. 88, Tarogong Kidul, Garut', phone: '0262-234901', whatsapp: '+6281280878321', manager: 'Ust. H. Deden' },
  { id: 17, name: 'Cabang Garut 2', city: 'Garut', region: 'Jawa Barat', address: 'Jl. Pramuka No. 15, Garut Kota, Jawa Barat', phone: '0262-235123', whatsapp: '+6281280878321', manager: 'Ibu Hj. Elis' },
  { id: 18, name: 'Cabang Garut Selatan', city: 'Garut Selatan', region: 'Jawa Barat', address: 'Jl. Raya Pameungpeuk No. 34, Garut Selatan', phone: '0262-521190', whatsapp: '+6281280878321', manager: 'Ust. Wildan' },
  { id: 19, name: 'Cabang Balikpapan', city: 'Balikpapan', region: 'Luar Jawa', address: 'Jl. Jenderal Sudirman No. 78, Klandasan, Balikpapan, Kaltim', phone: '0542-732910', whatsapp: '+6281280878321', manager: 'H. Ilham Saputra' },
  { id: 20, name: 'Cabang Padang', city: 'Padang', region: 'Luar Jawa', address: 'Jl. Khatib Sulaiman No. 50, Padang Barat, Sumatera Barat', phone: '0751-443900', whatsapp: '+6281280878321', manager: 'Ust. H. Fachrul' },
  { id: 21, name: 'Cabang Gorontalo', city: 'Kota Gorontalo', region: 'Luar Jawa', address: 'Jl. Nani Wartabone No. 112, Kota Gorontalo, Sulawesi', phone: '0435-829102', whatsapp: '+6281280878321', manager: 'H. Ruslan Habibie' }
];

export const DEPARTURE_SCHEDULES: DepartureSchedule[] = [
  {
    id: 'SCH-2025-01',
    date: '15 November 2025',
    program: 'Umroh Reguler 9 Hari (Platinum 5★)',
    tier: 'Platinum',
    airline: 'Garuda Indonesia (Direct CGK - JED)',
    flightRoute: 'Jakarta (CGK) -> Jeddah (JED)',
    totalSeats: 45,
    bookedSeats: 39,
    priceStartFrom: 38500000,
    status: 'Hampir Penuh',
    leadUstadz: 'Ust. H. M. Zein Fitri'
  },
  {
    id: 'SCH-2025-02',
    date: '28 November 2025',
    program: 'Umroh Reguler 9 Hari (Gold 4★)',
    tier: 'Gold',
    airline: 'Saudia Airlines (Direct CGK - MED)',
    flightRoute: 'Jakarta (CGK) -> Madinah (MED)',
    totalSeats: 45,
    bookedSeats: 28,
    priceStartFrom: 32500000,
    status: 'Tersedia',
    leadUstadz: 'KH. Nimat Rahmatillah'
  },
  {
    id: 'SCH-2025-03',
    date: '10 Desember 2025',
    program: 'Umroh Liburan Akhir Tahun 9 Hari (Gold 4★)',
    tier: 'Gold',
    airline: 'Garuda Indonesia (Direct CGK - JED)',
    flightRoute: 'Jakarta (CGK) -> Jeddah (JED)',
    totalSeats: 50,
    bookedSeats: 48,
    priceStartFrom: 34500000,
    status: 'Hampir Penuh',
    leadUstadz: 'Ust. H. Kamaluddin Sofyan Tsauri'
  },
  {
    id: 'SCH-2026-01',
    date: '12 Januari 2026',
    program: 'Umroh Arbain 15 Hari di Madinah',
    tier: 'Gold',
    airline: 'Saudia Airlines (Direct CGK - MED)',
    flightRoute: 'Jakarta (CGK) -> Madinah (MED)',
    totalSeats: 40,
    bookedSeats: 22,
    priceStartFrom: 39500000,
    status: 'Tersedia',
    leadUstadz: 'Ust. H. Ahmad Burhanuddin'
  },
  {
    id: 'SCH-2026-02',
    date: '24 Januari 2026',
    program: 'Umroh Reguler Silver Hemat (9 Hari)',
    tier: 'Silver',
    airline: 'Saudia Airlines (Direct CGK - JED)',
    flightRoute: 'Jakarta (CGK) -> Jeddah (JED)',
    totalSeats: 45,
    bookedSeats: 15,
    priceStartFrom: 28900000,
    status: 'Tersedia',
    leadUstadz: 'Ust. H. Endang Saepuloh'
  },
  {
    id: 'SCH-2026-03',
    date: '18 Februari 2026',
    program: 'Umroh Syaban Menjelang Ramadhan (Platinum 5★)',
    tier: 'Platinum',
    airline: 'Garuda Indonesia (Direct CGK - MED)',
    flightRoute: 'Jakarta (CGK) -> Madinah (MED)',
    totalSeats: 45,
    bookedSeats: 42,
    priceStartFrom: 41000000,
    status: 'Hampir Penuh',
    leadUstadz: 'KH. DR. Deddy Soedy M.Si'
  },
  {
    id: 'SCH-2026-04',
    date: '15 Maret 2026',
    program: 'Umroh Awal Ramadhan Berkah (9 Hari)',
    tier: 'Platinum',
    airline: 'Garuda Indonesia (Direct CGK - JED)',
    flightRoute: 'Jakarta (CGK) -> Jeddah (JED)',
    totalSeats: 45,
    bookedSeats: 45,
    priceStartFrom: 47500000,
    status: 'Penuh',
    leadUstadz: 'KH. Nimat Rahmatillah'
  },
  {
    id: 'SCH-2026-05',
    date: 'Mei 2026 (Musim Haji)',
    program: 'Haji Khusus Furoda Mujamalah VVIP (25 Hari)',
    tier: 'Platinum',
    airline: 'Saudia Airlines (VVIP Direct)',
    flightRoute: 'Jakarta (CGK) -> Jeddah (JED)',
    totalSeats: 30,
    bookedSeats: 21,
    priceStartFrom: 285000000,
    status: 'Tersedia',
    leadUstadz: 'Dewan Syariah Dallas & Tim Medis'
  }
];

export const MOCK_TRACKING_DATA: Record<string, TrackingRecord> = {
  'DLW-2025-0891': {
    bookingId: 'DLW-2025-0891',
    passportNo: 'A89210492',
    passengerName: 'H. Muhammad Arifin & Istri',
    packageType: 'Umroh Platinum 9 Hari (15 Nov 2025)',
    departureDate: '15 November 2025',
    steps: {
      passportCheck: true,
      biometricVisa: true,
      mofaVisaUmrah: true,
      flightTicket: true,
      hotelVoucher: true,
      tasrehRaudhah: true,
      travelKitSent: true
    },
    lastUpdated: '06 Oktober 2025 09:30 WIB'
  },
  'DLW-2025-1044': {
    bookingId: 'DLW-2025-1044',
    passportNo: 'B77218901',
    passengerName: 'Ibu Hj. Kartini Sastro',
    packageType: 'Umroh Gold 4★ (28 Nov 2025)',
    departureDate: '28 November 2025',
    steps: {
      passportCheck: true,
      biometricVisa: true,
      mofaVisaUmrah: true,
      flightTicket: true,
      hotelVoucher: false,
      tasrehRaudhah: false,
      travelKitSent: true
    },
    lastUpdated: '05 Oktober 2025 14:15 WIB'
  },
  'DLW-2026-0120': {
    bookingId: 'DLW-2026-0120',
    passportNo: 'C19028341',
    passengerName: 'Keluarga Bpk. Rahmat Hidayat (4 Pax)',
    packageType: 'Umroh Arbain 15 Hari (12 Jan 2026)',
    departureDate: '12 Januari 2026',
    steps: {
      passportCheck: true,
      biometricVisa: true,
      mofaVisaUmrah: false,
      flightTicket: true,
      hotelVoucher: false,
      tasrehRaudhah: false,
      travelKitSent: false
    },
    lastUpdated: '04 Oktober 2025 11:00 WIB'
  }
};

export const PARTNERS = {
  airlines: [
    { name: 'Garuda Indonesia', type: 'Maskapai Nasional Bintang 5', code: 'GA' },
    { name: 'Saudia Airlines', type: 'Flag Carrier Kerajaan Arab Saudi', code: 'SV' }
  ],
  banking: [
    { name: 'Bank Syariah Indonesia (BSI)', role: 'Mitra Pembayaran Resmi Porsi Haji & Umroh' },
    { name: 'Bank Mandiri', role: 'Rekening Operasional & Valuta Asing' },
    { name: 'BCA (Bank Central Asia)', role: 'Mitra Transaksi Perbankan Digital' },
    { name: 'Bank Muamalat', role: 'Perbankan Syariah Pelopor' },
    { name: 'Amitra Syariah', role: 'Fasilitas Pembiayaan Porsi Haji & Umrah Terpercaya' }
  ],
  muassasah: [
    { name: 'Al Maqam Company for Hajj & Umrah Services', desc: 'Provider Hotel & Land Arrangement Makkah' },
    { name: 'Rawaad Al Andalus', desc: 'Mitra Transportasi VIP & Catering' },
    { name: 'Anjum Makkah Hotel Co.', desc: 'Akomodasi Bintang 5 Dekat Masjidil Haram' },
    { name: 'Elaf Group', desc: 'Jaringan Hotel Eksklusif Makkah & Madinah' },
    { name: 'Al Tayyar Travel Group', desc: 'Wholesaler Logistik Arab Saudi' },
    { name: 'Royal Makkah Tours', desc: 'Handling & Ground Services' },
    { name: 'Al Mohaisen Group', desc: 'Pengelolaan Akomodasi Madinah' },
    { name: 'Dream Travel & Tourism', desc: 'Layanan Ziarah & City Tour' }
  ]
};

export const FAQS = [
  {
    q: 'Bagaimana legalitas resmi PT Delta Laras Wisata (Dallas Tour & Travel)?',
    a: 'PT. Delta Laras Wisata telah resmi berizin operasional dari Kementerian Agama Republik Indonesia sebagai PPIU (Penyelenggara Perjalanan Ibadah Umroh) SK No. 64 Tahun 2020 dan PIHK (Penyelenggara Ibadah Haji Khusus) SK No. 690 Tahun 2020, serta berakreditasi KAN, anggota IATA, AMPHURI, dan ASITA.'
  },
  {
    q: 'Apa perbedaan mendasar antara Paket Essential (Paket A) dan Paket Premium (Paket B)?',
    a: 'Paket Essential mencakup seluruh fasilitas standar wajib ibadah (hotel standar, tiket, visa, manasik, pembimbing, ziarah, koper standard). Sedangkan Paket Premium memberikan upgrade ke hotel bintang 5 persis depan pelataran, bus VIP eksekutif, dining eksklusif, fotografer profesional, Graduation Umrah kit, Jurnal Umrah pribadi, serta pendampingan keluarga khusus.'
  },
  {
    q: 'Apakah makanan di Tanah Suci cocok untuk lidah orang Indonesia?',
    a: 'Sangat cocok! Dallas Tour & Travel menyediakan Authentic Culinary Experience dengan 100% menu cita rasa nusantara 3x sehari (prasmanan lezat disiapkan koki berpengalaman) sehingga kesehatan dan selera makan jamaah tetap terjaga selama beribadah.'
  },
  {
    q: 'Di mana saja kantor cabang atau perwakilan Dallas Tour & Travel terdekat?',
    a: 'Kami memiliki 21 titik kantor cabang dan perwakilan di seluruh Indonesia, termasuk DKI Jakarta (Pusat di Binawan Building Kalibata), Bandung (Kota, Soreang, Banjaran, Arcamanik, Buah Batu, Cimahi), Bekasi (Kota & Pondok Gede), Cikarang 1 & 2, Depok, Sukabumi, Ciamis/Banjar, Garut 1, 2, Garut Selatan, Cilegon Banten, Balikpapan, Padang, hingga Gorontalo.'
  },
  {
    q: 'Bagaimana cara booking seat atau melakukan konsultasi ibadah?',
    a: 'Anda dapat menggunakan fitur Simulator Biaya & Booking di dashboard website ini, atau langsung menghubungi Tim Konsultan kami melalui telepon resmi (021-8087 8321) atau WhatsApp resmi yang tertera di situs ini.'
  }
];
