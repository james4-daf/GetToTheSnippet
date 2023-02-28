const express = require("express");
const router = express.Router();

let SnippetModel = require("../models/Snippet.model");

// NOTE: All your API routes will start from /api

// will handle all GET requests to http:localhost:5005/api/snippets
router.get("/snippets", (req, res) => {
  SnippetModel.find()
    .then((snippets) => {
      res.status(200).json(snippets);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

// will handle all POST requests to http:localhost:5005/api/create

router.post("/create", (req, res) => {
  const { name, description, completed } = req.body;
  console.log(req.body);
  SnippetModel.create({
    name: name,
    description: description,
    completed: completed,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

// will handle all GET requests to http:localhost:5005/api/snippets/:todoId
//PS: Don't type :todoId , it's something dynamic,
router.get("/snippets/:snippetId", (req, res) => {
  SnippetModel.findById(req.params.todoId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

// will handle all DELETE requests to http:localhost:5005/api/snippets/:id
router.delete("/snippets/:id", (req, res) => {
  SnippetModel.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

// will handle all PATCH requests to http:localhost:5005/api/snippets/:id
router.patch("/snippets/:id", (req, res) => {
  let id = req.params.id;
  const { name, description, completed } = req.body;
  SnippetModel.findByIdAndUpdate(
    id,
    { $set: { name: name, description: description, completed: completed } },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

module.exports = router;
