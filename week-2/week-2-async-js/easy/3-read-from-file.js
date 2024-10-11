// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

fs.readFile('/Users/sahil/Desktop/Cohort/assignments/week-2/week-2-async-js/easy/a.txt', 'utf-8', (err,data) => {
    console.log(data);
});

function expensiveopr(){
    let count=0
    for(let i=0; i<9000000000; i++){
        count++;
    }
}

expensiveopr();