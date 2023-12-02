// HOMEWORK 1 (part 1)

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const regExp = /^\w{1,50}@gmail\.com$/


gmailButton.addEventListener('click',() => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'OK'
        gmailSpan.style.color = 'green'
    }
    else {
        gmailSpan.innerHTML = 'NOT OK'
        gmailSpan.style.color = 'red'
    }
})



// HOMEWORK 1 (part 2)

const childBlock = document.querySelector('.child_block')


let positionX = 0
let positionY = 0

function moveChildBlock () {
    if (positionX < 448 && positionY ===0) {
        positionX+=2
        childBlock.style.left = `${positionX}px`
        setTimeout(moveChildBlock, 10)
    }
    else if (positionX >= 448 && positionY < 448) {
        positionY+=2
        childBlock.style.top = `${positionY}px`
        setTimeout(moveChildBlock, 10)
    }
    else if (positionX > 0 && positionY > 0) {
        positionX-=2
        childBlock.style.left = `${positionX}px`
        setTimeout(moveChildBlock, 10)
    }
    else if (positionX === 0 && positionY > 0) {
        positionY-=2
        childBlock.style.top = `${positionY}px`
        setTimeout(moveChildBlock, 10)
    }
}

moveChildBlock()



// HOMEWORK 2

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

const mlSeconds = document.querySelector('#ml-secondsS')
const seconds = document.querySelector('#secondsS')
const minutes = document.querySelector('#minutesS')

let timer
let mlSecondsValue = 0
let secondsValue = 0
let minutesValue = 0


const updateTimer = () => {
    mlSeconds.textContent = mlSeconds < 10 ? "0" + mlSecondsValue : mlSecondsValue
    seconds.textContent = seconds < 10 ? "0" + secondsValue : secondsValue
    minutes.textContent = minutes < 10 ? "0" + minutesValue : minutesValue
}


startBtn.onclick = () => {
    if (!timer) {
        timer = setInterval(() => {
            mlSecondsValue++
            if (mlSecondsValue === 100) {
                mlSecondsValue = 0
                secondsValue++
                if (secondsValue === 60) {
                    secondsValue = 0
                    minutesValue++
                }
            }
            updateTimer()
        },10)
    }
}

stopBtn.onclick = () => {
    if (timer) {
        clearInterval(timer)
        timer = null
    }
}

resetBtn.onclick = () => {
    if (timer) {
        clearInterval(timer)
        timer = null
    }
    mlSecondsValue = 0
    secondsValue = 0
    minutesValue = 0
    updateTimer()
}

