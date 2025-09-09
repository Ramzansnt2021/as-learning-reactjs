import { useState, useEffect } from 'react'
import ResturantCard from './ResturantCard'
import Shimmer from './Shimmer'

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [resturantLists, setResturantLists] = useState([])
  const [searchText, setSearchText] = useState('')

  // Fetch data on mount
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

      setAllRestaurants(restaurants)
      setResturantLists(restaurants)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSearch = () => {
    const query = searchText.trim().toLowerCase()
    if (query === '') {
      setResturantLists(allRestaurants)
      return
    }

    const filteredRestaurants = allRestaurants.filter((resturant) =>
      resturant.info.name.toLowerCase().includes(query)
    )
    setResturantLists(filteredRestaurants)
  }

  const handleTopRated = () => {
    const filteredLists = allRestaurants.filter(
      (resturant) => resturant.info.avgRating >= 4.5
    )
    setResturantLists(filteredLists)
  }

  const handleReset = () => {
    setSearchText('')
    setResturantLists(allRestaurants)
  }

  return (
    <main className='body'>
      <div className='container'>
        <div className='filter-flex'>
          <div className='search-bar'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search restaurants...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          <button className='search' onClick={handleTopRated}>
            Top Rated Restaurants
          </button>

          <button onClick={handleReset}>Reset</button>
        </div>

        <div className='restaurants-container'>
          {resturantLists.length === 0 ? (
            <Shimmer />
          ) : (
            resturantLists.map((resturant) => (
              <ResturantCard key={resturant.info.id} resItems={resturant} />
            ))
          )}
        </div>
      </div>
    </main>
  )
}

export default Body
