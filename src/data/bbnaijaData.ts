import { Housemate, ScheduleEvent, FAQItem, StreamConfig } from '../types';

export const BBN_STREAM_CONFIG: StreamConfig = {
  appName: 'StreamPulse',
  packageName: 'com.streampulse.androidcom.aistudio.videoplayer.vpxm',
  streamUrl: 'https://live-global-cdn-v02.sooplive.com/live-stmc-35/auth_playlist.m3u8?aid=.A32.pxqRXFPZNcY9Qg1.519oYht4McD6_YLts7A7Sky7DS2zcJbdjkpyIzEjv2G94F9kYrs4SQGDW43LPtpwbroKhz32XWBwGAMC34-bScNzSIxKCSAWCBzJ6ywPO5RR30eZtS8o3fBuwFyFNQtOv_dA7Z3LN1qtfuursje_JVg3V8HP-9Zs7iIdqZ4Wg7pbF8btug4x8GAYLF75AwgM',
  playStoreUrl: '#',
  intentUri: 'intent://live-global-cdn-v02.sooplive.com/live-stmc-35/auth_playlist.m3u8?aid=.A32.pxqRXFPZNcY9Qg1.519oYht4McD6_YLts7A7Sky7DS2zcJbdjkpyIzEjv2G94F9kYrs4SQGDW43LPtpwbroKhz32XWBwGAMC34-bScNzSIxKCSAWCBzJ6ywPO5RR30eZtS8o3fBuwFyFNQtOv_dA7Z3LN1qtfuursje_JVg3V8HP-9Zs7iIdqZ4Wg7pbF8btug4x8GAYLF75AwgM#Intent;scheme=https;type=video/*;action=android.intent.action.VIEW;package=com.streampulse.androidcom.aistudio.videoplayer.vpxm;end;',
  customSchemeUri: 'streampulse://play?url=' + encodeURIComponent('https://live-global-cdn-v02.sooplive.com/live-stmc-35/auth_playlist.m3u8?aid=.A32.pxqRXFPZNcY9Qg1.519oYht4McD6_YLts7A7Sky7DS2zcJbdjkpyIzEjv2G94F9kYrs4SQGDW43LPtpwbroKhz32XWBwGAMC34-bScNzSIxKCSAWCBzJ6ywPO5RR30eZtS8o3fBuwFyFNQtOv_dA7Z3LN1qtfuursje_JVg3V8HP-9Zs7iIdqZ4Wg7pbF8btug4x8GAYLF75AwgM')
};

export const SAMPLE_HOUSEMATES: Housemate[] = [
  {
    id: 'hm-1',
    name: 'Koffi Olamide',
    nickname: 'King Koffi',
    age: 26,
    state: 'Lagos State',
    occupation: 'Record Producer & Sound Architect',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Known for high energy and strategic gameplay in the Big Brother house. Unapologetically confident.',
    status: 'head_of_house',
    votesCount: 384200,
    trendingTag: '#KingKoffi',
    quote: 'I come with the rhythm, I stay with the crown.'
  },
  {
    id: 'hm-2',
    name: 'Amaka Zenith',
    nickname: 'Queen Zeta',
    age: 24,
    state: 'Anambra State',
    occupation: 'Fashion Model & Content Creator',
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    bio: 'Fiery fashionista taking the house by storm. Always at the center of house drama and unforgettable outfits.',
    status: 'active',
    votesCount: 452100,
    trendingTag: '#ZetaNation',
    quote: 'Serve face, drop grace, win the race.'
  },
  {
    id: 'hm-3',
    name: 'Tunde Babs',
    nickname: 'Captain T',
    age: 28,
    state: 'Oyo State',
    occupation: 'Fitness Coach & Entrepreneur',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Gym enthusiast with calm demeanor. Known for winning Arena Games with record-breaking times.',
    status: 'nominated',
    votesCount: 298900,
    trendingTag: '#VoteTunde',
    quote: 'Focus is the muscle that wins the grand prize.'
  },
  {
    id: 'hm-4',
    name: 'Chioma Grace',
    nickname: 'Chichi Star',
    age: 25,
    state: 'Imo State',
    occupation: 'Actress & Chef',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    bio: 'The heart of the kitchen and the life of Saturday Night Parties. Master of savory dishes and heart-to-heart talks.',
    status: 'active',
    votesCount: 512300,
    trendingTag: '#ChichiArmy',
    quote: 'Good food and genuine vibes win every heart.'
  },
  {
    id: 'hm-5',
    name: 'Seyi Sterling',
    nickname: 'Seyi Vibes',
    age: 27,
    state: 'Ogun State',
    occupation: 'Tech Specialist & Visual Artist',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Analytical thinker and night owl. Unravels house alliances and speaks truth without filter.',
    status: 'nominated',
    votesCount: 219000,
    trendingTag: '#SeyiSquad',
    quote: 'Play the chess board, not the pieces.'
  },
  {
    id: 'hm-6',
    name: 'Nneka Sunshine',
    nickname: 'Nneka Glow',
    age: 23,
    state: 'Enugu State',
    occupation: 'Dance Instructor & Singer',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bio: 'Brings infectious positive energy to every task. Choreographs house presentations with precision.',
    status: 'active',
    votesCount: 310500,
    trendingTag: '#NnekaGlow',
    quote: 'Dance through the chaos and let your light shine.'
  }
];

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  {
    id: 'ev-1',
    time: '18:00 WAT',
    day: 'Monday',
    title: 'Head of House Challenge',
    description: 'Housemates battle in an intense physical & mental obstacle course for immunity and HoH privileges.',
    category: 'arena'
  },
  {
    id: 'ev-2',
    time: '20:00 WAT',
    day: 'Monday',
    title: 'Live Nominations',
    description: 'Each housemate enters the Diary Room to nominate fellow contestants for Sunday eviction.',
    category: 'diary',
    isLive: true
  },
  {
    id: 'ev-3',
    time: '16:00 WAT',
    day: 'Wednesday',
    title: 'Sponsor Wager Task',
    description: 'High-stakes team presentation where housemates showcase creativity for weekly luxury food wagers.',
    category: 'task'
  },
  {
    id: 'ev-4',
    time: '21:00 WAT',
    day: 'Saturday',
    title: 'Saturday Night Rave Party',
    description: 'Top African DJs spin electrifying beats as housemates celebrate in the party arena.',
    category: 'party',
    isLive: true
  },
  {
    id: 'ev-5',
    time: '19:00 WAT',
    day: 'Sunday',
    title: 'Sunday Live Eviction Show',
    description: 'Ebuka Obi-Uchendu hosts the dramatic live show where nominated housemates face eviction.',
    category: 'eviction',
    isLive: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Why do I need the StreamPulse app to stream Big Brother Naija?',
    answer: 'StreamPulse is an optimized, low-latency HLS mobile video player configured specifically to handle high-definition 24/7 continuous live streams without web browser timeouts, background restrictions, or memory leaks.',
    category: 'app'
  },
  {
    id: 'faq-2',
    question: 'What is the package name for StreamPulse on Android?',
    answer: 'The official Android package name is com.streampulse.androidcom.aistudio.videoplayer.vpxm. You can verify this in your Android device app settings or launcher.',
    category: 'android'
  },
  {
    id: 'faq-3',
    question: 'What happens when I click "Watch Now on StreamPulse"?',
    answer: 'On Android devices with StreamPulse installed, clicking "Watch Now" sends a direct system Intent (intent://...) to open StreamPulse immediately with the BBNaija live stream loaded. No Play Store redirection will occur.',
    category: 'android'
  },
  {
    id: 'faq-4',
    question: 'How do I manually add the stream link into StreamPulse if auto-launch fails?',
    answer: 'Open StreamPulse on your phone, tap the "+" icon or menu option "Open Network Stream" / "Play URL", paste the copied HLS M3U8 stream URL, and tap "Play". The live broadcast will start instantly in 1080p HD.',
    category: 'troubleshooting'
  },
  {
    id: 'faq-5',
    question: 'Is the 24/7 BBNaija stream free to watch?',
    answer: 'Yes! The live stream URL provided on this portal offers round-the-clock uninterrupted access to the Big Brother Naija camera feeds inside StreamPulse.',
    category: 'stream'
  }
];

export const INSTALL_STEPS = [
  {
    step: 1,
    title: 'Launch StreamPulse App',
    description: 'Ensure StreamPulse (package com.streampulse.androidcom.aistudio.videoplayer.vpxm) is installed on your Android device.',
    iconName: 'Smartphone'
  },
  {
    step: 2,
    title: 'Tap "Watch Live in StreamPulse"',
    description: 'Click the primary stream button on this website to trigger the system intent and open StreamPulse directly with the live stream.',
    iconName: 'PlayCircle'
  },
  {
    step: 3,
    title: 'Fallback via URL Copy / Scan',
    description: 'If you prefer manual entry, copy the HLS link or scan the QR code to paste into StreamPulse\'s "Network Stream" feature.',
    iconName: 'Copy'
  },
  {
    step: 4,
    title: 'Enjoy 24/7 BBN Live Uninterrupted',
    description: 'Watch non-stop house drama, Saturday parties, and Sunday evictions in high-definition 1080p audio and video!',
    iconName: 'Tv'
  }
];
