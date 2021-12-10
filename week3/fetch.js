// Fetch returnt Promise!

const starshipsRequest = fetch('https://swapi.dev/api/starships/9/');

starshipsRequest
    .then(data => data.json())
    .then(starships => console.log(starships))
    .catch(e => console.log(e));

const fetchData = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    return json;
}

const starships = fetchData('https://swapi.dev/api/starships/9/');