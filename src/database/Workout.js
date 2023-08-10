import { createRequire } from "module";
const require = createRequire(import.meta.url);
const DB = require("./db.json");
import { saveToDatabase } from "./utils.js";

const getAllWorkouts = () => {
    return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded =
        DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
};

export {
    getAllWorkouts,
    createNewWorkout,
}