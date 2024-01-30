const url = "https://dog.ceo/api/breeds/image/random";

const getDog = async () => {
  const data = await fetch(url);
  const json = await data.json();
  console.log(json);
};

getDog();
