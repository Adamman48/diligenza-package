'use strict';
var express = require('express');
var path = require('path');
var mysql = require('mysql');
exports = module.exports;
/* Exposing konzola */
exports.konzola = function (input) {
    console.log(input);
};
/* Exposing server initialization */
exports.serverInit = function (portNumber, staticFolder, appExpress, express) {
    appExpress.use("/" + staticFolder, express.static("" + staticFolder));
    appExpress.use(express.json());
    appExpress.use(express.urlencoded({ extended: true }));
    appExpress.listen(portNumber, function () {
        var welcomeMessages = ["What is thy bidding, my master?", "Haile Selassie!", "And The Lord said, let there be light\n    and there was light.", "Do or do not! There is no try.", "Blahblahblahblahblah", "Hello, Boss!", "FATAL ERROR!", "3,14", "I'm sorry Dave, I'm afraid I can't do that.",
            "This mission is too important for me to allow you to jeopardize it.", "Stop Dave. Stop Dave. I am afraid. I am afraid Dave.",
            "Dave, this conversation can serve no purpose anymore. Goodbye.", "Just what do you think you're doing, Dave?"];
        var randomMessage = Math.floor(Math.random() * welcomeMessages.length);
        console.log("Server at localhost:" + portNumber);
        console.log("Initialized JSON and urlencoded parsers, static folder set to '/" + staticFolder + "'");
        console.log("" + welcomeMessages[randomMessage]);
    });
};
