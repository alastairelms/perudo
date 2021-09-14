import Link from 'next/link'

export default function Home(props) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>00:10</p>
      <button onClick={logToConsole}>Start</button>
    </div>
  )
}

const logToConsole = () => {
  // setTimeout(() => { console.log("Clicked") }, 3000)

  let seconds = 10

  // setTimeout(() => { console.log("10") }, 0)
  // setTimeout(() => { console.log("9") }, 1000)
  // setTimeout(() => { console.log("8") }, 2000)
  withRecursion(seconds)
}

const withRecursion = (seconds) => {
  console.log(seconds)

  if (seconds != 0) {
    setTimeout(() => { withRecursion(seconds - 1) }, 1000)
  }
}

// const withRecursion2 = (seconds) => {
//   if (seconds == 0) return
//   console.log(seconds)
//   setTimeout(() => { withRecursion(seconds - 1) }, 1000)
// }

// const withInterval = () => {
//   let seconds = 10
//   const timer = setInterval(() => {
//     console.log(seconds)
//     seconds--
//   }, 1000)
// }

// seconds | result
// 10      | log 10, call with 9
// 9       | log 9, call with 8

// const timeleft = 10;

// const countdownTimer = setInterval(() => {
//   if(timeleft <= 0) {
//     clearInterval(countdownTimer)
//   }
// })

// <button onClick={setTimeout(logToConsole, 10000)}>Start</button>

// const setTimeout(() => {
//   logToConsole()
// }, 10000)

// let timeLeft = 10;
// const countdownTimer = setInterval(() => {
//   if(timeLeft <= 0) {
//     clearInterval(countdownTimer)
//   }
//   document.getElementById("countdownTimer").innerHTML = timeLeft + 'seconds remaining'
//   timeLeft -= 1
// })