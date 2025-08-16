import ResturantCard from './ResturantCard'
import resObjList from '../utils/constants'
import { useState } from 'react'
// Body

const Body = () => {
  const [resturantLists, setResturantLists] = useState(resObjList)
  const restResturantLists = () => {
    setResturantLists(resObjList)
  }
  return (
    <main className='body'>
      <div className='container'>
        <button
          className='search'
          onClick={() => {
            const filteredLists = resturantLists.filter(
              (resturant) => resturant.rating > 4
            )
            setResturantLists(filteredLists)
            console.log(filteredLists)
          }}
        >
          Top Rated Resturantes
        </button>
        <button onClick={restResturantLists}> Rest</button>
        <div className='restaurants-container'>
          {resturantLists.map((resturants) => (
            <ResturantCard key={resturants.id} resItems={resturants} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Body
