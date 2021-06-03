
const weatherForm = document.querySelector('form')
const inputSearch = document.querySelector('input')
const weatherImage = document.querySelector('.container img')

const resultLocation = document.querySelector('#country')
const resultTemp =  document.querySelector('#temp')
const resultWeather =  document.querySelector('#weather_des')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const locationInpute = inputSearch.value
    fetch('/weather?address='+locationInpute).then( (response)=>{
        response.json().then( (response)=> {
            if(response.error){
                return console.log(response.error)
            }
            else{
                console.log(response)
                weatherImage.src=response.forcast.img
                resultLocation.textContent=response.forcast.loc
                resultTemp.textContent=response.forcast.tem + ' Degree'
                resultWeather.textContent=response.forcast.des
                
            }
        })
    })    
})