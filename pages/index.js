import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home(props) {
  const [time, updateTime] = useState(10)
  
  const countDownTimer = (seconds) => {
    updateTime(seconds)
  
    if (seconds != 0) {
      setTimeout(() => { countDownTimer(seconds - 1) }, 1000)
    }
  }
  
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>{ time }</p>
      <button onClick={() => countDownTimer(10)}>Start</button>
    </div>
  )
}