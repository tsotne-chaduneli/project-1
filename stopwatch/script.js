const controlElNames = [
    'display',
    'startBtn',
    'stopBtn',
    'resetBtn',
]

const timeTypes = {
    hours: 2,
    minutes: 2,
    seconds: 2,
    milliseconds: 99,
}
/* 
კონსტრუქტორები (ფუნქციები რომელთაგანაც უნდა შეიქმნას ობიექტები)
    Object
    Array
    Date
    Number
    String
 */
const timeEls = Object.keys(timeTypes).map(e => document.getElementById(e))
const timeLimits = Object.values(timeTypes).map(e => e)

const [
    display,
    startBtn,
    stopBtn,
    resetBtn,
] = controlElNames.map(e => document.getElementById(e))

startBtn.addEventListener('click', ()=>{
    if(!timer){
        timer = setInterval(countdown, 10)
    }
})
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetAll)

function stopTimer(){
    clearInterval(timer)
    timer = null
}

// const data = [2, 1, 0, 99]
// const toUpdateIndex = 0
// console.log(data.filter((e, index) => index > toUpdateIndex).map(toChange => toChange = 0))

function countdown(){
    if(!(++count <= timeStarterLimit)){
        count = 0
        const toUpdateIndex = timeEls.findLastIndex((e, index) => +e.textContent < timeLimits[index])
        if(~toUpdateIndex){
            timeEls[toUpdateIndex].textContent = `${+timeEls[toUpdateIndex].textContent + 1}`.padStart(2, '0')
            timeEls.filter((e, index) => index > toUpdateIndex).map(
                toChange => toChange.textContent = `${defaltStart}`.padStart(2, '0')
            )
        }else{
            stopTimer()
        }
    }
    timeStarterEl.textContent = `${count}`.padStart(2, '0')
}

function resetAll(){
    timeEls.forEach(e => e.textContent = `${defaltStart}`.padStart(2, '0'))
}

const defaltStart = 0
const timeStarterEl = timeEls[timeEls.length - 1]
const timeStarterLimit = timeLimits[timeLimits.length - 1]
const timeStarterIndex = timeLimits.length - 1
let timer = null
let count = 0

// console.log(toUpdateIndex)