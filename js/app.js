class CalorieTracker {
    constructor() {
        this._calorieLimit = 2000;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];
    }

    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
        this._render();
    }

    addWorkout(workout) {
        this._meals.push(workout);
        this._totalCalories -= workout.calories;
        this._render();
    }

    _displayCaloriesTotal() {
        const totalCaloriesEl = document.getElementById('calories-total');
        totalCaloriesEl.innerHTML = this._totalCalories;
    }

    _render() {
        this._displayCaloriesTotal();
    }
}

class Meal {
    constructor(name,calories) {
        this.id = new Date;
        this.id.name = name;
        this.id.calories = calories;
    }
}

class Workout {
    constructor(name,calories) {
        this.id = new Date;
        this.id.name = name;
        this.id.calories = calories;
    }
}

const traker = new CalorieTracker();

