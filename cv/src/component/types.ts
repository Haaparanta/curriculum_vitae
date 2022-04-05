
export interface StudyText {
  id: number
  title: string;  
  text: string;
  showTitle: boolean;
};

export interface Course {
  id: number;
  title: string;
  description: string;
};

export interface ProjectText {
  id: number;
  title: string;
  text: string;
  link: string;
};

export interface workExperience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  link: string;
};

