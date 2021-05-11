import '../styles/index.css';
import { useState } from 'react'



function MyApp({ Component, pageProps }) {

  const [username, setUsername] = useState("");
  const userState = {
      user: username,
      setUser: setUsername
  } 

  return <Component userState={userState} {...pageProps} />
}

export default MyApp