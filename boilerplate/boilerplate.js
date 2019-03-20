'use strict';
require('dotenv').config();
var diligenza = require('diligenza');
var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var konzola = require('konzola').konzola;
diligenza.serverInit(3000, 'assets', app, express);
