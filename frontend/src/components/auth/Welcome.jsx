import { Link } from 'react-router-dom';


function Welcome() {
  return (
    <div>
      <Link to="/register" className="font-bold text-black">Sign  Up</Link>
        <Link to="/login" className="font-bold text-black"> Log in</Link>
        {/* <Link to="/registerprovider" className="font-bold text-black"> Log in</Link> */}

    </div>
  )
}

export default Welcome
