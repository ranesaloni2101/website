// Function to handle option selection
function selectOption(element) {
    // Remove the 'selected' class from all options
    const allOptions = document.querySelectorAll('.option-box');
    allOptions.forEach(option => {
        option.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked option
    element.classList.add('selected');
}