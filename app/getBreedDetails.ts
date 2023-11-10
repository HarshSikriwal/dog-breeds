export async function getBreedRandomImages(breed?: string) {
  try {
    const randomImage = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    return randomImage.json();
  } catch {
    try {
      const randomDog = await fetch("https://dog.ceo/api/breeds/image/random");
      return randomDog.json();
    } catch (error) {
      console.error;
    }
  }
}
