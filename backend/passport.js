var con = require('./databaseHandler')
var express = require('express');
var bcrypt = require("bcrypt");
var router = express.Router();
var localStrategy = require('passport-local').Strategy;
var passport= require('passport');
var session = require("express-session");

module.exports = function (passport) {
    passport.use('local', new localStrategy({ usernameField: 'email' }, (email, password, done) => {
        con.query(`SELECT * FROM users WHERE email = '${email}'`, (err, data) => {
            if (err) throw err;
            if (!data[0]) {
                return done(null, false, { message: "User doesn't exists.", type: "warning" });
            }
            bcrypt.compare(password, data[0].password, (err, match) => {
                console.log(data[0], match);
                if (err) {
                    console.log("Error!")
                    return done(null, false);
                    
                }
                if (!match) {
                    console.log("password don't match");
                    return done(null, false, { message: "Password doesn't match.", type: "danger"});
                    
                }
                if (match) {
                    console.log("Logged in....")
                    return done(null, data);
                    
                }
            });
        });
    }));

    // passport.serializeUser(function (user, cb) {
    //     cb(null, user[0].id);
    // });
    
    
    // passport.deserializeUser(function (id, cb) {
    //     console.log(id,"((---");
    //     con.query(`SELECT * FROM users WHERE id = '${id}'`,function(err,user){
    //         if(err) throw err
    //             console.log(user);
    //             cb(err,user);          
    //     });
    // });
}
passport.serializeUser(function (user, cb) {
    cb(null, user[0].id);
});

// ! NOT WORKING
passport.deserializeUser(function (id, cb) {
    con.query(`SELECT * FROM users WHERE id = '${id}'`,function(err,user){
        console.log(user);
        cb(err,user);          
    });
});

