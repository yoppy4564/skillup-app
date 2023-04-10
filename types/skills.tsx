// types/skills.ts
export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export type SkillsData = SkillCategory[];
