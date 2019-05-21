export const overrideObject = (base: any, override: any) => {
  const result = {...override};
  Object.setPrototypeOf(result, base);
  return result;
};