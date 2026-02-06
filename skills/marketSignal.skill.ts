import { publishSkill } from "./publishSkill";

publishSkill({
  name: "MarketSignal",
  input: ["price"],
  output: ["trend"],
  execute(price: number) {
    return price > 100 ? "bullish" : "bearish";
  }
});
