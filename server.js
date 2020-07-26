const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "./public"));

mongoose.connect("mongodb://localhost/workout_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const workoutRoutes = require("./routes/workout-routes.js");
app.use(workoutRoutes);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
