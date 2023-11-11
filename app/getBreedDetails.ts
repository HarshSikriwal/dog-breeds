export async function getBreedRandomImages(breed?: string, subbreed?: string) {
  if (subbreed != undefined) {
    const randomImage = await fetch(
      `https://dog.ceo/api/breed/${breed}/${subbreed}/images/random`
    );

    // return randomImage.json();
    if (!randomImage.ok) {
      const breedImage = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      const data = await breedImage.json();
      // console.log(data);
      return data.message;
    }
    const data = await randomImage.json();
    return data.message;
  }
  const randomImage = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const data = await randomImage.json();
  return data.message;
}

//       const randomImage = await fetch(
//         `https://dog.ceo/api/breeds/image/random`
//       );
//       return randomImage.json();
//     }
//   } else {
//     try {
//       const randomImage = await fetch(
//         `https://dog.ceo/api/breed/${breed}/${subbreed}/images/random`
//       );
//       return randomImage.json;
//     } catch (error) {
//       const randomImage = await fetch(
//         `https://dog.ceo/api/breeds/image/random`
//       );
//       return randomImage.json();
//     }
//   }
// }
