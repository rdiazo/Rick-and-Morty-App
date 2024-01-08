import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'


function App() {
  const locationId = getRandomNumber(126)
  const [inputValue, setInputValue] = useState(locationId)
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value)
  }

  return (
    <div>
      <div className='resident__head' >
        <img className='resident__img' src="https://camo.githubusercontent.com/452eedda46733760ca7eed747a1dfdfba398bf402f0567fba52c976b693fc24c/68747470733a2f2f7669676e657474652e77696b69612e6e6f636f6f6b69652e6e65742f7269636b616e646d6f7274792f696d616765732f322f32372f506f636b65745f6d6f727479735f62616e6e65722e6a7067" alt="" />
        <h1 className='resident__h1'>Rick and Morty</h1>
        <form className='resident__button' onSubmit={handleSubmit}>
          <input ref={inputLocation} type="text" />
          <button >Search</button>
        </form>
      </div>
      {
        hasError
          ? <h2>Hey! you must provide an id from 1 to 126</h2>
          : (
            <>
              <LocationCard
                location={location}
              />
              <div className='resident__container'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }
    </div >
  )
}

export default App