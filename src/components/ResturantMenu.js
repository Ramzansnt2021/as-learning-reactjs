import { useState, useEffect } from 'react'
import ShimmerCard from './ShimmerCard'
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0381364&lng=72.5543807&restaurantId=636894&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A61955%2C%22primaryRestaurantId%22%3A636894%2C%22cloudinaryId%22%3A%22e0839ff574213e6f35b3899ebf1fc597%22%2C%22brandId%22%3A61955%2C%22dishFamilyId%22%3A%22846630%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION'
    )
    const json = await data.json()
    console.log(json)
    setResInfo(json.data)
  }
  if (!resInfo) return <ShimmerCard />
  // genaric
  const info = resInfo?.cards[2]?.card?.card.info || {}
  const { name, cuisines, costForTwoMessage, city } = info

  // Toggle Cards
  const itemsCard =
    resInfo?.cards[4]?.groupCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
    {}
  const { title } = itemsCard
  return (
    <section className='detailed_menu_page'>
      <div className='container'>
        <div className='nav_breadcrumbs'>
          <nav>
            <span>
              <a href='/'>
                <span>Home</span>
              </a>
            </span>
            <span className='separator'></span>
            <span>
              <a href='/'>
                <span>{city}</span>
              </a>
            </span>
            <span className='separator'></span>
            <span>{name}</span>
          </nav>
        </div>
        <div className='resturant_details'>
          <h1>{name}</h1>
          <p>{cuisines?.join(', ')}</p>
          <p>
            <strong>{costForTwoMessage}</strong>
          </p>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default RestaurantMenu
