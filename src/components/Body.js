import { useState, useEffect, useRef } from 'react'
import ResturantCard from './ResturantCard'
import Shimmer from './Shimmer'

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [visibleRestaurants, setVisibleRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(1)

  const pageSize = 8 // number of restaurants per "page"
  const loaderRef = useRef(null)

  // Fetch data on mount
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const responses = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0381364&lng=72.5543807&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      const data = await responses.json()

      const restaurants =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []

      setAllRestaurants(restaurants)
      setVisibleRestaurants(restaurants.slice(0, pageSize)) // initial page
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    if (!loaderRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1)
        }
      },
      { threshold: 1.0 }
    )

    observer.observe(loaderRef.current)

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current)
    }
  }, [])

  // Update visibleRestaurants when page or search changes
  useEffect(() => {
    const query = searchText.trim().toLowerCase()

    let filtered = allRestaurants
    if (query !== '') {
      filtered = allRestaurants.filter((resturant) =>
        resturant.info.name.toLowerCase().includes(query)
      )
    }

    setVisibleRestaurants(filtered.slice(0, page * pageSize))
  }, [page, searchText, allRestaurants])

  const handleTopRated = () => {
    const filteredLists = allRestaurants.filter(
      (resturant) => resturant.info.avgRating >= 4.5
    )
    setVisibleRestaurants(filteredLists.slice(0, page * pageSize))
  }

  const handleReset = () => {
    setSearchText('')
    setPage(1)
    setVisibleRestaurants(allRestaurants.slice(0, pageSize))
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
          </div>

          <button className='search' onClick={handleTopRated}>
            Top Rated Restaurants
          </button>

          <button onClick={handleReset}>Reset</button>
        </div>

        <div className='restaurants-container'>
          {visibleRestaurants.length === 0 ? (
            <Shimmer />
          ) : (
            visibleRestaurants.map((resturant) => (
              <ResturantCard key={resturant.info.id} resItems={resturant} />
            ))
          )}
        </div>

        {/* Observer target (loader) */}
        <div ref={loaderRef} style={{ height: '40px' }}></div>
      </div>
    </main>
  )
}

export default Body
