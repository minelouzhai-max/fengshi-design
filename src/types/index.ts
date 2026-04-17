export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Project {
  id: number;
  year: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  location: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}
