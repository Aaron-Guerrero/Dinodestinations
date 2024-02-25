function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// When the page loads, click the Login tab
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tab').click();
});

// Function to check if the passwords match
function checkPasswords() {
    var password = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

// Event listener for the signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    if (!checkPasswords()) {
        event.preventDefault(); // Prevent form submission if passwords don't match
    } else {
        // Here you can collect user data and do something with it, like sending it to the server
        // For example:
        var username = document.getElementById('newUsername').value;
        // Send username and password to the server or store it
    }
});