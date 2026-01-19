import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Client {
  name: string;
  logoPlaceholder: string; // Using text initials or simple placeholder logic
}
