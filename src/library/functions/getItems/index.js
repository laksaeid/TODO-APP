export let header;
export const getItems = async (page = 1, limit = 999) => {
  const response = await fetch(
    `http://localhost:3000/Todo?_page=${page}&_limit=${limit}&_sort=id&_order=desc`
  );
  header = response.headers.get('link');
  const data = await response.json();
  return data;
};
