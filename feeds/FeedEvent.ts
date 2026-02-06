export interface FeedEvent {
  type: "agent" | "skill" | "doc";
  message: string;
  timestamp: number;
}
