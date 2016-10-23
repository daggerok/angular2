import { Action } from '@ngrx/store';

export const name = 'clock';
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

export const clock = (state = new Date, action: Action) => {
  return handle(state, action.type, action.payload);
};
