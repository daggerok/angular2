import { Action } from '@ngrx/store';

export const MANUAL = 'manual';
export const SECOND = 'second';

const handle = (state: Date, type: string, payload: number) => {

  const target = new Date(state.getTime());

  switch (type) {
    case MANUAL:
      target.setHours(target.getHours() + payload);
    case SECOND:
      target.setSeconds(target.getSeconds() + payload);
  }

  return target;
};

export const clock = (state = new Date, action: Action) => {
  return handle(state, action.type, action.payload);
};
