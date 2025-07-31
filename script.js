async function searchFlight() {
    console.log('Searching for flight...');
    const flight = document.getElementById('flightNumber').value.trim().replace(/\s+/g, '');
    console.log(` Cleaned Flight number entered: ${flight}`);
    const res = await fetch(`http://localhost:8000/api/flight?flight=${flight}`);
    const data = await res.json();
    const div = document.getElementById('result');
    if (data.error) {
        div.textContent = data.error;
    } else {
        div.innerHTML = `
          <p><strong>Airline:</strong> ${data.airline}</p>
          <p><strong>Flight:</strong> ${data.flight_number}</p>
          <p><strong>Status:</strong> ${data.status}</p>
          <p><strong>From:</strong> ${data.departure}</p>
          <p><strong>To:</strong> ${data.arrival}</p>
        `;
    }
}
document.getElementById('searchButton').addEventListener('click', async function(event) {
    event.preventDefault();
    await searchFlight();
});