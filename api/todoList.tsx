export const todoListUpdateApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      return undefined;
    }
    return response.json();
  } catch {
    return undefined;
  }
};
