//generating random number
let randomNumberGenerator = () => {
    let number = Math.floor(Math.random() * 3);
    return number;
}

let randomMessage = [];
//object that contains message components
const message = {
    greeting: ['Hello there!', 'Greetings!', 'Hi!!'],
    colour: ['red', 'blue', 'green'],
    food: ['spaghetti bolognese', 'chicken parmesan', 'pad thai'],
    exit: ['Goodbye!', 'Farewell!', 'See Ya!!']
}

//randomly selects each component of the message and prints multiple messages to the console
let createMessage = () => {
    for (property in message) {
        switch(property) {
            case 'greeting':
                randomMessage.push(message.greeting[randomNumberGenerator()]);
                break;
            case 'colour':
                let favColour = message.colour[randomNumberGenerator()];
                randomMessage.push(`My favourite colour is: ${favColour}`);
                break;
            case 'food':
                let favFood = message.food[randomNumberGenerator()];
                randomMessage.push(`My favourite food is: ${favFood}`);
                break;
            default:
                randomMessage.push(message.exit[randomNumberGenerator()]);
                break;
        }
    }
    console.log(randomMessage.join('\n'))
}

//calling function
createMessage();