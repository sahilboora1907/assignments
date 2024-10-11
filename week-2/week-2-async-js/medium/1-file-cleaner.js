// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
fs.readFile('/Users/sahil/Desktop/Cohort/assignments/week-2/week-2-async-js/medium/b.txt', 'utf-8', function(err,data){
    
    let cleaneddata = data.replace(/\s+/g, ' ').trim();

    fs.writeFile('/Users/sahil/Desktop/Cohort/assignments/week-2/week-2-async-js/medium/b.txt', cleaneddata, 'utf-8', function(err){
        console.log("File cleaned!!")
    })
    
})