const blue = document.getElementById('blue')
const red = document.getElementById('red')
const green = document.getElementById('green')
const purple = document.getElementById('purple')
const yellow = document.getElementById('yellow')
const getHeader = document.getElementById('header')
const getVisitCard = document.getElementById('visitCard')

function changeColor(which) {
    switch (which.target.id) {
        case 'blue':
            getHeader.style.backgroundColor = 'var(--theme-color-blue)'
            getVisitCard.style.border = '2px solid var(--theme-color-blue)'
            break;
        case 'red':
            getHeader.style.backgroundColor = 'var(--theme-color-red)'
            getVisitCard.style.border = '2px solid var(--theme-color-red)'
            break;
        case 'green':
            getHeader.style.backgroundColor = 'var(--theme-color-green)'
            getVisitCard.style.border = '2px solid var(--theme-color-green)'
            break;
        case 'purple':
            getHeader.style.backgroundColor = 'var(--theme-color-purple)'
            getVisitCard.style.border = '2px solid var(--theme-color-purple)'
            break;
        case 'yellow':
            getHeader.style.backgroundColor = 'var(--theme-color-yellow)'
            getVisitCard.style.border = '2px solid var(--theme-color-yellow)'
            break;                            
        default:
            break;
    }
    console.log(getVisitCard.style.border)
    
}


blue.addEventListener('click', changeColor)
red.addEventListener('click', changeColor)
green.addEventListener('click', changeColor)
purple.addEventListener('click', changeColor)
yellow.addEventListener('click', changeColor)