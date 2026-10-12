export interface PackageTier {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver';
  stars: number;
  duration: string;
  makkahHotel: string;
  makkahNights: number;
  madinahHotel: string;
  madinahNights: number;
  quadPrice: number;
  triplePrice: number;
  doublePrice: number;
  currency: string;
  featured?: boolean;
  description: string;
  highlights: string[];
}

export interface DepartureSchedule {
  id: string;
  date: string;
  program: string;
  tier: string;
  airline: string;
  flightRoute: string;
  totalSeats: number;
  bookedSeats: number;
  priceStartFrom: number;
  status: 'Tersedia' | 'Hampir Penuh' | 'Penuh';
  leadUstadz: string;
}

export interface BranchOffice {
  id: number;
  name: string;
  city: string;
  region: 'Jabodetabek' | 'Jawa Barat' | 'Luar Jawa';
  address: string;
  phone: string;
  whatsapp: string;
  manager: string;
}

export interface SpiritualLeader {
  name: string;
  role: string;
  certification?: string;
  experienceYears?: number;
  specialization: string;
  avatarPlaceholder?: string;
}

export interface TrackingRecord {
  bookingId: string;
  passportNo: string;
  passengerName: string;
  packageType: string;
  departureDate: string;
  steps: {
    passportCheck: boolean;
    biometricVisa: boolean;
    mofaVisaUmrah: boolean;
    flightTicket: boolean;
    hotelVoucher: boolean;
    tasrehRaudhah: boolean;
    travelKitSent: boolean;
  };
  lastUpdated: string;
}
