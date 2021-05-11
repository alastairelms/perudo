import { useState } from 'react'

// const nameInput = document.getElementById("name-input");

export default function Home(props) {
  
  const {userState} = props
  const [name, setName] = useState("");

  const updateName = (evt) => {
    setName(evt.target.value);
  }

  const captureName = async (evt) => {
    evt.preventDefault()
    let response = await fetch("/api/users", { method: "POST", body: name})
    if (response.ok) {
      userState.setUser(name)
      console.log("Success") 
    } else {
      console.error("Error")
    }
  }

  return (
    <>
        <div className="flex mx-auto md:container w-full h-full">
          <form onSubmit={captureName}> 
            <input className="flex w-500 text-black text-sm placeholder-black" type="text" placeholder="What should we call you?" value={name} onChange={updateName} required/>
            <button className="inline-block bg-white rounded-md p-3 text-sm ml-5">Let's play!</button>
          </form>
        </div>

    </>
  )
}

// <button onClick={captureName}>Submit</button>
// nameInput.addEventListener("keyup", function(evt) {
//   if (evt.code === 'Enter') {
//     captureName()
//   }

// })

