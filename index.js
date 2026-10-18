const openBtn = document.getElementById('burger');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu')

openBtn.addEventListener('click', () => {
    menu.classList.add('active')
})
closeBtn.addEventListener('click', () => {
    menu.classList.remove("active")
})
menu.addEventListener('click', (e) => {
    if(e.target === menu) {
        menu.classList.remove('active')
    }
})