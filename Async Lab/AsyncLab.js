slowMath.add(6, 2).then(value => {
    console.log(`Promise Chaining value is ${value}`);
    return slowMath.multiply(value, 2);
    })
    .then(value => {
        console.log(`Promise Chaining value is ${value}`);
        return slowMath.divide(value, 4);
    })
    .then(value => {
        console.log(`Promise Chaining value is ${value}`);
        return slowMath.subtract(value, 3);
    })
    .then(value => {
        console.log(`Promise Chaining value is ${value}`);
        return slowMath.add(value, 98);
    })
    .then(value => {
        console.log(`Promise Chaining value is ${value}`);
        return slowMath.remainder(value, 2);
    })
    .then(value => {
        console.log(`Promise Chaining value is ${value}`);
        return slowMath.multiply(value, 50);
    })
    .then(value => {
        console.log(`Promise Chaining value is ${value}`);
        return slowMath.remainder(value, 40);
    })
    .then(value => {
        console.log(`Promise Chaining value is ${value}`);
        return slowMath.add(value, 32);
    })
    .then(value => {
        console.log(`Final Promise Chaining value is ${value}`);
    })
    .catch(err => {
        console.error(err);
        console.log(err);
});

async function value() {
    try {
        let value = await slowMath.add(6, 2);
        console.log(`Async/Await value is ${value}`);
        value = await slowMath.multiply(value, 2)
        console.log(`Async/Await value is ${value}`);
        value = await slowMath.divide(value, 4)
        console.log(`Async/Await value is ${value}`);
        value = await slowMath.subtract(value, 3)
        console.log(`Async/Await value is ${value}`);
        value = await slowMath.add(value, 98)
        console.log(`Async/Await value is ${value}`);
        value = await slowMath.remainder(value, 2)
        console.log(`Async/Await value is ${value}`);
        value = await slowMath.multiply(value, 50)
        console.log(`Async/Await value is ${value}`);
        value = await slowMath.remainder(value, 40)
        console.log(`Async/Await value is ${value}`);
        value = await slowMath.add(value, 32)
        console.log(`Final value using Async/Await is ${value}.`);
    } catch (err) {
        console.log(err);
    }
}
value();