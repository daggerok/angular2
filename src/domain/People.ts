export interface Person {
  name: string;
  time: Date;
}

export const create = (name: string, time: Date): Person => ({ name, time });
