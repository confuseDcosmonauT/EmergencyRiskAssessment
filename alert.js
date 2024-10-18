function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
    } else {
    //say in html that browser is not supported
    cout = "browser not supported";
    document.getElementById('output').innerText = cout;
    }
}

async function positionSuccess (position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const alertUrl = `https://api.weather.gov/alerts/active?point=${latitude},${longitude}`;

    try {
        const response = await fetch(alertUrl);
        const alertData = await response.json();

        //console.log(alertData);
        cout = alertdata;
        document.getElementById('output').innerText = cout;
    } catch {
        //console.log("error");
        cout = "error";
        document.getElementById('output').innerText = cout;
    }
}
