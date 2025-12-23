export const clinicData = {
  // Clinic Information
  clinic: {
    name: 'Swastik Nursing Home',
    tagline: 'Trusted Pediatric and Orthopedic Care in Ghatkopar West',
    description: 'A family-focused healthcare facility providing specialized pediatric and orthopedic services with experienced doctors and modern medical care.',

    // Contact Information
    phone: '+91 9821330087',
    whatsappNumber: '+919821330087',
    email: 'info@swastiknursinghome.com',

    // Address Information
    addressText: '4W8G+HCP, Lal Bahadur Shastri Marg, Near Shreyas Cinema, Surya Nagar, Chandan Nagar, Ghatkopar West, Mumbai, Maharashtra 400083',
    addressShort: 'Lal Bahadur Shastri Marg, Near Shreyas Cinema, Ghatkopar West, Mumbai 400083',
    googleMapsQuery: '4W8G+HCP Lal Bahadur Shastri Marg Near Shreyas Cinema Surya Nagar Chandan Nagar Ghatkopar West Mumbai Maharashtra 400083',

    // Clinic Hours
    timings: {
      monday: '9:00 AM - 8:00 PM',
      tuesday: '9:00 AM - 8:00 PM',
      wednesday: '9:00 AM - 8:00 PM',
      thursday: '9:00 AM - 8:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 2:00 PM',
      sunday: 'Closed'
    },
    emergencyNote: 'For medical emergencies, please visit the nearest emergency facility. We provide non-emergency care only.',

    // Social Links (placeholders)
    social: {
      facebook: '',
      instagram: '',
      linkedin: ''
    }
  },

  // Doctors Information
  doctors: [
    {
      id: 'dr-amit-shah',
      name: 'Dr. Amit Shah',
      degree: 'MD Pediatrics',
      specialty: 'Pediatrician',
      shortBio: 'Experienced pediatrician specializing in child healthcare, vaccination, and growth monitoring.',
      longBio: `Dr. Amit Shah is a dedicated pediatrician with extensive experience in child healthcare. He specializes in newborn care, vaccination programs, and monitoring child development. Dr. Shah believes in a holistic approach to pediatric care, focusing on both physical and emotional well-being of children.

His areas of expertise include:
• Newborn and infant care
• Vaccination and immunization guidance
• Growth and nutrition counseling
• Common childhood illnesses
• Developmental assessments
• Allergy and asthma management

Dr. Shah is committed to providing compassionate, family-centered care and building lasting relationships with his young patients and their families.`,
      languages: ['English', 'Hindi', 'Marathi'],
      areasOfFocus: ['Newborn Care', 'Vaccinations', 'Growth Monitoring', 'Child Nutrition', 'Allergy Management'],
      availability: 'Mon-Sat: 9:00 AM - 8:00 PM',
      image: '/src/assets/doc1.png', // Will use existing doctor image
      credentials: 'MD Pediatrics, MBBS',
      consultationCTA: 'Book Pediatric Consultation'
    },
    {
      id: 'dr-swapnil-shah',
      name: 'Dr. Swapnil Shah',
      degree: 'MS Orthopedic Surgery',
      specialty: 'Orthopedic Surgeon',
      shortBio: 'Expert orthopedic surgeon specializing in joint care, sports injuries, and fracture management.',
      longBio: `Dr. Swapnil Shah is a skilled orthopedic surgeon with specialization in musculoskeletal disorders and injuries. He provides comprehensive orthopedic care with a focus on minimally invasive procedures and patient rehabilitation.

His areas of expertise include:
• Joint pain evaluation and treatment
• Sports injury assessment and rehabilitation
• Fracture care and follow-up
• Back and neck pain management
• Arthritis treatment
• Post-operative orthopedic care

Dr. Shah combines surgical expertise with conservative treatment approaches to ensure the best possible outcomes for his patients. He believes in educating patients about their conditions and involving them in their treatment decisions.`,
      languages: ['English', 'Hindi', 'Marathi'],
      areasOfFocus: ['Joint Care', 'Sports Injuries', 'Fracture Management', 'Back Pain', 'Arthritis Treatment'],
      availability: 'Mon-Sat: 9:00 AM - 8:00 PM',
      image: '/src/assets/doc2.png', // Will use existing doctor image
      credentials: 'MS Orthopedic Surgery, MBBS',
      consultationCTA: 'Book Orthopedic Consultation'
    }
  ],

  // Services/Departments
  services: {
    pediatrics: [
      {
        id: 'newborn-care',
        title: 'Newborn & Infant Care',
        description: 'Comprehensive care for newborns and infants including health checkups, feeding guidance, and developmental monitoring.',
        icon: '👶'
      },
      {
        id: 'vaccinations',
        title: 'Vaccinations & Immunization',
        description: 'Complete vaccination programs following national immunization schedules and travel vaccination guidance.',
        icon: '💉'
      },
      {
        id: 'common-illnesses',
        title: 'Common Illnesses Treatment',
        description: 'Diagnosis and treatment of common childhood illnesses including fever, cough, infections, and respiratory conditions.',
        icon: '🌡️'
      },
      {
        id: 'growth-monitoring',
        title: 'Growth & Nutrition Counseling',
        description: 'Regular monitoring of child growth patterns and personalized nutrition advice for optimal development.',
        icon: '📏'
      },
      {
        id: 'allergy-care',
        title: 'Allergy & Asthma Care',
        description: 'Evaluation and management of allergies and asthma in children with appropriate treatment plans.',
        icon: '🌿'
      },
      {
        id: 'school-health',
        title: 'School Health Guidance',
        description: 'Health assessments for school readiness and guidance on maintaining health during school years.',
        icon: '🎒'
      }
    ],
    orthopedics: [
      {
        id: 'joint-pain',
        title: 'Joint Pain Evaluation',
        description: 'Comprehensive assessment and treatment of joint pain including arthritis and degenerative joint conditions.',
        icon: '🦴'
      },
      {
        id: 'sports-injuries',
        title: 'Sports Injury Treatment',
        description: 'Diagnosis and rehabilitation of sports-related injuries including sprains, strains, and ligament tears.',
        icon: '⚽'
      },
      {
        id: 'fracture-care',
        title: 'Fracture Care & Follow-up',
        description: 'Treatment and rehabilitation following fractures with proper healing assessment and physiotherapy guidance.',
        icon: '🩹'
      },
      {
        id: 'back-neck-pain',
        title: 'Back & Neck Pain Management',
        description: 'Evaluation and conservative treatment of back and neck pain including posture correction and exercise therapy.',
        icon: '🦾'
      },
      {
        id: 'arthritis-care',
        title: 'Arthritis Care',
        description: 'Management of various forms of arthritis with medication, lifestyle modifications, and joint preservation techniques.',
        icon: '🦵'
      },
      {
        id: 'post-op-care',
        title: 'Post-Operative Care',
        description: 'Follow-up care after orthopedic surgeries including wound care, rehabilitation, and recovery monitoring.',
        icon: '🏥'
      }
    ]
  },

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: 'Mrs. Priya Sharma',
      location: 'Ghatkopar West',
      text: 'Excellent care for my 3-year-old daughter. Dr. Amit Shah is very patient and explains everything clearly. The clinic is clean and the staff is very friendly.',
      rating: 5,
      service: 'Pediatrics'
    },
    {
      id: 2,
      name: 'Mr. Rajesh Kumar',
      location: 'Chandan Nagar',
      text: 'Dr. Swapnil Shah treated my knee pain very effectively. The treatment was conservative and I avoided surgery. Highly recommend for orthopedic issues.',
      rating: 5,
      service: 'Orthopedics'
    },
    {
      id: 3,
      name: 'Mrs. Sunita Patel',
      location: 'Surya Nagar',
      text: 'Very convenient location near Shreyas Cinema. Both doctors are excellent and the clinic maintains high standards of hygiene. Family-friendly environment.',
      rating: 5,
      service: 'General'
    },
    {
      id: 4,
      name: 'Mr. Vikram Singh',
      location: 'Ghatkopar',
      text: 'Professional service and reasonable consultation fees. The doctors take time to understand the problem and provide appropriate treatment.',
      rating: 5,
      service: 'Orthopedics'
    },
    {
      id: 5,
      name: 'Mrs. Meera Joshi',
      location: 'Ghatkopar West',
      text: 'Great experience with vaccination services. The clinic follows proper protocols and the pediatrician explained the vaccine schedule very well.',
      rating: 5,
      service: 'Pediatrics'
    },
    {
      id: 6,
      name: 'Mr. Anil Desai',
      location: 'Chandan Nagar',
      text: 'Recovered well from my sports injury under Dr. Shah\'s care. The rehabilitation program was very effective. Clean clinic with modern facilities.',
      rating: 5,
      service: 'Orthopedics'
    }
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: 'Do you accept walk-in appointments?',
      answer: 'Yes, we accept walk-in patients for urgent consultations. However, we recommend booking appointments in advance for better service, especially for specialized consultations.'
    },
    {
      id: 2,
      question: 'What are your consultation fees?',
      answer: 'Our consultation fees vary by doctor and service type. Pediatric consultations start from ₹800, and orthopedic consultations start from ₹1000. Please contact us for specific pricing.'
    },
    {
      id: 3,
      question: 'Do you provide emergency services?',
      answer: 'We provide non-emergency medical care only. For medical emergencies, please visit the nearest emergency facility or call emergency services immediately.'
    },
    {
      id: 4,
      question: 'Do you accept health insurance?',
      answer: 'We accept most major health insurance plans. Please bring your insurance card and ID proof. Our staff will help you with the insurance claim process.'
    },
    {
      id: 5,
      question: 'What vaccinations do you provide?',
      answer: 'We provide all routine childhood vaccinations as per the national immunization schedule, including optional vaccines. We also provide travel vaccinations for adults and children.'
    },
    {
      id: 6,
      question: 'How can I book an appointment?',
      answer: 'You can book appointments by calling us, WhatsApp messaging, or through our contact form. Walk-ins are also welcome for urgent consultations.'
    },
    {
      id: 7,
      question: 'Do you have parking facilities?',
      answer: 'Yes, we have dedicated parking space available for patients visiting our clinic. Additional street parking is also available nearby.'
    },
    {
      id: 8,
      question: 'What should I bring for my first visit?',
      answer: 'Please bring any previous medical records, current medications, insurance information, and identification proof. For pediatric visits, bring the child\'s vaccination records.'
    },
    {
      id: 9,
      question: 'Do you provide home visits?',
      answer: 'We do not provide routine home visits. However, for special cases or patients with mobility issues, please discuss with your doctor for possible arrangements.'
    },
    {
      id: 10,
      question: 'How long do appointments typically last?',
      answer: 'Initial consultations typically last 15-20 minutes, while follow-up visits are usually 10-15 minutes. Complex cases may require longer appointments.'
    }
  ],

  // SEO Configuration
  seo: {
    siteTitle: 'Swastik Nursing Home - Pediatric & Orthopedic Care in Ghatkopar West, Mumbai',
    defaultDescription: 'Trusted pediatric and orthopedic care in Ghatkopar West, Mumbai. Experienced doctors Dr. Amit Shah (Pediatrician) and Dr. Swapnil Shah (Orthopedic Surgeon). Family-friendly clinic with modern facilities.',
    keywords: 'pediatrician Ghatkopar, orthopedic doctor Mumbai, child specialist Chandan Nagar, bone doctor Ghatkopar West, vaccination clinic Mumbai, pediatric care Maharashtra',
    ogImage: '/src/assets/header_img.png',
    canonicalBase: 'https://swastiknursinghome.com'
  },

  // Why Choose Us section
  whyChooseUs: [
    {
      title: 'Experienced Doctors',
      description: 'Our doctors have years of experience in pediatric and orthopedic care, providing expert medical services.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Family-Friendly Environment',
      description: 'Comfortable, welcoming atmosphere designed with families and children in mind.',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Convenient Location',
      description: 'Easily accessible location near Shreyas Cinema in Ghatkopar West with ample parking.',
      icon: '📍'
    },
    {
      title: 'Modern Facilities',
      description: 'Well-equipped clinic with modern medical facilities and hygienic environment.',
      icon: '🏥'
    },
    {
      title: 'Personalized Care',
      description: 'Individual attention and customized treatment plans for each patient.',
      icon: '💝'
    }
  ]
};

export default clinicData;
