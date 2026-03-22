// src/utils/constants.js

export const GYM_INFO = {
  name: 'ERG Fitness',
  tagline: 'Push Beyond Limits',
  rating: 4.9,
  reviews: 200,
  phone: '+91 63719 33320',
  email: 'ergfitness@gmail.com',
  address: 'Nalanda Public School, zPAGA, Bhatapada, Odisha 754200',
  location: {
    lat: 20.4625,
    lng: 86.0200,
  },
  hours: {
    weekdays: 'Monday – Saturday: 6:00 AM onwards',
    sunday: 'Sunday: Closed',
  },
  socials: {
    instagram: 'https://instagram.com/ergfitness',
    facebook: 'https://facebook.com/ergfitness',
    youtube: 'https://youtube.com/ergfitness',
  },
  stats: [
    { value: '500+', label: 'Members' },
    { value: '4.9', label: 'Rating' },
    { value: '8+', label: 'Expert Coaches' },
    { value: '5+', label: 'Years of Excellence' },
  ],
};

export const MEMBERSHIP_PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: 999,
    period: 'month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Gym access (6AM–10PM)',
      'Basic equipment access',
      'Group fitness classes',
      'Locker facility',
      '1 fitness assessment',
    ],
    notIncluded: ['Personal training sessions', 'Nutrition coaching', 'Priority booking'],
    color: 'border-white/10',
    badge: null,
    popular: false,
  },
  {
    id: 2,
    name: 'Elite',
    price: 1799,
    period: 'month',
    description: 'Our most popular plan for serious fitness enthusiasts',
    features: [
      'Unlimited gym access',
      'Full equipment access',
      'All group classes',
      'Locker + towel service',
      '2 fitness assessments/month',
      '4 personal training sessions',
      'Basic nutrition guidance',
    ],
    notIncluded: ['Premium nutrition coaching'],
    color: 'border-primary',
    badge: 'Most Popular',
    popular: true,
  },
  {
    id: 3,
    name: 'Champion',
    price: 2999,
    period: 'month',
    description: 'The complete transformation package for maximum results',
    features: [
      'Unlimited gym access',
      'Full equipment access',
      'All group & specialty classes',
      'Premium locker + towel service',
      'Weekly fitness assessments',
      'Unlimited personal training',
      'Full nutrition coaching',
      'Body composition analysis',
      'Priority booking',
    ],
    notIncluded: [],
    color: 'border-primary-light',
    badge: 'Best Value',
    popular: false,
  },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Trainers', path: '/trainers' },
  { label: 'Membership', path: '/membership' },
  { label: 'Contact', path: '/contact' },
];

export const FEATURES = [
  {
    icon: '🏋️',
    title: 'Strength Training',
    description: 'State-of-the-art free weights, machines, and dedicated powerlifting platform.',
  },
  {
    icon: '🏃',
    title: 'Cardio Zone',
    description: 'Premium treadmills, cycles, and ellipticals with entertainment systems.',
  },
  {
    icon: '👤',
    title: 'Personal Training',
    description: 'One-on-one coaching with certified trainers who deliver real results.',
  },
  {
    icon: '🥗',
    title: 'Nutrition Coaching',
    description: 'Evidence-based nutrition plans crafted by registered dietitians.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description: 'Regular body composition analysis and performance benchmarking.',
  },
  {
    icon: '🧘',
    title: 'Recovery Zone',
    description: 'Dedicated stretching area and recovery protocols for optimal performance.',
  },
];
