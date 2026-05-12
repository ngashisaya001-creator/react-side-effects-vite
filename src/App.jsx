import { useState, useEffect } from "react"

function App() {
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState(true)

  // this function hits the joke API and updates our state
  function fetchJoke() {
    setLoading(true)

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(res => res.json())
      .then(data => {
        // the API returns the joke inside a "joke" key
        setJoke(data.joke)
        setLoading(false)
      })
      .catch(() => {
        setJoke("Couldn't load a joke right now, try again.")
        setLoading(false)
      })
  }

  // runs once when the component first mounts, grabs the first joke
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div>
      <h1>Programming Jokes</h1>

      {/* show loading text while waiting, otherwise show the joke */}
      <p>{loading ? "Loading..." : joke}</p>

      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  )
}

export default App