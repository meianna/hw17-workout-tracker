const Workout = require("../models/workout.js");

module.exports = {
  addWorkout: async (req, res) => {
    const newWorkout = new Workout({
      name: req.body.name,
      type: req.body.type,
      weight: req.body.weight,
      sets: req.body.sets,
      reps: req.body.reps,
      duration: req.body.duration,
      distanceTraveled: req.body.distanceTraveled,
    });
    try {
      await newWorkout.save();
      res.send(newWorkout);
    } catch (err) {
      res.send(err);
    }
  },

  getWorkouts: async (req, res) => {
    try {
      const allWorkouts = await Workout.find();
      res.send(allWorkouts);
    } catch (err) {
      res.send(err);
    }
  },

  updateWorkout: async (req, res) => {
    try {
      const updateWorkout = await Workout.findById(req.body.id);
      updateWorkout.name = req.body.name;
      updateWorkout.type = req.body.type;
      updateWorkout.weight = req.body.weight;
      updateWorkout.sets = req.body.sets;
      updateWorkout.reps = req.body.reps;
      updateWorkout.duration = req.body.duration;
      updateWorkout.distanceTraveled = req.body.distanceTraveled;
      await updateWorkout.save();
    } catch (err) {
      res.send(err);
    }
  },
};
