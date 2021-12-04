const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const WorkoutSchema = new Schema({
//     date: {
//         type: Date,
//         default: Date.now
//     },
//     exercises: [
//         {
//           type: Schema.Types.ObjectId,
//           ref: "Exercise"
//         }
//     ]
// });

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "First Name is Required"
            },  
            name: {
                type: String,
                trim: true,
                required: "Last Name is Required"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Username is Required"
            },
            distance: {
                type: Number,
                trim: true
            },
            weight: {
                type: Number,
                trim: true
            },
            reps: {
                type: Number,
                trim: true
            },
            sets: {
                type: Number,
                trim: true
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
