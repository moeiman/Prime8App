
export interface Review {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  timestamp: string;
  createdAt?: number;
}

export type EntityCategory = 'Yoga' | 'Spa' | 'Nutrition' | 'Fitness' | 'Muay Thai' | 'Clinic' | 'Brand' | 'Event';

export interface WellnessEntity {
  id: string;
  name: string;
  rating: number;
  distance: string;
  area: string;
  points: number;
  imageUrl: string;
  category: EntityCategory;
  description?: string;
  reviews?: Review[];
  startingPrice?: number;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  imageUrl: string;
  pointsPerSession: number;
  bio: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  points: number;
  imageUrl: string;
  category: 'Supplements' | 'Apparel' | 'Equipment';
}

export interface User {
  name: string;
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Elite';
  streak: number;
  profileImage: string;
}

export interface ClassSession {
  id: string;
  name: string;
  instructor: string;
  instructorImage: string;
  time: string;
  duration: string;
  price: string;
  points: number;
  isFull?: boolean;
  capacityStatus?: 'full' | 'almost-full' | 'few-spots' | 'available';
}

export interface Booking {
  id: string;
  studioName: string;
  className: string;
  date: string;
  time: string;
  instructor: string;
  pointsEarned: number;
  price: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface FeedPost {
  id: string;
  user: string;
  userImage: string;
  location: string;
  imageUrl: string;
  points: number;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  type: string;
}

export const TIER_THRESHOLDS = {
  SILVER: 2500,
  GOLD: 5000
} as const;

export const DISCOUNT_RATES = {
  BASE: 0.10,
  SILVER: 0.15,
  GOLD: 0.25
} as const;

export const TIER_BENEFITS = {
  bronze: ['Standard App Access', '10% Discount', 'Base Point Rewards'],
  silver: ['15% Global Discount', 'Priority Studio Booking', 'Exclusive Community Feed Perks'],
  gold: ['25% Maximum Discount', 'Masterclass & VIP Events', 'Dedicated Wellness Concierge']
};

/**
 * Centralized pricing engine to prevent logic drift
 */
export const pricingEngine = {
  getDiscountRate: (points: number) => {
    if (points >= TIER_THRESHOLDS.GOLD) return DISCOUNT_RATES.GOLD;
    if (points >= TIER_THRESHOLDS.SILVER) return DISCOUNT_RATES.SILVER;
    return DISCOUNT_RATES.BASE;
  },
  getTierName: (points: number) => {
    if (points >= TIER_THRESHOLDS.GOLD) return 'gold';
    if (points >= TIER_THRESHOLDS.SILVER) return 'silver';
    return 'bronze';
  },
  calculateDiscount: (priceStr: string | number, rate: number) => {
    const numericPrice = typeof priceStr === 'number' 
      ? priceStr 
      : (parseInt(priceStr.replace(/\D/g, '')) || 0);
    const discounted = Math.floor(numericPrice * (1 - rate));
    const savings = numericPrice - discounted;
    return {
      original: numericPrice,
      discounted,
      savings,
      formattedDiscounted: `฿${discounted.toLocaleString()}`,
      formattedOriginal: `฿${numericPrice.toLocaleString()}`,
      formattedSavings: `฿${savings.toLocaleString()}`
    };
  }
};
