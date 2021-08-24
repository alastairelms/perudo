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
  console.log("Clicked")
}




// what function do I have to call to start a timer
// make it log "Clicked" 10 seconds after clicking

// ES6 function differences
// x browser compatability