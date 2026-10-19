export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  breadcrumbLabel: string;
  image: string;
  imageAlt: string;
  description: string;
  subheading: string;
  subcontent: string;
  checklist: string[];
  faqs?: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "panchakarma-treatment": {
    slug: "panchakarma-treatment",
    title: "Panchakarma Treatment in Kharadi, Pune",
    breadcrumbLabel: "Panchakarma Treatment",
    image: "/images/PANCH-AKARMA.webp",
    imageAlt: "Authentic Panchakarma Detoxification Treatment at Shree Vishwavedhika Ayurvedic Clinic",
    description: `The word Panchakarma derived from Sanskrit means the "five actions" or "five purification treatments". This is the gold standard of classical Ayurveda processes used to eliminate accumulated metabolic toxins (Ama) from deep bodily tissues and restore the natural balance of Vata, Pitta, and Kapha doshas. Due to modern dietary habits, sedentary lifestyle, and environmental stress, toxins accumulate and cause chronic ailments. Panchakarma Treatment at Shree Vishwavedhika Ayurvedic Clinic systematically flushes out these harmful wastes. Our treatments include customized Abhyanga, Swedana, medicated Basti, Nasya, and Virechana administered under expert medical guidance for physical rejuvenation and mental tranquility.`,
    subheading: "How Is The Panchakarma Treatment Done?",
    subcontent: `Panchakarma is a personalized five-fold purification therapy customized for each individual based on a detailed pulse examination (Nadi Pariksha), Prakriti assessment, and current dosha imbalances:`,
    checklist: [
      "Vaman (Therapeutic Emesis)",
      "Virechan (Targeted Purgation)",
      "Basti (Medicated Enema & Colon Cleansing)",
      "Nasya (Nasal Errhine Therapy)",
      "Raktamokshana (Natural Blood Purification)",
    ],
    faqs: [
      {
        question: "How many days does a complete Panchakarma detox course typically take?",
        answer:
          "A standard Panchakarma course generally lasts between 7, 14, and 21 days depending on your individual health condition, pulse diagnosis (Nadi Pariksha), and detox requirements evaluated by Dr. Manjiri.",
      },
      {
        question: "What preparatory steps (Purva Karma) are required before Panchakarma?",
        answer:
          "Before initiating the primary purification therapies, patients undergo internal and external oleation (Snehana) with medicated herbal ghee or oil and herbal steam fomentation (Swedana) to loosen deep-tissue toxins and move them to the digestive tract for safe elimination.",
      },
      {
        question: "Are there specific dietary restrictions during Panchakarma therapy?",
        answer:
          "Yes. Patients follow a tailored, light, easily digestible Sattvic diet (such as Samsarjana Krama, warm spiced khichdi, and herbal decoctions) to support digestive fire (Agni) and maximize the cleansing benefits.",
      },
      {
        question: "Is Panchakarma safe and supervised by experienced Ayurvedic doctors?",
        answer:
          "Absolutely. Every therapy at Shri Vishwavedhika Ayurvedic Clinic is performed by trained therapists under the direct medical supervision of Dr. Manjiri, strictly using 100% natural, classical Ayurvedic formulations with zero chemical additives.",
      },
      {
        question: "How do I schedule an appointment for Panchakarma in Kharadi, Pune?",
        answer:
          "You can book directly by calling us at 096049 95998 or 097302 93777, or via WhatsApp. Our clinic is open Monday to Saturday from 11:30 AM to 5:30 PM, and on Sundays from 11:30 AM to 2:00 PM.",
      },
    ],
  },
  "stroke-treatment": {
    slug: "stroke-treatment",
    title: "Stroke Rehabilitation & Neurological Care",
    breadcrumbLabel: "Stroke Treatment",
    image: "/images/stroke-patient.webp",
    imageAlt: "Ayurvedic Stroke Rehabilitation and Neurological Care at Shree Vishwavedhika Clinic",
    description: `Stroke rehabilitation in Ayurveda is one of the specialized focuses at Shree Vishwavedhika Ayurvedic Clinic. Strokes (Pakshaghata in classical Ayurveda) occur due to a severe aggravation of Vata dosha impacting cerebral channels, resulting in loss of motor function, facial palsy, speech difficulty, and muscular weakness. Our experienced medical team works cohesively to re-establish neural pathways, improve blood circulation to affected brain tissues, and prevent secondary complications through authentic classical therapies.`,
    subheading: "Comprehensive Stroke Recovery Protocol",
    subcontent: `At Shree Vishwavedhika Ayurvedic Clinic, each stroke recovery plan is personalized according to the patient's stage of onset, mobility index, and vital strength. By combining intensive Ayurvedic therapies with structured physical rehabilitation, patients experience noticeable progress:`,
    checklist: [
      "Shirodhara & Shirovasthi for Cerebral Circulation",
      "Medicated Tailadhara (Continuous Herbal Oil Stream)",
      "Abhyanga & Njavarakizhi Muscle Rejuvenation",
      "Rehabilitative Physical Therapy & Mobilization",
      "Speech Therapy & Functional Recovery Support",
    ],
    faqs: [
      {
        question: "How soon after a stroke should Ayurvedic rehabilitation begin?",
        answer:
          "Ayurvedic rehabilitation can begin as soon as the patient is medically stabilized after the acute hospital phase. Early intervention within the initial weeks or months significantly enhances neuroplasticity and the rate of motor recovery.",
      },
      {
        question: "How does Ayurveda assist in neural recovery and motor function?",
        answer:
          "Classical therapies like Shirodhara, Tailadhara, and Njavarakizhi (warm medicated rice poultice) stimulate cerebral circulation, soothe the nervous system, prevent spastic contractures, and revitalize weakened muscles.",
      },
      {
        question: "Can Ayurvedic stroke therapy be taken alongside conventional medications?",
        answer:
          "Yes. Our Ayurvedic therapies and classical herbal formulations safely complement prescribed allopathic medicines without interfering with blood thinners or anti-hypertensive drugs.",
      },
      {
        question: "What physical and speech therapies are included in the recovery plan?",
        answer:
          "Our integrated protocol combines manual joint mobilization, gait training, balance exercises, facial muscle stimulation, and speech recovery exercises tailored to each patient's functional abilities.",
      },
      {
        question: "What is the expected duration of treatment for stroke recovery?",
        answer:
          "The timeline depends on the severity of neurological damage and time since onset. Rehabilitation programs typically span 4 to 12 weeks of clinical therapies followed by guided home exercises.",
      },
    ],
  },
  "back-pain-treatment": {
    slug: "back-pain-treatment",
    title: "Back Pain & Spine Care Treatment",
    breadcrumbLabel: "Back Pain Treatment",
    image: "/images/thumb-backpain.webp",
    imageAlt: "Ayurvedic Spine and Back Pain Relief Treatment at Shree Vishwavedhika Clinic",
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
          "Dr. Manjiri provides personalized ergonomic advice, core-strengthening yoga asanas, and dietary tips to prevent recurrence and support spinal health during daily computer work and routine activities.",
      },
    ],
  },
  "physiotherapy": {
    slug: "physiotherapy",
    title: "Physiotherapy & Integrated Rehabilitation",
    breadcrumbLabel: "Physiotherapy",
    image: "/images/hh-thumb-physio.webp",
    imageAlt: "Integrated Ayurvedic Physiotherapy and Physical Therapy in Kharadi Pune",
    description: `Shree Vishwavedhika Ayurvedic Clinic bridges the gap between ancient healing wisdom and modern functional physical rehabilitation. Our clinic assists patients in recovering from sports injuries, neurological trauma, post-surgical stiffness, and orthopedic immobility through coordinated therapy programs supervised by experienced practitioners.`,
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
    image: "/images/cerebralpalsy.webp",
    imageAlt: "Pediatric Ayurvedic Care for Cerebral Palsy at Shree Vishwavedhika Clinic",
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
    title: "Spine & Joint Care Treatment",
    breadcrumbLabel: "Spine & Joint Care",
    image: "/images/thumb-backpain.webp",
    imageAlt: "Ayurvedic Spine & Joint Care at Shree Vishwavedhika Clinic Kharadi",
    description: `Our comprehensive Spine & Joint Care protocol offers non-invasive relief for osteo-arthritis, cervical spondylosis, rheumatoid joint stiffness, and sciatica. By combining Kati Basti, Janu Basti, and Patra Pinda Sweda with restorative herbal medicines, we lubricate cartilage, reduce chronic inflammation, and restore natural mobility.`,
    subheading: "Targeted Joint Lubrication & Regeneration",
    subcontent: `We focus on addressing root Vata aggravation that causes drying and degeneration of joints and spinal discs:`,
    checklist: [
      "Janu Basti (Warm Medicated Oil Ring for Knee Joints)",
      "Greeva Basti for Cervical Spine & Neck Relief",
      "Patra Pinda Sweda (Medicated Herbal Leaf Poultice)",
      "Natural Anti-inflammatory Herbal Formulations",
      "Joint Mobility Exercises & Postural Alignment",
    ],
    faqs: [
      {
        question: "How does Janu Basti help with knee osteoarthritis?",
        answer:
          "Janu Basti retains warm medicated oil over the knee joint, which deeply penetrates synovial tissues, lubricates dried cartilage, reduces morning stiffness, and relieves chronic knee pain.",
      },
      {
        question: "Can cervical spondylosis and neck stiffness be cured without surgery?",
        answer:
          "Yes, Greeva Basti and specialized herbal fomentation relieve compression on cervical nerves, reduce muscle spasms, and restore free neck movement effectively.",
      },
      {
        question: "How many days are needed for joint relief?",
        answer:
          "Most patients notice a substantial reduction in pain within 5 to 7 sessions, while a 14-day protocol provides lasting rejuvenation for degenerate joints.",
      },
    ],
  },
  "eye-care-treatments": {
    slug: "eye-care-treatments",
    title: "Ayurvedic Eye Care Therapies (Netra Chikitsa)",
    breadcrumbLabel: "Eye Care Therapies",
    image: "/images/med.webp",
    imageAlt: "Authentic Netra Tarpana Ayurvedic Eye Care at Shree Vishwavedhika Clinic",
    description: `Netra Chikitsa in Ayurveda offers restorative care for eye strain, dry eyes, computer vision syndrome, early cataract, and progressive myopia. Our soothing Netra Tarpana and Aschyotana therapies nourish optical nerves and enhance ocular vitality naturally.`,
    subheading: "Authentic Netra Tarpana Therapy",
    subcontent: `Warm medicated Triphala or cow's ghee is pooled around the eyes in a gentle flour reservoir, bathing optical tissues:`,
    checklist: [
      "Netra Tarpana (Medicated Ghee Reservoir for Optical Care)",
      "Aschyotana (Sterile Herbal Eye Drops Therapy)",
      "Pindi & Bidalaka (Herbal Eye Packs)",
      "Nasya Therapy for Optical Nerve Stimulation",
      "Trataka Yoga & Optical Rest Techniques",
    ],
    faqs: [
      {
        question: "What is Netra Tarpana and is it painful?",
        answer:
          "Netra Tarpana is a deeply relaxing, painless therapy where a dough dam is placed around the eyes and filled with lukewarm medicated herbal ghee, lubricating and soothing optic tissues.",
      },
      {
        question: "Can Netra Tarpana help with Computer Vision Syndrome and dry eyes?",
        answer:
          "Yes, it is highly recommended for IT professionals and students suffering from screen-related eye strain, burning sensation, dryness, and fatigue.",
      },
    ],
  },
  "infertility-treatment": {
    slug: "infertility-treatment",
    title: "Infertility Treatment & Garbha Sanskar Care",
    breadcrumbLabel: "Infertility & Garbha Sanskar",
    image: "/images/young-woman-measuring-her-thin-waist-with-tape-measure-3-1-1024x683.jpg",
    imageAlt: "Ayurvedic Infertility and Garbha Sanskar Care at Shree Vishwavedhika Clinic",
    description: `Dr. Manjiri specializes in natural conception, hormonal rebalancing (PCOS/PCOD), and authentic Garbha Sanskar guidance. By detoxifying reproductive channels with Uttar Basti and nourishing Shukra and Artava dhatus, we help couples achieve healthy, natural parenthood.`,
    subheading: "Natural Fertility Enhancement & Prenatal Care",
    subcontent: `Our fertility protocols blend classical Panchakarma detoxification with nutritional guidance and traditional prenatal wellness:`,
    checklist: [
      "Uttar Basti (Specialized Reproductive Cleansing)",
      "PCOS & PCOD Hormonal Rebalancing Therapies",
      "Ovulation Regulation & Uterine Tone Enhancement",
      "Sperm Quality & Motility Improvement Protocols",
      "Complete Garbha Sanskar Prenatal Guidance",
    ],
    faqs: [
      {
        question: "What is Uttar Basti and how does it assist fertility?",
        answer:
          "Uttar Basti is a specialized classical therapy where sterile medicated herbal oil is administered into the uterine cavity, clearing tubal blocks, improving endometrium thickness, and balancing ovarian hormones.",
      },
      {
        question: "What is Garbha Sanskar and when should it be started?",
        answer:
          "Garbha Sanskar begins ideally 3 to 6 months prior to conception (Beeja Shuddhi) and continues throughout pregnancy with guided meditation, sattvic diet, and herbal care for the baby's wholesome development.",
      },
    ],
  },
  "skin-and-hair-treatments": {
    slug: "skin-and-hair-treatments",
    title: "Skin & Hair Care (Kushta & Keshya Chikitsa)",
    breadcrumbLabel: "Skin & Hair Care",
    image: "/images/howitworks.webp",
    imageAlt: "Natural Ayurvedic Skin and Hair Treatments at Shree Vishwavedhika Clinic",
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
    image: "/images/yoga-1.webp",
    imageAlt: "Authentic Shirodhara and Stress Relief at Shree Vishwavedhika Clinic",
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
        question: "What does Shirodhara feel like and what are its benefits?",
        answer:
          "Shirodhara is a blissful, deeply meditative therapy where warm herbal oil flows rhythmically across your forehead. It instantly relieves stress, alleviates chronic migraines, and cures insomnia.",
      },
      {
        question: "How many sessions are recommended for chronic insomnia?",
        answer:
          "A series of 5 to 7 consecutive Shirodhara sessions combined with evening herbal formulations restores normal circadian sleep cycles for most patients.",
      },
    ],
  },
};
