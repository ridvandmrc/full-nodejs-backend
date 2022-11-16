export const response = (data, error) => {
  return { error: error || null, data: data, date: Date.now() };
};
