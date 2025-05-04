
export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    youtube?: string;
    website?: string;
    tsMaster?: string;
  };
  features: string[];
  achievements?: string[];
  videoEmbed?: string;
}
