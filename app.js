let menu = document.querySelector('#menu')
let toggle = document.querySelector('.toggle-container')
let none = document.querySelector('#none')

let close = document.querySelector('.fa-close')




menu.addEventListener('click', () => {
    toggle.style.display = 'block'
    none.style.display = 'none'
    close.style.display = 'block'
    menu.style.display = 'none'
})
close.addEventListener('click', () =>{
    none.style.display = 'block'
    menu.style.display = 'block'
    close.style.display = 'none'
    toggle.style.display = 'none'
})