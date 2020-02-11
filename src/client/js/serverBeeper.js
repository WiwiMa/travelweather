function beepServer (event) {
    event.preventDefault();

    const location = document.getElementById('input_location').value;
    const date = document.getElementById('input_date').value;

    console.log('Travel location: ' + location);
    console.log('Travel date: ' + date);

    const travelData = {
        'location': location,
        'date': date
    };

    Client.postTravelData('/travelData', travelData);
}

export { beepServer }