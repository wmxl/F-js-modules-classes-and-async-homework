// soulution1
export const getPoetry = async () => {
  const response = await fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
  });
  // a
  const data = await response.json();
  return [data.origin, data.author, data.content];
};

// solution 2
// export const getPoetry = async () => {
//   return fetch("https://v1.jinrishici.com/all.json", {
//     method: "GET",
//   })
//       .then((res) => res.json())
//       .then((data) => [data.origin, data.author, data.content]);
// };
