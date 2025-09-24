// FIX: Import React to provide the React namespace for types like React.ReactNode.
import type * as React from 'react';

export interface Service {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  services: Service[];
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface BookingDetails {
  name: string;
  note: string;
  dateTime: Date;
  paymentMethod: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}