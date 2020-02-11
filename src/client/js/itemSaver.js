function saveItem() {
    // Creating new item with "saved" weather data
    const title = document.querySelector('#output_title').innerText;
    const date = document.querySelector('#output_date').innerText;
    const forecast = document.querySelector('#output_forecast').innerText;
    const img = document.querySelector('#output_img').getAttribute('src');

    const savedSection = document.createElement('section');
    savedSection.setAttribute('id', 'saved_section');

    const savedTitle = document.createElement('h2');
    savedTitle.innerHTML = title;

    const savedDate = document.createElement('div');
    savedDate.setAttribute('id', 'saved_date');
    savedDate.innerHTML = date;

    const savedForecast = document.createElement('div');
    savedForecast.setAttribute('id', 'saved_forecast');
    savedForecast.innerHTML = forecast;

    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'saved_location_image');
    const savedImg = document.createElement('img');
    savedImg.setAttribute('src', img);
    imgDiv.appendChild(savedImg);
    
    savedSection.appendChild(savedTitle);
    savedSection.appendChild(savedDate);
    savedSection.appendChild(savedForecast);
    savedSection.appendChild(imgDiv);

    document.querySelector('#output_section').setAttribute('style', 'display: none;');
    document.querySelector('#input_section').removeAttribute('style');

    document.querySelector('main').append(savedSection);
}

export { saveItem }