'use strict';

const express = require('express');
const path = require('path');
const mysql = require('mysql');

exports = module.exports;

/* Exposing konzola */

exports.konzola = (input: any) => {
  console.log(input);
};

/* Exposing server initialization */

exports.serverInit = (portNumber: number, staticFolder: string, appExpress, express) => {
  appExpress.use(`/${staticFolder}`, express.static(`${staticFolder}`));
  appExpress.use(express.json());
  appExpress.use(express.urlencoded({ extended: true }));

  appExpress.listen(portNumber, () => {
    const welcomeMessages: string[] = [`What is thy bidding, my master?`, `Haile Selassie!`, `And The Lord said, let there be light
    and there was light.`, `Do or do not! There is no try.`, `Blahblahblahblahblah`, `Hello, Boss!`, `FATAL ERROR!`, `3,14`, `I'm sorry Dave, I'm afraid I can't do that.`,
      `This mission is too important for me to allow you to jeopardize it.`, `Stop Dave. Stop Dave. I am afraid. I am afraid Dave.`,
      `Dave, this conversation can serve no purpose anymore. Goodbye.`, `Just what do you think you're doing, Dave?`];
    let randomMessage: number = Math.floor(Math.random() * welcomeMessages.length);

    console.log(`Server at localhost:${portNumber}`);
    console.log(`Initialized JSON and urlencoded parsers, static folder set to '/${staticFolder}'`);
    console.log(`${welcomeMessages[randomMessage]}`);
  });
};