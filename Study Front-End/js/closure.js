console.log('===================== CLOSURE =====================');
//Below outerFunction returns innerFunction which is a closure.
//As a closure innerFunction has access to its outer scope from the outerFunction even after this has completed running

function outerFunction(value) {
    let privateOuterValue = value;

    function privateFunction(value1) {
        console.log(value1);
    }

    function innerFunction(value2) {
        let innerValue = value2;

        privateFunction(privateOuterValue + ' + ' + innerValue);
    }

    return innerFunction;
}

let myClosure = outerFunction('Outer value');
myClosure('Inner value'); //Outer value + Inner value

let myClosure2 = outerFunction('Outer value 2');
myClosure2('Inner value 2'); //Outer value 2 + Inner value 2

console.log('=======================================================');