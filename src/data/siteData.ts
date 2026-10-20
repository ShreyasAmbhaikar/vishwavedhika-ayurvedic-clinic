export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: { label: string; href: string }[];
}

export interface HolisticOffering {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  rating: number;
  content: string;
  image?: string;
  isLocalGuide?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  image: string;
  date?: string;
  link: string;
}

export const siteConfig = {
  name: "Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center",
  shortName: "Shri Vishwavedhika Ayurvedic Clinic",
  address:
    "Flat no.104, IT Park, Parmar Square, near Zensar, above redchilli hotel, Kharadi, Pune, Maharashtra 411014",
  streetAddress:
    "Flat no.104, IT Park, Parmar Square, near Zensar, above redchilli hotel",
  area: "Kharadi",
  city: "Pune",
  state: "Maharashtra",
  postalCode: "411014",
  location: "Kharadi, Pune, Maharashtra 411014",
  googleMapsUrl:
    "https://www.google.com/maps/place/Vishwavedhika+Ayurvedic+Clinic+%26+Garbhsanskar,+Panchkarma+center/data=!4m2!3m1!1s0x0:0xe0ae9e237d066d5?sa=X&ved=1t:2428&hl=en&ictx=111",
  tagline: "Authentic Ayurveda, Panchakarma & Garbhsanskar in Kharadi, Pune",
  description:
    "Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center offers personalized, authentic Ayurvedic healing, traditional Panchakarma therapies, and Garbha Sanskar care in Kharadi, Pune under expert Ayurvedic guidance.",
  phone1: "096049 95998",
  phone2: "097302 93777",
  whatsapp: "+919604995998",
  email: "care@vishwavedhika.com",
  workingHours: "Mon - Sat: 11:30 AM - 5:30 PM | Sun: 11:30 AM - 2:00 PM",
  hoursDetail: {
    monday: "11:30–17:30",
    tuesday: "11:30–17:30",
    wednesday: "11:30–17:30",
    thursday: "11:30–17:30",
    friday: "11:30–17:30",
    saturday: "11:30–17:30",
    sunday: "11:30–14:00",
  },
  rating: 5.0,
  reviewsCount: "20 Google reviews",
  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#why-choose-us" },
  {
    label: "Treatments",
    href: "#treatments",
    hasDropdown: true,
    children: [
      { label: "Stroke Treatment", href: "#treatments" },
      { label: "Back Pain Relief", href: "#treatments" },
      { label: "Panchakarma Detox", href: "#offerings" },
      { label: "Physiotherapy", href: "#offerings" },
      { label: "Cerebral Palsy", href: "#treatments" },
      { label: "Parkinson's Disease", href: "#treatments" },
    ],
  },
  { label: "Offerings", href: "#offerings" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export const heroSlides = [
  {
    src: "/images/slider-02.webp",
    alt: "Shri Vishwavedhika Ayurvedic Clinic Facility",
  },
  {
    src: "/images/slider-03.webp",
    alt: "Ayurvedic Treatment Room and Consultation",
  },
  {
    src: "/images/slider-04.webp",
    alt: "Inpatient Room and Care Facilities",
  },
  {
    src: "/images/slider-05.webp",
    alt: "Shri Vishwavedhika Ayurvedic Clinic Center",
  },
];

export const holisticOfferings: HolisticOffering[] = [
  {
    id: "panchakarma",
    title: "Panchakarma Detoxification",
    description:
      "Complete 7, 14 & 21-day Panchakarma programs — Vamana, Virechana, Basti, Nasya — for deep cleansing and balance restoration.",
    image: "/images/PANCH-AKARMA.webp",
    icon: "/images/panchakarma.webp",
    link: "#contact",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description:
      "Daily physiotherapy combined with Ayurveda — 4 treatment sessions per day for faster recovery from injuries and neurological conditions.",
    image: "/images/hh-thumb-physio.webp",
    icon: "/images/icon-physiotherapy.webp",
    link: "#contact",
  },
  {
    id: "yoga",
    title: "Yoga And Meditation",
    description:
      "Personalized daily yoga and pranayama sessions designed to complement your healing process and calm the mind.",
    image: "/images/yoga-1.webp",
    icon: "/images/yoga.webp",
    link: "#contact",
  },
  {
    id: "herbal-medicine",
    title: "Herbal Medicine Consultations",
    description:
      "Custom herbal formulations prepared from classical Ayurvedic texts, tailored to your body type (Prakriti).",
    image: "/images/med.webp",
    icon: "/images/medicine.webp",
    link: "#contact",
  },
];

export const comprehensiveTreatments: Treatment[] = [
  {
    id: "stroke",
    title: "Stroke Treatment",
    description:
      "Ayurvedic neurological rehabilitation for stroke recovery, paralysis and mobility restoration using traditional therapies.",
    image: "/images/stroke-patient.webp",
    link: "#contact",
  },
  {
    id: "back-pain",
    title: "Back Pain Treatment",
    description:
      "Natural relief for sciatica, disc herniation, cervical spondylosis and chronic spinal pain without surgery.",
    image: "/images/thumb-backpain.webp",
    link: "#contact",
  },
  {
    id: "cerebral-palsy",
    title: "Cerebral palsy",
    description:
      "Holistic pediatric Ayurvedic care for children with cerebral palsy, developmental delays and muscular weakness.",
    image: "/images/cerebralpalsy.webp",
    link: "#contact",
  },
];

export const healingSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understand your body type (Dosha) and health condition through detailed pulse diagnosis and medical history.",
  },
  {
    number: "02",
    title: "Personalized Treatment Plan",
    description:
      "Customized therapies, herbal medicines, and personalized sattvic dietary recommendations.",
  },
  {
    number: "03",
    title: "Therapy & Recovery",
    description:
      "Regular daily sessions with expert doctors, dedicated therapists, and continuous post-recovery follow-up.",
  },
];

export const whyChooseUsFeatures = [
  {
    title: "Expertise in Traditional Ayurveda",
    description:
      "Benefit from authentic Ayurvedic knowledge and experienced practitioners using time-tested healing methods rooted in authentic classical Ayurveda.",
  },
  {
    title: "Personalized Holistic Care",
    description:
      "Get treatments tailored to your unique body constitution (Prakriti), health conditions, and long-term wellness goals.",
  },
  {
    title: "Natural & Safe Treatments",
    description:
      "100% natural herbal formulations, pure medicinal oils, zero chemical additives, and safe healing with no side effects.",
  },
];

export const patientTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Surobhi Deb",
    location: "Patient — Kharadi, Pune",
    rating: 5,
    isLocalGuide: true,
    image: "/images/testimonials/surobhi-deb.png",
    content:
      "The Doctor takes out good amount of time to examine and gives a detailed diagnosis. The treatment is natural and is mainly through herbs and oils. She can also suggest a lifestyle based on your current condition. Would recommend anyone who believes to go the natural way.",
  },
  {
    id: "2",
    name: "Anagha Lanjankar",
    location: "Patient — Kharadi, Pune",
    rating: 5,
    isLocalGuide: false,
    image: "/images/testimonials/anagha-lanjankar.png",
    content:
      "Excellent Ayurvedic clinic in Kharadi. Dr. Manjiri Musmade provides effective and personalized treatment with great care. 👍",
  },
  {
    id: "3",
    name: "Betha Sindhuja",
    location: "Patient — Kharadi, Pune",
    rating: 5,
    isLocalGuide: true,
    image: "/images/testimonials/betha-sindhuja.png",
    content:
      "The doctor patiently listens to the queries. Very sweetly tries to explain the issue & solution for it. No unnecessary prescribing of medicines. Only when absolutely necessary she prescribs medicines. All are ayurvedic medicine, which no side effects like allopathic ones. Even the doc suggests diet to follow. Appointments are always taken on time. The support staff is nice too.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "weight-loss",
    title:
      "Weight Loss Treatment in Ayurveda: How Holistic Healing Supports Healthy Weight Management",
    image:
      "/images/young-woman-measuring-her-thin-waist-with-tape-measure-3-1-768x513.jpg",
    link: "#contact",
  },
  {
    id: "chronic-back-pain",
    title: "How Ayurveda Helps Relieve Chronic Back Pain Naturally",
    image:
      "/images/man-struggles-with-back-pain-kidney-stones-home-amidst-inflammation-disease-challenges-1-768x578.jpg",
    link: "#contact",
  },
  {
    id: "multiple-sclerosis",
    title: "Best Ayurvedic Treatment for Multiple Sclerosis",
    image:
      "/images/senior-man-wheelchair-looking-through-window-covid19-lockdown-1-768x512.jpg",
    link: "#contact",
  },
];

export const servicesList = [
  "Stroke Treatment",
  "Back Pain Treatment",
  "Physiotherapy",
  "Panchakarma Treatment",
  "Parkinson’s Disease",
  "Weight Loss Treatment",
  "Cerebral palsy",
  "Cervical Spondylosis",
  "Multiple Sclerosis",
  "Muscular Dystrophy",
  "Psoriasis Treatment",
  "Motor Neuron Disease (MND)",
  "Ayurvedic Neurological Disorder",
  "Acupuncture",
  "Hijama (Cupping Therapy)",
  "Reflexology",
  "Speech Therapy",
  "Occupational Therapy",
];
