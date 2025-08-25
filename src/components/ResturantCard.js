import { CDN_URL } from '../utils/constants'

const ResturantCard = (props) => {
  const { resItems } = props
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    locality,
    areaName,
    sla,
  } = resItems.info

  return (
    <div className='cards'>
      <div className='card-image'>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name || 'Restaurant image'}
        />
      </div>
      <div className='card-body'>
        <div className='card-info'>
          <div className='card-title'>{name}</div>
          <div>{cuisines?.join(', ')}</div>
          <div className='card-rating'>{avgRating} stars</div>
        </div>

        <div className='card-price'>Price : {costForTwo}</div>
        <div className='delivery'>
          Time:
          <span className='time'>{sla?.deliveryTime} minutes</span>
          <span className='charges'>
            locality: {locality}, {areaName}
          </span>
        </div>
      </div>
    </div>
  )
}
export default ResturantCard
