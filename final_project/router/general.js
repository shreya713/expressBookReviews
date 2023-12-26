const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  
});
// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
    res.send(JSON.stringify({books},null,4));
});

// Get book details based on ISBN
public_users.get('/:isbn',function (req, res) {
        const isbn = req.params.isbn;
        res.send(books[isbn])
        });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;
    res.send(books[author])
    });
// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;
    res.send(books[title])
    });
//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const reviews = req.params.reviews;
    res.send(books[reviews])
    });
var fs=require('fs');
var filename1="auth_users.js"
var filename2="booksdb.js"
var filename3="general.js"

function readFile1(filename1) {
    fs.readfile(filename1,(err,data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("\n\nthe cotent of the file is \n\n"
            +data);
            console.log("completed reading file1");
        }
    });
}

function readFile2(filename2) {
    fs.readfile(filename2,(err,data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("\n\nthe cotent of the file is \n\n"
            +data);
            console.log("completed reading file2");
        }
    });
}


function readFile3(filename3) {
    fs.readfile(filename3,(err,data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("\n\nthe cotent of the file is \n\n"
            +data);
            console.log("completed reading file3");
        }
    });
}
console.log('before reading file 1');
readFile1(filename1);
console.log('before reading file 2');
readFile2(filename2);
console.log('before reading file 3');
readFile3(filename3);

console.log('all done');


var isbn=require('node-isbn')
isbn.resolve('12345').then(function(books){
    console.log('book found');
}).catch(function(Err){
    console.log('book not found',err);
});
var author=require('node-author')
isbn.resolve('Jane Austen').then(function(books){
    console.log('book found');
}).catch(function(Err){
    console.log('book not found',err);
});
var title=require('node-title')
isbn.resolve('Pride and Prejudice').then(function(books){
    console.log('book found');
}).catch(function(Err){
    console.log('book not found',err);
});
module.exports.general = public_users;