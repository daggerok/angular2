export interface Person {
  name: string;
  time: string;
}

export const create = (name: string, time: string): Person => ({ name, time });
