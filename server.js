const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// db.Workout.create({ name: "New Workout" })
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

// app.post("/submit", ({body}, res) => {
//   db.Book.create(body)
//     .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/exercise", (req, res) => {
//     res.send(exercise.html);
// });

// app.get("/", (req, res) => {
//     res.send(index.html);
// });

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});