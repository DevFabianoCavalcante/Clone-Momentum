let nameUser = window.prompt('Olá, como se chama?');

const revealAutor = () => {
    document.querySelector('.autor-container').style.display = "block";
};

const hiddenAutor = () => {
    document.querySelector('.autor-container').style.display = "none";
};

const dataTime = () => {
    const data = new Date;
    const hour = data.getHours();
    const minutes = data.getMinutes();
    document.querySelector('.hour-minutes').innerHTML = `${hour}:${minutes}`;

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
};

setInterval(dataTime, 10);

document.querySelector('.motivational-phrase-container').addEventListener('mouseover', revealAutor);
document.querySelector('.motivational-phrase-container').addEventListener('mouseout', hiddenAutor);