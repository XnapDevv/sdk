import { Agent } from "./Agent";

const agents = new Map<string, Agent>();

export function registerAgent(agent: Agent) {
  agents.set(agent.id, agent);
  return agent;
}

export function getAgent(id: string) {
  return agents.get(id);
}
