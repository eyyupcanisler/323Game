document.addEventListener('DOMContentLoaded', function () {
    const passwordBoxes = document.querySelectorAll('.password-box');
    passwordBoxes.forEach((box, index) => {
        box.addEventListener('click', function () {
            openNewGamePage(index + 1);
        });
    });
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function () {
        checkPassword();
    });
    const checkbox = document.getElementById('myCheckbox');

    let userInPage = false;
    let submitButtonClicked = false;
    setTimeout(function () {
        userInPage = true;
    }, 3000);

    const intervalId = setInterval(function () {
        if (userInPage && checkbox.checked && submitButtonClicked) {
            alert('You gain points!');
            clearInterval(intervalId);
        }
    }, 1000);

    submitButton.addEventListener('click', function () {
        // Set a flag indicating that the submit button is clicked
        submitButtonClicked = true;
    });

});

function openNewGamePage(gameNumber) {
    window.location.href = 'game' + gameNumber + '.html';
}

function returnToMain() {
    window.location.href = 'main.html';
}

function checkPassword() {
    const enteredPassword = document.getElementById('passwordInput').value;
    const correctPasswords = [".", ",", "!"]; // burda gerekli kuralları yazalım

    if (correctPasswords.some(password => enteredPassword.toLowerCase().includes(password))) {
        alert('Password is correct!');
    } else {
        alert('Password is incorrect!');
    }
}



