const btn1 =document.getElementById('mybtn1')

const btn2 = document.getElementById('mybtn2')

const img = document.getElementById('myImage')


btn1.addEventListener('click', () => {
    img.src = 'img/pic_bulbon.gif'
})

btn2.addEventListener('click', () => {
    img.src = 'img/pic_bulboff.gif'
})

