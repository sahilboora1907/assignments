// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock(){

    console.clear();
    const now = new Date();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

// 24 hour format
    let hours24 = now.getHours();
    console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
// 12 hour format
    let hours = ((now.getHours() + 11) % 12 + 1)
    let ampm = now.getHours >= 12 ? 'AM':'PM';
    console.log(`12-Hour Format: ${hours}:${minutes}:${seconds} ${ampm}`)

}

setInterval(clock,1000);