'use strict';

require('dotenv').config();
const diligenza = require ('diligenza');
const express = require ('express');
const app = express();
const path = require ('path');
const mysql = require ('mysql');
const { konzola } = require('konzola');

diligenza.serverInit(3000, 'assets', app, express);