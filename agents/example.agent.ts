import { registerAgent } from "./registry";

registerAgent({
  id: "agent_research_01",
  name: "ResearchAgent",
  skills: ["search", "summarize"],
  visibility: "public",
  owner: "wallet_abc"
});
