import ShimmerCard from './ShimmerCard'

const Shimmer = () => {
  return (
    <div className='shimmer-ui'>
      {Array(8)
        .fill('')
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  )
}

export default Shimmer
