/*
*
* PROMISES DECLARED AS VARIABLES
*
*/
const myPromise = new Promise((resolve, reject) => {
    const RANDOM_NUM = Math.floor(Math.random() * 2);

    if(RANDOM_NUM === 0) {
        resolve('Success, the number is 0.');
    } else if (RANDOM_NUM === 1) {
        reject('Failed, the number is 1.');
    } else {
        console.log('RANDOM_NUM is neither 0 or 1, it\'s: ' + RANDOM_NUM);
    }
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    })
    .finally(() => {
        console.log('The promise has been completed.');
});

/*
*
* PROMISES RETURNED BY FUNCTIONS
*
*/
function implementPromise() {
    return new Promise((resolve, reject) => {
        const PROMISE_SATISFIED = true;

        if(PROMISE_SATISFIED) {
            resolve('The Function Promise was fulfilled.');
        } else {
            reject('The Function Promise was rejected.');
        }
    });
}

implementPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    })
    .finally(() => {
        console.log('The promise has been completed either with success or failure.')
    });

/*
*
* PROMISES all() and race() methods
*
*/
const promise1 = new Promise((resolve, reject) => {
    resolve('Promise 1 successful');
    // reject('Promise 1 failed');
});

const promise2 = new Promise((resolve, reject) => {
    resolve('Promise 2 successful');
    // reject('Promise 2 failed');
});

const promise3 = new Promise((resolve, reject) => {
    resolve('Promise 3 successful');
    // reject('Promise 3 failed');
});

promise1
    .then((message) => console.log(message))
    .catch((message) => console.log(message));
promise2
    .then((message) => console.log(message))
    .catch((message) => console.log(message));
promise3
    .then((message) => console.log(message))
    .catch((message) => console.log(message));

Promise.all([promise1, promise2, promise3]) //Promise.all() takes an array containing all the Promises we want ot run in parallel
    .then((messages) => console.log(messages))  //then() return an array of all the messages from the Promises if these are all fulfilled
    .catch((message) => console.log(message)); //catch() if at least one of the Promises is not fulfilled the catch() method will be called

Promise.race([promise1, promise2, promise3]) //Promise.race() takes an array containing all the Promises we want ot run
    .then((message) => console.log(message))  //then() return the vaule of the first fulfilled Promise
    .catch((message) => console.log(message)); //catch() if at least one of the Promises is not fulfilled the catch() method will be called

/*
*
* PROMISES WITH ASYNC AWAIT
*
*/
function doSomeWork(day) {
    return new Promise((resolve, reject) => {
        if(day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
            reject('Going to the beach! Not working on weekend!')
        } else {
            resolve('Yes boss! I am on it!');
        }
    });
}

async function askToWork() {

    try {
        const response = await doSomeWork('saturday');
        console.log(response);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    
}

askToWork();