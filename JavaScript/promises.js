const fetchPromise = fetch("https://pokeapi.co/api/v2/");
fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
     main.innerHTML = data;
  });