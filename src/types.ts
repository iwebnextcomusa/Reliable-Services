export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamic render Lucide icons
  fullDetails: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceReceived: string;
  date: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  category: string;
  urgency: "low" | "medium" | "high" | "emergency";
  details: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}
