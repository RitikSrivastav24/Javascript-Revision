class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(newemail){
        this._email=newemail;
    }
    get password(){
        return this._password.toUpperCase();
    }

    set password(newpassword){
        this._password= newpassword;
    }
}

const nitin= new user("nitin@.in","abc")
console.log(nitin.password);
console.log(nitin.email);
