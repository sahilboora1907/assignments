function letsseebc(){
    let p = new Promise((printkro) => {
        count = 0;
        while(count<50000){
            console.log("hehe!");
            count++;
            printkro();
        }
    })
    console.log("promise khtm");
}

letsseebc();