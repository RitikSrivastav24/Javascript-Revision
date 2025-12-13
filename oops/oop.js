// object literal

const user={
    userName:"Ritik",
    Age:21,

    getUserDetails: function(){
        //console.log("User details fetched succesfully")
        //console.log(`UserName : ${this.userName}`);
        console.log(this);
        
    }
}
//console.log(user);
//console.log(user.getUserDetails());


//constructor

function User(userName,Age)
{
    this.userName=userName; //here this refers to the object that is created using the constructor
    this.Age=Age

    return this; //by default constructor returns this implicitly
}

// const userOne= User("Ritik",21); //if we don't use new keyword this will be undefined in strict mode
// const userTwo= User("Rahul",22); //if we don't use new keyword this will be undefined in strict mode and it overwrites the previous object properties

const userOne=new  User("Ritik",21); //here this refers to the newly created object it give different object for each new keyword
const userTwo=new  User("Rahul",22); //here this refers to the newly created object it give different object for each new keyword
console.log(userOne);
console.log(userTwo)
