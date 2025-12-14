/*get and set are defined directly inside an object literal.
key points 

Defined inside { }
Works on single object
Simple and readable
Cannot be reused easily
*/

        
const user ={
    _email: 'n@.in',
    _password:'abc',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const userdetails=  Object.create(user); //factory function syntax
console.log(userdetails.email);
