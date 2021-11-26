const students = ['Claudine', 'Robin', 'Liam'];
const [lastStudent, ...restOfName] = 'Adriaan';
const [girls, ...boys] = students;

const firstStudent = students[0];
const secondStudent = students[1];
const thirdStudent = students[2];

// Je kan veel variabelen declareren in 1 lijn!
const [,,third, fourth = third] = students;

// Van lege array, destructuring geeft undefined
const [firstS] = [];

// Toepassing in echte applicatie

// useFetch.js
function useFetch() {
    const data = 'Data';
    const getData = (arg) => {
        console.log(arg);
        // API Call
    }

    return [data, getData];
}

// App.js
const f = useFetch();

// In plaats van dit
const data = f[0];
const getData = f[1];
// kan je dit doen, naam is vrij te kiezen
const [d, getD] = useFetch(); // [data, getData]

useEffect = () => {
    getD('/posts')
}


// Je kan ook in een functie zelf destructuren.
const person = {
    firstName: 'Tara',
    sex: 'Girl',
    age: 27,
    eyeColor: 'blue',
    armSize: {
        left: 150,
        right: 200
    }
}

function logPersonInfo({eyeColor, armSize: {left: leftArmSize}}) {
    console.log('Eyecolor is: ' . eyeColor . leftArmSize)
}

logPersonInfo(person)