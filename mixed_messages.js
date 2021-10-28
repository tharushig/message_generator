let randomNumberGenerator = () => {
    let number = Math.floor(Math.random() * 3);
    return number;
}

let randomMessage = [];

const message = {
    greeting: ['Hello there!', 'Greetings!', 'Hi!!'],
    colour: ['red', 'blue', 'green'],
    food: ['spaghetti bolognese', 'chicken parmesan', 'pad thai'],
    exit: ['Goodbye!', 'Farewell!', 'See Ya!!']
}

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

createMessage();