const router = require("express").Router();
const workoutController = require("../controllers/workout-controller.js");
const path = require("path");

router.get("/api/workouts", workoutController.getLastWorkout);

router.put("/api/workouts/:id", workoutController.addExercise);

router.post("/api/workouts", workoutController.createWorkout);

// router.get("/api/workouts/range", workoutController.getWorkoutsInRange);

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
