import { CirclesWithBar } from 'react-loader-spinner'

const Spinner = () => (
  <div
    style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <CirclesWithBar
      height='100'
      width='100'
      color='#4fa94d'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
      outerCircleColor=''
      innerCircleColor=''
      barColor=''
      ariaLabel='circles-with-bar-loading'
    />
  </div>
)

export default Spinner
