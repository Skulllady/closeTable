const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = express.Router();

//view all reservations listed
router.get('/reservations', asyncHandler(async function (req, res) { }))

//to create a reservation
router.post('/reservations', asyncHandler(async function (req, res) { }))
