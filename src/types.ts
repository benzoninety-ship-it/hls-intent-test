export interface Housemate {
  id: string;
  name: string;
  nickname: string;
  age: number;
  state: string;
  occupation: string;
  avatarUrl: string;
  bio: string;
  status: 'active' | 'head_of_house' | 'nominated' | 'evicted';
  votesCount: number;
  trendingTag: string;
  quote: string;
}

export interface ScheduleEvent {
  id: string;
  time: string;
  day: string;
  title: string;
  description: string;
  category: 'eviction' | 'party' | 'task' | 'diary' | 'arena';
  isLive?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'app' | 'stream' | 'android' | 'troubleshooting';
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface StreamConfig {
  streamUrl: string;
  packageName: string;
  playStoreUrl: string;
  intentUri: string;
  customSchemeUri: string;
  appName: string;
}
