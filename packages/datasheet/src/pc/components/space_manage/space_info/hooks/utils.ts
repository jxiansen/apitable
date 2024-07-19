

export const calcPercent = (used: number | undefined, total: number) => {
  if (!used || !total || total === -1) {
    return 0;
  }
  return Math.min(Math.ceil((used / total) * 100), 100);
};
