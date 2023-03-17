export const filterHandler = async (filter) => {
  const request = await fetch(`http://localhost:3000/Todo/?${filter}`);
  const filtered = await request.json();
  return filtered;
};
