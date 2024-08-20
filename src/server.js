require('dotenv').config({path: "variaveis.env"})

const express = require('express')
const cors = require ('cors')
const bodyParser = require('body-parser')
const routes = require('./routes.js')