
const hoverFunction = () => {
    try {
        const icon = document.querySelectorAll('.svg-css')
    const text = document.querySelectorAll('.nav-text')
    const li = document.querySelectorAll('.nav-li')
    const address = document.querySelector('.address')
    const cart = document.querySelector('.cart-svg')
    for (let i = 1; i < li.length; i++) {
        li[i].addEventListener('mouseenter', () => {
            text[i].style.color = '#FA8128'
            icon[i].style.fill = '#FA8128'
        })
        li[i].addEventListener('mouseleave', () => {
            text[i].style.color = 'black'
            icon[i].style.fill = '#3d4152'
        })
    }
    li[0].addEventListener('mouseenter', () => {
        cart.style.stroke = '#FA8128'
        li[0].style.color = '#FA8128'
    })
    li[0].addEventListener('mouseleave', () => {
        cart.style.stroke = '#3d4152'
        li[0].style.color = '#3d4152'

    })
    address.addEventListener('mouseenter', () => {
        document.querySelector('.area').style.color = '#FA8128'
        document.querySelector('.area').classList.add('change')

    })
    address.addEventListener('mouseleave', () => {
        document.querySelector('.area').style.color = 'black'
        document.querySelector('.area').classList.remove('change')

    })
    } catch (error) {
        
    }
    
}
export default hoverFunction;