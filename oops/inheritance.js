class user{
    constructor(username) {
        this.username = username;
    }

    log(){
        console.log(`Username is : ${this.username}`);
        
    }
}

class admin extends user{
    constructor(username,adminmail){
        super(username);
        this.adminmail=adminmail;
    }

    logAdmin(){
        console.log(`user is now admin with mail : ${this.username} and admin mail : ${this.adminmail}`);
    }
}

const user1= new admin('abc','abc@abc.com')
user1.logAdmin();

const user2= new user('xyz');
//user2.logAdmin(); // will give error as logAdmin is not present in user class

console.log(user1 instanceof admin) //true because user1 is created from admin class
console.log(user1 instanceof user)  //tue because admin is child class of user class