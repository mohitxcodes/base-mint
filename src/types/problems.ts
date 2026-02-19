export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export interface IProblem {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  topics: string;
  createdAt?: string;
}
