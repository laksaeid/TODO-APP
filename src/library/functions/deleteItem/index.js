export const deleteItem = async (id) => {
  await fetch(`http://localhost:3000/Todo/${id}`, {
    method: 'DELETE',
  });
};
