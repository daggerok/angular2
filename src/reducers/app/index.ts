import { Action } from '@ngrx/store';

export const MANUAL = 'manual';
export const SECOND = 'second';

const handle = (state: Date, type: string) => {
  const target = new Date(state.getTime());

  switch (type) {
    case MANUAL:
      target.setHours(target.getHours() + 1);
    case SECOND:
      target.setSeconds(target.getSeconds() + 1);
  }

  return target;
};

export const clock = (state = new Date, action: Action) => {
  return handle(state, action.type);
};
