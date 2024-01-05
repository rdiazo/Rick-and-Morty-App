import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'

function App() {
  const locationId = getRandomNumber(126)
  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <div>
      <h1>Rick and Morty</h1>
      <LocationCard 
       location={location}
      />
      <div>
        {
          location?.residents.map(url => (
            <ResidentCard 
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
