import { useHeroes } from "../hooks/useHeroes"


const HomePage = () => {
  const { fetchHeroes } = useHeroes()

  return (
    <div>HomePage</div>
  )
}

export default HomePage