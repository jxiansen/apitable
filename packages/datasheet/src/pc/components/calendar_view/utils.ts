export const formatString2Date = (value: string) => {
  const str = value.replace(/年| /, '-').replace(/月/, '');
  const parts = str.split('-');
  const year = parts[0];
  const month = parts[1].padStart(2, '0');
  return `${year}-${month}`;
};
