
export interface ProjectLinks {
  github?: string;
  youtube?: string;
  website?: string;
  tsMaster?: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: ProjectLinks;
  features: string[];
  videoEmbed?: string;
  achievements?: string[];
}
