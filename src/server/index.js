const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const Geonames = require('geonames.js')
const DarkSky = require('dark-sky')
const fetch = require('node-fetch')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

dotenv.config()

app.use(express.static('dist'))

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// Designates what port app will listen to for incoming requests
app.listen(8080, function() {
    console.log('App listening on port 8080!')
})

// Handling POST request from Client to receive input data
app.post('/travelData', processData)

const geonames = new Geonames({
    username: process.env.GEO_USERNAME,
    lan: 'en',
    encoding: 'JSON'
})

const darksky = new DarkSky(process.env.DARKSKY_KEY)

async function processData(req, res) {
    const travelLocation = req.body.location;
    const travelDate = req.body.date;
    const resData = {
        'location': travelLocation,
        'date': travelDate
    };
    try {
        const cityData = await geonames.search({q: travelLocation});
        // console.log(cityData);
        const firstCity = cityData.geonames[0];
        // console.log(firstCity)
        const firstCityLNG = firstCity.lng;
        const firstCityLAT = firstCity.lat;
        // console.log('Longitude: ' + firstCityLNG);
        // console.log('Latitude: ' + firstCityLAT);
        const forecast = await darksky
        .options({
            latitude: firstCityLAT,
            longitude: firstCityLNG,
            time: travelDate
        })
        .get()
        // const forecastSummary = {'forecast': forecast.hourly.summary};        
        // resData.push({'forecast': forecast.hourly.summary});
        resData.forecast = forecast.hourly.summary;
    } catch(error) {
        console.log(error)
    }
    try {
        const pixaUrl = "https://pixabay.com/api/?key=" + process.env.PIXA_KEY + "&q=" + encodeURIComponent(travelLocation);
        const pixaRes = await fetch(pixaUrl);
        const pixaImgInfo = await pixaRes.json();
        // const pixaImgURL = {'imgUrl': pixaImgInfo.hits[0].webformatURL};
        // resData.push({'imgUrl': pixaImgInfo.hits[0].webformatURL});
        resData.img = pixaImgInfo.hits[0].webformatURL;
    } catch(error) {
        console.log('Pixabay error');
        console.log(error);
    }
    res.send(resData)
}

module.export = app;
exports.processData = processData;