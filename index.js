// //detect the key and reproduces the sound

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!audio) return;
    audio.currentTime = 0; //no delay 
    audio.play(); //plays sound

    key.classList.add('play'); //transition

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        console.log(e.propertyName)
        this.classList.remove('play')
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))


}

window.addEventListener('keydown', playSound)