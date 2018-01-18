import { setTimeout } from "timers";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        // reject('Something went wrong');
    }, 5000)
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('Does this run?')
}).catch((error) => {
    console.log(error);
});

console.log('after');