console.log('===================== START THIS =====================');

var personData = {
    name: 'Ric',
    age: '50'
}

const Person = {
    personData: {
        name: 'Ric-Obj',
        age: '50-Obj'
    },
    showPersonDetails: function () {
        console.log('this =', this);
        console.log(this.personData.name + ' is ' + this.personData.age + ' YO.');
    }
}

const newPerson = Object.create(Person); //Create a new object from Person
const borrowFunction = Person.showPersonDetails; //Create a constant that borrows the function from Person

//Call the function on original Person Object
Person.showPersonDetails();
//Ric-Obj is 50-Obj YO. this = Person

//Call the function on an instance of the Person Object
newPerson.showPersonDetails();
//Ric-Obj is 50-Obj YO. this = {}
//In this case a new empty object has been created. The personData values are taken from the prototype of Person

//Call the function from the constant
borrowFunction();
//Ric is 50 YO. this = window
//In this case because borrowFunction is a global variable that calls showPersonDetails, this is the global object = window. Because we have used var to declare personData, this has been added to the global window. If we use let or const window.personData would have been undefined

//Function that takes a callback and call it
function takeCallback(fn) {
    console.log('this from within takeCallback is:');
    console.log(this);
    fn();
}

takeCallback(Person.showPersonDetails);
//Ric is 50 YO
//this from takeCallback = window
//this from Person.showPersonDetails = window
//In this case we pass Person.showPersonDetails as a callback which is called from the global scope. So this = window

takeCallback.bind(Person, Person.showPersonDetails)();
//Ric is 50 YO
//this from takeCallback = Person
//this from Person.showPersonDetails = window
//In this case we pass Person.showPersonDetails as a callback and we bind Person. However we bind Person to takeCallback and not Person.showPersonDetails. Therefore this in Person.showPersonDetails = window

takeCallback(Person.showPersonDetails.bind(Person));
//Ric-Obj is 50-Obj YO
//this from takeCallback = window
//this from Person.showPersonDetails = Person
//In this case we pass Person.showPersonDetails as a callback and we correctly bind Person to it. Therefore this in Person.showPersonDetails = Person

console.log('=======================================================');