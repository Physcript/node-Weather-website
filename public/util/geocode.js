const request = require('request')

const weatherCode = (address,callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=b75f7b1597eb3df565ce5d58607f70ef&query="+encodeURIComponent(address)
    request({url,json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to weather server',undefined)
        }else if(response.body.success === false){
            callback('Unable to find location. Please try again',undefined)
        }else{
            callback(undefined,{
                loc: response.body.location.country,
                lat: response.body.location.lat,
                lon: response.body.location.lon,
                tem: response.body.current.temperature,
                des: response.body.current.weather_descriptions[0],
                img: response.body.current.weather_icons[0]
            })
        }
    })  
}


module.exports= weatherCode