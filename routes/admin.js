const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

router.post('/add-user', adminController.postAddUser);
router.get('/users', adminController.getUsers);
router.post('/delete-user', adminController.postDeleteUser);

module.exports = router;