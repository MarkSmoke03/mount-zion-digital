// Single source of truth for church details shown across the site.
// The footer, Plan Your Visit page and About page all read from here, so a
// service time or statement only ever needs changing in one place.

export const church = {
  name: 'Mount Zion Christian Centre',
  branch: 'Kitwe',
  tagline: 'Transforming Lives to Transform the World.',
  pastor: 'Pastor Morgan Bwalya',
  location: 'Mount Zion Christian Centre, Kitwe, Zambia.',
  phone: {
    display: '+260 962 216 561',
    tel: '+260962216561',
  },
  facebookUrl: 'https://web.facebook.com/profile.php?id=100079471674687',

  // Confirmed by Pastor Morgan: this is the church's Vision.
  vision:
    'To be a Christ-centered Church, carrying the manifest presence of God that permanently sets people free, to actualize their purpose and corporately fulfill kingdom assignment.',

  // TODO: Pastor Morgan is sending the correct Mission wording.
  // While this is empty, the Mission line is hidden everywhere on the site.
  mission: '',
};

// TODO: fill in once Pastor Morgan sends his bio and photo.
// Photo goes in public/images/ (e.g. pastor-morgan.jpg, portrait, ~800px wide);
// each bio string becomes one paragraph. While these are empty, the About page
// shows a neutral placeholder instead.
export const pastorProfile = {
  name: 'Pastor Morgan Bwalya',
  role: 'Branch Pastor, Mount Zion Christian Centre Kitwe',
  photo: '' as string,
  bio: [] as string[],
};

export interface Service {
  name: string;
  day: string;
  time?: string; // leave undefined when the time is not confirmed
  online?: boolean;
  note?: string;
}

// Times in 24-hour format, as Pastor Morgan writes them.
export const services: Service[] = [
  { name: 'Sunday Morning Service', day: 'Sunday', time: '09:00' },
  { name: 'Sunday Prayer', day: 'Sunday', time: '20:00', online: true },
  { name: 'Midweek Service', day: 'Wednesday', time: '18:00' },
  { name: 'Saturday Intercession', day: 'Saturday', time: '20:30', online: true },
];

// TODO: add day/time once Pastor Morgan confirms when PLUG groups meet.
export const plug = {
  name: 'PLUG & Discipleship',
  description:
    'Small cell groups where members grow together in the Word and in fellowship. Get in touch and we will help you find a group.',
};
