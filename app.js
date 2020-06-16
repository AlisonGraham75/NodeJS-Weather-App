 const geocode = require('./utils/geocode')
 const forecast = require('./utils/forecast')

//Get City from the command line
const city = process.argv[2]

if (!city) {
    console.log('Please provide a city. ')
} else {

    geocode(city, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude,(error, forcastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log('Data', forcastData)
        })
    })
}

