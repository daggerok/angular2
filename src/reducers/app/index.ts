import { Action } from '@ngrx/store';

export const MANUAL = 'manual';
export const SECOND = 'second';

const handle = (state: Date, type: string) => {
  const target = new Date(state.getTime());

  if (type === MANUAL)
    target.setHours(target.getHours() + 1);
  else
    target.setSeconds(target.getSeconds() + 1);
  return target;
};

export const clock = (state = new Date, action: Action) => {
  return handle(state, action.type);
};
