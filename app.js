// varaibles for API URL address and HTML elements to disaply fetched data
const QUOTES_API_URL = 'https://api.adviceslip.com/advice';
let quoteTxt = document.getElementById('quote-id');
let adviceId = document.getElementById('advice_id');

// on click function to fetch tje data
const diceIconBtn = document.getElementById('dice-id').addEventListener('click', () => {
    fetch(QUOTES_API_URL)
        .then(response => response.json())
        .then(data => (
            adviceId.textContent = data.slip.id,
            quoteTxt.textContent = `"${data.slip.advice}"`,
            console.log(data.slip.advice),
            console.log(data.slip.id)
        ));
})

