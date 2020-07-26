const Workout = require("../models/workout.js");

module.exports = {
  createWorkout: async (req, res) => {
    const newWorkout = new Workout({
      name: req.body.name,
      type: req.body.type,
      weight: req.body.weight,
      sets: req.body.sets,
      reps: req.body.reps,
      duration: req.body.duration,
      distance: req.body.distance,
    });
    try {
      await newWorkout.save();
      console.log(newWorkout);
      res.json(newWorkout);
    } catch (err) {
      res.json(err);
    }
  },

  getLastWorkout: async (req, res) => {
    try {
      const lastWorkout = await Workout.find({});
      console.log(lastWorkout);
      res.json(lastWorkout);
    } catch (err) {
      res.json(err);
    }
  },

  getWorkoutsInRange: async (req, res) => {
    try {
      const workoutsInRange = await Workout.find({}).limit(10);
      console.log(workoutsInRange);
      res.json(workoutsInRange);
    } catch (err) {
      res.json(err);
    }
  },

  addExercise: async (req, res) => {
    // try {
    //   const addExercise = await Workout.findById(req.body.id);
    //   addExercise.name = req.body.name;
    //   addExercise.type = req.body.type;
    //   addExercise.weight = req.body.weight;
    //   addExercise.sets = req.body.sets;
    //   addExercise.reps = req.body.reps;
    //   addExercise.duration = req.body.duration;
    //   addExercise.distance = req.body.distance;
    //   await addExercise.save();
    // } catch (err) {
    //   res.send(err);
    // }
    Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercise: req.body } },
      { new: true }
    )
      .then((response) => {
        console.log(response);
        res.json(response);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
};
