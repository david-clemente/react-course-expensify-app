/*const person = {
    name: 'David',
    age: 25,
    location: {
        city: 'Gaia',
        temp: 12
    }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);

}*/

/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

if(publisherName) {
    console.log(publisherName);
}*/

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper St', 'Matosinhos', 'Porto', '4450'];
const [, city, state = 'NY'] = address;
console.log(`You are in ${city}, ${state}.`);


