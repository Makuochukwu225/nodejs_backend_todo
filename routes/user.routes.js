const router = require("express").Router();
const UserController = require('../controller/user.controller');

router.post("/registeration",UserController.register);

router.post("/login", UserController.login);

router.patch("/user/update",UserController.updateUser);


module.exports = router;