// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Handle Requests
router.get('/', commentsController.getComments);
router.post('/', commentsController.createComment);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);
