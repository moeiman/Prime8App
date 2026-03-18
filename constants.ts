
import { WellnessEntity, User, ClassSession, FeedPost, Trainer, Product } from './types';

export const MOCK_USER: User = {
  name: "Alex Rodriguez",
  points: 2450,
  tier: "Silver",
  streak: 5,
  profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX5nntRQ9au0SS9NSbgRVuYyu-toTkhDtBMoghNpbQgVq_noAMtSjhYRVop3VmqlPtg-t1imEYFndgClTK3e4i8orobJ76f1jcz6Mhr6Kpmw0SQExsu4trqZk4O82z57zyPqDzMGcGvY7fRKfbkAcAB1C2WK_Wdn3cUI5uQRiu15fM4KeSHWxvsGSzuLCJTiB7rbzey-RqsRC-AcXBhHyo4MRDlv-qHD4K0gsuQf7oHlR9unNcBoy9bl3hC0hYXiTDDzPPHjA1VZMZ"
};

export const MOCK_STUDIOS: WellnessEntity[] = [
  {
    id: '1',
    name: 'Zen Flow Studio',
    rating: 4.9,
    distance: '0.8 miles',
    area: 'Thong Lo',
    points: 50,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy_HlQoTtoMXvZGA_Z8pp-FbNWs_MpJRLKyIkNGgaRRK20KlVX1WV6tXLwfDzcBqTyCWmyhGDw6G8MUQ7Inr7RKdDR4VMVDwQo7zFbzgxpSgdQLnm-b_FDpwmsqJ1gNDEVcfCNk_m2NA4vPgKk1v6J9TNolo8tTpenCXlQvM6Vc2leVukE156Q-qg08KFwk3S4niE2_WKxlglKrqADbA36dWWhfU63Qlw5peFrIQ9YUlOa6QCjKcKGH2fYNI7RpScWJNuX7776Rlgw',
    category: 'Yoga',
    startingPrice: 750
  },
  {
    id: '10',
    name: 'Wilder Workout',
    rating: 5.0,
    distance: '1.1 miles',
    area: 'Benjakitti Park',
    points: 60,
    imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop',
    category: 'Event',
    startingPrice: 0,
    description: 'Outdoor functional movement and community fitness at the Benjakitti forest park.'
  },
  {
    id: '11',
    name: 'Lumpini Run Club',
    rating: 4.8,
    distance: '2.4 miles',
    area: 'Lumpini Park',
    points: 40,
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop',
    category: 'Event',
    startingPrice: 0,
    description: 'Weekly social run through Bangkok’s central green lung. All levels welcome.'
  },
  {
    id: '12',
    name: 'Ari Breathwork Social',
    rating: 4.9,
    distance: '4.2 miles',
    area: 'Ari',
    points: 100,
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2062&auto=format&fit=crop',
    category: 'Event',
    startingPrice: 350,
    description: 'Guided conscious breathing and community connection in a hidden Ari courtyard.'
  },
  {
    id: '2',
    name: 'Elite Fight Club',
    rating: 4.8,
    distance: '1.2 miles',
    area: 'Sukhumvit',
    points: 80,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANrJBCw6pT8uqCsekmU5qoSCzTIEkRAHO_qu_ks9sMJSUHnqrlyTw6_yuKAiE9syyZwgz-h4rhzHEcP5cNnaw6_vSgHkVZ6k4qeV2bOP1vL5WTC-yXyE4tVQKN2t-sq3tyPTwGvB9LVyaWNsRy8uAA5-lfz9IfwJpMKcgsC-q6sQjIKqfTu1wOVSQ68vdiv7OOaAOT_M3yDex73-iJ_kpknUDLO-QEjxKiiypk5vSAiQfn6_T3wFZMVqH_1fkFdj_vSs_6WXqGD0g4',
    category: 'Muay Thai',
    startingPrice: 1200
  },
  {
    id: '7',
    name: 'Revive IV Clinic',
    rating: 4.8,
    distance: '1.5 miles',
    area: 'Asok',
    points: 150,
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop',
    category: 'Clinic',
    startingPrice: 2500
  },
  {
    id: '8',
    name: 'Aura Wellness Event',
    rating: 5.0,
    distance: '0.2 miles',
    area: 'Lumpini Park',
    points: 200,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop',
    category: 'Event',
    startingPrice: 0
  },
  {
    id: '9',
    name: 'Optimal Nutrition BKK',
    rating: 4.7,
    distance: '2.1 miles',
    area: 'Phra Khanong',
    points: 30,
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
    category: 'Nutrition',
    startingPrice: 450
  }
];

export const MOCK_TRAINERS: Trainer[] = [
  {
    id: 't1',
    name: 'Coach Mark',
    specialty: 'High Performance HIIT',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    pointsPerSession: 75,
    bio: 'Former athlete specializing in explosive movement and functional strength.'
  },
  {
    id: 't2',
    name: 'Elena Rose',
    specialty: 'Mindful Yoga & Breathwork',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
    pointsPerSession: 60,
    bio: 'Focusing on the intersection of mental clarity and physical flexibility.'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Ultra Pure Whey',
    brand: 'Optimum Bangkok',
    price: '฿1,200',
    points: 120,
    imageUrl: 'https://images.unsplash.com/photo-1593095191070-9a701008538c?q=80&w=2070&auto=format&fit=crop',
    category: 'Supplements'
  },
  {
    id: 'p2',
    name: 'Prime Grip Mat',
    brand: 'Prime8 Gear',
    price: '฿2,500',
    points: 250,
    imageUrl: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1850&auto=format&fit=crop',
    category: 'Apparel'
  }
];

export const MOCK_CLASSES: ClassSession[] = [
  {
    id: 'c1',
    name: 'Morning Thai Flow',
    instructor: 'Ananda P.',
    instructorImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
    time: '09:30',
    duration: '60 min',
    price: '฿750',
    points: 50,
    capacityStatus: 'almost-full'
  },
  {
    id: 'c2',
    name: 'Power Muay Thai',
    instructor: 'Somsak K.',
    instructorImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop',
    time: '11:00',
    duration: '90 min',
    price: '฿1,200',
    points: 85,
    capacityStatus: 'available'
  },
  {
    id: 'e1',
    name: 'Sunset Rooftop Yoga',
    instructor: 'Elena R.',
    instructorImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
    time: '17:30',
    duration: '75 min',
    price: '฿1,500',
    points: 150,
    capacityStatus: 'few-spots'
  }
];

export const MOCK_FEED: FeedPost[] = [
  {
    id: 'f1',
    user: 'Kanya S.',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    location: 'Elite Fight Club, Sukhumvit',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    points: 50,
    caption: 'Morning grind at Sukhumvit. Feeling the burn but the rewards are worth it! 🥊🔥',
    likes: 42,
    comments: 12,
    timestamp: '24 MINUTES AGO',
    type: 'fitness'
  }
];
