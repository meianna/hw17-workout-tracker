const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },

  exercise: [
    {
      name: {
        type: String,
        required: "Must enter an exercise name",
      },
      type: {
        type: String,
        required: "Must enter exercise type: resistance or cardio",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

// this will run before the instance is saved to the database
// workoutSchema.pre("save", (next) => {
//   console.log("This is going to save");
//   // next is being used as middleware
//   next();
// });

// workoutSchema.pre("remove", (next) => {
//   console.log("this will be removed");
//   next();
// });

// workoutSchema.virtual("duration")

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
