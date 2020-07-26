const router = require("express").Router();
const workoutController = require("../controllers/workout-controller.js");

router.post("/workout", workoutController.addWorkout);

router.get("/workout", workoutController.getWorkouts);

router.patch("/workout", workoutController.updateWorkout);

module.exports = router;
