

async function getWallpaper() {
    try {
        const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan")
        const data = await res.json()
        console.log(data)
        console.log(data.urls.full)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").innerText = `By: ${data.user.name}`
        return data
    } catch(err) {
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1614640522775-71bebddd21f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTA5MzQ5MTZ8&ixlib=rb-4.1.0&q=85")`
    }
}

getWallpaper()


async function getCoinData() {
    try {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
        const data = await res.json()
        document.getElementById("coin").innerHTML = `<img src="${data.image.small}" alt="bitcoin-image" class="coin-image"> <span>${data.name}</span>`
        document.getElementById('price-high').innerHTML = `$${data.market_data.high_24h.usd}`
        document.getElementById('price-low').innerHTML = `$${data.market_data.low_24h.usd}`

        console.log(data)
    } catch(err) {
        console.log( err)
    }
}

getCoinData()

function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

async function showLocation() {
    try {
        const position = await getLocation()
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid={APIKEY}`)
        if (!res.ok) {
            throw Error(`Weather data not available (${res.status})`)
        }
        const data = await res.json()
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
            
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

showLocation()

function updateClock() {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString("en-us", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    })
}

updateClock()
setInterval(updateClock, 1000)
