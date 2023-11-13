export async function getBreedRandomImages(breed?: string, subbreed?: string) {
  const apiUrls = subbreed
    ? [
        `https://dog.ceo/api/breed/${breed}/${subbreed}/images/random`,
        `https://dog.ceo/api/breed/${breed}/images/random`,
        `https://dog.ceo/api/breeds/image/random`,
      ]
    : [
        `https://dog.ceo/api/breed/${breed}/images/random`,
        `https://dog.ceo/api/breeds/image/random`,
      ];

  for (let api of apiUrls) {
    console.log(api);
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const dataRes = await fetch(data.message);
      const contentType = dataRes.headers.get("content-type");
      console.log(contentType);
      // Check if the content type indicates an image (you might need to customize this)
      if (contentType && contentType.startsWith("image/")) {
        try {
          return data.message;
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
