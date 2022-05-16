import { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
const HeaderDropdown = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='dropdown-container'>
            <FaBars size={30} className="header-bars" style={{ cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)} />
            {showMenu ?
                <div className='dropdown-menu-container'>
                    <Link to="/" className='dropdown-item' onClick={() => setShowMenu(false)}>
                        <p>
                            Find a Store
                        </p>
                    </Link>
                    <Link to="/createStore" className='dropdown-item' onClick={() => setShowMenu(false)}>
                        <p>
                            Create a store
                        </p>
                    </Link>
                    <Link to="/myStores" className='dropdown-item' onClick={() => setShowMenu(false)}>
                        <p>
                            My Stores
                        </p>
                    </Link>
                </div>
            :
                null
            }
        </div>
    )
}

export default HeaderDropdown