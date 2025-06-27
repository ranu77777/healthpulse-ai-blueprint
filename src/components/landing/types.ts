
export interface LandingPageProps {
  onGetStarted: (email: string) => void;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

export interface Integration {
  name: string;
  icon: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  change: string;
}
