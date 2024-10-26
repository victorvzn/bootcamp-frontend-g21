import { useEffect, useState } from "react"
import { useHeroes } from "../hooks/useHeroes"

const HomePage = () => {
  const { fetchHeroes } = useHeroes()

  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetchHeroes()
      .then(data => setHeroes(data))
  }, [])

  return (
    <div>{JSON.stringify(heroes)}</div>
  )
}

export default HomePage