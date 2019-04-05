const quotes = ['"Two things are infinite the universe and human stupidity; and I\'m not sure about the universe. "', '"A room without books is like a body without a soul.” ', '“We are all in the gutter, but some of us are looking at the stars.”', '“If you judge people, you have no time to love them.” ', '“I love deadlines. I love the whooshing noise they make as they go by.”, "Be yourself; everyone else is already taken." '];

const button = document.querySelector('button');
const p = document.querySelector('p');
const randomQuotes = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // return quotes[randomIndex];
    p.textContent = `${quotes[randomIndex]}`;
};
button.addEventListener('click', randomQuotes);