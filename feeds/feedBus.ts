import { FeedEvent } from "./FeedEvent";

const feed: FeedEvent[] = [];

export function emit(event: FeedEvent) {
  feed.push(event);
}

export function getFeed() {
  return feed.slice(-50);
}
