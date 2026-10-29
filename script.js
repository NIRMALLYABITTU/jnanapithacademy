// Academy WhatsApp number: country code + Indian mobile number, digits only.
const WHATSAPP_NUMBER = "916290192575";

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    '.topline-inner span:first-child': 'Dankuni, Hooghly, West Bengal',
    '.eyebrow-dot': '',
    '.hero .eyebrow': '<span class="eyebrow-dot"></span> A learning community in Dankuni',
    '.about-section .section-heading .eyebrow': 'WELCOME TO JNANAPITH',
    '.about-section h2': 'Every student can grow with the <em>right guidance.</em>',
    '.about-copy .large-copy': 'Learning is more than finishing a syllabus. It is building the confidence to ask questions, understand ideas and apply them independently.',
    '.about-copy p:not(.large-copy)': 'At Jnanapith Academy, we aim to support students through clear explanations, guided practice and a learning environment that values understanding.',
    '.inline-link': 'Explore our courses <span>→</span>',
    '.programmes-section .eyebrow': 'COURSES & SUBJECTS',
    '.approach-intro .eyebrow': 'THE JNANAPITH APPROACH',
    '.approach-intro h2': 'Not just more classes.<br><em>Better learning.</em>',
    '.approach-intro > p': 'Consistent teaching and practice can help students identify what they understand and where they need more support.',
    '.approach-intro .button': 'Talk to our team <span>→</span>',
    '.approach-item:nth-child(1) h3': 'Understand the starting point',
    '.approach-item:nth-child(1) p': 'Discuss the student’s needs and identify areas for further practice.',
    '.approach-item:nth-child(2) h3': 'Learn, practise, revisit',
    '.approach-item:nth-child(2) p': 'Pair explanations with worksheets, questions and revision.',
    '.approach-item:nth-child(3) h3': 'Check progress regularly',
    '.approach-item:nth-child(3) p': 'Use classwork and tests to identify where students need support.',
    '.approach-item:nth-child(4) h3': 'Keep parents informed',
    '.approach-item:nth-child(4) p': 'Share constructive updates on participation and academic progress.',
    '.language-grid > div:first-child .eyebrow': 'FLEXIBLE BILINGUAL TEACHING',
    '.language-grid h2': 'Two languages.<br><em>One clear goal.</em>',
    '.language-card:first-of-type h3': 'Bengali support',
    '.language-card:first-of-type p': 'Explanations and guidance in Bengali where helpful for the student.',
    '.language-card:nth-of-type(2) h3': 'English support',
    '.language-card:nth-of-type(2) p': 'Build subject vocabulary and confidence with English-medium material.',
    '.language-footnote': 'Teaching language is flexible and can be discussed during admission.',
    '.cta-inner .eyebrow': 'TAKE THE FIRST STEP',
    '.cta-inner h2': 'Let’s find the right learning plan.',
    '.cta-inner p': 'Tell us the student’s class, board and subjects of interest. Ask about available courses and a free demo class.',
    '.cta-inner .button': 'Enquire about admission <span>→</span>',
    '.faq-grid .eyebrow': 'GOOD TO KNOW',
    '.faq-grid h2': 'Frequently asked <em>questions.</em>',
    '.faq-intro': 'Ask us about a class, subject, fees or demo class.',
    '.faq-list details:nth-child(1) summary': 'Which classes does Jnanapith Academy support? <span>+</span>',
    '.faq-list details:nth-child(1) p': 'All subjects are offered for Classes VI–X. Science and Arts are offered for Classes XI–XII. Ask us to confirm specific subject availability.',
    '.faq-list details:nth-child(2) summary': 'Which boards do you cover? <span>+</span>',
    '.faq-list details:nth-child(2) p': 'The academy supports WBBSE and CBSE. Mention the student’s class and board when enquiring.',
    '.faq-list details:nth-child(3) summary': 'Can students learn in Bengali and English? <span>+</span>',
    '.faq-list details:nth-child(3) p': 'Teaching is flexible and bilingual. Discuss the student’s preferred language during enquiry.',
    '.faq-list details:nth-child(4) summary': 'How do I find out about fees? <span>+</span>',
    '.faq-list details:nth-child(4) p': 'Please contact the academy for fee details and batch timings. A free demo class is available.',
    '.faq-list details:nth-child(5) summary': 'Are online classes available across West Bengal? <span>+</span>',
    '.faq-list details:nth-child(5) p': 'Online learning is part of the academy’s broader goal. Current online availability has not yet been confirmed; please enquire.',
    '.footer-main p': 'Knowledge Lights the Way.'
  },
  bn: {
    '.topline-inner span:first-child': 'ডানকুনি, হুগলি, পশ্চিমবঙ্গ',
    '.hero .eyebrow': '<span class="eyebrow-dot"></span> ডানকুনির একটি শিক্ষাকেন্দ্র',
    '.about-section .section-heading .eyebrow': 'জ্ঞানপীঠ অ্যাকাডেমিতে স্বাগতম',
    '.about-section h2': 'সঠিক <em>দিকনির্দেশনায়</em> প্রত্যেক শিক্ষার্থী এগিয়ে যেতে পারে।',
    '.about-copy .large-copy': 'শুধু সিলেবাস শেষ করাই শিক্ষা নয়। প্রশ্ন করার সাহস, বিষয় বোঝার ক্ষমতা এবং নিজের জ্ঞান প্রয়োগ করার আত্মবিশ্বাস গড়ে তোলাও জরুরি।',
    '.about-copy p:not(.large-copy)': 'জ্ঞানপীঠ অ্যাকাডেমিতে আমরা সহজ ব্যাখ্যা, নির্দেশিত অনুশীলন এবং বিষয় বোঝার উপর গুরুত্ব দিয়ে শিক্ষার্থীদের সহায়তা করতে চাই।',
    '.inline-link': 'কোর্স সম্পর্কে জানুন <span>→</span>',
    '.programmes-section .eyebrow': 'কোর্স ও বিষয়সমূহ',
    '.approach-intro .eyebrow': 'জ্ঞানপীঠের শিক্ষাপদ্ধতি',
    '.approach-intro h2': 'শুধু বেশি ক্লাস নয়।<br><em>আরও ভালো শেখা।</em>',
    '.approach-intro > p': 'নিয়মিত পড়ানো ও অনুশীলনের মাধ্যমে শিক্ষার্থীরা কোন বিষয় বুঝেছে এবং কোথায় আরও সহায়তা দরকার তা চিহ্নিত করা যায়।',
    '.approach-intro .button': 'আমাদের সঙ্গে কথা বলুন <span>→</span>',
    '.approach-item:nth-child(1) h3': 'শিক্ষার্থীর বর্তমান স্তর বোঝা',
    '.approach-item:nth-child(1) p': 'শিক্ষার্থীর প্রয়োজন আলোচনা করে কোন বিষয়গুলিতে আরও অনুশীলন দরকার তা চিহ্নিত করা।',
    '.approach-item:nth-child(2) h3': 'শেখা, অনুশীলন ও পুনরালোচনা',
    '.approach-item:nth-child(2) p': 'ব্যাখ্যার সঙ্গে ওয়ার্কশিট, প্রশ্ন এবং পুনরালোচনা যুক্ত করা।',
    '.approach-item:nth-child(3) h3': 'নিয়মিত অগ্রগতি যাচাই',
    '.approach-item:nth-child(3) p': 'ক্লাসের কাজ ও পরীক্ষার মাধ্যমে কোথায় সহায়তা প্রয়োজন তা বোঝা।',
    '.approach-item:nth-child(4) h3': 'অভিভাবকদের অবহিত রাখা',
    '.approach-item:nth-child(4) p': 'পড়াশোনায় অংশগ্রহণ ও অগ্রগতি সম্পর্কে গঠনমূলক তথ্য জানানো।',
    '.language-grid > div:first-child .eyebrow': 'বাংলা ও ইংরেজিতে নমনীয় শিক্ষাদান',
    '.language-grid h2': 'দুটি ভাষা।<br><em>লক্ষ্য একটাই।</em>',
    '.language-card:first-of-type h3': 'বাংলায় সহায়তা',
    '.language-card:first-of-type p': 'শিক্ষার্থীর প্রয়োজন অনুযায়ী বাংলায় ব্যাখ্যা ও পড়াশোনার সহায়তা।',
    '.language-card:nth-of-type(2) h3': 'ইংরেজিতে সহায়তা',
    '.language-card:nth-of-type(2) p': 'ইংরেজি মাধ্যমে বিষয়ভিত্তিক শব্দভাণ্ডার ও আত্মবিশ্বাস গড়ে তোলা।',
    '.language-footnote': 'শিক্ষাদানের ভাষা নমনীয়। ভর্তির সময় এ বিষয়ে আলোচনা করা যাবে।',
    '.cta-inner .eyebrow': 'প্রথম পদক্ষেপ নিন',
    '.cta-inner h2': 'আপনার সন্তানের জন্য উপযুক্ত পড়ার পরিকল্পনা খুঁজে নিন।',
    '.cta-inner p': 'শ্রেণি, বোর্ড ও যে বিষয়গুলি পড়তে চান তা জানান। কোর্স এবং বিনামূল্যের ডেমো ক্লাস সম্পর্কে জেনে নিন।',
    '.cta-inner .button': 'ভর্তির বিষয়ে যোগাযোগ <span>→</span>',
    '.faq-grid .eyebrow': 'জেনে রাখুন',
    '.faq-grid h2': 'সাধারণ <em>প্রশ্নোত্তর।</em>',
    '.faq-intro': 'শ্রেণি, বিষয়, ফি বা ডেমো ক্লাস সম্পর্কে আমাদের জিজ্ঞাসা করুন।',
    '.faq-list details:nth-child(1) summary': 'কোন কোন শ্রেণিতে পড়ানো হয়? <span>+</span>',
    '.faq-list details:nth-child(1) p': 'ষষ্ঠ থেকে দশম শ্রেণি পর্যন্ত সব বিষয় পড়ানো হয়। একাদশ ও দ্বাদশ শ্রেণিতে বিজ্ঞান ও কলা বিভাগ রয়েছে। নির্দিষ্ট বিষয়ের উপলভ্যতা জেনে নিন।',
    '.faq-list details:nth-child(2) summary': 'কোন বোর্ডের পড়াশোনা করানো হয়? <span>+</span>',
    '.faq-list details:nth-child(2) p': 'WBBSE এবং CBSE বোর্ডের পড়াশোনায় সহায়তা করা হয়। যোগাযোগের সময় শিক্ষার্থীর শ্রেণি ও বোর্ড জানান।',
    '.faq-list details:nth-child(3) summary': 'বাংলা ও ইংরেজি—দুই ভাষাতেই কি পড়ানো হয়? <span>+</span>',
    '.faq-list details:nth-child(3) p': 'শিক্ষাদানে বাংলা ও ইংরেজি—দুই ভাষাই নমনীয়ভাবে ব্যবহার করা হয়। যোগাযোগের সময় পছন্দের ভাষা জানান।',
    '.faq-list details:nth-child(4) summary': 'ফি কীভাবে জানতে পারব? <span>+</span>',
    '.faq-list details:nth-child(4) p': 'ফি ও ব্যাচের সময় জানতে অ্যাকাডেমিতে যোগাযোগ করুন। বিনামূল্যে ডেমো ক্লাসের ব্যবস্থা রয়েছে।',
    '.faq-list details:nth-child(5) summary': 'পশ্চিমবঙ্গ জুড়ে অনলাইন ক্লাস হবে কি? <span>+</span>',
    '.faq-list details:nth-child(5) p': 'অনলাইন শিক্ষাদান ভবিষ্যৎ পরিকল্পনার অংশ। বর্তমানে অনলাইন ব্যাচ চালু আছে কি না তা নিশ্চিত করা হয়নি; অনুগ্রহ করে যোগাযোগ করুন।',
    '.footer-main p': 'জ্ঞানই দেখায় আলোর পথ।'
  }
};

let currentLanguage = 'en';
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-en][data-bn]').forEach(el => {
    el.textContent = el.dataset[language];
  });
  document.querySelectorAll('[data-en-html][data-bn-html]').forEach(el => {
    el.innerHTML = el.dataset[`${language}Html`];
  });
  Object.entries(translations[language]).forEach(([selector, content]) => {
    document.querySelectorAll(selector).forEach(el => {
      if (content === '') return;
      if (content.includes('<')) el.innerHTML = content;
      else el.textContent = content;
    });
  });
  const toggle = document.getElementById('languageToggle');
  toggle.textContent = language === 'en' ? 'বাংলা' : 'English';
  toggle.setAttribute('aria-label', language === 'en' ? 'Switch website language to Bengali' : 'Switch website language to English');
}
document.getElementById('languageToggle').addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'bn' : 'en'));

const form = document.getElementById('enquiryForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    'Hello Jnanapith Academy, I would like to enquire about admission.',
    `Parent/Guardian: ${data.get('parentName')}`,
    `Student class: ${data.get('studentClass')}`,
    `Board: ${data.get('board')}`,
    `Preferred language: ${String(data.get('medium')).trim()}`,
    `Subjects of interest: ${data.get('subjects') || 'Not specified'}`,
    `Contact number: ${data.get('parentPhone')}`
  ].join('\n');
  const status = document.getElementById('formMessage');
  if (!WHATSAPP_NUMBER) {
    status.textContent = currentLanguage === 'bn'
      ? 'হোয়াটসঅ্যাপ স্বয়ংক্রিয়ভাবে খোলা যায়নি। +91 6290192575 নম্বরে বার্তা পাঠান অথবা jnanapithacademics@gmail.com-এ ইমেল করুন।'
      : 'WhatsApp could not be opened automatically. Please message +91 6290192575 or email jnanapithacademics@gmail.com.';
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  status.textContent = currentLanguage === 'bn'
    ? 'হোয়াটসঅ্যাপ খুলেছে। বার্তাটি দেখে পাঠিয়ে দিন।'
    : 'WhatsApp opened with your enquiry. Please review and send the message there.';
});
