function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultDiv = document.getElementById("result");

    // Check for valid inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = "Please enter valid, positive numbers for height and weight.";
        resultDiv.style.color = "red";
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    let category = "";

    // Determine BMI category
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display result
    resultDiv.innerHTML = `BMI: ${bmi.toFixed(2)} - ${category}`;
    resultDiv.style.color = "black";
}

