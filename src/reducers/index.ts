import { Action } from '@ngrx/store';
import { Person, create } from '../domain/People';

export const CLOCK = 'clock';

export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const RECALL = 'RECALL';

const handle = (state: Date, action: Action) => {

  const target = new Date(state.getTime());

  switch (action.type) {
    case HOUR:
      target.setHours(target.getHours() + action.payload);
    case SECOND:
      target.setSeconds(target.getSeconds() + action.payload);
  }

  return target;
};

export const clock = (state = new Date, action: Action = { type: null, payload: null }) =>
  handle(state, action);

export const PEOPLE = 'people';

const defaultPeople: Array<Person> = [
  create('Max', clock()),
  create('Bax', clock()),
  create('Fax', clock()),
];

export const people = (state = defaultPeople, action: Action) => {
  switch (action.type) {
    case RECALL:
      return state.map(person => Object.assign({}, person, { time: action.payload }));
    default:
      return state;
  }
};
