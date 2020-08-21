const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
        // default: Data.now, 
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

// WorkoutSchema.virtual("totalWeight").get(function () {
//   // adding the total weight of the exercises together
//   return this.weight * this.reps * this.sets;
// });

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0 ) 
})


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;