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
  name: "Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchkarma Centre",
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
  coordinates: {
    latitude: 18.5503972,
    longitude: 73.9390361,
  },
  googleMapsUrl:
    "https://www.google.com/maps/place/Vishwavedhika+Ayurvedic+Clinic+%26+Garbhsanskar,+Panchkarma+centre/@18.5503972,73.9390361,826m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2c3d9b36eaaab:0xe0ae9e237d066d5!8m2!3d18.5503972!4d73.9390361!16s%2Fg%2F11f5dfz3_m?hl=en&entry=ttu&g_ep=EgoyMDI2MTAxOC4wIKXMDSoASAFQAw%3D%3D",
  tagline: "Authentic Ayurveda, Panchakarma & Garbhsanskar in Kharadi, Pune",
  description:
    "Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchkarma Centre offers personalized, authentic Ayurvedic healing, classical Panchakarma therapies, Garbha Sanskar, and non-surgical pain relief in Kharadi, Pune under expert Ayurvedic physician Dr. Manjiri Musmade.",
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
  nearbyLandmarks: [
    "Parmar Square IT Park",
    "Near Zensar Technologies",
    "Above Red Chilli Hotel",
    "Near EON IT Park & EON Free Zone",
    "Near Gera Commerzone Kharadi",
    "Near BNY Mellon Kharadi",
    "Kharadi-Mundhwa Bridge",
  ],
  nearbyLocalities: [
    "Kharadi",
    "Chandan Nagar",
    "Viman Nagar",
    "Wadgaon Sheri",
    "Keshav Nagar",
    "Mundhwa",
    "Pandhari Nagar",
    "Rakshak Nagar",
    "Patil Buwa Nagar",
    "Thite Nagar",
    "Yashwant Nagar",
    "Kalyani Nagar",
    "Hadapsar",
    "Wagholi",
  ],
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
    src: "/images/services/panchakarma-treatment-in-kharadi.webp",
    alt: "Shri Vishwavedhika Ayurvedic Clinic Classical Panchakarma Facilities",
  },
  {
    src: "/images/services/shirodhara-treatment-in-kharadi.webp",
    alt: "Authentic Shirodhara Treatment Room in Kharadi Pune",
  },
  {
    src: "/images/services/infertility-treatment-in-kharadi.webp",
    alt: "Ayurvedic Doctor Consultation with Dr. Manjiri Musmade",
  },
  {
    src: "/images/services/abhyanga-and-swedana-in-kharadi.webp",
    alt: "Traditional Teakwood Droni Table and Herbal Steam Facilities",
  },
];

export const holisticOfferings: HolisticOffering[] = [
  {
    id: "panchakarma",
    title: "Panchakarma Detoxification",
    description:
      "Authentic 5-fold detox therapies — Vamana, Virechana, Basti, Nasya & Raktamokshana — to eliminate deep cellular toxins (Ama) and restore metabolic dosha balance.",
    image: "/images/services/panchakarma-treatment-in-kharadi.webp",
    icon: "/images/panchakarma.webp",
    link: "/treatments/panchakarma-treatment-in-kharadi",
  },
  {
    id: "garbha-sanskar",
    title: "Garbha Sanskar & Infertility Care",
    description:
      "Classical Ayurvedic prenatal planning, Beej Shuddhi, natural fertility enhancement, and trimester-wise Ayurvedic care for a healthy mother and baby.",
    image: "/images/services/garbha-sanskar-in-kharadi.webp",
    icon: "/images/yoga.webp",
    link: "/treatments/garbha-sanskar-in-kharadi",
  },
  {
    id: "spine-joint-care",
    title: "Spine, Joint & Sciatica Relief",
    description:
      "Specialized warm medicated oil therapies — Kati Basti, Janu Basti, and herbal potlis — for lasting non-surgical relief from slip disc, sciatica, and knee arthritis.",
    image: "/images/services/kati-basti-treatment-in-kharadi.webp",
    icon: "/images/medicine.webp",
    link: "/treatments/kati-basti-treatment-in-kharadi",
  },
  {
    id: "stress-neuro-shirodhara",
    title: "Stress, Neuro & Shirodhara Therapy",
    description:
      "Rhythmic herbal oil stream therapy on the third eye chakra to calm chronic anxiety, sleep disorders, migraines, and work-stress fatigue for IT professionals.",
    image: "/images/services/shirodhara-treatment-in-kharadi.webp",
    icon: "/images/icon-physiotherapy.webp",
    link: "/treatments/shirodhara-treatment-in-kharadi",
  },
];

export const comprehensiveTreatments: Treatment[] = [
  {
    id: "stroke",
    title: "Stroke Rehabilitation & Neuro Care",
    description:
      "Authentic Ayurvedic neuro-recovery for paralysis, hemiplegia, facial palsy, and motor neuron weakness using specialized Panchakarma and nerve-nourishing rasayanas.",
    image: "/images/services/stroke-rehabilitation-in-kharadi.webp",
    link: "/treatments/stroke-rehabilitation-in-kharadi",
  },
  {
    id: "back-pain",
    title: "Non-Surgical Spine & Sciatica Relief",
    description:
      "Natural alleviation for slip disc, sciatica nerve compression, cervical spondylosis, and postural stiffness without surgical risk or steroid injections.",
    image: "/images/services/kati-basti-treatment-in-kharadi.webp",
    link: "/treatments/kati-basti-treatment-in-kharadi",
  },
  {
    id: "infertility",
    title: "PCOD, Infertility & Women's Health",
    description:
      "Classical hormonal balancing, Uttar Basti protocols, and Ayurvedic metabolic detox to promote natural ovulation, regulate cycles, and support conception.",
    image: "/images/services/infertility-treatment-in-kharadi.webp",
    link: "/treatments/infertility-treatment-in-kharadi",
  },
];

export const healingSteps = [
  {
    number: "01",
    title: "In-Depth Nadi Pariksha & Consultation",
    description:
      "Comprehensive pulse diagnosis (Nadi Pariksha) and Ashtavidha Pariksha by Dr. Manjiri Musmade to identify root dosha imbalances (Vata, Pitta, Kapha) and toxic buildup.",
  },
  {
    number: "02",
    title: "Personalized Ayurvedic Treatment & Diet Plan",
    description:
      "Customized schedule of authentic Panchakarma procedures, pure classical herbal medicines, and tailored Pathya-Apathya (dietary and lifestyle guidance).",
  },
  {
    number: "03",
    title: "Supervised Therapy & Sustainable Wellness",
    description:
      "Dedicated clinical therapies performed by certified practitioners, followed by Rasayana (rejuvenative) care and regular follow-ups for permanent relief.",
  },
];

export const whyChooseUsFeatures = [
  {
    title: "Led by Dr. Manjiri Musmade",
    description:
      "Benefit from dedicated clinical consultations and treatments designed by Dr. Manjiri Musmade (BAMS, PGFC in Panchakarma) with 100% individual patient attention.",
  },
  {
    title: "100% Classical & Chemical-Free Ayurveda",
    description:
      "Pure herbal formulations, authentic medicated oils, and classical procedures strictly adhering to Charaka and Sushruta Samhita with zero artificial additives.",
  },
  {
    title: "Trusted Clinic Near Zensar & EON IT Park",
    description:
      "Prime Kharadi location at Parmar Square with modern hygienic therapy rooms, flexible timings for working professionals, and 5-star Google patient satisfaction.",
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

export const servicesList = [
  "Panchakarma 5-Fold Detoxification",
  "Garbha Sanskar & Antenatal Care",
  "Kati Basti (Spine & Sciatica Relief)",
  "Janu Basti (Knee Osteoarthritis Care)",
  "Manya Basti (Cervical Spondylosis Care)",
  "Shirodhara (Stress & Insomnia Therapy)",
  "Vamana Therapy (Kapha & Respiratory Detox)",
  "Virechana Therapy (Pitta & Liver Detox)",
  "Basti Treatment (Medicated Enema Detox)",
  "Nasya Therapy (Cranial & ENT Care)",
  "Uttar Basti (Infertility & Tubal Blockage)",
  "Ayurvedic Infertility & PCOD Management",
  "Raktamokshana Blood Purification",
  "Jalaukavacharana (Medical Leech Therapy)",
  "Agnikarma (Thermal Pain Management)",
  "Takradhara & Lepa (Dermatological Care)",
  "Patra Pinda Sweda (Elakizhi Potli Therapy)",
  "Abhyanga & Swedana (Herbal Massage & Steam)",
  "Netra Tarpana (Ayurvedic Eye Care)",
  "Stroke Rehabilitation & Neuro Care",
];
