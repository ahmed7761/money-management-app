const router = require('express').Router();

const { login, register } =require('../controllers/userController');

// Register Route
// localhost:4000/api/users/register
router.post('/register', register);

// Login Route
// localhost:4000/api/users/login
router.post('/login', login);

module.exports = router;
