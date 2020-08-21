const router = require("express").Router();
const Workout = require("../models/workout.js");


// get find , workout.find ,
router.get("/api/workouts", (req, res) => {
  Workout.find()
  .then(dbworkout => {
    res.json(dbworkout)
  })
  .catch((err) => {
    console.log(err)
    res.json(err);
  });
})

// api/workouts/:range
router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
  .then(dbworkout => {
    res.json(dbworkout)
  })
  .catch((err) => {
    console.log(err)
    res.json(err);
  });
})

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(dbworkout => {
        console.log(dbworkout);
        res.json(dbworkout)
    }).catch((err) => {
        res.json(err);
    })
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id, 
        {
            $push: { exercises: req.body }
        },
        {
            new: true,
            runValidators: true
        }
    ).then( dbworkout => {
      res.json(dbworkout)
    }).catch((err) => {
        res.json(err);
    })
})

module.exports = router;
