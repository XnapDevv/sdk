export interface Skill {
  name: string;
  input: string[];
  output: string[];
  execute(data: any): any;
}
