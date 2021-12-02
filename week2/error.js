// throw "Er ging iets mis!";
// throw 400;

class UserException {
    constructor(message) {
        this.message = message;
        this.name = 'UserException'
    }

    toString () {
        return `${this.name}: Er ging iets mis - ${this.message}`;
    }
}

// throw new UserException('foutmelding').toString();

// throw new Error('URL Not valid'); // e.message // e.name -> Error

const drivers = ['Hamilton', 'Verstappen'];

function getDriver(index) {
    if (drivers[index]) {
        return console.log(drivers[index]);
    } else {
        throw new Error('Driver does not exist');
    }       
}

try {
    getDriver(5);
} catch {
    console.log('Driver not found!');
} finally {
    console.log('Gedaan!')
}

throw new Error();
throw new ReferenceError(); // Bestaat niet
throw new SyntaxError(); // Niet goed afgesloten
throw new TypeError(); // Verkeerd type data
throw new RangeError(); 


class QuoteError extends Error {
    constructor(params) {
        super(params);

        this.name = 'QuoteError';
        this.quote = "If you don't love me at my best, you don't deserve me at my worst."
    }
}

throw new QuoteError();
