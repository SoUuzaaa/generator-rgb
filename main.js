function dateNow(){
    let date = new Date(),
        day  = date.getDate().toString().padStart(2, '0'),
        month  = (date.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        year  = date.getFullYear();
        hour = date.getHours().toString().padStart(2, '0')
        minutes = date.getMinutes().toString().padStart(2, '0')

    document.querySelector('#date').innerHTML = `${day}/${month}/${year} - ${hour}:${minutes}`;

    if(date.getHours() <= 6 || date.getHours() >= 18) {
        document.querySelector('body').style.background = 'rgb(34, 34, 34)'
        document.querySelector('body').style.color = 'white'
        document.querySelector('.generator-container').style.background = 'rgb(47, 47, 47)'
        document.querySelector('.date-info').style.background = 'rgb(47, 47, 47)'
    }
}

setTimeout(dateNow(), 1000)

function changeColor() {
    let red = document.querySelector('#red').value
    let green = document.querySelector('#green').value
    let blue = document.querySelector('#blue').value
    let color = `rgb(${red},${green},${blue})`

    document.querySelector('.circle').style.background = color

    document.querySelector('#rgb').innerHTML = color
}

document.querySelector('#red').addEventListener('input', changeColor)
document.querySelector('#green').addEventListener('input', changeColor)
document.querySelector('#blue').addEventListener('input', changeColor)
