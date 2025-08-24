const iframe =  document.getElementById('map-iframe');
const image =  document.getElementById('map-image');

function updateMap(){
    if(navigator.onLine){

        iframe.style.display="block";
        image.style.display="none";
    }
    else{
    
    iframe.style.display="none";
    image.style.display="block";
    }

}

window.addEventListener('online',updateMap);
window.addEventListener('offline',updateMap);