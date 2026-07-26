export type PageNav = 'home' | 'chat' | 'library' | 'resources' | 'about';

export interface RightsArticle {
  id: string;
  title: string;
  urduTitle?: string;
  categoryId: string;
  lawCitation: string;
  summary: string;
  keyRights: string[];
  stepByStepAction: string[];
  commonMisconceptions: { claim: string; legalFact: string }[];
  relevantHelpline?: string;
}

export interface RightsCategory {
  id: string;
  title: string;
  urduTitle: string;
  subtitle: string;
  summary: string;
  keyLaws: string[];
  iconName: string;
}

export interface HelplineResource {
  id: string;
  name: string;
  urduName?: string;
  category: 'helpline' | 'legal_aid' | 'shelter';
  phone: string;
  secondaryPhone?: string;
  availability: string;
  description: string;
  locationScope: string;
  address?: string;
  website?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isFallback?: boolean;
}
