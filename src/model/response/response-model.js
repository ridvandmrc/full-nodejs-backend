export const response = (data, error) => {
  return { error: error || null, data: data || null, date: Date.now() };
};
