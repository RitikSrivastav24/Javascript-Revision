class user{
    constructor(username) {
        this.username = username;
    }
    logme(){
        console.log(`Username is : ${this.username}`);
    }
    static createID(){
        return `123`
    }
}

const userexp= new user('abc');
userexp.logme();
console.log(userexp.createID());

class admin extends user{
    constructor(username,adminmail){
        super(username)
        this.adminmail=adminmail;
    }
}
 
const adminexp = new admin('xyz','admin@exp.com')
console.log(adminexp.createID());