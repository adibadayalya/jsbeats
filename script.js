
    window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors =[
        "rgb(220, 20, 60)","rgb(230, 67, 99)","rgb(241, 127, 150)","rgb(155, 71, 88)",
        "rgb(87, 2, 19)","rgb(151, 63, 80)"
    ]
    const sound ={
        "65" : "sounds/bubbles.mp3",
        "83" : "sounds/clay.mp3",
        "68" : "sounds/confetti.mp3",
        "74" : "sounds/glimmer.mp3",
        "75" : "sounds/moon.mp3",
        "76" : "sounds/ufo.mp3"
    }
    const color ={
        "65":"rgb(220, 20, 60)","83":"rgb(230, 67, 99)","68":"rgb(241, 127, 150)","74":"rgb(155, 71, 88)",
        "75":"rgb(87, 2, 19)","76":"rgb(151, 63, 80)"
    }
    document.addEventListener('keydown',playSounds);
    function playSounds(e){
        let cc=e.keyCode.toString();
        const audio = sound[cc]? new Audio(sound[cc]):null;
        if(!audio)
        return;
        audio.currentTime=0;
        audio.play();
        createBubble(cc)
    }
    pads.forEach((pad,index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime=0
            sounds[index].play();

            createBubble(index);
        });        
    });
    const createBubble = index => {
        if(index > 6)
        {
            const bubble = document.createElement('div');
            visual.appendChild(bubble);
            bubble.style.backgroundColor = color[index];
            bubble.style.animation = `jump 1s ease`;
            bubble.addEventListener('animationend',function(){
                visual.removeChild(this);
            })
        }
        else 
        {const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })}
    };
});
