export const sendItems = async (data) => {
  const request = await fetch('http://localhost:3000/Todo', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await request.json();
};
