// ============================================================================
// AL-MIZAN AL-HADITH (الميزان الحديث) — CORE SCHOLARLY ENGINE & REPOSITORY DATA
// Principal Researcher: Abu Muhammad Khurram Shahzad (أبو محمد خرم شہزاد)
// ============================================================================

const HADITH_DATA = [
  {
    id: "MH-101",
    category: "usul",
    grade: "Sahih Mutawatir",
    gradeClass: "hukm-sahih",
    source: "Sahih al-Bukhari (1) • Sahih Muslim (1907)",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    urdu: "اعمال کا دارومدار نیتوں پر ہے، اور ہر شخص کے لیے وہی ہے جس کی اس نے نیت کی۔",
    english: "Actions are judged strictly by intentions, and every person shall have only that which they intended.",
    tahqiqNote: "Verified by Abu Muhammad Khurram Shahzad: Foundational axiom of Islamic jurisprudence and spiritual accountability. Unbroken golden chain from Yahya ibn Sa'id al-Ansari.",
    isnad: [
      { name: "Prophet Muhammad ﷺ", rank: "Masdar al-Wahy" },
      { name: "'Umar ibn al-Khattab", rank: "Sahabi" },
      { name: "'Alqamah ibn Waqqas", rank: "Thiqah Thabt" },
      { name: "Muhammad ibn Ibrahim", rank: "Thiqah" },
      { name: "Yahya ibn Sa'id al-Ansari", rank: "Imam Hujjah" },
      { name: "Sufyan ibn 'Uyaynah → Al-Bukhari", rank: "Amir al-Mu'minin fi al-Hadith" }
    ]
  },
  {
    id: "MH-102",
    category: "jarh",
    grade: "Sahih li-Dhatihi",
    gradeClass: "hukm-sahih",
    source: "Muqaddimah Sahih Muslim (5) • Al-Kifayah fi 'Ilm al-Riwayah",
    arabic: "إِنَّ هَذَا الْعِلْمَ دِينٌ، فَانْظُرُوا عَمَّنْ تَأْخُذُونَ دِينَكُمْ",
    urdu: "بے شک یہ علمِ حدیث تمہارا دین ہے، پس خوب تحقیق کر لو کہ تم اپنا دین کن لوگوں سے حاصل کر رہے ہو۔",
    english: "Indeed, this sacred knowledge is religion itself; therefore scrutinize carefully from whom you take your religion.",
    tahqiqNote: "Analytical Commentary (Al-Mizan Al-Hadith): Establishes the epistemological necessity of Isnad verification (Ilm al-Rijal) against unverified narrations.",
    isnad: [
      { name: "Muhammad ibn Sirin", rank: "Imam Tabi'i Kabir" },
      { name: "Hisham ibn Hassan", rank: "Thiqah Thabt" },
      { name: "Makhlad ibn Husayn", rank: "Saduq Thiqah" },
      { name: "Imam Muslim ibn al-Hajjaj", rank: "Muhaddith Hujjah" }
    ]
  },
  {
    id: "MH-103",
    category: "sunnah",
    grade: "Sahih",
    gradeClass: "hukm-sahih",
    source: "Jami' al-Tirmidhi (2656) • Musnad Ahmad (4157)",
    arabic: "نَضَّرَ اللَّهُ امْرَأً سَمِعَ مِنَّا حَدِيثًا فَحَفِظَهُ حَتَّى يُبَلِّغَهُ غَيْرَهُ، فَرُبَّ حَامِلِ فِقْهٍ إِلَى مَنْ هُوَ أَفْقَهُ مِنْهُ",
    urdu: "اللہ اس شخص کو تروتازہ اور شاداب رکھے جس نے ہم سے کوئی حدیث سنی، اسے یاد رکھا یہاں تک کہ دوسرے تک پہنچا دیا۔",
    english: "May Allah illuminate the person who hears a Hadith from us, memorizes it with precision, and transmits it accurately to others.",
    tahqiqNote: "Classified as Mutawatir Ma'nawi (transmitted via over 20 Companions). Forms the charter of the Al-Mizan Al-Hadith Research Center.",
    isnad: [
      { name: "Prophet Muhammad ﷺ", rank: "Masdar al-Wahy" },
      { name: "Zayd ibn Thabit / Ibn Mas'ud", rank: "Sahabi" },
      { name: "'Abd al-Rahman ibn Aban", rank: "Thiqah" },
      { name: "Shu'bah ibn al-Hajjaj", rank: "Amir al-Mu'minin fi al-Hadith" },
      { name: "Imam Ahmad / Al-Tirmidhi", rank: "Imam Muhaddith" }
    ]
  },
  {
    id: "MH-104",
    category: "akhlaq",
    grade: "Sahih",
    gradeClass: "hukm-sahih",
    source: "Sahih Muslim (2564) • Musnad Ahmad",
    arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    urdu: "بے شک اللہ تمہاری صورتوں اور تمہارے اموال کو نہیں دیکھتا، بلکہ وہ تمہارے دلوں اور تمہارے اعمال کو دیکھتا ہے۔",
    english: "Verily, Allah does not look at your outward appearances or your wealth, rather He looks into your hearts and your deeds.",
    tahqiqNote: "Verified in Kitab al-Tazkiyah by Abu Muhammad Khurram Shahzad: Demonstrates the synthesis between rigorous outward Sunnah and inward sincerity.",
    isnad: [
      { name: "Prophet Muhammad ﷺ", rank: "Masdar al-Wahy" },
      { name: "Abu Hurayrah (r.a.)", rank: "Hafiz al-Sahabah" },
      { name: "Yazid ibn al-Asamm", rank: "Thiqah" },
      { name: "kathir ibn Hisham", rank: "Thiqah" },
      { name: "Imam Muslim", rank: "Hujjah" }
    ]
  },
  {
    id: "MH-105",
    category: "ilal",
    grade: "Critical Tahqiq (Ma'lul / Weak Matrix Examined)",
    gradeClass: "hukm-critical",
    source: "Al-Mizan Critical Case Study #42 • 'Ilal al-Daraqutni Reference",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ (مَعَ تَحْقِيقِ الزِّيَادَاتِ الْمُنْكَرَةِ)",
    urdu: "علم حاصل کرنا ہر مسلمان پر فرض ہے (اس کے متعدد طرق ضعیف ہیں مگر شواہد کی بنا پر اصل متن حسن، جبکہ موضوع زیادات مردود ہیں)۔",
    english: "Seeking knowledge is an obligation upon every Muslim. [Case Study in Hidden Defects ('Ilal): Separating authentic collective corroboration from fabricated additions].",
    tahqiqNote: "Abu Muhammad Khurram Shahzad's Monograph Analysis: While individual chains have weakness, collective shawahid elevate the base clause, whereas famous appended clauses lack prophetic provenance.",
    isnad: [
      { name: "Anas ibn Malik (Multiple Turuq)", rank: "Sahabi" },
      { name: "Over 50 Collated Sub-Chains", rank: "Shawahid Comparison" },
      { name: "Evaluated by Al-Mizan 'Ilal Unit", rank: "Takhrij Mufassal" }
    ]
  }
];

const BOOKS_BY_KHURRAM_SHAHZAD = [
  {
    id: "BK-01",
    code: "VOL. I — USUL AL-TAHQIQ",
    arabicTitle: "الميزان الحديث في أصول التخريج ودراسة الأسانيد",
    urduTitle: "المیزان الحدیث: اصولِ تخریج اور دراسۃ الاسانید کا جدید منہج",
    englishTitle: "Al-Mizan Al-Hadith: Advanced Methodology in Hadith Verification & Isnad Criticism",
    author: "Abu Muhammad Khurram Shahzad",
    year: "1447 AH / 2026",
    pages: "640 Pages",
    language: "Arabic / Urdu / English Abstract",
    domain: "Usul al-Hadith & Takhrij",
    synopsis: "The flagship encyclopedic treatise of the Center. Establishes a rigorous 12-stage verification protocol combining classical Jarh wa Ta'dil (Ibn Hajar, Al-Dhahabi, Al-Daraqutni) with computational cross-chain mapping.",
    keyChapters: [
      "Chapter 1: Epistemological Foundations of the Prophetic Sunnah",
      "Chapter 2: Identifying Hidden Defects ('Ilal al-Hadith) in Apparently Sound Chains",
      "Chapter 3: Resolving Apparent Contradictions (Mukhtalif al-Hadith) with Precision",
      "Chapter 4: Digital & Manuscript Collation Standards at Al-Mizan Center"
    ],
    excerptArabic: "إِنَّ صِنَاعَةَ التَّحْقِيقِ الْحَدِيثِيِّ لَيْسَتْ مُجَرَّدَ نَقْلٍ آليٍّ لِأَحْكَامِ الْمُتَقَدِّمِينَ، بَلْ هِيَ فَهْمٌ دَقِيقٌ لِقَوَاعِدِ النَّقْدِ وَمَوَازِينِ التَّرْجِيحِ عِنْدَ أَئِمَّةِ الْعِلَلِ.",
    excerptEnglish: "True Hadith verification is not the mechanical copying of past rulings; rather, it is a deep mastery of the critical scales (Al-Mizan) used by the early Imams of 'Ilal to weigh every narrator and subtle transmission variance.",
    citation: "Shahzad, Abu Muhammad Khurram. Al-Mizan Al-Hadith fi Usul al-Takhrij wa Dirasat al-Asanid. Al-Mizan Al-Hadith Islamic Research Center Press, 2026."
  },
  {
    id: "BK-02",
    code: "VOL. II — 'ILAL & RIJAL",
    arabicTitle: "كشف العلل الخفية في المرويات المشهورة",
    urduTitle: "مشہور روایات میں عللِ خفیہ کی تحقیق اور میزانِ نقد",
    englishTitle: "Unveiling Hidden Defects ('Ilal) in Widely Circulated Narrations",
    author: "Abu Muhammad Khurram Shahzad",
    year: "1446 AH / 2025",
    pages: "512 Pages",
    language: "Urdu & Classical Arabic",
    domain: "'Ilal al-Hadith & Narrator Criticism",
    synopsis: "An exhaustive critical examination of 300 widely quoted narrations in contemporary pulpits and academic works, separating authentic Prophetic guidance from weak, interpolated (Mudraj), and fabricated reports.",
    keyChapters: [
      "Section I: The Distinction Between Mashhur on Tongues vs. Sahih in Chains",
      "Section II: Case Studies in Tadlis and Irsal Khafi",
      "Section III: Comprehensive Graded Index of 300 Examined Traditions"
    ],
    excerptArabic: "كَمْ مِنْ حَدِيثٍ شَاعَ عَلَى أَلْسِنَةِ الْوُعَّاظِ لَا يَثْبُتُ عِنْدَ النَّقْدِ الْمِيزَانِيِّ، وَفِي الصَّحِيحِ الثَّابِتِ غُنْيَةٌ وَكِفَايَةٌ لِكُلِّ بَاحِثٍ عَنِ الْحَقِّ.",
    excerptEnglish: "How many narrations circulate widely on the tongues of speakers yet fail the test of the critical scale—while in the established Sahih Sunnah lies complete sufficiency and light for every seeker of truth.",
    citation: "Shahzad, Abu Muhammad Khurram. Kashf al-'Ilal al-Khafiyyah fi al-Marwiyyat al-Mashhurah. Al-Mizan Al-Hadith Research Center, 2025."
  },
  {
    id: "BK-03",
    code: "VOL. III — FIQH AL-SUNNAH",
    arabicTitle: "الجمع بين النصوص النبوية ومقاصد الشريعة الإسلامية",
    urduTitle: "نصوصِ نبویہ کی تطبیق اور مقاصدِ شریعت کا توازن",
    englishTitle: "Harmonizing Prophetic Texts & the Higher Objectives of Islamic Law",
    author: "Abu Muhammad Khurram Shahzad",
    year: "1446 AH / 2025",
    pages: "488 Pages",
    language: "Urdu / Arabic / English",
    domain: "Fiqh al-Hadith & Maqasid",
    synopsis: "Demonstrates how authentic Hadith texts form a coherent, balanced legal and ethical architecture when understood through the methodology of the Salaf and classical juristic synthesis.",
    keyChapters: [
      "Part 1: Principles of Al-Jam' wa al-Tawfiq (Textual Harmonization)",
      "Part 2: Contextualizing Asbab ورود الحديث (Occasions of Prophetic Statements)",
      "Part 3: Contemporary Bioethical, Financial, and Social Rulings in Light of Sunnah"
    ],
    excerptArabic: "النُّصُوصُ الشَّرْعِيَّةُ كَالْجَسَدِ الْوَاحِدِ يُفَسِّرُ بَعْضُهَا بَعْضًا، وَلَا يَسْتَقِيمُ الْفِقْهُ إِلَّا بِجَمْعِ طُرُقِ الْبَابِ الْوَاحِدِ فِي كِفَّةِ الْمِيزَانِ.",
    excerptEnglish: "Sacred texts function as a single unified organism where one part illuminates another; sound jurisprudence is only achieved when all narrations on a topic are gathered together in the scale of balance.",
    citation: "Shahzad, Abu Muhammad Khurram. Al-Jam' bayna al-Nusus al-Nabawiyyah wa Maqasid al-Shari'ah. Al-Mizan Al-Hadith Press, 2025."
  },
  {
    id: "BK-04",
    code: "VOL. IV — DEFENSE OF SUNNAH",
    arabicTitle: "حجية السنة النبوية والرد على الشبهات المعاصرة",
    urduTitle: "حجیتِ حدیث اور دورِ حاضر کے تشکیکی شبہات کا علمی محاکمہ",
    englishTitle: "The Epistemic Authority of the Sunnah & Refutation of Modern Skepticism",
    author: "Abu Muhammad Khurram Shahzad",
    year: "1445 AH / 2024",
    pages: "576 Pages",
    language: "English & Urdu Dual Edition",
    domain: "Epistemology & Defense of Hadith",
    synopsis: "A landmark intellectual response to Orientalist and modernist critiques of Hadith transmission, documenting early 1st-century AH written Sahifas, memory verification protocols, and manuscript continuity.",
    keyChapters: [
      "Chapter 1: Written Hadith Sahifas in the Lifetime of the Prophet ﷺ and Companions",
      "Chapter 2: Mathematical Probability & Multi-Regional Cross-Verification in Isnad",
      "Chapter 3: Deconstructing Revisionist Claims on Early Hadith Codification"
    ],
    excerptArabic: "لَمْ تَشْهَدْ أُمَّةٌ مِنَ الْأُمَمِ نِظَامًا تَوْثِيقِيًّا كَنِظَامِ الْإِسْنَادِ الَّذِي حَفِظَ اللهُ بِهِ سُنَّةَ نَبِيِّهِ ﷺ مِنْ كُلِّ دَخِيلٍ.",
    excerptEnglish: "No civilization in human history has witnessed an archival and biographical verification system matching the Isnad—through which Allah preserved the Sunnah of His Messenger ﷺ with unmatched precision.",
    citation: "Shahzad, Abu Muhammad Khurram. Hujjiyyat al-Sunnah al-Nabawiyyah wa al-Radd 'ala al-Shubuhat al-Mu'asirah. Al-Mizan Al-Hadith Center, 2024."
  },
  {
    id: "BK-05",
    code: "VOL. V — MANUSCRIPT HERITAGE",
    arabicTitle: "تحقيق المخطوطات الحديثية النادرة: دراسة وتأصيل",
    urduTitle: "نادر مخطوطاتِ حدیث کی تحقیق، مقابلہ اور اشاعت کے اصول",
    englishTitle: "Critical Edition of Rare Hadith Manuscripts: Paleography & Sama'at Analysis",
    author: "Abu Muhammad Khurram Shahzad",
    year: "1445 AH / 2024",
    pages: "420 Pages",
    language: "Arabic / Urdu",
    domain: "Manuscript Tahqiq & Codicology",
    synopsis: "A practical and theoretical manual on reading audition certificates (Sama'at), colophons, marginalia, and orthographic scripts in classical Islamic manuscripts from Damascus, Istanbul, Medina, and the Subcontinent.",
    keyChapters: [
      "Chapter 1: Deciphering Sama'at and Ijazah Registers on Manuscript Folios",
      "Chapter 2: Stemmatic Collation of Mother Copies (Al-Usul al-Khattiyyah)",
      "Chapter 3: Critical Apparatus Formatting for International Islamic Editions"
    ],
    excerptArabic: "المخطوطات الإسلامية كنوزٌ ناطقةٌ بشرف هذه الأمة في خدمة الوحيين، وتحقيقها أمانة علمية تقتضي الصبر والبصيرة.",
    excerptEnglish: "Islamic manuscripts are living witnesses to this Ummah's devotion to revelation; editing them critically is a sacred trust requiring paleographic insight and scholarly patience.",
    citation: "Shahzad, Abu Muhammad Khurram. Tahqiq al-Makhtutat al-Hadithiyyah al-Nadirah. Al-Mizan Al-Hadith Center, 2024."
  },
  {
    id: "BK-06",
    code: "VOL. VI — ETHICS OF THE SCHOLAR",
    arabicTitle: "حلية طالب الحديث وآداب البحث العلمي الرصين",
    urduTitle: "طالبِ علمِ حدیث کا زیور اور آدابِ تحقیق و اختلاف",
    englishTitle: "Ornament of the Hadith Researcher: Ethics of Inquiry & Scholarly Disagreement",
    author: "Abu Muhammad Khurram Shahzad",
    year: "1447 AH / 2026",
    pages: "365 Pages",
    language: "Urdu / Arabic / English",
    domain: "Tazkiyah & Academic Adab",
    synopsis: "Synthesizing spiritual refinement with academic rigor, this volume guides researchers and students of sacred knowledge on humility, objectivity, intellectual honesty, and the etiquette of scholarly critique.",
    keyChapters: [
      "Chapter 1: Sincerity (Ikhlas) as the First Condition of Sacred Research",
      "Chapter 2: Justice and Objectivity When Critiquing Opinions (Adab al-Ikhtilaf)",
      "Chapter 3: Daily Regimen of the Muhaddith Between Worship and Investigation"
    ],
    excerptArabic: "العلم بلا أدب كالنار بلا حطب، وشرف الباحث في الحديث أن يظهر أثر السنة في سمته وعدله وإنصافه قبل قلمه.",
    excerptEnglish: "The true honor of the researcher of Hadith is that the light of the Prophetic Sunnah manifests in their justice, fairness, and character even before it flows from their pen.",
    citation: "Shahzad, Abu Muhammad Khurram. Hilyat Talib al-Hadith wa Adab al-Bahth al-'Ilmi. Al-Mizan Al-Hadith Press, 2026."
  }
];

const UI_TRANSLATIONS = {
  en: {
    dir: "ltr",
    navHome: "Sanctuary",
    navTahqiq: "Hadith Workbench",
    navBooks: "Books of Khurram Shahzad",
    navPillars: "Research Pillars",
    navManuscripts: "Manuscripts & Journal",
    heroEyebrow: "GLOBAL CENTER FOR PROPHETIC TRADITION & CRITICAL TAHQIQ",
    heroTitle: "Weighing Sacred Heritage on the <span>Scale of Authentic Proof</span>",
    heroDesc: "Welcome to Al-Mizan Al-Hadith (المیزان الحدیث) — an international Islamic research sanctuary dedicated to epistemological rigor in Hadith sciences, Isnad verification, manuscript preservation, and the authored works of Researcher Abu Muhammad Khurram Shahzad.",
    ctaExploreBooks: "Explore Books of Abu Muhammad Khurram Shahzad",
    ctaWorkbench: "Launch Hadith Verification Workbench"
  },
  ur: {
    dir: "rtl",
    navHome: "مرکزِ تحقیق",
    navTahqiq: "میزانِ تحقیقِ حدیث",
    navBooks: "تصانیفِ ابو محمد خرم شہزاد",
    navPillars: "شعبہ جاتِ تحقیق",
    navManuscripts: "مخطوطات و مجلہ",
    heroEyebrow: "علومِ نبوت، تحقیقِ اسانید اور احیائے تراث کا عالمی علمی مرکز",
    heroTitle: "میزانِ عدل و برہان پر <span>سنتِ نبویہ ﷺ کی مستند تحقیق</span>",
    heroDesc: "مرکز ’’المیزان الحدیث‘‘ میں خوش آمدید — یہ عالمی تحقیقی ادارہ علومِ حدیث، جرح و تعدیل، عللِ خفیہ کی تحقیق، نادر مخطوطات کے احیاء اور محقق ابو محمد خرم شہزاد حفظہ اللہ کی علمی و تحقیقی تصانیف کی اشاعت کے لیے وقف ہے۔",
    ctaExploreBooks: "محقق ابو محمد خرم شہزاد کی کتب کا مطالعہ کریں",
    ctaWorkbench: "جدید انجن برائے تحقیقِ حدیث"
  },
  ar: {
    dir: "rtl",
    navHome: "الرئيسية",
    navTahqiq: "منصة تحقيق الحديث",
    navBooks: "مؤلفات أبي محمد خرم شهزاد",
    navPillars: "أقسام المركز",
    navManuscripts: "المخطوطات والمجلة",
    heroEyebrow: "المركز العالمي لعلوم السنة النبوية والتحقيق العلمي الرصين",
    heroTitle: "تحقيق التراث النبوي الشريف على <span>ميزان البرهان والإسناد</span>",
    heroDesc: "مرحباً بكم في مركز «الميزان الحديث» للبحوث والدراسات الإسلامية — صرح علمي عالمي يُعنى بتحقيق المتون ودراسة الأسانيد وعلل الحديث ونشر مؤلفات الباحث المحقق أبي محمد خرم شهزاد.",
    ctaExploreBooks: "تصفح مؤلفات الباحث أبي محمد خرم شهزاد",
    ctaWorkbench: "بوابة التحقيق ودراسة الأسانيد"
  }
};

// State
let currentFilter = "all";
let currentSearch = "";
let currentBookFilter = "all";
let currentLang = "en";

document.addEventListener("DOMContentLoaded", () => {
  initHijriDate();
  renderHadithWorkbench();
  renderScholarBooks();
  setupEventListeners();
});

function initHijriDate() {
  const badge = document.getElementById("hijri-date-display");
  if (!badge) return;
  try {
    const formatter = new Intl.DateTimeFormat("en-TN-u-ca-islamic-umalqura", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    badge.textContent = formatter.format(new Date());
  } catch (e) {
    badge.textContent = "1448 AH • Al-Mizan Research Observatory";
  }
}

function renderHadithWorkbench() {
  const container = document.getElementById("hadith-results-container");
  if (!container) return;

  const query = currentSearch.trim().toLowerCase();
  const filtered = HADITH_DATA.filter((item) => {
    const matchesCat = currentFilter === "all" || item.category === currentFilter;
    const matchesQuery =
      !query ||
      item.arabic.toLowerCase().includes(query) ||
      item.urdu.toLowerCase().includes(query) ||
      item.english.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query) ||
      item.tahqiqNote.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  const countEl = document.getElementById("hadith-count-badge");
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} Verified Research Entries`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="hadith-card" style="text-align:center; padding: 3rem;">
        <h3 style="color: var(--gold-primary); margin-bottom:0.5rem;">No Matching Narrations Found in Current Filter</h3>
        <p style="color: var(--text-secondary);">Try searching in Arabic, Urdu, or English (e.g., "intentions", "نیت", "إسناد", "Muslim", "Ilal").</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map(
      (h) => `
    <article class="hadith-card">
      <div class="hadith-card-top">
        <div class="hadith-source-tag">
          <span>◈ [${h.id}]</span>
          <span>${h.source}</span>
        </div>
        <span class="hukm-badge ${h.gradeClass}">⚖ Hukm: ${h.grade}</span>
      </div>
      
      <div class="hadith-arabic">${h.arabic}</div>
      <div class="hadith-urdu">${h.urdu}</div>
      <p class="hadith-english">“${h.english}”</p>
      
      <div style="background: var(--gold-glow); border-left: 3px solid var(--gold-primary); padding: 0.75rem 1rem; border-radius: 6px; font-size: 0.88rem; color: var(--text-primary); margin-bottom: 1rem;">
        <strong style="color: var(--gold-primary);">Al-Mizan Tahqiq Note:</strong> ${h.tahqiqNote}
      </div>

      <div class="isnad-chain-box">
        <div class="isnad-label">⛓ Verified Isnad Transmission Chain (Sanad Visualizer)</div>
        <div class="isnad-nodes">
          ${h.isnad
            .map(
              (node, idx) => `
            <span class="narrator-node">
              <strong>${node.name}</strong>
              <span class="narrator-grade">[${node.rank}]</span>
            </span>
            ${idx < h.isnad.length - 1 ? '<span class="chain-arrow">⟶</span>' : ""}
          `
            )
            .join("")}
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function renderScholarBooks() {
  const grid = document.getElementById("khurram-books-grid");
  if (!grid) return;

  const filteredBooks = BOOKS_BY_KHURRAM_SHAHZAD.filter((b) => {
    if (currentBookFilter === "all") return true;
    return b.domain.toLowerCase().includes(currentBookFilter.toLowerCase());
  });

  grid.innerHTML = filteredBooks
    .map(
      (book) => `
    <article class="book-card">
      <div>
        <div class="book-cover-visual">
          <div class="book-cover-top">
            <span>${book.code}</span>
            <span>الميزان الحديث</span>
          </div>
          <div class="book-cover-arabic">${book.arabicTitle}</div>
          <div class="book-cover-author">تأليف وتحقيق: أبو محمد خرم شهزاد</div>
        </div>

        <div class="book-meta-row">
          <span class="book-badge">${book.domain}</span>
          <span class="book-badge">${book.pages}</span>
          <span class="book-badge">${book.year}</span>
        </div>

        <h3 class="book-title">${book.englishTitle}</h3>
        <div class="book-urdu-title">${book.urduTitle}</div>
        <p class="book-synopsis">${book.synopsis}</p>
      </div>

      <div class="book-actions">
        <button class="btn-primary btn-sm" onclick="openBookModal('${book.id}')">
          📖 Read Monograph & Chapters
        </button>
        <button class="btn-secondary btn-sm" onclick="copyBookCitation('${book.id}')">
          ❝ Cite Work
        </button>
      </div>
    </article>
  `
    )
    .join("");
}

window.openBookModal = function (bookId) {
  const book = BOOKS_BY_KHURRAM_SHAHZAD.find((b) => b.id === bookId);
  if (!book) return;

  const modal = document.getElementById("book-reader-modal");
  const content = document.getElementById("book-modal-body");

  content.innerHTML = `
    <div class="section-tag">${book.code} • ${book.domain}</div>
    <h2 style="font-size: 1.9rem; margin-bottom: 0.4rem; color: var(--text-primary);">${book.englishTitle}</h2>
    <div style="font-family: var(--font-arabic); font-size: 1.55rem; color: var(--gold-primary); margin-bottom: 0.35rem;" dir="rtl">${book.arabicTitle}</div>
    <div style="font-family: var(--font-urdu); font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.25rem;" dir="rtl">${book.urduTitle}</div>

    <div style="display:flex; flex-wrap:wrap; gap:0.75rem; padding-bottom:1.25rem; border-bottom:1px solid var(--gold-border); font-size:0.86rem; color:var(--text-secondary);">
      <span><strong>Author & Muhaddith:</strong> ${book.author}</span>
      <span>•</span>
      <span><strong>Publication:</strong> ${book.year}</span>
      <span>•</span>
      <span><strong>Extent:</strong> ${book.pages}</span>
      <span>•</span>
      <span><strong>Edition:</strong> ${book.language}</span>
    </div>

    <div class="chapter-preview-box">
      <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--gold-primary); font-weight:700; margin-bottom:0.75rem;">
        Selected Arabic & English Manuscript Excerpt
      </div>
      <p style="font-family:var(--font-arabic); font-size:1.45rem; color:var(--text-primary); direction:rtl; text-align:right; margin-bottom:0.9rem; line-height:1.9;">
        « ${book.excerptArabic} »
      </p>
      <p style="font-style:italic; color:var(--text-secondary); font-size:0.98rem;">
        “${book.excerptEnglish}”
      </p>
    </div>

    <h4 style="font-size:1.2rem; color:var(--gold-primary); margin-bottom:0.75rem;">Key Analytical Chapters in This Volume:</h4>
    <ul style="list-style:none; display:grid; gap:0.55rem; margin-bottom:1.5rem;">
      ${book.keyChapters
        .map(
          (ch) => `
        <li style="background:var(--bg-card); border:1px solid var(--gold-border); padding:0.7rem 1rem; border-radius:8px; font-size:0.92rem;">
          ✦ ${ch}
        </li>
      `
        )
        .join("")}
    </ul>

    <div style="background:var(--bg-primary); border:1px dashed var(--gold-border-strong); padding:1rem; border-radius:8px; font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.5rem;">
      <strong style="color:var(--gold-primary);">Academic Citation (MLA / Chicago Islamic Studies Standard):</strong><br/>
      ${book.citation}
    </div>

    <div style="display:flex; gap:1rem; flex-wrap:wrap;">
      <button class="btn-primary" onclick="downloadMonographSummary('${book.id}')">
        ⬇ Download Scholarly Dossier & Table of Contents (.TXT)
      </button>
      <button class="btn-secondary" onclick="closeBookModal()">
        Close Reader
      </button>
    </div>
  `;

  modal.classList.add("open");
};

window.closeBookModal = function () {
  const modal = document.getElementById("book-reader-modal");
  if (modal) modal.classList.remove("open");
};

window.copyBookCitation = function (bookId) {
  const book = BOOKS_BY_KHURRAM_SHAHZAD.find((b) => b.id === bookId);
  if (!book) return;
  navigator.clipboard?.writeText(book.citation);
  showToast(`Copied citation for "${book.englishTitle}"`);
};

window.downloadMonographSummary = function (bookId) {
  const book = BOOKS_BY_KHURRAM_SHAHZAD.find((b) => b.id === bookId);
  if (!book) return;
  const textContent = `====================================================================
AL-MIZAN AL-HADITH ISLAMIC RESEARCH CENTER (الميزان الحديث)
OFFICIAL MONOGRAPH DOSSIER & RESEARCH SYNOPSIS
====================================================================

Title (English): ${book.englishTitle}
Title (Arabic) : ${book.arabicTitle}
Title (Urdu)   : ${book.urduTitle}
Author         : Abu Muhammad Khurram Shahzad (أبو محمد خرم شهزاد)
Publication    : ${book.year} | ${book.pages} | ${book.domain}

SYNOPSIS:
${book.synopsis}

EXCERPT (ARABIC):
${book.excerptArabic}

EXCERPT (ENGLISH):
"${book.excerptEnglish}"

TABLE OF CONTENTS HIGHLIGHTS:
${book.keyChapters.map((c, i) => `${i + 1}. ${c}`).join("\n")}

ACADEMIC CITATION:
${book.citation}
====================================================================`;

  const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${book.id}-Al-Mizan-Khurram-Shahzad.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Downloaded Scholarly Monograph Dossier!");
};

function showToast(message) {
  let toast = document.getElementById("almizan-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "almizan-toast";
    toast.style.cssText =
      "position:fixed; bottom:24px; right:24px; background:var(--gold-primary); color:#070d0a; padding:0.85rem 1.35rem; border-radius:10px; font-weight:700; z-index:999; box-shadow:0 10px 30px rgba(0,0,0,0.5); transition:opacity 0.3s ease;";
    document.body.appendChild(toast);
  }
  toast.textContent = `✦ ${message}`;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 3200);
}

function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById("hadith-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderHadithWorkbench();
    });
  }

  // Category filter pills
  document.querySelectorAll("[data-hadith-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-hadith-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-hadith-filter");
      renderHadithWorkbench();
    });
  });

  // Book filter pills
  document.querySelectorAll("[data-book-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-book-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentBookFilter = btn.getAttribute("data-book-filter");
      renderScholarBooks();
    });
  });

  // Theme Toggle (Manuscript Dark vs Parchment Daylight)
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "parchment") {
        document.documentElement.removeAttribute("data-theme");
        themeBtn.textContent = "☀";
        showToast("Switched to Illuminated Manuscript Night Mode");
      } else {
        document.documentElement.setAttribute("data-theme", "parchment");
        themeBtn.textContent = "☾";
        showToast("Switched to Classical Samarqand Parchment Mode");
      }
    });
  }

  // Language Switcher (EN / UR / AR)
  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-switch");
      currentLang = lang;
      document.querySelectorAll("[data-lang-switch]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyLanguage(lang);
    });
  });

  // Close modal on backdrop click
  const modal = document.getElementById("book-reader-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeBookModal();
    });
  }
}

function applyLanguage(lang) {
  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
  document.documentElement.setAttribute("dir", t.dir);
  document.documentElement.setAttribute("lang", lang);

  const map = {
    "nav-home-text": t.navHome,
    "nav-tahqiq-text": t.navTahqiq,
    "nav-books-text": t.navBooks,
    "nav-pillars-text": t.navPillars,
    "nav-manuscripts-text": t.navManuscripts,
    "hero-eyebrow-text": t.heroEyebrow,
    "hero-desc-text": t.heroDesc,
    "cta-books-text": t.ctaExploreBooks,
    "cta-workbench-text": t.ctaWorkbench
  };

  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  const heroTitle = document.getElementById("hero-title-text");
  if (heroTitle) heroTitle.innerHTML = t.heroTitle;

  showToast(
    lang === "ur"
      ? "زبان اردو (نستعلیق) میں تبدیل کر دی گئی"
      : lang === "ar"
      ? "تم تغيير اللغة إلى العربية الفصحى"
      : "Switched interface language to English"
  );
}
