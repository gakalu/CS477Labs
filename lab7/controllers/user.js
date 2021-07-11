const users = [];

module.exports = class User {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    login() {
        return users.find(u => { return u.username === this.username && u.password === this.password });
    }

    // static init() {
    //     users.push(new User('john', 'admin', 'admin'));
    //     users.push(new User('bella', 'member', 'member'));
    //  }
}