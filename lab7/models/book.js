const { ObjectID } = require('mongodb');
const getDb = require('../utils/database').getDb;

module.exports = class Book {

    constructor(_id, title, isbn, publishedDate, author) {
        this._id = _id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        return getDb().collection('books').insertOne(this);
    }

    update() {
        return getDb().collection('books').updateOne({ _id: new ObjectID(this._id) }, { $set: { title: this.title, isbn: this.isbn, publishedDate: this.publishedDate, author: this.author } });
    }

    static fetchAll() {
        return getDb().collection('books').find();
    }

    static findById(bookId) {
        return getDb().collection('books').findOne({ _id: new ObjectID(bookId) });
    }

    static deleteById(bookId) {
        return getDb().collection('books').deleteOne({ _id: new ObjectID(bookId) });
    }

}