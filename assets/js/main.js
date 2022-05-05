let nameUser = window.prompt('Olá, como se chama?');

const revealAutor = () => {
    document.querySelector('.autor-container').style.display = "block";
};

const hiddenAutor = () => {
    document.querySelector('.autor-container').style.display = "none";
};

const dataTime = () => {
    const data = new Date;
    const getHour = data.getHours();
    const hour = getHour <= 9 ? `0${getHour}` : getHour;
    const getMinutes = data.getMinutes();
    const minutes = getMinutes <= 9 ? `0${getMinutes}` : getMinutes;

    document.querySelector('.hour-minutes').innerHTML = `${hour}:${minutes}`;

};

const salutation = () => {
    const data = new Date;
    const hour = data.getHours();

    if(nameUser == null) {
        nameUser = 'Mestre';
    }

    if(hour >= 12 && hour <= 17) {
        document.querySelector('.salutation').innerHTML = `Boa tarde, ${nameUser}.`;
    } else if (hour >= 18 || hour < 4) {
        document.querySelector('.salutation').innerHTML = `Boa noite, ${nameUser}.`;
    } else if ( hour >= 4 && hour <= 11) {
        document.querySelector('.salutation').innerHTML = `Bom dia, ${nameUser}.`;
    }
}

setInterval(salutation, 10);
setInterval(dataTime, 10);

document.querySelector('.motivational-phrase-container').addEventListener('mouseover', revealAutor);
document.querySelector('.motivational-phrase-container').addEventListener('mouseout', hiddenAutor);