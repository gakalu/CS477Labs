  
const { ObjectID } = require('mongodb');
const getDb = require('../utils/database').getDb;


module.exports = class User {
    constructor(_id, username, password, role) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    login() {
        return getDb().collection('users').findOne({ username: this.username, password: this.password });
    }

    signUp() {
        getDb().collection('users').insertOne({ username: this.username, password: this.password,role:"member" });
        return this;
    }
}

//user = [new User('john', 'admin1', 'admin'), new User('bella', 'memeber', 'user')];

