
let intervelID
randomColor = function(){
    hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    color = '#';
    for(let i = 0; i<6;i++){
        color += hex[Math.floor(Math.random()* 16)]

    }

    return color
}


const changeColor = function(){
    function changed(){
    document.body.style.backgroundColor = randomColor();
}
  intervelID = setInterval(changed,3000)
}


stopChangingColor = function(){
    clearInterval(intervelID)
    document.body.style.backgroundColor = 'black'
}
const start = document.querySelector('#start')
const Stop = document.querySelector('#stop')


start.addEventListener('click', changeColor)

Stop.addEventListener('click', stopChangingColor)