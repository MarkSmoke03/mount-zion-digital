// Single source of truth for church details shown across the site.
// The footer, Plan Your Visit, Get Connected and About pages all read from
// here, so a service time or statement only ever needs changing in one place.
//
// Vision, Mission, Values, tagline, discipleship and the pastor's profile are
// Pastor Morgan's own wording (sent 16 November 2026) — edit only with his OK.

export const church = {
  name: 'Mount Zion Christian Centre',
  shortName: 'MZCC',
  branch: 'Kitwe',
  tagline: 'Transforming lives to transform the world.',
  pastor: 'Pastor Morgan Bwalya',
  location: 'Mount Zion Christian Centre, Kitwe, Zambia.',
  phone: {
    display: '+260 962 216 561',
    tel: '+260962216561',
  },
  facebookUrl: 'https://web.facebook.com/profile.php?id=100079471674687',

  vision:
    'To be a Christ centred church, carrying the manifest presence of God that permanently sets people free, to actualise their purpose and corporately fulfil Kingdom assignment.',

  mission:
    'To preach the prophetic now Word of God that uplifts, heals and provides practical solutions for life.',

  // In Pastor Morgan's order.
  values: [
    'Word of God',
    'Prayer',
    'Thriving Relationships',
    'Effectiveness',
    'Growth',
    'Efficiency',
    'Excellence',
    'Teamwork',
    'Serving and Caring',
    'Stewardship',
  ],
};

// TODO: add Pastor Morgan's photo when it arrives — portrait, about 800px wide,
// saved as public/images/pastor-morgan.jpg, then set photo below.
export const pastorProfile = {
  name: 'Pastor Morgan Bwalya',
  role: 'Branch Pastor, Mount Zion Christian Centre Kitwe',
  photo: '' as string,
  // His own words, first person; one string per paragraph.
  bio: [
    'I am a minister of the Gospel, mandated by God to destroy the works of wickedness and liberate men for Christ.',
    'I am a leader of leaders and a trainer of trainers, with a passion to see other leaders succeed and maximise their potential.',
    'I am a unique preacher of the Gospel and a gifted prayer warrior with a special anointing.',
  ],
};

export interface Service {
  name: string;
  day: string;
  time?: string; // leave undefined when the time is not confirmed
  online?: boolean;
}

// Times in 24-hour format, as Pastor Morgan writes them.
export const services: Service[] = [
  { name: 'Sunday Morning Service', day: 'Sunday', time: '09:00' },
  { name: 'Sunday Prayer', day: 'Sunday', time: '20:00', online: true },
  { name: 'Midweek Service', day: 'Wednesday', time: '18:00' },
  { name: 'Saturday Intercession', day: 'Saturday', time: '20:30', online: true },
];

export interface DiscipleshipLevel {
  level: number;
  name: string;
  summary: string;
  facts: { label: string; value: string }[];
  points?: { heading: string; items: string[] };
  joinHeading: string;
  join: string[];
}

// "PLUG & Discipleship": two levels, taken in order.
export const discipleship: { title: string; intro: string; levels: DiscipleshipLevel[] } = {
  title: 'PLUG & Discipleship',
  intro: 'We have two levels of discipleship. Every member starts with Days of Rain.',
  levels: [
    {
      level: 1,
      name: 'Days of Rain',
      summary:
        'Our foundational discipleship class, open to every member of Mount Zion Christian Centre. It is compulsory for everyone.',
      facts: [
        { label: 'How long', value: '30 days' },
        { label: 'When', value: 'Twice a year' },
        { label: 'Who', value: 'Every member' },
      ],
      joinHeading: 'Why it matters',
      join: [
        'Days of Rain is what seals your membership at MZCC.',
        'We do not marry anyone who has not gone through this class.',
      ],
    },
    {
      level: 2,
      name: 'Equip',
      summary:
        'An advanced discipleship class focused on growing believers into mature saints for ministry. It is a boot camp where people are broken and built.',
      facts: [{ label: 'Who qualifies', value: 'Only those who have completed Days of Rain' }],
      points: {
        heading: 'What it covers',
        items: ['Spiritual Growth', 'Financial Growth', 'Family Growth', 'Leadership'],
      },
      joinHeading: 'How to join',
      join: [
        'The Pastor identifies you and selects you for the class.',
        'You apply. Your application letter is reviewed to confirm you meet all the requirements.',
      ],
    },
  ],
};
