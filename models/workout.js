const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
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
                type: Number,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
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

WorkoutSchema.virtual("totalDuration").get(() => {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0 ) 
})


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;