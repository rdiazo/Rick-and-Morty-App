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
        <img className='resident__img' src="https://i.redd.it/o6cwlzg3exk41.png" alt="" />
        <form className='resident__form' onSubmit={handleSubmit}>
          <input className='resident__input' ref={inputLocation} type="text" />
          <button className='resident__button' >Search</button>
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
          )}
    </div >
  )}

export default App