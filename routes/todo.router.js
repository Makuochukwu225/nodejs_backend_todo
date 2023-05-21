const router = require("express").Router();
const ToDoController = require('../controller/todo.controller')

router.post("/store",ToDoController.createToDo);

router.post('/stores',ToDoController.getToDoList)

router.post("/delete",ToDoController.deleteToDo)



module.exports = router;

