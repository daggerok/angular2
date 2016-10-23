import { Action } from '@ngrx/store';

const handle = (state: Date, type: string) => {
  const target = new Date(state.getTime());

  if (type === 'manual')
    target.setHours(target.getHours() + 1);
  else
    target.setSeconds(target.getSeconds() + 1);
  return target;
};

export const clock = (state = new Date, action: Action) => {
  return handle(state, action.type);
};
