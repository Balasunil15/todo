const express = require("express");

const {
  createTODO,
  updateTODO,
  deleteTODO,
  pageTODO,
  getTODO,
  deleteMultipleTODO,
  createMultipleTODO,
} = require("../models/todo");

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const todo = await createTODO(title, description);
  res.send(todo);
});

router.post("/bulk", async (req, res) => {
  const { todos } = req.body;
  const resp = await createMultipleTODO(todos);
  res.send(resp);
});

router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  const _id = req.params.id;
  const resp = await updateTODO(_id, title, description);
  res.send(resp);
});

router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  const resp = await deleteTODO(_id);
  res.send(resp);
});

router.delete("/", async (req, res) => {
  const { ids } = req.body;
  const resp = await deleteMultipleTODO(ids);
  res.send(resp);
});

router.get("/", async (req, res) => {
  const todos = await getTODO();
  res.send(todos);
});

router.get("/pages", async (req, res) => {
  const { page, limit } = req.body;
  const todos = await pageTODO(page, limit);
  res.send(todos);
});

module.exports = router;
