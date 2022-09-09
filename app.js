const btn = document.querySelector('#tryToClickMe');

btn.addEventListener('mouseover', function(){
    const newPosition = randonHeighAndWidth();
    movingTheButton(btn, newPosition.width, newPosition.height);
});

function randonHeighAndWidth(){
    const height = Math.floor(Math.random() * window.innerHeight);
    const width  = Math.floor(Math.random() * window.innerWidth);
    return {height, width};
};

function movingTheButton(btn, width, height){
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
};

btn.addEventListener('click', function(){
    btn.innerText = 'YOU GOT ME!';
    document.body.style.backgroundColor = 'green';
})