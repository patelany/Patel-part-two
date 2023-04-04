//prompt user for their name and store it
let userName = prompt("Welcome to GC mini golf! What is your name?");
let par = 0;
let hole = 0; 

//ask if user wants to play 3 or 6 holes.
let numHoles = prompt('Hi, ' + userName + '! Would you like to play 3 or 6 holes today?');

    //if user wants to play 3 holes 
    if (numHoles === '3') {
        for(i = 0; i < numHoles; i++) {
            hole++;
            let putts = parseInt(prompt('How many putts for hole ' + hole + '? (par is 3)'));
            par += putts; 
        } threeHoleGame(par);
    //if user wants to play 6 holes 
    }   else if (numHoles === '6'){
        for(i = 0; i < numHoles; i++) {
            hole++;
            let putts = parseInt(prompt('How many putts for hole ' + hole +  '? (par is 3)'));
            par += putts;
        } sixHoleGame(par);
    }


//message to user for 3 hole game   
function threeHoleGame(par) {
    let coursePar = 9;
    if(coursePar - par < 0) {
        let score = Math.abs(coursePar - par);
        console.log('Nice try, ' + userName + '... Your total par was: +' + score);
    } else if (coursePar - par > 0 ) {
        let score = coursePar - par;
        console.log('Great job, ' + userName + '! Your total par was: -' + score);
    } else if (coursePar - par === 0) {
        console.log('Good game, ' + userName + '. Your total par was: 0.');
    } return;
}

//message to user for 6 hole game
function sixHoleGame(par) {
    let coursePar = 18;
    if(coursePar - par < 0) {
        let score = Math.abs(coursePar - par);
        console.log('Nice try, ' + userName + '... Your total par was: +' + score);
    } else if (coursePar - par > 0 ) {
        let score = coursePar - par;
        console.log('Great job, ' + userName + '! Your total par was: -' + score);
    } else if (coursePar - par === 0) {
        console.log('Good game, ' + userName + '. Your total par was: 0.');
    } return;
}