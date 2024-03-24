const cards = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.card-container');

//Observer for animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    });
}, { threshold: 1 });

//Observer each card
cards.forEach((card) => {
    observer.observe(card);
});

//Observer for loading additional cards
const lastCardObserver = new IntersectionObserver((entries) => {
    const lastCard = entries[0];

    //If the last card is not intersecting do nothing
    if (!lastCard.isIntersecting) return;

    //Otherwise, load new cards, stop observing this last card, start observing the new last card
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector('.card:last-child'));
});

lastCardObserver.observe(document.querySelector('.card:last-child'));

function loadNewCards() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('div');
        card.textContent = 'New card';
        card.classList.add('card');
        observer.observe(card);
        cardContainer.append(card);
    }
}

