const Book = require('../models/book');

exports.getBooks = async(req, res, next) => {
    try {
        res.status(200).json(await Book.fetchAll().toArray());
    } catch (error) {
        next(error);
    }
}

exports.getBookById = async(req, res, next) => {
    try {
        res.status(200).json(await Book.findById(req.params.bookId));
    } catch (error) {
        next(error);
    }
}

exports.save = async(req, res, next) => {
    try {
        const book = req.body;
        const savedBook = await new Book(null, book.title, book.isbn, book.publishedDate, book.author).save();
        res.status(201).json(savedBook.ops[0]);
    } catch (error) {
        next(error);
    }
}

exports.update = async(req, res, next) => {
    try {
        const book = req.body;
        const updatedBook = new Book(req.params.bookId, book.title, book.isbn, book.publishedDate, book.author);
        await updatedBook.update();
        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
}

exports.deleteById = async(req, res, next) => {
    try {
        await Book.deleteById(req.params.bookId);
        res.status(200).end();
    } catch (error) {
        next(error);
    }
}