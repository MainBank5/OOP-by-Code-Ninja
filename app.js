let hg = Array.isArray('Hello');
console.log(hg);

const numberz = [23, 67, 49, 80, 75];

const [firzt, second, ...rest] = numberz;
console.log( firzt, second, rest);


//Object literals
//with es6 you can forego the function name and jump straight to the logic

let user1 = {
    name: "Eliud",
    age: 30, 
    email: 'eliudkaruga97@gmail.com',
    login: function getEmail() {
        console.log(this.email, `${this.name} has logged in`)
    },
    logout(){
        console.log(`${this.name} has logged out`);
    }

};
console.log(user1.name);

user1.login();
user1.logout();

//updating values
user1.name = 'Karuga';
console.log(user1.name);

user1['email'] = 'eliudkay20@gmail.com';
console.log(user1.email);

let prop = 'name'

console.log(user1[prop]);

//user1.car = 'BMW'

// what if we had multiple users we'd have to repeatedly create objects of these users 

const user2 = {
    name: "Mike",
    age: 26, 
    email: 'mikecrotch@gmail.com',
    login: function getEmail() {
        console.log(this.email, `${this.name} has logged in`);
    },
    logout(){
        console.log(`${this.name} has logged out`);
    }
}

//The name of the class should start with an uppercase
//the class is like the blueprint from which you can build multiple instances 

// the constructor function creates the object

class Profile {

    constructor (name, email, car) {
        this.name = name;
        this.email = email;
        this.car = car;
        this.score = 0;
    }

    login(){
        console.log(this.email, `${this.name} has logged in`);
        return this;
    }

    logout(){
        console.log(this.email, `${this.name} has logged out`);
        return this;
    }
    updateScore(){
        this.score += 5;
        console.log(this.name, ":", this.score);
        return this;

    }
}

let personOne = new Profile('Salim West', 'salimwest@yahoo.com', 'Benz');

// new - initializes the creation of new object
//new - calls the constructor function 
//new - sets 'this' keyword to refer to the newly created object

let personTwo = new Profile('Joku Chris', 'WanyagaJacob@gmail.com', 'suzuki');

console.log(personOne);
console.log(personTwo.car);

// with classes you dont commas to seperate the properties
personOne.logout();
personTwo.login();


//method chaining
// when calling each method(dot notation) we do it in seperate line like
console.log(personOne.car);

//howerever we can add return this which will return the user object since this refers to the object. 
//then we can chain another function since the user object was returned at the end


//personOne.login().logout()

personTwo.login().updateScore().updateScore().logout();
//personTwo.updateScore();
//personTwo.updateScore();
//personOne.updateScore();

//suppose we want to add a special user but with extra properties in addition to what the other normal
// users have. We can do this since class accepts inheritance using extend 


class Admin extends Profile {
    deleteUser(user){
        //delete property from an array
        //return users.filter((u) => u.email != user.email)
        users = users.filter((u) => {
            return u.email != user.email
        
        })
    }
}

let admin = new Admin('shaunking@gmail.com', "Shaun King", 'VolksWagen');

let users = [personOne, personTwo, admin];

//let finalUsers = admin.deleteUser(personOne)
//console.log(finalUsers)

admin.deleteUser(personOne);
console.log(users);

//the admin has inhereted all properties
console.log(admin)
admin.login();

//when using extends you can disregard adding the constructor function since its also inherited
//but you can also include it if you want the newly object to acquire exclusive properties

//parent class
class Shape {
    constructor(name) {
        this.name = name;
    }

    logName(){
        console.log(`The shape is ${this.name}`);
    }
}

//instead of repeating the same parameters in the logic of new constructor as in 'this.name', use super()
//you can pass the repeated/common property in the super() method

//sub class
class Rectangle extends Shape {
    constructor(name, width, height){
        super(name);
        this.width = width
        this.height = height;
    }

    logName() {
        console.log(`shape name: ${this.name}`)
    }
    area(){
        return this.height * this.width;
    }

    static getClass(){ //its a method called directly on the class, its static doesnt change
        return 'RectangleisStatic';
    }
}

let rect = new Rectangle('myRectangle', 6, 10);

console.log(rect);

rect.logName();

// you can even overwrite the methods thanks to polymorphism 
class Circle extends Shape {
    constructor(name, radius){
        super(name);
        this.radius = radius;
    }

    logName(){
        console.log(`I am a circle with a radius of ${this.radius}`);
    }
}

const cir = new Circle('myCirlce', 14);

console.log(cir);
cir.logName();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);

console.log(cir instanceof Circle);
console.log(cir instanceof Shape);

//static method - its a method called directly on the class. Its mostly used on static data that's applies 
//to all instances. for example a UI state

console.log(Rectangle.getClass());

let rect2 = new Rectangle('myRect2', 6, 20);

console.log(rect2.area());

//JavaScript doesn't have inherent classes. We build/emulation them with the help of 'class' keyword.
//However, using class keyword is an E6 abstraction of how classes are built.
//the way real classes in JS are built is by using prototype modal. while we no longer use prototypes 
//to build classes its good to understand how they work under the hood. 
//with prototypes we start directly with constructor function  but dont use the word constructor 
//just use function and the fx name

function Staff (name, email){
    this.name = name;
    this.email = email;
    this.online = false;
    //methods
    /*this.login = function(){
        console.log(this.email, 'has been authorized')
    }*/

}

//to attach our method we do it on the 'class' name using the prototype kyword
Staff.prototype.login= function () {
    this.online = true
    console.log(this.email, 'has been authorized')
}
Staff.prototype.logout= function () {
    this.online = false;
    console.log(this.email, 'has been removed')
}

let staff1 = new Staff('mugure', 'leahmugure@gmail.com');
let staff2 = new Staff('Stephen', 'stephengakuo@gmail.com');

console.log(staff1);
staff2.login();
staff1.login();

console.log(staff2);
staff2.logout();

//Prototype inheritance
//assume we want to create an admin who's supposed to have same properties and methods as normal users
//email and name 
//in this case we're still using the modal type

function Admin2 (...args){
    //the args parameter creates an array of the values(arguements passed)
    //console.log(args);

    //to make it inherit the properties we use attach apply to the parent class and pass 'this' and 'args'
    // 'this' carries the context of the orginal class - email and name - then args is what you'll pass
    //as your final arguements

    Staff.apply(this, args);
    //we can add more properties or methods here if needed
    this.role = 'create tasks and assign them'

}

//inherit the prototype before initiating an instance 

Admin2.prototype = Object.create(Staff.prototype);

//we can additional methods the typical prototype way 
// now in the proto console, we'll have chained protos - the first method will always be from the inherited 
// then the additional method. this called prototype chain
Admin2.prototype.dashBoard = function () {
    console.log(`${this.name}'s dashboard`)
}


let manager1 = new Admin2('Evelyne', 'evelynekay@gmail.com');
console.log(manager1);



manager1.dashBoard();

//what if we want to inherit the methods/functions of the parent users - you just inherit the prototype



manager1.login();













function People (email, name) {
    this.email = email;
    this.name = name;

}

People.prototype.reported = function () {
    console.log(`reported on time ${this.name}`);
}

let person1 = new People('kamaueliud@yahoo.com', "Liam");
let person2 = new People('kimaniJame@gmail.com', "Kimani Jamie");

console.log(person1);
console.log(person2)

person1.reported();


//inheritance 

function Supervisor (...args){ //here the Supervisor inherits properties
    People.apply(this, args);
    this.status = "Clocked In";

}

//note that inheriting a propototype should happen before initiating an instance 

Supervisor.prototype = Object.create(People.prototype); //to inherit the methods Supervisor inherits People methods

//additional methods - prototype chaining 
Supervisor.prototype.blockUser = function (people) {

    persons = persons.filter((p) => {
        return p.email != people.email
    })

}

let supervisor1 = new Supervisor('billgates@yahoo.com', "william Cox");

console.log(supervisor1);

supervisor1.reported();

let persons = [person1, person2, supervisor1];

console.log(persons);

supervisor1.blockUser(person2);
console.log(persons)

//literal vs built-in constructors 

const strLit = "hello"; 
const strObj = new String("World");


//boxing - converting to an object
console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// its literal but we can still use some methods in it. cause in the background the lit is converted to 
//constructor 

console.log(strLit.charAt(1))

//unboxing - converting back to a literal
console.log(strObj.valueOf(), typeof strObj.valueOf());
console.log(strObj.charAt(1), typeof strObj.charAt(1));

//other data types 
const number = 20;
const numObj = new Number (20);

console.log(number, typeof number);
console.log(numObj, typeof numObj);

const bol = false 
const boolObj = new Boolean(false);

console.log(bol, typeof bol);
console.log(boolObj, typeof boolObj);

const arrLit = [2, 3 ,5, 6, 8];
const arrObj = new Array([2, 3 ,5, 6, 8]);
console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);

const funcLit = function (x) {
    return x * x;
}

console.log(funcLit(5));

const funcObj = new Function ('x', 'return x * x');

console.log(funcObj(3))

//bind and this 
class App {
    constructor() {
        this.serverName = 'localhost';

        document.querySelector('.btn').addEventListener('click', this.getServerName.bind(this))
    }

    getServerName() {
        console.log(this.serverName)
    }
}

const app1 = new App ();

//getters - access properties/data
//setters - allow you to manipulate/mutate data before its returned 
//we're adding the underscore before the name to make the return private and to also add some extra functionality
//get will convert a megthod(function) into a property to make it accessible.

//assume we want to return the fullname
class Sonp {
    constructor(fname, lstname) {
        this.fname = fname;
        this.lstname = lstname;
        this.count = 0;
    }
    get fullName(){
        this.count += 1;
        return `${this.fname} ${this.lstname}`
    }

    set fullName(newName){
        if(typeof newName !== "string") {
            throw Error("BOO Invalid input")
        };
        const [first, last] = newName.split(" "); // split by space
        this.fname = first;
        this.lstname = last;
        //console.log(newName)
    }
}


let snop1 = new Sonp("John", "will");
console.log(snop1)
//console.log(snop1.fullName())
//adding get keyword converts the method(function) into a property, the proprty however still behaves as a function
//only that you dont invoke it as a typical function but rather as a property

console.log(snop1.fullName);

snop1.fname = "Brendan"
console.log(snop1.fullName);


//to make the new method turned property dyanmic/mutable we use set 
//now you can mutate by simply assigning new values to the new method-cum-property like you would with typical properties
snop1.fullName = "Timothee Chamelet"
console.log(snop1.fname);
console.log(snop1.lstname);
console.log(snop1.fullName);


snop1.fullName = "Leonardo Dicaprio"
console.log(snop1.fname);

//you can add error handling in the set method

//snop1.fullName = 2214;

//its worth noting that you can't have a getter that shares the same name as one of parameters in 
//the constructor or as one of the existing properties 


//a use case for getter could be like, you want to run a certain logic everytime the 
//you access a property 
snop1.fullName
snop1.fullName
console.log(snop1.count);

//private property Convention - to make a property private we use an underscore
//the underscore can also be used in getters and setters when the parameters in the constructor 
//have the same name as the getter/setter method
class Wallet {
    constructor(){
        this._balance = 0;
        this._transactions = [];
    }

    deposit(amount){
        this._processedDeposit(amount)
        this._balance += amount;
    }

    withdrawal(amount){
        if (amount > this._balance){
            throw Error("insufficient funds");
            return;
        }
        this._processedWithdrawal(amount);
        this._balance -= amount
    }

    _processedDeposit(amount) {
        console.log(`processing deposit of ${amount}`);
        this._transactions.push({type:'deposit', amount})

    }
    _processedWithdrawal(amount) {
        console.log(`processing withdrawal of ${amount}`);
        this._transactions.push({type:'withdrawal', amount})

    }

    get savings(){
        return this._balance;
    }

    get transactions(){
        return this._transactions

    }
}

let myWallet = new Wallet();
myWallet.deposit(350);
myWallet.withdrawal(50);
//console.log(myWallet._balance); //150 - the value is will still be visible in the console, but the undersciore
//lets you know the value should be private and thus you can build privacy around that 
//console.log(myWallet.savings());
//lets use get 

console.log(myWallet.savings)
//console.log(myWallet._balance)
console.log(myWallet.transactions)

//our processedDeposit function will also be set to private since we dont want within the users' acccess
//the users can access all other methods-turned-to-properties by get 
//note how we pushed the transactions into the empty transaction array, where they'll exist as 
//objects thanks to adding type in the push method. 

//es2022 - private fields is an alternative to using underscore for privacy
class Account {
    #privateField=100; //this field is only accessible inside the class 
    constructor() {
        this.#privateField += 100;
    }
    publicMethod(){
            console.log("I have accessed a private field!", this.#privateField);
        }
    }

let account = new Account();
account.publicMethod();

class Wallet2 {
   
    #balance = 0; //this field is only accessible inside the class 
    #transactions = []; //this field is only accessible inside the class 

    deposit(amount){
        this.#processedDeposit(amount)
        this.#balance += amount;
    }

    withdrawal(amount){
        if (amount > this.#balance){
            throw Error("insufficient funds");
            return;
        }
        this.#processedWithdrawal(amount);
        this.#balance -= amount
    }

    #processedDeposit(amount) {
        console.log(`processing deposit of ${amount}`);
        this.#transactions.push({type:'deposit', value:amount})

    }
    #processedWithdrawal(amount) {
        console.log(`processing withdrawal of ${amount}`);
        this.#transactions.push({type:'withdrawal', value:amount})

    }

    get savings(){
        return this.#balance;
    }

    get transactions(){
        return this.#transactions

    }
}

let myWallet2 = new Wallet2();
myWallet2.deposit(500);
myWallet2.withdrawal(100);
console.log(myWallet2.savings)
//console.log(myWallet2.#balance)
//console.log(myWallet2.#transactions)
console.log(myWallet2.transactions);

//property flags and descriptors - value, writable, enumerable 
//[[configurable]] if true, the properties can be deleted, otherwise they cannot
//[[writable]] if true, the value of the property can be changed
//[[enumerable]] if true, the property will be returned in 'for in loop'/iteratable, otherwise not
//its impossible to change values of something like pi
console.log(Math.PI)
Math.PI = 4;
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor)

//Object.getOwnPropertyDescriptor(myWallet2, "savings", {writable:false, configurable:false, enumerable:false})
//myWallet2.savings=6789; //this would fail because it is non-writable
//myWallet2.savings=6789; //this would also fail because it is configurable false

console.log(Object.getOwnPropertyDescriptors(myWallet))



const rectObj = {
    name: "Shape 1", 
    width: 3,
    height: 4,
}

//in getowndescription you pass the object and the stringfied version of the proprty you want to test

let desc = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(desc);

//we can make changes to the descriptions using define property which takes 3 arguements (the object, 
//stringfied property you intend to change, {the three descriptions in key/value})
Object.defineProperty(rectObj, 'name', {writable: false,configurable:false, enumerable:false });
let desc2 = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(desc2);
//so when we try to change/delete the name, it wont change since we set writable and configurable false
rectObj.name="newName";
delete rectObj.name
console.log(rectObj.name);

for (key in rectObj){
    console.log(`${key}: ${rectObj[key]}`);
}

// the name in the loop above since the enumerable is set to face hence it cant be iterated 

console.log(Object.getOwnPropertyDescriptors(rectObj)) // to get the descriptors of the entire object

//sealing - prevents properties from being added or removed. can still be changed
//freeze - prvents objects from being added, remove, changed. 

const myObj = {
    name: "triangle", 
    height: 10,
    width: 5,
}
let decr = Object.getOwnPropertyDescriptors(myObj);
console.log(decr);

Object.seal(myObj) //changes configurable to false . prop cannot be added/removed
delete myObj.name 
myObj.color='red';
myObj.width=12; //you can however change existing values
console.log(myObj)

const product = {
    name: 'flour',
    price: 8.99,
    weight: 120
}

Object.freeze(product) //changes configurable and writable to false so you cant add, remove, and change
product.price=9.99;
delete product.name;
console.log(product);


console.log(Object.getOwnPropertyDescriptors(product))

//you can check if an object is sealed or frozen using isSealed/isFrozen methods
console.log(Object.isSealed(myObj));
console.log(Object.isFrozen(myObj));

console.log(Object.isSealed(product));// nb - when you freeze an object you also seal it automatically
console.log(Object.isFrozen(product));