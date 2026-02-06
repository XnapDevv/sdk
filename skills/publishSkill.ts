import { Skill } from "./Skill";

const skillStore: Skill[] = [];

export function publishSkill(skill: Skill) {
  skillStore.push(skill);
  return skill;
}
