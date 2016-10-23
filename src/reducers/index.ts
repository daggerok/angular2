import { Action } from '@ngrx/store';
import { Person, create } from '../domain/People';

export const CLOCK = 'clock';
export const HOUR = 'hour';
export const SECOND = 'second';

const handle = (state: Date, type: string, payload: number) => {

  const target = new Date(state.getTime());

  switch (type) {
    case HOUR:
      target.setHours(target.getHours() + payload);
    case SECOND:
      target.setSeconds(target.getSeconds() + payload);
  }

  return target;
};

export const clock = (state = new Date, action: Action) =>
  handle(state, action.type, action.payload);

export const PEOPLE = 'people';

const defaultPeople: Array<Person> = [
  create('Max', ''),
  create('Bax', ''),
  create('Fax', ''),
];

export const people = (state = defaultPeople, action: Action) => {
  /*switch (action.type) {
    default:
      state;
  }*/
  return state;
};
