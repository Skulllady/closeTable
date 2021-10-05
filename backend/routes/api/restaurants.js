const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = express.Router();

//view all restaurants listed
router.get('/restaurants', asyncHandler(async function (req, res) { }))

//view a specific restaurant
router.get('/restaurants/:id', asyncHandler(async function (req, res) { }))
