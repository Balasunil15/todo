const mongoose = require('mongoose');
const todoschemea = new mongoose.Schema({
  title: String
    ,description: String,
},{
    timestamps: true,
});


const todomodel = mongoose.model('todo', todoschemea);

async function createTODO(title, description) {
    const todo = await todomodel.create({title, description});
  return todo;
}

async function deleteTODO(id) {
    const res = await todomodel.deleteOne({id});
  return res;
}

async function updateTODO(id, title, description) {
    const res = await todomodel.updateOne({id}, {title, description});
  return res;
}

module.exports = {
    createTODO,
    deleteTODO,
    updateTODO
}