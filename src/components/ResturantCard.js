// Resturant Cards
const ResturantCard = (props) => {
  const { resItems } = props
  const {
    hero_listing_image,
    name,
    rating,
    minimum_order_amount,
    minimum_delivery_time,
    minimum_delivery_fee,
  } = resItems
  return (
    <div className='cards'>
      <div className='card-image'>
        <img src={hero_listing_image} alt='res-image' />
      </div>
      <div className='card-body'>
        <div className='card-info'>
          <div className='card-title'>{name}</div>
          <div className='card-rating'>Rating: {rating}</div>
        </div>

        <div className='card-price'>Price : {minimum_order_amount}</div>
        <div className='delivery'>
          Time:
          <span className='time'>{minimum_delivery_time} mins</span>
          <span className='charges'>charges fee:{minimum_delivery_fee}</span>
        </div>
      </div>
    </div>
  )
}
export default ResturantCard
