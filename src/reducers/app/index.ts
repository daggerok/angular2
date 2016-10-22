export const appReducer = (acc: Date, curr: string) => {
  const target = new Date(acc.getTime());

  if (curr === 'manual')
    target.setHours(target.getHours() + 1);
  else
    target.setSeconds(target.getSeconds() + 1);
  return target;
};
