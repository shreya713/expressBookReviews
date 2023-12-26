const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();
var fs=require('fs');
var filename1="auth_users.js"
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
console.log('before reading file 1');
readFile1(filename1);
console.log('all done');


let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.put("/:isbn", function(req, res)  {
        const isbn = req.params.isbn;
        let filtered_book = book.filter((books) => books.isbn === isbn);
        if (filtered_book.length > 0) {
            let filtered_books = filtered_book[0];
            let author = req.query.author;
            //if the DOB has changed
            if(author) {
                filtered_books.author = author
            }
            if(title) {
                filtered_books.title = title
            }
            if(reviews) {
                filtered_books.reviews = reviews
            }
            /*
            Include code here similar to the one above for other attibutes
            */
            book = book.filter((books) => books.isbn!= isbn);
            book.push(filtered_books);
            res.send(`User with the email  ${isbn} updated.`);
        }
        else{
            res.send("Unable to find user!");
        }
      });     
      module.exports.authenticated = regd_users;
      module.exports.isValid = isValid;
      module.exports.users = users;