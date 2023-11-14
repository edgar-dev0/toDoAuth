const Todo = require("./ToDo");
const User = require("./User");


User.hasMany(Todo);
Todo.belongsTo(User);
