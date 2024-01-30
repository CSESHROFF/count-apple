const firstBasket = document.querySelector('.basket1 span')
const secondBasket = document.querySelector('.basket2 span')
const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')


const totalApples = 10
let secondBasketAppleCount = 0
let firstBasketAppleCoount = totalApples - secondBasketAppleCount

firstBasket.innerText = firstBasketAppleCoount
secondBasket.innerText = secondBasketAppleCount

rightArrow.addEventListener('click',()=>{
    if(firstBasketAppleCoount>0)
    {
        firstBasketAppleCoount--
        firstBasket.innerText = firstBasketAppleCoount
        secondBasketAppleCount++
        secondBasket.innerText = secondBasketAppleCount

    }

})

leftArrow.addEventListener('click',()=>{
    if(secondBasketAppleCount>0)
    {
        firstBasketAppleCoount++
        firstBasket.innerText = firstBasketAppleCoount
        secondBasketAppleCount--
        secondBasket.innerText = secondBasketAppleCount

    }

})

