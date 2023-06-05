// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
};

const sayHello = (input) => {
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true || input === false) {
        return "Hello, World!";
    } else {
        return `Hello, ${input}!`;
    }
};
