import { HelplineResource } from '../types';

export const HELPLINES_RESOURCES: HelplineResource[] = [
  // 1. Helplines
  {
    id: 'mohr-1099',
    name: 'Ministry of Human Rights Helpline',
    urduName: 'وزارت برائے انسانی حقوق ہیلپ لائن',
    category: 'helpline',
    phone: '1099',
    secondaryPhone: '051-9204481',
    availability: '24/7 Toll-Free Across Pakistan',
    description: 'Government toll-free helpline providing legal advice, emergency intervention, and referral services for human rights violations and women in distress.',
    locationScope: 'Nationwide (Pakistan)',
    website: 'https://mohr.gov.pk'
  },
  {
    id: 'edhi-115',
    name: 'Edhi Foundation Emergency Service',
    urduName: 'ایدھی ایمرجنسی ہیلپ لائن',
    category: 'helpline',
    phone: '115',
    availability: '24/7 Nationwide Emergency Rescue',
    description: 'Pakistan’s largest emergency ambulance, rescue, and crisis response network for immediate danger, shelter assistance, and medical transport.',
    locationScope: 'Nationwide (Pakistan)',
    website: 'https://edhi.org'
  },
  {
    id: 'drf-cyber-harassment',
    name: 'Cyber Harassment Helpline (Digital Rights Foundation)',
    urduName: 'سائبر ہراسانی ہیلپ لائن',
    category: 'helpline',
    phone: '0800-39393',
    availability: 'Mon - Sun, 9:00 AM - 5:00 PM',
    description: 'Pakistan’s first dedicated helpline for online harassment, blackmail, non-consensual image sharing, cyberstalking, and FIA Cybercrime assistance.',
    locationScope: 'Nationwide (Pakistan)',
    website: 'https://digitalrightsfoundation.pk'
  },
  {
    id: 'umang-mental-health',
    name: 'Umang Mental Health Helpline',
    urduName: 'امنگ ذہنی صحت ہیلپ لائن',
    category: 'helpline',
    phone: '0311 7786264',
    availability: '24/7 Confidential Support',
    description: 'Free, confidential psychological first aid and emotional crisis intervention for individuals experiencing trauma, depression, or domestic stress.',
    locationScope: 'Nationwide (Pakistan)',
    website: 'https://www.umangpakistan.org'
  },
  {
    id: 'pcsw-1043',
    name: 'Punjab Commission on Status of Women Helpline',
    urduName: 'پنجاب کمیشن برائے خواتین ہیلپ لائن',
    category: 'helpline',
    phone: '1043',
    availability: '24/7 Toll-Free in Punjab',
    description: 'Helpline offering information on legal rights, property disputes, domestic violence protection orders, and legal aid referrals in Punjab.',
    locationScope: 'Punjab Province',
    website: 'https://pcsw.punjab.gov.pk'
  },

  // 2. Legal Aid Organizations
  {
    id: 'aghs-legal-aid',
    name: 'AGHS Legal Aid Cell (Asma Jahangir Legal Aid)',
    urduName: 'عاصمہ جہانگیر لیگل ایڈ سیل',
    category: 'legal_aid',
    phone: '042-35845975',
    secondaryPhone: '042-35845976',
    availability: 'Mon - Fri, 9:00 AM - 5:00 PM',
    description: 'Founded by human rights icon Asma Jahangir, AGHS provides free pro-bono legal defense and court representation for underprivileged women in family, custody, and criminal matters.',
    locationScope: 'Lahore & Punjab (Network across Pakistan)',
    address: '141-E/1, Shah Jamal, Lahore',
    website: 'http://www.aghslaw.net'
  },
  {
    id: 'legal-aid-society-las',
    name: 'Legal Aid Society (LAS - Justice C.A. Rehman)',
    urduName: 'لیگل ایڈ سوسائٹی سندھ',
    category: 'legal_aid',
    phone: '0800-70806',
    secondaryPhone: '021-99217036',
    availability: 'Mon - Sat, 9:00 AM - 5:00 PM',
    description: 'Chaired by retired Supreme Court judges, LAS provides free legal aid, mediation, and court representation for women in Sindh courts.',
    locationScope: 'Sindh Province (Karachi, Hyderabad, Sukkur, Larkana)',
    address: 'Street 30, Block 5, Kehkashan, Clifton, Karachi',
    website: 'https://las.org.pk'
  },
  {
    id: 'shirkat-gah',
    name: 'Shirkat Gah Women’s Resource Centre',
    urduName: 'شرکت گاہ ویمنز ریسورس سینٹر',
    category: 'legal_aid',
    phone: '042-35838815',
    secondaryPhone: '021-35832512',
    availability: 'Mon - Fri, 9:00 AM - 5:00 PM',
    description: 'Pioneer feminist & legal research organization offering community legal training, rights advice, and advocacy for women’s statutory rights.',
    locationScope: 'Lahore, Karachi, Peshawar',
    website: 'https://shirkatgah.org'
  },
  {
    id: 'aurat-foundation',
    name: 'Aurat Foundation',
    urduName: 'عورت فاؤنڈیشن',
    category: 'legal_aid',
    phone: '051-2824352',
    availability: 'Mon - Fri, 9:00 AM - 5:00 PM',
    description: 'National NGO empowering women through legal literacy, violence monitoring, policy reform advocacy, and local referral networks.',
    locationScope: 'Islamabad, Lahore, Karachi, Peshawar, Quetta',
    website: 'https://af.org.pk'
  },

  // 3. Safe Shelters (Darul Aman)
  {
    id: 'darul-aman-network',
    name: 'Government Darul Aman (State Shelter Homes)',
    urduName: 'دارالامان (سرکاری محفوظ پناہ گاہیں)',
    category: 'shelter',
    phone: '1099',
    secondaryPhone: 'Local District Police / Social Welfare Dept',
    availability: '24/7 Admission via Court / Police / Direct Walk-In',
    description: 'Network of state-funded secure shelter homes located in almost every district of Pakistan, offering free housing, food, medical care, children schooling, and legal assistance.',
    locationScope: 'All 36 Districts of Punjab, Sindh, KPK & Balochistan',
    address: 'Accessible through local Family Courts or Social Welfare Department'
  },
  {
    id: 'panah-shelter-home',
    name: 'Panah Shelter Home Karachi',
    urduName: 'پناہ شیلٹر ہوم کراچی',
    category: 'shelter',
    phone: '021-35383562',
    secondaryPhone: '021-35383563',
    availability: '24/7 Crisis Admission',
    description: 'A secure non-governmental shelter home in Karachi providing sanctuary, medical rehabilitation, psychological counseling, and legal defense for female survivors of violence.',
    locationScope: 'Karachi & Sindh',
    address: 'Plot 119, Street 14, Khayaban-e-Roomi, DHA Phase 8, Karachi',
    website: 'https://panah.org.pk'
  },
  {
    id: 'bedari-shelter',
    name: 'Bedari Women & Children Rights Organization',
    urduName: 'بیداری تنظیم برائے حقوقِ نسواں',
    category: 'shelter',
    phone: '051-2273273',
    availability: 'Mon - Sat, 9:00 AM - 5:00 PM',
    description: 'Provides crisis counseling, legal aid support, and safe house referrals for women and girls in Islamabad, Rawalpindi, and northern Punjab.',
    locationScope: 'Islamabad, Rawalpindi, Chakwal, Attock',
    website: 'https://www.bedari.org.pk'
  }
];
