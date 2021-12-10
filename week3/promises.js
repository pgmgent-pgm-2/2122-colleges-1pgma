const flink = false;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (flink) {
//             resolve({
//                 color: 'white',
//                 type: 'sport'
//             });
//         } else {
//             reject('Oei');
//         }
//     }, 0)
// })

// promise
//     .then(({ type, color }) => {
//         console.log(`Jouw sokken zijn ${type} ${color}`);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })
//     .finally(() => {
//         console.log('Doe dit sowieso')
//     });


// doSomething()
//     .then(() => doSomethingElse())
//     .then(() => doSomethingAfterDoneSomethingElse());

const willRecieveGift = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flink) {
                resolve({
                    color: 'white',
                    type: 'sport'
                });
            } else {
                reject('Oei');
                // reject(new Error('Oei!'));
            }
        }, 1000)
    })
}

const showOff = ({ type, color }) => {
    return new Promise((resolve, reject) => {
        resolve(`Kijk! Mijn sokken zijn ${type} ${color}`);
    })
}

// willRecieveGift()
//     .then((gift) => showOff(gift))
//     .then((mess) => console.log(mess))
//     .catch((e) => console.error(e.message));

// Async await
const getGiftInfo = async () => {
    try {
        const giftInfo = await willRecieveGift();
        const message = await showOff(giftInfo);
    } catch(e) {
        console.log(e);
    }
}

getGiftInfo();