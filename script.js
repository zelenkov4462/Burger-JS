const menuBtn = document.querySelector('.menu-icons')
const menu = document.querySelector('.menu__body')
const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active'),
        menuBtn.classList.toggle('active'),
        body.classList.toggle('lock')
    })
}

const links = document.querySelectorAll('.menu__item')

links.forEach(link => {
    link.addEventListener('click', (e) => {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
        body.classList.remove('lock')
    })
})

const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()

        const blockId = anchor.getAttribute('href').substring(1)
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })
})

const footerBtn = document.querySelector('.footer__btn')
const mainHeader = document.getElementById('main__header')

footerBtn.addEventListener('click', () => {
    mainHeader.scrollIntoView({
        behavior: "smooth",
        block: 'start'
    })
})
