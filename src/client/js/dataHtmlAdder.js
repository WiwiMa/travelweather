function addDataHtml(data) {
    const location = data.location;
    const date = data.date;
    const forecast = data.forecast;
    const imgUrl = data.img;

    document.querySelector('#output_title').textContent = 'Your journey to ' + location;
    document.querySelector('#output_date').textContent = 'The weather on ' + date;
    document.querySelector('#output_forecast').textContent = forecast;
    document.querySelector('#output_img').setAttribute('src', imgUrl);

    document.querySelector('#output_section').removeAttribute('style');
    document.querySelector('#input_section').setAttribute('style', 'display: none;');
}

export { addDataHtml }