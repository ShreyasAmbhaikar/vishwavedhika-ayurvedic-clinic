export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceModality {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export const SERVICE_CATEGORIES = [
  "Spine & Joint Orthopedic Care",
  "Panchakarma & Detoxification",
  "Fertility & Women's Health",
  "Stress, Neuro & Head Care",
  "Skin, Hair & Blood Purification",
  "Rapid Pain Relief & Vascular Therapies",
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export interface ServiceDetail {
  slug: string;
  title: string;
  breadcrumbLabel: string;
  category?: ServiceCategory | string;
  image: string;
  imageAlt: string;
  introHeading?: string;
  description: string;
  subheading: string;
  subcontent: string;
  checklist: string[];
  modalities?: ServiceModality[];
  benefitsHeading?: string;
  benefitsSubcontent?: string;
  benefits?: ServiceBenefit[];
  faqs?: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "panchakarma-treatment": {
    slug: "panchakarma-treatment",
    title: "Panchakarma Treatment in Kharadi, Pune | 5-Fold Detox & Rejuvenation",
    breadcrumbLabel: "Panchakarma Treatment",
    category: "Panchakarma & Detoxification",introHeading: "What is Classical Panchakarma Treatment?",
    image: "/images/PANCH-AKARMA.webp",
    imageAlt: "Authentic Classical Panchakarma Detoxification Treatment at Shri Vishwavedhika Kharadi Pune",
    description: `Panchakarma, translating from Sanskrit as "five sacred purification actions", is the crown jewel of classical Ayurvedic medicine. Unlike superficial detox regimes, authentic Panchakarma operates at the cellular level to dislodge, liquefy, and systematically evacuate deep-seated metabolic waste (<strong>Ama</strong>) and aggravated <strong>Vata, Pitta, and Kapha doshas</strong> that cause chronic illnesses. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, our classical Panchakarma therapies are tailored to residents of <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong> under the meticulous clinical guidance of <strong>Dr. Majiri Musmade</strong>. Every program begins with traditional pulse evaluation (Nadi Pariksha) to map your unique Prakriti, ensuring a safe, therapeutic bio-cleansing journey that halts disease progression, re-ignites digestive vitality (Agni), and restores holistic physical and mental longevity.`,
    subheading: "Comprehensive 5-Fold Shodhana Protocol in Kharadi",
    subcontent: `Our Panchakarma protocol adheres strictly to the authentic tripartite stages established in the classical Charaka Samhita—ensuring toxins are mobilized safely before gentle expulsion:`,
    checklist: [
      "Purva Karma (Deepana, Pachana, Snehana & Swedana)",
      "Pradhana Karma (Five Core Purification Therapies)",
      "Paschat Karma (Samsarjana Krama Dietary Restitution)",
      "Rasayana Chikitsa (Cellular Rejuvenation & Immunity)",
      "Nadi Pariksha & Daily Clinical Monitoring",
    ],
    modalities: [
      {
        title: "Purva Karma (Deepana, Pachana, Snehana & Swedana)",
        description:
          "Graduated ingestion of medicated herbal ghee followed by herbal steam baths that liquefy stubborn cellular toxins and guide them toward the digestive tract.",
      },
      {
        title: "Pradhana Karma (Five Core Purification Therapies)",
        description:
          "Scientific administration of specialized primary cleansing actions—Vamana, Virechana, Basti, Nasya, or Raktamokshana—customized to your doshic diagnosis.",
      },
      {
        title: "Paschat Karma (Samsarjana Krama Dietary Restitution)",
        description:
          "A structured, graduated transition diet (Peya, Vilepi, and Yusha) designed to rekindle digestive fire without straining sensitive gastrointestinal mucosa.",
      },
      {
        title: "Rasayana Chikitsa (Cellular Rejuvenation & Immunity)",
        description:
          "Potent adaptogenic herbs (Ashwagandha, Guduchi, and Amalaki) administered post-cleansing to rebuild vitality, enhance stamina, and nourish all 7 Dhatus.",
      },
      {
        title: "Nadi Pariksha & Daily Clinical Monitoring",
        description:
          "Continuous pulse diagnosis and vital monitoring by Dr. Majiri Musmade throughout the treatment course to fine-tune therapeutic oils, herbs, and recovery speed.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Panchakarma",
    benefitsSubcontent: `Undergoing authentic Panchakarma delivers measurable rejuvenation across systemic, metabolic, and mental health parameters:`,
    benefits: [
      {
        title: "Complete Cellular Detoxification",
        description:
          "Eliminates decades of accumulated chemical metabolites, heavy metals, and undigested food residues (Ama) from cellular channels.",
      },
      {
        title: "Digestive Fire (Agni) Re-ignition",
        description:
          "Permanently corrects chronic hyperacidity, bloating, constipation, irritable bowel syndrome, and metabolic sluggishness.",
      },
      {
        title: "Chronic Ailment Reversal",
        description:
          "Provides sustained clinical relief for stubborn joint arthritis, autoimmune disorders, skin diseases, migraines, and hormonal imbalances.",
      },
      {
        title: "Mental Calm & Neuro-Rejuvenation",
        description:
          "Clears blocked subtle mind channels (Manovaha Srotas), resolving chronic fatigue, stress burn-out, anxiety, and sleep disturbances.",
      },
    ],
    faqs: [
      {
        question: "How many days does an authentic Panchakarma detox program take in Kharadi, Pune?",
        answer:
          "A standard Panchakarma program spans 7, 14, or 21 days depending on your specific health concerns, pulse evaluation, and toxic load. Acute stress or mild rejuvenation often requires 7 days, whereas chronic conditions like arthritis, skin disorders, or metabolic disorders achieve optimal reversal with 14 to 21-day structured courses.",
      },
      {
        question: "What happens during the preparatory stage (Purva Karma) of Panchakarma?",
        answer:
          "During Purva Karma, you take measured doses of medicated herbal ghee (Snehapana) in the morning to lubricate internal tissues and loosen bound toxins. This is followed by full-body warm herbal oil massage (Abhyanga) and herbal steam fomentation (Swedana) to expand body channels and mobilize toxins toward the gastrointestinal tract for effortless elimination.",
      },
      {
        question: "Are there strict dietary restrictions during the Panchakarma therapy?",
        answer:
          "Yes. During the treatment, the digestive fire temporarily softens as energy is directed toward cellular cleansing. Patients are placed on a warm, wholesome Sattvic diet—principally freshly prepared spiced Moong Dal khichdi, thin rice gruel (Peya), and warm digestive decoctions. Heavy, fried, cold, and processed foods are strictly avoided.",
      },
      {
        question: "Can busy IT professionals working in Kharadi or Magarpatta undergo Panchakarma?",
        answer:
          "Yes. We provide flexible scheduling for working professionals across Kharadi IT Park, EON Free Zone, and Magarpatta. While intense procedures require restful mornings, customized outpatient regimens allow individuals to complete their detox program smoothly without disrupting office commitments.",
      },
      {
        question: "How do I book an initial Panchakarma consultation with Dr. Majiri Musmade at Shri Vishwavedhika?",
        answer:
          "You can easily book by calling 096049 95998 or 097302 93777, or by messaging our clinic directly on WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is conveniently located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "stroke-treatment": {
    slug: "stroke-treatment",
    title: "Stroke Rehabilitation in Kharadi, Pune | Ayurvedic Neurological Care & Paralysis Recovery",
    breadcrumbLabel: "Stroke Rehabilitation",
    category: "Stress, Neuro & Head Care",
    introHeading: "What is Ayurvedic Stroke Rehabilitation (Pakshaghata Chikitsa)?",
    image: "/images/stroke-patient.webp",
    imageAlt: "Ayurvedic Stroke Rehabilitation and Neurological Recovery at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Stroke (known as Pakshaghata or Pakshavadha in classical Ayurveda) is one of the most debilitating neurological crises, occurring when severely vitiated <strong>Vata dosha</strong> invades cerebral channels (Siras), damaging motor and sensory pathways on one side of the body. Once acute hospital management stabilizes the patient, secondary recovery challenges—including <strong>hemiplegia, facial palsy (Ardita), speech slurring (Mukatva), muscle flaccidity followed by spasticity, and joint contractures</strong>—require specialized, sustained rehabilitation. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the compassionate medical supervision of <strong>Dr. Majiri Musmade</strong>, our evidence-grounded neuro-rehabilitation protocols stimulate dormant brain plasticity, restore arterial perfusion to ischemic penumbra tissues, and prevent permanent muscular deformities for patients across <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>. Combining intensive therapies—such as <strong>Njavarakizhi</strong> (medicated rice poultice), Shirovasthi, Tailadhara, and Matra Basti—with integrated physical therapy, we actively rebuild neural connections, retrain voluntary motor control, and empower patients to regain independent standing, walking, and dignified daily self-care.`,
    subheading: "Comprehensive Neuro-Restorative Recovery Protocol in Kharadi",
    subcontent: `Each stroke rehabilitation program is customized to the patient's stage of onset, muscle tone (flaccid vs. spastic), and mobility index, delivering cohesive physical and neurological restoration:`,
    checklist: [
      "Njavarakizhi (Shashtika Shali Milk-Rice Muscle Poultice)",
      "Shirovasthi & Tailadhara Cranial Micro-Perfusion",
      "Marma Point Acupressure for Neuro-Motor Activation",
      "Specialized Nasya Therapy for Cranial Nerve Regeneration",
      "Integrated Gait Training & Functional Physical Therapy",
    ],
    modalities: [
      {
        title: "Njavarakizhi (Shashtika Shali Milk-Rice Muscle Poultice)",
        description:
          "Fomentation using boluses of organic Shashtika Shali rice cooked in Bala decoction and milk, deeply permeating wasted muscle fibers to halt atrophy and reduce spastic rigidity.",
      },
      {
        title: "Shirovasthi & Tailadhara Cranial Micro-Perfusion",
        description:
          "Retaining warm neuro-protective medicated oils (Ksheerabala 101, Dhanwantharam) over the scalp to enhance micro-vascular perfusion to damaged ischemic brain territories.",
      },
      {
        title: "Marma Point Acupressure for Neuro-Motor Activation",
        description:
          "Precision stimulation of vital energy centers (Kshipra, Kurpara, and Janu marmas) to trigger motor reflex circuits and accelerate peripheral nerve conduction.",
      },
      {
        title: "Specialized Nasya Therapy for Cranial Nerve Regeneration",
        description:
          "Careful instillation of micro-processed herbal oils through the nasal passages to stimulate facial, trigeminal, and hypoglossal nerves for speech and facial recovery.",
      },
      {
        title: "Integrated Gait Training & Functional Physical Therapy",
        description:
          "Targeted passive and active range-of-motion exercises, core stabilization, balance retraining, and assisted walking to transition patients toward safe independence.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Stroke Rehabilitation",
    benefitsSubcontent: `Our integrated Ayurvedic neuro-rehabilitation protocol delivers progressive, visible functional milestones:`,
    benefits: [
      {
        title: "Re-establishes Voluntary Motor Pathways",
        description:
          "Accelerates cortical neuroplasticity, helping patients recover fine finger movements, arm elevation, hand grip, and voluntary leg control.",
      },
      {
        title: "Prevents Muscle Wasting & Spastic Contractures",
        description:
          "Nourishes denervated muscle fibers with classical Njavarakizhi, softening stiff tendons and preventing painful frozen joint contractures.",
      },
      {
        title: "Restores Facial Symmetry & Speech Function",
        description:
          "Targeted facial Marma therapy and cranial Nasya drops reverse mouth deviation, resolve drooling, and restore clear, intelligible speech articulation.",
      },
      {
        title: "Restores Independent Standing & Walking Balance",
        description:
          "Retrains deep sensory proprioception and pelvic motor stability, transitioning patients from bed and wheelchair dependency to confident walking.",
      },
    ],
    faqs: [
      {
        question: "How soon after a stroke should Ayurvedic rehabilitation begin in Kharadi?",
        answer:
          "Ayurvedic neuro-rehabilitation can commence as soon as the patient is medically stabilized and discharged from the acute care hospital (typically within 2 to 4 weeks post-stroke). Early intervention within the initial 3 to 6 months is the golden period when neuroplastic recovery is most responsive.",
      },
      {
        question: "Can Ayurvedic stroke therapies safely continue alongside prescribed allopathic medications?",
        answer:
          "Yes, absolutely. Our external classical therapies (Abhyanga, Njavarakizhi, Shirodhara) and internal adaptogenic formulations are non-conflicting and safely complement prescribed blood thinners, anti-hypertensives, and statins under Dr. Majiri Musmade watchful medical supervision.",
      },
      {
        question: "What is Njavarakizhi and why is it essential for stroke patients?",
        answer:
          "Njavarakizhi is a classical Kerala Ayurvedic therapy where medicinal rice (Shashtika Shali) cooked in milk and Bala root decoction is tied into boluses and massaged over paretic limbs. The warm herbal milk-rice extracts deeply nourish wasted muscles, improve tendon flexibility, and eliminate joint rigidity.",
      },
      {
        question: "How long does a stroke recovery program take at Shri Vishwavedhika?",
        answer:
          "Recovery timelines depend on the severity of neurological damage and time elapsed since stroke onset. A typical intensive program spans 4 to 12 weeks of clinical therapies combined with guided home physical exercises, monitored weekly for measurable functional progress.",
      },
      {
        question: "How can family members book a stroke consultation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "Family members can consult Dr. Majiri Musmade with the patient's recent MRI/CT brain scans and discharge summary by calling 096049 95998 or 097302 93777, or via WhatsApp. Shri Vishwavedhika is conveniently located at Parmar Square, Kharadi, Pune.",
      },
    ],
  },
  "garbha-sanskar-pune": {
    slug: "garbha-sanskar-pune",
    title: "Garbha Sanskar Program in Kharadi, Pune",
    breadcrumbLabel: "Garbha Sanskar Program",
    category: "Fertility & Women's Health",introHeading: "What is the Garbha Sanskar Program?",
    image: "/images/yoga-1.webp",
    imageAlt: "Garbha Sanskar Antenatal Classes and Ayurvedic Pregnancy Care in Kharadi Pune",
    description: `Garbha Sanskar is the revered classical Ayurvedic science of prenatal care, fetal development, and maternal well-being practiced for thousands of years. Grounded in the ancient Charaka Samhita and Sushruta Samhita, Garbha Sanskar recognizes that a child's mental, intellectual, emotional, and physical constitution begins right from the moment of conception. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, our specialized program provides holistic guidance for expecting mothers across <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>. Supervised by experienced Ayurvedic practitioners, our sessions encompass trimester-wise nutrition (Masanumasik Ahara), gentle prenatal yoga, soothing Vedic sound meditation (Garbha Samvad), and natural delivery preparation (Sukhaprasava) to nurture a healthy, calm, and intellectually vibrant baby.`,
    subheading: "Comprehensive Antenatal & Preconception Care in Kharadi",
    subcontent: `Our structured Garbha Sanskar program bridges timeless Ayurvedic principles with modern antenatal wellness, guiding parents step-by-step through every phase of conception, pregnancy, and postpartum recovery:`,
    checklist: [
      "Masanumasik Ahara (Month-Wise Nutrition Chart)",
      "Garbha Samvad & Vedic Mantra Sound Therapy",
      "Gentle Prenatal Yoga & Pelvic Floor Mobility",
      "Pranayama & Positive Emotional Conditioning",
      "Sukhaprasava Preparation for Smooth Natural Delivery",
    ],
    modalities: [
      {
        title: "Masanumasik Ahara (Month-Wise Nutrition)",
        description:
          "Specialized dietary charts tailored for each month of embryonic development to ensure optimal fetal weight, brain nutrition, and maternal vitality.",
      },
      {
        title: "Garbha Samvad (Vedic Mantra & Sound Therapy)",
        description:
          "Calming acoustic vibrations, positive affirmations, and conversational womb bonding that promote neuro-cognitive stimulation for the baby.",
      },
      {
        title: "Prenatal Yoga & Sukshma Vyayama",
        description:
          "Gentle pelvic stretches, posture realignment, and circulation-boosting movements supervised by lady Ayurvedic practitioners for joint comfort.",
      },
      {
        title: "Pranayama & Positive Emotional Conditioning",
        description:
          "Stress-relieving breathwork that oxygenates fetal blood, regulates maternal blood pressure, and trains the nervous system for calm birthing.",
      },
      {
        title: "Sukhaprasava Preparation (Natural Delivery Protocol)",
        description:
          "Specific 9th-month herbal oil treatments and pelvic relaxation techniques designed to ease labor discomfort and facilitate a smooth natural delivery.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Garbha Sanskar",
    benefitsSubcontent: `Our specialized Ayurvedic antenatal care program delivers profound, measurable outcomes for both mother and unborn baby:`,
    benefits: [
      {
        title: "Optimal Fetal Brain Development",
        description:
          "Vedic sound therapy and classical Medhya Rasayanas stimulate early sensory perception and high cognitive intelligence in the womb.",
      },
      {
        title: "Natural & Complication-Free Delivery",
        description:
          "Strengthens pelvic floor elasticity and reduces maternal labor duration, anxiety, and delivery complications.",
      },
      {
        title: "Maternal Emotional Tranquility",
        description:
          "Stabilizes maternal hormonal fluctuations, alleviating morning sickness, mood swings, and pregnancy fatigue.",
      },
      {
        title: "Postpartum Vitality & Lactation Support",
        description:
          "Accelerates rapid post-delivery uterine involution and establishes wholesome, abundant breast milk production.",
      },
    ],
    faqs: [
      {
        question: "What is the ideal time to start Garbha Sanskar classes in Kharadi, Pune?",
        answer:
          "Garbha Sanskar is most beneficial when started either 3 to 6 months prior to conception (as Beeja Shuddhi preconception detox) or as soon as pregnancy is confirmed in the first trimester. Early enrollment helps manage morning sickness naturally and supports optimal fetal organogenesis and brain development.",
      },
      {
        question: "Can Garbha Sanskar help in achieving a normal and smooth delivery?",
        answer:
          "Yes. Our Sukhaprasava protocol includes specific pelvic-strengthening prenatal asanas, gentle breathing techniques (Pranayama), pelvic floor relaxation exercises, and 9th-month Ayurvedic dietary oils that ease labor pain, improve cervical compliance, and significantly increase the likelihood of a safe natural delivery.",
      },
      {
        question: "What does the month-by-month Ayurvedic nutrition (Masanumasik Ahara) include?",
        answer:
          "Masanumasik Ahara provides a customized, nutrient-dense diet designed for each gestational month based on fetal organ development. It includes herbal-infused milk, Medhya Rasayanas (brain tonics), wholesome seasonal fruits, iron-rich and calcium-dense grains, and easily digestible Sattvic meals tailored to your Prakriti.",
      },
      {
        question: "Are Garbha Sanskar sessions conducted in-person at your Kharadi clinic or online?",
        answer:
          "We offer both personalized in-person consultations at our clinic in Parmar Square, Kharadi (ideal for residents of Kharadi, Wagholi, Viman Nagar, and Hadapsar) as well as flexible virtual/online counseling sessions for expecting mothers who prefer resting at home.",
      },
      {
        question: "How do I enroll in the Garbha Sanskar program at Shri Vishwavedhika?",
        answer:
          "You can enroll by booking a consultation with Dr. Majiri Musmade via phone at 096049 95998 / 097302 93777 or directly through WhatsApp. Our clinic is open Monday to Saturday from 11:30 AM to 5:30 PM, and on Sundays from 11:30 AM to 2:00 PM.",
      },
    ],
  },
  "kati-basti-treatment": {
    slug: "kati-basti-treatment",
    title: "Kati Basti Treatment in Kharadi, Pune | Non-Surgical Back Pain & Sciatica Relief",
    breadcrumbLabel: "Kati Basti (Back Pain)",
    category: "Spine & Joint Orthopedic Care",introHeading: "What is Kati Basti Treatment?",
    image: "/images/gallery/gallery-10.webp",
    imageAlt: "Kati Basti Ayurvedic Spine and Sciatica Treatment in Kharadi Pune",
    description: `Chronic lower back pain, lumbar spondylosis, sciatica (Gridhrasi), and intervertebral disc herniation (slip disc) are widespread among IT professionals in <strong>Kharadi, Wagholi, and Viman Nagar</strong> due to prolonged sedentary desk hours and poor ergonomic posture. In classical Ayurveda, spinal degeneration stems from an aggravated Apana Vata that dehydrates intervertebral discs and compresses lumbar nerve roots. <strong>Kati Basti</strong> is the gold-standard classical therapy specifically engineered for non-surgical spinal rehabilitation. At <strong>Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, a leak-proof reservoir crafted from black gram dough is positioned over the lumbosacral region, within which warm, medicated herbal oils are pooled for 30 to 45 minutes. This intensive transdermal therapy lubricates spinal joints, relieves nerve root compression, and eliminates pain without surgery.`,
    subheading: "How We Treat Chronic Back Pain & Sciatica Without Surgery",
    subcontent: `Our non-surgical Ayurvedic spine rehabilitation protocol provides rapid, deep-tissue pain relief, restores intervertebral disc hydration, and realigns supporting paraspinal musculature:`,
    checklist: [
      "Warm Medicated Oil Pooling (Mahanarayana & Sahacharadi Taila)",
      "Patra Pinda Sweda (Warm Herbal Leaf Bolus Fomentation)",
      "Spinal Nerve Decompression for Sciatica Relief",
      "Lumbar Disc Rehydration & Cartilage Nourishment",
      "Customized Core Ergonomics & Spinal Mobility Care",
    ],
    modalities: [
      {
        title: "Warm Medicated Oil Pooling (Kati Basti Dam)",
        description:
          "Sustained retention of Sahacharadi and Mahanarayana oils that deeply lubricate lumbar discs and facet joints, relaxing chronic muscle spasms.",
      },
      {
        title: "Patra Pinda Sweda (Herbal Leaf Bolus Massage)",
        description:
          "Warm medicinal leaf bundles infused with anti-inflammatory herbs that dispel deep-seated stiffness and enhance spinal micro-circulation.",
      },
      {
        title: "Spinal Nerve Decompression",
        description:
          "Relieves mechanical pressure on impinged L4-L5 and L5-S1 nerve roots to eliminate radiating sciatica pain down the glutes and legs.",
      },
      {
        title: "Matra Basti (Vata-Pacifying Colon Therapy)",
        description:
          "Nourishes bone and joint tissues (Asthi Dhatu) directly through the primary seat of Vata in the colon, preventing structural disc re-collapse.",
      },
      {
        title: "Customized Core Ergonomics & Spinal Care",
        description:
          "Personalized postural advice, workstation ergonomics, and gentle core-strengthening yoga routines to maintain permanent pain freedom.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Kati Basti for Spine Care",
    benefitsSubcontent: `Why hundreds of patients across Kharadi, Wagholi, and Pune choose our classical Ayurvedic spine protocols over surgery:`,
    benefits: [
      {
        title: "Avoids Invasive Spinal Surgery",
        description:
          "Safely rehydrates compressed lumbar discs and relieves canal stenosis symptoms through natural transdermal lubrication.",
      },
      {
        title: "Instant Relief from Sciatic Nerve Pain",
        description:
          "Eliminates numbness, burning sensations, and shooting nerve pain radiating down the glutes and legs.",
      },
      {
        title: "Strengthens Paraspinal Ligaments",
        description:
          "Deeply feeds paraspinal muscles and connective tissues, preventing sudden spinal lockouts and morning stiffness.",
      },
      {
        title: "Ergonomic Recovery for IT Desk Workers",
        description:
          "Reverses chronic spinal stiffness caused by 8 to 10 hours of continuous computer work in tech parks.",
      },
    ],
    faqs: [
      {
        question: "How does Kati Basti relieve lower back pain and sciatica without surgery?",
        answer:
          "Kati Basti allows warm, lipid-soluble herbal compounds to penetrate deep into the lumbar vertebrae, facet joints, and nerve roots. The sustained warmth and medicated properties of oils like Sahacharadi and Mahanarayana reduce inflammation, relieve muscle spasms, improve spinal micro-circulation, and gently decompress trapped sciatic nerves.",
      },
      {
        question: "How many sessions of Kati Basti are recommended for noticeable pain relief?",
        answer:
          "Most patients with acute back stiffness or muscle spasms experience noticeable relief within 3 to 5 sessions. For chronic conditions such as lumbar canal stenosis, sciatica, or L4-L5 disc bulges, a standard course of 7 to 14 consecutive sessions is recommended for durable healing.",
      },
      {
        question: "What happens during a typical Kati Basti session at your Kharadi clinic?",
        answer:
          "During the session, you lie comfortably on the traditional wooden Droni table. A ring of black gram dough is positioned over your lower back, and lukewarm medicated herbal oil is slowly poured and constantly maintained at an optimal soothing temperature for 30 to 40 minutes, followed by gentle herbal steam fomentation (Swedana).",
      },
      {
        question: "Can Kati Basti heal slip disc and L4-L5 or L5-S1 disc herniation?",
        answer:
          "Yes. In non-emergency cases (without loss of bowel or bladder control), Kati Basti combined with internal Ayurvedic Vata-pacifying herbs and Matra Basti significantly reduces disc protrusion, rehydrates dried discs, and prevents the need for invasive spinal surgery.",
      },
      {
        question: "What post-treatment precautions should I observe after Kati Basti?",
        answer:
          "Patients should avoid direct exposure to cold drafts or AC, refrain from lifting heavy weights, drink warm water, and avoid sudden jerking or bending movements for a few hours following the session. Dr. Majiri Musmade provides personalized spinal stretches to perform at home.",
      },
    ],
  },
  "shirodhara-treatment": {
    slug: "shirodhara-treatment",
    title: "Shirodhara Treatment in Kharadi, Pune | Stress, Anxiety & Insomnia Relief",
    breadcrumbLabel: "Shirodhara Treatment",
    category: "Stress, Neuro & Head Care",introHeading: "What is Shirodhara Treatment?",
    image: "/images/gallery/gallery-03.webp",
    imageAlt: "Shirodhara Ayurvedic Stress Relief and Insomnia Treatment in Kharadi Pune",
    description: `Constant screen fatigue, high-stress IT deadlines, cognitive overload, and urban lifestyle pressures frequently trigger chronic mental exhaustion, anxiety, tension headaches, and severe sleep disorders (insomnia). Classical Ayurveda attributes these nervous afflictions to vitiation of Prana Vata and Sadhaka Pitta within the central nervous system (Majja Dhatu). <strong>Shirodhara</strong>—derived from the Sanskrit words 'Shira' (head) and 'Dhara' (continuous rhythmic stream)—is Ayurveda's master neuro-sensory therapy. At <strong>Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center</strong> in <strong>Kharadi, Pune</strong>, warm, medicated herbal oils, medicated milk (Ksheeradhara), or herbal decoctions are poured in a gentle, oscillating stream across the forehead (Ajna Chakra). This continuous stream stimulates vital Marma points, synchronizes brainwave frequencies, and induces profound mental serenity.`,
    subheading: "Deep Mental Tranquility, Neuro-Relaxation & Restorative Sleep",
    subcontent: `Supervised by experienced Ayurvedic practitioners at our Kharadi clinic, Shirodhara naturally regulates the autonomic nervous system and melts away chronic mental fatigue:`,
    checklist: [
      "Continuous Rhythmic Forehead Oil Stream (Ajna Chakra Activation)",
      "Brahmi, Ashwagandha & Ksheerabala Medicated Oils",
      "Parasympathetic Nervous System Activation & Cortisol Reduction",
      "Relief from Chronic Migraine, Tension Headaches & Burnout",
      "Natural Restoration of Deep REM & Non-REM Sleep Cycles",
    ],
    modalities: [
      {
        title: "Continuous Oscillating Forehead Stream",
        description:
          "Gentle, rhythmic flow of warm medicated herbal oil over the Ajna Chakra that harmonizes neurological activity and calms brain waves.",
      },
      {
        title: "Brahmi & Ksheerabala Medicated Oils",
        description:
          "Lipid-soluble classical herbal extracts that cross the blood-brain barrier to nourish exhausted nerve endings and brain tissues.",
      },
      {
        title: "Shiro Abhyanga (Pre-Dhara Head Massage)",
        description:
          "Stimulates vital head Marma points to release cranial tension, relax scalp musculature, and improve cerebral circulation.",
      },
      {
        title: "Takradhara Option (Medicated Buttermilk Stream)",
        description:
          "Cooling herbal buttermilk dhara specifically prescribed for severe scalp psoriasis, intense body heat, and acute anxiety.",
      },
      {
        title: "Rasayana Herbal Formulations",
        description:
          "Rejuvenating internal herbs that enhance neuroplasticity, memory retention, and daytime mental focus.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Shirodhara",
    benefitsSubcontent: `Experience deep neuro-biological recovery backed by thousands of years of classical Ayurvedic science:`,
    benefits: [
      {
        title: "Restores Natural Circadian Sleep",
        description:
          "Stimulates the pineal gland to naturally produce melatonin, ending chronic dependency on sleeping pills.",
      },
      {
        title: "Relieves Migraines & Tension Headaches",
        description:
          "Cools hyperactive vascular channels and relaxes tense neck and scalp muscles to banish chronic headaches.",
      },
      {
        title: "Reduces Elevated Cortisol & Stress",
        description:
          "Switches off the sympathetic fight-or-flight response, inducing profound parasympathetic peace and emotional calm.",
      },
      {
        title: "Clears Brain Fog & Sharpens Memory",
        description:
          "Nourishes the intellect (Medha) and restores mental sharpness for demanding professional and daily tasks.",
      },
    ],
    faqs: [
      {
        question: "What are the primary health benefits of undergoing Shirodhara in Kharadi, Pune?",
        answer:
          "Shirodhara calms an overactive nervous system, relieves chronic anxiety and mental fatigue, cures sleep disturbances (insomnia), alleviates migraines, stabilizes blood pressure, and improves mental focus and cognitive clarity for professionals and students.",
      },
      {
        question: "How many minutes does a typical Shirodhara session take at Shri Vishwavedhika?",
        answer:
          "A standard Shirodhara session lasts approximately 45 to 60 minutes. This includes 10 to 15 minutes of pre-therapy head and neck relaxation (Shiro Abhyanga) followed by 35 to 45 minutes of continuous rhythmic oil streaming and a period of quiet rest.",
      },
      {
        question: "Is Shirodhara effective for chronic insomnia and sleep dependency?",
        answer:
          "Yes. Clinical observations show that Shirodhara stimulates the pineal gland and activates alpha brain waves, naturally regulating serotonin and melatonin production. Patients who have struggled with sleep for months frequently experience sound, restful sleep after just 3 to 5 sessions.",
      },
      {
        question: "What type of liquid or oil is used for Shirodhara?",
        answer:
          "Depending on your body constitution (Prakriti) and specific symptoms, we use classical medicated oils like Ksheerabala Taila or Chandanadi Taila, herbal buttermilk (Takradhara for psoriasis and intense heat), or medicated herbal decoctions (Kashayadhara).",
      },
      {
        question: "What is the cost of Shirodhara in Pune, and how many sessions are needed?",
        answer:
          "In Pune, an authentic Shirodhara session typically ranges between ₹1,200 to ₹2,500 depending on the grade of classical medicated oils used. For chronic stress, migraine, or insomnia, a package of 5, 7, or 14 consecutive sessions yields the best long-term therapeutic outcomes.",
      },
    ],
  },
  "back-pain-treatment": {
    slug: "back-pain-treatment",
    title: "Back Pain & Spine Care Treatment in Kharadi, Pune",
    breadcrumbLabel: "Back Pain Treatment",
    category: "Spine & Joint Orthopedic Care",image: "/images/gallery/gallery-10.webp",
    imageAlt: "Ayurvedic Spine and Back Pain Relief Treatment at Shri Vishwavedhika Clinic",
    description: `Chronic back pain, lumbar spondylosis, sciatica (Gridhrasi), and intervertebral disc herniation affect millions of individuals due to prolonged sitting, poor posture, and spinal degeneration. In classical Ayurveda, spinal disorders are treated holistically by lubricating dried intervertebral discs, nourishing surrounding ligaments, and reducing root nerve compression without surgical intervention.`,
    subheading: "How We Treat Chronic Back Pain Without Surgery",
    subcontent: `Our non-surgical Ayurvedic back pain treatment program provides deep relief and long-term spinal stability. Through warm medicated herbal oil pooling, warm bolus fomentation, and restorative muscle realignment, patients regain painless flexibility and freedom of movement:`,
    checklist: [
      "Kati Basti (Warm Medicated Oil Reservoir on Spine)",
      "Elakizhi (Fresh Medicinal Leaf Bolus Fomentation)",
      "Podikizhi (Warm Herbal Powder Poultice Therapy)",
      "Matra Basti (Medicated Colon Cleansing & Vata Relief)",
      "Customized Core Stability & Spinal Mobility Care",
    ],
    faqs: [
      {
        question: "Can Ayurvedic treatment heal slip disc and sciatica without surgery?",
        answer:
          "Yes. In most lumbar spondylosis, sciatica, and disc herniation cases, classical treatments like Kati Basti and medicated herbal enemas relieve nerve inflammation, rehydrate spinal discs, and restore pain-free movement without surgery.",
      },
      {
        question: "What is Kati Basti and how does it relieve spinal pain?",
        answer:
          "Kati Basti involves creating a herbal dough ring over the affected spinal area and pooling warm medicated herbal oil inside. This deep-penetrating oil lubricates intervertebral joints, relaxes muscle spasms, and nourishes nerve roots.",
      },
      {
        question: "How many sessions of spine treatment are typically required?",
        answer:
          "Acute muscle spasms often experience marked relief within 3 to 5 sessions. For chronic disc compression or long-standing sciatica, a 7 to 14-day therapeutic regimen provides lasting structural stability.",
      },
      {
        question: "Are the herbal oils and poultices safe for sensitive skin?",
        answer:
          "Yes. All medicated oils (such as Mahanarayana and Sahacharadi Taila) and herbal leaf boluses (Elakizhi) are 100% natural, tested, and prepared using classical formulas with zero synthetic preservatives.",
      },
      {
        question: "What lifestyle modifications and exercises should I follow after treatment?",
        answer:
          "Dr. Majiri Musmade provides personalized ergonomic advice, core-strengthening yoga asanas, and dietary tips to prevent recurrence and support spinal health during daily computer work and routine activities.",
      },
    ],
  },
  "physiotherapy": {
    slug: "physiotherapy",
    title: "Physiotherapy & Integrated Rehabilitation",
    breadcrumbLabel: "Physiotherapy",
    category: "Spine & Joint Orthopedic Care",image: "/images/hh-thumb-physio.webp",
    imageAlt: "Integrated Ayurvedic Physiotherapy and Physical Therapy in Kharadi Pune",
    description: `Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center bridges the gap between ancient healing wisdom and modern functional physical rehabilitation. Our clinic assists patients in recovering from sports injuries, neurological trauma, post-surgical stiffness, and orthopedic immobility through coordinated therapy programs supervised by experienced practitioners.`,
    subheading: "Advanced Physiotherapeutic Recovery",
    subcontent: `By combining modern manual mobilization, posture correction, and exercise therapy with warm Ayurvedic herbal oils, we achieve accelerated recovery and renewed mobility:`,
    checklist: [
      "Dedicated Physical Rehabilitation Sessions",
      "Gait Training & Dynamic Balance Restoration",
      "Post-Surgical Joint Mobilization & Flexibility",
      "Marma Point Pressure Stimulation",
      "Functional Muscle & Core Strengthening",
    ],
    faqs: [
      {
        question: "How does Ayurvedic physiotherapy differ from regular physiotherapy?",
        answer:
          "Ayurvedic physiotherapy integrates modern biomechanical exercises and manual mobilization with warm medicated herbal oils and Marma point pressure, achieving faster pain relief, deeper tissue nourishment, and enhanced joint mobility.",
      },
      {
        question: "What conditions are treated with integrated physical rehabilitation?",
        answer:
          "We treat frozen shoulder, knee osteoarthritis, sports injuries, post-surgical stiffness, postural deformities, cervical spondylosis, and neurological mobility restrictions.",
      },
      {
        question: "Is physiotherapy suitable for senior citizens with severe joint stiffness?",
        answer:
          "Yes. Our gentle, low-impact mobilization routines are customized specifically for senior citizens, focusing on pain reduction, fall prevention, balance stability, and safe everyday independence.",
      },
      {
        question: "How long is each rehabilitation session?",
        answer:
          "Sessions typically last between 45 and 60 minutes, combining targeted physical exercises, therapeutic stretching, and soothing medicated oil applications.",
      },
      {
        question: "Do patients receive a home exercise program?",
        answer:
          "Yes. Every patient receives a tailored home exercise regimen to maintain joint range of motion and accelerate recovery between clinic visits.",
      },
    ],
  },
  "cerebral-palsy": {
    slug: "cerebral-palsy",
    title: "Pediatric Care for Cerebral Palsy",
    breadcrumbLabel: "Cerebral Palsy",
    category: "Stress, Neuro & Head Care",image: "/images/cerebralpalsy.webp",
    imageAlt: "Pediatric Ayurvedic Care for Cerebral Palsy at Shri Vishwavedhika Clinic",
    description: `Cerebral palsy in pediatric Ayurveda is approached with compassionate, multi-disciplinary, and restorative therapies designed to improve the child's motor coordination, speech clarity, cognitive alertness, and muscular tone. Early intervention with authentic herbal formulations and soothing medicated therapies delivers life-changing results for children and their families.`,
    subheading: "Holistic Pediatric Care Protocol",
    subcontent: `Our gentle pediatric care program combines herbal brain tonics, specialized neuromuscular massages, and developmental physical exercises to stimulate neuroplasticity and muscular control:`,
    checklist: [
      "Medicated Medhya Ghritam for Brain Nourishment",
      "Njavarakizhi (Medicated Rice Poultice for Muscle Strength)",
      "Speech & Swallowing Functional Therapy",
      "Gentle Pediatric Sensory Integration",
      "Safe, Chemical-Free Classical Herbal Formulations",
    ],
    faqs: [
      {
        question: "How does Ayurvedic pediatric care benefit children with cerebral palsy?",
        answer:
          "Ayurveda focuses on nourishing nerve tissues, reducing muscle rigidity (spasticity), improving fine and gross motor skills, and supporting cognitive alertness through gentle, non-invasive classical therapies.",
      },
      {
        question: "Are the herbal medicines and medicated oils safe for infants and young children?",
        answer:
          "Yes. All treatments use gentle, time-tested pediatric formulations (such as Medhya Ghritam and Bala Ashwagandha Taila) dosed strictly according to the child's age, weight, and digestive strength.",
      },
      {
        question: "What therapies are included in pediatric neuro-rehabilitation?",
        answer:
          "Treatments include gentle full-body massage (Abhyanga), warm medicated milk-rice poultices (Njavarakizhi), sensory integration stimulation, and supportive speech and swallowing exercises.",
      },
      {
        question: "How soon can parents expect visible improvements in the child?",
        answer:
          "Consistent therapy over several weeks typically demonstrates noticeable gains in muscle flexibility, head control, posture, sleep quality, and active engagement with surroundings.",
      },
      {
        question: "Can parents be trained on home care routines?",
        answer:
          "Yes. Our team actively trains parents on gentle massage techniques, feeding postures, and mobility stimulation to support continuous development at home.",
      },
    ],
  },
  "spine-and-joint-care": {
    slug: "spine-and-joint-care",
    title: "Spine & Joint Care in Kharadi, Pune | Non-Surgical Sciatica, Disc & Joint Pain Relief",
    breadcrumbLabel: "Spine & Joint Care",
    category: "Spine & Joint Orthopedic Care",
    introHeading: "What is Comprehensive Spine & Joint Care?",
    image: "/images/thumb-backpain.webp",
    imageAlt: "Comprehensive Ayurvedic Spine, Joint and Sciatica Care at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Chronic spinal disorders and degenerative joint conditions—including <strong>lumbar disc herniation, sciatica (Gridhrasi), cervical spondylosis, facet arthropathy, and knee osteoarthritis</strong>—stem from deep-seated <strong>Vata dosha</strong> aggravation that dehydrates intervertebral discs and erodes synovial cartilage. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, our comprehensive Spine &amp; Joint Care protocol offers an integrated, non-surgical pathway to permanent pain relief. Rather than relying on temporary analgesic masking or invasive spinal fusion surgery, our protocol combines targeted warm oil retention (<strong>Kati Basti, Janu Basti, and Manya Basti</strong>), anti-inflammatory herbal leaf boluses (<strong>Patra Pinda Sweda</strong>), precision thermal decompression (<strong>Agnikarma</strong>), and classical bone-nourishing medicated enemas (<strong>Tikta Ksheera Basti</strong>). This multidimensional approach rehydrates compressed spinal discs, relieves impinged sciatic nerve roots, restores synovial fluid volume, and re-aligns spinal posture for residents of <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>.`,
    subheading: "Integrated 5-Pillar Spinal & Joint Restoration Protocol in Kharadi",
    subcontent: `Our comprehensive orthopedic restoration protocol bridges classical Panchakarma therapies with functional biomechanical rehabilitation:`,
    checklist: [
      "Targeted Local Basti Dam Administration (Kati, Janu, Manya)",
      "Patra Pinda Sweda (Anti-Inflammatory Medicinal Leaf Bolus)",
      "Agnikarma & Micro-Thermal Decompression for Trigger Points",
      "Tikta Ksheera Basti for Deep Disc & Cartilage Remineralization",
      "Ergonomic Core Alignment & Spinal Mobility Asanas",
    ],
    modalities: [
      {
        title: "Targeted Local Basti Dam Administration (Kati, Janu, Manya)",
        description:
          "Forming specialized herbal dough reservoirs over compressed vertebrae or arthritic joints, pooling warm Sahacharadi and Mahanarayana oils to hydrate deep facet joints.",
      },
      {
        title: "Patra Pinda Sweda (Anti-Inflammatory Medicinal Leaf Bolus)",
        description:
          "Fomentation with bundles of medicinal leaves (Nirgundi, Eranda, Arka) sautéed in herbal oils, dissipating deep-seated paraspinal muscle spasms and nerve inflammation.",
      },
      {
        title: "Agnikarma & Micro-Thermal Decompression for Trigger Points",
        description:
          "Nanosecond thermal application using Panchadhatu Shalaka over hyper-sensitized sciatic trigger points, deactivating radiating pain signals immediately.",
      },
      {
        title: "Tikta Ksheera Basti for Deep Disc & Cartilage Remineralization",
        description:
          "Medicated enemas infused with bitter herbs and cow's milk that directly nourish bone tissue (Asthi Dhatu) and rebuild degraded intervertebral disc matrices.",
      },
      {
        title: "Ergonomic Core Alignment & Spinal Mobility Asanas",
        description:
          "Personalized rehabilitation guidance including core-strengthening yoga postures, lumbar curve restoration, and workstation ergonomic corrections for desk workers.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Spine & Joint Care",
    benefitsSubcontent: `Our comprehensive protocol provides transformative long-term relief from chronic spinal and joint degeneration:`,
    benefits: [
      {
        title: "Avoids Invasive Spinal & Joint Replacement Surgery",
        description:
          "Naturally rehydrates desiccated spinal discs and restores joint cartilage space, resolving severe disc bulges without surgical intervention.",
      },
      {
        title: "Permanently Resolves Radiating Sciatica Nerve Pain",
        description:
          "Relieves mechanical nerve root compression at L4-L5 and L5-S1, eliminating shooting pain, leg numbness, and tingling down to the toes.",
      },
      {
        title: "Strengthens Paraspinal Tendons & Ligaments",
        description:
          "Nourishes supporting spinal ligaments and deep stabilizing muscles, preventing recurring posture-induced acute back lockouts.",
      },
      {
        title: "Custom Ergonomic Correction for Tech Professionals",
        description:
          "Reverses lumbar lordosis loss and chronic slouching caused by long sedentary desk hours in Kharadi IT parks and EON Free Zone.",
      },
    ],
    faqs: [
      {
        question: "Can severe lumbar disc herniation and sciatica be healed without surgery?",
        answer:
          "Yes. In over 90% of cases, non-sequestrated disc bulges and sciatica respond remarkably well to our comprehensive Ayurvedic protocol. By pooling warm anti-inflammatory oils (Kati Basti), administering Tikta Ksheera Basti to remineralize bone tissue, and performing Agnikarma, disc inflammation subsides and nerve impingement is relieved permanently.",
      },
      {
        question: "How many days does the comprehensive spine and joint care program take?",
        answer:
          "Acute pain episodes typically improve significantly within 5 to 7 days. For chronic disc herniations, severe sciatica, or multi-joint osteoarthritis, a 14 to 21-day structured protocol delivers lasting structural stability and tissue regeneration.",
      },
      {
        question: "What is the role of Tikta Ksheera Basti in spinal disc regeneration?",
        answer:
          "In Ayurveda, bone tissue (Asthi Dhatu) and Vata dosha share an inverse relationship. Tikta Ksheera Basti delivers bitter herbs processed in milk directly into the colon—the primary seat of Vata. This provides bioavailable calcium, minerals, and restorative lipids that nourish spinal disc rings directly.",
      },
      {
        question: "Can working professionals continue office work while undergoing spine care in Kharadi?",
        answer:
          "Yes. We offer convenient morning and evening outpatient appointments for working professionals across Kharadi, Magarpatta, and Viman Nagar. Treatments do not cause sedation or weakness, allowing you to manage professional responsibilities comfortably.",
      },
      {
        question: "How do I book an initial spine and joint assessment with Dr. Majiri Musmade?",
        answer:
          "You can bring your recent MRI, X-rays, and medical reports to Shri Vishwavedhika by calling 096049 95998 or 097302 93777, or via WhatsApp. The clinic is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "eye-care-treatments": {
    slug: "eye-care-treatments",
    title: "Netra Tarpana Treatment in Kharadi, Pune | Ayurvedic Eye Care for Computer Vision & Dry Eyes",
    breadcrumbLabel: "Netra Tarpana Eye Care",
    category: "Skin, Hair & Blood Purification",
    introHeading: "What is Netra Tarpana (Ocular Rejuvenation)?",
    image: "/images/gallery/gallery-03.webp",
    imageAlt: "Netra Tarpana Ayurvedic Eye Care and Optical Rejuvenation at Shri Vishwavedhika Kharadi Pune",
    description: `Netra Tarpana (also known as Akshi Tarpana) is the premier classical Ayurvedic ocular therapy documented in the Sushruta Samhita under Netra Chikitsa. In today's digital era, extended screen exposure, air conditioning, and environmental pollution aggravate <strong>Pitta and Vata doshas</strong> within the eyes (Chakshu), causing severe <strong>Computer Vision Syndrome (CVS), dry eye syndrome, burning sensations, premature presbyopia, and optic nerve fatigue</strong>. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, Netra Tarpana provides profound restorative care for IT professionals, students, and seniors across <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>. The procedure involves creating a leak-proof circular dam of black gram dough (Masha Pishti) around each orbital socket and gently pooling warm, sterile medicated herbal ghee—most notably <strong>Mahatriphala Ghrita</strong>. As the patient blinks and rotates the eyes within this herbal lipid bath, the lipophilic botanical nutrients penetrate deep through the cornea into internal ocular tissues, soothing inflamed scleral capillaries, hydrating dried tear glands, and revitalizing exhausted optical nerves without synthetic eye drops.`,
    subheading: "Authentic Netra Tarpana Protocol in Kharadi",
    subcontent: `Our specialized ocular rejuvenation protocol follows strict medical sterility and classical guidelines to ensure maximum optical comfort and vision restoration:`,
    checklist: [
      "Masha Pishti Ocular Dam Sculpting & Hermetic Sealing",
      "Sterile Mahatriphala Ghrita Temperature Calibration & Pooling",
      "Chakshu Vyayama (Submerged Guided Ocular Mobility)",
      "Aschyotana Herbal Eye Cleansing & Rosewater Soothing",
      "Nasya Therapy & Guided Photophobia Dark-Room Rest",
    ],
    modalities: [
      {
        title: "Masha Pishti Ocular Dam Sculpting & Hermetic Sealing",
        description:
          "Careful shaping of custom organic black gram flour rings around both eye sockets, creating a gentle, airtight reservoir that prevents leakage.",
      },
      {
        title: "Sterile Mahatriphala Ghrita Temperature Calibration & Pooling",
        description:
          "Pouring lukewarm, laboratory-tested medicated herbal ghee slowly over closed eyelids, gently bathing the entire cornea, sclera, and conjunctiva upon opening.",
      },
      {
        title: "Chakshu Vyayama (Submerged Guided Ocular Mobility)",
        description:
          "Slow rhythmic blinking, circular rolling, and lateral scanning exercises performed directly under the ghee bath to maximize lipid absorption into optic nerves.",
      },
      {
        title: "Aschyotana Herbal Eye Cleansing & Rosewater Soothing",
        description:
          "Pre- and post-therapy irrigation with sterile Triphala and pure Rosa centifolia decoctions to flush debris, soothe scleral micro-vessels, and eliminate irritation.",
      },
      {
        title: "Nasya Therapy & Guided Photophobia Dark-Room Rest",
        description:
          "Administering Anu Taila nasal drops to stimulate cranial ophthalmic pathways, followed by 15 minutes of quiet rest in a darkened room to stabilize visual focus.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Netra Tarpana",
    benefitsSubcontent: `Netra Tarpana provides measurable, rapid relief for screen-fatigued eyes and chronic ophthalmic disorders:`,
    benefits: [
      {
        title: "Instant Relief from Computer Vision Syndrome",
        description:
          "Quickly eliminates chronic burning, redness, heaviness, gritty irritation, and screen-induced headaches for IT professionals working in Kharadi.",
      },
      {
        title: "Deep Tear Film & Cornea Rehydration",
        description:
          "Permanently reverses chronic dry eye syndrome (DES) by stimulating sluggish Meibomian glands and restoring natural trilaminar tear film stability.",
      },
      {
        title: "Halts Progressive Myopia & Eye Strain",
        description:
          "Nourishes exhausted ciliary accommodation muscles and optic nerve fibers, preventing eye prescription escalation and digital eye strain.",
      },
      {
        title: "Non-Invasive Cataract & Macular Defense",
        description:
          "Provides powerful natural antioxidant protection for retinal photoreceptors and lens proteins, helping prevent early cataract formation in seniors.",
      },
    ],
    faqs: [
      {
        question: "Is Netra Tarpana painful or does the medicated ghee sting the eyes?",
        answer:
          "Netra Tarpana is completely painless, comfortable, and deeply relaxing. Medicated Triphala Ghrita is specially prepared, sterile, and administered at gentle body temperature. When you open your eyes under the ghee, there is zero stinging—only a soothing, cool, and nourishing sensation that relieves eye fatigue immediately.",
      },
      {
        question: "How many sessions of Netra Tarpana are needed for dry eyes and screen strain in Kharadi?",
        answer:
          "Most patients notice remarkable relief from burning and dryness after their very first session. For lasting correction of chronic Computer Vision Syndrome or severe dry eyes, a course of 5, 7, or 10 sessions spaced over consecutive days or alternate days is recommended.",
      },
      {
        question: "Can IT engineers wearing contact lenses or glasses undergo Netra Tarpana?",
        answer:
          "Yes. Patients simply need to remove their contact lenses before the procedure. It is advised to wear glasses for 12 to 24 hours after treatment instead of contacts, allowing the herbal ghee's therapeutic lipid film to nourish the corneal surface uninterrupted.",
      },
      {
        question: "What precautions should be taken immediately after an eye care session?",
        answer:
          "Following Netra Tarpana, patients should avoid direct bright sunlight, intense computer screens, and smartphone scrolling for 2 to 3 hours. Wearing protective sunglasses while returning home is highly recommended to protect freshly nourished eyes from glare and street dust.",
      },
      {
        question: "How do I book a Netra Tarpana consultation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "You can schedule your appointment by calling 096049 95998 or 097302 93777, or via WhatsApp message. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "infertility-treatment": {
    slug: "infertility-treatment",
    title: "Ayurvedic Infertility & PCOD Treatment in Kharadi, Pune",
    breadcrumbLabel: "Infertility & PCOD Care",
    category: "Fertility & Women's Health",introHeading: "What is Ayurvedic Infertility & PCOD Treatment?",
    image: "/images/med.webp",
    imageAlt: "Ayurvedic Infertility Treatment, PCOD Care and Uttar Basti in Kharadi Pune",
    description: `Infertility, irregular ovulation, PCOD/PCOS, uterine fibroids, and low ovarian reserve (AMH) affect thousands of women and couples due to modern chronic stress, endocrine disruptors, and metabolic toxin (Ama) accumulation. In classical Ayurveda, successful conception requires the harmonious balance of four fundamental factors: Ritu (fertile ovulation window), Kshetra (a healthy, well-nourished uterine bed), Ambu (optimal hormonal nutrition and circulation), and Beeja (healthy ovum and vital sperm). At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, our dedicated fertility wing provides authentic, non-invasive protocols designed to detoxify reproductive channels (Artava Vaha Srotas), correct hormonal imbalances, and promote natural conception without artificial hormone dependency or side effects across <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>.`,
    subheading: "Root-Cause Fertility Enhancement & Hormonal Balance Protocol",
    subcontent: `By combining classical Panchakarma detoxification with specialized uterine therapies, our doctor-supervised treatments address both female and male factors to support natural conception:`,
    checklist: [
      "Beeja Shuddhi (Couple Preconception Cleansing)",
      "Uttar Basti (Specialized Uterine & Tubal Care)",
      "PCOD/PCOS Metabolic & Insulin Correction",
      "Ovulation Regulation & Endometrial Rejuvenation",
      "Shukra Dhatu Enhancement for Male Fertility",
    ],
    modalities: [
      {
        title: "Beeja Shuddhi (Couple Preconception Detox)",
        description:
          "Deep cellular cleansing of reproductive tissues (Shukra and Artava dhatus) to optimize egg quality, sperm motility, and healthy embryonic DNA.",
      },
      {
        title: "Uttar Basti (Targeted Uterine Cleansing)",
        description:
          "Painless intrauterine administration of sterile medicated herbal oils to unblock fallopian tubes and nourish the endometrial lining for implantation.",
      },
      {
        title: "PCOD/PCOS Insulin & Metabolic Correction",
        description:
          "Targeted herbal decoctions that dissolve ovarian cyst capsules, regulate insulin sensitivity, and restore natural monthly ovulatory cycles.",
      },
      {
        title: "Artava Vaha Srotas Cleansing (Virechana)",
        description:
          "Liver and systemic blood detoxification that clears hormonal stagnation, reducing acne, excess hair growth, and cycle irregularities.",
      },
      {
        title: "Shukra Dhatu Rasayana for Male Vitality",
        description:
          "Potent classical Ayurvedic formulations that naturally improve sperm count, progressive forward motility, and normal cellular morphology.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Ayurvedic Fertility Care",
    benefitsSubcontent: `A compassionate, holistic journey to healthy parenthood grounded in classical Ayurvedic excellence:`,
    benefits: [
      {
        title: "Natural Conception Without Synthetic Hormones",
        description:
          "Regulates ovulation cycles and ovarian health naturally without invasive hormonal injections or side effects.",
      },
      {
        title: "Non-Surgical Tubal Recanalization",
        description:
          "Sterile Uttar Basti therapy successfully dissolves tubal inflammatory plugs, restoring fallopian patency.",
      },
      {
        title: "Significantly Enhances IVF Success Rates",
        description:
          "Prepares a healthy, receptive endometrial lining (Kshetra), boosting embryo implantation for assisted cycles.",
      },
      {
        title: "Improves Ovarian Reserve (AMH) & Egg Quality",
        description:
          "Targeted Rasayana therapies enhance micro-circulation to the ovaries, revitalizing mature oocyte vitality.",
      },
    ],
    faqs: [
      {
        question: "How does Ayurveda help treat PCOD/PCOS and irregular periods?",
        answer:
          "Ayurveda treats PCOD/PCOS by clearing metabolic blocks (Ama) in the ovaries and balancing Kapha and Vata doshas. Through targeted herbal formulations, mild detox (Virechana), and dietary correction, insulin resistance is reduced, follicular maturation is restored, and menstrual cycles naturally normalize.",
      },
      {
        question: "What is Uttar Basti, and how does it help clear blocked fallopian tubes?",
        answer:
          "Uttar Basti is a specialized, painless classical therapy where sterile medicated herbal oil (such as Kshara Taila or Phala Ghrita) is gently instilled into the uterine cavity. It cleanses inflammatory adhesions, dissolves mucus plugs in fallopian tubes, improves endometrial lining thickness, and creates an optimal environment for embryo implantation.",
      },
      {
        question: "Can Ayurvedic treatment improve low AMH or poor egg quality naturally?",
        answer:
          "Yes. While modern medicine considers low AMH irreversible, Ayurveda focuses on rejuvenating the deep reproductive tissues (Artava Dhatu Rasayana). Formulations enriched with Shatavari, Ashoka, Guduchi, and Suvarna Bhasma enhance micro-circulation to the ovaries, nourishing developing follicles and improving oocyte vitality.",
      },
      {
        question: "Can Ayurvedic fertility therapies be taken alongside conventional treatments or before IVF?",
        answer:
          "Yes. Many couples undergo Ayurvedic preconception detox (Beeja Shuddhi) to improve uterine receptivity and sperm DNA integrity before an IVF cycle, substantially boosting IVF success rates. Our doctors carefully coordinate therapies to ensure complete safety.",
      },
      {
        question: "How many months does an Ayurvedic fertility program typically take?",
        answer:
          "Most couples experience significant reproductive improvements within 3 to 6 months of disciplined therapy, specialized diet, and lifestyle adjustments. Progress is tracked through regular cycle monitoring, ultrasound scans, and clinical assessments.",
      },
    ],
  },
  "skin-and-hair-treatments": {
    slug: "skin-and-hair-treatments",
    title: "Skin & Hair Care (Kushta & Keshya Chikitsa)",
    breadcrumbLabel: "Skin & Hair Care",
    category: "Skin, Hair & Blood Purification",image: "/images/howitworks.webp",
    imageAlt: "Natural Ayurvedic Skin and Hair Treatments at Shri Vishwavedhika Clinic",
    description: `Ayurvedic dermatology treats root metabolic impurities (Rakta and Pitta doshas) causing psoriasis, eczema, chronic acne, urticaria, alopecia, and premature hair graying. Through natural blood cleansing and medicated herbal lepas, lasting skin clarity and hair strength are achieved.`,
    subheading: "Root Cause Blood Purification & Scalp Therapy",
    subcontent: `Rather than topical suppressants, we eliminate toxins from liver and blood channels for clear, healthy skin and vibrant hair:`,
    checklist: [
      "Raktamokshana (Classical Blood Purification)",
      "Virechana for Pitta & Liver Detoxification",
      "Herbal Lepa (Medicated Skin Pastes)",
      "Shiro Abhyanga & Keshya Herbal Oils",
      "Dietary Purification for Glowing Skin",
    ],
    faqs: [
      {
        question: "Can Ayurveda treat chronic psoriasis and eczema?",
        answer:
          "Yes. By addressing internal blood and liver toxicity through Virechana and classical bloodletting (Raktamokshana), chronic skin lesions clear up with reduced recurrence.",
      },
      {
        question: "How does Ayurveda stop excessive hair fall?",
        answer:
          "Hair loss is often caused by excessive body heat (Pitta) and dry scalp (Vata). Tailored medicated hair oils, Nasya therapy, and stress-relieving Shirodhara arrest hair loss and stimulate new follicles.",
      },
    ],
  },
  "stress-and-rejuvenation": {
    slug: "stress-and-rejuvenation",
    title: "Stress Relief & Rejuvenation (Rasayana Chikitsa)",
    breadcrumbLabel: "Stress & Rejuvenation",
    category: "Stress, Neuro & Head Care",image: "/images/yoga-1.webp",
    imageAlt: "Authentic Shirodhara and Stress Relief at Shri Vishwavedhika Clinic",
    description: `Modern stress, anxiety, insomnia, and burn-out lead to mental fatigue and weakened immunity. Our authentic Shirodhara, Takradhara, and Rasayana therapies calm the central nervous system, improve deep sleep quality, and revitalize mental clarity.`,
    subheading: "Soothing Shirodhara & Nervous System Calm",
    subcontent: `A continuous, gentle stream of warm medicated herbal oil or herbal buttermilk is poured onto the forehead (Ajna chakra):`,
    checklist: [
      "Authentic Shirodhara with Medicated Herbal Oil",
      "Takradhara (Cooling Medicated Buttermilk Therapy)",
      "Abhyanga Full Body Relaxing Oil Massage",
      "Medicated Herbal Teas for Deep Sleep",
      "Rasayana Immune & Mental Revitalization",
    ],
    faqs: [
      {
        question: "What does Shirodhara feel like and what are its primary benefits?",
        answer:
          "Shirodhara is a deeply calming and blissful therapy where warm herbal oil flows rhythmically across your forehead. It instantly relieves mental stress, alleviates chronic migraines, soothes anxiety, and cures insomnia.",
      },
      {
        question: "How many sessions are recommended for chronic insomnia?",
        answer:
          "A series of 5 to 7 consecutive Shirodhara sessions combined with evening herbal formulations restores normal circadian sleep cycles for most patients.",
      },
      {
        question: "How long does a single session of stress relief therapy take?",
        answer:
          "A typical session lasts 45 to 60 minutes, including preparatory Shiro Abhyanga (head massage), continuous rhythmic dhara stream, and restful post-therapy relaxation.",
      },
      {
        question: "Can Shirodhara help with high blood pressure and tension headaches?",
        answer:
          "Yes. By activating the parasympathetic nervous system and reducing elevated cortisol levels, Shirodhara naturally stabilizes blood pressure and relieves muscular and vascular tension behind the eyes and temples.",
      },
      {
        question: "How should I prepare for a Shirodhara session at your Kharadi clinic?",
        answer:
          "Wear comfortable, loose clothing and avoid heavy meals immediately prior to therapy. Following the session, we recommend keeping your head covered and avoiding direct air conditioning or cold water exposure.",
      },
    ],
  },
  "vamana-therapy": {
    slug: "vamana-therapy",
    title: "Vamana Therapy in Kharadi, Pune | Classical Kapha Detox & Respiratory Relief",
    breadcrumbLabel: "Vamana Therapy",
    category: "Panchakarma & Detoxification",introHeading: "What is Vamana Therapy (Therapeutic Emesis)?",
    image: "/images/gallery/gallery-02.webp",
    imageAlt: "Classical Vamana Therapy and Ayurvedic Kapha Detoxification at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Vamana is the foremost classical Ayurvedic purification procedure specifically engineered to eradicate morbid <strong>Kapha dosha</strong> and associated toxins (<strong>Ama</strong>) from their primary seat in the stomach, lungs, and thoracic cavity. When Kapha becomes aggravated by heavy diet, sedentary desk work, or seasonal changes (particularly during Vasant / Spring), it congests the respiratory channels and lymphatic system, causing bronchial asthma, recurring bronchitis, chronic sinusitis, psoriasis, eczema, and metabolic lethargy. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, Vamana therapy is executed under rigorous medical supervision by <strong>Dr. Majiri Musmade</strong>. Far from uncomfortable nausea, classical Vamana is an orderly, medically induced and effortless expulsive cleansing that decongests the upper body, restores clean respiratory pathways, and resets sluggish metabolism for patients across <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>.`,
    subheading: "Controlled Clinical Vamana Protocol in Kharadi",
    subcontent: `Our clinical Vamana therapy follows a precise, gentle multi-day protocol designed to loosen sticky mucus toxins before effortless expulsive evacuation:`,
    checklist: [
      "Deepana & Pachana (Metabolic Priming)",
      "Abhyantara Snehapana (Medicated Ghee Ingestion)",
      "Sarvanga Abhyanga & Bashpa Sweda",
      "Madanaphala Classical Vamana Administration",
      "Antiki Pariksha & Dhumapana Inhalation",
    ],
    modalities: [
      {
        title: "Deepana & Pachana (Metabolic Priming)",
        description:
          "Administration of classical digestive appetizers (Trikatu and digestive decoctions) for 2 to 3 days to kindle digestive fire and metabolize cellular toxins.",
      },
      {
        title: "Abhyantara Snehapana (Medicated Ghee Ingestion)",
        description:
          "3 to 7 days of escalating daily doses of specialized Kapha-dissolving medicated ghee (such as Tiktaka Ghrita) that penetrates deep tissues and dislodges entrenched toxins.",
      },
      {
        title: "Sarvanga Abhyanga & Bashpa Sweda",
        description:
          "Therapeutic whole-body massage with warm Kapha-pacifying herbal oils followed by herbal steam that liquefies dense mucus and drives it toward the stomach.",
      },
      {
        title: "Madanaphala Classical Vamana Administration",
        description:
          "Early morning intake of sacred herbal emetic preparations (Madanaphala, Yashtimadhu licorice decoction, and Saindhava salt) inducing comfortable, spontaneous emesis bouts without straining.",
      },
      {
        title: "Antiki Pariksha & Dhumapana Inhalation",
        description:
          "Careful clinical observation of emesis bouts until yellow bile (Pitta) appears, followed by medicated herbal smoking (Dhumapana) to cleanse the throat and sinuses.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Vamana Therapy",
    benefitsSubcontent: `By clearing the central root reservoir of Kapha dosha, Vamana provides immediate and sustained therapeutic relief across respiratory, dermatological, and metabolic disorders:`,
    benefits: [
      {
        title: "Complete Respiratory Decongestion",
        description:
          "Clears chronic mucus accumulation in lung alveoli and bronchial passages, providing lasting relief from asthma, chronic cough, and allergic bronchitis.",
      },
      {
        title: "Remission for Stubborn Skin Diseases",
        description:
          "Radically purifies the blood and lymphatic pathways, eliminating chronic psoriasis plaques, weeping eczema, urticaria, and cystic acne.",
      },
      {
        title: "Metabolic Reset & Weight Loss",
        description:
          "Overcomes metabolic inertia, reduces visceral water retention, balances insulin sensitivity, and jumpstarts steady weight loss in overweight individuals.",
      },
      {
        title: "Sinus Relief & Mental Clarity",
        description:
          "Eliminates chronic frontal sinus headaches, morning nasal dripping, heaviness in the temples, and persistent mental lethargy.",
      },
    ],
    faqs: [
      {
        question: "Is Vamana therapy painful, distressing, or harmful to the stomach?",
        answer:
          "No. Classical Vamana is a scientifically controlled clinical procedure, not violent vomiting. Preparatory oleation (Snehapana) thoroughly coats and protects the stomach lining with medicated ghee. When the emetic decoction is administered, the liquefied toxins and mucus are expelled effortlessly with minimal physical effort under continuous medical care.",
      },
      {
        question: "Who should undergo Vamana therapy at your Kharadi, Pune clinic?",
        answer:
          "Vamana is the gold-standard treatment for individuals suffering from bronchial asthma, chronic allergies, recurring sinusitis, psoriasis, eczema, hypothyroidism, obesity, chronic indigestion with excess mucus, and PCOD with strong Kapha congestion.",
      },
      {
        question: "What is the best season to undergo Vamana therapy?",
        answer:
          "While Vamana can be performed anytime for severe chronic diseases, the classical ideal season is Vasant Ritu (Spring, March–May), when natural Kapha dosha liquefies under the sun's warmth and is most readily eliminated from the body.",
      },
      {
        question: "How many days are required for the complete Vamana treatment process?",
        answer:
          "The complete procedure requires 7 to 9 days: 3 to 5 days of internal ghee consumption (Snehapana) at home, 1 day of full rest with oil and steam, the main Vamana morning at the clinic, followed by 2 to 3 days of light post-cleansing diet (Samsarjana Krama).",
      },
      {
        question: "How do I prepare for a Vamana consultation at Shri Vishwavedhika?",
        answer:
          "Schedule a pulse diagnosis consultation with Dr. Majiri Musmade by calling 096049 95998 / 097302 93777 or messaging us on WhatsApp. Dr. Majiri Musmade will examine your pulse, medical history, and physical strength to confirm eligibility and customize your treatment schedule.",
      },
    ],
  },
  "virechana-therapy": {
    slug: "virechana-therapy",
    title: "Virechana Therapy in Kharadi, Pune | Classical Pitta Detox & Liver Cleansing",
    breadcrumbLabel: "Virechana Therapy",
    category: "Panchakarma & Detoxification",introHeading: "What is Virechana Therapy (Medicated Purgation)?",
    image: "/images/gallery/gallery-11.webp",
    imageAlt: "Classical Virechana Ayurvedic Pitta and Liver Cleansing Therapy in Kharadi Pune",
    description: `Virechana is the prime classical Ayurvedic purification therapy aimed at completely expelling vitiated <strong>Pitta dosha</strong>, toxic bile, and inflammatory metabolic acids from the liver, gallbladder, and small intestine (the primary anatomical seat of Pitta). Chronic lifestyle stress, spicy and fried foods, irregular work hours, and high caffeine intake common among professionals in <strong>Kharadi, Wagholi, and Viman Nagar</strong> trigger severe Pitta aggravation. This manifests as chronic hyperacidity, GERD, liver sluggishness, burning sensations, migraine headaches, dark pigmentation, and inflammatory skin conditions like dermatitis and urticaria. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> conducts controlled Virechana therapy using potent classical purgatives (Virechana Dravyas) that safely flush out stagnant bile and cool inflammatory heat from your bloodstream without causing weakness or dehydration.`,
    subheading: "Systematic Liver & Pitta Elimination Protocol in Kharadi",
    subcontent: `Our clinical Virechana procedure follows strict classical standards to ensure deep internal cooling, liver rejuvenation, and safe bowel detoxification:`,
    checklist: [
      "Deepana & Pachana (Metabolic Fire Optimization)",
      "Abhyantara Snehapana (Medicated Ghee Therapy)",
      "Sarvanga Abhyanga & Mridu Sweda",
      "Targeted Virechana Dravya Administration",
      "Samsarjana Krama (Digestive Rehabilitation)",
    ],
    modalities: [
      {
        title: "Deepana & Pachana (Metabolic Fire Optimization)",
        description:
          "Herbal appetizers (such as Chitrakadi Vati or Panchakola) to clear digestive toxins (Ama) and prepare liver channels for purgation.",
      },
      {
        title: "Abhyantara Snehapana (Medicated Ghee Therapy)",
        description:
          "3 to 7 days of customized bitter medicated ghee intake (Mahatiktaka Ghrita or Guggulutiktaka Ghrita) that penetrates liver tissues and binds excess Pitta acids.",
      },
      {
        title: "Sarvanga Abhyanga & Mridu Sweda",
        description:
          "Full-body warm oil massage with Pitta-pacifying oils (Chandanadi or Ksheerabala) followed by mild steam to loosen abdominal toxins without overheating.",
      },
      {
        title: "Targeted Virechana Dravya Administration",
        description:
          "Morning ingestion of personalized classical purgative formulations (Trivrit Lehyam, Eranda Taila, or Avipattikar preparations) inducing smooth, controlled downward bowel cleanses.",
      },
      {
        title: "Samsarjana Krama (Digestive Rehabilitation)",
        description:
          "Graduated nutritional therapy featuring cooling rice gruel (Peya, Vilepi) and herbal tonics that rebuild healthy digestive secretions and restore beneficial gut bacteria.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Virechana Therapy",
    benefitsSubcontent: `Flushing out toxic bile and cellular heat from the liver and small intestine produces profound therapeutic benefits across the entire body:`,
    benefits: [
      {
        title: "Deep Liver & Gallbladder Cleansing",
        description:
          "Evacuates stagnant toxic bile, reduces fatty liver infiltration, normalizes liver enzymes, and relieves chronic abdominal heaviness.",
      },
      {
        title: "Eradication of Chronic Hyperacidity & GERD",
        description:
          "Permanently neutralizes excessive stomach acids, healing chronic acid reflux, heartburn, sour eructations, and peptic lining irritation.",
      },
      {
        title: "Clear, Glowing & Blemish-Free Complexion",
        description:
          "Purifies the blood (Rakta Dhatu), resolving stubborn cystic acne, melasma, dark spots, dermatitis, hives, and chronic skin heat.",
      },
      {
        title: "Hormonal Cooling & Gynecological Relief",
        description:
          "Regulates excessive menstrual flow (Menorrhagia), soothes premenstrual irritability, calms menopausal hot flashes, and balances Pitta-linked reproductive inflammation.",
      },
    ],
    faqs: [
      {
        question: "How is Virechana therapy different from commercial laxatives?",
        answer:
          "Over-the-counter laxatives merely irritate the colon to produce a temporary bowel movement without removing internal cellular toxins. In contrast, Virechana is preceded by days of medicated ghee (Snehapana) and full-body therapies that draw inflammatory toxins out of the liver, blood, and deep tissues into the gut before safe, complete expulsion.",
      },
      {
        question: "Will Virechana therapy make me feel weak or dehydrated?",
        answer:
          "No. Because of the preparatory internal oleation with medicated ghee, your vital tissues remain thoroughly nourished and lubricated. The clinical team at Shri Vishwavedhika monitors hydration levels closely, and the graduated diet (Samsarjana Krama) immediately restores physical stamina and digestive vitality.",
      },
      {
        question: "Which medical conditions benefit most from Virechana therapy?",
        answer:
          "Virechana is the gold-standard treatment for chronic hyperacidity, GERD, non-alcoholic fatty liver, jaundice, migraine headaches, chronic acne, psoriasis, eczema, gout (Vatarakta), recurrent mouth ulcers, and excessive body heat.",
      },
      {
        question: "How many days do I need to take off from work for Virechana?",
        answer:
          "You typically only need 1 day of physical rest on the actual Virechana morning at the clinic. The preparatory ghee days (Snehapana) can easily be managed at home while attending regular office or remote work, provided you adhere to the prescribed light diet.",
      },
      {
        question: "How do I book a Virechana treatment in Kharadi, Pune?",
        answer:
          "Contact Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center by calling 096049 95998 or 097302 93777, or message us on WhatsApp. Dr. Majiri Musmade will conduct an in-depth Nadi Pariksha to determine your suitability and plan your personalized Virechana schedule.",
      },
    ],
  },
  "basti-treatment-pune": {
    slug: "basti-treatment-pune",
    title: "Basti Treatment in Kharadi, Pune | Medicated Enema Detox & Vata Relief",
    breadcrumbLabel: "Basti Treatment",
    category: "Panchakarma & Detoxification",introHeading: "What is Basti Treatment (Medicated Enema Therapy)?",
    image: "/images/gallery/gallery-01.webp",
    imageAlt: "Classical Basti Karma Medicated Enema Treatment in Kharadi Pune",
    description: `Basti Karma is universally celebrated in classical Ayurvedic texts as <strong>Ardha Chikitsa</strong>—constituting half of all therapeutic treatments in Ayurveda due to its unparalleled ability to subdue vitiated <strong>Vata dosha</strong>. In Ayurveda, Vata governs all bodily movements, nerve impulses, and degenerative processes, with its principal anatomical seat in the colon (Pakwashaya). Long desk hours, mental stress, lack of sleep, and dry foods severely aggravate Vata, causing lumbar spondylosis, sciatica, herniated slip discs, chronic constipation, osteoarthritis, and neurological degeneration. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> administers classical Basti therapy using warm medicated herbal oils and decoctions introduced via the rectal route. Basti bypasses digestive breakdown, allowing micro-nutrients to absorb directly into the bloodstream and pelvo-lumbar nervous plexus, offering rapid joint lubrication, disc rehydration, and nerve healing for residents across <strong>Kharadi, Wagholi, Hadapsar, Magarpatta, and Viman Nagar</strong>.`,
    subheading: "Comprehensive Classical Basti Regimens in Kharadi",
    subcontent: `Our clinical Basti treatments feature time-tested classical courses customized according to your specific spinal, neurological, or gastrointestinal condition:`,
    checklist: [
      "Matra / Anuvasana Basti (Nourishing Medicated Oil)",
      "Niruha / Kashaya Basti (Purifying Herbal Decoction)",
      "Yoga Basti Course (8-Day Regenerative Plan)",
      "Kala Basti Course (16-Day Intensive Rehabilitation)",
      "Sthanik Abhyanga & Nadi Sweda Pre-Therapy",
    ],
    modalities: [
      {
        title: "Matra / Anuvasana Basti (Nourishing Medicated Oil)",
        description:
          "Gentle introduction of small quantities of warm medicated herbal oil (Sahacharadi or Dhanwantharam) that remains retained in the colon, deeply nourishing the nervous system and lumbar discs.",
      },
      {
        title: "Niruha / Kashaya Basti (Purifying Herbal Decoction)",
        description:
          "Masterful emulsion of honey, Saindhava salt, unctuous medicated oil, herbal paste (Kalka), and warm herbal decoctions that extract stubborn encrusted fecal toxins and systemic metabolic waste.",
      },
      {
        title: "Yoga Basti Course (8-Day Regenerative Plan)",
        description:
          "Structured alternate regimen of 5 Anuvasana and 3 Niruha bastis administered alternately to cure moderate sciatica, back pain, and chronic constipation.",
      },
      {
        title: "Kala Basti Course (16-Day Intensive Rehabilitation)",
        description:
          "Comprehensive 16-day regimen designed for chronic spinal disc degeneration, osteoarthritis, hemiplegia, Parkinsonism, and severe Vata neuromuscular disorders.",
      },
      {
        title: "Sthanik Abhyanga & Nadi Sweda Pre-Therapy",
        description:
          "Localized warm oil massage and herbal steam applied to the lower back and abdomen before each administration to relax pelvic ligaments and facilitate seamless absorption.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Basti Treatment",
    benefitsSubcontent: `By directly treating the primary seat of Vata dosha, Basti produces transformative musculoskeletal, neurological, and digestive healing:`,
    benefits: [
      {
        title: "Non-Surgical Spine & Sciatica Relief",
        description:
          "Decompresses compressed nerve roots, restores moisture and elasticity to desiccated spinal discs, and alleviates chronic lower back pain.",
      },
      {
        title: "Cure for Chronic Obstinate Constipation",
        description:
          "Tonifies weak colonic smooth muscles, stimulates natural peristaltic rhythm, and heals spastic colon without laxative dependency.",
      },
      {
        title: "Nerve Regeneration & Motor Rehabilitation",
        description:
          "Delivers essential fatty acids and herbal bio-actives directly to peripheral nerves, reversing numbness, tremors, and muscle wasting.",
      },
      {
        title: "Reproductive & Vital Stamina Enhancement",
        description:
          "Revitalizes pelvic circulation, improves ovarian follicular development, enhances seminal quality, and boosts overall vitality (Ojas).",
      },
    ],
    faqs: [
      {
        question: "Is Basti treatment similar to a hospital water enema or colon hydrotherapy?",
        answer:
          "No, Basti is completely different. Hospital enemas merely use saline or plain water to flush out stools from the rectum mechanically. Basti, however, is a sophisticated pharmacological therapy utilizing complex medicated herbal oils and herbal decoction emulsions that absorb trans-colonically to heal joints, nerves, and organs throughout the entire body.",
      },
      {
        question: "Does Basti treatment hurt or cause painful abdominal cramping?",
        answer:
          "Not at all. Basti is administered using gentle, specialized soft rubber catheters with warm, soothing medicated oils. The procedure is virtually painless and causes no discomfort when administered by trained clinical therapists under Dr. Majiri Musmade guidance.",
      },
      {
        question: "How long am I expected to hold the Basti oil or decoction?",
        answer:
          "For Anuvasana (oil) Basti, the oil is intended to be retained comfortably for several hours or overnight as it nourishes the deeper tissues. For Niruha (decoction) Basti, the fluid is retained for typically 15 to 45 minutes before natural, effortless evacuation occurs.",
      },
      {
        question: "Can Basti therapy help avoid spinal surgery for slip disc or sciatica?",
        answer:
          "Yes. In a vast majority of cases involving lumbar spondylosis, disc bulges, and sciatica, a comprehensive Yoga or Kala Basti course combined with Kati Basti successfully relieves nerve compression, rehydrates discs, and eliminates the need for surgical intervention.",
      },
      {
        question: "How do I book a Basti treatment course at Shri Vishwavedhika in Kharadi?",
        answer:
          "You can schedule an appointment by calling 096049 95998 or 097302 93777, or by reaching out to us via WhatsApp. Our clinic is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "basti-treatment": {
    slug: "basti-treatment",
    title: "Basti Treatment in Kharadi, Pune | Medicated Enema Detox & Vata Relief",
    breadcrumbLabel: "Basti Treatment",
    category: "Panchakarma & Detoxification",introHeading: "What is Basti Treatment (Medicated Enema Therapy)?",
    image: "/images/gallery/gallery-01.webp",
    imageAlt: "Classical Basti Karma Medicated Enema Treatment in Kharadi Pune",
    description: `Basti Karma is universally celebrated in classical Ayurvedic texts as <strong>Ardha Chikitsa</strong>—constituting half of all therapeutic treatments in Ayurveda due to its unparalleled ability to subdue vitiated <strong>Vata dosha</strong>. In Ayurveda, Vata governs all bodily movements, nerve impulses, and degenerative processes, with its principal anatomical seat in the colon (Pakwashaya). Long desk hours, mental stress, lack of sleep, and dry foods severely aggravate Vata, causing lumbar spondylosis, sciatica, herniated slip discs, chronic constipation, osteoarthritis, and neurological degeneration. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> administers classical Basti therapy using warm medicated herbal oils and decoctions introduced via the rectal route. Basti bypasses digestive breakdown, allowing micro-nutrients to absorb directly into the bloodstream and pelvo-lumbar nervous plexus, offering rapid joint lubrication, disc rehydration, and nerve healing for residents across <strong>Kharadi, Wagholi, Hadapsar, Magarpatta, and Viman Nagar</strong>.`,
    subheading: "Comprehensive Classical Basti Regimens in Kharadi",
    subcontent: `Our clinical Basti treatments feature time-tested classical courses customized according to your specific spinal, neurological, or gastrointestinal condition:`,
    checklist: [
      "Matra / Anuvasana Basti (Nourishing Medicated Oil)",
      "Niruha / Kashaya Basti (Purifying Herbal Decoction)",
      "Yoga Basti Course (8-Day Regenerative Plan)",
      "Kala Basti Course (16-Day Intensive Rehabilitation)",
      "Sthanik Abhyanga & Nadi Sweda Pre-Therapy",
    ],
    modalities: [
      {
        title: "Matra / Anuvasana Basti (Nourishing Medicated Oil)",
        description:
          "Gentle introduction of small quantities of warm medicated herbal oil (Sahacharadi or Dhanwantharam) that remains retained in the colon, deeply nourishing the nervous system and lumbar discs.",
      },
      {
        title: "Niruha / Kashaya Basti (Purifying Herbal Decoction)",
        description:
          "Masterful emulsion of honey, Saindhava salt, unctuous medicated oil, herbal paste (Kalka), and warm herbal decoctions that extract stubborn encrusted fecal toxins and systemic metabolic waste.",
      },
      {
        title: "Yoga Basti Course (8-Day Regenerative Plan)",
        description:
          "Structured alternate regimen of 5 Anuvasana and 3 Niruha bastis administered alternately to cure moderate sciatica, back pain, and chronic constipation.",
      },
      {
        title: "Kala Basti Course (16-Day Intensive Rehabilitation)",
        description:
          "Comprehensive 16-day regimen designed for chronic spinal disc degeneration, osteoarthritis, hemiplegia, Parkinsonism, and severe Vata neuromuscular disorders.",
      },
      {
        title: "Sthanik Abhyanga & Nadi Sweda Pre-Therapy",
        description:
          "Localized warm oil massage and herbal steam applied to the lower back and abdomen before each administration to relax pelvic ligaments and facilitate seamless absorption.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Basti Treatment",
    benefitsSubcontent: `By directly treating the primary seat of Vata dosha, Basti produces transformative musculoskeletal, neurological, and digestive healing:`,
    benefits: [
      {
        title: "Non-Surgical Spine & Sciatica Relief",
        description:
          "Decompresses compressed nerve roots, restores moisture and elasticity to desiccated spinal discs, and alleviates chronic lower back pain.",
      },
      {
        title: "Cure for Chronic Obstinate Constipation",
        description:
          "Tonifies weak colonic smooth muscles, stimulates natural peristaltic rhythm, and heals spastic colon without laxative dependency.",
      },
      {
        title: "Nerve Regeneration & Motor Rehabilitation",
        description:
          "Delivers essential fatty acids and herbal bio-actives directly to peripheral nerves, reversing numbness, tremors, and muscle wasting.",
      },
      {
        title: "Reproductive & Vital Stamina Enhancement",
        description:
          "Revitalizes pelvic circulation, improves ovarian follicular development, enhances seminal quality, and boosts overall vitality (Ojas).",
      },
    ],
    faqs: [
      {
        question: "Is Basti treatment similar to a hospital water enema or colon hydrotherapy?",
        answer:
          "No, Basti is completely different. Hospital enemas merely use saline or plain water to flush out stools from the rectum mechanically. Basti, however, is a sophisticated pharmacological therapy utilizing complex medicated herbal oils and herbal decoction emulsions that absorb trans-colonically to heal joints, nerves, and organs throughout the entire body.",
      },
      {
        question: "Does Basti treatment hurt or cause painful abdominal cramping?",
        answer:
          "Not at all. Basti is administered using gentle, specialized soft rubber catheters with warm, soothing medicated oils. The procedure is virtually painless and causes no discomfort when administered by trained clinical therapists under Dr. Majiri Musmade guidance.",
      },
      {
        question: "How long am I expected to hold the Basti oil or decoction?",
        answer:
          "For Anuvasana (oil) Basti, the oil is intended to be retained comfortably for several hours or overnight as it nourishes the deeper tissues. For Niruha (decoction) Basti, the fluid is retained for typically 15 to 45 minutes before natural, effortless evacuation occurs.",
      },
      {
        question: "Can Basti therapy help avoid spinal surgery for slip disc or sciatica?",
        answer:
          "Yes. In a vast majority of cases involving lumbar spondylosis, disc bulges, and sciatica, a comprehensive Yoga or Kala Basti course combined with Kati Basti successfully relieves nerve compression, rehydrates discs, and eliminates the need for surgical intervention.",
      },
      {
        question: "How do I book a Basti treatment course at Shri Vishwavedhika in Kharadi?",
        answer:
          "You can schedule an appointment by calling 096049 95998 or 097302 93777, or by reaching out to us via WhatsApp. Our clinic is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "uttar-basti-treatment": {
    slug: "uttar-basti-treatment",
    title: "Uttar Basti Treatment in Kharadi, Pune | Fallopian Tubal Blockage & Fertility Care",
    breadcrumbLabel: "Uttar Basti Treatment",
    category: "Fertility & Women's Health",introHeading: "What is Uttar Basti Treatment?",
    image: "/images/gallery/gallery-03.webp",
    imageAlt: "Ayurvedic Uttar Basti Treatment for Fallopian Tube Recanalization and Endometrial Lining in Kharadi Pune",
    description: `Uttar Basti is the most revered, non-surgical classical Ayurvedic therapy for female and male reproductive tract disorders, acclaimed in the ancient Charaka and Sushruta Samhitas. In female infertility, fallopian tube blockage (cornual, mid-segment, or fimbrial), thin endometrial lining, recurrent IVF implantation failure, and chronic pelvic inflammatory disease (PID) present severe emotional and physical challenges. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> specializes in sterile, painless <strong>Uttar Basti</strong> administration. By instilling microscopic doses of sterile, medicated herbal ghee or oil (such as Phala Ghrita, Kshara Taila, or Apamarga Kshara Taila) directly into the uterine cavity via the cervix under strict aseptic precautions, Uttar Basti directly clears tubal mucus adhesions, restores healthy endometrial vascularity, and re-establishes natural conception capability for couples across <strong>Kharadi, Wagholi, Viman Nagar, Magarpatta, and Hadapsar</strong>.`,
    subheading: "Painless, Non-Surgical Uterine & Tubal Recanalization Protocol",
    subcontent: `Administered during the post-menstrual Ritukala window (days 6 to 10 of the menstrual cycle), our Uttar Basti protocol is carried out under strict aseptic clinical conditions without surgical anesthesia:`,
    checklist: [
      "Yoni Prakshalana & Aseptic Pre-Cleansing",
      "Sthanik Snehana & Nadi Swedana",
      "Sterile Intrauterine Instillation (Uttar Basti)",
      "Targeted Tubal Recanalization (Kshara Taila)",
      "Endometrial Rejuvenation (Phala Ghrita)",
    ],
    modalities: [
      {
        title: "Yoni Prakshalana & Aseptic Pre-Cleansing",
        description:
          "Gentle irrigation of the reproductive tract with sterile Triphala and Lodhra decoctions to neutralize bacterial toxins and establish optimal vaginal flora.",
      },
      {
        title: "Sthanik Snehana & Nadi Swedana",
        description:
          "Soothing lower abdominal and pelvic oil massage with warm herbal steam that relaxes pelvic floor musculature and dilates uterine cervical channels.",
      },
      {
        title: "Sterile Intrauterine Instillation (Uttar Basti)",
        description:
          "Precise, painless instillation of 3 to 5 ml of warm medicated herbal lipid (Phala Ghrita or Kshara Taila) directly into the uterine cavity using a sterile soft cannula.",
      },
      {
        title: "Targeted Tubal Recanalization (Kshara Taila)",
        description:
          "Specialized alkaline herbal oil dissolves chronic fibrous plugs, inflammatory debris, and tubal spasms, effectively reopening blocked fallopian tubes.",
      },
      {
        title: "Endometrial Rejuvenation (Phala Ghrita)",
        description:
          "Deep cellular lipid nourishment that enhances uterine sub-endometrial blood flow, building optimal 8–10mm triple-line endometrial thickness for embryo implantation.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Uttar Basti Therapy",
    benefitsSubcontent: `Direct intrauterine lipid therapy delivers potent therapeutic outcomes without hormonal side effects or surgical trauma:`,
    benefits: [
      {
        title: "Non-Surgical Fallopian Tube Unblocking",
        description:
          "Proven clinical clearance of unilateral and bilateral tubal blocks confirmed by post-therapy HSG (Hysterosalpingogram) scans.",
      },
      {
        title: "Reversal of Thin Endometrium",
        description:
          "Stimulates natural angiogenesis and mucosal thickness, curing refractory thin lining unresponsive to conventional estrogen therapy.",
      },
      {
        title: "Dramatically Increases Natural & IVF Conception",
        description:
          "Creates an optimal uterine environment (Kshetra), tripling natural conception rates and IVF embryo implantation success.",
      },
      {
        title: "Painless, Outpatient Procedure",
        description:
          "Completely non-invasive with zero hospital stay, zero general anesthesia, and immediate resumption of daily routines.",
      },
    ],
    faqs: [
      {
        question: "Is Uttar Basti therapy painful, and does it require anesthesia?",
        answer:
          "No. Uttar Basti is completely painless and performed as a comfortable outpatient procedure without any general or local anesthesia. Patients only experience a mild sensation similar to a routine pelvic examination, and there is no post-procedure downtime.",
      },
      {
        question: "Can Uttar Basti truly unblock fallopian tubes without laparoscopic surgery?",
        answer:
          "Yes. Medicated oils like Kshara Taila possess specialized Lekhana (scraping), Chedana (cutting), and Tridosha-pacifying properties that soften and dissolve inflammatory adhesions, mucus debris, and spasms blocking the tubes, verified through repeat HSG scans.",
      },
      {
        question: "On which days of the menstrual cycle is Uttar Basti performed?",
        answer:
          "Uttar Basti is performed specifically during the Ritukala—typically between the 6th and 10th day of the menstrual cycle, immediately after menstrual bleeding ceases and before ovulation, when the cervical canal is receptive and the endometrium is rebuilding.",
      },
      {
        question: "How many cycles of Uttar Basti are typically required?",
        answer:
          "A standard course consists of consecutive 3-day or 6-day instillations per menstrual cycle, repeated across 2 to 3 consecutive cycles depending on the severity of the tubal blockage or endometrial thinning.",
      },
      {
        question: "How do I book an Uttar Basti consultation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "You can book an appointment by calling 096049 95998 or 097302 93777, or via WhatsApp. Please bring your recent pelvic ultrasound, HSG, and AMH reports for a comprehensive assessment at our clinic in Parmar Square, Kharadi.",
      },
    ],
  },
  "uttar-basti": {
    slug: "uttar-basti",
    title: "Uttar Basti Treatment in Kharadi, Pune | Fallopian Tubal Blockage & Fertility Care",
    breadcrumbLabel: "Uttar Basti Treatment",
    category: "Fertility & Women's Health",introHeading: "What is Uttar Basti Treatment?",
    image: "/images/gallery/gallery-03.webp",
    imageAlt: "Ayurvedic Uttar Basti Treatment for Fallopian Tube Recanalization and Endometrial Lining in Kharadi Pune",
    description: `Uttar Basti is the most revered, non-surgical classical Ayurvedic therapy for female and male reproductive tract disorders, acclaimed in the ancient Charaka and Sushruta Samhitas. In female infertility, fallopian tube blockage (cornual, mid-segment, or fimbrial), thin endometrial lining, recurrent IVF implantation failure, and chronic pelvic inflammatory disease (PID) present severe emotional and physical challenges. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> specializes in sterile, painless <strong>Uttar Basti</strong> administration. By instilling microscopic doses of sterile, medicated herbal ghee or oil (such as Phala Ghrita, Kshara Taila, or Apamarga Kshara Taila) directly into the uterine cavity via the cervix under strict aseptic precautions, Uttar Basti directly clears tubal mucus adhesions, restores healthy endometrial vascularity, and re-establishes natural conception capability for couples across <strong>Kharadi, Wagholi, Viman Nagar, Magarpatta, and Hadapsar</strong>.`,
    subheading: "Painless, Non-Surgical Uterine & Tubal Recanalization Protocol",
    subcontent: `Administered during the post-menstrual Ritukala window (days 6 to 10 of the menstrual cycle), our Uttar Basti protocol is carried out under strict aseptic clinical conditions without surgical anesthesia:`,
    checklist: [
      "Yoni Prakshalana & Aseptic Pre-Cleansing",
      "Sthanik Snehana & Nadi Swedana",
      "Sterile Intrauterine Instillation (Uttar Basti)",
      "Targeted Tubal Recanalization (Kshara Taila)",
      "Endometrial Rejuvenation (Phala Ghrita)",
    ],
    modalities: [
      {
        title: "Yoni Prakshalana & Aseptic Pre-Cleansing",
        description:
          "Gentle irrigation of the reproductive tract with sterile Triphala and Lodhra decoctions to neutralize bacterial toxins and establish optimal vaginal flora.",
      },
      {
        title: "Sthanik Snehana & Nadi Swedana",
        description:
          "Soothing lower abdominal and pelvic oil massage with warm herbal steam that relaxes pelvic floor musculature and dilates uterine cervical channels.",
      },
      {
        title: "Sterile Intrauterine Instillation (Uttar Basti)",
        description:
          "Precise, painless instillation of 3 to 5 ml of warm medicated herbal lipid (Phala Ghrita or Kshara Taila) directly into the uterine cavity using a sterile soft cannula.",
      },
      {
        title: "Targeted Tubal Recanalization (Kshara Taila)",
        description:
          "Specialized alkaline herbal oil dissolves chronic fibrous plugs, inflammatory debris, and tubal spasms, effectively reopening blocked fallopian tubes.",
      },
      {
        title: "Endometrial Rejuvenation (Phala Ghrita)",
        description:
          "Deep cellular lipid nourishment that enhances uterine sub-endometrial blood flow, building optimal 8–10mm triple-line endometrial thickness for embryo implantation.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Uttar Basti Therapy",
    benefitsSubcontent: `Direct intrauterine lipid therapy delivers potent therapeutic outcomes without hormonal side effects or surgical trauma:`,
    benefits: [
      {
        title: "Non-Surgical Fallopian Tube Unblocking",
        description:
          "Proven clinical clearance of unilateral and bilateral tubal blocks confirmed by post-therapy HSG (Hysterosalpingogram) scans.",
      },
      {
        title: "Reversal of Thin Endometrium",
        description:
          "Stimulates natural angiogenesis and mucosal thickness, curing refractory thin lining unresponsive to conventional estrogen therapy.",
      },
      {
        title: "Dramatically Increases Natural & IVF Conception",
        description:
          "Creates an optimal uterine environment (Kshetra), tripling natural conception rates and IVF embryo implantation success.",
      },
      {
        title: "Painless, Outpatient Procedure",
        description:
          "Completely non-invasive with zero hospital stay, zero general anesthesia, and immediate resumption of daily routines.",
      },
    ],
    faqs: [
      {
        question: "Is Uttar Basti therapy painful, and does it require anesthesia?",
        answer:
          "No. Uttar Basti is completely painless and performed as a comfortable outpatient procedure without any general or local anesthesia. Patients only experience a mild sensation similar to a routine pelvic examination, and there is no post-procedure downtime.",
      },
      {
        question: "Can Uttar Basti truly unblock fallopian tubes without laparoscopic surgery?",
        answer:
          "Yes. Medicated oils like Kshara Taila possess specialized Lekhana (scraping), Chedana (cutting), and Tridosha-pacifying properties that soften and dissolve inflammatory adhesions, mucus debris, and spasms blocking the tubes, verified through repeat HSG scans.",
      },
      {
        question: "On which days of the menstrual cycle is Uttar Basti performed?",
        answer:
          "Uttar Basti is performed specifically during the Ritukala—typically between the 6th and 10th day of the menstrual cycle, immediately after menstrual bleeding ceases and before ovulation, when the cervical canal is receptive and the endometrium is rebuilding.",
      },
      {
        question: "How many cycles of Uttar Basti are typically required?",
        answer:
          "A standard course consists of consecutive 3-day or 6-day instillations per menstrual cycle, repeated across 2 to 3 consecutive cycles depending on the severity of the tubal blockage or endometrial thinning.",
      },
      {
        question: "How do I book an Uttar Basti consultation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "You can book an appointment by calling 096049 95998 or 097302 93777, or via WhatsApp. Please bring your recent pelvic ultrasound, HSG, and AMH reports for a comprehensive assessment at our clinic in Parmar Square, Kharadi.",
      },
    ],
  },
  "nasya-therapy-pune": {
    slug: "nasya-therapy-pune",
    title: "Nasya Therapy in Kharadi, Pune | Classical Ayurvedic ENT, Migraine & Cervical Care",
    breadcrumbLabel: "Nasya Therapy",
    category: "Stress, Neuro & Head Care",introHeading: "What is Nasya Therapy (Nasal Drug Administration)?",
    image: "/images/gallery/gallery-05.webp",
    imageAlt: "Classical Ayurvedic Nasya Therapy for Sinusitis Migraine and Cervical Spondylosis at Shri Vishwavedhika Kharadi Pune",
    description: `In classical Ayurvedic pharmacology, it is declared: <em>"Nasa Hi Shirso Dvaram"</em>—the nose is the direct gateway to the brain and the entire supra-clavicular region. <strong>Nasya Therapy</strong> is the specialized branch of Panchakarma where medicated herbal oils, herbal juices, or medicinal decoctions are administered through the nostrils to cleanse and nourish cranial nerves, cerebral channels, sinuses, and cervical tissues. Sedentary computer screen time, air-conditioned corporate offices, and atmospheric pollution in <strong>Kharadi, Wagholi, and Viman Nagar</strong> trigger severe chronic sinusitis, allergic rhinitis, tension headaches, migraines (Suryavarta / Ardhavabhedaka), cervical spondylosis, and premature hair thinning. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> administers classical Nasya therapies tailored to eradicate entrenched Kapha and Vata stagnation, boosting sensory acuity, oxygenation, and neurological equilibrium.`,
    subheading: "Targeted Cranial Decongestion & Cervical Nourishment Protocol",
    subcontent: `Our clinical Nasya procedure adheres to authentic Charaka Samhita stages—opening facial channels with warm herbal oils and steam before delicate drop administration:`,
    checklist: [
      "Mukha & Greeva Abhyanga (Facial & Neck Massage)",
      "Bashpa Sweda (Localized Facial Steam Fomentation)",
      "Classical Nasya Dravya Administration",
      "Marma Point Acupressure Stimulation",
      "Gandusha & Dhumapana (Throat Cleansing & Herbal Smoke)",
    ],
    modalities: [
      {
        title: "Mukha & Greeva Abhyanga (Facial & Neck Massage)",
        description:
          "Warm medicated oil (Ksheerabala or Mahanarayana) applied with rhythmic pressure over facial sinuses, forehead, temples, and cervical spine.",
      },
      {
        title: "Bashpa Sweda (Localized Facial Steam Fomentation)",
        description:
          "Inhalation of customized herbal decoction steam that liquefies viscous sinus mucus and dilates micro-capillaries across facial pathways.",
      },
      {
        title: "Classical Nasya Dravya Administration",
        description:
          "Careful instillation of titrated drops of classical medicated oils (Anu Taila, Shadbindu Taila, or Ksheerabala 101) into each nostril with gentle inhalation.",
      },
      {
        title: "Marma Point Acupressure Stimulation",
        description:
          "Gentle therapeutic stimulation of vital Marma points (Sthapani, Phana, and Apanga) to enhance micro-circulation to optic and olfactory nerves.",
      },
      {
        title: "Gandusha & Dhumapana (Throat Cleansing & Herbal Smoke)",
        description:
          "Medicated gargling and therapeutic herbal smoking that expels detached mucus, clears vocal cords, and seals nasal mucosal immunity.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Nasya Therapy",
    benefitsSubcontent: `Administering potent herbal bio-actives trans-nasally delivers rapid, drug-free relief for chronic head, neck, and nervous disorders:`,
    benefits: [
      {
        title: "Permanent Relief from Chronic Sinusitis & Allergies",
        description:
          "Liquefies and purges stubborn sinus mucus, eliminating recurring morning sneezing, nasal blockage, and post-nasal drip.",
      },
      {
        title: "Cure for Migraines & Tension Headaches",
        description:
          "Directly soothes hyper-stimulated cranial blood vessels and trigeminal nerve endings, halting throbbing migraine attacks.",
      },
      {
        title: "Cervical Spondylosis & Frozen Shoulder Relief",
        description:
          "Nourishes degenerated cervical vertebrae, resolving radiating neck pain, shoulder numbness, and arm tingling.",
      },
      {
        title: "Sharpens Sensory Acuity & Cognitive Alertness",
        description:
          "Revitalizes brain micro-circulation, clearing brain fog, improving memory retention, and calming mental stress.",
      },
    ],
    faqs: [
      {
        question: "Does Nasya therapy cause burning, irritation, or throat discomfort?",
        answer:
          "Not when administered correctly. Our clinic uses classical, gentle medicated oils like Anu Taila at body temperature. Patients experience a mild tingling sensation as deep sinus secretions drain into the throat, which are safely spit out during the post-cleansing gargle.",
      },
      {
        question: "Who is the ideal candidate for Nasya therapy in Kharadi, Pune?",
        answer:
          "Nasya is ideal for professionals suffering from chronic migraines, tension headaches, computer-induced eye strain, cervical spondylosis, recurrent sinusitis, allergic rhinitis, hair loss, and sleep apnea.",
      },
      {
        question: "How many sessions of Nasya therapy are recommended for migraine relief?",
        answer:
          "For acute or recurring migraines and chronic sinus inflammation, a continuous course of 7, 14, or 21 daily sessions produces long-term freedom from attacks and decongests cranial channels.",
      },
      {
        question: "Can Nasya therapy help with hair fall and premature graying?",
        answer:
          "Yes. Because nasal channels directly nourish the roots of scalp hair follicles and cerebral capillaries, regular Anu Taila or Shadbindu Taila Nasya strengthens hair roots and curbs premature graying.",
      },
      {
        question: "How should I prepare for a Nasya session at your Kharadi clinic?",
        answer:
          "Avoid heavy meals 1 to 2 hours before therapy. Following the session, avoid direct cold wind, air conditioning, and drinking cold water for at least an hour to maximize mucosal absorption.",
      },
    ],
  },
  "nasya-therapy": {
    slug: "nasya-therapy",
    title: "Nasya Therapy in Kharadi, Pune | Classical Ayurvedic ENT, Migraine & Cervical Care",
    breadcrumbLabel: "Nasya Therapy",
    category: "Stress, Neuro & Head Care",introHeading: "What is Nasya Therapy (Nasal Drug Administration)?",
    image: "/images/gallery/gallery-05.webp",
    imageAlt: "Classical Ayurvedic Nasya Therapy for Sinusitis Migraine and Cervical Spondylosis at Shri Vishwavedhika Kharadi Pune",
    description: `In classical Ayurvedic pharmacology, it is declared: <em>"Nasa Hi Shirso Dvaram"</em>—the nose is the direct gateway to the brain and the entire supra-clavicular region. <strong>Nasya Therapy</strong> is the specialized branch of Panchakarma where medicated herbal oils, herbal juices, or medicinal decoctions are administered through the nostrils to cleanse and nourish cranial nerves, cerebral channels, sinuses, and cervical tissues. Sedentary computer screen time, air-conditioned corporate offices, and atmospheric pollution in <strong>Kharadi, Wagholi, and Viman Nagar</strong> trigger severe chronic sinusitis, allergic rhinitis, tension headaches, migraines (Suryavarta / Ardhavabhedaka), cervical spondylosis, and premature hair thinning. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> administers classical Nasya therapies tailored to eradicate entrenched Kapha and Vata stagnation, boosting sensory acuity, oxygenation, and neurological equilibrium.`,
    subheading: "Targeted Cranial Decongestion & Cervical Nourishment Protocol",
    subcontent: `Our clinical Nasya procedure adheres to authentic Charaka Samhita stages—opening facial channels with warm herbal oils and steam before delicate drop administration:`,
    checklist: [
      "Mukha & Greeva Abhyanga (Facial & Neck Massage)",
      "Bashpa Sweda (Localized Facial Steam Fomentation)",
      "Classical Nasya Dravya Administration",
      "Marma Point Acupressure Stimulation",
      "Gandusha & Dhumapana (Throat Cleansing & Herbal Smoke)",
    ],
    modalities: [
      {
        title: "Mukha & Greeva Abhyanga (Facial & Neck Massage)",
        description:
          "Warm medicated oil (Ksheerabala or Mahanarayana) applied with rhythmic pressure over facial sinuses, forehead, temples, and cervical spine.",
      },
      {
        title: "Bashpa Sweda (Localized Facial Steam Fomentation)",
        description:
          "Inhalation of customized herbal decoction steam that liquefies viscous sinus mucus and dilates micro-capillaries across facial pathways.",
      },
      {
        title: "Classical Nasya Dravya Administration",
        description:
          "Careful instillation of titrated drops of classical medicated oils (Anu Taila, Shadbindu Taila, or Ksheerabala 101) into each nostril with gentle inhalation.",
      },
      {
        title: "Marma Point Acupressure Stimulation",
        description:
          "Gentle therapeutic stimulation of vital Marma points (Sthapani, Phana, and Apanga) to enhance micro-circulation to optic and olfactory nerves.",
      },
      {
        title: "Gandusha & Dhumapana (Throat Cleansing & Herbal Smoke)",
        description:
          "Medicated gargling and therapeutic herbal smoking that expels detached mucus, clears vocal cords, and seals nasal mucosal immunity.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Nasya Therapy",
    benefitsSubcontent: `Administering potent herbal bio-actives trans-nasally delivers rapid, drug-free relief for chronic head, neck, and nervous disorders:`,
    benefits: [
      {
        title: "Permanent Relief from Chronic Sinusitis & Allergies",
        description:
          "Liquefies and purges stubborn sinus mucus, eliminating recurring morning sneezing, nasal blockage, and post-nasal drip.",
      },
      {
        title: "Cure for Migraines & Tension Headaches",
        description:
          "Directly soothes hyper-stimulated cranial blood vessels and trigeminal nerve endings, halting throbbing migraine attacks.",
      },
      {
        title: "Cervical Spondylosis & Frozen Shoulder Relief",
        description:
          "Nourishes degenerated cervical vertebrae, resolving radiating neck pain, shoulder numbness, and arm tingling.",
      },
      {
        title: "Sharpens Sensory Acuity & Cognitive Alertness",
        description:
          "Revitalizes brain micro-circulation, clearing brain fog, improving memory retention, and calming mental stress.",
      },
    ],
    faqs: [
      {
        question: "Does Nasya therapy cause burning, irritation, or throat discomfort?",
        answer:
          "Not when administered correctly. Our clinic uses classical, gentle medicated oils like Anu Taila at body temperature. Patients experience a mild tingling sensation as deep sinus secretions drain into the throat, which are safely spit out during the post-cleansing gargle.",
      },
      {
        question: "Who is the ideal candidate for Nasya therapy in Kharadi, Pune?",
        answer:
          "Nasya is ideal for professionals suffering from chronic migraines, tension headaches, computer-induced eye strain, cervical spondylosis, recurrent sinusitis, allergic rhinitis, hair loss, and sleep apnea.",
      },
      {
        question: "How many sessions of Nasya therapy are recommended for migraine relief?",
        answer:
          "For acute or recurring migraines and chronic sinus inflammation, a continuous course of 7, 14, or 21 daily sessions produces long-term freedom from attacks and decongests cranial channels.",
      },
      {
        question: "Can Nasya therapy help with hair fall and premature graying?",
        answer:
          "Yes. Because nasal channels directly nourish the roots of scalp hair follicles and cerebral capillaries, regular Anu Taila or Shadbindu Taila Nasya strengthens hair roots and curbs premature graying.",
      },
      {
        question: "How should I prepare for a Nasya session at your Kharadi clinic?",
        answer:
          "Avoid heavy meals 1 to 2 hours before therapy. Following the session, avoid direct cold wind, air conditioning, and drinking cold water for at least an hour to maximize mucosal absorption.",
      },
    ],
  },
  "raktamokshana-treatment": {
    slug: "raktamokshana-treatment",
    title: "Raktamokshana Treatment in Kharadi, Pune | Ayurvedic Bloodletting & Leech Therapy",
    breadcrumbLabel: "Raktamokshana Treatment",
    category: "Skin, Hair & Blood Purification",introHeading: "What is Raktamokshana Treatment (Ayurvedic Bloodletting)?",
    image: "/images/gallery/gallery-06.webp",
    imageAlt: "Ayurvedic Raktamokshana Bloodletting and Hijama Cupping Therapy at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Raktamokshana is the revered fifth classical purification procedure of Panchakarma, hailed by Acharya Sushruta as the ultimate emergency therapy for severe blood (<strong>Rakta Dhatu</strong>) and <strong>Pitta dosha</strong> disorders. When cellular toxins (<strong>Ama</strong>) and metabolic impurities overheat the bloodstream, they manifest as stubborn, non-healing skin diseases, severe eczema, psoriasis, chronic cystic acne, varicose veins, gouty arthritis (Vatarakta), alopecia areata, and localized inflammatory pain. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> conducts safe, sterile <strong>Raktamokshana</strong> using classical methods including <strong>Jalaukavacharana (Leech Therapy)</strong>, <strong>Siravyadha (Venepuncture)</strong>, and <strong>Alabu / Pracchana (Wet Cupping / Hijama)</strong>. By extracting only impure, stagnant venous blood loaded with inflammatory cytokines, Raktamokshana provides rapid pain relief, halts skin degeneration, and stimulates fresh, oxygenated micro-circulation for residents across <strong>Kharadi, Wagholi, Viman Nagar, Magarpatta, and Hadapsar</strong>.`,
    subheading: "Sterile, Controlled Blood Detoxification Protocols in Kharadi",
    subcontent: `Carried out under hospital-grade aseptic standards, our clinical blood purification protocols are customized according to the exact depth and location of toxic blood stagnation:`,
    checklist: [
      "Jalaukavacharana (Medicinal Leech Therapy)",
      "Siravyadha (Targeted Therapeutic Venepuncture)",
      "Pracchana & Hijama Wet Cupping",
      "Aseptic Pre-Treatment & Shodhana",
      "Herbal Hemostatic Dressing (Rakta Sthapana)",
    ],
    modalities: [
      {
        title: "Jalaukavacharana (Medicinal Leech Therapy)",
        description:
          "Application of purified medicinal leeches (Hirudo medicinalis) that painlessly suck out only impure venous blood while secreting 100+ bioactive enzymes (hirudin, calin) that dissolve clots and reduce inflammation.",
      },
      {
        title: "Siravyadha (Targeted Therapeutic Venepuncture)",
        description:
          "Precision classical bloodletting from specific superficial veins using sterile micro-needles to rapidly relieve generalized blood toxicity, severe hypertension, and gout attacks.",
      },
      {
        title: "Pracchana & Hijama Wet Cupping",
        description:
          "Superficial micro-scarification combined with vacuum suction cups that draws congested capillary toxins out of localized skin lesions, eczema patches, and alopecia spots.",
      },
      {
        title: "Aseptic Pre-Treatment & Shodhana",
        description:
          "Pre-cleansing of the target skin area with sterile herbal decoctions (Haridra and Triphala Kwatha) to guarantee zero post-therapy infection risks.",
      },
      {
        title: "Herbal Hemostatic Dressing (Rakta Sthapana)",
        description:
          "Application of natural styptic herbal pastes (Jatyadi Taila, Lodhra, and Shatadhauta Ghrita) ensuring immediate, healthy clotting and rapid skin regeneration.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Raktamokshana Therapy",
    benefitsSubcontent: `Direct physical extraction of stagnant, toxic venous blood delivers instantaneous anti-inflammatory and tissue-healing results:`,
    benefits: [
      {
        title: "Immediate Pain Relief in Gout & Arthritis",
        description:
          "Drastically reduces uric acid accumulation and localized inflammatory swelling, providing relief where analgesics fail.",
      },
      {
        title: "Rapid Clearing of Psoriasis, Eczema & Acne",
        description:
          "Cleanses deep blood impurities, drying up weeping lesions, terminating severe itching, and preventing recurring flare-ups.",
      },
      {
        title: "Non-Surgical Relief for Varicose Veins",
        description:
          "Decongests bulging, pooled venous blood in the lower legs, relieving burning sensations, heaviness, and vascular pigmentation.",
      },
      {
        title: "Follicle Stimulation in Alopecia Areata",
        description:
          "Re-opens dormant micro-capillaries around bald patches, clearing toxic fungal/cellular stagnation to trigger fresh hair regrowth.",
      },
    ],
    faqs: [
      {
        question: "Is Raktamokshana safe, and does leech therapy hurt?",
        answer:
          "Yes, it is extremely safe. We use exclusively laboratory-purified, single-use medicinal leeches under sterile clinical conditions. The bite of a leech is virtually painless, feeling like a mild ant prick because leech saliva naturally contains anesthetic substances.",
      },
      {
        question: "How much blood is typically removed during a session?",
        answer:
          "Only a very small, controlled volume (typically 15 to 50 ml depending on the modality and patient strength) of impure venous blood is removed. This small extraction causes zero systemic weakness while producing massive localized therapeutic decompression.",
      },
      {
        question: "Which conditions respond best to Jalaukavacharana (Leech Therapy)?",
        answer:
          "Leech therapy is extraordinarily effective for varicose veins, diabetic micro-ulcers, non-healing wounds, localized eczema patches, dark skin pigmentation, osteoarthritic knee swelling, and alopecia areata.",
      },
      {
        question: "Are there any marks or scars left after Raktamokshana?",
        answer:
          "Micro-punctures heal rapidly within 3 to 7 days with the application of our classical herbal healing ointment (Jatyadi Taila), leaving negligible to zero long-term marks on the skin.",
      },
      {
        question: "How do I book a Raktamokshana evaluation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "Contact Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center by calling 096049 95998 or 097302 93777, or via WhatsApp. Dr. Majiri Musmade will evaluate your pulse, hemoglobin level, and skin condition to confirm suitability and design your treatment.",
      },
    ],
  },
  "raktamokshana": {
    slug: "raktamokshana",
    title: "Raktamokshana Treatment in Kharadi, Pune | Ayurvedic Bloodletting & Leech Therapy",
    breadcrumbLabel: "Raktamokshana Treatment",
    category: "Skin, Hair & Blood Purification",introHeading: "What is Raktamokshana Treatment (Ayurvedic Bloodletting)?",
    image: "/images/gallery/gallery-06.webp",
    imageAlt: "Ayurvedic Raktamokshana Bloodletting and Hijama Cupping Therapy at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Raktamokshana is the revered fifth classical purification procedure of Panchakarma, hailed by Acharya Sushruta as the ultimate emergency therapy for severe blood (<strong>Rakta Dhatu</strong>) and <strong>Pitta dosha</strong> disorders. When cellular toxins (<strong>Ama</strong>) and metabolic impurities overheat the bloodstream, they manifest as stubborn, non-healing skin diseases, severe eczema, psoriasis, chronic cystic acne, varicose veins, gouty arthritis (Vatarakta), alopecia areata, and localized inflammatory pain. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> conducts safe, sterile <strong>Raktamokshana</strong> using classical methods including <strong>Jalaukavacharana (Leech Therapy)</strong>, <strong>Siravyadha (Venepuncture)</strong>, and <strong>Alabu / Pracchana (Wet Cupping / Hijama)</strong>. By extracting only impure, stagnant venous blood loaded with inflammatory cytokines, Raktamokshana provides rapid pain relief, halts skin degeneration, and stimulates fresh, oxygenated micro-circulation for residents across <strong>Kharadi, Wagholi, Viman Nagar, Magarpatta, and Hadapsar</strong>.`,
    subheading: "Sterile, Controlled Blood Detoxification Protocols in Kharadi",
    subcontent: `Carried out under hospital-grade aseptic standards, our clinical blood purification protocols are customized according to the exact depth and location of toxic blood stagnation:`,
    checklist: [
      "Jalaukavacharana (Medicinal Leech Therapy)",
      "Siravyadha (Targeted Therapeutic Venepuncture)",
      "Pracchana & Hijama Wet Cupping",
      "Aseptic Pre-Treatment & Shodhana",
      "Herbal Hemostatic Dressing (Rakta Sthapana)",
    ],
    modalities: [
      {
        title: "Jalaukavacharana (Medicinal Leech Therapy)",
        description:
          "Application of purified medicinal leeches (Hirudo medicinalis) that painlessly suck out only impure venous blood while secreting 100+ bioactive enzymes (hirudin, calin) that dissolve clots and reduce inflammation.",
      },
      {
        title: "Siravyadha (Targeted Therapeutic Venepuncture)",
        description:
          "Precision classical bloodletting from specific superficial veins using sterile micro-needles to rapidly relieve generalized blood toxicity, severe hypertension, and gout attacks.",
      },
      {
        title: "Pracchana & Hijama Wet Cupping",
        description:
          "Superficial micro-scarification combined with vacuum suction cups that draws congested capillary toxins out of localized skin lesions, eczema patches, and alopecia spots.",
      },
      {
        title: "Aseptic Pre-Treatment & Shodhana",
        description:
          "Pre-cleansing of the target skin area with sterile herbal decoctions (Haridra and Triphala Kwatha) to guarantee zero post-therapy infection risks.",
      },
      {
        title: "Herbal Hemostatic Dressing (Rakta Sthapana)",
        description:
          "Application of natural styptic herbal pastes (Jatyadi Taila, Lodhra, and Shatadhauta Ghrita) ensuring immediate, healthy clotting and rapid skin regeneration.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Raktamokshana Therapy",
    benefitsSubcontent: `Direct physical extraction of stagnant, toxic venous blood delivers instantaneous anti-inflammatory and tissue-healing results:`,
    benefits: [
      {
        title: "Immediate Pain Relief in Gout & Arthritis",
        description:
          "Drastically reduces uric acid accumulation and localized inflammatory swelling, providing relief where analgesics fail.",
      },
      {
        title: "Rapid Clearing of Psoriasis, Eczema & Acne",
        description:
          "Cleanses deep blood impurities, drying up weeping lesions, terminating severe itching, and preventing recurring flare-ups.",
      },
      {
        title: "Non-Surgical Relief for Varicose Veins",
        description:
          "Decongests bulging, pooled venous blood in the lower legs, relieving burning sensations, heaviness, and vascular pigmentation.",
      },
      {
        title: "Follicle Stimulation in Alopecia Areata",
        description:
          "Re-opens dormant micro-capillaries around bald patches, clearing toxic fungal/cellular stagnation to trigger fresh hair regrowth.",
      },
    ],
    faqs: [
      {
        question: "Is Raktamokshana safe, and does leech therapy hurt?",
        answer:
          "Yes, it is extremely safe. We use exclusively laboratory-purified, single-use medicinal leeches under sterile clinical conditions. The bite of a leech is virtually painless, feeling like a mild ant prick because leech saliva naturally contains anesthetic substances.",
      },
      {
        question: "How much blood is typically removed during a session?",
        answer:
          "Only a very small, controlled volume (typically 15 to 50 ml depending on the modality and patient strength) of impure venous blood is removed. This small extraction causes zero systemic weakness while producing massive localized therapeutic decompression.",
      },
      {
        question: "Which conditions respond best to Jalaukavacharana (Leech Therapy)?",
        answer:
          "Leech therapy is extraordinarily effective for varicose veins, diabetic micro-ulcers, non-healing wounds, localized eczema patches, dark skin pigmentation, osteoarthritic knee swelling, and alopecia areata.",
      },
      {
        question: "Are there any marks or scars left after Raktamokshana?",
        answer:
          "Micro-punctures heal rapidly within 3 to 7 days with the application of our classical herbal healing ointment (Jatyadi Taila), leaving negligible to zero long-term marks on the skin.",
      },
      {
        question: "How do I book a Raktamokshana evaluation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "Contact Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center by calling 096049 95998 or 097302 93777, or via WhatsApp. Dr. Majiri Musmade will evaluate your pulse, hemoglobin level, and skin condition to confirm suitability and design your treatment.",
      },
    ],
  },
  "janu-basti-treatment": {
    slug: "janu-basti-treatment",
    title: "Janu Basti Treatment in Kharadi, Pune | Non-Surgical Knee Arthritis & Joint Relief",
    breadcrumbLabel: "Janu Basti (Knee Care)",
    category: "Spine & Joint Orthopedic Care",
    introHeading: "What is Janu Basti Treatment?",
    image: "/images/gallery/gallery-09.webp",
    imageAlt: "Janu Basti Ayurvedic Knee Joint Pain and Osteoarthritis Treatment in Kharadi Pune",
    description: `Knee joint pain, osteoarthritis (Janu Sandhigata Vata), meniscus degeneration, and painful joint crepitus (cracking sounds) severely limit daily mobility for senior citizens and active adults across <strong>Kharadi, Wagholi, and Viman Nagar</strong>. In classical Ayurveda, knee cartilage wear-and-tear occurs when vitiated Vata dosha depletes the natural unctuous lubricating fluid (Shleshaka Kapha) within the joint capsule. <strong>Janu Basti</strong> is the premier non-surgical classical therapy specifically engineered to halt knee degeneration and nourish articular cartilage. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> places specially shaped dough reservoirs over the affected knee joints, within which warm, medicated classical herbal oils (such as Sahacharadi, Ksheerabala, and Mahanarayana Taila) are pooled for 30 to 45 minutes. This intensive transdermal therapy lubricates patellar cartilage, stimulates natural synovial fluid secretion, and relieves chronic knee pain without the risks of knee replacement surgery.`,
    subheading: "Comprehensive Non-Surgical Knee Rehabilitation Protocol",
    subcontent: `Our clinical Janu Basti protocol combines sustained medicated thermal pooling with targeted herbal fomentation to restore natural knee cushioning and pain-free walking:`,
    checklist: [
      "Warm Medicated Oil Pooling (Janu Basti Ring)",
      "Patra Pinda Sweda (Herbal Leaf Fomentation)",
      "Synovial Fluid & Cartilage Lubrication",
      "Janu Dhara (Continuous Herbal Oil Stream)",
      "Quadriceps & Hamstring Mobility Guidance",
    ],
    modalities: [
      {
        title: "Warm Medicated Oil Pooling (Janu Basti Ring)",
        description:
          "Sustained retention of warm Sahacharadi and Mahanarayana oils within a leak-proof dough dam, allowing lipid bio-actives to penetrate deep into the patellofemoral joint space.",
      },
      {
        title: "Patra Pinda Sweda (Herbal Leaf Fomentation)",
        description:
          "Application of warm medicinal leaf boluses (Nirgundi, Arka, and Eranda) around knee tendons to relieve joint swelling and dissipate stiffness.",
      },
      {
        title: "Synovial Fluid (Shleshaka Kapha) Nourishment",
        description:
          "Targeted lipid transdermal absorption stimulates natural synovial membrane secretions, eliminating painful friction and cracking sounds during knee bending.",
      },
      {
        title: "Janu Dhara (Continuous Medicated Stream)",
        description:
          "Rhythmic pouring of warm anti-inflammatory herbal oils to relieve acute knee joint effusion, bursitis, and severe morning joint locking.",
      },
      {
        title: "Joint Mobilization & Ergonomic Guidance",
        description:
          "Personalized, low-impact Ayurvedic joint exercises and posture corrections to strengthen supporting quadriceps without wearing down the knee cartilage.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Janu Basti for Knee Care",
    benefitsSubcontent: `By directly treating the primary cause of cartilage depletion, Janu Basti produces transformative orthopedic recovery:`,
    benefits: [
      {
        title: "Effective Alternative to Knee Replacement",
        description:
          "Significantly improves joint space and halts cartilage erosion in Grade 1, 2, and 3 Osteoarthritis, avoiding or delaying surgical intervention.",
      },
      {
        title: "Immediate Relief from Joint Stiffness & Pain",
        description:
          "Eliminates morning stiffness, eases painful stair climbing, and relieves throbbing pain while standing or walking.",
      },
      {
        title: "Terminates Painful Crepitus (Joint Cracking)",
        description:
          "Restores thick, healthy synovial cushioning, stopping bone-on-bone friction and grinding noises in the knee.",
      },
      {
        title: "Restores Natural Flexion & Walking Stamina",
        description:
          "Improves comfortable knee bending angles and enhances endurance, allowing patients to walk comfortably and resume social life.",
      },
    ],
    faqs: [
      {
        question: "Can Janu Basti help avoid knee replacement surgery in Kharadi, Pune?",
        answer:
          "Yes. In mild to moderate osteoarthritis (Grades 1, 2, and 3), a structured course of 7 to 14 Janu Basti sessions combined with internal herbal Rasayanas successfully halts cartilage degeneration, replenishes synovial fluid, relieves pain, and helps patients avoid invasive knee replacement surgery.",
      },
      {
        question: "How many sessions of Janu Basti are typically required to see results?",
        answer:
          "Noticeable pain reduction and easier knee movement often begin within 3 to 5 sessions. For long-term cartilage nourishment and lasting relief from chronic osteoarthritis, an uninterrupted course of 7 to 14 daily sessions is strongly recommended.",
      },
      {
        question: "Which medicated herbal oils are used for Janu Basti?",
        answer:
          "We use classical, 100% authentic Ayurvedic formulations including Sahacharadi Taila, Ksheerabala Taila, Mahanarayana Taila, Murivenna, and Dhanwantharam Taila, individually selected based on your Prakriti and pulse diagnosis.",
      },
      {
        question: "Is Janu Basti safe for elderly patients with bilateral knee pain?",
        answer:
          "Absolutely. Janu Basti is a completely gentle, non-invasive external therapy with zero chemical side effects. Both knees can be treated simultaneously or sequentially with warm, soothing medicated oils tailored for senior mobility.",
      },
      {
        question: "How do I schedule an appointment for Janu Basti at Shri Vishwavedhika?",
        answer:
          "You can easily book a consultation by calling 096049 95998 or 097302 93777, or via WhatsApp. Our clinic is centrally located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "janu-basti": {
    slug: "janu-basti",
    title: "Janu Basti Treatment in Kharadi, Pune | Non-Surgical Knee Arthritis & Joint Relief",
    breadcrumbLabel: "Janu Basti (Knee Care)",
    category: "Spine & Joint Orthopedic Care",
    introHeading: "What is Janu Basti Treatment?",
    image: "/images/gallery/gallery-09.webp",
    imageAlt: "Janu Basti Ayurvedic Knee Joint Pain and Osteoarthritis Treatment in Kharadi Pune",
    description: `Knee joint pain, osteoarthritis (Janu Sandhigata Vata), meniscus degeneration, and painful joint crepitus (cracking sounds) severely limit daily mobility for senior citizens and active adults across <strong>Kharadi, Wagholi, and Viman Nagar</strong>. In classical Ayurveda, knee cartilage wear-and-tear occurs when vitiated Vata dosha depletes the natural unctuous lubricating fluid (Shleshaka Kapha) within the joint capsule. <strong>Janu Basti</strong> is the premier non-surgical classical therapy specifically engineered to halt knee degeneration and nourish articular cartilage. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> places specially shaped dough reservoirs over the affected knee joints, within which warm, medicated classical herbal oils (such as Sahacharadi, Ksheerabala, and Mahanarayana Taila) are pooled for 30 to 45 minutes. This intensive transdermal therapy lubricates patellar cartilage, stimulates natural synovial fluid secretion, and relieves chronic knee pain without the risks of knee replacement surgery.`,
    subheading: "Comprehensive Non-Surgical Knee Rehabilitation Protocol",
    subcontent: `Our clinical Janu Basti protocol combines sustained medicated thermal pooling with targeted herbal fomentation to restore natural knee cushioning and pain-free walking:`,
    checklist: [
      "Warm Medicated Oil Pooling (Janu Basti Ring)",
      "Patra Pinda Sweda (Herbal Leaf Fomentation)",
      "Synovial Fluid & Cartilage Lubrication",
      "Janu Dhara (Continuous Herbal Oil Stream)",
      "Quadriceps & Hamstring Mobility Guidance",
    ],
    modalities: [
      {
        title: "Warm Medicated Oil Pooling (Janu Basti Ring)",
        description:
          "Sustained retention of warm Sahacharadi and Mahanarayana oils within a leak-proof dough dam, allowing lipid bio-actives to penetrate deep into the patellofemoral joint space.",
      },
      {
        title: "Patra Pinda Sweda (Herbal Leaf Fomentation)",
        description:
          "Application of warm medicinal leaf boluses (Nirgundi, Arka, and Eranda) around knee tendons to relieve joint swelling and dissipate stiffness.",
      },
      {
        title: "Synovial Fluid (Shleshaka Kapha) Nourishment",
        description:
          "Targeted lipid transdermal absorption stimulates natural synovial membrane secretions, eliminating painful friction and cracking sounds during knee bending.",
      },
      {
        title: "Janu Dhara (Continuous Medicated Stream)",
        description:
          "Rhythmic pouring of warm anti-inflammatory herbal oils to relieve acute knee joint effusion, bursitis, and severe morning joint locking.",
      },
      {
        title: "Joint Mobilization & Ergonomic Guidance",
        description:
          "Personalized, low-impact Ayurvedic joint exercises and posture corrections to strengthen supporting quadriceps without wearing down the knee cartilage.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Janu Basti for Knee Care",
    benefitsSubcontent: `By directly treating the primary cause of cartilage depletion, Janu Basti produces transformative orthopedic recovery:`,
    benefits: [
      {
        title: "Effective Alternative to Knee Replacement",
        description:
          "Significantly improves joint space and halts cartilage erosion in Grade 1, 2, and 3 Osteoarthritis, avoiding or delaying surgical intervention.",
      },
      {
        title: "Immediate Relief from Joint Stiffness & Pain",
        description:
          "Eliminates morning stiffness, eases painful stair climbing, and relieves throbbing pain while standing or walking.",
      },
      {
        title: "Terminates Painful Crepitus (Joint Cracking)",
        description:
          "Restores thick, healthy synovial cushioning, stopping bone-on-bone friction and grinding noises in the knee.",
      },
      {
        title: "Restores Natural Flexion & Walking Stamina",
        description:
          "Improves comfortable knee bending angles and enhances endurance, allowing patients to walk comfortably and resume social life.",
      },
    ],
    faqs: [
      {
        question: "Can Janu Basti help avoid knee replacement surgery in Kharadi, Pune?",
        answer:
          "Yes. In mild to moderate osteoarthritis (Grades 1, 2, and 3), a structured course of 7 to 14 Janu Basti sessions combined with internal herbal Rasayanas successfully halts cartilage degeneration, replenishes synovial fluid, relieves pain, and helps patients avoid invasive knee replacement surgery.",
      },
      {
        question: "How many sessions of Janu Basti are typically required to see results?",
        answer:
          "Noticeable pain reduction and easier knee movement often begin within 3 to 5 sessions. For long-term cartilage nourishment and lasting relief from chronic osteoarthritis, an uninterrupted course of 7 to 14 daily sessions is strongly recommended.",
      },
      {
        question: "Which medicated herbal oils are used for Janu Basti?",
        answer:
          "We use classical, 100% authentic Ayurvedic formulations including Sahacharadi Taila, Ksheerabala Taila, Mahanarayana Taila, Murivenna, and Dhanwantharam Taila, individually selected based on your Prakriti and pulse diagnosis.",
      },
      {
        question: "Is Janu Basti safe for elderly patients with bilateral knee pain?",
        answer:
          "Absolutely. Janu Basti is a completely gentle, non-invasive external therapy with zero chemical side effects. Both knees can be treated simultaneously or sequentially with warm, soothing medicated oils tailored for senior mobility.",
      },
      {
        question: "How do I schedule an appointment for Janu Basti at Shri Vishwavedhika?",
        answer:
          "You can easily book a consultation by calling 096049 95998 or 097302 93777, or via WhatsApp. Our clinic is centrally located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "manya-basti-treatment": {
    slug: "manya-basti-treatment",
    title: "Manya Basti Treatment in Kharadi, Pune | Cervical Spondylosis & Tech Neck Relief",
    breadcrumbLabel: "Manya Basti (Neck Care)",
    category: "Spine & Joint Orthopedic Care",
    introHeading: "What is Manya Basti Treatment?",
    image: "/images/gallery/gallery-07.webp",
    imageAlt: "Manya Basti Ayurvedic Cervical Spondylosis and Neck Pain Treatment in Kharadi Pune",
    description: `Cervical spondylosis, herniated cervical discs (C5-C6, C6-C7), trapezius muscle knots, and "Tech Neck" syndrome are prevalent among software professionals and corporate executives in <strong>Kharadi, Wagholi, and Viman Nagar</strong> due to prolonged laptop hours, dual-monitor setups, and poor ergonomic posture. In Ayurveda, this condition stems from aggravated Vata dosha dehydrating the cervical discs (Manya Sandhigata Vata), causing chronic stiffness, radiating nerve pain down the arms, hand numbness, and tension headaches. <strong>Manya Basti</strong> is the classical non-surgical therapy specifically designed for cervical spine care. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> places a leak-proof dough dam over the nape of the neck, pooling warm, medicated herbal oils (such as Karpasasthiyadi, Ksheerabala 101, and Mahanarayana Taila) for 30 to 45 minutes. This intensive transdermal therapy rehydrates compressed cervical discs, decompresses the brachial plexus nerves, and restores full neck mobility.`,
    subheading: "Comprehensive Cervical Spine & Radiculopathy Care in Kharadi",
    subcontent: `Our clinical Manya Basti protocol systematically releases deep trapezius muscle tension, decompresses pinched cervical nerve roots, and rebuilds disc hydration:`,
    checklist: [
      "Cervical Dough Ring Placement (Manya Basti)",
      "Greeva & Skandha Abhyanga (Neck & Shoulder Massage)",
      "Nadi Sweda (Targeted Herbal Steam Fomentation)",
      "Brachial Plexus Decompression & Radiculopathy Relief",
      "IT Ergonomic Postural Realignment",
    ],
    modalities: [
      {
        title: "Cervical Dough Ring Placement (Manya Basti)",
        description:
          "Sustained pooling of warm medicated herbal oils directly over C1–C7 vertebrae, allowing lipid bio-actives to lubricate intervertebral discs and facet joints.",
      },
      {
        title: "Greeva & Skandha Abhyanga (Neck & Shoulder Massage)",
        description:
          "Specialized rhythmic myofascial massage targeting knotted trapezius, levator scapulae, and rhomboid muscles to dissolve stubborn trigger points.",
      },
      {
        title: "Nadi Sweda (Directed Herbal Steam)",
        description:
          "Focused application of warm herbal decoction steam through a specialized nozzle to release deep muscular spasms and improve cervical micro-circulation.",
      },
      {
        title: "Brachial Plexus Nerve Decompression",
        description:
          "Relieves inflammatory compression on cervical nerve roots, terminating tingling, numbness, and shooting pain down the shoulders and fingertips.",
      },
      {
        title: "IT Desk Ergonomics & Cervical Strengthening",
        description:
          "Personalized workstation ergonomic guidance, monitor height adjustments, and gentle cervical isometric stretches to prevent recurrent neck strain.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Manya Basti for Neck Care",
    benefitsSubcontent: `Direct transdermal cervical therapy produces rapid pain relief and long-term vertebral protection for desk workers:`,
    benefits: [
      {
        title: "Instant Relief from Tech Neck & Trapezius Spasms",
        description:
          "Melts away chronic shoulder tightness, severe neck stiffness, and painful muscle knots caused by long laptop and smartphone use.",
      },
      {
        title: "Reversal of Cervical Disc Degeneration",
        description:
          "Deeply rehydrates desiccated cervical discs, halting spondylotic bone spurs and restoring natural neck rotational flexibility.",
      },
      {
        title: "Cures Radiating Arm Numbness & Weakness",
        description:
          "Frees compressed brachial nerve roots, eliminating shooting electrical sensations and restoring firm grip strength in the hands.",
      },
      {
        title: "Relief from Cervicogenic Headaches & Vertigo",
        description:
          "Alleviates suboccipital nerve tension that triggers tension headaches behind the eyes and dizziness associated with cervical misalignment.",
      },
    ],
    faqs: [
      {
        question: "Can Manya Basti cure cervical spondylosis and neck stiffness?",
        answer:
          "Yes. Manya Basti is one of the most effective classical therapies for cervical spondylosis. The warm medicated herbal oils penetrate deep into the cervical facet joints, nourishing the cartilage, relieving nerve compression, and permanently relaxing spastic neck muscles.",
      },
      {
        question: "How does Manya Basti help IT professionals suffering from 'Tech Neck'?",
        answer:
          "Prolonged forward-head posture strains the cervical spine by up to 25 kg of excess mechanical load. Manya Basti counteracts this by reversing disc dehydration, melting stubborn trapezius knots, and restoring the natural lordotic curve of the neck.",
      },
      {
        question: "How many sessions of Manya Basti are recommended for chronic neck pain?",
        answer:
          "Mild to moderate neck stiffness often experiences substantial relief within 3 to 5 sessions. For chronic cervical disc bulges, radiculopathy, or severe spondylosis, an intensive course of 7 to 14 daily sessions produces sustained healing.",
      },
      {
        question: "Is Manya Basti therapy safe and comfortable?",
        answer:
          "Yes, it is extremely soothing and comfortable. The therapy is performed while you rest in a comfortable prone position. Warm, aromatic herbal oils are gently maintained at optimal therapeutic temperatures by trained therapists under Dr. Majiri Musmade supervision.",
      },
      {
        question: "How do I schedule an appointment for Manya Basti in Kharadi, Pune?",
        answer:
          "You can book directly by calling 096049 95998 or 097302 93777, or via WhatsApp. Our clinic is conveniently located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "manya-basti": {
    slug: "manya-basti",
    title: "Manya Basti Treatment in Kharadi, Pune | Cervical Spondylosis & Tech Neck Relief",
    breadcrumbLabel: "Manya Basti (Neck Care)",
    category: "Spine & Joint Orthopedic Care",
    introHeading: "What is Manya Basti Treatment?",
    image: "/images/gallery/gallery-07.webp",
    imageAlt: "Manya Basti Ayurvedic Cervical Spondylosis and Neck Pain Treatment in Kharadi Pune",
    description: `Cervical spondylosis, herniated cervical discs (C5-C6, C6-C7), trapezius muscle knots, and "Tech Neck" syndrome are prevalent among software professionals and corporate executives in <strong>Kharadi, Wagholi, and Viman Nagar</strong> due to prolonged laptop hours, dual-monitor setups, and poor ergonomic posture. In Ayurveda, this condition stems from aggravated Vata dosha dehydrating the cervical discs (Manya Sandhigata Vata), causing chronic stiffness, radiating nerve pain down the arms, hand numbness, and tension headaches. <strong>Manya Basti</strong> is the classical non-surgical therapy specifically designed for cervical spine care. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> places a leak-proof dough dam over the nape of the neck, pooling warm, medicated herbal oils (such as Karpasasthiyadi, Ksheerabala 101, and Mahanarayana Taila) for 30 to 45 minutes. This intensive transdermal therapy rehydrates compressed cervical discs, decompresses the brachial plexus nerves, and restores full neck mobility.`,
    subheading: "Comprehensive Cervical Spine & Radiculopathy Care in Kharadi",
    subcontent: `Our clinical Manya Basti protocol systematically releases deep trapezius muscle tension, decompresses pinched cervical nerve roots, and rebuilds disc hydration:`,
    checklist: [
      "Cervical Dough Ring Placement (Manya Basti)",
      "Greeva & Skandha Abhyanga (Neck & Shoulder Massage)",
      "Nadi Sweda (Targeted Herbal Steam Fomentation)",
      "Brachial Plexus Decompression & Radiculopathy Relief",
      "IT Ergonomic Postural Realignment",
    ],
    modalities: [
      {
        title: "Cervical Dough Ring Placement (Manya Basti)",
        description:
          "Sustained pooling of warm medicated herbal oils directly over C1–C7 vertebrae, allowing lipid bio-actives to lubricate intervertebral discs and facet joints.",
      },
      {
        title: "Greeva & Skandha Abhyanga (Neck & Shoulder Massage)",
        description:
          "Specialized rhythmic myofascial massage targeting knotted trapezius, levator scapulae, and rhomboid muscles to dissolve stubborn trigger points.",
      },
      {
        title: "Nadi Sweda (Directed Herbal Steam)",
        description:
          "Focused application of warm herbal decoction steam through a specialized nozzle to release deep muscular spasms and improve cervical micro-circulation.",
      },
      {
        title: "Brachial Plexus Nerve Decompression",
        description:
          "Relieves inflammatory compression on cervical nerve roots, terminating tingling, numbness, and shooting pain down the shoulders and fingertips.",
      },
      {
        title: "IT Desk Ergonomics & Cervical Strengthening",
        description:
          "Personalized workstation ergonomic guidance, monitor height adjustments, and gentle cervical isometric stretches to prevent recurrent neck strain.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Manya Basti for Neck Care",
    benefitsSubcontent: `Direct transdermal cervical therapy produces rapid pain relief and long-term vertebral protection for desk workers:`,
    benefits: [
      {
        title: "Instant Relief from Tech Neck & Trapezius Spasms",
        description:
          "Melts away chronic shoulder tightness, severe neck stiffness, and painful muscle knots caused by long laptop and smartphone use.",
      },
      {
        title: "Reversal of Cervical Disc Degeneration",
        description:
          "Deeply rehydrates desiccated cervical discs, halting spondylotic bone spurs and restoring natural neck rotational flexibility.",
      },
      {
        title: "Cures Radiating Arm Numbness & Weakness",
        description:
          "Frees compressed brachial nerve roots, eliminating shooting electrical sensations and restoring firm grip strength in the hands.",
      },
      {
        title: "Relief from Cervicogenic Headaches & Vertigo",
        description:
          "Alleviates suboccipital nerve tension that triggers tension headaches behind the eyes and dizziness associated with cervical misalignment.",
      },
    ],
    faqs: [
      {
        question: "Can Manya Basti cure cervical spondylosis and neck stiffness?",
        answer:
          "Yes. Manya Basti is one of the most effective classical therapies for cervical spondylosis. The warm medicated herbal oils penetrate deep into the cervical facet joints, nourishing the cartilage, relieving nerve compression, and permanently relaxing spastic neck muscles.",
      },
      {
        question: "How does Manya Basti help IT professionals suffering from 'Tech Neck'?",
        answer:
          "Prolonged forward-head posture strains the cervical spine by up to 25 kg of excess mechanical load. Manya Basti counteracts this by reversing disc dehydration, melting stubborn trapezius knots, and restoring the natural lordotic curve of the neck.",
      },
      {
        question: "How many sessions of Manya Basti are recommended for chronic neck pain?",
        answer:
          "Mild to moderate neck stiffness often experiences substantial relief within 3 to 5 sessions. For chronic cervical disc bulges, radiculopathy, or severe spondylosis, an intensive course of 7 to 14 daily sessions produces sustained healing.",
      },
      {
        question: "Is Manya Basti therapy safe and comfortable?",
        answer:
          "Yes, it is extremely soothing and comfortable. The therapy is performed while you rest in a comfortable prone position. Warm, aromatic herbal oils are gently maintained at optimal therapeutic temperatures by trained therapists under Dr. Majiri Musmade supervision.",
      },
      {
        question: "How do I schedule an appointment for Manya Basti in Kharadi, Pune?",
        answer:
          "You can book directly by calling 096049 95998 or 097302 93777, or via WhatsApp. Our clinic is conveniently located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "patra-pinda-sweda": {
    slug: "patra-pinda-sweda",
    title: "Patra Pinda Sweda in Kharadi, Pune | Classical Elakizhi Herbal Potli Therapy",
    breadcrumbLabel: "Patra Pinda Sweda (Potli)",
    category: "Spine & Joint Orthopedic Care",
    introHeading: "What is Patra Pinda Sweda (Elakizhi)?",
    image: "/images/gallery/gallery-12.webp",
    imageAlt: "Authentic Patra Pinda Sweda and Elakizhi Herbal Bolus Potli Massage at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Patra Pinda Sweda (popularly celebrated as <strong>Elakizhi</strong> in classical Kerala Ayurveda) is one of the most potent, rejuvenating sudation therapies for chronic spine stiffness, joint inflammation, and neuromuscular pain. In this classical therapy, freshly harvested medicinal leaves renowned for anti-inflammatory and Vata-pacifying virtues (such as <em>Arka, Nirgundi, Eranda, Shigru, and Dhatura</em>) are finely chopped, fried in medicated herbal oils with rock salt, grated coconut, and lemon, and bound into warm cotton boluses (Potlis). At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> administers authentic Elakizhi therapy. Rhythmic, heated bolus tapping and warm herbal oil strokes are applied across the entire spine and affected joints. The combination of sustained thermal heat and therapeutic leaf phytochemicals dissolves stubborn muscular knots, drains toxic inflammation, and restores complete joint flexibility for residents of <strong>Kharadi, Wagholi, Viman Nagar, Hadapsar, and Magarpatta</strong>.`,
    subheading: "Authentic Classical Elakizhi Procedure in Kharadi",
    subcontent: `Our clinical Patra Pinda Sweda procedure follows strict classical standards to ensure deep tissue heating and instantaneous muscular decompression:`,
    checklist: [
      "Fresh Medicinal Leaf Preparation (Nirgundi, Eranda & Arka)",
      "Cotton Bolus (Kizhi) Handcrafting & Thermal Heating",
      "Therapeutic Synchronized Bolus Massage (Elakizhi)",
      "Deep Thermic Myofascial Decontraction",
      "Medicated Decoction Sponge & Warm Bath",
    ],
    modalities: [
      {
        title: "Fresh Medicinal Leaf Preparation",
        description:
          "Fresh organic leaves of Nirgundi, Eranda, Arka, and Shigru are roasted in classical medicated oils (Kottamchukkadi and Sahacharadi) with herbal powders and rock salt.",
      },
      {
        title: "Heated Cotton Bolus (Kizhi) Handcrafting",
        description:
          "The roasted herbal mixture is tightly bound into sterile unbleached cotton pouches (Potlis) and continuously warmed in heated medicinal oil during therapy.",
      },
      {
        title: "Synchronized Bolus Percussion & Massage",
        description:
          "Rhythmic, synchronized bolus tapping and sweeping strokes applied by trained therapists over the spinal axis, joints, and tense muscle groups.",
      },
      {
        title: "Deep Thermic Muscle Decontraction",
        description:
          "Therapeutic heat dilates local blood vessels, allowing volatile herbal essential oils to penetrate deep into inflamed joints and paraspinal tendons.",
      },
      {
        title: "Herbal Decoction Sponge & Warm Cleansing",
        description:
          "Post-treatment sponge using warm herbal decoctions to wipe away toxins released through perspiration, leaving muscles deeply relaxed and pain-free.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Patra Pinda Sweda (Elakizhi)",
    benefitsSubcontent: `Thermal herbal bolus therapy provides fast, comprehensive relief across severe musculoskeletal and joint conditions:`,
    benefits: [
      {
        title: "Instant Relief from Severe Muscular Stiffness",
        description:
          "Eliminates morning joint rigidity, frozen shoulder, and muscle tightness, allowing effortless, fluid movement.",
      },
      {
        title: "Powerful Anti-Inflammatory & Analgesic Action",
        description:
          "Drastically reduces joint swelling, synovial inflammation, and arthritic pain in Osteoarthritis, Rheumatoid Arthritis, and Ankylosing Spondylitis.",
      },
      {
        title: "Dissolves Chronic Trigger Points & Fibrositis",
        description:
          "Breaks up deep myofascial adhesions and chronic knotting in the lower back, neck, shoulders, and gluteal muscles.",
      },
      {
        title: "Accelerates Postural & Sports Strain Recovery",
        description:
          "Boosts micro-circulation and cellular tissue repair, rapidly rehabilitating sprained ligaments, fatigued tendons, and postural stress.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Patra Pinda Sweda (Elakizhi) and regular potli massage?",
        answer:
          "Commercial spa potli massages typically use dry, powdered herbs with superficial heat. In contrast, authentic Patra Pinda Sweda uses fresh medicinal leaves (Nirgundi, Eranda, Arka) freshly fried in classical medicated oils, delivering deep pharmacological and anti-inflammatory benefits directly into joint tissues.",
      },
      {
        question: "Which medical conditions benefit most from Patra Pinda Sweda?",
        answer:
          "Elakizhi is exceptionally beneficial for osteoarthritis, rheumatoid arthritis, cervical spondylosis, lumbar spondylosis, sciatica, frozen shoulder, chronic back pain, sports injuries, and general neuromuscular fatigue.",
      },
      {
        question: "Is Patra Pinda Sweda performed for the whole body or localized joints?",
        answer:
          "We offer both whole-body Elakizhi (Sarvanga Sweda) for systemic stiffness and generalized pain, as well as localized potli therapy (Ekanga Sweda) focusing on specific problem areas such as the lower back, knees, or neck.",
      },
      {
        question: "How many sessions of Elakizhi are recommended for chronic joint pain?",
        answer:
          "While noticeable pain relief is felt from the very first session, a structured course of 5, 7, or 14 sessions is recommended for chronic arthritic conditions to achieve lasting reduction in swelling and joint mobility.",
      },
      {
        question: "How do I book an Elakizhi (Patra Pinda Sweda) session at your Kharadi clinic?",
        answer:
          "You can schedule your therapy by calling 096049 95998 or 097302 93777, or via WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "elakizhi-treatment": {
    slug: "elakizhi-treatment",
    title: "Patra Pinda Sweda in Kharadi, Pune | Classical Elakizhi Herbal Potli Therapy",
    breadcrumbLabel: "Patra Pinda Sweda (Potli)",
    category: "Spine & Joint Orthopedic Care",
    introHeading: "What is Patra Pinda Sweda (Elakizhi)?",
    image: "/images/gallery/gallery-12.webp",
    imageAlt: "Authentic Patra Pinda Sweda and Elakizhi Herbal Bolus Potli Massage at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Patra Pinda Sweda (popularly celebrated as <strong>Elakizhi</strong> in classical Kerala Ayurveda) is one of the most potent, rejuvenating sudation therapies for chronic spine stiffness, joint inflammation, and neuromuscular pain. In this classical therapy, freshly harvested medicinal leaves renowned for anti-inflammatory and Vata-pacifying virtues (such as <em>Arka, Nirgundi, Eranda, Shigru, and Dhatura</em>) are finely chopped, fried in medicated herbal oils with rock salt, grated coconut, and lemon, and bound into warm cotton boluses (Potlis). At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> administers authentic Elakizhi therapy. Rhythmic, heated bolus tapping and warm herbal oil strokes are applied across the entire spine and affected joints. The combination of sustained thermal heat and therapeutic leaf phytochemicals dissolves stubborn muscular knots, drains toxic inflammation, and restores complete joint flexibility for residents of <strong>Kharadi, Wagholi, Viman Nagar, Hadapsar, and Magarpatta</strong>.`,
    subheading: "Authentic Classical Elakizhi Procedure in Kharadi",
    subcontent: `Our clinical Patra Pinda Sweda procedure follows strict classical standards to ensure deep tissue heating and instantaneous muscular decompression:`,
    checklist: [
      "Fresh Medicinal Leaf Preparation (Nirgundi, Eranda & Arka)",
      "Cotton Bolus (Kizhi) Handcrafting & Thermal Heating",
      "Therapeutic Synchronized Bolus Massage (Elakizhi)",
      "Deep Thermic Myofascial Decontraction",
      "Medicated Decoction Sponge & Warm Bath",
    ],
    modalities: [
      {
        title: "Fresh Medicinal Leaf Preparation",
        description:
          "Fresh organic leaves of Nirgundi, Eranda, Arka, and Shigru are roasted in classical medicated oils (Kottamchukkadi and Sahacharadi) with herbal powders and rock salt.",
      },
      {
        title: "Heated Cotton Bolus (Kizhi) Handcrafting",
        description:
          "The roasted herbal mixture is tightly bound into sterile unbleached cotton pouches (Potlis) and continuously warmed in heated medicinal oil during therapy.",
      },
      {
        title: "Synchronized Bolus Percussion & Massage",
        description:
          "Rhythmic, synchronized bolus tapping and sweeping strokes applied by trained therapists over the spinal axis, joints, and tense muscle groups.",
      },
      {
        title: "Deep Thermic Muscle Decontraction",
        description:
          "Therapeutic heat dilates local blood vessels, allowing volatile herbal essential oils to penetrate deep into inflamed joints and paraspinal tendons.",
      },
      {
        title: "Herbal Decoction Sponge & Warm Cleansing",
        description:
          "Post-treatment sponge using warm herbal decoctions to wipe away toxins released through perspiration, leaving muscles deeply relaxed and pain-free.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Patra Pinda Sweda (Elakizhi)",
    benefitsSubcontent: `Thermal herbal bolus therapy provides fast, comprehensive relief across severe musculoskeletal and joint conditions:`,
    benefits: [
      {
        title: "Instant Relief from Severe Muscular Stiffness",
        description:
          "Eliminates morning joint rigidity, frozen shoulder, and muscle tightness, allowing effortless, fluid movement.",
      },
      {
        title: "Powerful Anti-Inflammatory & Analgesic Action",
        description:
          "Drastically reduces joint swelling, synovial inflammation, and arthritic pain in Osteoarthritis, Rheumatoid Arthritis, and Ankylosing Spondylitis.",
      },
      {
        title: "Dissolves Chronic Trigger Points & Fibrositis",
        description:
          "Breaks up deep myofascial adhesions and chronic knotting in the lower back, neck, shoulders, and gluteal muscles.",
      },
      {
        title: "Accelerates Postural & Sports Strain Recovery",
        description:
          "Boosts micro-circulation and cellular tissue repair, rapidly rehabilitating sprained ligaments, fatigued tendons, and postural stress.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Patra Pinda Sweda (Elakizhi) and regular potli massage?",
        answer:
          "Commercial spa potli massages typically use dry, powdered herbs with superficial heat. In contrast, authentic Patra Pinda Sweda uses fresh medicinal leaves (Nirgundi, Eranda, Arka) freshly fried in classical medicated oils, delivering deep pharmacological and anti-inflammatory benefits directly into joint tissues.",
      },
      {
        question: "Which medical conditions benefit most from Patra Pinda Sweda?",
        answer:
          "Elakizhi is exceptionally beneficial for osteoarthritis, rheumatoid arthritis, cervical spondylosis, lumbar spondylosis, sciatica, frozen shoulder, chronic back pain, sports injuries, and general neuromuscular fatigue.",
      },
      {
        question: "Is Patra Pinda Sweda performed for the whole body or localized joints?",
        answer:
          "We offer both whole-body Elakizhi (Sarvanga Sweda) for systemic stiffness and generalized pain, as well as localized potli therapy (Ekanga Sweda) focusing on specific problem areas such as the lower back, knees, or neck.",
      },
      {
        question: "How many sessions of Elakizhi are recommended for chronic joint pain?",
        answer:
          "While noticeable pain relief is felt from the very first session, a structured course of 5, 7, or 14 sessions is recommended for chronic arthritic conditions to achieve lasting reduction in swelling and joint mobility.",
      },
      {
        question: "How do I book an Elakizhi (Patra Pinda Sweda) session at your Kharadi clinic?",
        answer:
          "You can schedule your therapy by calling 096049 95998 or 097302 93777, or via WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "patra-potli-massage": {
    slug: "patra-potli-massage",
    title: "Patra Pinda Sweda in Kharadi, Pune | Classical Elakizhi Herbal Potli Therapy",
    breadcrumbLabel: "Patra Pinda Sweda (Potli)",
    category: "Spine & Joint Orthopedic Care",
    introHeading: "What is Patra Pinda Sweda (Elakizhi)?",
    image: "/images/gallery/gallery-12.webp",
    imageAlt: "Authentic Patra Pinda Sweda and Elakizhi Herbal Bolus Potli Massage at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Patra Pinda Sweda (popularly celebrated as <strong>Elakizhi</strong> in classical Kerala Ayurveda) is one of the most potent, rejuvenating sudation therapies for chronic spine stiffness, joint inflammation, and neuromuscular pain. In this classical therapy, freshly harvested medicinal leaves renowned for anti-inflammatory and Vata-pacifying virtues (such as <em>Arka, Nirgundi, Eranda, Shigru, and Dhatura</em>) are finely chopped, fried in medicated herbal oils with rock salt, grated coconut, and lemon, and bound into warm cotton boluses (Potlis). At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, <strong>Dr. Majiri Musmade</strong> administers authentic Elakizhi therapy. Rhythmic, heated bolus tapping and warm herbal oil strokes are applied across the entire spine and affected joints. The combination of sustained thermal heat and therapeutic leaf phytochemicals dissolves stubborn muscular knots, drains toxic inflammation, and restores complete joint flexibility for residents of <strong>Kharadi, Wagholi, Viman Nagar, Hadapsar, and Magarpatta</strong>.`,
    subheading: "Authentic Classical Elakizhi Procedure in Kharadi",
    subcontent: `Our clinical Patra Pinda Sweda procedure follows strict classical standards to ensure deep tissue heating and instantaneous muscular decompression:`,
    checklist: [
      "Fresh Medicinal Leaf Preparation (Nirgundi, Eranda & Arka)",
      "Cotton Bolus (Kizhi) Handcrafting & Thermal Heating",
      "Therapeutic Synchronized Bolus Massage (Elakizhi)",
      "Deep Thermic Myofascial Decontraction",
      "Medicated Decoction Sponge & Warm Bath",
    ],
    modalities: [
      {
        title: "Fresh Medicinal Leaf Preparation",
        description:
          "Fresh organic leaves of Nirgundi, Eranda, Arka, and Shigru are roasted in classical medicated oils (Kottamchukkadi and Sahacharadi) with herbal powders and rock salt.",
      },
      {
        title: "Heated Cotton Bolus (Kizhi) Handcrafting",
        description:
          "The roasted herbal mixture is tightly bound into sterile unbleached cotton pouches (Potlis) and continuously warmed in heated medicinal oil during therapy.",
      },
      {
        title: "Synchronized Bolus Percussion & Massage",
        description:
          "Rhythmic, synchronized bolus tapping and sweeping strokes applied by trained therapists over the spinal axis, joints, and tense muscle groups.",
      },
      {
        title: "Deep Thermic Muscle Decontraction",
        description:
          "Therapeutic heat dilates local blood vessels, allowing volatile herbal essential oils to penetrate deep into inflamed joints and paraspinal tendons.",
      },
      {
        title: "Herbal Decoction Sponge & Warm Cleansing",
        description:
          "Post-treatment sponge using warm herbal decoctions to wipe away toxins released through perspiration, leaving muscles deeply relaxed and pain-free.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Patra Pinda Sweda (Elakizhi)",
    benefitsSubcontent: `Thermal herbal bolus therapy provides fast, comprehensive relief across severe musculoskeletal and joint conditions:`,
    benefits: [
      {
        title: "Instant Relief from Severe Muscular Stiffness",
        description:
          "Eliminates morning joint rigidity, frozen shoulder, and muscle tightness, allowing effortless, fluid movement.",
      },
      {
        title: "Powerful Anti-Inflammatory & Analgesic Action",
        description:
          "Drastically reduces joint swelling, synovial inflammation, and arthritic pain in Osteoarthritis, Rheumatoid Arthritis, and Ankylosing Spondylitis.",
      },
      {
        title: "Dissolves Chronic Trigger Points & Fibrositis",
        description:
          "Breaks up deep myofascial adhesions and chronic knotting in the lower back, neck, shoulders, and gluteal muscles.",
      },
      {
        title: "Accelerates Postural & Sports Strain Recovery",
        description:
          "Boosts micro-circulation and cellular tissue repair, rapidly rehabilitating sprained ligaments, fatigued tendons, and postural stress.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Patra Pinda Sweda (Elakizhi) and regular potli massage?",
        answer:
          "Commercial spa potli massages typically use dry, powdered herbs with superficial heat. In contrast, authentic Patra Pinda Sweda uses fresh medicinal leaves (Nirgundi, Eranda, Arka) freshly fried in classical medicated oils, delivering deep pharmacological and anti-inflammatory benefits directly into joint tissues.",
      },
      {
        question: "Which medical conditions benefit most from Patra Pinda Sweda?",
        answer:
          "Elakizhi is exceptionally beneficial for osteoarthritis, rheumatoid arthritis, cervical spondylosis, lumbar spondylosis, sciatica, frozen shoulder, chronic back pain, sports injuries, and general neuromuscular fatigue.",
      },
      {
        question: "Is Patra Pinda Sweda performed for the whole body or localized joints?",
        answer:
          "We offer both whole-body Elakizhi (Sarvanga Sweda) for systemic stiffness and generalized pain, as well as localized potli therapy (Ekanga Sweda) focusing on specific problem areas such as the lower back, knees, or neck.",
      },
      {
        question: "How many sessions of Elakizhi are recommended for chronic joint pain?",
        answer:
          "While noticeable pain relief is felt from the very first session, a structured course of 5, 7, or 14 sessions is recommended for chronic arthritic conditions to achieve lasting reduction in swelling and joint mobility.",
      },
      {
        question: "How do I book an Elakizhi (Patra Pinda Sweda) session at your Kharadi clinic?",
        answer:
          "You can schedule your therapy by calling 096049 95998 or 097302 93777, or via WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "agnikarma-treatment": {
    slug: "agnikarma-treatment",
    title: "Agnikarma Treatment in Kharadi, Pune | Instant Heel Spur, Joint & Tendon Pain Relief",
    breadcrumbLabel: "Agnikarma Treatment",
    category: "Rapid Pain Relief & Vascular Therapies",
    introHeading: "What is Agnikarma Therapy (Thermal Micro-Cautery)?",
    image: "/images/gallery/gallery-20.webp",
    imageAlt: "Agnikarma Thermal Micro-Cautery Pain Management Therapy at Shri Vishwavedhika Kharadi Pune",
    description: `Agnikarma is one of the most celebrated and potent parasurgical procedures detailed in classical Ayurvedic surgery (Sushruta Samhita). Acharya Sushruta famously declared that diseases treated by Agnikarma never recur, establishing it as superior to medications (Bheshaja) and herbal alkalization (Kshara). At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical stewardship of <strong>Dr. Majiri Musmade</strong>, Agnikarma provides fast, non-invasive relief for acute and chronic musculoskeletal pain. Utilizing a red-hot sterilized <strong>Panchadhatu Shalaka</strong> (a specialized probe crafted from five therapeutic metals—copper, iron, zinc, silver, and lead), nanosecond micro-burns (Bindu) are precisely administered to localized pain trigger points, tendon insertions, and osteophytes. By transferring controlled therapeutic heat directly into deep sub-dermal tissues, Agnikarma instantly pacifies aggravated <strong>Vata and Kapha doshas</strong>, stimulates micro-vascular blood perfusion, dissolves cold metabolic stagnation (Ama), and deactivates hyper-sensitized pain receptors without cuts, stitches, or systemic medications.`,
    subheading: "Targeted Micro-Thermal Pain Management Protocol in Kharadi",
    subcontent: `Our specialized Agnikarma protocol is conducted under rigorous aseptic standards and personalized to patient tolerance, providing targeted therapeutic relief:`,
    checklist: [
      "Panchadhatu Shalaka Precision Heating & Sterilization",
      "Bindu & Vilekha Point Application on Marma Trigger Zones",
      "Immediate Kumari & Shatadhauta Ghrita Cooling Soothing",
      "Herbal Haridra Aseptic Skin Shield Application",
      "Snayu & Sandhi Rasayana Herbal Prescription",
    ],
    modalities: [
      {
        title: "Panchadhatu Shalaka Precision Heating & Sterilization",
        description:
          "High-temperature heating of specialized 5-metal medicinal probes over sterile flame, calibrating thermal depth specifically for superficial ligaments, tendons, or deep periosteum.",
      },
      {
        title: "Bindu & Vilekha Point Application on Marma Trigger Zones",
        description:
          "Nanosecond pinpoint micro-contact applied directly over calcaneal spurs, epicondyles, or tender facet joints, triggering instantaneous local endorphin release and micro-circulation.",
      },
      {
        title: "Immediate Kumari & Shatadhauta Ghrita Cooling Soothing",
        description:
          "Instant topical application of pure fresh Aloe Vera (Kumari) pulp and 100-times washed herbal ghee (Shatadhauta Ghrita) immediately extinguishing surface burning sensations.",
      },
      {
        title: "Herbal Haridra Aseptic Skin Shield Application",
        description:
          "Dusting with sterile micronized organic turmeric (Haridra Churna) to create an antimicrobial, natural protective scab that heals cleanly within 3 to 5 days without scars.",
      },
      {
        title: "Snayu & Sandhi Rasayana Herbal Prescription",
        description:
          "Oral classical adaptogens (Shallaki, Yograj Guggulu, Rasnasaptaka Kwatha, Hadjod) prescribed to regenerate damaged tendon fibers and prevent recurring joint inflammation.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Agnikarma",
    benefitsSubcontent: `Agnikarma is renowned for delivering immediate, measurable improvements across severe orthopedic and tendinopathy conditions:`,
    benefits: [
      {
        title: "Instant Measurable Pain Alleviation",
        description:
          "Drastically reduces excruciating pain scores within 15 minutes of application, providing relief where long-term NSAIDs and analgesics have failed.",
      },
      {
        title: "Permanent Reversal of Calcaneal Heel Spurs",
        description:
          "Resolves stubborn plantar fasciitis and morning heel pain, enabling patients to stand and walk comfortably from the very next morning.",
      },
      {
        title: "Cures Tennis Elbow & Frozen Shoulder",
        description:
          "Effectively treats lateral epicondylitis, golfer's elbow, and restricted shoulder joint capsule inflammation without painful cortisone injections.",
      },
      {
        title: "100% Non-Surgical & Outpatient Protocol",
        description:
          "Requires zero hospital admission, zero general anesthesia, and causes zero downtime, allowing immediate resumption of daily routines in Kharadi.",
      },
    ],
    faqs: [
      {
        question: "Is Agnikarma therapy painful or does it cause severe skin burns?",
        answer:
          "Agnikarma sounds intense, but it is remarkably tolerable and virtually painless when performed by an experienced practitioner like Dr. Majiri Musmade. The Panchadhatu probe touches the skin for only a fraction of a second (nanoseconds), creating only a momentary pinprick or mosquito-bite sensation. Fresh Aloe Vera pulp and Shatadhauta Ghrita are applied immediately to soothe the skin instantly.",
      },
      {
        question: "How many sessions of Agnikarma are needed for heel spur or plantar fasciitis in Kharadi?",
        answer:
          "Most patients with calcaneal heel spurs, Achilles tendonitis, or tennis elbow experience substantial pain reduction (often 50% to 80%) after just 1 or 2 sessions. For longstanding chronic cases, 3 to 5 sessions spaced a week apart achieve permanent, complete resolution of pain.",
      },
      {
        question: "Can Agnikarma cure chronic tennis elbow and golfer's elbow?",
        answer:
          "Yes. Agnikarma is considered the gold-standard classical treatment for chronic tendinopathies like lateral epicondylitis (tennis elbow) and medial epicondylitis (golfer's elbow). It stimulates targeted localized neovascularization, dislodges fibrotic scar tissue, and permanently heals strained tendon insertions.",
      },
      {
        question: "What aftercare and precautions are required following an Agnikarma session?",
        answer:
          "The treated micro-points form tiny superficial brown specks that naturally shed off in 3 to 5 days without leaving scars. Patients are advised to keep the area dry for 24 hours, avoid soap contact on the spots for 48 hours, and apply the prescribed Shatadhauta Ghrita or Jatyadi Taila as directed.",
      },
      {
        question: "How do I book an Agnikarma consultation with Dr. Majiri Musmade at Shri Vishwavedhika Kharadi?",
        answer:
          "You can schedule a consultation by calling 096049 95998 or 097302 93777, or via WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "agnikarma-therapy": {
    slug: "agnikarma-therapy",
    title: "Agnikarma Treatment in Kharadi, Pune | Instant Heel Spur, Joint & Tendon Pain Relief",
    breadcrumbLabel: "Agnikarma Treatment",
    category: "Rapid Pain Relief & Vascular Therapies",
    introHeading: "What is Agnikarma Therapy (Thermal Micro-Cautery)?",
    image: "/images/gallery/gallery-20.webp",
    imageAlt: "Agnikarma Thermal Micro-Cautery Pain Management Therapy at Shri Vishwavedhika Kharadi Pune",
    description: `Agnikarma is one of the most celebrated and potent parasurgical procedures detailed in classical Ayurvedic surgery (Sushruta Samhita). Acharya Sushruta famously declared that diseases treated by Agnikarma never recur, establishing it as superior to medications (Bheshaja) and herbal alkalization (Kshara). At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical stewardship of <strong>Dr. Majiri Musmade</strong>, Agnikarma provides fast, non-invasive relief for acute and chronic musculoskeletal pain. Utilizing a red-hot sterilized <strong>Panchadhatu Shalaka</strong> (a specialized probe crafted from five therapeutic metals—copper, iron, zinc, silver, and lead), nanosecond micro-burns (Bindu) are precisely administered to localized pain trigger points, tendon insertions, and osteophytes. By transferring controlled therapeutic heat directly into deep sub-dermal tissues, Agnikarma instantly pacifies aggravated <strong>Vata and Kapha doshas</strong>, stimulates micro-vascular blood perfusion, dissolves cold metabolic stagnation (Ama), and deactivates hyper-sensitized pain receptors without cuts, stitches, or systemic medications.`,
    subheading: "Targeted Micro-Thermal Pain Management Protocol in Kharadi",
    subcontent: `Our specialized Agnikarma protocol is conducted under rigorous aseptic standards and personalized to patient tolerance, providing targeted therapeutic relief:`,
    checklist: [
      "Panchadhatu Shalaka Precision Heating & Sterilization",
      "Bindu & Vilekha Point Application on Marma Trigger Zones",
      "Immediate Kumari & Shatadhauta Ghrita Cooling Soothing",
      "Herbal Haridra Aseptic Skin Shield Application",
      "Snayu & Sandhi Rasayana Herbal Prescription",
    ],
    modalities: [
      {
        title: "Panchadhatu Shalaka Precision Heating & Sterilization",
        description:
          "High-temperature heating of specialized 5-metal medicinal probes over sterile flame, calibrating thermal depth specifically for superficial ligaments, tendons, or deep periosteum.",
      },
      {
        title: "Bindu & Vilekha Point Application on Marma Trigger Zones",
        description:
          "Nanosecond pinpoint micro-contact applied directly over calcaneal spurs, epicondyles, or tender facet joints, triggering instantaneous local endorphin release and micro-circulation.",
      },
      {
        title: "Immediate Kumari & Shatadhauta Ghrita Cooling Soothing",
        description:
          "Instant topical application of pure fresh Aloe Vera (Kumari) pulp and 100-times washed herbal ghee (Shatadhauta Ghrita) immediately extinguishing surface burning sensations.",
      },
      {
        title: "Herbal Haridra Aseptic Skin Shield Application",
        description:
          "Dusting with sterile micronized organic turmeric (Haridra Churna) to create an antimicrobial, natural protective scab that heals cleanly within 3 to 5 days without scars.",
      },
      {
        title: "Snayu & Sandhi Rasayana Herbal Prescription",
        description:
          "Oral classical adaptogens (Shallaki, Yograj Guggulu, Rasnasaptaka Kwatha, Hadjod) prescribed to regenerate damaged tendon fibers and prevent recurring joint inflammation.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Agnikarma",
    benefitsSubcontent: `Agnikarma is renowned for delivering immediate, measurable improvements across severe orthopedic and tendinopathy conditions:`,
    benefits: [
      {
        title: "Instant Measurable Pain Alleviation",
        description:
          "Drastically reduces excruciating pain scores within 15 minutes of application, providing relief where long-term NSAIDs and analgesics have failed.",
      },
      {
        title: "Permanent Reversal of Calcaneal Heel Spurs",
        description:
          "Resolves stubborn plantar fasciitis and morning heel pain, enabling patients to stand and walk comfortably from the very next morning.",
      },
      {
        title: "Cures Tennis Elbow & Frozen Shoulder",
        description:
          "Effectively treats lateral epicondylitis, golfer's elbow, and restricted shoulder joint capsule inflammation without painful cortisone injections.",
      },
      {
        title: "100% Non-Surgical & Outpatient Protocol",
        description:
          "Requires zero hospital admission, zero general anesthesia, and causes zero downtime, allowing immediate resumption of daily routines in Kharadi.",
      },
    ],
    faqs: [
      {
        question: "Is Agnikarma therapy painful or does it cause severe skin burns?",
        answer:
          "Agnikarma sounds intense, but it is remarkably tolerable and virtually painless when performed by an experienced practitioner like Dr. Majiri Musmade. The Panchadhatu probe touches the skin for only a fraction of a second (nanoseconds), creating only a momentary pinprick or mosquito-bite sensation. Fresh Aloe Vera pulp and Shatadhauta Ghrita are applied immediately to soothe the skin instantly.",
      },
      {
        question: "How many sessions of Agnikarma are needed for heel spur or plantar fasciitis in Kharadi?",
        answer:
          "Most patients with calcaneal heel spurs, Achilles tendonitis, or tennis elbow experience substantial pain reduction (often 50% to 80%) after just 1 or 2 sessions. For longstanding chronic cases, 3 to 5 sessions spaced a week apart achieve permanent, complete resolution of pain.",
      },
      {
        question: "Can Agnikarma cure chronic tennis elbow and golfer's elbow?",
        answer:
          "Yes. Agnikarma is considered the gold-standard classical treatment for chronic tendinopathies like lateral epicondylitis (tennis elbow) and medial epicondylitis (golfer's elbow). It stimulates targeted localized neovascularization, dislodges fibrotic scar tissue, and permanently heals strained tendon insertions.",
      },
      {
        question: "What aftercare and precautions are required following an Agnikarma session?",
        answer:
          "The treated micro-points form tiny superficial brown specks that naturally shed off in 3 to 5 days without leaving scars. Patients are advised to keep the area dry for 24 hours, avoid soap contact on the spots for 48 hours, and apply the prescribed Shatadhauta Ghrita or Jatyadi Taila as directed.",
      },
      {
        question: "How do I book an Agnikarma consultation with Dr. Majiri Musmade at Shri Vishwavedhika Kharadi?",
        answer:
          "You can schedule a consultation by calling 096049 95998 or 097302 93777, or via WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "agnikarma": {
    slug: "agnikarma",
    title: "Agnikarma Treatment in Kharadi, Pune | Instant Heel Spur, Joint & Tendon Pain Relief",
    breadcrumbLabel: "Agnikarma Treatment",
    category: "Rapid Pain Relief & Vascular Therapies",
    introHeading: "What is Agnikarma Therapy (Thermal Micro-Cautery)?",
    image: "/images/gallery/gallery-20.webp",
    imageAlt: "Agnikarma Thermal Micro-Cautery Pain Management Therapy at Shri Vishwavedhika Kharadi Pune",
    description: `Agnikarma is one of the most celebrated and potent parasurgical procedures detailed in classical Ayurvedic surgery (Sushruta Samhita). Acharya Sushruta famously declared that diseases treated by Agnikarma never recur, establishing it as superior to medications (Bheshaja) and herbal alkalization (Kshara). At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical stewardship of <strong>Dr. Majiri Musmade</strong>, Agnikarma provides fast, non-invasive relief for acute and chronic musculoskeletal pain. Utilizing a red-hot sterilized <strong>Panchadhatu Shalaka</strong> (a specialized probe crafted from five therapeutic metals—copper, iron, zinc, silver, and lead), nanosecond micro-burns (Bindu) are precisely administered to localized pain trigger points, tendon insertions, and osteophytes. By transferring controlled therapeutic heat directly into deep sub-dermal tissues, Agnikarma instantly pacifies aggravated <strong>Vata and Kapha doshas</strong>, stimulates micro-vascular blood perfusion, dissolves cold metabolic stagnation (Ama), and deactivates hyper-sensitized pain receptors without cuts, stitches, or systemic medications.`,
    subheading: "Targeted Micro-Thermal Pain Management Protocol in Kharadi",
    subcontent: `Our specialized Agnikarma protocol is conducted under rigorous aseptic standards and personalized to patient tolerance, providing targeted therapeutic relief:`,
    checklist: [
      "Panchadhatu Shalaka Precision Heating & Sterilization",
      "Bindu & Vilekha Point Application on Marma Trigger Zones",
      "Immediate Kumari & Shatadhauta Ghrita Cooling Soothing",
      "Herbal Haridra Aseptic Skin Shield Application",
      "Snayu & Sandhi Rasayana Herbal Prescription",
    ],
    modalities: [
      {
        title: "Panchadhatu Shalaka Precision Heating & Sterilization",
        description:
          "High-temperature heating of specialized 5-metal medicinal probes over sterile flame, calibrating thermal depth specifically for superficial ligaments, tendons, or deep periosteum.",
      },
      {
        title: "Bindu & Vilekha Point Application on Marma Trigger Zones",
        description:
          "Nanosecond pinpoint micro-contact applied directly over calcaneal spurs, epicondyles, or tender facet joints, triggering instantaneous local endorphin release and micro-circulation.",
      },
      {
        title: "Immediate Kumari & Shatadhauta Ghrita Cooling Soothing",
        description:
          "Instant topical application of pure fresh Aloe Vera (Kumari) pulp and 100-times washed herbal ghee (Shatadhauta Ghrita) immediately extinguishing surface burning sensations.",
      },
      {
        title: "Herbal Haridra Aseptic Skin Shield Application",
        description:
          "Dusting with sterile micronized organic turmeric (Haridra Churna) to create an antimicrobial, natural protective scab that heals cleanly within 3 to 5 days without scars.",
      },
      {
        title: "Snayu & Sandhi Rasayana Herbal Prescription",
        description:
          "Oral classical adaptogens (Shallaki, Yograj Guggulu, Rasnasaptaka Kwatha, Hadjod) prescribed to regenerate damaged tendon fibers and prevent recurring joint inflammation.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Agnikarma",
    benefitsSubcontent: `Agnikarma is renowned for delivering immediate, measurable improvements across severe orthopedic and tendinopathy conditions:`,
    benefits: [
      {
        title: "Instant Measurable Pain Alleviation",
        description:
          "Drastically reduces excruciating pain scores within 15 minutes of application, providing relief where long-term NSAIDs and analgesics have failed.",
      },
      {
        title: "Permanent Reversal of Calcaneal Heel Spurs",
        description:
          "Resolves stubborn plantar fasciitis and morning heel pain, enabling patients to stand and walk comfortably from the very next morning.",
      },
      {
        title: "Cures Tennis Elbow & Frozen Shoulder",
        description:
          "Effectively treats lateral epicondylitis, golfer's elbow, and restricted shoulder joint capsule inflammation without painful cortisone injections.",
      },
      {
        title: "100% Non-Surgical & Outpatient Protocol",
        description:
          "Requires zero hospital admission, zero general anesthesia, and causes zero downtime, allowing immediate resumption of daily routines in Kharadi.",
      },
    ],
    faqs: [
      {
        question: "Is Agnikarma therapy painful or does it cause severe skin burns?",
        answer:
          "Agnikarma sounds intense, but it is remarkably tolerable and virtually painless when performed by an experienced practitioner like Dr. Majiri Musmade. The Panchadhatu probe touches the skin for only a fraction of a second (nanoseconds), creating only a momentary pinprick or mosquito-bite sensation. Fresh Aloe Vera pulp and Shatadhauta Ghrita are applied immediately to soothe the skin instantly.",
      },
      {
        question: "How many sessions of Agnikarma are needed for heel spur or plantar fasciitis in Kharadi?",
        answer:
          "Most patients with calcaneal heel spurs, Achilles tendonitis, or tennis elbow experience substantial pain reduction (often 50% to 80%) after just 1 or 2 sessions. For longstanding chronic cases, 3 to 5 sessions spaced a week apart achieve permanent, complete resolution of pain.",
      },
      {
        question: "Can Agnikarma cure chronic tennis elbow and golfer's elbow?",
        answer:
          "Yes. Agnikarma is considered the gold-standard classical treatment for chronic tendinopathies like lateral epicondylitis (tennis elbow) and medial epicondylitis (golfer's elbow). It stimulates targeted localized neovascularization, dislodges fibrotic scar tissue, and permanently heals strained tendon insertions.",
      },
      {
        question: "What aftercare and precautions are required following an Agnikarma session?",
        answer:
          "The treated micro-points form tiny superficial brown specks that naturally shed off in 3 to 5 days without leaving scars. Patients are advised to keep the area dry for 24 hours, avoid soap contact on the spots for 48 hours, and apply the prescribed Shatadhauta Ghrita or Jatyadi Taila as directed.",
      },
      {
        question: "How do I book an Agnikarma consultation with Dr. Majiri Musmade at Shri Vishwavedhika Kharadi?",
        answer:
          "You can schedule a consultation by calling 096049 95998 or 097302 93777, or via WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "jalaukavacharana-leech-therapy": {
    slug: "jalaukavacharana-leech-therapy",
    title: "Jalaukavacharana (Leech Therapy) in Kharadi, Pune | Varicose Veins & Vascular Detox",
    breadcrumbLabel: "Jalaukavacharana (Leech Therapy)",
    category: "Rapid Pain Relief & Vascular Therapies",
    introHeading: "What is Jalaukavacharana (Medicinal Leech Therapy)?",
    image: "/images/gallery/gallery-06.webp",
    imageAlt: "Jalaukavacharana Medicinal Leech Therapy for Varicose Veins at Shri Vishwavedhika Kharadi Pune",
    description: `Jalaukavacharana, or classical Ayurvedic medicinal leech therapy, is the most refined and painless method of blood purification (Raktamokshana) documented in the Sushruta Samhita. Specifically indicated for individuals with delicate constitutions, women, and children, it provides unmatched therapeutic relief for localized vascular congestion and deep tissue blood stagnation. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, sterile laboratory-certified <strong>Nirvisha Jalauka</strong> (non-poisonous medicinal leeches) are applied to affected zones such as bulging <strong>varicose veins, thrombophlebitis, stasis dermatitis, chronic eczema, and gout</strong>. As the leeches feed on impure venous blood, they simultaneously inject over 100 bioactive compounds—most notably <strong>Hirudin</strong> (a potent natural thrombin inhibitor), Calin, and Hyaluronidase—directly into the micro-capillary network. This enzymatic surge dissolves micro-thrombi, reverses venous valve hypertension, eliminates burning throbbing sensations, and dramatically accelerates the healing of chronic venous leg ulcers without surgical intervention.`,
    subheading: "Sterile Clinical Hirudotherapy Protocol in Kharadi",
    subcontent: `Our Jalaukavacharana procedures comply with the highest hospital-grade aseptic standards ensuring a sterile, comfortable, and therapeutic healing experience:`,
    checklist: [
      "Leech Shodhana & Vitality Activation in Haridra Jala",
      "Precision Anatomical Placement on Congested Venous Channels",
      "Active Bioactive Salivary Enzyme Perfusion Phase",
      "Painless Haridra-Assisted Detachment & Healing",
      "Aseptic Rakta Sthapana & Medicated Compression Dressing",
    ],
    modalities: [
      {
        title: "Leech Shodhana & Vitality Activation in Haridra Jala",
        description:
          "Purifying laboratory-bred medicinal leeches in fresh herbal turmeric water to enhance suction readiness and guarantee total medical sterility.",
      },
      {
        title: "Precision Anatomical Placement on Congested Venous Channels",
        description:
          "Careful positioning of active leeches over prominent varicose vein clusters, pigmented eczema patches, or swollen gouty joints.",
      },
      {
        title: "Active Bioactive Salivary Enzyme Perfusion Phase",
        description:
          "A 30 to 45-minute painless session where leeches gently withdraw toxic, stagnant venous blood while infusing natural Hirudin to dissolve clots and reduce vascular pressure.",
      },
      {
        title: "Painless Haridra-Assisted Detachment & Healing",
        description:
          "Safe and effortless detachment using gentle turmeric powder dusting, preventing any skin traction or discomfort to the patient.",
      },
      {
        title: "Aseptic Rakta Sthapana & Medicated Compression Dressing",
        description:
          "Application of classical styptic herbal packs (Shatadhauta Ghrita and Jatyadi Taila) and sterile compression bandages to promote rapid, clean wound closure.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Jalaukavacharana",
    benefitsSubcontent: `Undergoing authentic medicinal leech therapy delivers immediate symptomatic relief and sustained vascular restoration:`,
    benefits: [
      {
        title: "Non-Surgical Relief for Bulging Varicose Veins",
        description:
          "Decongests engorged, pooled venous blood channels, eliminating night-time calf cramps, throbbing leg ache, and heaviness within 24 to 48 hours.",
      },
      {
        title: "Dissolves Micro-Clots & Prevents Thrombosis",
        description:
          "Enzymatic Hirudin actively prevents clot formation and dissolves superficial thrombophlebitis, restoring healthy retrograde venous return.",
      },
      {
        title: "Reverses Stasis Dermatitis & Skin Pigmentation",
        description:
          "Clears dark brownish-purple hyperpigmentation, itching, and chronic non-healing venous stasis ulcers around ankles and lower legs.",
      },
      {
        title: "Immediate Decongestion in Gout & Acute Arthritis",
        description:
          "Rapidly extracts accumulated uric acid toxins and localized inflammatory heat, providing dramatic relief where conventional analgesics fail.",
      },
    ],
    faqs: [
      {
        question: "How does medicinal leech therapy relieve varicose veins without surgery?",
        answer:
          "In varicose veins, blood pools in the lower legs due to faulty venous valves. Medicinal leeches naturally draw out this stagnant, oxygen-depleted venous blood while injecting bioactive enzymes like Hirudin and Calin. These enzymes dilate constricted capillaries, dissolve micro-thrombi, reduce vascular pressure, and restore smooth blood flow back toward the heart without painful vein stripping or laser surgery.",
      },
      {
        question: "Is Jalaukavacharana painful or scary for patients in Kharadi?",
        answer:
          "Not at all. When the leech first attaches, patients experience only a very mild tingling sensation similar to an ant bite for 5 to 10 seconds. Immediately thereafter, the leech secretes natural local anesthetic compounds in its saliva, rendering the rest of the 30 to 45-minute procedure completely painless and deeply relaxing.",
      },
      {
        question: "Are the leeches reused or is there any risk of cross-infection?",
        answer:
          "At Shri Vishwavedhika, patient safety is our paramount priority. Every medicinal leech is used exclusively for a single individual and is never reused on another patient under any circumstance. All procedures follow hospital-grade aseptic protocols.",
      },
      {
        question: "How much blood is extracted during one session of leech therapy?",
        answer:
          "Each medicinal leech consumes only about 5 to 15 ml of stagnant venous blood. Usually, 2 to 4 leeches are applied per session, resulting in a modest, highly therapeutic extraction of 20 to 60 ml of localized stagnant blood—completely safe and fatigue-free for the patient.",
      },
      {
        question: "How do I consult Dr. Majiri Musmade for varicose veins and leech therapy in Kharadi, Pune?",
        answer:
          "You can schedule your clinical evaluation by calling 096049 95998 or 097302 93777, or connecting with us on WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "jalaukavacharana": {
    slug: "jalaukavacharana",
    title: "Jalaukavacharana (Leech Therapy) in Kharadi, Pune | Varicose Veins & Vascular Detox",
    breadcrumbLabel: "Jalaukavacharana (Leech Therapy)",
    category: "Rapid Pain Relief & Vascular Therapies",
    introHeading: "What is Jalaukavacharana (Medicinal Leech Therapy)?",
    image: "/images/gallery/gallery-06.webp",
    imageAlt: "Jalaukavacharana Medicinal Leech Therapy for Varicose Veins at Shri Vishwavedhika Kharadi Pune",
    description: `Jalaukavacharana, or classical Ayurvedic medicinal leech therapy, is the most refined and painless method of blood purification (Raktamokshana) documented in the Sushruta Samhita. Specifically indicated for individuals with delicate constitutions, women, and children, it provides unmatched therapeutic relief for localized vascular congestion and deep tissue blood stagnation. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, sterile laboratory-certified <strong>Nirvisha Jalauka</strong> (non-poisonous medicinal leeches) are applied to affected zones such as bulging <strong>varicose veins, thrombophlebitis, stasis dermatitis, chronic eczema, and gout</strong>. As the leeches feed on impure venous blood, they simultaneously inject over 100 bioactive compounds—most notably <strong>Hirudin</strong> (a potent natural thrombin inhibitor), Calin, and Hyaluronidase—directly into the micro-capillary network. This enzymatic surge dissolves micro-thrombi, reverses venous valve hypertension, eliminates burning throbbing sensations, and dramatically accelerates the healing of chronic venous leg ulcers without surgical intervention.`,
    subheading: "Sterile Clinical Hirudotherapy Protocol in Kharadi",
    subcontent: `Our Jalaukavacharana procedures comply with the highest hospital-grade aseptic standards ensuring a sterile, comfortable, and therapeutic healing experience:`,
    checklist: [
      "Leech Shodhana & Vitality Activation in Haridra Jala",
      "Precision Anatomical Placement on Congested Venous Channels",
      "Active Bioactive Salivary Enzyme Perfusion Phase",
      "Painless Haridra-Assisted Detachment & Healing",
      "Aseptic Rakta Sthapana & Medicated Compression Dressing",
    ],
    modalities: [
      {
        title: "Leech Shodhana & Vitality Activation in Haridra Jala",
        description:
          "Purifying laboratory-bred medicinal leeches in fresh herbal turmeric water to enhance suction readiness and guarantee total medical sterility.",
      },
      {
        title: "Precision Anatomical Placement on Congested Venous Channels",
        description:
          "Careful positioning of active leeches over prominent varicose vein clusters, pigmented eczema patches, or swollen gouty joints.",
      },
      {
        title: "Active Bioactive Salivary Enzyme Perfusion Phase",
        description:
          "A 30 to 45-minute painless session where leeches gently withdraw toxic, stagnant venous blood while infusing natural Hirudin to dissolve clots and reduce vascular pressure.",
      },
      {
        title: "Painless Haridra-Assisted Detachment & Healing",
        description:
          "Safe and effortless detachment using gentle turmeric powder dusting, preventing any skin traction or discomfort to the patient.",
      },
      {
        title: "Aseptic Rakta Sthapana & Medicated Compression Dressing",
        description:
          "Application of classical styptic herbal packs (Shatadhauta Ghrita and Jatyadi Taila) and sterile compression bandages to promote rapid, clean wound closure.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Jalaukavacharana",
    benefitsSubcontent: `Undergoing authentic medicinal leech therapy delivers immediate symptomatic relief and sustained vascular restoration:`,
    benefits: [
      {
        title: "Non-Surgical Relief for Bulging Varicose Veins",
        description:
          "Decongests engorged, pooled venous blood channels, eliminating night-time calf cramps, throbbing leg ache, and heaviness within 24 to 48 hours.",
      },
      {
        title: "Dissolves Micro-Clots & Prevents Thrombosis",
        description:
          "Enzymatic Hirudin actively prevents clot formation and dissolves superficial thrombophlebitis, restoring healthy retrograde venous return.",
      },
      {
        title: "Reverses Stasis Dermatitis & Skin Pigmentation",
        description:
          "Clears dark brownish-purple hyperpigmentation, itching, and chronic non-healing venous stasis ulcers around ankles and lower legs.",
      },
      {
        title: "Immediate Decongestion in Gout & Acute Arthritis",
        description:
          "Rapidly extracts accumulated uric acid toxins and localized inflammatory heat, providing dramatic relief where conventional analgesics fail.",
      },
    ],
    faqs: [
      {
        question: "How does medicinal leech therapy relieve varicose veins without surgery?",
        answer:
          "In varicose veins, blood pools in the lower legs due to faulty venous valves. Medicinal leeches naturally draw out this stagnant, oxygen-depleted venous blood while injecting bioactive enzymes like Hirudin and Calin. These enzymes dilate constricted capillaries, dissolve micro-thrombi, reduce vascular pressure, and restore smooth blood flow back toward the heart without painful vein stripping or laser surgery.",
      },
      {
        question: "Is Jalaukavacharana painful or scary for patients in Kharadi?",
        answer:
          "Not at all. When the leech first attaches, patients experience only a very mild tingling sensation similar to an ant bite for 5 to 10 seconds. Immediately thereafter, the leech secretes natural local anesthetic compounds in its saliva, rendering the rest of the 30 to 45-minute procedure completely painless and deeply relaxing.",
      },
      {
        question: "Are the leeches reused or is there any risk of cross-infection?",
        answer:
          "At Shri Vishwavedhika, patient safety is our paramount priority. Every medicinal leech is used exclusively for a single individual and is never reused on another patient under any circumstance. All procedures follow hospital-grade aseptic protocols.",
      },
      {
        question: "How much blood is extracted during one session of leech therapy?",
        answer:
          "Each medicinal leech consumes only about 5 to 15 ml of stagnant venous blood. Usually, 2 to 4 leeches are applied per session, resulting in a modest, highly therapeutic extraction of 20 to 60 ml of localized stagnant blood—completely safe and fatigue-free for the patient.",
      },
      {
        question: "How do I consult Dr. Majiri Musmade for varicose veins and leech therapy in Kharadi, Pune?",
        answer:
          "You can schedule your clinical evaluation by calling 096049 95998 or 097302 93777, or connecting with us on WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "leech-therapy": {
    slug: "leech-therapy",
    title: "Jalaukavacharana (Leech Therapy) in Kharadi, Pune | Varicose Veins & Vascular Detox",
    breadcrumbLabel: "Jalaukavacharana (Leech Therapy)",
    category: "Rapid Pain Relief & Vascular Therapies",
    introHeading: "What is Jalaukavacharana (Medicinal Leech Therapy)?",
    image: "/images/gallery/gallery-06.webp",
    imageAlt: "Jalaukavacharana Medicinal Leech Therapy for Varicose Veins at Shri Vishwavedhika Kharadi Pune",
    description: `Jalaukavacharana, or classical Ayurvedic medicinal leech therapy, is the most refined and painless method of blood purification (Raktamokshana) documented in the Sushruta Samhita. Specifically indicated for individuals with delicate constitutions, women, and children, it provides unmatched therapeutic relief for localized vascular congestion and deep tissue blood stagnation. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, sterile laboratory-certified <strong>Nirvisha Jalauka</strong> (non-poisonous medicinal leeches) are applied to affected zones such as bulging <strong>varicose veins, thrombophlebitis, stasis dermatitis, chronic eczema, and gout</strong>. As the leeches feed on impure venous blood, they simultaneously inject over 100 bioactive compounds—most notably <strong>Hirudin</strong> (a potent natural thrombin inhibitor), Calin, and Hyaluronidase—directly into the micro-capillary network. This enzymatic surge dissolves micro-thrombi, reverses venous valve hypertension, eliminates burning throbbing sensations, and dramatically accelerates the healing of chronic venous leg ulcers without surgical intervention.`,
    subheading: "Sterile Clinical Hirudotherapy Protocol in Kharadi",
    subcontent: `Our Jalaukavacharana procedures comply with the highest hospital-grade aseptic standards ensuring a sterile, comfortable, and therapeutic healing experience:`,
    checklist: [
      "Leech Shodhana & Vitality Activation in Haridra Jala",
      "Precision Anatomical Placement on Congested Venous Channels",
      "Active Bioactive Salivary Enzyme Perfusion Phase",
      "Painless Haridra-Assisted Detachment & Healing",
      "Aseptic Rakta Sthapana & Medicated Compression Dressing",
    ],
    modalities: [
      {
        title: "Leech Shodhana & Vitality Activation in Haridra Jala",
        description:
          "Purifying laboratory-bred medicinal leeches in fresh herbal turmeric water to enhance suction readiness and guarantee total medical sterility.",
      },
      {
        title: "Precision Anatomical Placement on Congested Venous Channels",
        description:
          "Careful positioning of active leeches over prominent varicose vein clusters, pigmented eczema patches, or swollen gouty joints.",
      },
      {
        title: "Active Bioactive Salivary Enzyme Perfusion Phase",
        description:
          "A 30 to 45-minute painless session where leeches gently withdraw toxic, stagnant venous blood while infusing natural Hirudin to dissolve clots and reduce vascular pressure.",
      },
      {
        title: "Painless Haridra-Assisted Detachment & Healing",
        description:
          "Safe and effortless detachment using gentle turmeric powder dusting, preventing any skin traction or discomfort to the patient.",
      },
      {
        title: "Aseptic Rakta Sthapana & Medicated Compression Dressing",
        description:
          "Application of classical styptic herbal packs (Shatadhauta Ghrita and Jatyadi Taila) and sterile compression bandages to promote rapid, clean wound closure.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Jalaukavacharana",
    benefitsSubcontent: `Undergoing authentic medicinal leech therapy delivers immediate symptomatic relief and sustained vascular restoration:`,
    benefits: [
      {
        title: "Non-Surgical Relief for Bulging Varicose Veins",
        description:
          "Decongests engorged, pooled venous blood channels, eliminating night-time calf cramps, throbbing leg ache, and heaviness within 24 to 48 hours.",
      },
      {
        title: "Dissolves Micro-Clots & Prevents Thrombosis",
        description:
          "Enzymatic Hirudin actively prevents clot formation and dissolves superficial thrombophlebitis, restoring healthy retrograde venous return.",
      },
      {
        title: "Reverses Stasis Dermatitis & Skin Pigmentation",
        description:
          "Clears dark brownish-purple hyperpigmentation, itching, and chronic non-healing venous stasis ulcers around ankles and lower legs.",
      },
      {
        title: "Immediate Decongestion in Gout & Acute Arthritis",
        description:
          "Rapidly extracts accumulated uric acid toxins and localized inflammatory heat, providing dramatic relief where conventional analgesics fail.",
      },
    ],
    faqs: [
      {
        question: "How does medicinal leech therapy relieve varicose veins without surgery?",
        answer:
          "In varicose veins, blood pools in the lower legs due to faulty venous valves. Medicinal leeches naturally draw out this stagnant, oxygen-depleted venous blood while injecting bioactive enzymes like Hirudin and Calin. These enzymes dilate constricted capillaries, dissolve micro-thrombi, reduce vascular pressure, and restore smooth blood flow back toward the heart without painful vein stripping or laser surgery.",
      },
      {
        question: "Is Jalaukavacharana painful or scary for patients in Kharadi?",
        answer:
          "Not at all. When the leech first attaches, patients experience only a very mild tingling sensation similar to an ant bite for 5 to 10 seconds. Immediately thereafter, the leech secretes natural local anesthetic compounds in its saliva, rendering the rest of the 30 to 45-minute procedure completely painless and deeply relaxing.",
      },
      {
        question: "Are the leeches reused or is there any risk of cross-infection?",
        answer:
          "At Shri Vishwavedhika, patient safety is our paramount priority. Every medicinal leech is used exclusively for a single individual and is never reused on another patient under any circumstance. All procedures follow hospital-grade aseptic protocols.",
      },
      {
        question: "How much blood is extracted during one session of leech therapy?",
        answer:
          "Each medicinal leech consumes only about 5 to 15 ml of stagnant venous blood. Usually, 2 to 4 leeches are applied per session, resulting in a modest, highly therapeutic extraction of 20 to 60 ml of localized stagnant blood—completely safe and fatigue-free for the patient.",
      },
      {
        question: "How do I consult Dr. Majiri Musmade for varicose veins and leech therapy in Kharadi, Pune?",
        answer:
          "You can schedule your clinical evaluation by calling 096049 95998 or 097302 93777, or connecting with us on WhatsApp. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "takradhara-treatment": {
    slug: "takradhara-treatment",
    title: "Takradhara & Lepa Therapy in Kharadi, Pune | Psoriasis, Eczema, Scalp & Pitta Reversal",
    breadcrumbLabel: "Takradhara & Lepa",
    category: "Rapid Pain Relief & Vascular Therapies",
    introHeading: "What is Takradhara & Lepa Therapy?",
    image: "/images/gallery/gallery-04.webp",
    imageAlt: "Takradhara and Lepa Medicated Buttermilk Therapy for Scalp and Skin Cooling at Shri Vishwavedhika Kharadi Pune",
    description: `Takradhara and Lepa therapy are classical Ayurvedic cooling interventions engineered specifically to pacify acutely aggravated <strong>Pitta and Vata doshas</strong> located in the skin (Twacha), scalp (Shiro), and vascular micro-channels (Raktavaha Srotas). Takradhara involves the sustained, rhythmic pouring of customized medicinal buttermilk (Takra)—scientifically infused with potent decoctions of <strong>Musta (Nutgrass), Amalaki (Indian Gooseberry), and Chandana (Sandalwood)</strong>—over the forehead and scalp. Simultaneously, therapeutic herbal pastes (<strong>Lepa</strong>) crafted from cooling, anti-inflammatory botanicals (Manjistha, Nimba, Sariva, and Khadira) are applied over lesions. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, this dual therapeutic approach provides rapid clinical reversal for patients battling <strong>scalp psoriasis, stubborn eczema, severe dandruff, burning sensations (Pada Daha), stress-induced alopecia, and neuro-dermatitis</strong> across Kharadi, Wagholi, and Viman Nagar.`,
    subheading: "Cooling Neuro-Dermatological Protocol in Kharadi",
    subcontent: `Our specialized Takradhara and Lepa protocol combines neuro-endocrine regulation with deep dermatological cellular restoration:`,
    checklist: [
      "Musta & Amalaki Medicated Buttermilk (Takra) Fermentation",
      "Continuous Oscillating Forehead Dhara Stream",
      "Specialized Shirolepa & Twak Lepa Application",
      "Adhipati & Seemanta Cranial Marma Cooling",
      "Internal Pitta Shamana & Blood Purifying Decoctions",
    ],
    modalities: [
      {
        title: "Musta & Amalaki Medicated Buttermilk (Takra) Fermentation",
        description:
          "Artisanal preparation of organic cow's milk buttermilk simmered with Musta and Amalaki decoctions, creating a naturally cooling, lactic acid-balanced therapeutic wash.",
      },
      {
        title: "Continuous Oscillating Forehead Dhara Stream",
        description:
          "A 45-minute rhythmic stream focused over the Ajna and forehead channels, regulating the hypothalamic-pituitary-adrenal axis to dramatically reduce systemic stress hormones.",
      },
      {
        title: "Specialized Shirolepa & Twak Lepa Application",
        description:
          "Thick, nourishing herbal poultice application over stubborn psoriatic plaques and eczematous patches, dissolving hyperkeratotic scales and stopping severe itching.",
      },
      {
        title: "Adhipati & Seemanta Cranial Marma Cooling",
        description:
          "Direct thermal grounding of vital cranial marma points, extinguishing localized burning sensations, peripheral heat, and chronic stress headaches.",
      },
      {
        title: "Internal Pitta Shamana & Blood Purifying Decoctions",
        description:
          "Systemic cellular detoxification using classical blood purifiers (Mahatiktaka Ghrita, Kaishore Guggulu, Khadirarishta) to halt recurring autoimmune skin flare-ups.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Takradhara & Lepa",
    benefitsSubcontent: `This synergistic dual protocol delivers profound improvements for chronic dermatological, scalp, and stress-related conditions:`,
    benefits: [
      {
        title: "Rapid Relief from Scalp Psoriasis & Severe Dandruff",
        description:
          "Dissolves thick, silvery psoriatic scales, eradicates fungal dandruff, and terminates severe itching without greasy steroid creams.",
      },
      {
        title: "Terminates Burning Sensations & Peripheral Heat",
        description:
          "Effectively cools hyperactive neuro-vascular pathways, resolving burning feet syndrome (Pada Daha) and localized inflammatory heat.",
      },
      {
        title: "Halts Stress-Induced Hair Fall & Alopecia",
        description:
          "Strengthens hair roots, removes micro-inflammatory sebum plugs from follicles, and stimulates dense, healthy hair regeneration.",
      },
      {
        title: "Induces Deep Autonomic Nervous System Tranquility",
        description:
          "Rebalances sympathetic overdrive, delivering sustained mental peace, lower cortisol levels, and deep, restorative sleep for IT professionals.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Shirodhara with oil and Takradhara with buttermilk?",
        answer:
          "While classical Shirodhara utilizes warm medicated herbal oils to pacify dry Vata dosha (ideal for insomnia, anxiety, and cervical stiffness), Takradhara employs cool medicated buttermilk infused with Musta and Amalaki. Takradhara is specifically prescribed for high Pitta disorders—such as intense body heat, burning scalp, severe psoriasis plaques, eczema, and anger or stress burnout.",
      },
      {
        question: "How does Takradhara and Lepa help in chronic psoriasis and eczema in Kharadi?",
        answer:
          "Psoriasis and eczema are classified under Kushta Roga in Ayurveda, stemming from accumulated Pitta-Kapha toxins in the blood and skin tissues. The cooling lactic acid and medicinal herbs in Takra exfoliate scales and soothe micro-inflammation, while topical Lepa delivers concentrated anti-inflammatory agents directly to the dermis, stopping relentless itching and skin peeling.",
      },
      {
        question: "How many sessions of Takradhara are recommended for scalp and stress relief?",
        answer:
          "A typical course comprises 7, 10, or 14 consecutive daily sessions lasting 45 minutes each. Most patients report profound itch relief and cooler scalp sensation within 3 sessions, with full remissions of skin plaques achieved across a complete 14-day cycle.",
      },
      {
        question: "Is Takradhara suitable for sinus patients or will it cause cold and congestion?",
        answer:
          "Dr. Majiri Musmade customizes the herbs used in Takradhara based on your unique constitution. For patients prone to sinus congestion or Kapha imbalances, specific warming herbs like ginger (Shunti) and Maricha are incorporated into the processing to prevent cold while delivering deep scalp cooling.",
      },
      {
        question: "How can I schedule an appointment with Dr. Majiri Musmade at Shri Vishwavedhika in Kharadi?",
        answer:
          "Appointments can be booked easily by calling 096049 95998 or 097302 93777, or via WhatsApp message. Our clinic is conveniently located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "lepa-and-takradhara": {
    slug: "lepa-and-takradhara",
    title: "Takradhara & Lepa Therapy in Kharadi, Pune | Psoriasis, Eczema, Scalp & Pitta Reversal",
    breadcrumbLabel: "Takradhara & Lepa",
    category: "Rapid Pain Relief & Vascular Therapies",
    introHeading: "What is Takradhara & Lepa Therapy?",
    image: "/images/gallery/gallery-04.webp",
    imageAlt: "Takradhara and Lepa Medicated Buttermilk Therapy for Scalp and Skin Cooling at Shri Vishwavedhika Kharadi Pune",
    description: `Takradhara and Lepa therapy are classical Ayurvedic cooling interventions engineered specifically to pacify acutely aggravated <strong>Pitta and Vata doshas</strong> located in the skin (Twacha), scalp (Shiro), and vascular micro-channels (Raktavaha Srotas). Takradhara involves the sustained, rhythmic pouring of customized medicinal buttermilk (Takra)—scientifically infused with potent decoctions of <strong>Musta (Nutgrass), Amalaki (Indian Gooseberry), and Chandana (Sandalwood)</strong>—over the forehead and scalp. Simultaneously, therapeutic herbal pastes (<strong>Lepa</strong>) crafted from cooling, anti-inflammatory botanicals (Manjistha, Nimba, Sariva, and Khadira) are applied over lesions. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, this dual therapeutic approach provides rapid clinical reversal for patients battling <strong>scalp psoriasis, stubborn eczema, severe dandruff, burning sensations (Pada Daha), stress-induced alopecia, and neuro-dermatitis</strong> across Kharadi, Wagholi, and Viman Nagar.`,
    subheading: "Cooling Neuro-Dermatological Protocol in Kharadi",
    subcontent: `Our specialized Takradhara and Lepa protocol combines neuro-endocrine regulation with deep dermatological cellular restoration:`,
    checklist: [
      "Musta & Amalaki Medicated Buttermilk (Takra) Fermentation",
      "Continuous Oscillating Forehead Dhara Stream",
      "Specialized Shirolepa & Twak Lepa Application",
      "Adhipati & Seemanta Cranial Marma Cooling",
      "Internal Pitta Shamana & Blood Purifying Decoctions",
    ],
    modalities: [
      {
        title: "Musta & Amalaki Medicated Buttermilk (Takra) Fermentation",
        description:
          "Artisanal preparation of organic cow's milk buttermilk simmered with Musta and Amalaki decoctions, creating a naturally cooling, lactic acid-balanced therapeutic wash.",
      },
      {
        title: "Continuous Oscillating Forehead Dhara Stream",
        description:
          "A 45-minute rhythmic stream focused over the Ajna and forehead channels, regulating the hypothalamic-pituitary-adrenal axis to dramatically reduce systemic stress hormones.",
      },
      {
        title: "Specialized Shirolepa & Twak Lepa Application",
        description:
          "Thick, nourishing herbal poultice application over stubborn psoriatic plaques and eczematous patches, dissolving hyperkeratotic scales and stopping severe itching.",
      },
      {
        title: "Adhipati & Seemanta Cranial Marma Cooling",
        description:
          "Direct thermal grounding of vital cranial marma points, extinguishing localized burning sensations, peripheral heat, and chronic stress headaches.",
      },
      {
        title: "Internal Pitta Shamana & Blood Purifying Decoctions",
        description:
          "Systemic cellular detoxification using classical blood purifiers (Mahatiktaka Ghrita, Kaishore Guggulu, Khadirarishta) to halt recurring autoimmune skin flare-ups.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Takradhara & Lepa",
    benefitsSubcontent: `This synergistic dual protocol delivers profound improvements for chronic dermatological, scalp, and stress-related conditions:`,
    benefits: [
      {
        title: "Rapid Relief from Scalp Psoriasis & Severe Dandruff",
        description:
          "Dissolves thick, silvery psoriatic scales, eradicates fungal dandruff, and terminates severe itching without greasy steroid creams.",
      },
      {
        title: "Terminates Burning Sensations & Peripheral Heat",
        description:
          "Effectively cools hyperactive neuro-vascular pathways, resolving burning feet syndrome (Pada Daha) and localized inflammatory heat.",
      },
      {
        title: "Halts Stress-Induced Hair Fall & Alopecia",
        description:
          "Strengthens hair roots, removes micro-inflammatory sebum plugs from follicles, and stimulates dense, healthy hair regeneration.",
      },
      {
        title: "Induces Deep Autonomic Nervous System Tranquility",
        description:
          "Rebalances sympathetic overdrive, delivering sustained mental peace, lower cortisol levels, and deep, restorative sleep for IT professionals.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Shirodhara with oil and Takradhara with buttermilk?",
        answer:
          "While classical Shirodhara utilizes warm medicated herbal oils to pacify dry Vata dosha (ideal for insomnia, anxiety, and cervical stiffness), Takradhara employs cool medicated buttermilk infused with Musta and Amalaki. Takradhara is specifically prescribed for high Pitta disorders—such as intense body heat, burning scalp, severe psoriasis plaques, eczema, and anger or stress burnout.",
      },
      {
        question: "How does Takradhara and Lepa help in chronic psoriasis and eczema in Kharadi?",
        answer:
          "Psoriasis and eczema are classified under Kushta Roga in Ayurveda, stemming from accumulated Pitta-Kapha toxins in the blood and skin tissues. The cooling lactic acid and medicinal herbs in Takra exfoliate scales and soothe micro-inflammation, while topical Lepa delivers concentrated anti-inflammatory agents directly to the dermis, stopping relentless itching and skin peeling.",
      },
      {
        question: "How many sessions of Takradhara are recommended for scalp and stress relief?",
        answer:
          "A typical course comprises 7, 10, or 14 consecutive daily sessions lasting 45 minutes each. Most patients report profound itch relief and cooler scalp sensation within 3 sessions, with full remissions of skin plaques achieved across a complete 14-day cycle.",
      },
      {
        question: "Is Takradhara suitable for sinus patients or will it cause cold and congestion?",
        answer:
          "Dr. Majiri Musmade customizes the herbs used in Takradhara based on your unique constitution. For patients prone to sinus congestion or Kapha imbalances, specific warming herbs like ginger (Shunti) and Maricha are incorporated into the processing to prevent cold while delivering deep scalp cooling.",
      },
      {
        question: "How can I schedule an appointment with Dr. Majiri Musmade at Shri Vishwavedhika in Kharadi?",
        answer:
          "Appointments can be booked easily by calling 096049 95998 or 097302 93777, or via WhatsApp message. Our clinic is conveniently located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "takradhara": {
    slug: "takradhara",
    title: "Takradhara & Lepa Therapy in Kharadi, Pune | Psoriasis, Eczema, Scalp & Pitta Reversal",
    breadcrumbLabel: "Takradhara & Lepa",
    category: "Rapid Pain Relief & Vascular Therapies",
    introHeading: "What is Takradhara & Lepa Therapy?",
    image: "/images/gallery/gallery-04.webp",
    imageAlt: "Takradhara and Lepa Medicated Buttermilk Therapy for Scalp and Skin Cooling at Shri Vishwavedhika Kharadi Pune",
    description: `Takradhara and Lepa therapy are classical Ayurvedic cooling interventions engineered specifically to pacify acutely aggravated <strong>Pitta and Vata doshas</strong> located in the skin (Twacha), scalp (Shiro), and vascular micro-channels (Raktavaha Srotas). Takradhara involves the sustained, rhythmic pouring of customized medicinal buttermilk (Takra)—scientifically infused with potent decoctions of <strong>Musta (Nutgrass), Amalaki (Indian Gooseberry), and Chandana (Sandalwood)</strong>—over the forehead and scalp. Simultaneously, therapeutic herbal pastes (<strong>Lepa</strong>) crafted from cooling, anti-inflammatory botanicals (Manjistha, Nimba, Sariva, and Khadira) are applied over lesions. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, this dual therapeutic approach provides rapid clinical reversal for patients battling <strong>scalp psoriasis, stubborn eczema, severe dandruff, burning sensations (Pada Daha), stress-induced alopecia, and neuro-dermatitis</strong> across Kharadi, Wagholi, and Viman Nagar.`,
    subheading: "Cooling Neuro-Dermatological Protocol in Kharadi",
    subcontent: `Our specialized Takradhara and Lepa protocol combines neuro-endocrine regulation with deep dermatological cellular restoration:`,
    checklist: [
      "Musta & Amalaki Medicated Buttermilk (Takra) Fermentation",
      "Continuous Oscillating Forehead Dhara Stream",
      "Specialized Shirolepa & Twak Lepa Application",
      "Adhipati & Seemanta Cranial Marma Cooling",
      "Internal Pitta Shamana & Blood Purifying Decoctions",
    ],
    modalities: [
      {
        title: "Musta & Amalaki Medicated Buttermilk (Takra) Fermentation",
        description:
          "Artisanal preparation of organic cow's milk buttermilk simmered with Musta and Amalaki decoctions, creating a naturally cooling, lactic acid-balanced therapeutic wash.",
      },
      {
        title: "Continuous Oscillating Forehead Dhara Stream",
        description:
          "A 45-minute rhythmic stream focused over the Ajna and forehead channels, regulating the hypothalamic-pituitary-adrenal axis to dramatically reduce systemic stress hormones.",
      },
      {
        title: "Specialized Shirolepa & Twak Lepa Application",
        description:
          "Thick, nourishing herbal poultice application over stubborn psoriatic plaques and eczematous patches, dissolving hyperkeratotic scales and stopping severe itching.",
      },
      {
        title: "Adhipati & Seemanta Cranial Marma Cooling",
        description:
          "Direct thermal grounding of vital cranial marma points, extinguishing localized burning sensations, peripheral heat, and chronic stress headaches.",
      },
      {
        title: "Internal Pitta Shamana & Blood Purifying Decoctions",
        description:
          "Systemic cellular detoxification using classical blood purifiers (Mahatiktaka Ghrita, Kaishore Guggulu, Khadirarishta) to halt recurring autoimmune skin flare-ups.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Takradhara & Lepa",
    benefitsSubcontent: `This synergistic dual protocol delivers profound improvements for chronic dermatological, scalp, and stress-related conditions:`,
    benefits: [
      {
        title: "Rapid Relief from Scalp Psoriasis & Severe Dandruff",
        description:
          "Dissolves thick, silvery psoriatic scales, eradicates fungal dandruff, and terminates severe itching without greasy steroid creams.",
      },
      {
        title: "Terminates Burning Sensations & Peripheral Heat",
        description:
          "Effectively cools hyperactive neuro-vascular pathways, resolving burning feet syndrome (Pada Daha) and localized inflammatory heat.",
      },
      {
        title: "Halts Stress-Induced Hair Fall & Alopecia",
        description:
          "Strengthens hair roots, removes micro-inflammatory sebum plugs from follicles, and stimulates dense, healthy hair regeneration.",
      },
      {
        title: "Induces Deep Autonomic Nervous System Tranquility",
        description:
          "Rebalances sympathetic overdrive, delivering sustained mental peace, lower cortisol levels, and deep, restorative sleep for IT professionals.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Shirodhara with oil and Takradhara with buttermilk?",
        answer:
          "While classical Shirodhara utilizes warm medicated herbal oils to pacify dry Vata dosha (ideal for insomnia, anxiety, and cervical stiffness), Takradhara employs cool medicated buttermilk infused with Musta and Amalaki. Takradhara is specifically prescribed for high Pitta disorders—such as intense body heat, burning scalp, severe psoriasis plaques, eczema, and anger or stress burnout.",
      },
      {
        question: "How does Takradhara and Lepa help in chronic psoriasis and eczema in Kharadi?",
        answer:
          "Psoriasis and eczema are classified under Kushta Roga in Ayurveda, stemming from accumulated Pitta-Kapha toxins in the blood and skin tissues. The cooling lactic acid and medicinal herbs in Takra exfoliate scales and soothe micro-inflammation, while topical Lepa delivers concentrated anti-inflammatory agents directly to the dermis, stopping relentless itching and skin peeling.",
      },
      {
        question: "How many sessions of Takradhara are recommended for scalp and stress relief?",
        answer:
          "A typical course comprises 7, 10, or 14 consecutive daily sessions lasting 45 minutes each. Most patients report profound itch relief and cooler scalp sensation within 3 sessions, with full remissions of skin plaques achieved across a complete 14-day cycle.",
      },
      {
        question: "Is Takradhara suitable for sinus patients or will it cause cold and congestion?",
        answer:
          "Dr. Majiri Musmade customizes the herbs used in Takradhara based on your unique constitution. For patients prone to sinus congestion or Kapha imbalances, specific warming herbs like ginger (Shunti) and Maricha are incorporated into the processing to prevent cold while delivering deep scalp cooling.",
      },
      {
        question: "How can I schedule an appointment with Dr. Majiri Musmade at Shri Vishwavedhika in Kharadi?",
        answer:
          "Appointments can be booked easily by calling 096049 95998 or 097302 93777, or via WhatsApp message. Our clinic is conveniently located at Flat no. 104, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune.",
      },
    ],
  },
  "netra-tarpana-treatment": {
    slug: "netra-tarpana-treatment",
    title: "Netra Tarpana Treatment in Kharadi, Pune | Ayurvedic Eye Care for Computer Vision & Dry Eyes",
    breadcrumbLabel: "Netra Tarpana Eye Care",
    category: "Skin, Hair & Blood Purification",
    introHeading: "What is Netra Tarpana (Ocular Rejuvenation)?",
    image: "/images/gallery/gallery-03.webp",
    imageAlt: "Netra Tarpana Ayurvedic Eye Care and Optical Rejuvenation at Shri Vishwavedhika Kharadi Pune",
    description: `Netra Tarpana (also known as Akshi Tarpana) is the premier classical Ayurvedic ocular therapy documented in the Sushruta Samhita under Netra Chikitsa. In today's digital era, extended screen exposure, air conditioning, and environmental pollution aggravate <strong>Pitta and Vata doshas</strong> within the eyes (Chakshu), causing severe <strong>Computer Vision Syndrome (CVS), dry eye syndrome, burning sensations, premature presbyopia, and optic nerve fatigue</strong>. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, Netra Tarpana provides profound restorative care for IT professionals, students, and seniors across <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>. The procedure involves creating a leak-proof circular dam of black gram dough (Masha Pishti) around each orbital socket and gently pooling warm, sterile medicated herbal ghee—most notably <strong>Mahatriphala Ghrita</strong>. As the patient blinks and rotates the eyes within this herbal lipid bath, the lipophilic botanical nutrients penetrate deep through the cornea into internal ocular tissues, soothing inflamed scleral capillaries, hydrating dried tear glands, and revitalizing exhausted optical nerves without synthetic eye drops.`,
    subheading: "Authentic Netra Tarpana Protocol in Kharadi",
    subcontent: `Our specialized ocular rejuvenation protocol follows strict medical sterility and classical guidelines to ensure maximum optical comfort and vision restoration:`,
    checklist: [
      "Masha Pishti Ocular Dam Sculpting & Hermetic Sealing",
      "Sterile Mahatriphala Ghrita Temperature Calibration & Pooling",
      "Chakshu Vyayama (Submerged Guided Ocular Mobility)",
      "Aschyotana Herbal Eye Cleansing & Rosewater Soothing",
      "Nasya Therapy & Guided Photophobia Dark-Room Rest",
    ],
    modalities: [
      {
        title: "Masha Pishti Ocular Dam Sculpting & Hermetic Sealing",
        description:
          "Careful shaping of custom organic black gram flour rings around both eye sockets, creating a gentle, airtight reservoir that prevents leakage.",
      },
      {
        title: "Sterile Mahatriphala Ghrita Temperature Calibration & Pooling",
        description:
          "Pouring lukewarm, laboratory-tested medicated herbal ghee slowly over closed eyelids, gently bathing the entire cornea, sclera, and conjunctiva upon opening.",
      },
      {
        title: "Chakshu Vyayama (Submerged Guided Ocular Mobility)",
        description:
          "Slow rhythmic blinking, circular rolling, and lateral scanning exercises performed directly under the ghee bath to maximize lipid absorption into optic nerves.",
      },
      {
        title: "Aschyotana Herbal Eye Cleansing & Rosewater Soothing",
        description:
          "Pre- and post-therapy irrigation with sterile Triphala and pure Rosa centifolia decoctions to flush debris, soothe scleral micro-vessels, and eliminate irritation.",
      },
      {
        title: "Nasya Therapy & Guided Photophobia Dark-Room Rest",
        description:
          "Administering Anu Taila nasal drops to stimulate cranial ophthalmic pathways, followed by 15 minutes of quiet rest in a darkened room to stabilize visual focus.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Netra Tarpana",
    benefitsSubcontent: `Netra Tarpana provides measurable, rapid relief for screen-fatigued eyes and chronic ophthalmic disorders:`,
    benefits: [
      {
        title: "Instant Relief from Computer Vision Syndrome",
        description:
          "Quickly eliminates chronic burning, redness, heaviness, gritty irritation, and screen-induced headaches for IT professionals working in Kharadi.",
      },
      {
        title: "Deep Tear Film & Cornea Rehydration",
        description:
          "Permanently reverses chronic dry eye syndrome (DES) by stimulating sluggish Meibomian glands and restoring natural trilaminar tear film stability.",
      },
      {
        title: "Halts Progressive Myopia & Eye Strain",
        description:
          "Nourishes exhausted ciliary accommodation muscles and optic nerve fibers, preventing eye prescription escalation and digital eye strain.",
      },
      {
        title: "Non-Invasive Cataract & Macular Defense",
        description:
          "Provides powerful natural antioxidant protection for retinal photoreceptors and lens proteins, helping prevent early cataract formation in seniors.",
      },
    ],
    faqs: [
      {
        question: "Is Netra Tarpana painful or does the medicated ghee sting the eyes?",
        answer:
          "Netra Tarpana is completely painless, comfortable, and deeply relaxing. Medicated Triphala Ghrita is specially prepared, sterile, and administered at gentle body temperature. When you open your eyes under the ghee, there is zero stinging—only a soothing, cool, and nourishing sensation that relieves eye fatigue immediately.",
      },
      {
        question: "How many sessions of Netra Tarpana are needed for dry eyes and screen strain in Kharadi?",
        answer:
          "Most patients notice remarkable relief from burning and dryness after their very first session. For lasting correction of chronic Computer Vision Syndrome or severe dry eyes, a course of 5, 7, or 10 sessions spaced over consecutive days or alternate days is recommended.",
      },
      {
        question: "Can IT engineers wearing contact lenses or glasses undergo Netra Tarpana?",
        answer:
          "Yes. Patients simply need to remove their contact lenses before the procedure. It is advised to wear glasses for 12 to 24 hours after treatment instead of contacts, allowing the herbal ghee's therapeutic lipid film to nourish the corneal surface uninterrupted.",
      },
      {
        question: "What precautions should be taken immediately after an eye care session?",
        answer:
          "Following Netra Tarpana, patients should avoid direct bright sunlight, intense computer screens, and smartphone scrolling for 2 to 3 hours. Wearing protective sunglasses while returning home is highly recommended to protect freshly nourished eyes from glare and street dust.",
      },
      {
        question: "How do I book a Netra Tarpana consultation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "You can schedule your appointment by calling 096049 95998 or 097302 93777, or via WhatsApp message. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "netra-tarpana": {
    slug: "netra-tarpana",
    title: "Netra Tarpana Treatment in Kharadi, Pune | Ayurvedic Eye Care for Computer Vision & Dry Eyes",
    breadcrumbLabel: "Netra Tarpana Eye Care",
    category: "Skin, Hair & Blood Purification",
    introHeading: "What is Netra Tarpana (Ocular Rejuvenation)?",
    image: "/images/gallery/gallery-03.webp",
    imageAlt: "Netra Tarpana Ayurvedic Eye Care and Optical Rejuvenation at Shri Vishwavedhika Kharadi Pune",
    description: `Netra Tarpana (also known as Akshi Tarpana) is the premier classical Ayurvedic ocular therapy documented in the Sushruta Samhita under Netra Chikitsa. In today's digital era, extended screen exposure, air conditioning, and environmental pollution aggravate <strong>Pitta and Vata doshas</strong> within the eyes (Chakshu), causing severe <strong>Computer Vision Syndrome (CVS), dry eye syndrome, burning sensations, premature presbyopia, and optic nerve fatigue</strong>. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, Netra Tarpana provides profound restorative care for IT professionals, students, and seniors across <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>. The procedure involves creating a leak-proof circular dam of black gram dough (Masha Pishti) around each orbital socket and gently pooling warm, sterile medicated herbal ghee—most notably <strong>Mahatriphala Ghrita</strong>. As the patient blinks and rotates the eyes within this herbal lipid bath, the lipophilic botanical nutrients penetrate deep through the cornea into internal ocular tissues, soothing inflamed scleral capillaries, hydrating dried tear glands, and revitalizing exhausted optical nerves without synthetic eye drops.`,
    subheading: "Authentic Netra Tarpana Protocol in Kharadi",
    subcontent: `Our specialized ocular rejuvenation protocol follows strict medical sterility and classical guidelines to ensure maximum optical comfort and vision restoration:`,
    checklist: [
      "Masha Pishti Ocular Dam Sculpting & Hermetic Sealing",
      "Sterile Mahatriphala Ghrita Temperature Calibration & Pooling",
      "Chakshu Vyayama (Submerged Guided Ocular Mobility)",
      "Aschyotana Herbal Eye Cleansing & Rosewater Soothing",
      "Nasya Therapy & Guided Photophobia Dark-Room Rest",
    ],
    modalities: [
      {
        title: "Masha Pishti Ocular Dam Sculpting & Hermetic Sealing",
        description:
          "Careful shaping of custom organic black gram flour rings around both eye sockets, creating a gentle, airtight reservoir that prevents leakage.",
      },
      {
        title: "Sterile Mahatriphala Ghrita Temperature Calibration & Pooling",
        description:
          "Pouring lukewarm, laboratory-tested medicated herbal ghee slowly over closed eyelids, gently bathing the entire cornea, sclera, and conjunctiva upon opening.",
      },
      {
        title: "Chakshu Vyayama (Submerged Guided Ocular Mobility)",
        description:
          "Slow rhythmic blinking, circular rolling, and lateral scanning exercises performed directly under the ghee bath to maximize lipid absorption into optic nerves.",
      },
      {
        title: "Aschyotana Herbal Eye Cleansing & Rosewater Soothing",
        description:
          "Pre- and post-therapy irrigation with sterile Triphala and pure Rosa centifolia decoctions to flush debris, soothe scleral micro-vessels, and eliminate irritation.",
      },
      {
        title: "Nasya Therapy & Guided Photophobia Dark-Room Rest",
        description:
          "Administering Anu Taila nasal drops to stimulate cranial ophthalmic pathways, followed by 15 minutes of quiet rest in a darkened room to stabilize visual focus.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Netra Tarpana",
    benefitsSubcontent: `Netra Tarpana provides measurable, rapid relief for screen-fatigued eyes and chronic ophthalmic disorders:`,
    benefits: [
      {
        title: "Instant Relief from Computer Vision Syndrome",
        description:
          "Quickly eliminates chronic burning, redness, heaviness, gritty irritation, and screen-induced headaches for IT professionals working in Kharadi.",
      },
      {
        title: "Deep Tear Film & Cornea Rehydration",
        description:
          "Permanently reverses chronic dry eye syndrome (DES) by stimulating sluggish Meibomian glands and restoring natural trilaminar tear film stability.",
      },
      {
        title: "Halts Progressive Myopia & Eye Strain",
        description:
          "Nourishes exhausted ciliary accommodation muscles and optic nerve fibers, preventing eye prescription escalation and digital eye strain.",
      },
      {
        title: "Non-Invasive Cataract & Macular Defense",
        description:
          "Provides powerful natural antioxidant protection for retinal photoreceptors and lens proteins, helping prevent early cataract formation in seniors.",
      },
    ],
    faqs: [
      {
        question: "Is Netra Tarpana painful or does the medicated ghee sting the eyes?",
        answer:
          "Netra Tarpana is completely painless, comfortable, and deeply relaxing. Medicated Triphala Ghrita is specially prepared, sterile, and administered at gentle body temperature. When you open your eyes under the ghee, there is zero stinging—only a soothing, cool, and nourishing sensation that relieves eye fatigue immediately.",
      },
      {
        question: "How many sessions of Netra Tarpana are needed for dry eyes and screen strain in Kharadi?",
        answer:
          "Most patients notice remarkable relief from burning and dryness after their very first session. For lasting correction of chronic Computer Vision Syndrome or severe dry eyes, a course of 5, 7, or 10 sessions spaced over consecutive days or alternate days is recommended.",
      },
      {
        question: "Can IT engineers wearing contact lenses or glasses undergo Netra Tarpana?",
        answer:
          "Yes. Patients simply need to remove their contact lenses before the procedure. It is advised to wear glasses for 12 to 24 hours after treatment instead of contacts, allowing the herbal ghee's therapeutic lipid film to nourish the corneal surface uninterrupted.",
      },
      {
        question: "What precautions should be taken immediately after an eye care session?",
        answer:
          "Following Netra Tarpana, patients should avoid direct bright sunlight, intense computer screens, and smartphone scrolling for 2 to 3 hours. Wearing protective sunglasses while returning home is highly recommended to protect freshly nourished eyes from glare and street dust.",
      },
      {
        question: "How do I book a Netra Tarpana consultation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "You can schedule your appointment by calling 096049 95998 or 097302 93777, or via WhatsApp message. Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "abhyanga-and-swedana": {
    slug: "abhyanga-and-swedana",
    title: "Abhyanga & Swedana in Kharadi, Pune | Full Body Ayurvedic Massage & Herbal Steam Detox",
    breadcrumbLabel: "Abhyanga & Swedana",
    category: "Panchakarma & Detoxification",
    introHeading: "What is Classical Abhyanga & Swedana Therapy?",
    image: "/images/gallery/gallery-01.webp",
    imageAlt: "Authentic Classical Full Body Abhyanga Massage and Herbal Steam Swedana at Shri Vishwavedhika Kharadi Pune",
    description: `Abhyanga and Swedana represent the foundational pillar of classical Ayurvedic preventative and curative healthcare. As documented in the Charaka Samhita, daily oil application nourishes all seven Dhatus, pacifies aggravated <strong>Vata dosha</strong>, enhances musculoskeletal vitality, and retards premature aging. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical stewardship of <strong>Dr. Majiri Musmade</strong>, Abhyanga is performed on authentic hand-carved teakwood Droni tables using warm, dosha-customized medicated oils such as <strong>Dhanwantharam, Sahacharadi, and Mahanarayana</strong>. Our trained therapists execute synchronized, rhythmic strokes in seven classical postures along energy meridians and lymph vessels. This is followed immediately by <strong>Bashpa Swedana</strong>—a whole-body medicated herbal steam bath using vapors of Dashamoola and Nirgundi while keeping the head cool. The synergistic thermogenic effect opens micro-channels (Srotas), liquefies deep cellular metabolic toxins (<strong>Ama</strong>), and guides them toward the digestive tract for expulsion, leaving you feeling profoundly rejuvenated, light, and mentally centered.`,
    subheading: "Comprehensive 5-Step Snehana & Swedana Protocol in Kharadi",
    subcontent: `Our Abhyanga and Swedana protocol adheres strictly to classical Ayurvedic tenets, ensuring optimal therapeutic lipid absorption and systemic detoxification:`,
    checklist: [
      "Prakriti & Dosha-Calibrated Medicated Oil Prescription",
      "Synchronized 7-Posture Full-Body Rhythmic Anointing",
      "Marma Point Acupressure & Energy Channel Clearance",
      "Bashpa Swedana (Herbal Steam with Cranial Thermal Shield)",
      "Snana with Natural Herbal Cleansing Flour (Udvartana Blend)",
    ],
    modalities: [
      {
        title: "Prakriti & Dosha-Calibrated Medicated Oil Prescription",
        description:
          "Selecting specialized classical oils (Bala Ashwagandha, Dhanwantharam, or Ksheerabala) tailored to your doshic imbalance, musculoskeletal tone, and pain profile.",
      },
      {
        title: "Synchronized 7-Posture Full-Body Rhythmic Anointing",
        description:
          "Executing synchronized, rhythmic strokes from scalp to toes on authentic teakwood Droni tables, following the path of arterial circulation and lymphatic drainage.",
      },
      {
        title: "Marma Point Acupressure & Energy Channel Clearance",
        description:
          "Precision stimulation of vital energy gateways (Marma points) across the spine, shoulders, hips, and extremities to release chronic myofascial trigger tension.",
      },
      {
        title: "Bashpa Swedana (Herbal Steam with Cranial Thermal Shield)",
        description:
          "A 15 to 20-minute whole-body steam session inside temperature-regulated wooden cabinets infused with Dashamoola vapors, keeping the head cool to protect ocular and cerebral tissues.",
      },
      {
        title: "Snana with Natural Herbal Cleansing Flour (Udvartana Blend)",
        description:
          "Gentle cleansing of excess therapeutic surface oil using coarse chickpea flour and aromatic herbal powders, leaving the skin supple, soft, and refreshed.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Abhyanga & Swedana",
    benefitsSubcontent: `Regular authentic Abhyanga combined with herbal steam delivers deep restorative benefits across physical, metabolic, and mental spheres:`,
    benefits: [
      {
        title: "Deep Cellular Detoxification & Ama Mobilization",
        description:
          "Dilates micro-vascular channels, dislodging chemical toxins, heavy metals, and undigested metabolic waste from deep tissues toward excretion organs.",
      },
      {
        title: "Total Relief from Chronic Fatigue & Body Aches",
        description:
          "Pacifies aggravated Vata dosha instantly, dissolving stubborn full-body muscular knots, joint stiffness, and chronic physical exhaustion.",
      },
      {
        title: "Accelerates Lymphatic Circulation & Metabolism",
        description:
          "Enhances venous and lymphatic drainage, promoting radiant skin elasticity, reducing fluid retention, and stimulating natural cellular repair.",
      },
      {
        title: "Induces Profound Restorative Sleep & Calms Stress",
        description:
          "Regulates hyperactive autonomic nervous systems, reducing elevated cortisol levels and guaranteeing deep, restorative sleep for IT professionals.",
      },
    ],
    faqs: [
      {
        question: "How is authentic Ayurvedic Abhyanga different from a regular spa massage?",
        answer:
          "Unlike superficial spa massages that rely on scented mineral oils for temporary relaxation, authentic Ayurvedic Abhyanga is a clinical therapy. We use doctor-prescribed, classical polyherbal oils prepared with 30+ botanicals. Therapists apply specific anatomical strokes along energy meridians (Nadis) and Marma points to dislodge cellular toxins and lubricate deep joints.",
      },
      {
        question: "Why is herbal steam (Swedana) given immediately after Abhyanga?",
        answer:
          "Warm medicated oil loosens deep-seated toxins (Ama) during Abhyanga. Immediate herbal steam fomentation (Swedana) dilates micro-capillaries and sweat channels (Swedavaha Srotas), allowing the liquefied toxins to mobilize smoothly into the gastrointestinal tract and sweat pores for permanent elimination.",
      },
      {
        question: "How often should working professionals in Kharadi undergo Abhyanga & Swedana?",
        answer:
          "For routine wellness and reversing desk-bound fatigue, a weekly or bi-weekly session provides immense benefits. For chronic ailments like arthritis, fibromyalgia, or severe back pain, a consecutive course of 5, 7, or 14 daily sessions provides therapeutic disease reversal.",
      },
      {
        question: "Can individuals with high blood pressure or diabetes take herbal steam?",
        answer:
          "Yes, under clinical supervision. Dr. Majiri Musmade calibrates the steam temperature, duration, and specific herbs to ensure complete safety and cardiovascular comfort for patients with hypertension or metabolic conditions.",
      },
      {
        question: "How can I schedule an authentic Abhyanga & Swedana session at Shri Vishwavedhika?",
        answer:
          "Appointments can be booked easily by calling 096049 95998 or 097302 93777, or via WhatsApp message. Our center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "abhyanga-swedana": {
    slug: "abhyanga-swedana",
    title: "Abhyanga & Swedana in Kharadi, Pune | Full Body Ayurvedic Massage & Herbal Steam Detox",
    breadcrumbLabel: "Abhyanga & Swedana",
    category: "Panchakarma & Detoxification",
    introHeading: "What is Classical Abhyanga & Swedana Therapy?",
    image: "/images/gallery/gallery-01.webp",
    imageAlt: "Authentic Classical Full Body Abhyanga Massage and Herbal Steam Swedana at Shri Vishwavedhika Kharadi Pune",
    description: `Abhyanga and Swedana represent the foundational pillar of classical Ayurvedic preventative and curative healthcare. As documented in the Charaka Samhita, daily oil application nourishes all seven Dhatus, pacifies aggravated <strong>Vata dosha</strong>, enhances musculoskeletal vitality, and retards premature aging. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical stewardship of <strong>Dr. Majiri Musmade</strong>, Abhyanga is performed on authentic hand-carved teakwood Droni tables using warm, dosha-customized medicated oils such as <strong>Dhanwantharam, Sahacharadi, and Mahanarayana</strong>. Our trained therapists execute synchronized, rhythmic strokes in seven classical postures along energy meridians and lymph vessels. This is followed immediately by <strong>Bashpa Swedana</strong>—a whole-body medicated herbal steam bath using vapors of Dashamoola and Nirgundi while keeping the head cool. The synergistic thermogenic effect opens micro-channels (Srotas), liquefies deep cellular metabolic toxins (<strong>Ama</strong>), and guides them toward the digestive tract for expulsion, leaving you feeling profoundly rejuvenated, light, and mentally centered.`,
    subheading: "Comprehensive 5-Step Snehana & Swedana Protocol in Kharadi",
    subcontent: `Our Abhyanga and Swedana protocol adheres strictly to classical Ayurvedic tenets, ensuring optimal therapeutic lipid absorption and systemic detoxification:`,
    checklist: [
      "Prakriti & Dosha-Calibrated Medicated Oil Prescription",
      "Synchronized 7-Posture Full-Body Rhythmic Anointing",
      "Marma Point Acupressure & Energy Channel Clearance",
      "Bashpa Swedana (Herbal Steam with Cranial Thermal Shield)",
      "Snana with Natural Herbal Cleansing Flour (Udvartana Blend)",
    ],
    modalities: [
      {
        title: "Prakriti & Dosha-Calibrated Medicated Oil Prescription",
        description:
          "Selecting specialized classical oils (Bala Ashwagandha, Dhanwantharam, or Ksheerabala) tailored to your doshic imbalance, musculoskeletal tone, and pain profile.",
      },
      {
        title: "Synchronized 7-Posture Full-Body Rhythmic Anointing",
        description:
          "Executing synchronized, rhythmic strokes from scalp to toes on authentic teakwood Droni tables, following the path of arterial circulation and lymphatic drainage.",
      },
      {
        title: "Marma Point Acupressure & Energy Channel Clearance",
        description:
          "Precision stimulation of vital energy gateways (Marma points) across the spine, shoulders, hips, and extremities to release chronic myofascial trigger tension.",
      },
      {
        title: "Bashpa Swedana (Herbal Steam with Cranial Thermal Shield)",
        description:
          "A 15 to 20-minute whole-body steam session inside temperature-regulated wooden cabinets infused with Dashamoola vapors, keeping the head cool to protect ocular and cerebral tissues.",
      },
      {
        title: "Snana with Natural Herbal Cleansing Flour (Udvartana Blend)",
        description:
          "Gentle cleansing of excess therapeutic surface oil using coarse chickpea flour and aromatic herbal powders, leaving the skin supple, soft, and refreshed.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Abhyanga & Swedana",
    benefitsSubcontent: `Regular authentic Abhyanga combined with herbal steam delivers deep restorative benefits across physical, metabolic, and mental spheres:`,
    benefits: [
      {
        title: "Deep Cellular Detoxification & Ama Mobilization",
        description:
          "Dilates micro-vascular channels, dislodging chemical toxins, heavy metals, and undigested metabolic waste from deep tissues toward excretion organs.",
      },
      {
        title: "Total Relief from Chronic Fatigue & Body Aches",
        description:
          "Pacifies aggravated Vata dosha instantly, dissolving stubborn full-body muscular knots, joint stiffness, and chronic physical exhaustion.",
      },
      {
        title: "Accelerates Lymphatic Circulation & Metabolism",
        description:
          "Enhances venous and lymphatic drainage, promoting radiant skin elasticity, reducing fluid retention, and stimulating natural cellular repair.",
      },
      {
        title: "Induces Profound Restorative Sleep & Calms Stress",
        description:
          "Regulates hyperactive autonomic nervous systems, reducing elevated cortisol levels and guaranteeing deep, restorative sleep for IT professionals.",
      },
    ],
    faqs: [
      {
        question: "How is authentic Ayurvedic Abhyanga different from a regular spa massage?",
        answer:
          "Unlike superficial spa massages that rely on scented mineral oils for temporary relaxation, authentic Ayurvedic Abhyanga is a clinical therapy. We use doctor-prescribed, classical polyherbal oils prepared with 30+ botanicals. Therapists apply specific anatomical strokes along energy meridians (Nadis) and Marma points to dislodge cellular toxins and lubricate deep joints.",
      },
      {
        question: "Why is herbal steam (Swedana) given immediately after Abhyanga?",
        answer:
          "Warm medicated oil loosens deep-seated toxins (Ama) during Abhyanga. Immediate herbal steam fomentation (Swedana) dilates micro-capillaries and sweat channels (Swedavaha Srotas), allowing the liquefied toxins to mobilize smoothly into the gastrointestinal tract and sweat pores for permanent elimination.",
      },
      {
        question: "How often should working professionals in Kharadi undergo Abhyanga & Swedana?",
        answer:
          "For routine wellness and reversing desk-bound fatigue, a weekly or bi-weekly session provides immense benefits. For chronic ailments like arthritis, fibromyalgia, or severe back pain, a consecutive course of 5, 7, or 14 daily sessions provides therapeutic disease reversal.",
      },
      {
        question: "Can individuals with high blood pressure or diabetes take herbal steam?",
        answer:
          "Yes, under clinical supervision. Dr. Majiri Musmade calibrates the steam temperature, duration, and specific herbs to ensure complete safety and cardiovascular comfort for patients with hypertension or metabolic conditions.",
      },
      {
        question: "How can I schedule an authentic Abhyanga & Swedana session at Shri Vishwavedhika?",
        answer:
          "Appointments can be booked easily by calling 096049 95998 or 097302 93777, or via WhatsApp message. Our center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "ayurvedic-massage-pune": {
    slug: "ayurvedic-massage-pune",
    title: "Abhyanga & Swedana in Kharadi, Pune | Full Body Ayurvedic Massage & Herbal Steam Detox",
    breadcrumbLabel: "Abhyanga & Swedana",
    category: "Panchakarma & Detoxification",
    introHeading: "What is Classical Abhyanga & Swedana Therapy?",
    image: "/images/gallery/gallery-01.webp",
    imageAlt: "Authentic Classical Full Body Abhyanga Massage and Herbal Steam Swedana at Shri Vishwavedhika Kharadi Pune",
    description: `Abhyanga and Swedana represent the foundational pillar of classical Ayurvedic preventative and curative healthcare. As documented in the Charaka Samhita, daily oil application nourishes all seven Dhatus, pacifies aggravated <strong>Vata dosha</strong>, enhances musculoskeletal vitality, and retards premature aging. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical stewardship of <strong>Dr. Majiri Musmade</strong>, Abhyanga is performed on authentic hand-carved teakwood Droni tables using warm, dosha-customized medicated oils such as <strong>Dhanwantharam, Sahacharadi, and Mahanarayana</strong>. Our trained therapists execute synchronized, rhythmic strokes in seven classical postures along energy meridians and lymph vessels. This is followed immediately by <strong>Bashpa Swedana</strong>—a whole-body medicated herbal steam bath using vapors of Dashamoola and Nirgundi while keeping the head cool. The synergistic thermogenic effect opens micro-channels (Srotas), liquefies deep cellular metabolic toxins (<strong>Ama</strong>), and guides them toward the digestive tract for expulsion, leaving you feeling profoundly rejuvenated, light, and mentally centered.`,
    subheading: "Comprehensive 5-Step Snehana & Swedana Protocol in Kharadi",
    subcontent: `Our Abhyanga and Swedana protocol adheres strictly to classical Ayurvedic tenets, ensuring optimal therapeutic lipid absorption and systemic detoxification:`,
    checklist: [
      "Prakriti & Dosha-Calibrated Medicated Oil Prescription",
      "Synchronized 7-Posture Full-Body Rhythmic Anointing",
      "Marma Point Acupressure & Energy Channel Clearance",
      "Bashpa Swedana (Herbal Steam with Cranial Thermal Shield)",
      "Snana with Natural Herbal Cleansing Flour (Udvartana Blend)",
    ],
    modalities: [
      {
        title: "Prakriti & Dosha-Calibrated Medicated Oil Prescription",
        description:
          "Selecting specialized classical oils (Bala Ashwagandha, Dhanwantharam, or Ksheerabala) tailored to your doshic imbalance, musculoskeletal tone, and pain profile.",
      },
      {
        title: "Synchronized 7-Posture Full-Body Rhythmic Anointing",
        description:
          "Executing synchronized, rhythmic strokes from scalp to toes on authentic teakwood Droni tables, following the path of arterial circulation and lymphatic drainage.",
      },
      {
        title: "Marma Point Acupressure & Energy Channel Clearance",
        description:
          "Precision stimulation of vital energy gateways (Marma points) across the spine, shoulders, hips, and extremities to release chronic myofascial trigger tension.",
      },
      {
        title: "Bashpa Swedana (Herbal Steam with Cranial Thermal Shield)",
        description:
          "A 15 to 20-minute whole-body steam session inside temperature-regulated wooden cabinets infused with Dashamoola vapors, keeping the head cool to protect ocular and cerebral tissues.",
      },
      {
        title: "Snana with Natural Herbal Cleansing Flour (Udvartana Blend)",
        description:
          "Gentle cleansing of excess therapeutic surface oil using coarse chickpea flour and aromatic herbal powders, leaving the skin supple, soft, and refreshed.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Abhyanga & Swedana",
    benefitsSubcontent: `Regular authentic Abhyanga combined with herbal steam delivers deep restorative benefits across physical, metabolic, and mental spheres:`,
    benefits: [
      {
        title: "Deep Cellular Detoxification & Ama Mobilization",
        description:
          "Dilates micro-vascular channels, dislodging chemical toxins, heavy metals, and undigested metabolic waste from deep tissues toward excretion organs.",
      },
      {
        title: "Total Relief from Chronic Fatigue & Body Aches",
        description:
          "Pacifies aggravated Vata dosha instantly, dissolving stubborn full-body muscular knots, joint stiffness, and chronic physical exhaustion.",
      },
      {
        title: "Accelerates Lymphatic Circulation & Metabolism",
        description:
          "Enhances venous and lymphatic drainage, promoting radiant skin elasticity, reducing fluid retention, and stimulating natural cellular repair.",
      },
      {
        title: "Induces Profound Restorative Sleep & Calms Stress",
        description:
          "Regulates hyperactive autonomic nervous systems, reducing elevated cortisol levels and guaranteeing deep, restorative sleep for IT professionals.",
      },
    ],
    faqs: [
      {
        question: "How is authentic Ayurvedic Abhyanga different from a regular spa massage?",
        answer:
          "Unlike superficial spa massages that rely on scented mineral oils for temporary relaxation, authentic Ayurvedic Abhyanga is a clinical therapy. We use doctor-prescribed, classical polyherbal oils prepared with 30+ botanicals. Therapists apply specific anatomical strokes along energy meridians (Nadis) and Marma points to dislodge cellular toxins and lubricate deep joints.",
      },
      {
        question: "Why is herbal steam (Swedana) given immediately after Abhyanga?",
        answer:
          "Warm medicated oil loosens deep-seated toxins (Ama) during Abhyanga. Immediate herbal steam fomentation (Swedana) dilates micro-capillaries and sweat channels (Swedavaha Srotas), allowing the liquefied toxins to mobilize smoothly into the gastrointestinal tract and sweat pores for permanent elimination.",
      },
      {
        question: "How often should working professionals in Kharadi undergo Abhyanga & Swedana?",
        answer:
          "For routine wellness and reversing desk-bound fatigue, a weekly or bi-weekly session provides immense benefits. For chronic ailments like arthritis, fibromyalgia, or severe back pain, a consecutive course of 5, 7, or 14 daily sessions provides therapeutic disease reversal.",
      },
      {
        question: "Can individuals with high blood pressure or diabetes take herbal steam?",
        answer:
          "Yes, under clinical supervision. Dr. Majiri Musmade calibrates the steam temperature, duration, and specific herbs to ensure complete safety and cardiovascular comfort for patients with hypertension or metabolic conditions.",
      },
      {
        question: "How can I schedule an authentic Abhyanga & Swedana session at Shri Vishwavedhika?",
        answer:
          "Appointments can be booked easily by calling 096049 95998 or 097302 93777, or via WhatsApp message. Our center is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
  "stroke-rehabilitation-pune": {
    slug: "stroke-rehabilitation-pune",
    title: "Stroke Rehabilitation in Kharadi, Pune | Ayurvedic Neurological Care & Paralysis Recovery",
    breadcrumbLabel: "Stroke Rehabilitation",
    category: "Stress, Neuro & Head Care",
    introHeading: "What is Ayurvedic Stroke Rehabilitation (Pakshaghata Chikitsa)?",
    image: "/images/stroke-patient.webp",
    imageAlt: "Ayurvedic Stroke Rehabilitation and Neurological Recovery at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Stroke (known as Pakshaghata or Pakshavadha in classical Ayurveda) is one of the most debilitating neurological crises, occurring when severely vitiated <strong>Vata dosha</strong> invades cerebral channels (Siras), damaging motor and sensory pathways on one side of the body. Once acute hospital management stabilizes the patient, secondary recovery challenges—including <strong>hemiplegia, facial palsy (Ardita), speech slurring (Mukatva), muscle flaccidity followed by spasticity, and joint contractures</strong>—require specialized, sustained rehabilitation. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the compassionate medical supervision of <strong>Dr. Majiri Musmade</strong>, our evidence-grounded neuro-rehabilitation protocols stimulate dormant brain plasticity, restore arterial perfusion to ischemic penumbra tissues, and prevent permanent muscular deformities for patients across <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>. Combining intensive therapies—such as <strong>Njavarakizhi</strong> (medicated rice poultice), Shirovasthi, Tailadhara, and Matra Basti—with integrated physical therapy, we actively rebuild neural connections, retrain voluntary motor control, and empower patients to regain independent standing, walking, and dignified daily self-care.`,
    subheading: "Comprehensive Neuro-Restorative Recovery Protocol in Kharadi",
    subcontent: `Each stroke rehabilitation program is customized to the patient's stage of onset, muscle tone (flaccid vs. spastic), and mobility index, delivering cohesive physical and neurological restoration:`,
    checklist: [
      "Njavarakizhi (Shashtika Shali Milk-Rice Muscle Poultice)",
      "Shirovasthi & Tailadhara Cranial Micro-Perfusion",
      "Marma Point Acupressure for Neuro-Motor Activation",
      "Specialized Nasya Therapy for Cranial Nerve Regeneration",
      "Integrated Gait Training & Functional Physical Therapy",
    ],
    modalities: [
      {
        title: "Njavarakizhi (Shashtika Shali Milk-Rice Muscle Poultice)",
        description:
          "Fomentation using boluses of organic Shashtika Shali rice cooked in Bala decoction and milk, deeply permeating wasted muscle fibers to halt atrophy and reduce spastic rigidity.",
      },
      {
        title: "Shirovasthi & Tailadhara Cranial Micro-Perfusion",
        description:
          "Retaining warm neuro-protective medicated oils (Ksheerabala 101, Dhanwantharam) over the scalp to enhance micro-vascular perfusion to damaged ischemic brain territories.",
      },
      {
        title: "Marma Point Acupressure for Neuro-Motor Activation",
        description:
          "Precision stimulation of vital energy centers (Kshipra, Kurpara, and Janu marmas) to trigger motor reflex circuits and accelerate peripheral nerve conduction.",
      },
      {
        title: "Specialized Nasya Therapy for Cranial Nerve Regeneration",
        description:
          "Careful instillation of micro-processed herbal oils through the nasal passages to stimulate facial, trigeminal, and hypoglossal nerves for speech and facial recovery.",
      },
      {
        title: "Integrated Gait Training & Functional Physical Therapy",
        description:
          "Targeted passive and active range-of-motion exercises, core stabilization, balance retraining, and assisted walking to transition patients toward safe independence.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Stroke Rehabilitation",
    benefitsSubcontent: `Our integrated Ayurvedic neuro-rehabilitation protocol delivers progressive, visible functional milestones:`,
    benefits: [
      {
        title: "Re-establishes Voluntary Motor Pathways",
        description:
          "Accelerates cortical neuroplasticity, helping patients recover fine finger movements, arm elevation, hand grip, and voluntary leg control.",
      },
      {
        title: "Prevents Muscle Wasting & Spastic Contractures",
        description:
          "Nourishes denervated muscle fibers with classical Njavarakizhi, softening stiff tendons and preventing painful frozen joint contractures.",
      },
      {
        title: "Restores Facial Symmetry & Speech Function",
        description:
          "Targeted facial Marma therapy and cranial Nasya drops reverse mouth deviation, resolve drooling, and restore clear, intelligible speech articulation.",
      },
      {
        title: "Restores Independent Standing & Walking Balance",
        description:
          "Retrains deep sensory proprioception and pelvic motor stability, transitioning patients from bed and wheelchair dependency to confident walking.",
      },
    ],
    faqs: [
      {
        question: "How soon after a stroke should Ayurvedic rehabilitation begin in Kharadi?",
        answer:
          "Ayurvedic neuro-rehabilitation can commence as soon as the patient is medically stabilized and discharged from the acute care hospital (typically within 2 to 4 weeks post-stroke). Early intervention within the initial 3 to 6 months is the golden period when neuroplastic recovery is most responsive.",
      },
      {
        question: "Can Ayurvedic stroke therapies safely continue alongside prescribed allopathic medications?",
        answer:
          "Yes, absolutely. Our external classical therapies (Abhyanga, Njavarakizhi, Shirodhara) and internal adaptogenic formulations are non-conflicting and safely complement prescribed blood thinners, anti-hypertensives, and statins under Dr. Majiri Musmade watchful medical supervision.",
      },
      {
        question: "What is Njavarakizhi and why is it essential for stroke patients?",
        answer:
          "Njavarakizhi is a classical Kerala Ayurvedic therapy where medicinal rice (Shashtika Shali) cooked in milk and Bala root decoction is tied into boluses and massaged over paretic limbs. The warm herbal milk-rice extracts deeply nourish wasted muscles, improve tendon flexibility, and eliminate joint rigidity.",
      },
      {
        question: "How long does a stroke recovery program take at Shri Vishwavedhika?",
        answer:
          "Recovery timelines depend on the severity of neurological damage and time elapsed since stroke onset. A typical intensive program spans 4 to 12 weeks of clinical therapies combined with guided home physical exercises, monitored weekly for measurable functional progress.",
      },
      {
        question: "How can family members book a stroke consultation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "Family members can consult Dr. Majiri Musmade with the patient's recent MRI/CT brain scans and discharge summary by calling 096049 95998 or 097302 93777, or via WhatsApp. Shri Vishwavedhika is conveniently located at Parmar Square, Kharadi, Pune.",
      },
    ],
  },
  "pakshaghata-treatment": {
    slug: "pakshaghata-treatment",
    title: "Stroke Rehabilitation in Kharadi, Pune | Ayurvedic Neurological Care & Paralysis Recovery",
    breadcrumbLabel: "Stroke Rehabilitation",
    category: "Stress, Neuro & Head Care",
    introHeading: "What is Ayurvedic Stroke Rehabilitation (Pakshaghata Chikitsa)?",
    image: "/images/stroke-patient.webp",
    imageAlt: "Ayurvedic Stroke Rehabilitation and Neurological Recovery at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Stroke (known as Pakshaghata or Pakshavadha in classical Ayurveda) is one of the most debilitating neurological crises, occurring when severely vitiated <strong>Vata dosha</strong> invades cerebral channels (Siras), damaging motor and sensory pathways on one side of the body. Once acute hospital management stabilizes the patient, secondary recovery challenges—including <strong>hemiplegia, facial palsy (Ardita), speech slurring (Mukatva), muscle flaccidity followed by spasticity, and joint contractures</strong>—require specialized, sustained rehabilitation. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the compassionate medical supervision of <strong>Dr. Majiri Musmade</strong>, our evidence-grounded neuro-rehabilitation protocols stimulate dormant brain plasticity, restore arterial perfusion to ischemic penumbra tissues, and prevent permanent muscular deformities for patients across <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>. Combining intensive therapies—such as <strong>Njavarakizhi</strong> (medicated rice poultice), Shirovasthi, Tailadhara, and Matra Basti—with integrated physical therapy, we actively rebuild neural connections, retrain voluntary motor control, and empower patients to regain independent standing, walking, and dignified daily self-care.`,
    subheading: "Comprehensive Neuro-Restorative Recovery Protocol in Kharadi",
    subcontent: `Each stroke rehabilitation program is customized to the patient's stage of onset, muscle tone (flaccid vs. spastic), and mobility index, delivering cohesive physical and neurological restoration:`,
    checklist: [
      "Njavarakizhi (Shashtika Shali Milk-Rice Muscle Poultice)",
      "Shirovasthi & Tailadhara Cranial Micro-Perfusion",
      "Marma Point Acupressure for Neuro-Motor Activation",
      "Specialized Nasya Therapy for Cranial Nerve Regeneration",
      "Integrated Gait Training & Functional Physical Therapy",
    ],
    modalities: [
      {
        title: "Njavarakizhi (Shashtika Shali Milk-Rice Muscle Poultice)",
        description:
          "Fomentation using boluses of organic Shashtika Shali rice cooked in Bala decoction and milk, deeply permeating wasted muscle fibers to halt atrophy and reduce spastic rigidity.",
      },
      {
        title: "Shirovasthi & Tailadhara Cranial Micro-Perfusion",
        description:
          "Retaining warm neuro-protective medicated oils (Ksheerabala 101, Dhanwantharam) over the scalp to enhance micro-vascular perfusion to damaged ischemic brain territories.",
      },
      {
        title: "Marma Point Acupressure for Neuro-Motor Activation",
        description:
          "Precision stimulation of vital energy centers (Kshipra, Kurpara, and Janu marmas) to trigger motor reflex circuits and accelerate peripheral nerve conduction.",
      },
      {
        title: "Specialized Nasya Therapy for Cranial Nerve Regeneration",
        description:
          "Careful instillation of micro-processed herbal oils through the nasal passages to stimulate facial, trigeminal, and hypoglossal nerves for speech and facial recovery.",
      },
      {
        title: "Integrated Gait Training & Functional Physical Therapy",
        description:
          "Targeted passive and active range-of-motion exercises, core stabilization, balance retraining, and assisted walking to transition patients toward safe independence.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Stroke Rehabilitation",
    benefitsSubcontent: `Our integrated Ayurvedic neuro-rehabilitation protocol delivers progressive, visible functional milestones:`,
    benefits: [
      {
        title: "Re-establishes Voluntary Motor Pathways",
        description:
          "Accelerates cortical neuroplasticity, helping patients recover fine finger movements, arm elevation, hand grip, and voluntary leg control.",
      },
      {
        title: "Prevents Muscle Wasting & Spastic Contractures",
        description:
          "Nourishes denervated muscle fibers with classical Njavarakizhi, softening stiff tendons and preventing painful frozen joint contractures.",
      },
      {
        title: "Restores Facial Symmetry & Speech Function",
        description:
          "Targeted facial Marma therapy and cranial Nasya drops reverse mouth deviation, resolve drooling, and restore clear, intelligible speech articulation.",
      },
      {
        title: "Restores Independent Standing & Walking Balance",
        description:
          "Retrains deep sensory proprioception and pelvic motor stability, transitioning patients from bed and wheelchair dependency to confident walking.",
      },
    ],
    faqs: [
      {
        question: "How soon after a stroke should Ayurvedic rehabilitation begin in Kharadi?",
        answer:
          "Ayurvedic neuro-rehabilitation can commence as soon as the patient is medically stabilized and discharged from the acute care hospital (typically within 2 to 4 weeks post-stroke). Early intervention within the initial 3 to 6 months is the golden period when neuroplastic recovery is most responsive.",
      },
      {
        question: "Can Ayurvedic stroke therapies safely continue alongside prescribed allopathic medications?",
        answer:
          "Yes, absolutely. Our external classical therapies (Abhyanga, Njavarakizhi, Shirodhara) and internal adaptogenic formulations are non-conflicting and safely complement prescribed blood thinners, anti-hypertensives, and statins under Dr. Majiri Musmade watchful medical supervision.",
      },
      {
        question: "What is Njavarakizhi and why is it essential for stroke patients?",
        answer:
          "Njavarakizhi is a classical Kerala Ayurvedic therapy where medicinal rice (Shashtika Shali) cooked in milk and Bala root decoction is tied into boluses and massaged over paretic limbs. The warm herbal milk-rice extracts deeply nourish wasted muscles, improve tendon flexibility, and eliminate joint rigidity.",
      },
      {
        question: "How long does a stroke recovery program take at Shri Vishwavedhika?",
        answer:
          "Recovery timelines depend on the severity of neurological damage and time elapsed since stroke onset. A typical intensive program spans 4 to 12 weeks of clinical therapies combined with guided home physical exercises, monitored weekly for measurable functional progress.",
      },
      {
        question: "How can family members book a stroke consultation with Dr. Majiri Musmade in Kharadi?",
        answer:
          "Family members can consult Dr. Majiri Musmade with the patient's recent MRI/CT brain scans and discharge summary by calling 096049 95998 or 097302 93777, or via WhatsApp. Shri Vishwavedhika is conveniently located at Parmar Square, Kharadi, Pune.",
      },
    ],
  },
  "sciatica-treatment-pune": {
    slug: "sciatica-treatment-pune",
    title: "Spine & Joint Care in Kharadi, Pune | Non-Surgical Sciatica, Disc & Joint Pain Relief",
    breadcrumbLabel: "Spine & Joint Care",
    category: "Spine & Joint Orthopedic Care",
    introHeading: "What is Comprehensive Spine & Joint Care?",
    image: "/images/thumb-backpain.webp",
    imageAlt: "Comprehensive Ayurvedic Spine, Joint and Sciatica Care at Shri Vishwavedhika Clinic Kharadi Pune",
    description: `Chronic spinal disorders and degenerative joint conditions—including <strong>lumbar disc herniation, sciatica (Gridhrasi), cervical spondylosis, facet arthropathy, and knee osteoarthritis</strong>—stem from deep-seated <strong>Vata dosha</strong> aggravation that dehydrates intervertebral discs and erodes synovial cartilage. At <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in <strong>Parmar Square, Kharadi, Pune</strong>, under the expert clinical guidance of <strong>Dr. Majiri Musmade</strong>, our comprehensive Spine &amp; Joint Care protocol offers an integrated, non-surgical pathway to permanent pain relief. Rather than relying on temporary analgesic masking or invasive spinal fusion surgery, our protocol combines targeted warm oil retention (<strong>Kati Basti, Janu Basti, and Manya Basti</strong>), anti-inflammatory herbal leaf boluses (<strong>Patra Pinda Sweda</strong>), precision thermal decompression (<strong>Agnikarma</strong>), and classical bone-nourishing medicated enemas (<strong>Tikta Ksheera Basti</strong>). This multidimensional approach rehydrates compressed spinal discs, relieves impinged sciatic nerve roots, restores synovial fluid volume, and re-aligns spinal posture for residents of <strong>Kharadi, Wagholi, Viman Nagar, and Hadapsar</strong>.`,
    subheading: "Integrated 5-Pillar Spinal & Joint Restoration Protocol in Kharadi",
    subcontent: `Our comprehensive orthopedic restoration protocol bridges classical Panchakarma therapies with functional biomechanical rehabilitation:`,
    checklist: [
      "Targeted Local Basti Dam Administration (Kati, Janu, Manya)",
      "Patra Pinda Sweda (Anti-Inflammatory Medicinal Leaf Bolus)",
      "Agnikarma & Micro-Thermal Decompression for Trigger Points",
      "Tikta Ksheera Basti for Deep Disc & Cartilage Remineralization",
      "Ergonomic Core Alignment & Spinal Mobility Asanas",
    ],
    modalities: [
      {
        title: "Targeted Local Basti Dam Administration (Kati, Janu, Manya)",
        description:
          "Forming specialized herbal dough reservoirs over compressed vertebrae or arthritic joints, pooling warm Sahacharadi and Mahanarayana oils to hydrate deep facet joints.",
      },
      {
        title: "Patra Pinda Sweda (Anti-Inflammatory Medicinal Leaf Bolus)",
        description:
          "Fomentation with bundles of medicinal leaves (Nirgundi, Eranda, Arka) sautéed in herbal oils, dissipating deep-seated paraspinal muscle spasms and nerve inflammation.",
      },
      {
        title: "Agnikarma & Micro-Thermal Decompression for Trigger Points",
        description:
          "Nanosecond thermal application using Panchadhatu Shalaka over hyper-sensitized sciatic trigger points, deactivating radiating pain signals immediately.",
      },
      {
        title: "Tikta Ksheera Basti for Deep Disc & Cartilage Remineralization",
        description:
          "Medicated enemas infused with bitter herbs and cow's milk that directly nourish bone tissue (Asthi Dhatu) and rebuild degraded intervertebral disc matrices.",
      },
      {
        title: "Ergonomic Core Alignment & Spinal Mobility Asanas",
        description:
          "Personalized rehabilitation guidance including core-strengthening yoga postures, lumbar curve restoration, and workstation ergonomic corrections for desk workers.",
      },
    ],
    benefitsHeading: "Key Clinical Benefits of Spine & Joint Care",
    benefitsSubcontent: `Our comprehensive protocol provides transformative long-term relief from chronic spinal and joint degeneration:`,
    benefits: [
      {
        title: "Avoids Invasive Spinal & Joint Replacement Surgery",
        description:
          "Naturally rehydrates desiccated spinal discs and restores joint cartilage space, resolving severe disc bulges without surgical intervention.",
      },
      {
        title: "Permanently Resolves Radiating Sciatica Nerve Pain",
        description:
          "Relieves mechanical nerve root compression at L4-L5 and L5-S1, eliminating shooting pain, leg numbness, and tingling down to the toes.",
      },
      {
        title: "Strengthens Paraspinal Tendons & Ligaments",
        description:
          "Nourishes supporting spinal ligaments and deep stabilizing muscles, preventing recurring posture-induced acute back lockouts.",
      },
      {
        title: "Custom Ergonomic Correction for Tech Professionals",
        description:
          "Reverses lumbar lordosis loss and chronic slouching caused by long sedentary desk hours in Kharadi IT parks and EON Free Zone.",
      },
    ],
    faqs: [
      {
        question: "Can severe lumbar disc herniation and sciatica be healed without surgery?",
        answer:
          "Yes. In over 90% of cases, non-sequestrated disc bulges and sciatica respond remarkably well to our comprehensive Ayurvedic protocol. By pooling warm anti-inflammatory oils (Kati Basti), administering Tikta Ksheera Basti to remineralize bone tissue, and performing Agnikarma, disc inflammation subsides and nerve impingement is relieved permanently.",
      },
      {
        question: "How many days does the comprehensive spine and joint care program take?",
        answer:
          "Acute pain episodes typically improve significantly within 5 to 7 days. For chronic disc herniations, severe sciatica, or multi-joint osteoarthritis, a 14 to 21-day structured protocol delivers lasting structural stability and tissue regeneration.",
      },
      {
        question: "What is the role of Tikta Ksheera Basti in spinal disc regeneration?",
        answer:
          "In Ayurveda, bone tissue (Asthi Dhatu) and Vata dosha share an inverse relationship. Tikta Ksheera Basti delivers bitter herbs processed in milk directly into the colon—the primary seat of Vata. This provides bioavailable calcium, minerals, and restorative lipids that nourish spinal disc rings directly.",
      },
      {
        question: "Can working professionals continue office work while undergoing spine care in Kharadi?",
        answer:
          "Yes. We offer convenient morning and evening outpatient appointments for working professionals across Kharadi, Magarpatta, and Viman Nagar. Treatments do not cause sedation or weakness, allowing you to manage professional responsibilities comfortably.",
      },
      {
        question: "How do I book an initial spine and joint assessment with Dr. Majiri Musmade?",
        answer:
          "You can bring your recent MRI, X-rays, and medical reports to Shri Vishwavedhika by calling 096049 95998 or 097302 93777, or via WhatsApp. The clinic is located at Flat no. 104, Parmar Square, near Zensar, Kharadi, Pune.",
      },
    ],
  },
};

// -------------------------------------------------------------
// Canonical 20 Services with -in-kharadi Slugs & Aliases
// -------------------------------------------------------------
const CANONICAL_SERVICES_MAP: Record<string, string> = {
  "panchakarma-treatment": "panchakarma-treatment-in-kharadi",
  "garbha-sanskar-pune": "garbha-sanskar-in-kharadi",
  "vamana-therapy": "vamana-therapy-in-kharadi",
  "virechana-therapy": "virechana-therapy-in-kharadi",
  "basti-treatment-pune": "basti-treatment-in-kharadi",
  "nasya-therapy-pune": "nasya-therapy-in-kharadi",
  "raktamokshana-treatment": "raktamokshana-treatment-in-kharadi",
  "uttar-basti-treatment": "uttar-basti-treatment-in-kharadi",
  "infertility-treatment": "infertility-treatment-in-kharadi",
  "shirodhara-treatment": "shirodhara-treatment-in-kharadi",
  "kati-basti-treatment": "kati-basti-treatment-in-kharadi",
  "janu-basti-treatment": "janu-basti-treatment-in-kharadi",
  "manya-basti-treatment": "manya-basti-treatment-in-kharadi",
  "patra-pinda-sweda": "patra-pinda-sweda-in-kharadi",
  "agnikarma-treatment": "agnikarma-treatment-in-kharadi",
  "jalaukavacharana-leech-therapy": "jalaukavacharana-leech-therapy-in-kharadi",
  "takradhara-treatment": "takradhara-treatment-in-kharadi",
  "netra-tarpana-treatment": "netra-tarpana-treatment-in-kharadi",
  "abhyanga-and-swedana": "abhyanga-and-swedana-in-kharadi",
  "stroke-rehabilitation-pune": "stroke-rehabilitation-in-kharadi",
};

// Initialize canonical -in-kharadi entries
for (const [sourceKey, canonicalSlug] of Object.entries(CANONICAL_SERVICES_MAP)) {
  if (servicesData[sourceKey]) {
    servicesData[canonicalSlug] = {
      ...servicesData[sourceKey],
      slug: canonicalSlug,
    };
  }
}

// Backward compatible aliases
const BACKWARD_COMPATIBLE_ALIASES: Record<string, string> = {
  "spine-and-joint-care": "kati-basti-treatment-in-kharadi",
  "spine-care-kharadi": "kati-basti-treatment-in-kharadi",
  "back-pain-treatment": "kati-basti-treatment-in-kharadi",
  "sciatica-treatment-pune": "kati-basti-treatment-in-kharadi",
  "physiotherapy": "kati-basti-treatment-in-kharadi",
  "kati-basti-treatment": "kati-basti-treatment-in-kharadi",
  "janu-basti": "janu-basti-treatment-in-kharadi",
  "janu-basti-treatment": "janu-basti-treatment-in-kharadi",
  "manya-basti": "manya-basti-treatment-in-kharadi",
  "manya-basti-treatment": "manya-basti-treatment-in-kharadi",
  "elakizhi-treatment": "patra-pinda-sweda-in-kharadi",
  "patra-potli-massage": "patra-pinda-sweda-in-kharadi",
  "patra-pinda-sweda": "patra-pinda-sweda-in-kharadi",
  "panchakarma-treatment": "panchakarma-treatment-in-kharadi",
  "vamana-therapy": "vamana-therapy-in-kharadi",
  "virechana-therapy": "virechana-therapy-in-kharadi",
  "basti-treatment": "basti-treatment-in-kharadi",
  "basti-treatment-pune": "basti-treatment-in-kharadi",
  "abhyanga-swedana": "abhyanga-and-swedana-in-kharadi",
  "abhyanga-and-swedana": "abhyanga-and-swedana-in-kharadi",
  "ayurvedic-massage-pune": "abhyanga-and-swedana-in-kharadi",
  "garbha-sanskar-pune": "garbha-sanskar-in-kharadi",
  "infertility-treatment": "infertility-treatment-in-kharadi",
  "uttar-basti": "uttar-basti-treatment-in-kharadi",
  "uttar-basti-treatment": "uttar-basti-treatment-in-kharadi",
  "nasya-therapy": "nasya-therapy-in-kharadi",
  "nasya-therapy-pune": "nasya-therapy-in-kharadi",
  "shirodhara-treatment": "shirodhara-treatment-in-kharadi",
  "stress-and-rejuvenation": "shirodhara-treatment-in-kharadi",
  "stroke-treatment": "stroke-rehabilitation-in-kharadi",
  "stroke-rehabilitation-pune": "stroke-rehabilitation-in-kharadi",
  "pakshaghata-treatment": "stroke-rehabilitation-in-kharadi",
  "cerebral-palsy": "stroke-rehabilitation-in-kharadi",
  "raktamokshana": "raktamokshana-treatment-in-kharadi",
  "raktamokshana-treatment": "raktamokshana-treatment-in-kharadi",
  "netra-tarpana": "netra-tarpana-treatment-in-kharadi",
  "netra-tarpana-treatment": "netra-tarpana-treatment-in-kharadi",
  "eye-care-treatments": "netra-tarpana-treatment-in-kharadi",
  "skin-and-hair-treatments": "takradhara-treatment-in-kharadi",
  "agnikarma": "agnikarma-treatment-in-kharadi",
  "agnikarma-therapy": "agnikarma-treatment-in-kharadi",
  "agnikarma-treatment": "agnikarma-treatment-in-kharadi",
  "jalaukavacharana": "jalaukavacharana-leech-therapy-in-kharadi",
  "leech-therapy": "jalaukavacharana-leech-therapy-in-kharadi",
  "jalaukavacharana-leech-therapy": "jalaukavacharana-leech-therapy-in-kharadi",
  "takradhara": "takradhara-treatment-in-kharadi",
  "lepa-and-takradhara": "takradhara-treatment-in-kharadi",
  "takradhara-treatment": "takradhara-treatment-in-kharadi",
};

for (const [aliasSlug, canonicalSlug] of Object.entries(BACKWARD_COMPATIBLE_ALIASES)) {
  if (servicesData[canonicalSlug]) {
    servicesData[aliasSlug] = servicesData[canonicalSlug];
  }
}

export const CANONICAL_SERVICES: ServiceDetail[] = Object.values(CANONICAL_SERVICES_MAP).map(
  (slug) => servicesData[slug]
);
