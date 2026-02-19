export interface TestCase {
  input: string;
  expectedOutput: string;
  explanation?: string;
  comparison?: "exact" | "contains";
}

export interface ISubmission {
  problemId: string;
  userId: string;
  language: string;
  code: string;
}

export type Language = "java" | "cpp";

export interface LanguageOption {
  label: string;
  value: Language;
  snippet: string;
}
