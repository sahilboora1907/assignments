// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
fs.writeFile('/Users/sahil/Desktop/Cohort/assignments/week-2/week-2-async-js/easy/a.txt', 'write ho gyaaaa bc!!!!', 'utf-8', function(err,data){
    console.log('written!');
});