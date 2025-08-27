export interface Question {
  id: number;
  textKey: string;
}

export type AddictionType = 'alcohol' | 'smoking' | 'injection';

export interface AddictionSubCategory {
  nameKey: string;
  questions: Question[];
}

export interface Service {
  id: string;
  nameKey: string;
  questions?: Question[];
  addictionTypes?: {
    [key in AddictionType]?: AddictionSubCategory;
  };
}

export interface Answer {
  questionId: number;
  questionText: string;
  value: number;
}

export interface Message {
  sender: 'user' | 'ai';
  text: string;
}