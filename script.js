//** SWAPI - The starwars API Project

// Select Character Attributes
const name = document.getElementById('name');
const eyeColor = document.getElementById('eye_color');
const birthYear = document.getElementById('birth_year');

// Button
const button = document.querySelector('.getRandomCharacter');


// Event Listener and arrows function
button.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log("Clicked!");
    name.innerHTML = '<em>Loading ...</em>';
    eyeColor.innerHTML = '<em>Loading ...</em>';
    birthYear.innerHTML = '<em>Loading ...</em>';

    // Generating random character data between 0 & 83
    const randomNumber = Math.ceil(Math.random() * 83);

    // The fetch API & template literal
    fetch(`https://swapi.dev/api/people/${randomNumber}/`)
        // get response and display character info
        .then(response => response.json())
        .then(character => {
            // console.log(character);
            name.innerHTML = character['name'];
            eyeColor.innerHTML = character['eye_color'];
            birthYear.innerHTML = character['birth_year'];
        })
})




//! Note:   Total Number of People in SWAPI - StarwarsAPI = 83

