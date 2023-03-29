import { useEffect } from "react"
import Header from "./Header"
import Card from "./Card"

import "./App.css"

const App = () => {
  // useEffect(() => {
  //   fetch("http://localhost:5000")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  // }, [])

  return (
    <div>
      <Header />
      <Card />
    </div>
  )
}

export default App
