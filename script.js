function volume_sphere() {
    const radiusInput = document.getElementById("radius");
    const volumeOutput = document.getElementById("volume");
    
    const radius = parseFloat(radiusInput.value);

    // Validate radius: must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
        return false; // Prevent form submission
    }

    // Calculate volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display volume rounded to 4 decimal places
    volumeOutput.value = volume.toFixed(4);

    return false; // Prevent form submission
}

// Attach the function to form submission
window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
