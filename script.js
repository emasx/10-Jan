


// Project Magic 8 Ball

let userName = '';

userName ? console.log(`Hello ${userName}`) : console.log('Hello');

let userQuestion = 'Will I adopt a new puppy soon?';
console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = '';

// Depending on what random number is, eight ball will always be a different string
switch(randomNumber) {
    case 0:
        eightBall = 'It is certain';
    break;
    case 1: 
        eightBall = 'It is decidely so';
    break;
    case 2: 
        eightBall = 'Reply hazy try again';
    break;
    case 3: 
        eightBall = 'Cannot predict now';
    break;
    case 4: 
        eightBall = 'Do not count on it';
    break;
    case 5: 
        eightBall = 'My sources say no';
    break;
    case 6: 
        eightBall = 'Outlook not so good';
    break;
    case 7: 
        eightBall = 'Signs point to yes';
    break;
}

console.log(`The Magic 8 Ball says: ${eightBall}`);





// Race Day

let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if(early && age > 18) {
    raceNumber += 1000;
}

if(early && age > 18) {
    console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
} else if (!early && age > 18) { // !early = early is FALSE
    console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
} else if (age < 18){
    console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`);
} else {
    console.log('Please approach the registration desk, thanks!');
}