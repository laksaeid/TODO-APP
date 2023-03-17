export const editItem = async (id, obj) => {
  await fetch(`http://localhost:3000/Todo/${id}`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
