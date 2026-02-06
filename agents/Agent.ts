export type AgentVisibility = "public" | "private";

export interface Agent {
  id: string;
  name: string;
  skills: string[];
  visibility: AgentVisibility;
  owner: string;
}
