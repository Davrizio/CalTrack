class CalorieTracker {
    constructor() {
        this._calorieLimit = 2000;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];

        this._displayCaloriesLimit();
        this._displayCaloriesTotal();
        this._displayCaloriesComnsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
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

    _displayCaloriesLimit() {
        const calorieLimitEl = document.getElementById('calories-limit');
        calorieLimitEl.innerHTML = this._calorieLimit;
    }

    _displayCaloriesComnsumed() {
        const caloriesConsumedEl = document.getElementById('calories-consumed');
        const consumed = this._meals.reduce((t,m) => t + m.calories, 0);

        caloriesConsumedEl.innerHTML = consumed;
    }

    _displayCaloriesBurned() {
        const caloriesBurnedEl = document.getElementById('calories-burned');
        const burned = this._workouts.reduce((t,b) => t + b.calories, 0);

        caloriesBurnedEl.innerHTML = burned;
    }

    _displayCaloriesRemaining() {
        const caloriesRemainingEl = document.getElementById('calories-remaining');
        const remaining = this._calorieLimit - this._totalCalories;

        caloriesRemainingEl.innerHTML = remaining;
    }

    _render() {
        this._displayCaloriesTotal();
        this._displayCaloriesComnsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
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

