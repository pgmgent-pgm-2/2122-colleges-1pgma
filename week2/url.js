const url = new URL("https://www.pgm.gent/pgm-2/consuming-data/api.html");

console.log(url);
console.log(url.pathname);

// url.pathname = "/pgm-2/consuming-data/internet.html";

console.log(url);
console.log(url.searchParams.get('search')); // Ophalen
url.searchParams.append('language', 'en'); // Toevoegen
url.searchParams.set('language', 'nl'); // Aanpassen

console.log(url.searchParams.toString());

const searchP = new URLSearchParams('search=test');
url.search = searchP;

// REST - CRUD - Create Read Update Delete
"https://www.blog.be/posts" // Get
"https://www.blog.be/posts" // Post
"https://www.blog.be/posts?id=1" // Get
"https://www.blog.be/posts?id=1" // Put
"https://www.blog.be/posts?id=1" // Delete

// Stack overflow
// function foo() {
//     foo();
// }

// foo();

function getUser() {
    let n = 1000000000;

    while(n > 0) {
        n--;
    }

    console.log('N is 0!');
}

console.log('Voor de functie!');
// getUser();
setTimeout(() => {
    getUser();
}, 1000);

console.log('Andere app data al inladen');

