

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

