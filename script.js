const visual = document.querySelector('.visual');
const pads = document.querySelectorAll('.pads div');
const colors = [
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#6860d3',
    '#60b2d3'
]

pads.forEach((pad, index) => {
    pad.addEventListener('click', (e)=>{
       const sound = e.currentTarget.querySelector('audio');
       sound.currentTime = 0;
       sound.play();
       addAnimation(index);
    })

    const addAnimation = ()=>{
        const ball = document.createElement('div');
        visual.appendChild(ball);
        ball.style.background = colors[index]; 
        ball.style.animation = 'jump 1s linear';
        ball.addEventListener('animationend', () => {
            visual.removeChild(ball);
        })
    }
})