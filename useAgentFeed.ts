import { getFeed } from "../feeds/feedBus";

export function useAgentFeed() {
  return getFeed();
}
