import { useRouteError } from 'react-router'

const Error = () => {
  const err = useRouteError()
  console.log(err)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <p>
        {err.status} {err.statusText}
      </p>
      <h1>Opps!!</h1>
      <div>
        <h2>Something went wrong</h2>
      </div>
    </div>
  )
}
export default Error
