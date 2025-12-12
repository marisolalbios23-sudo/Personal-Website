import { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  path: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface FamilyMember {
  name: string;
  relation: string;
  description?: string;
  imageUrl: string;
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
}
