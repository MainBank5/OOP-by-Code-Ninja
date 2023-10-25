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