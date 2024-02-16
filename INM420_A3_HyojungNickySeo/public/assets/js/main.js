console.log('test this');

// Set default data as today's date when the page is refreshed.
document.addEventListener("DOMContentLoaded", async () => {
    // Get today's date
    const today = new Date();
    const todayString = formatDate(today); // Format: YYYY-MM-DD

    // Set the date input field value to today's date
    const dateInput = document.querySelector('#dateInput');
    dateInput.value = todayString;

    // Call getData function with today's date
    await getData(todayString);
});

// Function to format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Input date
const dateInput = document.querySelector('#dateInput');
console.log(dateInput);


// Add an event listener to the button that runs the function getData when it is clicked.
const searchBTN = document.querySelector('#searchBTN');

const ping = document.querySelector('#ping');
ping.volume = 0.4;

searchBTN.addEventListener("click", async () => {
    console.log("button pressed");
    const selectedDate = dateInput.value;
    await getData(selectedDate);

    // Play sound
    ping.play();
});

console.log(searchBTN);

// An asynchronous function to fetch data from the API.
async function getData(date) {
    try {
        // Get the API key from NASA
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=MN8xiRBYbIDwCn2auYDO9YFXWqOCxPa7cgnxsppM&date=${date}`);
        const data = await response.json();

        console.log(data);

        // Get date
        const dateElement = document.querySelector('#date');
        dateElement.innerHTML = `${data.date}`;
        // Get title
        const titleElement = document.querySelector('#title');
        titleElement.innerHTML = `${data.title}`;
        // Get explanation
        const explanationElement = document.querySelector('#explanation');
        explanationElement.innerHTML = `${data.explanation}`;
        // Get img
        const imgElement = document.querySelector('#img');
        imgElement.src = data.hdurl;

    } catch (error) {
        console.warn(`Nope: ${error}`);
    }
}
getData();






