class User {

    #name;
    #lastname;
    #age;
    #login;
    #password

    constructor(name, lastname, age) {
        this.#name = name;
        this.#lastname = lastname;
        this.#age = age;
    }
    
    /**
     * @param {string} login
     */
    set setLogin(login) {
        this.#login = login;
    }

    get getLogin() {
        return this.#login;
    }

    /**
     * @param {string} password
     */
    set setPassword(password) {
        this.#password = password;
    }
}

const david = new User('David', 'Akunts', 30);

david.setLogin('akunts');
console.log(david.getLogin());