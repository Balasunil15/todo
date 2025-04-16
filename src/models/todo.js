const mongoose = require("mongoose");
const todoschemea = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const todomodel = mongoose.model("todo", todoschemea);

async function getTODO() {
  const todos = await todomodel.find();
  return todos;
}

async function createTODO(title, description) {
  const todo = await todomodel.create({ title, description });
  return todo;
}

async function pageTODO(page,limit){
  const skip = (page-1)*limit
  const pages=await todomodel.find().skip(Number(skip)).limit(Number(limit));
  return pages;
}

async function deleteTODO(id) {
  const res = await todomodel.deleteOne({ _id: id }); // Use _id instead of id
  return res;
}

async function updateTODO(id, title, description) {
  const res = await todomodel.updateOne({ id }, { title, description });
  return res;
}

module.exports = {
  createTODO,
  deleteTODO,
  updateTODO,
  getTODO,
  pageTODO
};
