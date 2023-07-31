// Get the Calculate button element
const calculateBtn = document.querySelector(".calculate-btn");

// Add a click event listener to the Calculate button
calculateBtn.addEventListener("click", function () {
    // Get the input values from the form
    const age = parseInt(document.querySelector(".age-section input").value);
    const gender = document.querySelector(".gender-section input:checked").value;
    const weight = parseInt(document.querySelector(".weight-section input").value);
    const height = parseInt(document.querySelector(".height-section input").value);
    const inches = parseInt(document.querySelector(".inches-section input").value);
    const lifestyle = parseInt(document.querySelector(".lifestyle-section input").value);

    // Calculate the calories needed based on the Harris-Benedict equation
    // For males: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
    // For females: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
    const weightInKg = weight / 2.20462;
    const heightInCm = height * 30.48 + inches * 2.54;
    const bmr = gender === "male" ? 88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * age : 447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.33 * age;

    // Calculate the total calories needed based on the BMR and lifestyle
    const totalCalories = Math.round(bmr * lifestyle);

    // Display the result in the Total Calories input field
    document.querySelector(".total-calories-section input").value = totalCalories;
});

