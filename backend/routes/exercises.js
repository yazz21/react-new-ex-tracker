const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercise) => {
      res.json(exercise);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const descrption = req.body.descrption;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    descrption,
    duration,
    date,
  });
  newExercise
    .save()
    .then(() => res.json("Exercise Added"))
    .catch((err) => res.status(400).json("Error from save: " + err));
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error from /:id get: " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted ...."))
    .catch((err) => res.status(400).json("Error from :/id delete: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id).then((exercise) => {
    exercise.username = req.body.username;
    exercise.descrption = req.body.descrption;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise
      .save()
      .then(() => res.json("Exersice Updated!!"))
      .catch((err) => res.status(400).json("Error : " + err));
  });
});

module.exports = router;
