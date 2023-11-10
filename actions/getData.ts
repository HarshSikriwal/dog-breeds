export const getData = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    return data.message;
  } catch (error) {
    console.error(error);
  }
};
