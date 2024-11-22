const content = document.querySelector('.content');
const icon = document.querySelector('.icon i');
const heading = document.querySelector('.text h3');
const para = document.querySelector('.text p');
const button = document.querySelector('.text button');


function updateConnectionStatus() {
    if (navigator.onLine) {
        content.style.display = "block"; 
        icon.style.background = "green";
        heading.innerHTML = "Restored Connection";
        para.innerHTML = "Your device is successfully connected to the internet.";
        content.style.borderTop = "2px solid green";
        button.style.background = "gray";
        button.style.cursor = "not-allowed";
        button.disabled = true; 

    } else {
        content.style.display = "block";
        icon.style.background = "red";
        content.style.borderTop = "2px solid red"
        heading.innerHTML = "Lost Connection";
        para.innerHTML = "Your network is unavailable. We will attempt to reconnect you.";
        button.style.background = "blue";
        button.style.cursor = "pointer";
        button.disabled = false; 

    }
        setTimeout(() => {
            content.style.display = "none";
        }, 6000); 
}

window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

updateConnectionStatus();

button.addEventListener('click', () => {
    if (!navigator.onLine) {
        para.innerHTML = "Attempting to reconnect...";

        setTimeout(() => {
            if (navigator.onLine) {
                updateConnectionStatus();
            } else {
                para.innerHTML = "Reconnect failed. Check your internet settings.";
            }
        }, 4000);
    }
});
