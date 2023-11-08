export const getData = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
