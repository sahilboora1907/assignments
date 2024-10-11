/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
        let startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliseconds);
        resolve();
    });
}

console.log("thread halted hehe");
sleep(5000);
console.log("halt finished")

module.exports = sleep;
