const ShimmerCard = () => {
  return (
    <div className='cards shimmer-card'>
      <div className='card-image shimmer-box'>
        <img />
      </div>
      <div className='card-body'>
        <div className=' shimmer-box card-info'>
          <div className='card-title'></div>
          <div></div>
          <div className='card-rating'></div>
        </div>

        <div className='shimmer-box card-price'></div>
        <div className='shimmer-box delivery'>
          <span className='time'></span>
          <span className='charges'></span>
        </div>
      </div>
    </div>
  )
}
export default ShimmerCard
