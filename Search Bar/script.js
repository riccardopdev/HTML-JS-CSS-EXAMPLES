//Get the HTML template section from the document
const userCardTemplate = document.querySelector('[data-user-template]');
//Get the div containers for all cards
const userCardsContainer = document.querySelector('[data-user-cards-container]');
//Get the search input field
const searchInput = document.querySelector('[data-search]');

//Object to hold the user data
let users;

searchInput.addEventListener('input', (ev) => {
    const value = ev.target.value.toLowerCase();

    //Run code for each user
    users.forEach(user => {
        //For each user check if the value entered in the input field is included in the user name or email
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value);

        //For each user's card toggle the hide class based on isVisible boolean value
        user.element.classList.toggle('hide', !isVisible);
    });
});

// Load some fake data from jsonplaceholder api
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        users = data.map(user => {
            //Get the content of the template and clone it
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector('[data-header]');
            const body = card.querySelector('[data-body]');

            //Populate the card's divs
            header.textContent = user.name;
            body.textContent = user.email;

            //Append the car to the container
            userCardsContainer.append(card);

            return {name: user.name, email: user.email, element: card};
        });
    });