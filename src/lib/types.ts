export type Report = {
  createdAt: Date;
  level: string;
  model: Model;
  metrics: Metric[];
  issues: Issue[];
};

export type Model = {
  id: string;
  name: string;
  version: string;
};

export type Metric = {
  id: string;
  name: string;
  value: number;
};

export type Issue = {
  id: string;
  title: string;
  categoryId: string;
  description: string;
  severity: "low" | "medium" | "high";
  example: Message[];
};

export type Message = {
  role: "user" | "model";
  content: string;
};

export type IssueCategory = {
  id: string;
  name: string;
  description: string;
};
