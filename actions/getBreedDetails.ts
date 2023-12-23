export async function getBreedRandomImages(breed?: string, subbreed?: string) {
  const apiUrls: { [key: string]: string } = subbreed
    ? {
        subbreed: `https://dog.ceo/api/breed/${breed}/${subbreed}/images/random`,
        breed: `https://dog.ceo/api/breed/${breed}/images/random`,
        randomDog: `https://dog.ceo/api/breeds/image/random`,
      }
    : {
        breed: `https://dog.ceo/api/breed/${breed}/images/random`,
        randomDog: `https://dog.ceo/api/breeds/image/random`,
      };

  for (let key in apiUrls) {
    try {
      const response = await fetch(apiUrls[key]);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const dataRes = await fetch(data.message);
      const contentType = dataRes.headers.get("content-type");

      // Check if the content type indicates an image (you might need to customize this)
      if (contentType && contentType.startsWith("image/")) {
        try {
          const imagePath: string[] = [data.message, key];
          return imagePath;
        } catch (error) {
          console.error(`Error parsing JSON: ${error}`);
          throw new Error("Invalid JSON format");
        }
      } else {
        throw new Error("Invalid image content");
      }
    } catch (error) {
      console.error(`Error fetching dog image: ${error}`);
    }
  }
}
