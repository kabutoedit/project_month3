// LESSON 1
// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click',() => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    }
    else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
})

//TAB SLIDER

const tabsContendCards = document.querySelectorAll('.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const tabsItemsParent = document.querySelector('.tab_content_items')
let currentIndex = 0

const hideTabsContentCards = () => {
    tabsContendCards.forEach((tabContendCard) => {
        tabContendCard.style.display = 'none'
    })
    tabsItems.forEach((tabsItem) => {
        tabsItem.classList.remove('tab_content_item_active')
    })
}

const showTabsContentCards = (indexElement = 0) => {
    tabsContendCards[indexElement].style.display = 'block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}

hideTabsContentCards()
showTabsContentCards()

tabsItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabsItem,tabsItemIndex) => {
            if (event.target === tabsItem) {
                hideTabsContentCards()
                showTabsContentCards(tabsItemIndex)
                currentIndex = tabsItemIndex
            }
        })
    }
}

const changeTab = () => {
    currentIndex = (currentIndex + 1) % tabsItems.length;
    hideTabsContentCards()
    showTabsContentCards(currentIndex)
}

setInterval(changeTab, 5000)


//CONVERTER

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const cny = document.querySelector('#cny')

const converter = (element, targetElement, targetElement2, type) => {
    element.oninput = async (event) => {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()
            if (type === 'som') {
                targetElement.value = (element.value / data.usd).toFixed(2)
                targetElement2.value = (element.value * data.von).toFixed(2)
            } else if (type === 'usd') {
                targetElement.value = (element.value *  data.usd).toFixed(2)
                targetElement2.value = (element.value * data.usdToVon).toFixed(2)
            } else if (type === 'cny') {
                targetElement.value = (element.value / data.usdToVon).toFixed(2)
                targetElement2.value = (element.value / data.von).toFixed(2)
            }
                element.value === '' && (targetElement.value = '')
                element.value === '' && (targetElement2.value = '')
        }
        catch (e) {
            console.log(event)
        }
    }
}

converter(som, usd, cny, 'som')
converter(usd, som, cny, 'usd')
converter(cny, usd, som, 'cny')





// CARD SWITCHER

const card = document.querySelector('.card'),
    btnPrev = document.querySelector('#btn-prev'),
    btnNext = document.querySelector('#btn-next')

let count = 1


btnNext.onclick = async (event) => {
    count++
    if (count > 200) {
        count = 1
    }
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
            card.innerHTML = `
                <p>${data.title}</p>
                <p style=" color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>`
    }
    catch (e) {
        console.log(e)
    }

    // Старый fetch запрос

    // fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    //     .then(response => response.json())
    //     .then(data => {
    //          card.innerHTML = `
    //             <p>${data.title}</p>
    //             <p style=" color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
    //             <span>${data.id}</span>`
    //     })
}

btnPrev.onclick = async (event) => {
    count--
    if (count < 1) {
        count = 200
    }
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style=" color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>`
    }
    catch (e) {
        console.log(e)
    }

    // Старый fetch запрос

    // fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         card.innerHTML = `
    //             <p>${data.title}</p>
    //             <p style=" color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
    //             <span>${data.id}</span>`
    //     })
}

const cardDefalt = async (event) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style=" color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>`
    }
    catch (e) {
        console.log(event)
    }
}

cardDefalt()

// Старый fetch запрос

// fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//     .then(response => response.json())
//     .then(data => {
//         card.innerHTML = `
//                 <p>${data.title}</p>
//                 <p style=" color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
//                 <span>${data.id}</span>`
//     })

const responseOnJsonplaseholder = async (event) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    }
    catch (e) {
        console.log(event)
    }
}

responseOnJsonplaseholder()

// Старый fetch запрос

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })


// WEATHER

const cityNameInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

cityNameInput.oninput = async (event) => {
    try {
        const response = await fetch(`${WEATHER_API}?q=${event.target.value}&appid=${API_KEY}`)
        const data = await response.json()
        city.innerHTML = data?.name ? data?.name : 'Город не найден...'
        temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C' : '...'
    } catch (e) {
        console.log(e)
    }
}