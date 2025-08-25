import ResturantCard from './ResturantCard'
import { useState, useEffect } from 'react'

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [resturantLists, setResturantLists] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const responses = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757'
      )
      const data = await responses.json()
      const restaurants =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []

      setAllRestaurants(restaurants)     // keep full list
      setResturantLists(restaurants)     // show full list initially
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleTopRated = () => {
    const filteredLists = allRestaurants.filter(
      (resturant) => resturant.info.avgRating >= 4.3
    )
    setResturantLists(filteredLists)
  }

  const handleReset = () => {
    setResturantLists(allRestaurants)
  }

  return (
    <main className='body'>
      <div className='container'>
        <button className='search' onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
        <button onClick={handleReset}>Reset</button>

        <div className='restaurants-container'>
          {resturantLists.map((resturant) => (
            <ResturantCard key={resturant.info.id} resItems={resturant} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Body
