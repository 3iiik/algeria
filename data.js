// ============================================================
// DATA — 69 wilaya capital cities + 8 quiz questions
// Auto-generated from Gemini content + Wikidata P18 images
// ============================================================

let currentLang = localStorage.getItem('algeria-lang') || 'en';

const UI = {
  quiz_start: { en: "Start Quiz", fr: "Commencer le Quiz", ar: "ابدأ الاختبار" },
  quiz_choose: { en: "CHOOSE! 🔥", fr: "CHOISIS ! 🔥", ar: "!اختر 🔥" },
  progress_start: { en: "Start", fr: "Départ", ar: "البداية" },
  progress_goal: { en: "The Goal", fr: "L'Objectif", ar: "الهدف" },
  result_prefix: { en: "You belong in", fr: "Ta place est à", ar: "مكانك في" },
  result_suffix: { en: "!", fr: " !", ar: "!" },
  result_badge: { en: "QUIZ RESULT", fr: "RÉSULTAT DU QUIZ", ar: "نتيجة الاختبار" },
  share_btn: { en: "Share Result", fr: "Partager", ar: "مشاركة النتيجة" },
  try_again: { en: "Try Again", fr: "Recommencer", ar: "حاول مجدداً" },
  sticker_1: { en: "100% MATCH", fr: "100% MATCH", ar: "تطابق تام %100" },
  vibe_prefix: { en: "Perfect Vibe", fr: "Vibe Parfait", ar: "ال vibe مثالي" },
  start_tagline: { en: "From the chaos of Algiers to the chill of Oran, find out where you actually belong. 🇩🇿", fr: "Du chaos d'Alger au chill d'Oran, découvre où est ta vraie place. 🇩🇿", ar: "من فوضى الجزائر العاصمة إلى هدوء وهران، اكتشف أين مكانك الحقيقي. 🇩🇿" },
  start_title: { en: "Which Algerian City<br class=\"hidden md:block\" /> Are You?", fr: "Quelle Ville Algérienne<br class=\"hidden md:block\" /> Es-Tu ?", ar: "أي مدينة جزائرية<br class=\"hidden md:block\" /> أنت؟" },
  join_count: { en: "Join 12.5k people who found their home city today", fr: "Rejoins 12.5k personnes qui ont trouvé leur ville aujourd'hui", ar: "انضم إلى 12.5 ألف شخص وجدوا مدينتهم اليوم" },
  share_card_quiz: { en: "Take the quiz on", fr: "Fais le quiz sur", ar: "اختبر نفسك على" },
  share_card_title: { en: "Which Algerian City Are You?", fr: "Quelle Ville Algérienne Es-Tu ?", ar: "أي مدينة جزائرية أنت؟" },
  share_card_im: { en: "I'M 100%", fr: "JE SUIS 100%", ar: "أنا %100" }
};

const QUESTIONS = [
  {
    id: 1,
    question: { en: "Beach or mountains?", fr: "Plage ou montagne ?", ar: "شاطئ ولا جبال؟" },
    options: [
      { label: { en: "🌊 Beach", fr: "🌊 Plage", ar: "🌊 شاطئ" }, tags: { coastal: 3 } },
      { label: { en: "🏔️ Mountains", fr: "🏔️ Montagne", ar: "🏔️ جبال" }, tags: { mountain: 3 } },
    ],
  },
  {
    id: 2,
    question: { en: "Fast-paced or chill?", fr: "Rythme rapide ou chill ?", ar: "سريع ولا رايق؟" },
    options: [
      { label: { en: "⚡ Fast-paced", fr: "⚡ Rythme rapide", ar: "⚡ سريع" }, tags: { fast: 3 } },
      { label: { en: "🧘 Chill", fr: "🧘 Chill", ar: "🧘 رايق" }, tags: { chill: 3 } },
    ],
  },
  {
    id: 3,
    question: { en: "Big city energy or small town warmth?", fr: "Énergie de grande ville ou chaleur de petite ville ?", ar: "طاقة المدينة الكبيرة ولا دفء البلدة الصغيرة؟" },
    options: [
      { label: { en: "🌆 Big city", fr: "🌆 Grande ville", ar: "🌆 مدينة كبيرة" }, tags: { urban: 3 } },
      { label: { en: "🏘️ Small town", fr: "🏘️ Petite ville", ar: "🏘️ بلدة صغيرة" }, tags: { traditional: 3 } },
    ],
  },
  {
    id: 4,
    question: { en: "Nightlife or early nights?", fr: "Vie nocturne ou soirées tranquilles ?", ar: "حياة ليلية ولا نوم بدري؟" },
    options: [
      { label: { en: "🍸 Nightlife", fr: "🍸 Vie nocturne", ar: "🍸 سهر" }, tags: { nightlife: 3 } },
      { label: { en: "🌙 Early nights", fr: "🌙 Soirées calmes", ar: "🌙 نوم بدري" }, tags: { family: 3 } },
    ],
  },
  {
    id: 5,
    question: { en: "Budget-conscious or don't care?", fr: "Économe ou tu t'en fiches ?", ar: "موفر ولا ما يهمكش؟" },
    options: [
      { label: { en: "💰 Budget-conscious", fr: "💰 Économe", ar: "💰 موفر" }, tags: { low_budget: 3 } },
      { label: { en: "💎 Don't care", fr: "💎 Je m'en fiche", ar: "💎 ما يهمنيش" }, tags: { mid_budget: 3 } },
    ],
  },
  {
    id: 6,
    question: { en: "Desert heat or four seasons?", fr: "Chaleur du désert ou quatre saisons ?", ar: "حر الصحراء ولا الفصول الأربعة؟" },
    options: [
      { label: { en: "🏜️ Desert heat", fr: "🏜️ Chaleur du désert", ar: "🏜️ حر الصحراء" }, tags: { desert: 3 } },
      { label: { en: "🍂 Four seasons", fr: "🍂 Quatre saisons", ar: "🍂 أربعة فصول" }, tags: { temperate: 3 } },
    ],
  },
  {
    id: 7,
    question: { en: "Historic vibes or modern life?", fr: "Ambiance historique ou vie moderne ?", ar: "أجواء تاريخية ولا حياة عصرية؟" },
    options: [
      { label: { en: "🏛️ Historic city", fr: "🏛️ Ville historique", ar: "🏛️ مدينة تاريخية" }, tags: { historic: 3 } },
      { label: { en: "🏗️ Modern city", fr: "🏗️ Ville moderne", ar: "🏗️ مدينة عصرية" }, tags: { modern: 3 } },
    ],
  },
  {
    id: 8,
    question: { en: "Tourist hotspot or local secret?", fr: "Spot touristique ou secret local ?", ar: "وجهة سياحية ولا سر محلي؟" },
    options: [
      { label: { en: "📸 Tourist favorite", fr: "📸 Incontournable", ar: "📸 مفضلة سياحية" }, tags: { touristy: 3 } },
      { label: { en: "🤫 Hidden gem", fr: "🤫 Joyau caché", ar: "🤫 جوهرة مخفية" }, tags: { local: 3 } },
    ],
  },
];

const CITIES = {
  adrar: {
    name: "Adrar",
    demonym: "ADRARIENNE",
    emoji: "🌴🔥",
    tagline: {
      en: "Living that golden oasis dream life.",
      fr: "La vie de rêve au cœur des oasis dorées.",
      ar: "عيش حلم الواحة الذهبي في وسط الكثبان."
    },
    description: {
      en: "You are the ultimate hidden gem, chilling in the middle of the dunes. You love keeping it real, traditional, and totally low-key.",
      fr: "T'es la perle rare qui kiffe le calme au milieu des dunes. Tu restes authentique, traditionnel et totalement discret — et c'est ce qui te rend unique.",
      ar: "أنت الجوهرة المخفية، تستمتع بالهدوء في وسط الكثبان الرملية. تحب البساطة، الأصالة، والحياة بعيداً عن الضوضاء."
    },
    vibe_tag: {
      en: "Golden dunes and ancient desert whispers",
      fr: "Dunes dorées et chuchotements du désert",
      ar: "كثبان ذهبية وهمس الصحراء القديم"
    },
    image: "assets/wilayas/01-Adrar.jpg",
    tags: {desert:3,chill:3,traditional:3,family:2,low_budget:3,historic:1,local:3}
  },
  chlef: {
    name: "Chlef",
    demonym: "CHLEFIENNE",
    emoji: "🍊🚜",
    tagline: {
      en: "Fresh vibes and farm-to-table energy.",
      fr: "Ambiance fraîche et énergie de la ferme à l'assiette.",
      ar: " vibes منعشة وطاقة من المزرعة للسفرة."
    },
    description: {
      en: "You are all about growth and keeping things grounded. You're a hardworking soul who values community and simple, honest living.",
      fr: "Tu es du genre à cultiver la vie et à garder les pieds sur terre. T'as l'âme d'un travailleur acharné qui croit en la communauté et la simplicité.",
      ar: "أنت إنسان طموح متجذر في أرضه، تقدر الجماعة والحياة البسيطة النقية. عندك قلب مجتهد وروح صادقة."
    },
    vibe_tag: {
      en: "Where history meets the fertile valley",
      fr: "Là où l'histoire rencontre la vallée fertile",
      ar: "حيث يلتقي التاريخ بالوادي الخصيب"
    },
    image: "assets/wilayas/02-Chlef.jpg",
    tags: {
      mountain: 1,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 3
    }
  },
  laghouat: {
    name: "Laghouat",
    demonym: "LAGHOUATIENNE",
    emoji: "🏜️✨",
    tagline: {
      en: "The gateway to your next adventure.",
      fr: "La porte d'entrée vers ta prochaine aventure.",
      ar: "بوابة مغامرتك القادمة."
    },
    description: {
      en: "You are the bridge between the city and the wild Sahara. You've got a classic soul and you're always ready for a road trip.",
      fr: "T'es le pont entre la ville et le Sahara sauvage. T'as une âme classieuse et t'es toujours partant pour un road trip improvisé.",
      ar: "أنت الجسر الذي يربط المدينة بالصحراء الواسعة. روحك كلاسيكية وحقيبتك دومًا جاهزة للرحلة."
    },
    vibe_tag: {
      en: "Gateway to the vast Saharan horizon",
      fr: "Porte vers l'horizon infini du Sahara",
      ar: "بوابة الأفق الصحراوي الممتد"
    },
    image: "assets/wilayas/03-Laghouat.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      temperate: 1,
      chill: 3,
      urban: 1,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  oum_el_bouaghi: {
    name: "Oum El Bouaghi",
    demonym: "OUM EL BOUAGHIENNE",
    emoji: "🌾☁️",
    tagline: {
      en: "Quiet, steady, and perfectly low-key.",
      fr: "Calme, posé, et parfaitement discret.",
      ar: "هادئ، متزن، ومنخفض البروفايل."
    },
    description: {
      en: "You don't need the spotlight to shine. You value your peace and quiet, and you're the most reliable friend in the group.",
      fr: "T'as pas besoin des projecteurs pour briller. Tu kiffes ta tranquillité et t'es le pote le plus fiable de la bande, celui sur qui tout le monde compte.",
      ar: "ما تحتش الأضواء عشان تلمع. أنت القدوة الهادئة، الصديق المخلص اللي الكل يعتمد عليه."
    },
    vibe_tag: {
      en: "High plateau spirit, rugged and raw",
      fr: "Esprit des hauts plateaux, brut et authentique",
      ar: "روح الهضاب العالية، أصيلة وقوية"
    },
    image: null,
    tags: {
      mountain: 1,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  batna: {
    name: "Batna",
    demonym: "BATNÉENNE",
    emoji: "🎓🏔️",
    tagline: {
      en: "Brainy, bold, and totally iconic.",
      fr: "Intello, audacieux et carrément iconique.",
      ar: "ذكي، جريء، وأيقونة بحد ذاتها."
    },
    description: {
      en: "You are a total history buff with a revolutionary spirit. You love hanging out with friends and debating the big topics.",
      fr: "T'es un passionné d'histoire avec un esprit révolutionnaire. Tu adores traîner avec les potes et débattre des grands sujets autour d'un café.",
      ar: "أنت عاشق للتاريخ بروح ثائرة. تحب الجلسات مع الأصدقاء والنقاشات العميقة عن كل شيء."
    },
    vibe_tag: {
      en: "Mountain peaks and ancient Roman echoes",
      fr: "Sommets montagneux et échos romains antiques",
      ar: "قمم جبال وأصداء رومانية عريقة"
    },
    image: "assets/wilayas/05-Batna.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      modern: 1,
      local: 2,
      touristy: 1
    }
  },
  b_ja_a: {
    name: "Béjaïa",
    demonym: "BÉJAÏENNE",
    emoji: "🌊⛰️",
    tagline: {
      en: "Coastal aesthetic and mountain views.",
      fr: "Ambiance côtière avec vue sur les montagnes.",
      ar: "جمال البحر وإطلالة الجبل في آن واحد."
    },
    description: {
      en: "You are the total package—beach days in the morning and mountain hikes in the afternoon. You're trendy, social, and always on the move.",
      fr: "T'es le package complet — plage le matin, randonnée en montagne l'après-midi. T'es tendance, sociable et toujours en mouvement.",
      ar: "أنت الباقة المتكاملة — شواطئ في الصباح وجبال في المساء. عصري، اجتماعي، ودايماً في الحركة."
    },
    vibe_tag: {
      en: "Emerald coastlines and Mediterranean dreams",
      fr: "Côtes émeraude et rêves méditerranéens",
      ar: "سواحل زمردية وأحلام متوسطية"
    },
    image: "assets/wilayas/06-B_ja_a.jpg",
    tags: {
      coastal: 3,
      mountain: 2,
      temperate: 2,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 3,
      low_budget: 1,
      mid_budget: 2,
      historic: 1,
      modern: 2,
      local: 1,
      touristy: 3
    }
  },
  biskra: {
    name: "Biskra",
    demonym: "BISKRIENNE",
    emoji: "🌴☀️",
    tagline: {
      en: "Sweetest vibes in the desert sun.",
      fr: "Les plus douces vibes sous le soleil du désert.",
      ar: "أحلى الأجواء تحت شمس الصحراء."
    },
    description: {
      en: "You are vibrant, warm, and have a heart of gold—just like the famous dates you're known for. You're the life of the oasis.",
      fr: "T'es pétillant, chaleureux, et t'as un cœur en or — comme les fameuses dattes qui font ta réputation. T'es l'âme de l'oasis.",
      ar: "أنت مفعم بالحيوية والدفء، وقلبك أبيض — تمامًا مثل التمور الشهيرة اللي تشتهر بها. أنت روح الواحة."
    },
    vibe_tag: {
      en: "Date palms and desert oasis magic",
      fr: "Palmeraies et magie des oasis du désert",
      ar: "نخيل وسحر واحات الصحراء"
    },
    image: "assets/wilayas/07-Biskra.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      local: 2,
      touristy: 1
    }
  },
  b_char: {
    name: "Béchar",
    demonym: "BÉCHARIENNE",
    emoji: "🌵✊",
    tagline: {
      en: "Rugged, raw, and ready for anything.",
      fr: "Brut, authentique et prêt à tout.",
      ar: "خام، أصيل، وجاهز لأي شيء."
    },
    description: {
      en: "You're a bit of a mystery. You love your independence and have a tough-as-nails personality that survives any challenge.",
      fr: "T'es un peu mystérieux. T'aimes ton indépendance et t'as une personnalité en béton armé qui surmonte tous les défis.",
      ar: "أنت غامض بعض الشيء. تحب استقلاليتك وشخصيتك قوية كالصخر تقهر أي تحدي."
    },
    vibe_tag: {
      en: "Sahara soul, timeless nomadic vibes",
      fr: "Âme du Sahara, esprit nomade intemporel",
      ar: "روح الصحراء، وبداوة لا تموت"
    },
    image: "assets/wilayas/08-B_char.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  blida: {
    name: "Blida",
    demonym: "BLIDAISE",
    emoji: "🌹✨",
    tagline: {
      en: "City of roses and main character energy.",
      fr: "La ville des roses avec une énergie de protagoniste.",
      ar: "مدينة الورود وطاقة البطل الرئيسي."
    },
    description: {
      en: "You are super stylish and always surrounded by beauty. You're the one who organizes the weekend hangouts and keeps the squad together.",
      fr: "T'es super stylé et toujours entouré de beauté. C'est toi qui organises les sorties du week-end et qui tiens la team soudée.",
      ar: "أنت راقي ومحاط بالجمال دايماً. أنت اللي تنظم الخروجات وتلم الشمل."
    },
    vibe_tag: {
      en: "City of roses and mountain breezes",
      fr: "Ville des roses et brise de montagne",
      ar: "مدينة الورود ونسمات الجبال"
    },
    image: "assets/wilayas/09-Blida.jpg",
    tags: {
      coastal: 1,
      mountain: 1,
      temperate: 3,
      fast: 3,
      urban: 3,
      nightlife: 2,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 1,
      modern: 3,
      local: 1,
      touristy: 2
    }
  },
  bouira: {
    name: "Bouira",
    demonym: "BOUIRIENNE",
    emoji: "🌲🏔️",
    tagline: {
      en: "Mountain soul with a quiet heart.",
      fr: "Âme montagnarde au cœur tranquille.",
      ar: "روح جبلية وقلب هادئ."
    },
    description: {
      en: "You are deep, thoughtful, and love your roots. You prefer a slow pace and meaningful connections over the busy city rush.",
      fr: "T'es profond, réfléchi, et tu tiens à tes racines. Tu préfères le rythme lent et les connexions sincères à l'agitation de la ville.",
      ar: "أنت عميق، مفكر، وتحب أصولك. تفضل الحياة البطيئة والعلاقات الصادقة على صخب المدينة."
    },
    vibe_tag: {
      en: "Green hills and serene highland air",
      fr: "Collines verdoyantes et air serein des hauteurs",
      ar: "تلال خضراء وهواء الجبال النقي"
    },
    image: "assets/wilayas/10-Bouira.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  tamanrasset: {
    name: "Tamanrasset",
    demonym: "TAMANRASSETIENNE",
    emoji: "🌌✨",
    tagline: {
      en: "Spiritual, stunning, and totally legendary.",
      fr: "Spirituel, époustouflant et carrément légendaire.",
      ar: "روحاني، خلاب، وأسطوري بكل المقاييس."
    },
    description: {
      en: "You are a traveler at heart. With your love for art, deep traditions, and epic landscapes, you're basically the coolest person anyone knows.",
      fr: "T'es un voyageur dans l'âme. Avec ton amour de l'art, des traditions et des paysages grandioses, t'es littéralement la personne la plus cool que tout le monde connaît.",
      ar: "أنت رحالة في القلب. بحبك للفن والتقاليد والمناظر الخلابة، أنت أروع شخص يعرفه الجميع."
    },
    vibe_tag: {
      en: "Heart of the desert, majestic peaks",
      fr: "Cœur du désert aux pics majestueux",
      ar: "قلب الصحراء وقممها الشامخة"
    },
    image: "assets/wilayas/11-Tamanrasset.jpg",
    tags: {
      mountain: 2,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 2,
      touristy: 2
    }
  },
  t_bessa: {
    name: "Tébessa",
    demonym: "TÉBESSIENNE",
    emoji: "🏛️⏳",
    tagline: {
      en: "Ancient history meets modern edge.",
      fr: "Histoire ancienne rencontre le style moderne.",
      ar: "تاريخ عريق يلتقي بالعصرية."
    },
    description: {
      en: "You're a total time traveler who loves mixing the old-school with the new. You're sharp, strategic, and always have a story to tell.",
      fr: "T'es un vrai voyageur temporel qui mixe l'ancien et le nouveau. T'es intelligent, stratégique, et t'as toujours une histoire à raconter.",
      ar: "أنت مسافر عبر الزمن تمزج بين القديم والجديد. ذكي، استراتيجي، وعندك قصة تحكيها دايماً."
    },
    vibe_tag: {
      en: "Ancient stones and frontier desert tales",
      fr: "Pierres antiques et récits du désert frontalier",
      ar: "أحجار قديمة وحكايات الصحراء الحدودية"
    },
    image: "assets/wilayas/12-T_bessa.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      modern: 1,
      local: 2,
      touristy: 1
    }
  },
  tlemcen: {
    name: "Tlemcen",
    demonym: "TLEMCÉNIENNE",
    emoji: "🎨✨",
    tagline: {
      en: "The artsy soul with timeless aesthetic vibes.",
      fr: "L'âme artistique aux vibes esthétiques intemporelles.",
      ar: "الروح الفنية ذات الذوق الجمالي الخالد."
    },
    description: {
      en: "You are the definition of 'old money' aesthetic meets creative genius. You love slow mornings, historical architecture, and finding beauty in the little details of life.",
      fr: "T'es la définition du style 'old money' combiné au génie créatif. Tu kiffes les matins calmes, l'architecture historique et la beauté des petits détails de la vie.",
      ar: "أنت تعريف الأناقة الكلاسيكية مع لمسة إبداعية. تحب الصباحات الهادئة، العمارة التاريخية، وجمال التفاصيل الصغيرة."
    },
    vibe_tag: {
      en: "Andalusian grace in every corner",
      fr: "Grâce andalouse à chaque coin de rue",
      ar: "طابع أندلسي في كل زاوية"
    },
    image: "assets/wilayas/13-Tlemcen.jpg",
    tags: {
      coastal: 1,
      mountain: 3,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 2,
      touristy: 1
    }
  },
  tiaret: {
    name: "Tiaret",
    demonym: "TIARETIENNE",
    emoji: "🐎🌾",
    tagline: {
      en: "Main character energy for horse lovers only.",
      fr: "Énergie de protagoniste pour les amoureux des chevaux.",
      ar: "طاقة البطل لمحبي الخيل فقط."
    },
    description: {
      en: "You’re low-key, grounded, and have a deep appreciation for heritage. You prefer wide open spaces and the company of your best friends over the noise of the big city.",
      fr: "T'es discret, terre-à-terre, et tu as un profond respect pour le patrimoine. Tu préfères les grands espaces et la compagnie de tes meilleurs potes au bruit de la ville.",
      ar: "أنت هادئ، متواضع، وتقدر التراث. تفضل الفضاءات الواسعة وصحبة الأصدقاء المقربين على ضوضاء المدينة."
    },
    vibe_tag: {
      en: "Highland plains and wild equestrian spirit",
      fr: "Plaines des hauts plateaux et esprit équestre sauvage",
      ar: "سهول الهضاب وروح الفروسية البرية"
    },
    image: "assets/wilayas/14-Tiaret.jpg",
    tags: {
      mountain: 2,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 2,
      modern: 1,
      local: 3
    }
  },
  tizi_ouzou: {
    name: "Tizi Ouzou",
    demonym: "TIZI OUZIENNE",
    emoji: "🏔️✊",
    tagline: {
      en: "Big mountain energy and fierce cultural pride.",
      fr: "Énergie montagnarde et fierté culturelle féroce.",
      ar: "طاقة جبلية وفخر ثقافي عظيم."
    },
    description: {
      en: "You are the loyal friend who always stands up for what they believe in. Your vibe is all about community, steep hills, and having the best stories to tell.",
      fr: "T'es l'ami loyal qui défend toujours ses convictions. Ton vibe est fait de communauté, de collines escarpées et des meilleures histoires à raconter.",
      ar: "أنت الصديق الوفي اللي دايمًا يدافع عن مبادئه. أجواءك مجتمع، تلال وعرة، وأحلى القصص."
    },
    vibe_tag: {
      en: "Mountain majesty and cultural pride",
      fr: "Majesté montagnarde et fierté culturelle",
      ar: "جبل شامخ وفخر ثقافي أصيل"
    },
    image: "assets/wilayas/15-Tizi_Ouzou.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 3
    }
  },
  algiers: {
    name: "Algiers",
    demonym: "ALGÉROISE",
    emoji: "🏙️🌊",
    tagline: {
      en: "The chaotic, iconic center of everything cool.",
      fr: "Le centre chaotique et iconique de tout ce qui est cool.",
      ar: "المركز الفوضوي الأيقوني لكل شيء رائع."
    },
    description: {
      en: "You are the life of the party and thrive in the fast lane. You’re always on the move, chasing the latest trends and soaking up the busy city lights.",
      fr: "T'es l'âme de la fête et tu prospères dans la voie rapide. Toujours en mouvement, tu chasses les dernières tendances et tu t'imbibes des lumières de la ville.",
      ar: "أنت روح الحفلة وتعيش في المسار السريع. دايمًا في الحركة، تلاحق أحدث الصيحات وتغرق في أضواء المدينة."
    },
    vibe_tag: {
      en: "The White City, sparkling by the sea",
      fr: "La Ville Blanche qui scintille au bord de la mer",
      ar: "المدينة البيضاء المتلألئة على البحر"
    },
    image: "assets/wilayas/16-Algiers.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 3,
      urban: 3,
      traditional: 1,
      nightlife: 3,
      mid_budget: 3,
      historic: 1,
      modern: 3,
      local: 1,
      touristy: 3
    }
  },
  djelfa: {
    name: "Djelfa",
    demonym: "DJELFIENNE",
    emoji: "🏜️🐑",
    tagline: {
      en: "Steppe vibes and authentic desert-edge mystery.",
      fr: "Vibes de steppe et mystère authentique en bordure du désert.",
      ar: "أجواء السهوب وغموض أصيل على حافة الصحراء."
    },
    description: {
      en: "You’re a rugged individual who thrives in the quiet, vast landscapes. You value tradition and keeping it real over chasing the latest internet fads.",
      fr: "T'es un individu robuste qui prospère dans les paysages calmes et vastes. Tu valorises la tradition et l'authenticité plutôt que les dernières tendances Internet.",
      ar: "أنت شخص قوي يزدهر في الأراضي الهادئة الواسعة. تقدر الأصالة والتقاليد أكثر من موضة النت."
    },
    vibe_tag: {
      en: "Steppe landscapes and nomadic heritage",
      fr: "Paysages de steppe et héritage nomade",
      ar: "سهوب شاسعة وتراث بدوي"
    },
    image: "assets/wilayas/17-Djelfa.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  jijel: {
    name: "Jijel",
    demonym: "JIJELIENNE",
    emoji: "🏖️🌲",
    tagline: {
      en: "Coastal aesthetic and pure vacation mode.",
      fr: "Esthétique côtière et mode vacances à fond.",
      ar: "جمال ساحلي وأجوبة عطلة تامة."
    },
    description: {
      en: "You are the ultimate 'beach bum' who just wants to chill and enjoy the view. You keep things simple, breezy, and effortlessly cool.",
      fr: "T'es le roi de la plage qui veut juste chill et profiter de la vue. Tu gardes les choses simples, légères et naturellement stylées.",
      ar: "أنت ملك الشاطئ اللي يحب يسترخي ويتمتع بالمنظر. حياتك بسيطة، منعشة، ورايقة."
    },
    vibe_tag: {
      en: "Coastal cliffs and wild blue waters",
      fr: "Falaises côtières et eaux bleues sauvages",
      ar: "منحدرات ساحلية ومياه زرقاء برية"
    },
    image: "assets/wilayas/18-Jijel.jpg",
    tags: {
      coastal: 3,
      mountain: 2,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  s_tif: {
    name: "Sétif",
    demonym: "SÉTIFIENNE",
    emoji: "🎓📈",
    tagline: {
      en: "Total hustle culture in a student city.",
      fr: "Culture du hustle à fond dans une ville étudiante.",
      ar: "ثقافة الكد والاجتهاد في مدينة طلابية."
    },
    description: {
      en: "You’re ambitious, social, and always looking for the next big opportunity. Whether you're studying or shopping, you’re always busy leveling up.",
      fr: "T'es ambitieux, sociable, et toujours à la recherche de la prochaine opportunité. Que tu étudies ou que tu magasines, t'es toujours en train de level up.",
      ar: "أنت طموح، اجتماعي، ودايمًا تبحث عن الفرصة القادمة. سواء كنت تدرس أو تتسوق، أنت دايمًا في تطور."
    },
    vibe_tag: {
      en: "High altitude charm, vibrant city life",
      fr: "Charme des hauteurs, vie urbaine vibrante",
      ar: "سحر المرتفعات وحياة مدنية نابضة"
    },
    image: "assets/wilayas/19-S_tif.jpg",
    tags: {
      mountain: 1,
      temperate: 1,
      fast: 3,
      urban: 3,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  sa_da: {
    name: "Saïda",
    demonym: "SAÏDIENNE",
    emoji: "⛰️☁️",
    tagline: {
      en: "Low-key mountain retreat for true peace.",
      fr: "Retraite montagnarde discrète pour la vraie paix.",
      ar: "ملاذ جبلي هادئ للسلام الحقيقي."
    },
    description: {
      en: "You’re the friend everyone goes to when they need to escape the drama. You value quality time, fresh air, and a quiet, traditional way of life.",
      fr: "T'es l'ami vers qui tout le monde se tourne pour échapper au drama. Tu values le temps de qualité, l'air frais et un mode de vie tranquille et traditionnel.",
      ar: "أنت الصديق اللي الكل يلجأ له عشان يهرب من الدراما. تقدر الوقت الجميل، الهواء النقي، والحياة التقليدية الهادئة."
    },
    vibe_tag: {
      en: "Thermal springs and lush green valleys",
      fr: "Sources thermales et vallées verdoyantes",
      ar: "ينابيع حارة ووديان خضراء"
    },
    image: "assets/wilayas/20-Sa_da.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  skikda: {
    name: "Skikda",
    demonym: "SKIKDAISE",
    emoji: "⚓🌊",
    tagline: {
      en: "Industrial grit meets beautiful turquoise shores.",
      fr: "Rugosité industrielle rencontre rives turquoises.",
      ar: "خشونة صناعية تلتقي بشواطئ فيروزية."
    },
    description: {
      en: "You’ve got a tough exterior but a soft spot for beauty. You’re hardworking and practical, but never say no to a sunset at the beach.",
      fr: "T'as une carapace dure mais un faible pour la beauté. T'es travailleur et pragmatique, mais tu ne dis jamais non à un coucher de soleil à la plage.",
      ar: "عندك قشرة قاسية لكن قلبك رقيق. أنت مجتهد وعملي، لكن أبدًا ما ترفض غروب على البحر."
    },
    vibe_tag: {
      en: "Azure waves and seaside serenity",
      fr: "Vagues d'azur et sérénité au bord de mer",
      ar: "أمواج زرقاء وسكينة بحرية"
    },
    image: "assets/wilayas/21-Skikda.jpg",
    tags: {
      coastal: 3,
      mountain: 1,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  sidi_bel_abb_s: {
    name: "Sidi Bel Abbès",
    demonym: "SIDI BEL ABBÉSIENNE",
    emoji: "🏛️🎓",
    tagline: {
      en: "Historic plains city with major brain power.",
      fr: "Ville de plaines historiques avec un gros cerveau.",
      ar: "مدينة السهول التاريخية والعقل الكبير."
    },
    description: {
      en: "You’re a mix of old-school history and modern student life. You’re smart, steady, and have a unique perspective on where you come from.",
      fr: "T'es un mélange d'histoire classique et de vie étudiante moderne. T'es intelligent, posé, et t'as une perspective unique sur tes origines.",
      ar: "أنت مزيج من التاريخ العريق والحيوية الطلابية. ذكي، متزن، وعندك نظرة فريدة لأصلك."
    },
    vibe_tag: {
      en: "Modern energy meets classic desert charm",
      fr: "Énergie moderne rencontre le charme classique du désert",
      ar: "طاقة عصرية تلتقي بسحر الصحراء الكلاسيكي"
    },
    image: "assets/wilayas/22-Sidi_Bel_Abb_s.jpg",
    tags: {
      mountain: 1,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      modern: 1,
      local: 3
    }
  },
  annaba: {
    name: "Annaba",
    demonym: "ANNABAISE",
    emoji: "🌊🏛️",
    tagline: {
      en: "Classic Mediterranean vibes with a historic edge.",
      fr: "Ambiance méditerranéenne classique avec une touche d'histoire.",
      ar: "أجواء متوسطية كلاسيكية بطابع تاريخي."
    },
    description: {
      en: "You’re charming, historic, and effortlessly cool. You love a balance of beach days, late-night cafes, and hanging out with your favorite people.",
      fr: "T'es charmant, historique, et naturellement cool. Tu aimes l'équilibre entre les journées à la plage, les cafés tardifs et les sorties avec tes gens.",
      ar: "أنت ساحر، تاريخي، ورايق بطبعه. تحب التوازن بين شاطئ البحر، قهوة المساء، وقعدات الأحباب."
    },
    vibe_tag: {
      en: "The pearl of the Mediterranean coast",
      fr: "La perle de la côte méditerranéenne",
      ar: "لؤلؤة الساحل المتوسطي"
    },
    image: "assets/wilayas/23-Annaba.jpg",
    tags: {
      coastal: 3,
      mountain: 1,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      modern: 1,
      local: 1,
      touristy: 2
    }
  },
  guelma: {
    name: "Guelma",
    demonym: "GUELMIENNE",
    emoji: "♨️🌿",
    tagline: {
      en: "Thermal spa vibes for the ultimate relaxer.",
      fr: "Ambiance spa thermal pour le relaxateur ultime.",
      ar: "أجواء حمامات معدنية للاسترخاء التام."
    },
    description: {
      en: "You are all about self-care and finding your zen. You’re low-key obsessed with wellness and love exploring nature at your own pace.",
      fr: "T'es tout sur le bien-être et la recherche de ton zen. T'es discrètement obsédé par le wellness et tu adores explorer la nature à ton rythme.",
      ar: "أنت كل شيء عن العناية بالنفس والبحث عن السلام الداخلي. مهتم بالصحة والطبيعة وتمشّي على مهلك."
    },
    vibe_tag: {
      en: "Rolling hills and ancient thermal baths",
      fr: "Collines ondulantes et thermes antiques",
      ar: "تلال متموجة وحمامات قديمة"
    },
    image: "assets/wilayas/24-Guelma.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 1,
      local: 3,
      touristy: 1
    }
  },
  constantine: {
    name: "Constantine",
    demonym: "CONSTANTINOISE",
    emoji: "🌉🎓",
    tagline: {
      en: "Living life on the edge, literally.",
      fr: "Vivre la vie sur le bord du gouffre, littéralement.",
      ar: "عيش الحياة على الحافة، حرفيًا."
    },
    description: {
      en: "You are the intellectual powerhouse with a flair for the dramatic. You love deep convos, iconic views, and being the center of the cultural scene.",
      fr: "T'es le génie intellectuel avec un flair pour le dramatique. Tu kiffes les conversations profondes, les vues iconiques et être au centre de la scène culturelle.",
      ar: "أنت العبقري المثقف ذو الحس الدرامي. تحب النقاشات العميقة، المناظر الخلابة، وكونك مركز المشهد الثقافي."
    },
    vibe_tag: {
      en: "Suspended bridges over history's canyon",
      fr: "Ponts suspendus au-dessus du canyon de l'histoire",
      ar: "جسور معلقة فوق وادي التاريخ"
    },
    image: "assets/wilayas/25-Constantine.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 2,
      chill: 1,
      urban: 3,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 2,
      local: 1,
      touristy: 2
    }
  },
  m_d_a: {
    name: "Médéa",
    demonym: "MÉDÉENNE",
    emoji: "🍎⛰️",
    tagline: {
      en: "Lowkey vibes and mountain air.",
      fr: "Ambiances discrètes et air pur de la montagne.",
      ar: "أجواء هادئة وهواء جبلي نقي."
    },
    description: {
      en: "You're the friend who prefers a cozy weekend over a wild party. You appreciate the simple things like good food and peaceful mountain views.",
      fr: "T'es l'ami qui préfère un week-end cosy à une fête déchaînée. Tu apprécies les choses simples comme la bonne bouffe et les vues paisibles sur la montagne.",
      ar: "أنت الصديق اللي يفضل عطلة نهاية أسبوع هادئة على حفلة صاخبة. تقدر الأشياء البسيطة مثل الأكل الجيد ومناظر الجبال."
    },
    vibe_tag: {
      en: "Mountain vineyards and historical charm",
      fr: "Vignobles de montagne et charme historique",
      ar: "كروم جبلية وسحر تاريخي"
    },
    image: "assets/wilayas/26-M_d_a.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  mostaganem: {
    name: "Mostaganem",
    demonym: "MOSTAGANÉMOISE",
    emoji: "🌊⛵",
    tagline: {
      en: "Sun, sand, and coastal chill.",
      fr: "Soleil, sable et chill côtier.",
      ar: "شمس، رمل، واسترخاء ساحلي."
    },
    description: {
      en: "You are all about that effortless Mediterranean lifestyle. You love the ocean breeze and keeping things relaxed while enjoying your daily routine.",
      fr: "T'es tout sur ce style de vie méditerranéen sans effort. Tu kiffes la brise de l'océan et garder les choses relax tout en profitant de ton quotidien.",
      ar: "أنت كل شيء عن نمط الحياة المتوسطي السهل. تحب نسيم البحر وتبقي الأمور رايقة في روتينك اليومي."
    },
    vibe_tag: {
      en: "Sun-drenched shores and golden sands",
      fr: "Rivages ensoleillés et sables dorés",
      ar: "شواطئ مشمسة ورمال ذهبية"
    },
    image: "assets/wilayas/27-Mostaganem.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 1,
      chill: 3,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  m_sila: {
    name: "M'Sila",
    demonym: "MSILIENNE",
    emoji: "🌾🌤️",
    tagline: {
      en: "The quiet achiever of the plains.",
      fr: "Le bosseur discret des plaines.",
      ar: "المجتهد الهادئ في السهول."
    },
    description: {
      en: "You’re steady, reliable, and always evolving. You don't need the spotlight to get things done, and you're perfectly happy in your own space.",
      fr: "T'es stable, fiable et toujours en évolution. T'as pas besoin des projecteurs pour faire avancer les choses, et t'es parfaitement heureux dans ton coin.",
      ar: "أنت ثابت، موثوق، ودايمًا في تطور. ما تحتش الأضواء عشان تنجز، وأنت مبسوط في ركنك."
    },
    vibe_tag: {
      en: "Heart of the plains, golden energy",
      fr: "Cœur des plaines, énergie dorée",
      ar: "قلب السهول، طاقة ذهبية"
    },
    image: "assets/wilayas/28-M_Sila.jpg",
    tags: {
      desert: 1,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 3,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  mascara: {
    name: "Mascara",
    demonym: "MASCARAISE",
    emoji: "🍇📜",
    tagline: {
      en: "Rooted in history, rich in soul.",
      fr: "Enraciné dans l'histoire, riche en âme.",
      ar: "متجذر في التاريخ، غني بالروح."
    },
    description: {
      en: "You have a deep respect for your roots and a strong personality. You’re proud, historic, and carry a certain timeless wisdom with you.",
      fr: "T'as un profond respect pour tes racines et une forte personnalité. T'es fier, historique, et tu portes une sagesse intemporelle.",
      ar: "عندك احترام عميق لأصلك وشخصية قوية. أنت فخور، تاريخي، وتحمل حكمة لا تموت."
    },
    vibe_tag: {
      en: "Vineyards and ancient warrior spirit",
      fr: "Vignobles et esprit guerrier antique",
      ar: "كروم عنب وروح محارب قديم"
    },
    image: "assets/wilayas/29-Mascara.jpg",
    tags: {
      mountain: 2,
      temperate: 1,
      chill: 2,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 3
    }
  },
  ouargla: {
    name: "Ouargla",
    demonym: "OUARGLIENNE",
    emoji: "🌵🔥",
    tagline: {
      en: "Sahara heat with city beats.",
      fr: "Chaleur du Sahara avec du rythme citadin.",
      ar: "حر الصحراء بإيقاع المدينة."
    },
    description: {
      en: "You’re ambitious and thrive in high-energy environments. You love blending ancient traditions with a modern, fast-paced professional life.",
      fr: "T'es ambitieux et tu prospères dans les environnements à haute énergie. Tu aimes mélanger les traditions anciennes avec une vie professionnelle moderne et rapide.",
      ar: "أنت طموح وتزدهر في البيئات عالية الطاقة. تحب المزج بين التقاليد العريقة والحياة العصرية السريعة."
    },
    vibe_tag: {
      en: "Gateway to the golden desert sands",
      fr: "Porte vers les sables dorés du désert",
      ar: "بوابة رمال الصحراء الذهبية"
    },
    image: "assets/wilayas/30-Ouargla.jpg",
    tags: {
      desert: 3,
      fast: 3,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  oran: {
    name: "Oran",
    demonym: "ORANAISE",
    emoji: "💃🎶",
    tagline: {
      en: "The life of the party, always.",
      fr: "Toujours l'âme de la fête.",
      ar: "روح الحفلة، دايمًا."
    },
    description: {
      en: "You are the definition of cosmopolitan. With your love for music, nightlife, and social scenes, you’re the friend everyone invites to the main event.",
      fr: "T'es la définition du cosmopolite. Avec ton amour de la musique, de la nightlife et des scenes sociales, t'es l'ami que tout le monde invite au meilleur event.",
      ar: "أنت تعريف العصرية. بحبك للموسيقى والحياة الليلية والأجواء الاجتماعية، أنت الصديق اللي الكل يعزمه على أهم حدث."
    },
    vibe_tag: {
      en: "Radiating coastal energy and sunny vibes",
      fr: "Énergie côtière éclatante et vibes ensoleillées",
      ar: "طاقة ساحلية متألقة وأجواء مشمسة"
    },
    image: "assets/wilayas/31-Oran.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 3,
      urban: 3,
      nightlife: 3,
      low_budget: 1,
      mid_budget: 2,
      historic: 1,
      modern: 3,
      local: 1,
      touristy: 3
    }
  },
  el_bayadh: {
    name: "El Bayadh",
    demonym: "EL BAYADIENNE",
    emoji: "🐏🏜️",
    tagline: {
      en: "Gateway to the vast desert horizon.",
      fr: "Porte vers l'horizon infini du désert.",
      ar: "بوابة أفق الصحراء الممتد."
    },
    description: {
      en: "You’re a bit of a mystery who values tradition and the open road. You’re grounded and keep things real, always looking toward the next adventure.",
      fr: "T'es un peu mystérieux et tu valorises la tradition et la route ouverte. T'es terre-à-terre et tu restes authentique, toujours tourné vers la prochaine aventure.",
      ar: "أنت غامض بعض الشيء، تقدر التقاليد والطريق المفتوح. أنت متواضع وصادق، ودايمًا تتطلع للمغامرة القادمة."
    },
    vibe_tag: {
      en: "High plateau winds and open skies",
      fr: "Vents des hauts plateaux et cieux ouverts",
      ar: "رياح الهضاب وسماء مفتوحة"
    },
    image: "assets/wilayas/32-El_Bayadh.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      chill: 2,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  illizi: {
    name: "Illizi",
    demonym: "ILLIZIENNE",
    emoji: "🎨✨",
    tagline: {
      en: "Ancient art, endless desert magic.",
      fr: "Art ancien, magie infinie du désert.",
      ar: "فن قديم، سحر صحراوي لا نهائي."
    },
    description: {
      en: "You are a total explorer with a soul for discovery. You prefer breathtaking landscapes and quiet, profound connections over city noise.",
      fr: "T'es un vrai explorateur avec une âme de découverte. Tu préfères les paysages à couper le souffle et les connexions profondes et silencieuses au bruit de la ville.",
      ar: "أنت مستكشف حقيقي بروح المغامرة. تفضل المناظر الخلابة والعلاقات العميقة الهادئة على ضوضاء المدينة."
    },
    vibe_tag: {
      en: "Gateway to the Tassili wonders",
      fr: "Porte vers les merveilles du Tassili",
      ar: "بوابة عجائب الطاسيلي"
    },
    image: "assets/wilayas/33-Illizi.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 2,
      touristy: 2
    }
  },
  bordj_bou_arr_ridj: {
    name: "Bordj Bou Arréridj",
    demonym: "BORDJIENNE",
    emoji: "📱🏗️",
    tagline: {
      en: "Innovating the future, one step ahead.",
      fr: "Innover le futur, une longueur d'avance.",
      ar: "ابتكار المستقبل، خطوة للأمام."
    },
    description: {
      en: "You’re tech-savvy, fast-moving, and always working on a new project. You’re the friend who’s always got the latest gadget and big plans.",
      fr: "T'es calé en tech, rapide et toujours sur un nouveau projet. T'es le pote qui a toujours le dernier gadget et de grands projets.",
      ar: "أنت تقني، سريع، ودايمًا على مشروع جديد. أنت الصديق اللي عنده آخر إصدار وأكبر الخطط."
    },
    vibe_tag: {
      en: "Crafting excellence in the highlands",
      fr: "L'excellence artisanale dans les hauteurs",
      ar: "إتقان حرفي في المرتفعات"
    },
    image: "assets/wilayas/34-Bordj_Bou_Arr_ridj.jpg",
    tags: {
      mountain: 1,
      temperate: 1,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      modern: 3,
      local: 2
    }
  },
  boumerd_s: {
    name: "Boumerdès",
    demonym: "BOUMERDÉSIENNE",
    emoji: "🎓🌊",
    tagline: {
      en: "Student life by the seaside.",
      fr: "Vie étudiante au bord de la mer.",
      ar: "حياة طلابية على شاطئ البحر."
    },
    description: {
      en: "You’re the perfect balance of student energy and coastal chill. You love being close to the action while keeping your life balanced and fun.",
      fr: "T'es l'équilibre parfait entre l'énergie étudiante et le chill côtier. Tu aimes être près de l'action tout en gardant ta vie équilibrée et fun.",
      ar: "أنت التوازن المثالي بين حيوية الطالب واسترخاء البحر. تحب تكون قريب من الحركة مع الحفاظ على حياة متزنة وممتعة."
    },
    vibe_tag: {
      en: "Where the sea kisses the forest",
      fr: "Là où la mer embrasse la forêt",
      ar: "حيث يعانق البحر الغابة"
    },
    image: "assets/wilayas/35-Boumerd_s.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  el_tarf: {
    name: "El Tarf",
    demonym: "EL TARFIENNE",
    emoji: "🌲🦌",
    tagline: {
      en: "Nature’s hidden gem, stay wild.",
      fr: "Le joyau caché de la nature, reste sauvage.",
      ar: "جوهرة الطبيعة المخفية، ابقَ وحشيًا."
    },
    description: {
      en: "You’re the ultimate nature lover who finds peace in forests and lakes. You’re quiet, observant, and prefer a hike over a city street.",
      fr: "T'es l'amoureux ultime de la nature qui trouve la paix dans les forêts et les lacs. T'es calme, observateur, et tu préfères une randonnée à une rue bondée.",
      ar: "أنت محب الطبيعة الأصيل، تجد السلام في الغابات والبحيرات. هادئ، ملاحظ، وتفضل المشي في الطبيعة على زحام المدينة."
    },
    vibe_tag: {
      en: "Wild nature and hidden coastal gems",
      fr: "Nature sauvage et trésors côtiers cachés",
      ar: "طبيعة برية وجواهر ساحلية مخفية"
    },
    image: "assets/wilayas/36-El_Tarf.jpg",
    tags: {
      coastal: 2,
      temperate: 3,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 3,
      local: 3,
      touristy: 1
    }
  },
  tindouf: {
    name: "Tindouf",
    demonym: "TINDOUFIENNE",
    emoji: "🌵☀️",
    tagline: {
      en: "Tindouf: The ultimate rugged desert explorer.",
      fr: "L'explorateur ultime du désert sauvage.",
      ar: "المستكشف الصحراوي الأقوى."
    },
    description: {
      en: "You are the definition of resilient and mysterious. You thrive in the deep silence of the Sahara where the stars are your only company.",
      fr: "T'es la définition de la résilience et du mystère. Tu prospères dans le silence profond du Sahara où les étoiles sont ta seule compagnie.",
      ar: "أنت تعريف الصمود والغموض. تزدهر في صمت الصحراء العميق حيث النجوم هي رفيقك الوحيد."
    },
    vibe_tag: {
      en: "Desert solitude under endless stars",
      fr: "Solitude désertique sous des étoiles infinies",
      ar: "عزلة صحراوية تحت نجوم لا متناهية"
    },
    image: "assets/wilayas/37-Tindouf.jpg",
    tags: {desert:3,chill:3,traditional:2,family:1,low_budget:3,historic:1,local:3}
  },
  tissemsilt: {
    name: "Tissemsilt",
    demonym: "TISSEMSILTIENNE",
    emoji: "🏔️🧥",
    tagline: {
      en: "Tissemsilt: Your cozy mountain escape.",
      fr: "Ton refuge cosy à la montagne.",
      ar: "ملاذك الجبلي الدافئ."
    },
    description: {
      en: "You’re all about those quiet, slow-paced vibes. You love a good sweater, a hot drink, and keeping things super low-key.",
      fr: "T'es tout sur ces vibes tranquilles et au ralenti. Tu kiffes un bon pull, une boisson chaude, et garder les choses super low-key.",
      ar: "أنت كل شيء عن الأجواء الهادئة البطيئة. تحب كنزة دافئة، مشروب ساخن، وتبقي الأمور منخفضة البروفايل."
    },
    vibe_tag: {
      en: "Quiet plains and rugged mountain paths",
      fr: "Plaines paisibles et sentiers montagneux escarpés",
      ar: "سهول هادئة ومسارات جبلية وعرة"
    },
    image: "assets/wilayas/38-Tissemsilt.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      local: 3
    }
  },
  el_oued: {
    name: "El Oued",
    demonym: "EL OUEDIENNE",
    emoji: "🕌🌴",
    tagline: {
      en: "El Oued: The aesthetic dome-dwelling dreamer.",
      fr: "Le rêveur esthétique aux dômes iconiques.",
      ar: "الحالم ذو القباب الأيقونية."
    },
    description: {
      en: "You have an eye for unique architecture and love the desert heat. You're deeply connected to your roots and the sweet taste of home.",
      fr: "T'as un œil pour l'architecture unique et tu aimes la chaleur du désert. T'es profondément connecté à tes racines et au goût sucré de la maison.",
      ar: "عندك ذوق معماري فريد وتحب حر الصحراء. أنت مرتبط بجذورك وطعم البيت الحلو."
    },
    vibe_tag: {
      en: "City of a thousand domes, sandy",
      fr: "Ville aux mille dômes, sableuse et majestueuse",
      ar: "مدينة الألف قبة، رملية ومهيبة"
    },
    image: "assets/wilayas/39-El_Oued.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      local: 3,
      touristy: 1
    }
  },
  khenchela: {
    name: "Khenchela",
    demonym: "KHENCHELIENNE",
    emoji: "❄️🏔️",
    tagline: {
      en: "Khenchela: Fierce, cold, and totally authentic.",
      fr: "Féroce, froid et totalement authentique.",
      ar: "شجاع، بارد، وأصيل للغاية."
    },
    description: {
      en: "You’re proud of your heritage and you don’t let the cold weather stop you. You’re tough, loyal, and love being surrounded by nature.",
      fr: "T'es fier de ton héritage et le froid ne t'arrête pas. T'es dur, loyal et tu aimes être entouré par la nature.",
      ar: "أنت فخور بتراثك والبرد ما يوقفكش. أنت قوي، وفي، وتحب تكون وسط الطبيعة."
    },
    vibe_tag: {
      en: "Rugged cliffs and ancient Berber roots",
      fr: "Falaises escarpées et racines berbères anciennes",
      ar: "منحدرات وعرة وجذور أمازيغية قديمة"
    },
    image: "assets/wilayas/40-Khenchela.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 2,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  souk_ahras: {
    name: "Souk Ahras",
    demonym: "SOUK AHRASSIENNE",
    emoji: "🏛️🌲",
    tagline: {
      en: "Souk Ahras: A historic soul in the mountains.",
      fr: "Une âme historique dans les montagnes.",
      ar: "روح تاريخية في الجبال."
    },
    description: {
      en: "You’re an old soul who loves stories from the past. Living near the border, you’re always curious about the world beyond.",
      fr: "T'es une vieille âme qui aime les histoires du passé. Vivant près de la frontière, t'es toujours curieux du monde au-delà.",
      ar: "أنت روح قديمة تحب قصص الماضي. تعيش قرب الحدود، ودايمًا فضولي لمعرفة ما وراءها."
    },
    vibe_tag: {
      en: "Olive groves and historical crossroads",
      fr: "Oliveraies et carrefour historique",
      ar: "بساتين زيتون وتقاطع طرق تاريخي"
    },
    image: "assets/wilayas/41-Souk_Ahras.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 2,
      touristy: 1
    }
  },
  tipaza: {
    name: "Tipaza",
    demonym: "TIPAZIENNE",
    emoji: "🌊🏛️",
    tagline: {
      en: "Tipaza: Sun, sea, and ancient vibes.",
      fr: "Soleil, mer et ambiances antiques.",
      ar: "شمس، بحر، وأجواء تاريخية."
    },
    description: {
      en: "You live for the golden hour and beach days. You’re a total tourist magnet because your aesthetic is literally legendary.",
      fr: "Tu vis pour l'heure dorée et les journées à la plage. T'es un aimant à touristes parce que ton esthétique est littéralement légendaire.",
      ar: "أنت تعيش للساعة الذهبية وأيام البحر. أنت مغناطيس سياحي لأن ذوقك الجمالي أسطوري."
    },
    vibe_tag: {
      en: "Roman ruins by the turquoise sea",
      fr: "Ruines romaines au bord de la mer turquoise",
      ar: "آثار رومانية على البحر الفيروزي"
    },
    image: "assets/wilayas/42-Tipaza.jpg",
    tags: {
      coastal: 3,
      mountain: 1,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 1,
      traditional: 1,
      nightlife: 2,
      family: 1,
      mid_budget: 3,
      historic: 3,
      modern: 1,
      touristy: 3
    }
  },
  mila: {
    name: "Mila",
    demonym: "MILIENNE",
    emoji: "🏺✨",
    tagline: {
      en: "Mila: Quiet, classy, and timeless.",
      fr: "Calme, classe, et intemporel.",
      ar: "هادئ، راقي، وخالد."
    },
    description: {
      en: "You’re low-maintenance but deeply fascinating. You’re the friend everyone goes to when they need a calm, thoughtful conversation.",
      fr: "T'es discret mais profondément fascinant. T'es l'ami vers qui tout le monde se tourne pour une conversation calme et réfléchie.",
      ar: "أنت متواضع ولكن رائع. أنت الصديق اللي الكل يلجأ له عشان نقاش هادئ وعميق."
    },
    vibe_tag: {
      en: "Ancient walls and deep valley secrets",
      fr: "Murs antiques et secrets des vallées profondes",
      ar: "جدران قديمة وأسرار الوديان العميقة"
    },
    image: "assets/wilayas/43-Mila.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 3
    }
  },
  a_n_defla: {
    name: "Aïn Defla",
    demonym: "AÏN DEFLIENNE",
    emoji: "🌾🚜",
    tagline: {
      en: "Aïn Defla: The grounded, chill agricultural pro.",
      fr: "Le pro de l'agriculture, posé et terre-à-terre.",
      ar: "محترف الفلاحة، هادئ ومتواضع."
    },
    description: {
      en: "You’re balanced and down-to-earth. You enjoy the simple life and know exactly how to make things grow and thrive.",
      fr: "T'es équilibré et les pieds sur terre. Tu aimes la vie simple et tu sais exactement comment faire pousser et prospérer les choses.",
      ar: "أنت متوازن ومتواضع. تحب الحياة البسيطة وتعرف بالضبط كيف تزرع وتنمي."
    },
    vibe_tag: {
      en: "Orchards, mountains, and peaceful charm",
      fr: "Vergers, montagnes et charme paisible",
      ar: "بساتين، جبال، وسحر هادئ"
    },
    image: "assets/wilayas/44-A_n_Defla.jpg",
    tags: {
      mountain: 1,
      temperate: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      modern: 1,
      local: 3
    }
  },
  na_ma: {
    name: "Naâma",
    demonym: "NAÂMIENNE",
    emoji: "🌅🐑",
    tagline: {
      en: "Naâma: Steppe vibes and wild horizons.",
      fr: "Vibes de steppe et horizons sauvages.",
      ar: "أجواء السهوب وآفاق برية."
    },
    description: {
      en: "You’re a free spirit who loves open spaces. You’re a bit of an outsider, but that’s exactly what makes you so cool.",
      fr: "T'es un esprit libre qui aime les espaces ouverts. T'es un peu à part, mais c'est exactement ce qui te rend si cool.",
      ar: "أنت روح حرة تحب الفضاءات المفتوحة. أنت منعزل بعض الشيء، لكن هذا بالضبط ما يخليك رايق."
    },
    vibe_tag: {
      en: "Desert dunes and sunset horizons",
      fr: "Dunes du désert et horizons de coucher de soleil",
      ar: "كثبان رملية وآفاق غروب"
    },
    image: "assets/wilayas/45-Na_ma.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      temperate: 1,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 3,
      local: 3
    }
  },
  a_n_t_mouchent: {
    name: "Aïn Témouchent",
    demonym: "AÏN TÉMOUCHENTIENNE",
    emoji: "🍇🏖️",
    tagline: {
      en: "Aïn Témouchent: Coastal chic and vineyard dreams.",
      fr: "Chic côtier et rêves viticoles.",
      ar: "أناقة ساحلية وأحلام الكروم."
    },
    description: {
      en: "You’re sophisticated, relaxed, and definitely the one with the best taste. You know how to enjoy the finer things without overdoing it.",
      fr: "T'es sophistiqué, relax et clairement celui avec le meilleur goût. Tu sais profiter des belles choses sans en faire trop.",
      ar: "أنت راقي، مسترخي، وبأحسن ذوق. تعرف تستمتع بالأشياء الجميلة بدون مبالغة."
    },
    vibe_tag: {
      en: "Coastal beauty and sun-kissed shores",
      fr: "Beauté côtière et rivages ensoleillés",
      ar: "جمال ساحلي وشواطئ مشمسة"
    },
    image: "assets/wilayas/46-A_n_T_mouchent.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  gharda_a: {
    name: "Ghardaïa",
    demonym: "GHARDAÏENNE",
    emoji: "🧿🏜️",
    tagline: {
      en: "Ghardaïa: Iconic, spiritual, and totally unique.",
      fr: "Iconique, spirituel et totalement unique.",
      ar: "أيقوني، روحاني، وفريد تمامًا."
    },
    description: {
      en: "You’re one of a kind and everyone knows it. You take pride in your traditions and have a style that nobody can replicate.",
      fr: "T'es unique et tout le monde le sait. T'es fier de tes traditions et t'as un style que personne ne peut copier.",
      ar: "أنت فريد والكل يعرف ذلك. أنت فخور بتقاليدك وعندك ستايل ما يقدر أحد يقلده."
    },
    vibe_tag: {
      en: "Geometric wonders in the desert sun",
      fr: "Merveilles géométriques sous le soleil du désert",
      ar: "عجائب هندسية تحت شمس الصحراء"
    },
    image: "assets/wilayas/47-Gharda_a.jpg",
    tags: {
      desert: 3,
      chill: 3,
      urban: 1,
      traditional: 3,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 2,
      touristy: 2
    }
  },
  relizane: {
    name: "Relizane",
    demonym: "RELIZANIENNE",
    emoji: "🌱⚡",
    tagline: {
      en: "Relizane: Growing fast and staying real.",
      fr: "Grandir vite et rester authentique.",
      ar: "تنمو بسرعة وتبقى أصيلاً."
    },
    description: {
      en: "You’re ambitious and always on the move. You’re building your future while staying connected to your roots in the plains.",
      fr: "T'es ambitieux et toujours en mouvement. Tu construis ton futur tout en restant connecté à tes racines dans les plaines.",
      ar: "أنت طموح ودايمًا في الحركة. تبني مستقبلك وأنت مرتبط بجذورك في السهول."
    },
    vibe_tag: {
      en: "Fertile lands and agricultural heart",
      fr: "Terres fertiles et cœur agricole",
      ar: "أراضٍ خصبة وقلب فلاحي"
    },
    image: "assets/wilayas/48-Relizane.jpg",
    tags: {
      temperate: 3,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 3
    }
  },
  timimoun: {
    name: "Timimoun",
    demonym: "TIMIMOUNIENNE",
    emoji: "🏜️✨",
    tagline: {
      en: "The red oasis where aesthetic dreams live.",
      fr: "L'oasis rouge où les rêves esthétiques prennent vie.",
      ar: "الواحة الحمراء حيث تعيش الأحلام الجمالية."
    },
    description: {
      en: "You are the main character of a desert indie film. With your stunning red mud-brick aesthetic and chill vibes, you turn every sunset into a core memory.",
      fr: "T'es le personnage principal d'un film indépendant du désert. Avec tes superbes murs en brique rouge et tes vibes chill, tu transformes chaque coucher de soleil en souvenir inoubliable.",
      ar: "أنت بطل فيلم صحراوي مستقل. بجدرانك الحمراء الخلابة وأجوائك الهادئة، تحول كل غروب إلى ذكرى لا تنسى."
    },
    vibe_tag: {
      en: "Red oasis dreams in golden sands",
      fr: "Rêves d'oasis rouges dans les sables dorés",
      ar: "أحلام الواحة الحمراء في الرمال الذهبية"
    },
    image: "assets/wilayas/49-Timimoun.jpg",
    tags: {
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 3,
      local: 1,
      touristy: 2
    }
  },
  bordj_badji_mokhtar: {
    name: "Bordj Badji Mokhtar",
    demonym: "BORDJ BADJI MOKHTARIENNE",
    emoji: "📍🔥",
    tagline: {
      en: "The ultimate frontier vibe for true explorers.",
      fr: "L'ambiance frontière ultime pour les vrais explorateurs.",
      ar: "أجواء الحدود القصوى للمستكشفين الحقيقيين."
    },
    description: {
      en: "You are mysterious, resilient, and totally off the grid. You thrive where the map ends and the real adventure begins.",
      fr: "T'es mystérieux, résilient et complètement déconnecté. Tu prospères là où la carte s'arrête et où la vraie aventure commence.",
      ar: "أنت غامض، صامد، وخارج الشبكة تمامًا. تزدهر حيث تنتهي الخريطة وتبدأ المغامرة الحقيقية."
    },
    vibe_tag: {
      en: "Deep desert silence and starlit skies",
      fr: "Silence profond du désert sous les étoiles",
      ar: "صمت الصحراء العميق تحت النجوم"
    },
    image: "assets/wilayas/50-Bordj_Badji_Mokhtar.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  ouled_djellal: {
    name: "Ouled Djellal",
    demonym: "OULED DJELLALIENNE",
    emoji: "🌴☀️",
    tagline: {
      en: "Keepin' it real in the golden palms.",
      fr: "Rester authentique au milieu des palmiers dorés.",
      ar: "الأصالة في وسط النخيل الذهبي."
    },
    description: {
      en: "You are grounded, hardworking, and deeply connected to your roots. Life is simple, sweet, and centered around family gatherings.",
      fr: "T'es terre-à-terre, travailleur et profondément connecté à tes racines. La vie est simple, douce, et centrée sur les rassemblements familiaux.",
      ar: "أنت متواضع، مجتهد، ومرتبط بجذورك. الحياة بسيطة، حلوة، وتدور حول لمات العائلة."
    },
    vibe_tag: {
      en: "Rising oasis in the vast desert",
      fr: "Oasis naissante dans le vaste désert",
      ar: "واحة ناشئة في الصحراء الواسعة"
    },
    image: "assets/wilayas/51-Ouled_Djellal.jpg",
    tags: {desert:3,chill:3,traditional:3,family:3,low_budget:3,historic:2,local:3}
  },
  b_ni_abb_s: {
    name: "Béni Abbès",
    demonym: "BÉNI ABBÉSIENNE",
    emoji: "🏰🤍",
    tagline: {
      en: "A white oasis straight out of Pinterest.",
      fr: "Une oasis blanche tout droit sortie de Pinterest.",
      ar: "واحة بيضاء كأنها من Pinterest."
    },
    description: {
      en: "You are the aesthetic friend who knows all the best photo spots. You keep things classy and serene, perfect for a peaceful getaway.",
      fr: "T'es l'ami esthétique qui connaît tous les meilleurs spots photo. Tu gardes les choses classy et sereines, parfaites pour une escapade paisible.",
      ar: "أنت الصديق الجميل اللي يعرف أحسن أماكن التصوير. تحافظ على الأناقة والهدوء، مثالي لقضاء عطلة هانئة."
    },
    vibe_tag: {
      en: "Gateway to the infinite Sahara sands",
      fr: "Porte vers les sables infinis du Sahara",
      ar: "بوابة رمال الصحراء اللانهائية"
    },
    image: "assets/wilayas/52-B_ni_Abb_s.jpg",
    tags: {
      desert: 3,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 1,
      local: 1,
      touristy: 2
    }
  },
  in_salah: {
    name: "In Salah",
    demonym: "IN SALAHIENNE",
    emoji: "⛽🌵",
    tagline: {
      en: "Built different in the heart of heat.",
      fr: "Construit différemment au cœur de la chaleur.",
      ar: "مصنوع بشكل مختلف في قلب الحر."
    },
    description: {
      en: "You are a powerhouse of energy and industry. Tough, resilient, and always focused on the bigger picture, you don't let the heat slow you down.",
      fr: "T'es une centrale d'énergie et d'industrie. Dur, résilient et toujours concentré sur la vision d'ensemble, la chaleur ne te ralentit pas.",
      ar: "أنت مصنع طاقة واجتهاد. قوي، صامد، ومركز دايمًا على الصورة الكبيرة، الحر ما يوقفكش."
    },
    vibe_tag: {
      en: "Where the desert meets the sky",
      fr: "Là où le désert rencontre le ciel",
      ar: "حيث تلتقي الصحراء بالسماء"
    },
    image: "assets/wilayas/53-In_Salah.jpg",
    tags: {
      desert: 3,
      fast: 2,
      chill: 1,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 3
    }
  },
  in_guezzam: {
    name: "In Guezzam",
    demonym: "IN GUEZZAMIENNE",
    emoji: "🌍🐫",
    tagline: {
      en: "The desert nomad with a global soul.",
      fr: "Le nomade du désert à l'âme mondiale.",
      ar: "بدوي الصحراء بروح عالمية."
    },
    description: {
      en: "You are the ultimate bridge between worlds. Cultural, open-minded, and always on the move, you represent the true spirit of the Sahara.",
      fr: "T'es le pont ultime entre les mondes. Culturel, ouvert d'esprit et toujours en mouvement, tu représentes le vrai esprit du Sahara.",
      ar: "أنت الجسر الحقيقي بين العوالم. مثقف، منفتح، ودايمًا في الحركة، أنت تمثل روح الصحراء الحقيقية."
    },
    vibe_tag: {
      en: "Borderland spirit in the deep south",
      fr: "Esprit frontalier dans le grand sud",
      ar: "روح الحدود في الجنوب العميق"
    },
    image: "assets/wilayas/54-In_Guezzam.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  touggourt: {
    name: "Touggourt",
    demonym: "TOUGGOURTIENNE",
    emoji: "🌴🏙️",
    tagline: {
      en: "Huge oasis energy, low key vibes.",
      fr: "Énorme énergie d'oasis, vibes discretes.",
      ar: "طاقة واحة هائلة، أجواء هادئة."
    },
    description: {
      en: "You are the bustling heartbeat of the palm groves. You have a little bit of everything and always make everyone feel right at home.",
      fr: "T'es le cœur battant des palmeraies. T'as un peu de tout et tu fais toujours en sorte que tout le monde se sente chez soi.",
      ar: "أنت نبض بساتين النخيل. عندك شوية من كل شي وتخلي الكل يحسّ بالبيت."
    },
    vibe_tag: {
      en: "Palm groves and desert hospitality",
      fr: "Palmeraies et hospitalité du désert",
      ar: "بساتين النخيل وكرم الضيافة الصحراوي"
    },
    image: "assets/wilayas/55-Touggourt.jpg",
    tags: {
      desert: 3,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  djanet: {
    name: "Djanet",
    demonym: "DJANETIENNE",
    emoji: "🎨✨",
    tagline: {
      en: "UNESCO vibes and bucket-list views.",
      fr: "Ambiances UNESCO et vues à couper le souffle.",
      ar: "أجواء اليونسكو ومناظر تستاهل الرحلة."
    },
    description: {
      en: "You are breathtaking and iconic. People travel from all over just to catch a glimpse of your legendary natural beauty.",
      fr: "T'es à couper le souffle et iconique. Les gens voyagent du monde entier juste pour apercevoir ta beauté naturelle légendaire.",
      ar: "أنت خلاب وأيقوني. الناس تسافر من جميع أنحاء العالم فقط لترى جمالك الطبيعي الأسطوري."
    },
    vibe_tag: {
      en: "Tassili dreams and lunar landscapes",
      fr: "Rêves du Tassili et paysages lunaires",
      ar: "أحلام الطاسيلي ومناظر قمرية"
    },
    image: "assets/wilayas/56-Djanet.jpg",
    tags: {
      desert: 3,
      chill: 3,
      traditional: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 1,
      touristy: 3
    }
  },
  el_meghaier: {
    name: "El Meghaier",
    demonym: "EL MEGHAIERIENNE",
    emoji: "🌙🌾",
    tagline: {
      en: "Cool, calm, and collected in the dunes.",
      fr: "Cool, calme et posé dans les dunes.",
      ar: "رائق، هادئ، ومتزون في الكثبان."
    },
    description: {
      en: "You are the definition of 'low-key.' You don't need a crowd to be happy—just good dates and quiet desert nights.",
      fr: "T'es la définition de 'low-key'. T'as pas besoin d'une foule pour être heureux — juste de bonnes dattes et des nuits calmes dans le désert.",
      ar: "أنت تعريف الهدوء. ما تحتش زحمة عشان تكون مبسوط — بس تمر وليالي صحرا هادئة."
    },
    vibe_tag: {
      en: "Oasis life in the golden dunes",
      fr: "Vie d'oasis dans les dunes dorées",
      ar: "حياة الواحة في الكثبان الذهبية"
    },
    image: "assets/wilayas/57-El_Meghaier.jpg",
    tags: {desert:3,chill:3,traditional:3,family:3,low_budget:3,historic:1,local:3}
  },
  el_meniaa: {
    name: "El Meniaa",
    demonym: "EL MENIAÏENNE",
    emoji: "📍⚖️",
    tagline: {
      en: "The perfect crossroads for your next chapter.",
      fr: "Le carrefour parfait pour ton prochain chapitre.",
      ar: "مفترق الطرق المثالي لفصلك القادم."
    },
    description: {
      en: "You are the ultimate connector. You bridge the north and south, balancing tradition with a forward-looking mindset.",
      fr: "T'es le connecteur ultime. Tu fais le pont entre le nord et le sud, en équilibrant tradition et vision tournée vers l'avenir.",
      ar: "أنت الموصل الحقيقي. تربط الشمال بالجنوب، وتوازن بين التقاليد والنظرة المستقبلية."
    },
    vibe_tag: {
      en: "Ancient paths in the desert heart",
      fr: "Chemins anciens au cœur du désert",
      ar: "طرق قديمة في قلب الصحراء"
    },
    image: "assets/wilayas/58-El_Meniaa.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 1,
      local: 2,
      touristy: 1
    }
  },
  aflou: {
    name: "Aflou",
    demonym: "AFLOUIENNE",
    emoji: "🏔️❄️",
    tagline: {
      en: "Mountain air and cozy sweater vibes.",
      fr: "Air de montagne et ambiances pull cosy.",
      ar: "هواء جبلي وأجواء كنزة دافئة."
    },
    description: {
      en: "You are the refreshing escape from the heat. You love high altitudes, snowy winters, and a cozy, traditional mountain lifestyle.",
      fr: "T'es l'évasion rafraîchissante de la chaleur. Tu aimes les hautes altitudes, les hivers enneigés et un mode de vie montagnard traditionnel et cosy.",
      ar: "أنت الهروب المنعش من الحر. تحب المرتفعات، الشتاء الثلجي، والحياة الجبلية التقليدية الدافئة."
    },
    vibe_tag: {
      en: "Highland winds and steppe adventures",
      fr: "Vents des hauteurs et aventures de steppe",
      ar: "رياح المرتفعات ومغامرات السهوب"
    },
    image: "assets/wilayas/59-Aflou.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  barika: {
    name: "Barika",
    demonym: "BARIKIENNE",
    emoji: "🌾🏠",
    tagline: {
      en: "Keeping it steady on the plains.",
      fr: "Rester stable dans les plaines.",
      ar: "ثابت في السهول."
    },
    description: {
      en: "You are reliable and down-to-earth. You represent the hardworking spirit of the plains, where life is steady and community comes first.",
      fr: "T'es fiable et terre-à-terre. Tu représentes l'esprit travailleur des plaines, où la vie est stable et la communauté passe en premier.",
      ar: "أنت موثوق ومتواضع. تمثل الروح المجتهدة للسهول، حيث الحياة ثابتة والمجتمع أولاً."
    },
    vibe_tag: {
      en: "Heart of the plains, vibrant spirit",
      fr: "Cœur des plaines, esprit vibrant",
      ar: "قلب السهول، روح نابضة"
    },
    image: "assets/wilayas/60-Barika.jpg",
    tags: {
      temperate: 3,
      chill: 3,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 3,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  ksar_chellala: {
    name: "Ksar Chellala",
    demonym: "KSAR CHELLALIENNE",
    emoji: "🧶✨",
    tagline: {
      en: "The quiet soul of the high plains.",
      fr: "L'âme tranquille des hautes plaines.",
      ar: "الروح الهادئة للهضاب العليا."
    },
    description: {
      en: "You are the definition of low-key and authentic. You love keeping things traditional and appreciate the slow, steady rhythm of life away from the big city noise.",
      fr: "T'es la définition du discret et de l'authentique. Tu aimes garder les choses traditionnelles et apprécier le rythme lent et régulier de la vie loin du bruit de la ville.",
      ar: "أنت تعريف الهدوء والأصالة. تحب التقاليد وإيقاع الحياة البطيء المستقر بعيدًا عن ضوضاء المدينة."
    },
    vibe_tag: {
      en: "Desert gateway and historical charm",
      fr: "Porte du désert et charme historique",
      ar: "بوابة الصحراء وسحر تاريخي"
    },
    image: null,
    tags: {temperate:2,chill:3,traditional:3,family:2,low_budget:3,historic:2,local:3}
  },
  messaad: {
    name: "Messaad",
    demonym: "MESSAADIENNE",
    emoji: "🏜️🐪",
    tagline: {
      en: "Your gateway to the vast desert horizon.",
      fr: "Ta porte vers l'horizon infini du désert.",
      ar: "بوابتك إلى أفق الصحراء الممتد."
    },
    description: {
      en: "You are grounded, resilient, and deeply connected to your roots. You’ve got a rugged spirit and prefer the wide-open spaces of the Saharan edge over anything else.",
      fr: "T'es terre-à-terre, résilient et profondément connecté à tes racines. T'as un esprit robuste et tu préfères les grands espaces de la bordure saharienne à tout le reste.",
      ar: "أنت متواضع، صامد، ومرتبط بجذورك. عندك روح قوية وتفضل الفضاءات الواسعة لحافة الصحراء على أي شيء آخر."
    },
    vibe_tag: {
      en: "Steppe soul and rugged beauty",
      fr: "Âme de la steppe et beauté sauvage",
      ar: "روح السهوب وجمال بري"
    },
    image: "assets/wilayas/62-Messaad.jpg",
    tags: {
      desert: 3,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 1,
      local: 2
    }
  },
  a_n_oussara: {
    name: "Aïn Oussara",
    demonym: "AÏN OUSSARIENNE",
    emoji: "🏗️📈",
    tagline: {
      en: "The rising star of the plains.",
      fr: "L'étoile montante des plaines.",
      ar: "النجم الصاعد في السهول."
    },
    description: {
      en: "You are focused, ambitious, and always on the move. You’re building your future and don’t have time for anything that doesn't help you level up.",
      fr: "T'es concentré, ambitieux et toujours en mouvement. Tu construis ton futur et t'as pas de temps pour ce qui ne t'aide pas à évoluer.",
      ar: "أنت مركز، طموح، ودايمًا في الحركة. تبني مستقبلك وما عندك وقت للشيء اللي ما يطوركش."
    },
    vibe_tag: {
      en: "Highland energy and vast horizon",
      fr: "Énergie des hauteurs et horizon vaste",
      ar: "طاقة المرتفعات وأفق واسع"
    },
    image: "assets/wilayas/63-A_n_Oussara.jpg",
    tags: {
      temperate: 2,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      modern: 3,
      local: 2
    }
  },
  boussa_da: {
    name: "Boussaâda",
    demonym: "BOUSSAÂDIENNE",
    emoji: "🎨✨",
    tagline: {
      en: "Where art and desert magic collide.",
      fr: "Là où l'art et la magie du désert se rencontrent.",
      ar: "حيث يلتقي الفن بسحر الصحراء."
    },
    description: {
      en: "You’re an absolute creative soul with a poetic vibe. You love beautiful things, hidden gems, and the kind of aesthetic that looks perfect on your feed.",
      fr: "T'es une âme créative absolue avec un vibe poétique. Tu aimes les belles choses, les trésors cachés et le genre d'esthétique qui claque sur ton feed.",
      ar: "أنت روح مبدعة بأجواء شاعرية. تحب الأشياء الجميلة، الكنوز المخفية، والجماليات اللي تضرب على الفيد."
    },
    vibe_tag: {
      en: "Gateway to the Sahara's golden gate",
      fr: "Porte vers la porte dorée du Sahara",
      ar: "بوابة الصحراء الذهبية"
    },
    image: "assets/wilayas/64-Boussa_da.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 1,
      local: 1,
      touristy: 3
    }
  },
  el_abiodh_sidi_cheikh: {
    name: "El Abiodh Sidi Cheikh",
    demonym: "EL ABIODHIENNE",
    emoji: "🕌💫",
    tagline: {
      en: "Keep it sacred, keep it real.",
      fr: "Garde le sacré, reste authentique.",
      ar: "حافظ على القدسية، وابقَ أصيلاً."
    },
    description: {
      en: "You have a deep respect for history and traditions that have lasted for centuries. You aren't into trends—you care about what actually matters.",
      fr: "T'as un profond respect pour l'histoire et les traditions qui durent depuis des siècles. Tu ne suis pas les tendances — tu te soucies de ce qui compte vraiment.",
      ar: "عندك احترام عميق للتاريخ والتقاليد اللي دامت لقرون. أنت ما تتبعش الموضات — تهتم باللي يعنيلك حقيقة."
    },
    vibe_tag: {
      en: "Desert winds and nomadic memories",
      fr: "Vents du désert et mémoires nomades",
      ar: "رياح الصحراء وذكريات بدوية"
    },
    image: "assets/wilayas/65-El_Abiodh_Sidi_Cheikh.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 3,
      local: 3
    }
  },
  el_kantara: {
    name: "El Kantara",
    demonym: "EL KANTARIENNE",
    emoji: "🏛️📸",
    tagline: {
      en: "The ultimate aesthetic transition point.",
      fr: "Le point de transition esthétique ultime.",
      ar: "نقطة التحول الجمالية القصوى."
    },
    description: {
      en: "You are the bridge between two worlds, and everyone notices your unique style. You live for epic views and documenting the beauty around you.",
      fr: "T'es le pont entre deux mondes, et tout le monde remarque ton style unique. Tu vis pour les vues épiques et documenter la beauté autour de toi.",
      ar: "أنت الجسر بين عالمين، والكل يلاحظ أسلوبك الفريد. تعيش من أجل المناظر الملحمية وتوثيق الجمال حولك."
    },
    vibe_tag: {
      en: "Gateway to the canyon's grand beauty",
      fr: "Porte vers la grande beauté du canyon",
      ar: "بوابة جمال الوادي العظيم"
    },
    image: "assets/wilayas/66-El_Kantara.jpg",
    tags: {
      mountain: 2,
      desert: 1,
      temperate: 1,
      chill: 2,
      traditional: 2,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 1,
      touristy: 3
    }
  },
  bir_el_ater: {
    name: "Bir El Ater",
    demonym: "BIR EL ATERIENNE",
    emoji: "⛰️⚒️",
    tagline: {
      en: "Tough, rugged, and mountain-made.",
      fr: "Dur, robuste et forgé par la montagne.",
      ar: "قوي، صلب، وجبلي الصنع."
    },
    description: {
      en: "You’re built for the grind and thrive in environments that require grit. You’re definitely not a softie, and you love being in the heart of the action.",
      fr: "T'es fait pour le grind et tu prospères dans les environnements qui exigent du cran. T'es clairement pas un fragile, et tu aimes être au cœur de l'action.",
      ar: "أنت مصنوع للكد وتزدهر في البيئات اللي تتطلب عزيمة. أنت لست ضعيفًا أبدًا، وتحب تكون في قلب الحدث."
    },
    vibe_tag: {
      en: "Frontier spirit in the desert sun",
      fr: "Esprit frontalier sous le soleil du désert",
      ar: "روح الحدود تحت شمس الصحراء"
    },
    image: null,
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 2,
      urban: 1,
      traditional: 1,
      nightlife: 1,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 3
    }
  },
  ksar_el_boukhari: {
    name: "Ksar El Boukhari",
    demonym: "KSAR EL BOUKHARIENNE",
    emoji: "🏔️🏘️",
    tagline: {
      en: "Old school vibes in the mountains.",
      fr: "Ambiances old school dans les montagnes.",
      ar: "أجواء قديمة في الجبال."
    },
    description: {
      en: "You have an 'old soul' energy that people find super comforting. You love classic aesthetics, mountain air, and keeping your inner circle close.",
      fr: "T'as une énergie de 'vieille âme' que les gens trouvent super réconfortante. Tu aimes l'esthétique classique, l'air de la montagne et garder ton cercle proche soudé.",
      ar: "عندك طاقة الروح القديمة اللي الناس تلقاها مريحة. تحب الجمال الكلاسيكي، هواء الجبل، وإبقاء دائرتك المقربة قريبة."
    },
    vibe_tag: {
      en: "Ancient trade routes and mountain air",
      fr: "Routes commerciales anciennes et air de montagne",
      ar: "طرق تجارية قديمة وهواء جبلي"
    },
    image: "assets/wilayas/68-Ksar_El_Boukhari.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 2,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 2,
      historic: 3,
      local: 2,
      touristy: 1
    }
  },
  el_aricha: {
    name: "El Aricha",
    demonym: "EL ARICHIENNE",
    emoji: "🐑🌌",
    tagline: {
      en: "Total main character, off the grid.",
      fr: "Personnage principal, hors réseau.",
      ar: "بطل رئيسي، خارج الشبكة."
    },
    description: {
      en: "You don't need anyone's validation to know you're cool. You prefer peace, quiet, and staying completely away from the drama of the fast lane.",
      fr: "T'as pas besoin de la validation des autres pour savoir que t'es cool. Tu préfères la paix, le calme et rester complètement à l'écart du drama de la voie rapide.",
      ar: "ما تحتش تصديق الآخرين عشان تعرف أنك راقي. تفضل السلام، الهدوء، والابتعاد التام عن دراما الحياة السريعة."
    },
    vibe_tag: {
      en: "High plateau charm and open roads",
      fr: "Charme des hauts plateaux et routes ouvertes",
      ar: "سحر الهضاب العالية وطرق مفتوحة"
    },
    image: "assets/wilayas/69-El_Aricha.jpg",
    tags: {
      desert: 1,
      temperate: 2,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  }
}

const QUESTIONS = [
  {
    id: 1,
    question: "Beach or mountains?",
    options: [
      { label: "🌊 Beach", tags: { coastal: 3 } },
      { label: "🏔️ Mountains", tags: { mountain: 3 } },
    ],
  },
  {
    id: 2,
    question: "Fast-paced or chill?",
    options: [
      { label: "⚡ Fast-paced", tags: { fast: 3 } },
      { label: "🧘 Chill", tags: { chill: 3 } },
    ],
  },
  {
    id: 3,
    question: "Big city energy or small town warmth?",
    options: [
      { label: "🌆 Big city", tags: { urban: 3 } },
      { label: "🏘️ Small town", tags: { traditional: 3 } },
    ],
  },
  {
    id: 4,
    question: "Nightlife or early nights?",
    options: [
      { label: "🍸 Nightlife", tags: { nightlife: 3 } },
      { label: "🌙 Early nights", tags: { family: 3 } },
    ],
  },
  {
    id: 5,
    question: "Budget-conscious or don't care?",
    options: [
      { label: "💰 Budget-conscious", tags: { low_budget: 3 } },
      { label: "💎 Don't care", tags: { mid_budget: 3 } },
    ],
  },
  {
    id: 6,
    question: "Desert heat or four seasons?",
    options: [
      { label: "🏜️ Desert heat", tags: { desert: 3 } },
      { label: "🍂 Four seasons", tags: { temperate: 3 } },
    ],
  },
  {
    id: 7,
    question: "Historic vibes or modern life?",
    options: [
      { label: "🏛️ Historic city", tags: { historic: 3 } },
      { label: "🏗️ Modern city", tags: { modern: 3 } },
    ],
  },
  {
    id: 8,
    question: "Tourist hotspot or local secret?",
    options: [
      { label: "📸 Tourist favorite", tags: { touristy: 3 } },
      { label: "🤫 Hidden gem", tags: { local: 3 } },
    ],
  },
];

const CITIES = {
  adrar: {
    name: "Adrar",
    demonym: "ADRARIENNE",
    emoji: "🌴🔥",
    tagline: {
      en: "Living that golden oasis dream life.",
      fr: "La vie de rêve au cœur des oasis dorées.",
      ar: "عيش حلم الواحة الذهبي في وسط الكثبان."
    },
    description: {
      en: "You are the ultimate hidden gem, chilling in the middle of the dunes. You love keeping it real, traditional, and totally low-key.",
      fr: "T'es la perle rare qui kiffe le calme au milieu des dunes. Tu restes authentique, traditionnel et totalement discret — et c'est ce qui te rend unique.",
      ar: "أنت الجوهرة المخفية، تستمتع بالهدوء في وسط الكثبان الرملية. تحب البساطة، الأصالة، والحياة بعيداً عن الضوضاء."
    },
    vibe_tag: {
      en: "Golden dunes and ancient desert whispers",
      fr: "Dunes dorées et chuchotements du désert",
      ar: "كثبان ذهبية وهمس الصحراء القديم"
    },
    image: "assets/wilayas/01-Adrar.jpg",
    tags: {desert:3,chill:3,traditional:3,family:2,low_budget:3,historic:1,local:3}
  },
  chlef: {
    name: "Chlef",
    demonym: "CHLEFIENNE",
    emoji: "🍊🚜",
    tagline: {
      en: "Fresh vibes and farm-to-table energy.",
      fr: "Ambiance fraîche et énergie de la ferme à l'assiette.",
      ar: " vibes منعشة وطاقة من المزرعة للسفرة."
    },
    description: {
      en: "You are all about growth and keeping things grounded. You're a hardworking soul who values community and simple, honest living.",
      fr: "Tu es du genre à cultiver la vie et à garder les pieds sur terre. T'as l'âme d'un travailleur acharné qui croit en la communauté et la simplicité.",
      ar: "أنت إنسان طموح متجذر في أرضه، تقدر الجماعة والحياة البسيطة النقية. عندك قلب مجتهد وروح صادقة."
    },
    vibe_tag: {
      en: "Where history meets the fertile valley",
      fr: "Là où l'histoire rencontre la vallée fertile",
      ar: "حيث يلتقي التاريخ بالوادي الخصيب"
    },
    image: "assets/wilayas/02-Chlef.jpg",
    tags: {
      mountain: 1,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 3
    }
  },
  laghouat: {
    name: "Laghouat",
    demonym: "LAGHOUATIENNE",
    emoji: "🏜️✨",
    tagline: {
      en: "The gateway to your next adventure.",
      fr: "La porte d'entrée vers ta prochaine aventure.",
      ar: "بوابة مغامرتك القادمة."
    },
    description: {
      en: "You are the bridge between the city and the wild Sahara. You've got a classic soul and you're always ready for a road trip.",
      fr: "T'es le pont entre la ville et le Sahara sauvage. T'as une âme classieuse et t'es toujours partant pour un road trip improvisé.",
      ar: "أنت الجسر الذي يربط المدينة بالصحراء الواسعة. روحك كلاسيكية وحقيبتك دومًا جاهزة للرحلة."
    },
    vibe_tag: {
      en: "Gateway to the vast Saharan horizon",
      fr: "Porte vers l'horizon infini du Sahara",
      ar: "بوابة الأفق الصحراوي الممتد"
    },
    image: "assets/wilayas/03-Laghouat.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      temperate: 1,
      chill: 3,
      urban: 1,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  oum_el_bouaghi: {
    name: "Oum El Bouaghi",
    demonym: "OUM EL BOUAGHIENNE",
    emoji: "🌾☁️",
    tagline: {
      en: "Quiet, steady, and perfectly low-key.",
      fr: "Calme, posé, et parfaitement discret.",
      ar: "هادئ، متزن، ومنخفض البروفايل."
    },
    description: {
      en: "You don't need the spotlight to shine. You value your peace and quiet, and you're the most reliable friend in the group.",
      fr: "T'as pas besoin des projecteurs pour briller. Tu kiffes ta tranquillité et t'es le pote le plus fiable de la bande, celui sur qui tout le monde compte.",
      ar: "ما تحتش الأضواء عشان تلمع. أنت القدوة الهادئة، الصديق المخلص اللي الكل يعتمد عليه."
    },
    vibe_tag: {
      en: "High plateau spirit, rugged and raw",
      fr: "Esprit des hauts plateaux, brut et authentique",
      ar: "روح الهضاب العالية، أصيلة وقوية"
    },
    image: null,
    tags: {
      mountain: 1,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  batna: {
    name: "Batna",
    demonym: "BATNÉENNE",
    emoji: "🎓🏔️",
    tagline: {
      en: "Brainy, bold, and totally iconic.",
      fr: "Intello, audacieux et carrément iconique.",
      ar: "ذكي، جريء، وأيقونة بحد ذاتها."
    },
    description: {
      en: "You are a total history buff with a revolutionary spirit. You love hanging out with friends and debating the big topics.",
      fr: "T'es un passionné d'histoire avec un esprit révolutionnaire. Tu adores traîner avec les potes et débattre des grands sujets autour d'un café.",
      ar: "أنت عاشق للتاريخ بروح ثائرة. تحب الجلسات مع الأصدقاء والنقاشات العميقة عن كل شيء."
    },
    vibe_tag: {
      en: "Mountain peaks and ancient Roman echoes",
      fr: "Sommets montagneux et échos romains antiques",
      ar: "قمم جبال وأصداء رومانية عريقة"
    },
    image: "assets/wilayas/05-Batna.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      modern: 1,
      local: 2,
      touristy: 1
    }
  },
  b_ja_a: {
    name: "Béjaïa",
    demonym: "BÉJAÏENNE",
    emoji: "🌊⛰️",
    tagline: {
      en: "Coastal aesthetic and mountain views.",
      fr: "Ambiance côtière avec vue sur les montagnes.",
      ar: "جمال البحر وإطلالة الجبل في آن واحد."
    },
    description: {
      en: "You are the total package—beach days in the morning and mountain hikes in the afternoon. You're trendy, social, and always on the move.",
      fr: "T'es le package complet — plage le matin, randonnée en montagne l'après-midi. T'es tendance, sociable et toujours en mouvement.",
      ar: "أنت الباقة المتكاملة — شواطئ في الصباح وجبال في المساء. عصري، اجتماعي، ودايماً في الحركة."
    },
    vibe_tag: {
      en: "Emerald coastlines and Mediterranean dreams",
      fr: "Côtes émeraude et rêves méditerranéens",
      ar: "سواحل زمردية وأحلام متوسطية"
    },
    image: "assets/wilayas/06-B_ja_a.jpg",
    tags: {
      coastal: 3,
      mountain: 2,
      temperate: 2,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 3,
      low_budget: 1,
      mid_budget: 2,
      historic: 1,
      modern: 2,
      local: 1,
      touristy: 3
    }
  },
  biskra: {
    name: "Biskra",
    demonym: "BISKRIENNE",
    emoji: "🌴☀️",
    tagline: {
      en: "Sweetest vibes in the desert sun.",
      fr: "Les plus douces vibes sous le soleil du désert.",
      ar: "أحلى الأجواء تحت شمس الصحراء."
    },
    description: {
      en: "You are vibrant, warm, and have a heart of gold—just like the famous dates you're known for. You're the life of the oasis.",
      fr: "T'es pétillant, chaleureux, et t'as un cœur en or — comme les fameuses dattes qui font ta réputation. T'es l'âme de l'oasis.",
      ar: "أنت مفعم بالحيوية والدفء، وقلبك أبيض — تمامًا مثل التمور الشهيرة اللي تشتهر بها. أنت روح الواحة."
    },
    vibe_tag: {
      en: "Date palms and desert oasis magic",
      fr: "Palmeraies et magie des oasis du désert",
      ar: "نخيل وسحر واحات الصحراء"
    },
    image: "assets/wilayas/07-Biskra.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      local: 2,
      touristy: 1
    }
  },
  b_char: {
    name: "Béchar",
    demonym: "BÉCHARIENNE",
    emoji: "🌵✊",
    tagline: {
      en: "Rugged, raw, and ready for anything.",
      fr: "Brut, authentique et prêt à tout.",
      ar: "خام، أصيل، وجاهز لأي شيء."
    },
    description: {
      en: "You're a bit of a mystery. You love your independence and have a tough-as-nails personality that survives any challenge.",
      fr: "T'es un peu mystérieux. T'aimes ton indépendance et t'as une personnalité en béton armé qui surmonte tous les défis.",
      ar: "أنت غامض بعض الشيء. تحب استقلاليتك وشخصيتك قوية كالصخر تقهر أي تحدي."
    },
    vibe_tag: {
      en: "Sahara soul, timeless nomadic vibes",
      fr: "Âme du Sahara, esprit nomade intemporel",
      ar: "روح الصحراء، وبداوة لا تموت"
    },
    image: "assets/wilayas/08-B_char.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  blida: {
    name: "Blida",
    demonym: "BLIDAISE",
    emoji: "🌹✨",
    tagline: {
      en: "City of roses and main character energy.",
      fr: "La ville des roses avec une énergie de protagoniste.",
      ar: "مدينة الورود وطاقة البطل الرئيسي."
    },
    description: {
      en: "You are super stylish and always surrounded by beauty. You're the one who organizes the weekend hangouts and keeps the squad together.",
      fr: "T'es super stylé et toujours entouré de beauté. C'est toi qui organises les sorties du week-end et qui tiens la team soudée.",
      ar: "أنت راقي ومحاط بالجمال دايماً. أنت اللي تنظم الخروجات وتلم الشمل."
    },
    vibe_tag: {
      en: "City of roses and mountain breezes",
      fr: "Ville des roses et brise de montagne",
      ar: "مدينة الورود ونسمات الجبال"
    },
    image: "assets/wilayas/09-Blida.jpg",
    tags: {
      coastal: 1,
      mountain: 1,
      temperate: 3,
      fast: 3,
      urban: 3,
      nightlife: 2,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 1,
      modern: 3,
      local: 1,
      touristy: 2
    }
  },
  bouira: {
    name: "Bouira",
    demonym: "BOUIRIENNE",
    emoji: "🌲🏔️",
    tagline: {
      en: "Mountain soul with a quiet heart.",
      fr: "Âme montagnarde au cœur tranquille.",
      ar: "روح جبلية وقلب هادئ."
    },
    description: {
      en: "You are deep, thoughtful, and love your roots. You prefer a slow pace and meaningful connections over the busy city rush.",
      fr: "T'es profond, réfléchi, et tu tiens à tes racines. Tu préfères le rythme lent et les connexions sincères à l'agitation de la ville.",
      ar: "أنت عميق، مفكر، وتحب أصولك. تفضل الحياة البطيئة والعلاقات الصادقة على صخب المدينة."
    },
    vibe_tag: {
      en: "Green hills and serene highland air",
      fr: "Collines verdoyantes et air serein des hauteurs",
      ar: "تلال خضراء وهواء الجبال النقي"
    },
    image: "assets/wilayas/10-Bouira.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  tamanrasset: {
    name: "Tamanrasset",
    demonym: "TAMANRASSETIENNE",
    emoji: "🌌✨",
    tagline: {
      en: "Spiritual, stunning, and totally legendary.",
      fr: "Spirituel, époustouflant et carrément légendaire.",
      ar: "روحاني، خلاب، وأسطوري بكل المقاييس."
    },
    description: {
      en: "You are a traveler at heart. With your love for art, deep traditions, and epic landscapes, you're basically the coolest person anyone knows.",
      fr: "T'es un voyageur dans l'âme. Avec ton amour de l'art, des traditions et des paysages grandioses, t'es littéralement la personne la plus cool que tout le monde connaît.",
      ar: "أنت رحالة في القلب. بحبك للفن والتقاليد والمناظر الخلابة، أنت أروع شخص يعرفه الجميع."
    },
    vibe_tag: {
      en: "Heart of the desert, majestic peaks",
      fr: "Cœur du désert aux pics majestueux",
      ar: "قلب الصحراء وقممها الشامخة"
    },
    image: "assets/wilayas/11-Tamanrasset.jpg",
    tags: {
      mountain: 2,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 2,
      touristy: 2
    }
  },
  t_bessa: {
    name: "Tébessa",
    demonym: "TÉBESSIENNE",
    emoji: "🏛️⏳",
    tagline: {
      en: "Ancient history meets modern edge.",
      fr: "Histoire ancienne rencontre le style moderne.",
      ar: "تاريخ عريق يلتقي بالعصرية."
    },
    description: {
      en: "You're a total time traveler who loves mixing the old-school with the new. You're sharp, strategic, and always have a story to tell.",
      fr: "T'es un vrai voyageur temporel qui mixe l'ancien et le nouveau. T'es intelligent, stratégique, et t'as toujours une histoire à raconter.",
      ar: "أنت مسافر عبر الزمن تمزج بين القديم والجديد. ذكي، استراتيجي، وعندك قصة تحكيها دايماً."
    },
    vibe_tag: {
      en: "Ancient stones and frontier desert tales",
      fr: "Pierres antiques et récits du désert frontalier",
      ar: "أحجار قديمة وحكايات الصحراء الحدودية"
    },
    image: "assets/wilayas/12-T_bessa.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      modern: 1,
      local: 2,
      touristy: 1
    }
  },
  tlemcen: {
    name: "Tlemcen",
    demonym: "TLEMCÉNIENNE",
    emoji: "🎨✨",
    tagline: {
      en: "The artsy soul with timeless aesthetic vibes.",
      fr: "L'âme artistique aux vibes esthétiques intemporelles.",
      ar: "الروح الفنية ذات الذوق الجمالي الخالد."
    },
    description: {
      en: "You are the definition of 'old money' aesthetic meets creative genius. You love slow mornings, historical architecture, and finding beauty in the little details of life.",
      fr: "T'es la définition du style 'old money' combiné au génie créatif. Tu kiffes les matins calmes, l'architecture historique et la beauté des petits détails de la vie.",
      ar: "أنت تعريف الأناقة الكلاسيكية مع لمسة إبداعية. تحب الصباحات الهادئة، العمارة التاريخية، وجمال التفاصيل الصغيرة."
    },
    vibe_tag: {
      en: "Andalusian grace in every corner",
      fr: "Grâce andalouse à chaque coin de rue",
      ar: "طابع أندلسي في كل زاوية"
    },
    image: "assets/wilayas/13-Tlemcen.jpg",
    tags: {
      coastal: 1,
      mountain: 3,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 2,
      touristy: 1
    }
  },
  tiaret: {
    name: "Tiaret",
    demonym: "TIARETIENNE",
    emoji: "🐎🌾",
    tagline: {
      en: "Main character energy for horse lovers only.",
      fr: "Énergie de protagoniste pour les amoureux des chevaux.",
      ar: "طاقة البطل لمحبي الخيل فقط."
    },
    description: {
      en: "You’re low-key, grounded, and have a deep appreciation for heritage. You prefer wide open spaces and the company of your best friends over the noise of the big city.",
      fr: "T'es discret, terre-à-terre, et tu as un profond respect pour le patrimoine. Tu préfères les grands espaces et la compagnie de tes meilleurs potes au bruit de la ville.",
      ar: "أنت هادئ، متواضع، وتقدر التراث. تفضل الفضاءات الواسعة وصحبة الأصدقاء المقربين على ضوضاء المدينة."
    },
    vibe_tag: {
      en: "Highland plains and wild equestrian spirit",
      fr: "Plaines des hauts plateaux et esprit équestre sauvage",
      ar: "سهول الهضاب وروح الفروسية البرية"
    },
    image: "assets/wilayas/14-Tiaret.jpg",
    tags: {
      mountain: 2,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 2,
      modern: 1,
      local: 3
    }
  },
  tizi_ouzou: {
    name: "Tizi Ouzou",
    demonym: "TIZI OUZIENNE",
    emoji: "🏔️✊",
    tagline: {
      en: "Big mountain energy and fierce cultural pride.",
      fr: "Énergie montagnarde et fierté culturelle féroce.",
      ar: "طاقة جبلية وفخر ثقافي عظيم."
    },
    description: {
      en: "You are the loyal friend who always stands up for what they believe in. Your vibe is all about community, steep hills, and having the best stories to tell.",
      fr: "T'es l'ami loyal qui défend toujours ses convictions. Ton vibe est fait de communauté, de collines escarpées et des meilleures histoires à raconter.",
      ar: "أنت الصديق الوفي اللي دايمًا يدافع عن مبادئه. أجواءك مجتمع، تلال وعرة، وأحلى القصص."
    },
    vibe_tag: {
      en: "Mountain majesty and cultural pride",
      fr: "Majesté montagnarde et fierté culturelle",
      ar: "جبل شامخ وفخر ثقافي أصيل"
    },
    image: "assets/wilayas/15-Tizi_Ouzou.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 3
    }
  },
  algiers: {
    name: "Algiers",
    demonym: "ALGÉROISE",
    emoji: "🏙️🌊",
    tagline: {
      en: "The chaotic, iconic center of everything cool.",
      fr: "Le centre chaotique et iconique de tout ce qui est cool.",
      ar: "المركز الفوضوي الأيقوني لكل شيء رائع."
    },
    description: {
      en: "You are the life of the party and thrive in the fast lane. You’re always on the move, chasing the latest trends and soaking up the busy city lights.",
      fr: "T'es l'âme de la fête et tu prospères dans la voie rapide. Toujours en mouvement, tu chasses les dernières tendances et tu t'imbibes des lumières de la ville.",
      ar: "أنت روح الحفلة وتعيش في المسار السريع. دايمًا في الحركة، تلاحق أحدث الصيحات وتغرق في أضواء المدينة."
    },
    vibe_tag: {
      en: "The White City, sparkling by the sea",
      fr: "La Ville Blanche qui scintille au bord de la mer",
      ar: "المدينة البيضاء المتلألئة على البحر"
    },
    image: "assets/wilayas/16-Algiers.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 3,
      urban: 3,
      traditional: 1,
      nightlife: 3,
      mid_budget: 3,
      historic: 1,
      modern: 3,
      local: 1,
      touristy: 3
    }
  },
  djelfa: {
    name: "Djelfa",
    demonym: "DJELFIENNE",
    emoji: "🏜️🐑",
    tagline: {
      en: "Steppe vibes and authentic desert-edge mystery.",
      fr: "Vibes de steppe et mystère authentique en bordure du désert.",
      ar: "أجواء السهوب وغموض أصيل على حافة الصحراء."
    },
    description: {
      en: "You’re a rugged individual who thrives in the quiet, vast landscapes. You value tradition and keeping it real over chasing the latest internet fads.",
      fr: "T'es un individu robuste qui prospère dans les paysages calmes et vastes. Tu valorises la tradition et l'authenticité plutôt que les dernières tendances Internet.",
      ar: "أنت شخص قوي يزدهر في الأراضي الهادئة الواسعة. تقدر الأصالة والتقاليد أكثر من موضة النت."
    },
    vibe_tag: {
      en: "Steppe landscapes and nomadic heritage",
      fr: "Paysages de steppe et héritage nomade",
      ar: "سهوب شاسعة وتراث بدوي"
    },
    image: "assets/wilayas/17-Djelfa.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  jijel: {
    name: "Jijel",
    demonym: "JIJELIENNE",
    emoji: "🏖️🌲",
    tagline: {
      en: "Coastal aesthetic and pure vacation mode.",
      fr: "Esthétique côtière et mode vacances à fond.",
      ar: "جمال ساحلي وأجوبة عطلة تامة."
    },
    description: {
      en: "You are the ultimate 'beach bum' who just wants to chill and enjoy the view. You keep things simple, breezy, and effortlessly cool.",
      fr: "T'es le roi de la plage qui veut juste chill et profiter de la vue. Tu gardes les choses simples, légères et naturellement stylées.",
      ar: "أنت ملك الشاطئ اللي يحب يسترخي ويتمتع بالمنظر. حياتك بسيطة، منعشة، ورايقة."
    },
    vibe_tag: {
      en: "Coastal cliffs and wild blue waters",
      fr: "Falaises côtières et eaux bleues sauvages",
      ar: "منحدرات ساحلية ومياه زرقاء برية"
    },
    image: "assets/wilayas/18-Jijel.jpg",
    tags: {
      coastal: 3,
      mountain: 2,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  s_tif: {
    name: "Sétif",
    demonym: "SÉTIFIENNE",
    emoji: "🎓📈",
    tagline: {
      en: "Total hustle culture in a student city.",
      fr: "Culture du hustle à fond dans une ville étudiante.",
      ar: "ثقافة الكد والاجتهاد في مدينة طلابية."
    },
    description: {
      en: "You’re ambitious, social, and always looking for the next big opportunity. Whether you're studying or shopping, you’re always busy leveling up.",
      fr: "T'es ambitieux, sociable, et toujours à la recherche de la prochaine opportunité. Que tu étudies ou que tu magasines, t'es toujours en train de level up.",
      ar: "أنت طموح، اجتماعي، ودايمًا تبحث عن الفرصة القادمة. سواء كنت تدرس أو تتسوق، أنت دايمًا في تطور."
    },
    vibe_tag: {
      en: "High altitude charm, vibrant city life",
      fr: "Charme des hauteurs, vie urbaine vibrante",
      ar: "سحر المرتفعات وحياة مدنية نابضة"
    },
    image: "assets/wilayas/19-S_tif.jpg",
    tags: {
      mountain: 1,
      temperate: 1,
      fast: 3,
      urban: 3,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  sa_da: {
    name: "Saïda",
    demonym: "SAÏDIENNE",
    emoji: "⛰️☁️",
    tagline: {
      en: "Low-key mountain retreat for true peace.",
      fr: "Retraite montagnarde discrète pour la vraie paix.",
      ar: "ملاذ جبلي هادئ للسلام الحقيقي."
    },
    description: {
      en: "You’re the friend everyone goes to when they need to escape the drama. You value quality time, fresh air, and a quiet, traditional way of life.",
      fr: "T'es l'ami vers qui tout le monde se tourne pour échapper au drama. Tu values le temps de qualité, l'air frais et un mode de vie tranquille et traditionnel.",
      ar: "أنت الصديق اللي الكل يلجأ له عشان يهرب من الدراما. تقدر الوقت الجميل، الهواء النقي، والحياة التقليدية الهادئة."
    },
    vibe_tag: {
      en: "Thermal springs and lush green valleys",
      fr: "Sources thermales et vallées verdoyantes",
      ar: "ينابيع حارة ووديان خضراء"
    },
    image: "assets/wilayas/20-Sa_da.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  skikda: {
    name: "Skikda",
    demonym: "SKIKDAISE",
    emoji: "⚓🌊",
    tagline: {
      en: "Industrial grit meets beautiful turquoise shores.",
      fr: "Rugosité industrielle rencontre rives turquoises.",
      ar: "خشونة صناعية تلتقي بشواطئ فيروزية."
    },
    description: {
      en: "You’ve got a tough exterior but a soft spot for beauty. You’re hardworking and practical, but never say no to a sunset at the beach.",
      fr: "T'as une carapace dure mais un faible pour la beauté. T'es travailleur et pragmatique, mais tu ne dis jamais non à un coucher de soleil à la plage.",
      ar: "عندك قشرة قاسية لكن قلبك رقيق. أنت مجتهد وعملي، لكن أبدًا ما ترفض غروب على البحر."
    },
    vibe_tag: {
      en: "Azure waves and seaside serenity",
      fr: "Vagues d'azur et sérénité au bord de mer",
      ar: "أمواج زرقاء وسكينة بحرية"
    },
    image: "assets/wilayas/21-Skikda.jpg",
    tags: {
      coastal: 3,
      mountain: 1,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  sidi_bel_abb_s: {
    name: "Sidi Bel Abbès",
    demonym: "SIDI BEL ABBÉSIENNE",
    emoji: "🏛️🎓",
    tagline: {
      en: "Historic plains city with major brain power.",
      fr: "Ville de plaines historiques avec un gros cerveau.",
      ar: "مدينة السهول التاريخية والعقل الكبير."
    },
    description: {
      en: "You’re a mix of old-school history and modern student life. You’re smart, steady, and have a unique perspective on where you come from.",
      fr: "T'es un mélange d'histoire classique et de vie étudiante moderne. T'es intelligent, posé, et t'as une perspective unique sur tes origines.",
      ar: "أنت مزيج من التاريخ العريق والحيوية الطلابية. ذكي، متزن، وعندك نظرة فريدة لأصلك."
    },
    vibe_tag: {
      en: "Modern energy meets classic desert charm",
      fr: "Énergie moderne rencontre le charme classique du désert",
      ar: "طاقة عصرية تلتقي بسحر الصحراء الكلاسيكي"
    },
    image: "assets/wilayas/22-Sidi_Bel_Abb_s.jpg",
    tags: {
      mountain: 1,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      modern: 1,
      local: 3
    }
  },
  annaba: {
    name: "Annaba",
    demonym: "ANNABAISE",
    emoji: "🌊🏛️",
    tagline: {
      en: "Classic Mediterranean vibes with a historic edge.",
      fr: "Ambiance méditerranéenne classique avec une touche d'histoire.",
      ar: "أجواء متوسطية كلاسيكية بطابع تاريخي."
    },
    description: {
      en: "You’re charming, historic, and effortlessly cool. You love a balance of beach days, late-night cafes, and hanging out with your favorite people.",
      fr: "T'es charmant, historique, et naturellement cool. Tu aimes l'équilibre entre les journées à la plage, les cafés tardifs et les sorties avec tes gens.",
      ar: "أنت ساحر، تاريخي، ورايق بطبعه. تحب التوازن بين شاطئ البحر، قهوة المساء، وقعدات الأحباب."
    },
    vibe_tag: {
      en: "The pearl of the Mediterranean coast",
      fr: "La perle de la côte méditerranéenne",
      ar: "لؤلؤة الساحل المتوسطي"
    },
    image: "assets/wilayas/23-Annaba.jpg",
    tags: {
      coastal: 3,
      mountain: 1,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      modern: 1,
      local: 1,
      touristy: 2
    }
  },
  guelma: {
    name: "Guelma",
    demonym: "GUELMIENNE",
    emoji: "♨️🌿",
    tagline: {
      en: "Thermal spa vibes for the ultimate relaxer.",
      fr: "Ambiance spa thermal pour le relaxateur ultime.",
      ar: "أجواء حمامات معدنية للاسترخاء التام."
    },
    description: {
      en: "You are all about self-care and finding your zen. You’re low-key obsessed with wellness and love exploring nature at your own pace.",
      fr: "T'es tout sur le bien-être et la recherche de ton zen. T'es discrètement obsédé par le wellness et tu adores explorer la nature à ton rythme.",
      ar: "أنت كل شيء عن العناية بالنفس والبحث عن السلام الداخلي. مهتم بالصحة والطبيعة وتمشّي على مهلك."
    },
    vibe_tag: {
      en: "Rolling hills and ancient thermal baths",
      fr: "Collines ondulantes et thermes antiques",
      ar: "تلال متموجة وحمامات قديمة"
    },
    image: "assets/wilayas/24-Guelma.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 1,
      local: 3,
      touristy: 1
    }
  },
  constantine: {
    name: "Constantine",
    demonym: "CONSTANTINOISE",
    emoji: "🌉🎓",
    tagline: {
      en: "Living life on the edge, literally.",
      fr: "Vivre la vie sur le bord du gouffre, littéralement.",
      ar: "عيش الحياة على الحافة، حرفيًا."
    },
    description: {
      en: "You are the intellectual powerhouse with a flair for the dramatic. You love deep convos, iconic views, and being the center of the cultural scene.",
      fr: "T'es le génie intellectuel avec un flair pour le dramatique. Tu kiffes les conversations profondes, les vues iconiques et être au centre de la scène culturelle.",
      ar: "أنت العبقري المثقف ذو الحس الدرامي. تحب النقاشات العميقة، المناظر الخلابة، وكونك مركز المشهد الثقافي."
    },
    vibe_tag: {
      en: "Suspended bridges over history's canyon",
      fr: "Ponts suspendus au-dessus du canyon de l'histoire",
      ar: "جسور معلقة فوق وادي التاريخ"
    },
    image: "assets/wilayas/25-Constantine.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 2,
      chill: 1,
      urban: 3,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 2,
      local: 1,
      touristy: 2
    }
  },
  m_d_a: {
    name: "Médéa",
    demonym: "MÉDÉENNE",
    emoji: "🍎⛰️",
    tagline: {
      en: "Lowkey vibes and mountain air.",
      fr: "Ambiances discrètes et air pur de la montagne.",
      ar: "أجواء هادئة وهواء جبلي نقي."
    },
    description: {
      en: "You're the friend who prefers a cozy weekend over a wild party. You appreciate the simple things like good food and peaceful mountain views.",
      fr: "T'es l'ami qui préfère un week-end cosy à une fête déchaînée. Tu apprécies les choses simples comme la bonne bouffe et les vues paisibles sur la montagne.",
      ar: "أنت الصديق اللي يفضل عطلة نهاية أسبوع هادئة على حفلة صاخبة. تقدر الأشياء البسيطة مثل الأكل الجيد ومناظر الجبال."
    },
    vibe_tag: {
      en: "Mountain vineyards and historical charm",
      fr: "Vignobles de montagne et charme historique",
      ar: "كروم جبلية وسحر تاريخي"
    },
    image: "assets/wilayas/26-M_d_a.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  mostaganem: {
    name: "Mostaganem",
    demonym: "MOSTAGANÉMOISE",
    emoji: "🌊⛵",
    tagline: {
      en: "Sun, sand, and coastal chill.",
      fr: "Soleil, sable et chill côtier.",
      ar: "شمس، رمل، واسترخاء ساحلي."
    },
    description: {
      en: "You are all about that effortless Mediterranean lifestyle. You love the ocean breeze and keeping things relaxed while enjoying your daily routine.",
      fr: "T'es tout sur ce style de vie méditerranéen sans effort. Tu kiffes la brise de l'océan et garder les choses relax tout en profitant de ton quotidien.",
      ar: "أنت كل شيء عن نمط الحياة المتوسطي السهل. تحب نسيم البحر وتبقي الأمور رايقة في روتينك اليومي."
    },
    vibe_tag: {
      en: "Sun-drenched shores and golden sands",
      fr: "Rivages ensoleillés et sables dorés",
      ar: "شواطئ مشمسة ورمال ذهبية"
    },
    image: "assets/wilayas/27-Mostaganem.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 1,
      chill: 3,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  m_sila: {
    name: "M'Sila",
    demonym: "MSILIENNE",
    emoji: "🌾🌤️",
    tagline: {
      en: "The quiet achiever of the plains.",
      fr: "Le bosseur discret des plaines.",
      ar: "المجتهد الهادئ في السهول."
    },
    description: {
      en: "You’re steady, reliable, and always evolving. You don't need the spotlight to get things done, and you're perfectly happy in your own space.",
      fr: "T'es stable, fiable et toujours en évolution. T'as pas besoin des projecteurs pour faire avancer les choses, et t'es parfaitement heureux dans ton coin.",
      ar: "أنت ثابت، موثوق، ودايمًا في تطور. ما تحتش الأضواء عشان تنجز، وأنت مبسوط في ركنك."
    },
    vibe_tag: {
      en: "Heart of the plains, golden energy",
      fr: "Cœur des plaines, énergie dorée",
      ar: "قلب السهول، طاقة ذهبية"
    },
    image: "assets/wilayas/28-M_Sila.jpg",
    tags: {
      desert: 1,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 3,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  mascara: {
    name: "Mascara",
    demonym: "MASCARAISE",
    emoji: "🍇📜",
    tagline: {
      en: "Rooted in history, rich in soul.",
      fr: "Enraciné dans l'histoire, riche en âme.",
      ar: "متجذر في التاريخ، غني بالروح."
    },
    description: {
      en: "You have a deep respect for your roots and a strong personality. You’re proud, historic, and carry a certain timeless wisdom with you.",
      fr: "T'as un profond respect pour tes racines et une forte personnalité. T'es fier, historique, et tu portes une sagesse intemporelle.",
      ar: "عندك احترام عميق لأصلك وشخصية قوية. أنت فخور، تاريخي، وتحمل حكمة لا تموت."
    },
    vibe_tag: {
      en: "Vineyards and ancient warrior spirit",
      fr: "Vignobles et esprit guerrier antique",
      ar: "كروم عنب وروح محارب قديم"
    },
    image: "assets/wilayas/29-Mascara.jpg",
    tags: {
      mountain: 2,
      temperate: 1,
      chill: 2,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 3
    }
  },
  ouargla: {
    name: "Ouargla",
    demonym: "OUARGLIENNE",
    emoji: "🌵🔥",
    tagline: {
      en: "Sahara heat with city beats.",
      fr: "Chaleur du Sahara avec du rythme citadin.",
      ar: "حر الصحراء بإيقاع المدينة."
    },
    description: {
      en: "You’re ambitious and thrive in high-energy environments. You love blending ancient traditions with a modern, fast-paced professional life.",
      fr: "T'es ambitieux et tu prospères dans les environnements à haute énergie. Tu aimes mélanger les traditions anciennes avec une vie professionnelle moderne et rapide.",
      ar: "أنت طموح وتزدهر في البيئات عالية الطاقة. تحب المزج بين التقاليد العريقة والحياة العصرية السريعة."
    },
    vibe_tag: {
      en: "Gateway to the golden desert sands",
      fr: "Porte vers les sables dorés du désert",
      ar: "بوابة رمال الصحراء الذهبية"
    },
    image: "assets/wilayas/30-Ouargla.jpg",
    tags: {
      desert: 3,
      fast: 3,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  oran: {
    name: "Oran",
    demonym: "ORANAISE",
    emoji: "💃🎶",
    tagline: {
      en: "The life of the party, always.",
      fr: "Toujours l'âme de la fête.",
      ar: "روح الحفلة، دايمًا."
    },
    description: {
      en: "You are the definition of cosmopolitan. With your love for music, nightlife, and social scenes, you’re the friend everyone invites to the main event.",
      fr: "T'es la définition du cosmopolite. Avec ton amour de la musique, de la nightlife et des scenes sociales, t'es l'ami que tout le monde invite au meilleur event.",
      ar: "أنت تعريف العصرية. بحبك للموسيقى والحياة الليلية والأجواء الاجتماعية، أنت الصديق اللي الكل يعزمه على أهم حدث."
    },
    vibe_tag: {
      en: "Radiating coastal energy and sunny vibes",
      fr: "Énergie côtière éclatante et vibes ensoleillées",
      ar: "طاقة ساحلية متألقة وأجواء مشمسة"
    },
    image: "assets/wilayas/31-Oran.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 3,
      urban: 3,
      nightlife: 3,
      low_budget: 1,
      mid_budget: 2,
      historic: 1,
      modern: 3,
      local: 1,
      touristy: 3
    }
  },
  el_bayadh: {
    name: "El Bayadh",
    demonym: "EL BAYADIENNE",
    emoji: "🐏🏜️",
    tagline: {
      en: "Gateway to the vast desert horizon.",
      fr: "Porte vers l'horizon infini du désert.",
      ar: "بوابة أفق الصحراء الممتد."
    },
    description: {
      en: "You’re a bit of a mystery who values tradition and the open road. You’re grounded and keep things real, always looking toward the next adventure.",
      fr: "T'es un peu mystérieux et tu valorises la tradition et la route ouverte. T'es terre-à-terre et tu restes authentique, toujours tourné vers la prochaine aventure.",
      ar: "أنت غامض بعض الشيء، تقدر التقاليد والطريق المفتوح. أنت متواضع وصادق، ودايمًا تتطلع للمغامرة القادمة."
    },
    vibe_tag: {
      en: "High plateau winds and open skies",
      fr: "Vents des hauts plateaux et cieux ouverts",
      ar: "رياح الهضاب وسماء مفتوحة"
    },
    image: "assets/wilayas/32-El_Bayadh.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      chill: 2,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  illizi: {
    name: "Illizi",
    demonym: "ILLIZIENNE",
    emoji: "🎨✨",
    tagline: {
      en: "Ancient art, endless desert magic.",
      fr: "Art ancien, magie infinie du désert.",
      ar: "فن قديم، سحر صحراوي لا نهائي."
    },
    description: {
      en: "You are a total explorer with a soul for discovery. You prefer breathtaking landscapes and quiet, profound connections over city noise.",
      fr: "T'es un vrai explorateur avec une âme de découverte. Tu préfères les paysages à couper le souffle et les connexions profondes et silencieuses au bruit de la ville.",
      ar: "أنت مستكشف حقيقي بروح المغامرة. تفضل المناظر الخلابة والعلاقات العميقة الهادئة على ضوضاء المدينة."
    },
    vibe_tag: {
      en: "Gateway to the Tassili wonders",
      fr: "Porte vers les merveilles du Tassili",
      ar: "بوابة عجائب الطاسيلي"
    },
    image: "assets/wilayas/33-Illizi.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 2,
      touristy: 2
    }
  },
  bordj_bou_arr_ridj: {
    name: "Bordj Bou Arréridj",
    demonym: "BORDJIENNE",
    emoji: "📱🏗️",
    tagline: {
      en: "Innovating the future, one step ahead.",
      fr: "Innover le futur, une longueur d'avance.",
      ar: "ابتكار المستقبل، خطوة للأمام."
    },
    description: {
      en: "You’re tech-savvy, fast-moving, and always working on a new project. You’re the friend who’s always got the latest gadget and big plans.",
      fr: "T'es calé en tech, rapide et toujours sur un nouveau projet. T'es le pote qui a toujours le dernier gadget et de grands projets.",
      ar: "أنت تقني، سريع، ودايمًا على مشروع جديد. أنت الصديق اللي عنده آخر إصدار وأكبر الخطط."
    },
    vibe_tag: {
      en: "Crafting excellence in the highlands",
      fr: "L'excellence artisanale dans les hauteurs",
      ar: "إتقان حرفي في المرتفعات"
    },
    image: "assets/wilayas/34-Bordj_Bou_Arr_ridj.jpg",
    tags: {
      mountain: 1,
      temperate: 1,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      modern: 3,
      local: 2
    }
  },
  boumerd_s: {
    name: "Boumerdès",
    demonym: "BOUMERDÉSIENNE",
    emoji: "🎓🌊",
    tagline: {
      en: "Student life by the seaside.",
      fr: "Vie étudiante au bord de la mer.",
      ar: "حياة طلابية على شاطئ البحر."
    },
    description: {
      en: "You’re the perfect balance of student energy and coastal chill. You love being close to the action while keeping your life balanced and fun.",
      fr: "T'es l'équilibre parfait entre l'énergie étudiante et le chill côtier. Tu aimes être près de l'action tout en gardant ta vie équilibrée et fun.",
      ar: "أنت التوازن المثالي بين حيوية الطالب واسترخاء البحر. تحب تكون قريب من الحركة مع الحفاظ على حياة متزنة وممتعة."
    },
    vibe_tag: {
      en: "Where the sea kisses the forest",
      fr: "Là où la mer embrasse la forêt",
      ar: "حيث يعانق البحر الغابة"
    },
    image: "assets/wilayas/35-Boumerd_s.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  el_tarf: {
    name: "El Tarf",
    demonym: "EL TARFIENNE",
    emoji: "🌲🦌",
    tagline: {
      en: "Nature’s hidden gem, stay wild.",
      fr: "Le joyau caché de la nature, reste sauvage.",
      ar: "جوهرة الطبيعة المخفية، ابقَ وحشيًا."
    },
    description: {
      en: "You’re the ultimate nature lover who finds peace in forests and lakes. You’re quiet, observant, and prefer a hike over a city street.",
      fr: "T'es l'amoureux ultime de la nature qui trouve la paix dans les forêts et les lacs. T'es calme, observateur, et tu préfères une randonnée à une rue bondée.",
      ar: "أنت محب الطبيعة الأصيل، تجد السلام في الغابات والبحيرات. هادئ، ملاحظ، وتفضل المشي في الطبيعة على زحام المدينة."
    },
    vibe_tag: {
      en: "Wild nature and hidden coastal gems",
      fr: "Nature sauvage et trésors côtiers cachés",
      ar: "طبيعة برية وجواهر ساحلية مخفية"
    },
    image: "assets/wilayas/36-El_Tarf.jpg",
    tags: {
      coastal: 2,
      temperate: 3,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 3,
      local: 3,
      touristy: 1
    }
  },
  tindouf: {
    name: "Tindouf",
    demonym: "TINDOUFIENNE",
    emoji: "🌵☀️",
    tagline: {
      en: "Tindouf: The ultimate rugged desert explorer.",
      fr: "L'explorateur ultime du désert sauvage.",
      ar: "المستكشف الصحراوي الأقوى."
    },
    description: {
      en: "You are the definition of resilient and mysterious. You thrive in the deep silence of the Sahara where the stars are your only company.",
      fr: "T'es la définition de la résilience et du mystère. Tu prospères dans le silence profond du Sahara où les étoiles sont ta seule compagnie.",
      ar: "أنت تعريف الصمود والغموض. تزدهر في صمت الصحراء العميق حيث النجوم هي رفيقك الوحيد."
    },
    vibe_tag: {
      en: "Desert solitude under endless stars",
      fr: "Solitude désertique sous des étoiles infinies",
      ar: "عزلة صحراوية تحت نجوم لا متناهية"
    },
    image: "assets/wilayas/37-Tindouf.jpg",
    tags: {desert:3,chill:3,traditional:2,family:1,low_budget:3,historic:1,local:3}
  },
  tissemsilt: {
    name: "Tissemsilt",
    demonym: "TISSEMSILTIENNE",
    emoji: "🏔️🧥",
    tagline: {
      en: "Tissemsilt: Your cozy mountain escape.",
      fr: "Ton refuge cosy à la montagne.",
      ar: "ملاذك الجبلي الدافئ."
    },
    description: {
      en: "You’re all about those quiet, slow-paced vibes. You love a good sweater, a hot drink, and keeping things super low-key.",
      fr: "T'es tout sur ces vibes tranquilles et au ralenti. Tu kiffes un bon pull, une boisson chaude, et garder les choses super low-key.",
      ar: "أنت كل شيء عن الأجواء الهادئة البطيئة. تحب كنزة دافئة، مشروب ساخن، وتبقي الأمور منخفضة البروفايل."
    },
    vibe_tag: {
      en: "Quiet plains and rugged mountain paths",
      fr: "Plaines paisibles et sentiers montagneux escarpés",
      ar: "سهول هادئة ومسارات جبلية وعرة"
    },
    image: "assets/wilayas/38-Tissemsilt.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      local: 3
    }
  },
  el_oued: {
    name: "El Oued",
    demonym: "EL OUEDIENNE",
    emoji: "🕌🌴",
    tagline: {
      en: "El Oued: The aesthetic dome-dwelling dreamer.",
      fr: "Le rêveur esthétique aux dômes iconiques.",
      ar: "الحالم ذو القباب الأيقونية."
    },
    description: {
      en: "You have an eye for unique architecture and love the desert heat. You're deeply connected to your roots and the sweet taste of home.",
      fr: "T'as un œil pour l'architecture unique et tu aimes la chaleur du désert. T'es profondément connecté à tes racines et au goût sucré de la maison.",
      ar: "عندك ذوق معماري فريد وتحب حر الصحراء. أنت مرتبط بجذورك وطعم البيت الحلو."
    },
    vibe_tag: {
      en: "City of a thousand domes, sandy",
      fr: "Ville aux mille dômes, sableuse et majestueuse",
      ar: "مدينة الألف قبة، رملية ومهيبة"
    },
    image: "assets/wilayas/39-El_Oued.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      local: 3,
      touristy: 1
    }
  },
  khenchela: {
    name: "Khenchela",
    demonym: "KHENCHELIENNE",
    emoji: "❄️🏔️",
    tagline: {
      en: "Khenchela: Fierce, cold, and totally authentic.",
      fr: "Féroce, froid et totalement authentique.",
      ar: "شجاع، بارد، وأصيل للغاية."
    },
    description: {
      en: "You’re proud of your heritage and you don’t let the cold weather stop you. You’re tough, loyal, and love being surrounded by nature.",
      fr: "T'es fier de ton héritage et le froid ne t'arrête pas. T'es dur, loyal et tu aimes être entouré par la nature.",
      ar: "أنت فخور بتراثك والبرد ما يوقفكش. أنت قوي، وفي، وتحب تكون وسط الطبيعة."
    },
    vibe_tag: {
      en: "Rugged cliffs and ancient Berber roots",
      fr: "Falaises escarpées et racines berbères anciennes",
      ar: "منحدرات وعرة وجذور أمازيغية قديمة"
    },
    image: "assets/wilayas/40-Khenchela.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 2,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  souk_ahras: {
    name: "Souk Ahras",
    demonym: "SOUK AHRASSIENNE",
    emoji: "🏛️🌲",
    tagline: {
      en: "Souk Ahras: A historic soul in the mountains.",
      fr: "Une âme historique dans les montagnes.",
      ar: "روح تاريخية في الجبال."
    },
    description: {
      en: "You’re an old soul who loves stories from the past. Living near the border, you’re always curious about the world beyond.",
      fr: "T'es une vieille âme qui aime les histoires du passé. Vivant près de la frontière, t'es toujours curieux du monde au-delà.",
      ar: "أنت روح قديمة تحب قصص الماضي. تعيش قرب الحدود، ودايمًا فضولي لمعرفة ما وراءها."
    },
    vibe_tag: {
      en: "Olive groves and historical crossroads",
      fr: "Oliveraies et carrefour historique",
      ar: "بساتين زيتون وتقاطع طرق تاريخي"
    },
    image: "assets/wilayas/41-Souk_Ahras.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 2,
      touristy: 1
    }
  },
  tipaza: {
    name: "Tipaza",
    demonym: "TIPAZIENNE",
    emoji: "🌊🏛️",
    tagline: {
      en: "Tipaza: Sun, sea, and ancient vibes.",
      fr: "Soleil, mer et ambiances antiques.",
      ar: "شمس، بحر، وأجواء تاريخية."
    },
    description: {
      en: "You live for the golden hour and beach days. You’re a total tourist magnet because your aesthetic is literally legendary.",
      fr: "Tu vis pour l'heure dorée et les journées à la plage. T'es un aimant à touristes parce que ton esthétique est littéralement légendaire.",
      ar: "أنت تعيش للساعة الذهبية وأيام البحر. أنت مغناطيس سياحي لأن ذوقك الجمالي أسطوري."
    },
    vibe_tag: {
      en: "Roman ruins by the turquoise sea",
      fr: "Ruines romaines au bord de la mer turquoise",
      ar: "آثار رومانية على البحر الفيروزي"
    },
    image: "assets/wilayas/42-Tipaza.jpg",
    tags: {
      coastal: 3,
      mountain: 1,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 1,
      traditional: 1,
      nightlife: 2,
      family: 1,
      mid_budget: 3,
      historic: 3,
      modern: 1,
      touristy: 3
    }
  },
  mila: {
    name: "Mila",
    demonym: "MILIENNE",
    emoji: "🏺✨",
    tagline: {
      en: "Mila: Quiet, classy, and timeless.",
      fr: "Calme, classe, et intemporel.",
      ar: "هادئ، راقي، وخالد."
    },
    description: {
      en: "You’re low-maintenance but deeply fascinating. You’re the friend everyone goes to when they need a calm, thoughtful conversation.",
      fr: "T'es discret mais profondément fascinant. T'es l'ami vers qui tout le monde se tourne pour une conversation calme et réfléchie.",
      ar: "أنت متواضع ولكن رائع. أنت الصديق اللي الكل يلجأ له عشان نقاش هادئ وعميق."
    },
    vibe_tag: {
      en: "Ancient walls and deep valley secrets",
      fr: "Murs antiques et secrets des vallées profondes",
      ar: "جدران قديمة وأسرار الوديان العميقة"
    },
    image: "assets/wilayas/43-Mila.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 3
    }
  },
  a_n_defla: {
    name: "Aïn Defla",
    demonym: "AÏN DEFLIENNE",
    emoji: "🌾🚜",
    tagline: {
      en: "Aïn Defla: The grounded, chill agricultural pro.",
      fr: "Le pro de l'agriculture, posé et terre-à-terre.",
      ar: "محترف الفلاحة، هادئ ومتواضع."
    },
    description: {
      en: "You’re balanced and down-to-earth. You enjoy the simple life and know exactly how to make things grow and thrive.",
      fr: "T'es équilibré et les pieds sur terre. Tu aimes la vie simple et tu sais exactement comment faire pousser et prospérer les choses.",
      ar: "أنت متوازن ومتواضع. تحب الحياة البسيطة وتعرف بالضبط كيف تزرع وتنمي."
    },
    vibe_tag: {
      en: "Orchards, mountains, and peaceful charm",
      fr: "Vergers, montagnes et charme paisible",
      ar: "بساتين، جبال، وسحر هادئ"
    },
    image: "assets/wilayas/44-A_n_Defla.jpg",
    tags: {
      mountain: 1,
      temperate: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      modern: 1,
      local: 3
    }
  },
  na_ma: {
    name: "Naâma",
    demonym: "NAÂMIENNE",
    emoji: "🌅🐑",
    tagline: {
      en: "Naâma: Steppe vibes and wild horizons.",
      fr: "Vibes de steppe et horizons sauvages.",
      ar: "أجواء السهوب وآفاق برية."
    },
    description: {
      en: "You’re a free spirit who loves open spaces. You’re a bit of an outsider, but that’s exactly what makes you so cool.",
      fr: "T'es un esprit libre qui aime les espaces ouverts. T'es un peu à part, mais c'est exactement ce qui te rend si cool.",
      ar: "أنت روح حرة تحب الفضاءات المفتوحة. أنت منعزل بعض الشيء، لكن هذا بالضبط ما يخليك رايق."
    },
    vibe_tag: {
      en: "Desert dunes and sunset horizons",
      fr: "Dunes du désert et horizons de coucher de soleil",
      ar: "كثبان رملية وآفاق غروب"
    },
    image: "assets/wilayas/45-Na_ma.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      temperate: 1,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 3,
      local: 3
    }
  },
  a_n_t_mouchent: {
    name: "Aïn Témouchent",
    demonym: "AÏN TÉMOUCHENTIENNE",
    emoji: "🍇🏖️",
    tagline: {
      en: "Aïn Témouchent: Coastal chic and vineyard dreams.",
      fr: "Chic côtier et rêves viticoles.",
      ar: "أناقة ساحلية وأحلام الكروم."
    },
    description: {
      en: "You’re sophisticated, relaxed, and definitely the one with the best taste. You know how to enjoy the finer things without overdoing it.",
      fr: "T'es sophistiqué, relax et clairement celui avec le meilleur goût. Tu sais profiter des belles choses sans en faire trop.",
      ar: "أنت راقي، مسترخي، وبأحسن ذوق. تعرف تستمتع بالأشياء الجميلة بدون مبالغة."
    },
    vibe_tag: {
      en: "Coastal beauty and sun-kissed shores",
      fr: "Beauté côtière et rivages ensoleillés",
      ar: "جمال ساحلي وشواطئ مشمسة"
    },
    image: "assets/wilayas/46-A_n_T_mouchent.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  gharda_a: {
    name: "Ghardaïa",
    demonym: "GHARDAÏENNE",
    emoji: "🧿🏜️",
    tagline: {
      en: "Ghardaïa: Iconic, spiritual, and totally unique.",
      fr: "Iconique, spirituel et totalement unique.",
      ar: "أيقوني، روحاني، وفريد تمامًا."
    },
    description: {
      en: "You’re one of a kind and everyone knows it. You take pride in your traditions and have a style that nobody can replicate.",
      fr: "T'es unique et tout le monde le sait. T'es fier de tes traditions et t'as un style que personne ne peut copier.",
      ar: "أنت فريد والكل يعرف ذلك. أنت فخور بتقاليدك وعندك ستايل ما يقدر أحد يقلده."
    },
    vibe_tag: {
      en: "Geometric wonders in the desert sun",
      fr: "Merveilles géométriques sous le soleil du désert",
      ar: "عجائب هندسية تحت شمس الصحراء"
    },
    image: "assets/wilayas/47-Gharda_a.jpg",
    tags: {
      desert: 3,
      chill: 3,
      urban: 1,
      traditional: 3,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 2,
      touristy: 2
    }
  },
  relizane: {
    name: "Relizane",
    demonym: "RELIZANIENNE",
    emoji: "🌱⚡",
    tagline: {
      en: "Relizane: Growing fast and staying real.",
      fr: "Grandir vite et rester authentique.",
      ar: "تنمو بسرعة وتبقى أصيلاً."
    },
    description: {
      en: "You’re ambitious and always on the move. You’re building your future while staying connected to your roots in the plains.",
      fr: "T'es ambitieux et toujours en mouvement. Tu construis ton futur tout en restant connecté à tes racines dans les plaines.",
      ar: "أنت طموح ودايمًا في الحركة. تبني مستقبلك وأنت مرتبط بجذورك في السهول."
    },
    vibe_tag: {
      en: "Fertile lands and agricultural heart",
      fr: "Terres fertiles et cœur agricole",
      ar: "أراضٍ خصبة وقلب فلاحي"
    },
    image: "assets/wilayas/48-Relizane.jpg",
    tags: {
      temperate: 3,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 3
    }
  },
  timimoun: {
    name: "Timimoun",
    demonym: "TIMIMOUNIENNE",
    emoji: "🏜️✨",
    tagline: "The red oasis where aesthetic dreams live.",
    description: "You are the main character of a desert indie film. With your stunning red mud-brick aesthetic and chill vibes, you turn every sunset into a core memory.",
    vibe_tag: "Red oasis dreams in golden sands",
    image: "assets/wilayas/49-Timimoun.jpg",
    tags: {
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 3,
      local: 1,
      touristy: 2
    }
  },
  bordj_badji_mokhtar: {
    name: "Bordj Badji Mokhtar",
    demonym: "BORDJ BADJI MOKHTARIENNE",
    emoji: "📍🔥",
    tagline: "The ultimate frontier vibe for true explorers.",
    description: "You are mysterious, resilient, and totally off the grid. You thrive where the map ends and the real adventure begins.",
    vibe_tag: "Deep desert silence and starlit skies",
    image: "assets/wilayas/50-Bordj_Badji_Mokhtar.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  ouled_djellal: {
    name: "Ouled Djellal",
    demonym: "OULED DJELLALIENNE",
    emoji: "🌴☀️",
    tagline: "Keepin' it real in the golden palms.",
    description: "You are grounded, hardworking, and deeply connected to your roots. Life is simple, sweet, and centered around family gatherings.",
    vibe_tag: "Rising oasis in the vast desert",
    image: "assets/wilayas/51-Ouled_Djellal.jpg",
    tags: {desert:3,chill:3,traditional:3,family:3,low_budget:3,historic:2,local:3}
  },
  b_ni_abb_s: {
    name: "Béni Abbès",
    demonym: "BÉNI ABBÉSIENNE",
    emoji: "🏰🤍",
    tagline: "A white oasis straight out of Pinterest.",
    description: "You are the aesthetic friend who knows all the best photo spots. You keep things classy and serene, perfect for a peaceful getaway.",
    vibe_tag: "Gateway to the infinite Sahara sands",
    image: "assets/wilayas/52-B_ni_Abb_s.jpg",
    tags: {
      desert: 3,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 1,
      local: 1,
      touristy: 2
    }
  },
  in_salah: {
    name: "In Salah",
    demonym: "IN SALAHIENNE",
    emoji: "⛽🌵",
    tagline: "Built different in the heart of heat.",
    description: "You are a powerhouse of energy and industry. Tough, resilient, and always focused on the bigger picture, you don't let the heat slow you down.",
    vibe_tag: "Where the desert meets the sky",
    image: "assets/wilayas/53-In_Salah.jpg",
    tags: {
      desert: 3,
      fast: 2,
      chill: 1,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 3
    }
  },
  in_guezzam: {
    name: "In Guezzam",
    demonym: "IN GUEZZAMIENNE",
    emoji: "🌍🐫",
    tagline: "The desert nomad with a global soul.",
    description: "You are the ultimate bridge between worlds. Cultural, open-minded, and always on the move, you represent the true spirit of the Sahara.",
    vibe_tag: "Borderland spirit in the deep south",
    image: "assets/wilayas/54-In_Guezzam.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  touggourt: {
    name: "Touggourt",
    demonym: "TOUGGOURTIENNE",
    emoji: "🌴🏙️",
    tagline: "Huge oasis energy, low key vibes.",
    description: "You are the bustling heartbeat of the palm groves. You have a little bit of everything and always make everyone feel right at home.",
    vibe_tag: "Palm groves and desert hospitality",
    image: "assets/wilayas/55-Touggourt.jpg",
    tags: {
      desert: 3,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  djanet: {
    name: "Djanet",
    demonym: "DJANETIENNE",
    emoji: "🎨✨",
    tagline: "UNESCO vibes and bucket-list views.",
    description: "You are breathtaking and iconic. People travel from all over just to catch a glimpse of your legendary natural beauty.",
    vibe_tag: "Tassili dreams and lunar landscapes",
    image: "assets/wilayas/56-Djanet.jpg",
    tags: {
      desert: 3,
      chill: 3,
      traditional: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 1,
      touristy: 3
    }
  },
  el_meghaier: {
    name: "El Meghaier",
    demonym: "EL MEGHAIERIENNE",
    emoji: "🌙🌾",
    tagline: "Cool, calm, and collected in the dunes.",
    description: "You are the definition of 'low-key.' You don't need a crowd to be happy—just good dates and quiet desert nights.",
    vibe_tag: "Oasis life in the golden dunes",
    image: "assets/wilayas/57-El_Meghaier.jpg",
    tags: {desert:3,chill:3,traditional:3,family:3,low_budget:3,historic:1,local:3}
  },
  el_meniaa: {
    name: "El Meniaa",
    demonym: "EL MENIAÏENNE",
    emoji: "📍⚖️",
    tagline: "The perfect crossroads for your next chapter.",
    description: "You are the ultimate connector. You bridge the north and south, balancing tradition with a forward-looking mindset.",
    vibe_tag: "Ancient paths in the desert heart",
    image: "assets/wilayas/58-El_Meniaa.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 1,
      local: 2,
      touristy: 1
    }
  },
  aflou: {
    name: "Aflou",
    demonym: "AFLOUIENNE",
    emoji: "🏔️❄️",
    tagline: "Mountain air and cozy sweater vibes.",
    description: "You are the refreshing escape from the heat. You love high altitudes, snowy winters, and a cozy, traditional mountain lifestyle.",
    vibe_tag: "Highland winds and steppe adventures",
    image: "assets/wilayas/59-Aflou.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  barika: {
    name: "Barika",
    demonym: "BARIKIENNE",
    emoji: "🌾🏠",
    tagline: "Keeping it steady on the plains.",
    description: "You are reliable and down-to-earth. You represent the hardworking spirit of the plains, where life is steady and community comes first.",
    vibe_tag: "Heart of the plains, vibrant spirit",
    image: "assets/wilayas/60-Barika.jpg",
    tags: {
      temperate: 3,
      chill: 3,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 3,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  ksar_chellala: {
    name: "Ksar Chellala",
    demonym: "KSAR CHELLALIENNE",
    emoji: "🧶✨",
    tagline: "The quiet soul of the high plains.",
    description: "You are the definition of low-key and authentic. You love keeping things traditional and appreciate the slow, steady rhythm of life away from the big city noise.",
    vibe_tag: "Desert gateway and historical charm",
    image: null,
    tags: {temperate:2,chill:3,traditional:3,family:2,low_budget:3,historic:2,local:3}
  },
  messaad: {
    name: "Messaad",
    demonym: "MESSAADIENNE",
    emoji: "🏜️🐪",
    tagline: "Your gateway to the vast desert horizon.",
    description: "You are grounded, resilient, and deeply connected to your roots. You’ve got a rugged spirit and prefer the wide-open spaces of the Saharan edge over anything else.",
    vibe_tag: "Steppe soul and rugged beauty",
    image: "assets/wilayas/62-Messaad.jpg",
    tags: {
      desert: 3,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 1,
      local: 2
    }
  },
  a_n_oussara: {
    name: "Aïn Oussara",
    demonym: "AÏN OUSSARIENNE",
    emoji: "🏗️📈",
    tagline: "The rising star of the plains.",
    description: "You are focused, ambitious, and always on the move. You’re building your future and don’t have time for anything that doesn't help you level up.",
    vibe_tag: "Highland energy and vast horizon",
    image: "assets/wilayas/63-A_n_Oussara.jpg",
    tags: {
      temperate: 2,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      modern: 3,
      local: 2
    }
  },
  boussa_da: {
    name: "Boussaâda",
    demonym: "BOUSSAÂDIENNE",
    emoji: "🎨✨",
    tagline: "Where art and desert magic collide.",
    description: "You’re an absolute creative soul with a poetic vibe. You love beautiful things, hidden gems, and the kind of aesthetic that looks perfect on your feed.",
    vibe_tag: "Gateway to the Sahara's golden gate",
    image: "assets/wilayas/64-Boussa_da.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 1,
      local: 1,
      touristy: 3
    }
  },
  el_abiodh_sidi_cheikh: {
    name: "El Abiodh Sidi Cheikh",
    demonym: "EL ABIODHIENNE",
    emoji: "🕌💫",
    tagline: "Keep it sacred, keep it real.",
    description: "You have a deep respect for history and traditions that have lasted for centuries. You aren't into trends—you care about what actually matters.",
    vibe_tag: "Desert winds and nomadic memories",
    image: "assets/wilayas/65-El_Abiodh_Sidi_Cheikh.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 3,
      local: 3
    }
  },
  el_kantara: {
    name: "El Kantara",
    demonym: "EL KANTARIENNE",
    emoji: "🏛️📸",
    tagline: "The ultimate aesthetic transition point.",
    description: "You are the bridge between two worlds, and everyone notices your unique style. You live for epic views and documenting the beauty around you.",
    vibe_tag: "Gateway to the canyon's grand beauty",
    image: "assets/wilayas/66-El_Kantara.jpg",
    tags: {
      mountain: 2,
      desert: 1,
      temperate: 1,
      chill: 2,
      traditional: 2,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 1,
      touristy: 3
    }
  },
  bir_el_ater: {
    name: "Bir El Ater",
    demonym: "BIR EL ATERIENNE",
    emoji: "⛰️⚒️",
    tagline: "Tough, rugged, and mountain-made.",
    description: "You’re built for the grind and thrive in environments that require grit. You’re definitely not a softie, and you love being in the heart of the action.",
    vibe_tag: "Frontier spirit in the desert sun",
    image: null,
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 2,
      urban: 1,
      traditional: 1,
      nightlife: 1,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 3
    }
  },
  ksar_el_boukhari: {
    name: "Ksar El Boukhari",
    demonym: "KSAR EL BOUKHARIENNE",
    emoji: "🏔️🏘️",
    tagline: "Old school vibes in the mountains.",
    description: "You have an 'old soul' energy that people find super comforting. You love classic aesthetics, mountain air, and keeping your inner circle close.",
    vibe_tag: "Ancient trade routes and mountain air",
    image: "assets/wilayas/68-Ksar_El_Boukhari.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 2,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 2,
      historic: 3,
      local: 2,
      touristy: 1
    }
  },
  el_aricha: {
    name: "El Aricha",
    demonym: "EL ARICHIENNE",
    emoji: "🐑🌌",
    tagline: "Total main character, off the grid.",
    description: "You don't need anyone's validation to know you're cool. You prefer peace, quiet, and staying completely away from the drama of the fast lane.",
    vibe_tag: "High plateau charm and open roads",
    image: "assets/wilayas/69-El_Aricha.jpg",
    tags: {
      desert: 1,
      temperate: 2,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  }
}

const QUESTIONS = [
  {
    id: 1,
    question: "Beach or mountains?",
    options: [
      { label: "🌊 Beach", tags: { coastal: 3 } },
      { label: "🏔️ Mountains", tags: { mountain: 3 } },
    ],
  },
  {
    id: 2,
    question: "Fast-paced or chill?",
    options: [
      { label: "⚡ Fast-paced", tags: { fast: 3 } },
      { label: "🧘 Chill", tags: { chill: 3 } },
    ],
  },
  {
    id: 3,
    question: "Big city energy or small town warmth?",
    options: [
      { label: "🌆 Big city", tags: { urban: 3 } },
      { label: "🏘️ Small town", tags: { traditional: 3 } },
    ],
  },
  {
    id: 4,
    question: "Nightlife or early nights?",
    options: [
      { label: "🍸 Nightlife", tags: { nightlife: 3 } },
      { label: "🌙 Early nights", tags: { family: 3 } },
    ],
  },
  {
    id: 5,
    question: "Budget-conscious or don't care?",
    options: [
      { label: "💰 Budget-conscious", tags: { low_budget: 3 } },
      { label: "💎 Don't care", tags: { mid_budget: 3 } },
    ],
  },
  {
    id: 6,
    question: "Desert heat or four seasons?",
    options: [
      { label: "🏜️ Desert heat", tags: { desert: 3 } },
      { label: "🍂 Four seasons", tags: { temperate: 3 } },
    ],
  },
  {
    id: 7,
    question: "Historic vibes or modern life?",
    options: [
      { label: "🏛️ Historic city", tags: { historic: 3 } },
      { label: "🏗️ Modern city", tags: { modern: 3 } },
    ],
  },
  {
    id: 8,
    question: "Tourist hotspot or local secret?",
    options: [
      { label: "📸 Tourist favorite", tags: { touristy: 3 } },
      { label: "🤫 Hidden gem", tags: { local: 3 } },
    ],
  },
];

const CITIES = {
  adrar: {
    name: "Adrar",
    demonym: "ADRARIENNE",
    emoji: "🌴🔥",
    tagline: {
      en: "Living that golden oasis dream life.",
      fr: "La vie de rêve au cœur des oasis dorées.",
      ar: "عيش حلم الواحة الذهبي في وسط الكثبان."
    },
    description: {
      en: "You are the ultimate hidden gem, chilling in the middle of the dunes. You love keeping it real, traditional, and totally low-key.",
      fr: "T'es la perle rare qui kiffe le calme au milieu des dunes. Tu restes authentique, traditionnel et totalement discret — et c'est ce qui te rend unique.",
      ar: "أنت الجوهرة المخفية، تستمتع بالهدوء في وسط الكثبان الرملية. تحب البساطة، الأصالة، والحياة بعيداً عن الضوضاء."
    },
    vibe_tag: {
      en: "Golden dunes and ancient desert whispers",
      fr: "Dunes dorées et chuchotements du désert",
      ar: "كثبان ذهبية وهمس الصحراء القديم"
    },
    image: "assets/wilayas/01-Adrar.jpg",
    tags: {desert:3,chill:3,traditional:3,family:2,low_budget:3,historic:1,local:3}
  },
  chlef: {
    name: "Chlef",
    demonym: "CHLEFIENNE",
    emoji: "🍊🚜",
    tagline: {
      en: "Fresh vibes and farm-to-table energy.",
      fr: "Ambiance fraîche et énergie de la ferme à l'assiette.",
      ar: " vibes منعشة وطاقة من المزرعة للسفرة."
    },
    description: {
      en: "You are all about growth and keeping things grounded. You're a hardworking soul who values community and simple, honest living.",
      fr: "Tu es du genre à cultiver la vie et à garder les pieds sur terre. T'as l'âme d'un travailleur acharné qui croit en la communauté et la simplicité.",
      ar: "أنت إنسان طموح متجذر في أرضه، تقدر الجماعة والحياة البسيطة النقية. عندك قلب مجتهد وروح صادقة."
    },
    vibe_tag: {
      en: "Where history meets the fertile valley",
      fr: "Là où l'histoire rencontre la vallée fertile",
      ar: "حيث يلتقي التاريخ بالوادي الخصيب"
    },
    image: "assets/wilayas/02-Chlef.jpg",
    tags: {
      mountain: 1,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 3
    }
  },
  laghouat: {
    name: "Laghouat",
    demonym: "LAGHOUATIENNE",
    emoji: "🏜️✨",
    tagline: {
      en: "The gateway to your next adventure.",
      fr: "La porte d'entrée vers ta prochaine aventure.",
      ar: "بوابة مغامرتك القادمة."
    },
    description: {
      en: "You are the bridge between the city and the wild Sahara. You've got a classic soul and you're always ready for a road trip.",
      fr: "T'es le pont entre la ville et le Sahara sauvage. T'as une âme classieuse et t'es toujours partant pour un road trip improvisé.",
      ar: "أنت الجسر الذي يربط المدينة بالصحراء الواسعة. روحك كلاسيكية وحقيبتك دومًا جاهزة للرحلة."
    },
    vibe_tag: {
      en: "Gateway to the vast Saharan horizon",
      fr: "Porte vers l'horizon infini du Sahara",
      ar: "بوابة الأفق الصحراوي الممتد"
    },
    image: "assets/wilayas/03-Laghouat.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      temperate: 1,
      chill: 3,
      urban: 1,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  oum_el_bouaghi: {
    name: "Oum El Bouaghi",
    demonym: "OUM EL BOUAGHIENNE",
    emoji: "🌾☁️",
    tagline: {
      en: "Quiet, steady, and perfectly low-key.",
      fr: "Calme, posé, et parfaitement discret.",
      ar: "هادئ، متزن، ومنخفض البروفايل."
    },
    description: {
      en: "You don't need the spotlight to shine. You value your peace and quiet, and you're the most reliable friend in the group.",
      fr: "T'as pas besoin des projecteurs pour briller. Tu kiffes ta tranquillité et t'es le pote le plus fiable de la bande, celui sur qui tout le monde compte.",
      ar: "ما تحتش الأضواء عشان تلمع. أنت القدوة الهادئة، الصديق المخلص اللي الكل يعتمد عليه."
    },
    vibe_tag: {
      en: "High plateau spirit, rugged and raw",
      fr: "Esprit des hauts plateaux, brut et authentique",
      ar: "روح الهضاب العالية، أصيلة وقوية"
    },
    image: null,
    tags: {
      mountain: 1,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  batna: {
    name: "Batna",
    demonym: "BATNÉENNE",
    emoji: "🎓🏔️",
    tagline: {
      en: "Brainy, bold, and totally iconic.",
      fr: "Intello, audacieux et carrément iconique.",
      ar: "ذكي، جريء، وأيقونة بحد ذاتها."
    },
    description: {
      en: "You are a total history buff with a revolutionary spirit. You love hanging out with friends and debating the big topics.",
      fr: "T'es un passionné d'histoire avec un esprit révolutionnaire. Tu adores traîner avec les potes et débattre des grands sujets autour d'un café.",
      ar: "أنت عاشق للتاريخ بروح ثائرة. تحب الجلسات مع الأصدقاء والنقاشات العميقة عن كل شيء."
    },
    vibe_tag: {
      en: "Mountain peaks and ancient Roman echoes",
      fr: "Sommets montagneux et échos romains antiques",
      ar: "قمم جبال وأصداء رومانية عريقة"
    },
    image: "assets/wilayas/05-Batna.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      modern: 1,
      local: 2,
      touristy: 1
    }
  },
  b_ja_a: {
    name: "Béjaïa",
    demonym: "BÉJAÏENNE",
    emoji: "🌊⛰️",
    tagline: {
      en: "Coastal aesthetic and mountain views.",
      fr: "Ambiance côtière avec vue sur les montagnes.",
      ar: "جمال البحر وإطلالة الجبل في آن واحد."
    },
    description: {
      en: "You are the total package—beach days in the morning and mountain hikes in the afternoon. You're trendy, social, and always on the move.",
      fr: "T'es le package complet — plage le matin, randonnée en montagne l'après-midi. T'es tendance, sociable et toujours en mouvement.",
      ar: "أنت الباقة المتكاملة — شواطئ في الصباح وجبال في المساء. عصري، اجتماعي، ودايماً في الحركة."
    },
    vibe_tag: {
      en: "Emerald coastlines and Mediterranean dreams",
      fr: "Côtes émeraude et rêves méditerranéens",
      ar: "سواحل زمردية وأحلام متوسطية"
    },
    image: "assets/wilayas/06-B_ja_a.jpg",
    tags: {
      coastal: 3,
      mountain: 2,
      temperate: 2,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 3,
      low_budget: 1,
      mid_budget: 2,
      historic: 1,
      modern: 2,
      local: 1,
      touristy: 3
    }
  },
  biskra: {
    name: "Biskra",
    demonym: "BISKRIENNE",
    emoji: "🌴☀️",
    tagline: "Sweetest vibes in the desert sun.",
    description: "You are vibrant, warm, and have a heart of gold—just like the famous dates you're known for. You're the life of the oasis.",
    vibe_tag: "Date palms and desert oasis magic",
    image: "assets/wilayas/07-Biskra.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      local: 2,
      touristy: 1
    }
  },
  b_char: {
    name: "Béchar",
    demonym: "BÉCHARIENNE",
    emoji: "🌵✊",
    tagline: "Rugged, raw, and ready for anything.",
    description: "You're a bit of a mystery. You love your independence and have a tough-as-nails personality that survives any challenge.",
    vibe_tag: "Sahara soul, timeless nomadic vibes",
    image: "assets/wilayas/08-B_char.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  blida: {
    name: "Blida",
    demonym: "BLIDAISE",
    emoji: "🌹✨",
    tagline: "City of roses and main character energy.",
    description: "You are super stylish and always surrounded by beauty. You're the one who organizes the weekend hangouts and keeps the squad together.",
    vibe_tag: "City of roses and mountain breezes",
    image: "assets/wilayas/09-Blida.jpg",
    tags: {
      coastal: 1,
      mountain: 1,
      temperate: 3,
      fast: 3,
      urban: 3,
      nightlife: 2,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 1,
      modern: 3,
      local: 1,
      touristy: 2
    }
  },
  bouira: {
    name: "Bouira",
    demonym: "BOUIRIENNE",
    emoji: "🌲🏔️",
    tagline: "Mountain soul with a quiet heart.",
    description: "You are deep, thoughtful, and love your roots. You prefer a slow pace and meaningful connections over the busy city rush.",
    vibe_tag: "Green hills and serene highland air",
    image: "assets/wilayas/10-Bouira.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  tamanrasset: {
    name: "Tamanrasset",
    demonym: "TAMANRASSETIENNE",
    emoji: "🌌✨",
    tagline: "Spiritual, stunning, and totally legendary.",
    description: "You are a traveler at heart. With your love for art, deep traditions, and epic landscapes, you're basically the coolest person anyone knows.",
    vibe_tag: "Heart of the desert, majestic peaks",
    image: "assets/wilayas/11-Tamanrasset.jpg",
    tags: {
      mountain: 2,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 2,
      touristy: 2
    }
  },
  t_bessa: {
    name: "Tébessa",
    demonym: "TÉBESSIENNE",
    emoji: "🏛️⏳",
    tagline: "Ancient history meets modern edge.",
    description: "You're a total time traveler who loves mixing the old-school with the new. You're sharp, strategic, and always have a story to tell.",
    vibe_tag: "Ancient stones and frontier desert tales",
    image: "assets/wilayas/12-T_bessa.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      modern: 1,
      local: 2,
      touristy: 1
    }
  },
  tlemcen: {
    name: "Tlemcen",
    demonym: "TLEMCÉNIENNE",
    emoji: "🎨✨",
    tagline: "The artsy soul with timeless aesthetic vibes.",
    description: "You are the definition of 'old money' aesthetic meets creative genius. You love slow mornings, historical architecture, and finding beauty in the little details of life.",
    vibe_tag: "Andalusian grace in every corner",
    image: "assets/wilayas/13-Tlemcen.jpg",
    tags: {
      coastal: 1,
      mountain: 3,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 2,
      touristy: 1
    }
  },
  tiaret: {
    name: "Tiaret",
    demonym: "TIARETIENNE",
    emoji: "🐎🌾",
    tagline: "Main character energy for horse lovers only.",
    description: "You’re low-key, grounded, and have a deep appreciation for heritage. You prefer wide open spaces and the company of your best friends over the noise of the big city.",
    vibe_tag: "Highland plains and wild equestrian spirit",
    image: "assets/wilayas/14-Tiaret.jpg",
    tags: {
      mountain: 2,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 2,
      modern: 1,
      local: 3
    }
  },
  tizi_ouzou: {
    name: "Tizi Ouzou",
    demonym: "TIZI OUZIENNE",
    emoji: "🏔️✊",
    tagline: "Big mountain energy and fierce cultural pride.",
    description: "You are the loyal friend who always stands up for what they believe in. Your vibe is all about community, steep hills, and having the best stories to tell.",
    vibe_tag: "Mountain majesty and cultural pride",
    image: "assets/wilayas/15-Tizi_Ouzou.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 3
    }
  },
  algiers: {
    name: "Algiers",
    demonym: "ALGÉROISE",
    emoji: "🏙️🌊",
    tagline: "The chaotic, iconic center of everything cool.",
    description: "You are the life of the party and thrive in the fast lane. You’re always on the move, chasing the latest trends and soaking up the busy city lights.",
    vibe_tag: "The White City, sparkling by the sea",
    image: "assets/wilayas/16-Algiers.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 3,
      urban: 3,
      traditional: 1,
      nightlife: 3,
      mid_budget: 3,
      historic: 1,
      modern: 3,
      local: 1,
      touristy: 3
    }
  },
  djelfa: {
    name: "Djelfa",
    demonym: "DJELFIENNE",
    emoji: "🏜️🐑",
    tagline: "Steppe vibes and authentic desert-edge mystery.",
    description: "You’re a rugged individual who thrives in the quiet, vast landscapes. You value tradition and keeping it real over chasing the latest internet fads.",
    vibe_tag: "Steppe landscapes and nomadic heritage",
    image: "assets/wilayas/17-Djelfa.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  jijel: {
    name: "Jijel",
    demonym: "JIJELIENNE",
    emoji: "🏖️🌲",
    tagline: "Coastal aesthetic and pure vacation mode.",
    description: "You are the ultimate 'beach bum' who just wants to chill and enjoy the view. You keep things simple, breezy, and effortlessly cool.",
    vibe_tag: "Coastal cliffs and wild blue waters",
    image: "assets/wilayas/18-Jijel.jpg",
    tags: {
      coastal: 3,
      mountain: 2,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  s_tif: {
    name: "Sétif",
    demonym: "SÉTIFIENNE",
    emoji: "🎓📈",
    tagline: "Total hustle culture in a student city.",
    description: "You’re ambitious, social, and always looking for the next big opportunity. Whether you're studying or shopping, you’re always busy leveling up.",
    vibe_tag: "High altitude charm, vibrant city life",
    image: "assets/wilayas/19-S_tif.jpg",
    tags: {
      mountain: 1,
      temperate: 1,
      fast: 3,
      urban: 3,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  sa_da: {
    name: "Saïda",
    demonym: "SAÏDIENNE",
    emoji: "⛰️☁️",
    tagline: "Low-key mountain retreat for true peace.",
    description: "You’re the friend everyone goes to when they need to escape the drama. You value quality time, fresh air, and a quiet, traditional way of life.",
    vibe_tag: "Thermal springs and lush green valleys",
    image: "assets/wilayas/20-Sa_da.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  skikda: {
    name: "Skikda",
    demonym: "SKIKDAISE",
    emoji: "⚓🌊",
    tagline: "Industrial grit meets beautiful turquoise shores.",
    description: "You’ve got a tough exterior but a soft spot for beauty. You’re hardworking and practical, but never say no to a sunset at the beach.",
    vibe_tag: "Azure waves and seaside serenity",
    image: "assets/wilayas/21-Skikda.jpg",
    tags: {
      coastal: 3,
      mountain: 1,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  sidi_bel_abb_s: {
    name: "Sidi Bel Abbès",
    demonym: "SIDI BEL ABBÉSIENNE",
    emoji: "🏛️🎓",
    tagline: "Historic plains city with major brain power.",
    description: "You’re a mix of old-school history and modern student life. You’re smart, steady, and have a unique perspective on where you come from.",
    vibe_tag: "Modern energy meets classic desert charm",
    image: "assets/wilayas/22-Sidi_Bel_Abb_s.jpg",
    tags: {
      mountain: 1,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      modern: 1,
      local: 3
    }
  },
  annaba: {
    name: "Annaba",
    demonym: "ANNABAISE",
    emoji: "🌊🏛️",
    tagline: "Classic Mediterranean vibes with a historic edge.",
    description: "You’re charming, historic, and effortlessly cool. You love a balance of beach days, late-night cafes, and hanging out with your favorite people.",
    vibe_tag: "The pearl of the Mediterranean coast",
    image: "assets/wilayas/23-Annaba.jpg",
    tags: {
      coastal: 3,
      mountain: 1,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      modern: 1,
      local: 1,
      touristy: 2
    }
  },
  guelma: {
    name: "Guelma",
    demonym: "GUELMIENNE",
    emoji: "♨️🌿",
    tagline: "Thermal spa vibes for the ultimate relaxer.",
    description: "You are all about self-care and finding your zen. You’re low-key obsessed with wellness and love exploring nature at your own pace.",
    vibe_tag: "Rolling hills and ancient thermal baths",
    image: "assets/wilayas/24-Guelma.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 1,
      local: 3,
      touristy: 1
    }
  },
  constantine: {
    name: "Constantine",
    demonym: "CONSTANTINOISE",
    emoji: "🌉🎓",
    tagline: "Living life on the edge, literally.",
    description: "You are the intellectual powerhouse with a flair for the dramatic. You love deep convos, iconic views, and being the center of the cultural scene.",
    vibe_tag: "Suspended bridges over history's canyon",
    image: "assets/wilayas/25-Constantine.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 2,
      chill: 1,
      urban: 3,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 2,
      local: 1,
      touristy: 2
    }
  },
  m_d_a: {
    name: "Médéa",
    demonym: "MÉDÉENNE",
    emoji: "🍎⛰️",
    tagline: "Lowkey vibes and mountain air.",
    description: "You're the friend who prefers a cozy weekend over a wild party. You appreciate the simple things like good food and peaceful mountain views.",
    vibe_tag: "Mountain vineyards and historical charm",
    image: "assets/wilayas/26-M_d_a.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  mostaganem: {
    name: "Mostaganem",
    demonym: "MOSTAGANÉMOISE",
    emoji: "🌊⛵",
    tagline: "Sun, sand, and coastal chill.",
    description: "You are all about that effortless Mediterranean lifestyle. You love the ocean breeze and keeping things relaxed while enjoying your daily routine.",
    vibe_tag: "Sun-drenched shores and golden sands",
    image: "assets/wilayas/27-Mostaganem.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 1,
      chill: 3,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  m_sila: {
    name: "M'Sila",
    demonym: "MSILIENNE",
    emoji: "🌾🌤️",
    tagline: "The quiet achiever of the plains.",
    description: "You’re steady, reliable, and always evolving. You don't need the spotlight to get things done, and you're perfectly happy in your own space.",
    vibe_tag: "Heart of the plains, golden energy",
    image: "assets/wilayas/28-M_Sila.jpg",
    tags: {
      desert: 1,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 3,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  mascara: {
    name: "Mascara",
    demonym: "MASCARAISE",
    emoji: "🍇📜",
    tagline: "Rooted in history, rich in soul.",
    description: "You have a deep respect for your roots and a strong personality. You’re proud, historic, and carry a certain timeless wisdom with you.",
    vibe_tag: "Vineyards and ancient warrior spirit",
    image: "assets/wilayas/29-Mascara.jpg",
    tags: {
      mountain: 2,
      temperate: 1,
      chill: 2,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 3
    }
  },
  ouargla: {
    name: "Ouargla",
    demonym: "OUARGLIENNE",
    emoji: "🌵🔥",
    tagline: "Sahara heat with city beats.",
    description: "You’re ambitious and thrive in high-energy environments. You love blending ancient traditions with a modern, fast-paced professional life.",
    vibe_tag: "Gateway to the golden desert sands",
    image: "assets/wilayas/30-Ouargla.jpg",
    tags: {
      desert: 3,
      fast: 3,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  oran: {
    name: "Oran",
    demonym: "ORANAISE",
    emoji: "💃🎶",
    tagline: "The life of the party, always.",
    description: "You are the definition of cosmopolitan. With your love for music, nightlife, and social scenes, you’re the friend everyone invites to the main event.",
    vibe_tag: "Radiating coastal energy and sunny vibes",
    image: "assets/wilayas/31-Oran.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 3,
      urban: 3,
      nightlife: 3,
      low_budget: 1,
      mid_budget: 2,
      historic: 1,
      modern: 3,
      local: 1,
      touristy: 3
    }
  },
  el_bayadh: {
    name: "El Bayadh",
    demonym: "EL BAYADIENNE",
    emoji: "🐏🏜️",
    tagline: "Gateway to the vast desert horizon.",
    description: "You’re a bit of a mystery who values tradition and the open road. You’re grounded and keep things real, always looking toward the next adventure.",
    vibe_tag: "High plateau winds and open skies",
    image: "assets/wilayas/32-El_Bayadh.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      chill: 2,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  illizi: {
    name: "Illizi",
    demonym: "ILLIZIENNE",
    emoji: "🎨✨",
    tagline: "Ancient art, endless desert magic.",
    description: "You are a total explorer with a soul for discovery. You prefer breathtaking landscapes and quiet, profound connections over city noise.",
    vibe_tag: "Gateway to the Tassili wonders",
    image: "assets/wilayas/33-Illizi.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 2,
      touristy: 2
    }
  },
  bordj_bou_arr_ridj: {
    name: "Bordj Bou Arréridj",
    demonym: "BORDJIENNE",
    emoji: "📱🏗️",
    tagline: "Innovating the future, one step ahead.",
    description: "You’re tech-savvy, fast-moving, and always working on a new project. You’re the friend who’s always got the latest gadget and big plans.",
    vibe_tag: "Crafting excellence in the highlands",
    image: "assets/wilayas/34-Bordj_Bou_Arr_ridj.jpg",
    tags: {
      mountain: 1,
      temperate: 1,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      modern: 3,
      local: 2
    }
  },
  boumerd_s: {
    name: "Boumerdès",
    demonym: "BOUMERDÉSIENNE",
    emoji: "🎓🌊",
    tagline: "Student life by the seaside.",
    description: "You’re the perfect balance of student energy and coastal chill. You love being close to the action while keeping your life balanced and fun.",
    vibe_tag: "Where the sea kisses the forest",
    image: "assets/wilayas/35-Boumerd_s.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  el_tarf: {
    name: "El Tarf",
    demonym: "EL TARFIENNE",
    emoji: "🌲🦌",
    tagline: "Nature’s hidden gem, stay wild.",
    description: "You’re the ultimate nature lover who finds peace in forests and lakes. You’re quiet, observant, and prefer a hike over a city street.",
    vibe_tag: "Wild nature and hidden coastal gems",
    image: "assets/wilayas/36-El_Tarf.jpg",
    tags: {
      coastal: 2,
      temperate: 3,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 3,
      local: 3,
      touristy: 1
    }
  },
  tindouf: {
    name: "Tindouf",
    demonym: "TINDOUFIENNE",
    emoji: "🌵☀️",
    tagline: "Tindouf: The ultimate rugged desert explorer.",
    description: "You are the definition of resilient and mysterious. You thrive in the deep silence of the Sahara where the stars are your only company.",
    vibe_tag: "Desert solitude under endless stars",
    image: "assets/wilayas/37-Tindouf.jpg",
    tags: {desert:3,chill:3,traditional:2,family:1,low_budget:3,historic:1,local:3}
  },
  tissemsilt: {
    name: "Tissemsilt",
    demonym: "TISSEMSILTIENNE",
    emoji: "🏔️🧥",
    tagline: "Tissemsilt: Your cozy mountain escape.",
    description: "You’re all about those quiet, slow-paced vibes. You love a good sweater, a hot drink, and keeping things super low-key.",
    vibe_tag: "Quiet plains and rugged mountain paths",
    image: "assets/wilayas/38-Tissemsilt.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 3,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      local: 3
    }
  },
  el_oued: {
    name: "El Oued",
    demonym: "EL OUEDIENNE",
    emoji: "🕌🌴",
    tagline: "El Oued: The aesthetic dome-dwelling dreamer.",
    description: "You have an eye for unique architecture and love the desert heat. You're deeply connected to your roots and the sweet taste of home.",
    vibe_tag: "City of a thousand domes, sandy",
    image: "assets/wilayas/39-El_Oued.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      local: 3,
      touristy: 1
    }
  },
  khenchela: {
    name: "Khenchela",
    demonym: "KHENCHELIENNE",
    emoji: "❄️🏔️",
    tagline: "Khenchela: Fierce, cold, and totally authentic.",
    description: "You’re proud of your heritage and you don’t let the cold weather stop you. You’re tough, loyal, and love being surrounded by nature.",
    vibe_tag: "Rugged cliffs and ancient Berber roots",
    image: "assets/wilayas/40-Khenchela.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 2,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  souk_ahras: {
    name: "Souk Ahras",
    demonym: "SOUK AHRASSIENNE",
    emoji: "🏛️🌲",
    tagline: "Souk Ahras: A historic soul in the mountains.",
    description: "You’re an old soul who loves stories from the past. Living near the border, you’re always curious about the world beyond.",
    vibe_tag: "Olive groves and historical crossroads",
    image: "assets/wilayas/41-Souk_Ahras.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 2,
      touristy: 1
    }
  },
  tipaza: {
    name: "Tipaza",
    demonym: "TIPAZIENNE",
    emoji: "🌊🏛️",
    tagline: "Tipaza: Sun, sea, and ancient vibes.",
    description: "You live for the golden hour and beach days. You’re a total tourist magnet because your aesthetic is literally legendary.",
    vibe_tag: "Roman ruins by the turquoise sea",
    image: "assets/wilayas/42-Tipaza.jpg",
    tags: {
      coastal: 3,
      mountain: 1,
      temperate: 2,
      fast: 2,
      chill: 1,
      urban: 1,
      traditional: 1,
      nightlife: 2,
      family: 1,
      mid_budget: 3,
      historic: 3,
      modern: 1,
      touristy: 3
    }
  },
  mila: {
    name: "Mila",
    demonym: "MILIENNE",
    emoji: "🏺✨",
    tagline: "Mila: Quiet, classy, and timeless.",
    description: "You’re low-maintenance but deeply fascinating. You’re the friend everyone goes to when they need a calm, thoughtful conversation.",
    vibe_tag: "Ancient walls and deep valley secrets",
    image: "assets/wilayas/43-Mila.jpg",
    tags: {
      mountain: 3,
      temperate: 1,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 3,
      local: 3
    }
  },
  a_n_defla: {
    name: "Aïn Defla",
    demonym: "AÏN DEFLIENNE",
    emoji: "🌾🚜",
    tagline: "Aïn Defla: The grounded, chill agricultural pro.",
    description: "You’re balanced and down-to-earth. You enjoy the simple life and know exactly how to make things grow and thrive.",
    vibe_tag: "Orchards, mountains, and peaceful charm",
    image: "assets/wilayas/44-A_n_Defla.jpg",
    tags: {
      mountain: 1,
      temperate: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      modern: 1,
      local: 3
    }
  },
  na_ma: {
    name: "Naâma",
    demonym: "NAÂMIENNE",
    emoji: "🌅🐑",
    tagline: "Naâma: Steppe vibes and wild horizons.",
    description: "You’re a free spirit who loves open spaces. You’re a bit of an outsider, but that’s exactly what makes you so cool.",
    vibe_tag: "Desert dunes and sunset horizons",
    image: "assets/wilayas/45-Na_ma.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      temperate: 1,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 3,
      local: 3
    }
  },
  a_n_t_mouchent: {
    name: "Aïn Témouchent",
    demonym: "AÏN TÉMOUCHENTIENNE",
    emoji: "🍇🏖️",
    tagline: "Aïn Témouchent: Coastal chic and vineyard dreams.",
    description: "You’re sophisticated, relaxed, and definitely the one with the best taste. You know how to enjoy the finer things without overdoing it.",
    vibe_tag: "Coastal beauty and sun-kissed shores",
    image: "assets/wilayas/46-A_n_T_mouchent.jpg",
    tags: {
      coastal: 3,
      temperate: 2,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 1,
      nightlife: 1,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  gharda_a: {
    name: "Ghardaïa",
    demonym: "GHARDAÏENNE",
    emoji: "🧿🏜️",
    tagline: "Ghardaïa: Iconic, spiritual, and totally unique.",
    description: "You’re one of a kind and everyone knows it. You take pride in your traditions and have a style that nobody can replicate.",
    vibe_tag: "Geometric wonders in the desert sun",
    image: "assets/wilayas/47-Gharda_a.jpg",
    tags: {
      desert: 3,
      chill: 3,
      urban: 1,
      traditional: 3,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 2,
      touristy: 2
    }
  },
  relizane: {
    name: "Relizane",
    demonym: "RELIZANIENNE",
    emoji: "🌱⚡",
    tagline: "Relizane: Growing fast and staying real.",
    description: "You’re ambitious and always on the move. You’re building your future while staying connected to your roots in the plains.",
    vibe_tag: "Fertile lands and agricultural heart",
    image: "assets/wilayas/48-Relizane.jpg",
    tags: {
      temperate: 3,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 2,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 3
    }
  },
  timimoun: {
    name: "Timimoun",
    demonym: "TIMIMOUNIENNE",
    emoji: "🏜️✨",
    tagline: "The red oasis where aesthetic dreams live.",
    description: "You are the main character of a desert indie film. With your stunning red mud-brick aesthetic and chill vibes, you turn every sunset into a core memory.",
    vibe_tag: "Red oasis dreams in golden sands",
    image: "assets/wilayas/49-Timimoun.jpg",
    tags: {
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 3,
      local: 1,
      touristy: 2
    }
  },
  bordj_badji_mokhtar: {
    name: "Bordj Badji Mokhtar",
    demonym: "BORDJ BADJI MOKHTARIENNE",
    emoji: "📍🔥",
    tagline: "The ultimate frontier vibe for true explorers.",
    description: "You are mysterious, resilient, and totally off the grid. You thrive where the map ends and the real adventure begins.",
    vibe_tag: "Deep desert silence and starlit skies",
    image: "assets/wilayas/50-Bordj_Badji_Mokhtar.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  },
  ouled_djellal: {
    name: "Ouled Djellal",
    demonym: "OULED DJELLALIENNE",
    emoji: "🌴☀️",
    tagline: "Keepin' it real in the golden palms.",
    description: "You are grounded, hardworking, and deeply connected to your roots. Life is simple, sweet, and centered around family gatherings.",
    vibe_tag: "Rising oasis in the vast desert",
    image: "assets/wilayas/51-Ouled_Djellal.jpg",
    tags: {desert:3,chill:3,traditional:3,family:3,low_budget:3,historic:2,local:3}
  },
  b_ni_abb_s: {
    name: "Béni Abbès",
    demonym: "BÉNI ABBÉSIENNE",
    emoji: "🏰🤍",
    tagline: "A white oasis straight out of Pinterest.",
    description: "You are the aesthetic friend who knows all the best photo spots. You keep things classy and serene, perfect for a peaceful getaway.",
    vibe_tag: "Gateway to the infinite Sahara sands",
    image: "assets/wilayas/52-B_ni_Abb_s.jpg",
    tags: {
      desert: 3,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 1,
      local: 1,
      touristy: 2
    }
  },
  in_salah: {
    name: "In Salah",
    demonym: "IN SALAHIENNE",
    emoji: "⛽🌵",
    tagline: "Built different in the heart of heat.",
    description: "You are a powerhouse of energy and industry. Tough, resilient, and always focused on the bigger picture, you don't let the heat slow you down.",
    vibe_tag: "Where the desert meets the sky",
    image: "assets/wilayas/53-In_Salah.jpg",
    tags: {
      desert: 3,
      fast: 2,
      chill: 1,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 3
    }
  },
  in_guezzam: {
    name: "In Guezzam",
    demonym: "IN GUEZZAMIENNE",
    emoji: "🌍🐫",
    tagline: "The desert nomad with a global soul.",
    description: "You are the ultimate bridge between worlds. Cultural, open-minded, and always on the move, you represent the true spirit of the Sahara.",
    vibe_tag: "Borderland spirit in the deep south",
    image: "assets/wilayas/54-In_Guezzam.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  touggourt: {
    name: "Touggourt",
    demonym: "TOUGGOURTIENNE",
    emoji: "🌴🏙️",
    tagline: "Huge oasis energy, low key vibes.",
    description: "You are the bustling heartbeat of the palm groves. You have a little bit of everything and always make everyone feel right at home.",
    vibe_tag: "Palm groves and desert hospitality",
    image: "assets/wilayas/55-Touggourt.jpg",
    tags: {
      desert: 3,
      fast: 2,
      chill: 1,
      urban: 2,
      traditional: 2,
      nightlife: 1,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 2,
      local: 2,
      touristy: 1
    }
  },
  djanet: {
    name: "Djanet",
    demonym: "DJANETIENNE",
    emoji: "🎨✨",
    tagline: "UNESCO vibes and bucket-list views.",
    description: "You are breathtaking and iconic. People travel from all over just to catch a glimpse of your legendary natural beauty.",
    vibe_tag: "Tassili dreams and lunar landscapes",
    image: "assets/wilayas/56-Djanet.jpg",
    tags: {
      desert: 3,
      chill: 3,
      traditional: 2,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 1,
      touristy: 3
    }
  },
  el_meghaier: {
    name: "El Meghaier",
    demonym: "EL MEGHAIERIENNE",
    emoji: "🌙🌾",
    tagline: "Cool, calm, and collected in the dunes.",
    description: "You are the definition of 'low-key.' You don't need a crowd to be happy—just good dates and quiet desert nights.",
    vibe_tag: "Oasis life in the golden dunes",
    image: "assets/wilayas/57-El_Meghaier.jpg",
    tags: {desert:3,chill:3,traditional:3,family:3,low_budget:3,historic:1,local:3}
  },
  el_meniaa: {
    name: "El Meniaa",
    demonym: "EL MENIAÏENNE",
    emoji: "📍⚖️",
    tagline: "The perfect crossroads for your next chapter.",
    description: "You are the ultimate connector. You bridge the north and south, balancing tradition with a forward-looking mindset.",
    vibe_tag: "Ancient paths in the desert heart",
    image: "assets/wilayas/58-El_Meniaa.jpg",
    tags: {
      desert: 3,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 2,
      low_budget: 2,
      mid_budget: 1,
      historic: 2,
      modern: 1,
      local: 2,
      touristy: 1
    }
  },
  aflou: {
    name: "Aflou",
    demonym: "AFLOUIENNE",
    emoji: "🏔️❄️",
    tagline: "Mountain air and cozy sweater vibes.",
    description: "You are the refreshing escape from the heat. You love high altitudes, snowy winters, and a cozy, traditional mountain lifestyle.",
    vibe_tag: "Highland winds and steppe adventures",
    image: "assets/wilayas/59-Aflou.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 3,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 3,
      historic: 2,
      local: 3
    }
  },
  barika: {
    name: "Barika",
    demonym: "BARIKIENNE",
    emoji: "🌾🏠",
    tagline: "Keeping it steady on the plains.",
    description: "You are reliable and down-to-earth. You represent the hardworking spirit of the plains, where life is steady and community comes first.",
    vibe_tag: "Heart of the plains, vibrant spirit",
    image: "assets/wilayas/60-Barika.jpg",
    tags: {
      temperate: 3,
      chill: 3,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 3,
      historic: 1,
      modern: 1,
      local: 3
    }
  },
  ksar_chellala: {
    name: "Ksar Chellala",
    demonym: "KSAR CHELLALIENNE",
    emoji: "🧶✨",
    tagline: "The quiet soul of the high plains.",
    description: "You are the definition of low-key and authentic. You love keeping things traditional and appreciate the slow, steady rhythm of life away from the big city noise.",
    vibe_tag: "Desert gateway and historical charm",
    image: null,
    tags: {temperate:2,chill:3,traditional:3,family:2,low_budget:3,historic:2,local:3}
  },
  messaad: {
    name: "Messaad",
    demonym: "MESSAADIENNE",
    emoji: "🏜️🐪",
    tagline: "Your gateway to the vast desert horizon.",
    description: "You are grounded, resilient, and deeply connected to your roots. You’ve got a rugged spirit and prefer the wide-open spaces of the Saharan edge over anything else.",
    vibe_tag: "Steppe soul and rugged beauty",
    image: "assets/wilayas/62-Messaad.jpg",
    tags: {
      desert: 3,
      chill: 2,
      urban: 1,
      traditional: 2,
      family: 3,
      low_budget: 2,
      mid_budget: 1,
      historic: 1,
      modern: 1,
      local: 2
    }
  },
  a_n_oussara: {
    name: "Aïn Oussara",
    demonym: "AÏN OUSSARIENNE",
    emoji: "🏗️📈",
    tagline: "The rising star of the plains.",
    description: "You are focused, ambitious, and always on the move. You’re building your future and don’t have time for anything that doesn't help you level up.",
    vibe_tag: "Highland energy and vast horizon",
    image: "assets/wilayas/63-A_n_Oussara.jpg",
    tags: {
      temperate: 2,
      fast: 3,
      urban: 2,
      traditional: 1,
      nightlife: 1,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      modern: 3,
      local: 2
    }
  },
  boussa_da: {
    name: "Boussaâda",
    demonym: "BOUSSAÂDIENNE",
    emoji: "🎨✨",
    tagline: "Where art and desert magic collide.",
    description: "You’re an absolute creative soul with a poetic vibe. You love beautiful things, hidden gems, and the kind of aesthetic that looks perfect on your feed.",
    vibe_tag: "Gateway to the Sahara's golden gate",
    image: "assets/wilayas/64-Boussa_da.jpg",
    tags: {
      mountain: 1,
      desert: 2,
      temperate: 1,
      fast: 1,
      chill: 2,
      urban: 1,
      traditional: 2,
      nightlife: 1,
      family: 1,
      low_budget: 1,
      mid_budget: 2,
      historic: 2,
      modern: 1,
      local: 1,
      touristy: 3
    }
  },
  el_abiodh_sidi_cheikh: {
    name: "El Abiodh Sidi Cheikh",
    demonym: "EL ABIODHIENNE",
    emoji: "🕌💫",
    tagline: "Keep it sacred, keep it real.",
    description: "You have a deep respect for history and traditions that have lasted for centuries. You aren't into trends—you care about what actually matters.",
    vibe_tag: "Desert winds and nomadic memories",
    image: "assets/wilayas/65-El_Abiodh_Sidi_Cheikh.jpg",
    tags: {
      mountain: 1,
      desert: 3,
      chill: 3,
      traditional: 3,
      family: 2,
      low_budget: 3,
      historic: 3,
      local: 3
    }
  },
  el_kantara: {
    name: "El Kantara",
    demonym: "EL KANTARIENNE",
    emoji: "🏛️📸",
    tagline: "The ultimate aesthetic transition point.",
    description: "You are the bridge between two worlds, and everyone notices your unique style. You live for epic views and documenting the beauty around you.",
    vibe_tag: "Gateway to the canyon's grand beauty",
    image: "assets/wilayas/66-El_Kantara.jpg",
    tags: {
      mountain: 2,
      desert: 1,
      temperate: 1,
      chill: 2,
      traditional: 2,
      family: 2,
      low_budget: 1,
      mid_budget: 2,
      historic: 3,
      local: 1,
      touristy: 3
    }
  },
  bir_el_ater: {
    name: "Bir El Ater",
    demonym: "BIR EL ATERIENNE",
    emoji: "⛰️⚒️",
    tagline: "Tough, rugged, and mountain-made.",
    description: "You’re built for the grind and thrive in environments that require grit. You’re definitely not a softie, and you love being in the heart of the action.",
    vibe_tag: "Frontier spirit in the desert sun",
    image: null,
    tags: {
      mountain: 3,
      temperate: 1,
      fast: 2,
      urban: 1,
      traditional: 1,
      nightlife: 1,
      family: 1,
      low_budget: 2,
      mid_budget: 1,
      modern: 2,
      local: 3
    }
  },
  ksar_el_boukhari: {
    name: "Ksar El Boukhari",
    demonym: "KSAR EL BOUKHARIENNE",
    emoji: "🏔️🏘️",
    tagline: "Old school vibes in the mountains.",
    description: "You have an 'old soul' energy that people find super comforting. You love classic aesthetics, mountain air, and keeping your inner circle close.",
    vibe_tag: "Ancient trade routes and mountain air",
    image: "assets/wilayas/68-Ksar_El_Boukhari.jpg",
    tags: {
      mountain: 3,
      temperate: 2,
      chill: 2,
      urban: 1,
      traditional: 3,
      family: 3,
      low_budget: 2,
      historic: 3,
      local: 2,
      touristy: 1
    }
  },
  el_aricha: {
    name: "El Aricha",
    demonym: "EL ARICHIENNE",
    emoji: "🐑🌌",
    tagline: "Total main character, off the grid.",
    description: "You don't need anyone's validation to know you're cool. You prefer peace, quiet, and staying completely away from the drama of the fast lane.",
    vibe_tag: "High plateau charm and open roads",
    image: "assets/wilayas/69-El_Aricha.jpg",
    tags: {
      desert: 1,
      temperate: 2,
      chill: 3,
      traditional: 2,
      family: 2,
      low_budget: 3,
      historic: 1,
      local: 3
    }
  }
}

const QUESTIONS = [
  {
    id: 1,
    question: "Beach or mountains?",
    options: [
      { label: "🌊 Beach", tags: { coastal: 3 } },
      { label: "🏔️ Mountains", tags: { mountain: 3 } },
    ],
  },
  {
    id: 2,
    question: "Fast-paced or chill?",
    options: [
      { label: "⚡ Fast-paced", tags: { fast: 3 } },
      { label: "🧘 Chill", tags: { chill: 3 } },
    ],
  },
  {
    id: 3,
    question: "Big city energy or small town warmth?",
    options: [
      { label: "🌆 Big city", tags: { urban: 3 } },
      { label: "🏘️ Small town", tags: { traditional: 3 } },
    ],
  },
  {
    id: 4,
    question: "Nightlife or early nights?",
    options: [
      { label: "🍸 Nightlife", tags: { nightlife: 3 } },
      { label: "🌙 Early nights", tags: { family: 3 } },
    ],
  },
  {
    id: 5,
    question: "Budget-conscious or don't care?",
    options: [
      { label: "💰 Budget-conscious", tags: { low_budget: 3 } },
      { label: "💎 Don't care", tags: { mid_budget: 3 } },
    ],
  },
  {
    id: 6,
    question: "Desert heat or four seasons?",
    options: [
      { label: "🏜️ Desert heat", tags: { desert: 3 } },
      { label: "🍂 Four seasons", tags: { temperate: 3 } },
    ],
  },
  {
    id: 7,
    question: "Historic vibes or modern life?",
    options: [
      { label: "🏛️ Historic city", tags: { historic: 3 } },
      { label: "🏗️ Modern city", tags: { modern: 3 } },
    ],
  },
  {
    id: 8,
    question: "Tourist hotspot or local secret?",
    options: [
      { label: "📸 Tourist favorite", tags: { touristy: 3 } },
      { label: "🤫 Hidden gem", tags: { local: 3 } },
    ],
  },
];

const CITIES = {
  adrar: {
    name: "Adrar",
    demonym: "ADRARIENNE",
    emoji: "🌴🔥",
    tagline: "Living that golden oasis dream life.",
    description: "You are the ultimate hidden gem, chilling in the middle of the dunes. You love keeping it real, traditional, and totally low-key.",
    vibe_tag: "Golden dunes and ancient desert whispers",
    image: "assets/wilayas/01-Adrar.jpg",
    tags: {
    desert: 3,
    chill: 3,
    traditional: 3,
    family: 2,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
  chlef: {
    name: "Chlef",
    demonym: "CHLEFIENNE",
    emoji: "🍊🚜",
    tagline: "Fresh vibes and farm-to-table energy.",
    description: "You are all about growth and keeping things grounded. You're a hardworking soul who values community and simple, honest living.",
    vibe_tag: "Where history meets the fertile valley",
    image: "assets/wilayas/02-Chlef.jpg",
    tags: {
    mountain: 1,
    temperate: 2,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 2,
    family: 3,
    low_budget: 2,
    mid_budget: 1,
    modern: 2,
    local: 3
    },
  },
  laghouat: {
    name: "Laghouat",
    demonym: "LAGHOUATIENNE",
    emoji: "🏜️✨",
    tagline: "The gateway to your next adventure.",
    description: "You are the bridge between the city and the wild Sahara. You've got a classic soul and you're always ready for a road trip.",
    vibe_tag: "Gateway to the vast Saharan horizon",
    image: "assets/wilayas/03-Laghouat.jpg",
    tags: {
    mountain: 1,
    desert: 2,
    temperate: 1,
    chill: 3,
    urban: 1,
    traditional: 3,
    family: 2,
    low_budget: 3,
    historic: 2,
    local: 3
    },
  },
  oum_el_bouaghi: {
    name: "Oum El Bouaghi",
    demonym: "OUM EL BOUAGHIENNE",
    emoji: "🌾☁️",
    tagline: "Quiet, steady, and perfectly low-key.",
    description: "You don't need the spotlight to shine. You value your peace and quiet, and you're the most reliable friend in the group.",
    vibe_tag: "High plateau spirit, rugged and raw",
    image: null,
    tags: {
    mountain: 1,
    temperate: 1,
    chill: 3,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
  batna: {
    name: "Batna",
    demonym: "BATNÉENNE",
    emoji: "🎓🏔️",
    tagline: "Brainy, bold, and totally iconic.",
    description: "You are a total history buff with a revolutionary spirit. You love hanging out with friends and debating the big topics.",
    vibe_tag: "Mountain peaks and ancient Roman echoes",
    image: "assets/wilayas/05-Batna.jpg",
    tags: {
    mountain: 3,
    temperate: 1,
    fast: 2,
    chill: 1,
    urban: 2,
    traditional: 1,
    nightlife: 2,
    family: 1,
    low_budget: 2,
    mid_budget: 1,
    historic: 3,
    modern: 1,
    local: 2,
    touristy: 1
    },
  },
  b_ja_a: {
    name: "Béjaïa",
    demonym: "BÉJAÏENNE",
    emoji: "🌊⛰️",
    tagline: "Coastal aesthetic and mountain views.",
    description: "You are the total package—beach days in the morning and mountain hikes in the afternoon. You're trendy, social, and always on the move.",
    vibe_tag: "Emerald coastlines and Mediterranean dreams",
    image: "assets/wilayas/06-B_ja_a.jpg",
    tags: {
    coastal: 3,
    mountain: 2,
    temperate: 2,
    fast: 3,
    urban: 2,
    traditional: 1,
    nightlife: 3,
    low_budget: 1,
    mid_budget: 2,
    historic: 1,
    modern: 2,
    local: 1,
    touristy: 3
    },
  },
  biskra: {
    name: "Biskra",
    demonym: "BISKRIENNE",
    emoji: "🌴☀️",
    tagline: "Sweetest vibes in the desert sun.",
    description: "You are vibrant, warm, and have a heart of gold—just like the famous dates you're known for. You're the life of the oasis.",
    vibe_tag: "Date palms and desert oasis magic",
    image: "assets/wilayas/07-Biskra.jpg",
    tags: {
    desert: 3,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 2,
    nightlife: 1,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 2,
    local: 2,
    touristy: 1
    },
  },
  b_char: {
    name: "Béchar",
    demonym: "BÉCHARIENNE",
    emoji: "🌵✊",
    tagline: "Rugged, raw, and ready for anything.",
    description: "You're a bit of a mystery. You love your independence and have a tough-as-nails personality that survives any challenge.",
    vibe_tag: "Sahara soul, timeless nomadic vibes",
    image: "assets/wilayas/08-B_char.jpg",
    tags: {
    mountain: 1,
    desert: 3,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 2,
    family: 2,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
  blida: {
    name: "Blida",
    demonym: "BLIDAISE",
    emoji: "🌹✨",
    tagline: "City of roses and main character energy.",
    description: "You are super stylish and always surrounded by beauty. You're the one who organizes the weekend hangouts and keeps the squad together.",
    vibe_tag: "City of roses and mountain breezes",
    image: "assets/wilayas/09-Blida.jpg",
    tags: {
    coastal: 1,
    mountain: 1,
    temperate: 3,
    fast: 3,
    urban: 3,
    nightlife: 2,
    family: 2,
    low_budget: 1,
    mid_budget: 2,
    historic: 1,
    modern: 3,
    local: 1,
    touristy: 2
    },
  },
  bouira: {
    name: "Bouira",
    demonym: "BOUIRIENNE",
    emoji: "🌲🏔️",
    tagline: "Mountain soul with a quiet heart.",
    description: "You are deep, thoughtful, and love your roots. You prefer a slow pace and meaningful connections over the busy city rush.",
    vibe_tag: "Green hills and serene highland air",
    image: "assets/wilayas/10-Bouira.jpg",
    tags: {
    mountain: 3,
    temperate: 1,
    chill: 3,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
  tamanrasset: {
    name: "Tamanrasset",
    demonym: "TAMANRASSETIENNE",
    emoji: "🌌✨",
    tagline: "Spiritual, stunning, and totally legendary.",
    description: "You are a traveler at heart. With your love for art, deep traditions, and epic landscapes, you're basically the coolest person anyone knows.",
    vibe_tag: "Heart of the desert, majestic peaks",
    image: "assets/wilayas/11-Tamanrasset.jpg",
    tags: {
    mountain: 2,
    desert: 3,
    chill: 3,
    traditional: 3,
    family: 1,
    low_budget: 2,
    mid_budget: 1,
    historic: 3,
    local: 2,
    touristy: 2
    },
  },
  t_bessa: {
    name: "Tébessa",
    demonym: "TÉBESSIENNE",
    emoji: "🏛️⏳",
    tagline: "Ancient history meets modern edge.",
    description: "You're a total time traveler who loves mixing the old-school with the new. You're sharp, strategic, and always have a story to tell.",
    vibe_tag: "Ancient stones and frontier desert tales",
    image: "assets/wilayas/12-T_bessa.jpg",
    tags: {
    mountain: 3,
    temperate: 1,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 2,
    nightlife: 1,
    family: 1,
    low_budget: 2,
    mid_budget: 1,
    historic: 3,
    modern: 1,
    local: 2,
    touristy: 1
    },
  },
  tlemcen: {
    name: "Tlemcen",
    demonym: "TLEMCÉNIENNE",
    emoji: "🎨✨",
    tagline: "The artsy soul with timeless aesthetic vibes.",
    description: "You are the definition of 'old money' aesthetic meets creative genius. You love slow mornings, historical architecture, and finding beauty in the little details of life.",
    vibe_tag: "Andalusian grace in every corner",
    image: "assets/wilayas/13-Tlemcen.jpg",
    tags: {
    coastal: 1,
    mountain: 3,
    temperate: 2,
    chill: 3,
    urban: 1,
    traditional: 2,
    nightlife: 1,
    family: 2,
    low_budget: 1,
    mid_budget: 2,
    historic: 3,
    local: 2,
    touristy: 1
    },
  },
  tiaret: {
    name: "Tiaret",
    demonym: "TIARETIENNE",
    emoji: "🐎🌾",
    tagline: "Main character energy for horse lovers only.",
    description: "You’re low-key, grounded, and have a deep appreciation for heritage. You prefer wide open spaces and the company of your best friends over the noise of the big city.",
    vibe_tag: "Highland plains and wild equestrian spirit",
    image: "assets/wilayas/14-Tiaret.jpg",
    tags: {
    mountain: 2,
    temperate: 1,
    chill: 3,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 2,
    modern: 1,
    local: 3
    },
  },
  tizi_ouzou: {
    name: "Tizi Ouzou",
    demonym: "TIZI OUZIENNE",
    emoji: "🏔️✊",
    tagline: "Big mountain energy and fierce cultural pride.",
    description: "You are the loyal friend who always stands up for what they believe in. Your vibe is all about community, steep hills, and having the best stories to tell.",
    vibe_tag: "Mountain majesty and cultural pride",
    image: "assets/wilayas/15-Tizi_Ouzou.jpg",
    tags: {
    mountain: 3,
    temperate: 2,
    fast: 1,
    chill: 2,
    urban: 2,
    traditional: 2,
    nightlife: 1,
    family: 3,
    low_budget: 2,
    mid_budget: 1,
    historic: 1,
    modern: 2,
    local: 3
    },
  },
  algiers: {
    name: "Algiers",
    demonym: "ALGÉROISE",
    emoji: "🏙️🌊",
    tagline: "The chaotic, iconic center of everything cool.",
    description: "You are the life of the party and thrive in the fast lane. You’re always on the move, chasing the latest trends and soaking up the busy city lights.",
    vibe_tag: "The White City, sparkling by the sea",
    image: "assets/wilayas/16-Algiers.jpg",
    tags: {
    coastal: 3,
    temperate: 2,
    fast: 3,
    urban: 3,
    traditional: 1,
    nightlife: 3,
    mid_budget: 3,
    historic: 1,
    modern: 3,
    local: 1,
    touristy: 3
    },
  },
  djelfa: {
    name: "Djelfa",
    demonym: "DJELFIENNE",
    emoji: "🏜️🐑",
    tagline: "Steppe vibes and authentic desert-edge mystery.",
    description: "You’re a rugged individual who thrives in the quiet, vast landscapes. You value tradition and keeping it real over chasing the latest internet fads.",
    vibe_tag: "Steppe landscapes and nomadic heritage",
    image: "assets/wilayas/17-Djelfa.jpg",
    tags: {
    mountain: 1,
    desert: 3,
    chill: 3,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 2,
    local: 3
    },
  },
  jijel: {
    name: "Jijel",
    demonym: "JIJELIENNE",
    emoji: "🏖️🌲",
    tagline: "Coastal aesthetic and pure vacation mode.",
    description: "You are the ultimate 'beach bum' who just wants to chill and enjoy the view. You keep things simple, breezy, and effortlessly cool.",
    vibe_tag: "Coastal cliffs and wild blue waters",
    image: "assets/wilayas/18-Jijel.jpg",
    tags: {
    coastal: 3,
    mountain: 2,
    temperate: 2,
    chill: 3,
    urban: 1,
    traditional: 1,
    nightlife: 1,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    modern: 2,
    local: 2,
    touristy: 1
    },
  },
  s_tif: {
    name: "Sétif",
    demonym: "SÉTIFIENNE",
    emoji: "🎓📈",
    tagline: "Total hustle culture in a student city.",
    description: "You’re ambitious, social, and always looking for the next big opportunity. Whether you're studying or shopping, you’re always busy leveling up.",
    vibe_tag: "High altitude charm, vibrant city life",
    image: "assets/wilayas/19-S_tif.jpg",
    tags: {
    mountain: 1,
    temperate: 1,
    fast: 3,
    urban: 3,
    traditional: 1,
    nightlife: 2,
    family: 1,
    low_budget: 1,
    mid_budget: 2,
    historic: 2,
    modern: 2,
    local: 2,
    touristy: 1
    },
  },
  sa_da: {
    name: "Saïda",
    demonym: "SAÏDIENNE",
    emoji: "⛰️☁️",
    tagline: "Low-key mountain retreat for true peace.",
    description: "You’re the friend everyone goes to when they need to escape the drama. You value quality time, fresh air, and a quiet, traditional way of life.",
    vibe_tag: "Thermal springs and lush green valleys",
    image: "assets/wilayas/20-Sa_da.jpg",
    tags: {
    mountain: 3,
    temperate: 1,
    chill: 3,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 1,
    modern: 1,
    local: 3
    },
  },
  skikda: {
    name: "Skikda",
    demonym: "SKIKDAISE",
    emoji: "⚓🌊",
    tagline: "Industrial grit meets beautiful turquoise shores.",
    description: "You’ve got a tough exterior but a soft spot for beauty. You’re hardworking and practical, but never say no to a sunset at the beach.",
    vibe_tag: "Azure waves and seaside serenity",
    image: "assets/wilayas/21-Skikda.jpg",
    tags: {
    coastal: 3,
    mountain: 1,
    temperate: 2,
    fast: 2,
    chill: 1,
    urban: 2,
    traditional: 1,
    nightlife: 1,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 2,
    modern: 2,
    local: 2,
    touristy: 1
    },
  },
  sidi_bel_abb_s: {
    name: "Sidi Bel Abbès",
    demonym: "SIDI BEL ABBÉSIENNE",
    emoji: "🏛️🎓",
    tagline: "Historic plains city with major brain power.",
    description: "You’re a mix of old-school history and modern student life. You’re smart, steady, and have a unique perspective on where you come from.",
    vibe_tag: "Modern energy meets classic desert charm",
    image: "assets/wilayas/22-Sidi_Bel_Abb_s.jpg",
    tags: {
    mountain: 1,
    temperate: 1,
    fast: 1,
    chill: 2,
    urban: 2,
    traditional: 2,
    nightlife: 1,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 3,
    modern: 1,
    local: 3
    },
  },
  annaba: {
    name: "Annaba",
    demonym: "ANNABAISE",
    emoji: "🌊🏛️",
    tagline: "Classic Mediterranean vibes with a historic edge.",
    description: "You’re charming, historic, and effortlessly cool. You love a balance of beach days, late-night cafes, and hanging out with your favorite people.",
    vibe_tag: "The pearl of the Mediterranean coast",
    image: "assets/wilayas/23-Annaba.jpg",
    tags: {
    coastal: 3,
    mountain: 1,
    temperate: 2,
    fast: 2,
    chill: 1,
    urban: 2,
    traditional: 1,
    nightlife: 2,
    family: 1,
    low_budget: 1,
    mid_budget: 2,
    historic: 3,
    modern: 1,
    local: 1,
    touristy: 2
    },
  },
  guelma: {
    name: "Guelma",
    demonym: "GUELMIENNE",
    emoji: "♨️🌿",
    tagline: "Thermal spa vibes for the ultimate relaxer.",
    description: "You are all about self-care and finding your zen. You’re low-key obsessed with wellness and love exploring nature at your own pace.",
    vibe_tag: "Rolling hills and ancient thermal baths",
    image: "assets/wilayas/24-Guelma.jpg",
    tags: {
    mountain: 3,
    temperate: 2,
    chill: 3,
    traditional: 2,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 2,
    modern: 1,
    local: 3,
    touristy: 1
    },
  },
  constantine: {
    name: "Constantine",
    demonym: "CONSTANTINOISE",
    emoji: "🌉🎓",
    tagline: "Living life on the edge, literally.",
    description: "You are the intellectual powerhouse with a flair for the dramatic. You love deep convos, iconic views, and being the center of the cultural scene.",
    vibe_tag: "Suspended bridges over history's canyon",
    image: "assets/wilayas/25-Constantine.jpg",
    tags: {
    mountain: 3,
    temperate: 1,
    fast: 2,
    chill: 1,
    urban: 3,
    traditional: 1,
    nightlife: 2,
    family: 1,
    low_budget: 1,
    mid_budget: 2,
    historic: 2,
    modern: 2,
    local: 1,
    touristy: 2
    },
  },
  m_d_a: {
    name: "Médéa",
    demonym: "MÉDÉENNE",
    emoji: "🍎⛰️",
    tagline: "Lowkey vibes and mountain air.",
    description: "You're the friend who prefers a cozy weekend over a wild party. You appreciate the simple things like good food and peaceful mountain views.",
    vibe_tag: "Mountain vineyards and historical charm",
    image: "assets/wilayas/26-M_d_a.jpg",
    tags: {
    mountain: 3,
    temperate: 2,
    chill: 3,
    urban: 1,
    traditional: 2,
    family: 3,
    low_budget: 2,
    mid_budget: 1,
    historic: 1,
    modern: 1,
    local: 3
    },
  },
  mostaganem: {
    name: "Mostaganem",
    demonym: "MOSTAGANÉMOISE",
    emoji: "🌊⛵",
    tagline: "Sun, sand, and coastal chill.",
    description: "You are all about that effortless Mediterranean lifestyle. You love the ocean breeze and keeping things relaxed while enjoying your daily routine.",
    vibe_tag: "Sun-drenched shores and golden sands",
    image: "assets/wilayas/27-Mostaganem.jpg",
    tags: {
    coastal: 3,
    temperate: 2,
    fast: 1,
    chill: 3,
    urban: 2,
    traditional: 1,
    nightlife: 1,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 1,
    modern: 2,
    local: 2,
    touristy: 1
    },
  },
  m_sila: {
    name: "M'Sila",
    demonym: "MSILIENNE",
    emoji: "🌾🌤️",
    tagline: "The quiet achiever of the plains.",
    description: "You’re steady, reliable, and always evolving. You don't need the spotlight to get things done, and you're perfectly happy in your own space.",
    vibe_tag: "Heart of the plains, golden energy",
    image: "assets/wilayas/28-M_Sila.jpg",
    tags: {
    desert: 1,
    temperate: 1,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 2,
    family: 3,
    low_budget: 3,
    historic: 1,
    modern: 1,
    local: 3
    },
  },
  mascara: {
    name: "Mascara",
    demonym: "MASCARAISE",
    emoji: "🍇📜",
    tagline: "Rooted in history, rich in soul.",
    description: "You have a deep respect for your roots and a strong personality. You’re proud, historic, and carry a certain timeless wisdom with you.",
    vibe_tag: "Vineyards and ancient warrior spirit",
    image: "assets/wilayas/29-Mascara.jpg",
    tags: {
    mountain: 2,
    temperate: 1,
    chill: 2,
    urban: 1,
    traditional: 3,
    family: 3,
    low_budget: 2,
    mid_budget: 1,
    historic: 3,
    local: 3
    },
  },
  ouargla: {
    name: "Ouargla",
    demonym: "OUARGLIENNE",
    emoji: "🌵🔥",
    tagline: "Sahara heat with city beats.",
    description: "You’re ambitious and thrive in high-energy environments. You love blending ancient traditions with a modern, fast-paced professional life.",
    vibe_tag: "Gateway to the golden desert sands",
    image: "assets/wilayas/30-Ouargla.jpg",
    tags: {
    desert: 3,
    fast: 3,
    urban: 2,
    traditional: 2,
    nightlife: 1,
    family: 2,
    low_budget: 1,
    mid_budget: 2,
    historic: 2,
    modern: 2,
    local: 2,
    touristy: 1
    },
  },
  oran: {
    name: "Oran",
    demonym: "ORANAISE",
    emoji: "💃🎶",
    tagline: "The life of the party, always.",
    description: "You are the definition of cosmopolitan. With your love for music, nightlife, and social scenes, you’re the friend everyone invites to the main event.",
    vibe_tag: "Radiating coastal energy and sunny vibes",
    image: "assets/wilayas/31-Oran.jpg",
    tags: {
    coastal: 3,
    temperate: 2,
    fast: 3,
    urban: 3,
    nightlife: 3,
    low_budget: 1,
    mid_budget: 2,
    historic: 1,
    modern: 3,
    local: 1,
    touristy: 3
    },
  },
  el_bayadh: {
    name: "El Bayadh",
    demonym: "EL BAYADIENNE",
    emoji: "🐏🏜️",
    tagline: "Gateway to the vast desert horizon.",
    description: "You’re a bit of a mystery who values tradition and the open road. You’re grounded and keep things real, always looking toward the next adventure.",
    vibe_tag: "High plateau winds and open skies",
    image: "assets/wilayas/32-El_Bayadh.jpg",
    tags: {
    mountain: 1,
    desert: 2,
    chill: 2,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
  illizi: {
    name: "Illizi",
    demonym: "ILLIZIENNE",
    emoji: "🎨✨",
    tagline: "Ancient art, endless desert magic.",
    description: "You are a total explorer with a soul for discovery. You prefer breathtaking landscapes and quiet, profound connections over city noise.",
    vibe_tag: "Gateway to the Tassili wonders",
    image: "assets/wilayas/33-Illizi.jpg",
    tags: {
    mountain: 1,
    desert: 3,
    chill: 3,
    traditional: 3,
    family: 1,
    low_budget: 2,
    mid_budget: 1,
    historic: 3,
    local: 2,
    touristy: 2
    },
  },
  bordj_bou_arr_ridj: {
    name: "Bordj Bou Arréridj",
    demonym: "BORDJIENNE",
    emoji: "📱🏗️",
    tagline: "Innovating the future, one step ahead.",
    description: "You’re tech-savvy, fast-moving, and always working on a new project. You’re the friend who’s always got the latest gadget and big plans.",
    vibe_tag: "Crafting excellence in the highlands",
    image: "assets/wilayas/34-Bordj_Bou_Arr_ridj.jpg",
    tags: {
    mountain: 1,
    temperate: 1,
    fast: 3,
    urban: 2,
    traditional: 1,
    nightlife: 1,
    family: 2,
    low_budget: 1,
    mid_budget: 2,
    modern: 3,
    local: 2
    },
  },
  boumerd_s: {
    name: "Boumerdès",
    demonym: "BOUMERDÉSIENNE",
    emoji: "🎓🌊",
    tagline: "Student life by the seaside.",
    description: "You’re the perfect balance of student energy and coastal chill. You love being close to the action while keeping your life balanced and fun.",
    vibe_tag: "Where the sea kisses the forest",
    image: "assets/wilayas/35-Boumerd_s.jpg",
    tags: {
    coastal: 3,
    temperate: 2,
    fast: 2,
    chill: 1,
    urban: 2,
    traditional: 1,
    nightlife: 1,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    modern: 2,
    local: 2,
    touristy: 1
    },
  },
  el_tarf: {
    name: "El Tarf",
    demonym: "EL TARFIENNE",
    emoji: "🌲🦌",
    tagline: "Nature’s hidden gem, stay wild.",
    description: "You’re the ultimate nature lover who finds peace in forests and lakes. You’re quiet, observant, and prefer a hike over a city street.",
    vibe_tag: "Wild nature and hidden coastal gems",
    image: "assets/wilayas/36-El_Tarf.jpg",
    tags: {
    coastal: 2,
    temperate: 3,
    chill: 3,
    traditional: 2,
    family: 2,
    low_budget: 3,
    local: 3,
    touristy: 1
    },
  },
  tindouf: {
    name: "Tindouf",
    demonym: "TINDOUFIENNE",
    emoji: "🌵☀️",
    tagline: "Tindouf: The ultimate rugged desert explorer.",
    description: "You are the definition of resilient and mysterious. You thrive in the deep silence of the Sahara where the stars are your only company.",
    vibe_tag: "Desert solitude under endless stars",
    image: "assets/wilayas/37-Tindouf.jpg",
    tags: {
    desert: 3,
    chill: 3,
    traditional: 2,
    family: 1,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
  tissemsilt: {
    name: "Tissemsilt",
    demonym: "TISSEMSILTIENNE",
    emoji: "🏔️🧥",
    tagline: "Tissemsilt: Your cozy mountain escape.",
    description: "You’re all about those quiet, slow-paced vibes. You love a good sweater, a hot drink, and keeping things super low-key.",
    vibe_tag: "Quiet plains and rugged mountain paths",
    image: "assets/wilayas/38-Tissemsilt.jpg",
    tags: {
    mountain: 3,
    temperate: 1,
    chill: 3,
    traditional: 3,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 1,
    local: 3
    },
  },
  el_oued: {
    name: "El Oued",
    demonym: "EL OUEDIENNE",
    emoji: "🕌🌴",
    tagline: "El Oued: The aesthetic dome-dwelling dreamer.",
    description: "You have an eye for unique architecture and love the desert heat. You're deeply connected to your roots and the sweet taste of home.",
    vibe_tag: "City of a thousand domes, sandy",
    image: "assets/wilayas/39-El_Oued.jpg",
    tags: {
    desert: 3,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 3,
    family: 3,
    low_budget: 2,
    mid_budget: 1,
    historic: 2,
    local: 3,
    touristy: 1
    },
  },
  khenchela: {
    name: "Khenchela",
    demonym: "KHENCHELIENNE",
    emoji: "❄️🏔️",
    tagline: "Khenchela: Fierce, cold, and totally authentic.",
    description: "You’re proud of your heritage and you don’t let the cold weather stop you. You’re tough, loyal, and love being surrounded by nature.",
    vibe_tag: "Rugged cliffs and ancient Berber roots",
    image: "assets/wilayas/40-Khenchela.jpg",
    tags: {
    mountain: 3,
    temperate: 1,
    chill: 2,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
  souk_ahras: {
    name: "Souk Ahras",
    demonym: "SOUK AHRASSIENNE",
    emoji: "🏛️🌲",
    tagline: "Souk Ahras: A historic soul in the mountains.",
    description: "You’re an old soul who loves stories from the past. Living near the border, you’re always curious about the world beyond.",
    vibe_tag: "Olive groves and historical crossroads",
    image: "assets/wilayas/41-Souk_Ahras.jpg",
    tags: {
    mountain: 3,
    temperate: 2,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 2,
    nightlife: 1,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 3,
    local: 2,
    touristy: 1
    },
  },
  tipaza: {
    name: "Tipaza",
    demonym: "TIPAZIENNE",
    emoji: "🌊🏛️",
    tagline: "Tipaza: Sun, sea, and ancient vibes.",
    description: "You live for the golden hour and beach days. You’re a total tourist magnet because your aesthetic is literally legendary.",
    vibe_tag: "Roman ruins by the turquoise sea",
    image: "assets/wilayas/42-Tipaza.jpg",
    tags: {
    coastal: 3,
    mountain: 1,
    temperate: 2,
    fast: 2,
    chill: 1,
    urban: 1,
    traditional: 1,
    nightlife: 2,
    family: 1,
    mid_budget: 3,
    historic: 3,
    modern: 1,
    touristy: 3
    },
  },
  mila: {
    name: "Mila",
    demonym: "MILIENNE",
    emoji: "🏺✨",
    tagline: "Mila: Quiet, classy, and timeless.",
    description: "You’re low-maintenance but deeply fascinating. You’re the friend everyone goes to when they need a calm, thoughtful conversation.",
    vibe_tag: "Ancient walls and deep valley secrets",
    image: "assets/wilayas/43-Mila.jpg",
    tags: {
    mountain: 3,
    temperate: 1,
    chill: 3,
    traditional: 2,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 3,
    local: 3
    },
  },
  a_n_defla: {
    name: "Aïn Defla",
    demonym: "AÏN DEFLIENNE",
    emoji: "🌾🚜",
    tagline: "Aïn Defla: The grounded, chill agricultural pro.",
    description: "You’re balanced and down-to-earth. You enjoy the simple life and know exactly how to make things grow and thrive.",
    vibe_tag: "Orchards, mountains, and peaceful charm",
    image: "assets/wilayas/44-A_n_Defla.jpg",
    tags: {
    mountain: 1,
    temperate: 3,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 2,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    modern: 1,
    local: 3
    },
  },
  na_ma: {
    name: "Naâma",
    demonym: "NAÂMIENNE",
    emoji: "🌅🐑",
    tagline: "Naâma: Steppe vibes and wild horizons.",
    description: "You’re a free spirit who loves open spaces. You’re a bit of an outsider, but that’s exactly what makes you so cool.",
    vibe_tag: "Desert dunes and sunset horizons",
    image: "assets/wilayas/45-Na_ma.jpg",
    tags: {
    mountain: 1,
    desert: 2,
    temperate: 1,
    chill: 3,
    traditional: 2,
    family: 2,
    low_budget: 3,
    local: 3
    },
  },
  a_n_t_mouchent: {
    name: "Aïn Témouchent",
    demonym: "AÏN TÉMOUCHENTIENNE",
    emoji: "🍇🏖️",
    tagline: "Aïn Témouchent: Coastal chic and vineyard dreams.",
    description: "You’re sophisticated, relaxed, and definitely the one with the best taste. You know how to enjoy the finer things without overdoing it.",
    vibe_tag: "Coastal beauty and sun-kissed shores",
    image: "assets/wilayas/46-A_n_T_mouchent.jpg",
    tags: {
    coastal: 3,
    temperate: 2,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 1,
    nightlife: 1,
    family: 2,
    low_budget: 1,
    mid_budget: 2,
    modern: 2,
    local: 2,
    touristy: 1
    },
  },
  gharda_a: {
    name: "Ghardaïa",
    demonym: "GHARDAÏENNE",
    emoji: "🧿🏜️",
    tagline: "Ghardaïa: Iconic, spiritual, and totally unique.",
    description: "You’re one of a kind and everyone knows it. You take pride in your traditions and have a style that nobody can replicate.",
    vibe_tag: "Geometric wonders in the desert sun",
    image: "assets/wilayas/47-Gharda_a.jpg",
    tags: {
    desert: 3,
    chill: 3,
    urban: 1,
    traditional: 3,
    family: 2,
    low_budget: 1,
    mid_budget: 2,
    historic: 3,
    local: 2,
    touristy: 2
    },
  },
  relizane: {
    name: "Relizane",
    demonym: "RELIZANIENNE",
    emoji: "🌱⚡",
    tagline: "Relizane: Growing fast and staying real.",
    description: "You’re ambitious and always on the move. You’re building your future while staying connected to your roots in the plains.",
    vibe_tag: "Fertile lands and agricultural heart",
    image: "assets/wilayas/48-Relizane.jpg",
    tags: {
    temperate: 3,
    fast: 3,
    urban: 2,
    traditional: 1,
    nightlife: 2,
    family: 1,
    low_budget: 2,
    mid_budget: 1,
    modern: 2,
    local: 3
    },
  },
  timimoun: {
    name: "Timimoun",
    demonym: "TIMIMOUNIENNE",
    emoji: "🏜️✨",
    tagline: "The red oasis where aesthetic dreams live.",
    description: "You are the main character of a desert indie film. With your stunning red mud-brick aesthetic and chill vibes, you turn every sunset into a core memory.",
    vibe_tag: "Red oasis dreams in golden sands",
    image: "assets/wilayas/49-Timimoun.jpg",
    tags: {
    desert: 3,
    chill: 3,
    traditional: 3,
    family: 2,
    low_budget: 3,
    historic: 3,
    local: 1,
    touristy: 2
    },
  },
  bordj_badji_mokhtar: {
    name: "Bordj Badji Mokhtar",
    demonym: "BORDJ BADJI MOKHTARIENNE",
    emoji: "📍🔥",
    tagline: "The ultimate frontier vibe for true explorers.",
    description: "You are mysterious, resilient, and totally off the grid. You thrive where the map ends and the real adventure begins.",
    vibe_tag: "Deep desert silence and starlit skies",
    image: "assets/wilayas/50-Bordj_Badji_Mokhtar.jpg",
    tags: {
    desert: 3,
    fast: 1,
    chill: 2,
    traditional: 3,
    family: 2,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
  ouled_djellal: {
    name: "Ouled Djellal",
    demonym: "OULED DJELLALIENNE",
    emoji: "🌴☀️",
    tagline: "Keepin' it real in the golden palms.",
    description: "You are grounded, hardworking, and deeply connected to your roots. Life is simple, sweet, and centered around family gatherings.",
    vibe_tag: "Rising oasis in the vast desert",
    image: "assets/wilayas/51-Ouled_Djellal.jpg",
    tags: {
    desert: 3,
    chill: 3,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 2,
    local: 3
    },
  },
  b_ni_abb_s: {
    name: "Béni Abbès",
    demonym: "BÉNI ABBÉSIENNE",
    emoji: "🏰🤍",
    tagline: "A white oasis straight out of Pinterest.",
    description: "You are the aesthetic friend who knows all the best photo spots. You keep things classy and serene, perfect for a peaceful getaway.",
    vibe_tag: "Gateway to the infinite Sahara sands",
    image: "assets/wilayas/52-B_ni_Abb_s.jpg",
    tags: {
    desert: 3,
    chill: 3,
    traditional: 2,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 2,
    modern: 1,
    local: 1,
    touristy: 2
    },
  },
  in_salah: {
    name: "In Salah",
    demonym: "IN SALAHIENNE",
    emoji: "⛽🌵",
    tagline: "Built different in the heart of heat.",
    description: "You are a powerhouse of energy and industry. Tough, resilient, and always focused on the bigger picture, you don't let the heat slow you down.",
    vibe_tag: "Where the desert meets the sky",
    image: "assets/wilayas/53-In_Salah.jpg",
    tags: {
    desert: 3,
    fast: 2,
    chill: 1,
    urban: 1,
    traditional: 2,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 1,
    modern: 2,
    local: 3
    },
  },
  in_guezzam: {
    name: "In Guezzam",
    demonym: "IN GUEZZAMIENNE",
    emoji: "🌍🐫",
    tagline: "The desert nomad with a global soul.",
    description: "You are the ultimate bridge between worlds. Cultural, open-minded, and always on the move, you represent the true spirit of the Sahara.",
    vibe_tag: "Borderland spirit in the deep south",
    image: "assets/wilayas/54-In_Guezzam.jpg",
    tags: {
    desert: 3,
    fast: 1,
    chill: 2,
    traditional: 3,
    family: 2,
    low_budget: 3,
    historic: 2,
    local: 3
    },
  },
  touggourt: {
    name: "Touggourt",
    demonym: "TOUGGOURTIENNE",
    emoji: "🌴🏙️",
    tagline: "Huge oasis energy, low key vibes.",
    description: "You are the bustling heartbeat of the palm groves. You have a little bit of everything and always make everyone feel right at home.",
    vibe_tag: "Palm groves and desert hospitality",
    image: "assets/wilayas/55-Touggourt.jpg",
    tags: {
    desert: 3,
    fast: 2,
    chill: 1,
    urban: 2,
    traditional: 2,
    nightlife: 1,
    family: 3,
    low_budget: 2,
    mid_budget: 1,
    historic: 1,
    modern: 2,
    local: 2,
    touristy: 1
    },
  },
  djanet: {
    name: "Djanet",
    demonym: "DJANETIENNE",
    emoji: "🎨✨",
    tagline: "UNESCO vibes and bucket-list views.",
    description: "You are breathtaking and iconic. People travel from all over just to catch a glimpse of your legendary natural beauty.",
    vibe_tag: "Tassili dreams and lunar landscapes",
    image: "assets/wilayas/56-Djanet.jpg",
    tags: {
    desert: 3,
    chill: 3,
    traditional: 2,
    family: 1,
    low_budget: 1,
    mid_budget: 2,
    historic: 3,
    local: 1,
    touristy: 3
    },
  },
  el_meghaier: {
    name: "El Meghaier",
    demonym: "EL MEGHAIERIENNE",
    emoji: "🌙🌾",
    tagline: "Cool, calm, and collected in the dunes.",
    description: "You are the definition of 'low-key.' You don't need a crowd to be happy—just good dates and quiet desert nights.",
    vibe_tag: "Oasis life in the golden dunes",
    image: "assets/wilayas/57-El_Meghaier.jpg",
    tags: {
    desert: 3,
    chill: 3,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
  el_meniaa: {
    name: "El Meniaa",
    demonym: "EL MENIAÏENNE",
    emoji: "📍⚖️",
    tagline: "The perfect crossroads for your next chapter.",
    description: "You are the ultimate connector. You bridge the north and south, balancing tradition with a forward-looking mindset.",
    vibe_tag: "Ancient paths in the desert heart",
    image: "assets/wilayas/58-El_Meniaa.jpg",
    tags: {
    desert: 3,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 2,
    family: 2,
    low_budget: 2,
    mid_budget: 1,
    historic: 2,
    modern: 1,
    local: 2,
    touristy: 1
    },
  },
  aflou: {
    name: "Aflou",
    demonym: "AFLOUIENNE",
    emoji: "🏔️❄️",
    tagline: "Mountain air and cozy sweater vibes.",
    description: "You are the refreshing escape from the heat. You love high altitudes, snowy winters, and a cozy, traditional mountain lifestyle.",
    vibe_tag: "Highland winds and steppe adventures",
    image: "assets/wilayas/59-Aflou.jpg",
    tags: {
    mountain: 3,
    temperate: 2,
    chill: 3,
    urban: 1,
    traditional: 3,
    family: 3,
    low_budget: 3,
    historic: 2,
    local: 3
    },
  },
  barika: {
    name: "Barika",
    demonym: "BARIKIENNE",
    emoji: "🌾🏠",
    tagline: "Keeping it steady on the plains.",
    description: "You are reliable and down-to-earth. You represent the hardworking spirit of the plains, where life is steady and community comes first.",
    vibe_tag: "Heart of the plains, vibrant spirit",
    image: "assets/wilayas/60-Barika.jpg",
    tags: {
    temperate: 3,
    chill: 3,
    urban: 1,
    traditional: 2,
    family: 3,
    low_budget: 3,
    historic: 1,
    modern: 1,
    local: 3
    },
  },
  ksar_chellala: {
    name: "Ksar Chellala",
    demonym: "KSAR CHELLALIENNE",
    emoji: "🧶✨",
    tagline: "The quiet soul of the high plains.",
    description: "You are the definition of low-key and authentic. You love keeping things traditional and appreciate the slow, steady rhythm of life away from the big city noise.",
    vibe_tag: "Desert gateway and historical charm",
    image: null,
    tags: {
    temperate: 2,
    chill: 3,
    traditional: 3,
    family: 2,
    low_budget: 3,
    historic: 2,
    local: 3
    },
  },
  messaad: {
    name: "Messaad",
    demonym: "MESSAADIENNE",
    emoji: "🏜️🐪",
    tagline: "Your gateway to the vast desert horizon.",
    description: "You are grounded, resilient, and deeply connected to your roots. You’ve got a rugged spirit and prefer the wide-open spaces of the Saharan edge over anything else.",
    vibe_tag: "Steppe soul and rugged beauty",
    image: "assets/wilayas/62-Messaad.jpg",
    tags: {
    desert: 3,
    chill: 2,
    urban: 1,
    traditional: 2,
    family: 3,
    low_budget: 2,
    mid_budget: 1,
    historic: 1,
    modern: 1,
    local: 2
    },
  },
  a_n_oussara: {
    name: "Aïn Oussara",
    demonym: "AÏN OUSSARIENNE",
    emoji: "🏗️📈",
    tagline: "The rising star of the plains.",
    description: "You are focused, ambitious, and always on the move. You’re building your future and don’t have time for anything that doesn't help you level up.",
    vibe_tag: "Highland energy and vast horizon",
    image: "assets/wilayas/63-A_n_Oussara.jpg",
    tags: {
    temperate: 2,
    fast: 3,
    urban: 2,
    traditional: 1,
    nightlife: 1,
    family: 1,
    low_budget: 2,
    mid_budget: 1,
    modern: 3,
    local: 2
    },
  },
  boussa_da: {
    name: "Boussaâda",
    demonym: "BOUSSAÂDIENNE",
    emoji: "🎨✨",
    tagline: "Where art and desert magic collide.",
    description: "You’re an absolute creative soul with a poetic vibe. You love beautiful things, hidden gems, and the kind of aesthetic that looks perfect on your feed.",
    vibe_tag: "Gateway to the Sahara's golden gate",
    image: "assets/wilayas/64-Boussa_da.jpg",
    tags: {
    mountain: 1,
    desert: 2,
    temperate: 1,
    fast: 1,
    chill: 2,
    urban: 1,
    traditional: 2,
    nightlife: 1,
    family: 1,
    low_budget: 1,
    mid_budget: 2,
    historic: 2,
    modern: 1,
    local: 1,
    touristy: 3
    },
  },
  el_abiodh_sidi_cheikh: {
    name: "El Abiodh Sidi Cheikh",
    demonym: "EL ABIODHIENNE",
    emoji: "🕌💫",
    tagline: "Keep it sacred, keep it real.",
    description: "You have a deep respect for history and traditions that have lasted for centuries. You aren't into trends—you care about what actually matters.",
    vibe_tag: "Desert winds and nomadic memories",
    image: "assets/wilayas/65-El_Abiodh_Sidi_Cheikh.jpg",
    tags: {
    mountain: 1,
    desert: 3,
    chill: 3,
    traditional: 3,
    family: 2,
    low_budget: 3,
    historic: 3,
    local: 3
    },
  },
  el_kantara: {
    name: "El Kantara",
    demonym: "EL KANTARIENNE",
    emoji: "🏛️📸",
    tagline: "The ultimate aesthetic transition point.",
    description: "You are the bridge between two worlds, and everyone notices your unique style. You live for epic views and documenting the beauty around you.",
    vibe_tag: "Gateway to the canyon's grand beauty",
    image: "assets/wilayas/66-El_Kantara.jpg",
    tags: {
    mountain: 2,
    desert: 1,
    temperate: 1,
    chill: 2,
    traditional: 2,
    family: 2,
    low_budget: 1,
    mid_budget: 2,
    historic: 3,
    local: 1,
    touristy: 3
    },
  },
  bir_el_ater: {
    name: "Bir El Ater",
    demonym: "BIR EL ATERIENNE",
    emoji: "⛰️⚒️",
    tagline: "Tough, rugged, and mountain-made.",
    description: "You’re built for the grind and thrive in environments that require grit. You’re definitely not a softie, and you love being in the heart of the action.",
    vibe_tag: "Frontier spirit in the desert sun",
    image: null,
    tags: {
    mountain: 3,
    temperate: 1,
    fast: 2,
    urban: 1,
    traditional: 1,
    nightlife: 1,
    family: 1,
    low_budget: 2,
    mid_budget: 1,
    modern: 2,
    local: 3
    },
  },
  ksar_el_boukhari: {
    name: "Ksar El Boukhari",
    demonym: "KSAR EL BOUKHARIENNE",
    emoji: "🏔️🏘️",
    tagline: "Old school vibes in the mountains.",
    description: "You have an 'old soul' energy that people find super comforting. You love classic aesthetics, mountain air, and keeping your inner circle close.",
    vibe_tag: "Ancient trade routes and mountain air",
    image: "assets/wilayas/68-Ksar_El_Boukhari.jpg",
    tags: {
    mountain: 3,
    temperate: 2,
    chill: 2,
    urban: 1,
    traditional: 3,
    family: 3,
    low_budget: 2,
    historic: 3,
    local: 2,
    touristy: 1
    },
  },
  el_aricha: {
    name: "El Aricha",
    demonym: "EL ARICHIENNE",
    emoji: "🐑🌌",
    tagline: "Total main character, off the grid.",
    description: "You don't need anyone's validation to know you're cool. You prefer peace, quiet, and staying completely away from the drama of the fast lane.",
    vibe_tag: "High plateau charm and open roads",
    image: "assets/wilayas/69-El_Aricha.jpg",
    tags: {
    desert: 1,
    temperate: 2,
    chill: 3,
    traditional: 2,
    family: 2,
    low_budget: 3,
    historic: 1,
    local: 3
    },
  },
};
