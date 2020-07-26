const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    required: "Must enter an exercise name",
  },

  type: {
    type: String,
    required: "Must enter a type of exercise",
  },

  weight: {
    type: String,
    required: "Must enter a weight",
  },

  sets: {
    type: Number,
    required: "Must enter the number of sets",
  },

  reps: {
    type: Number,
    required: "Must enter the number of reps",
  },

  duration: {
    type: String,
    required: "Must enter duration of workout",
  },

  distanceTraveled: {
    type: String,
    required: "For cardio workouts must enter distance traveled",
  },
});

// this will run before the instance is saved to the database
workoutSchema.pre("save", (next) => {
  console.log("This is going to save");
  // next is being used as middleware
  next();
});

workoutSchema.pre("remove", (next) => {
  console.log("this will be removed");
  next();
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
