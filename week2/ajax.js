const fetchData = (method = 'GET', url, succesHandler, errorHandler) => {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.send();
    
    request.onreadystatechange = () => {
        console.log('Iets is veranderd', request.readyState);
        switch (request.readyState) {
            case 0:
                console.log('UNSENT');
                break;
            case 1:
                console.log('OPENED CONNECTION');
                break;
            case 2:
                console.log('HEADERS ACCEPTED');
                break;
            case 3:
                console.log('LOADING');
                break;
            case 4:
                console.log('LOADED', request.status);
                if (request.status === 200) {
                    console.log('SUCCESS!');
                    console.log(request.responseType)
                    console.log(JSON.parse(request.response));
                } else {
                    throw new Error('Niet gelukt!')
                }
                break;
            default:
                break;
        }
    }
    
    request.addEventListener('progress', (e) => {
        // console.log((e.loaded / e.total) * 100);
        const p = document.getElementById('progress');
    
        p.setAttribute('value', e.loaded);
        p.setAttribute('max', e.total);
        p.innerHTML = (e.loaded / e.total) * 100;
    })
}

fetchData(null, 'https://data.stad.gent/api/records/1.0/search/?dataset=real-time-bezettingen-fietsenstallingen-gent&q=&facet=facilityname&facet=lichtfestival')
