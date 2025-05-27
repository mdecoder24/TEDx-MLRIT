// types.ts
export interface Speaker {
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface MemberProps {
  order: number;
  name: string;
  title: string;
  image: string;
}

export interface BlogProps {
  title: string;
  category: string;
  date: string;
  image: string;
  url?: string;
}

export interface Sponsor {
  id: number;
  imageUrl: string;
  altText: string;
}

export interface TEDxEvent {
  id: number;
  date: string;
  monthYear: string;
  title: string;
  theme: string;
  link: string;
}