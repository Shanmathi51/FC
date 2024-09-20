import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data (including role) from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    setUser(loggedInUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login'); // Redirect to login page
  };

  const handleUsernameClick = () => {
    if (user && user.role === 'admin') {
      navigate('/admin'); // Navigate to admin page if user is admin
    }
  };

  const handleEventClick = (e) => {
    if (!user) {
      e.preventDefault(); // Prevent the navigation
      alert('Please log in to view the event.');
    }
  };

  const handleMenuClick = (e) => {
    if (!user) {
      e.preventDefault(); // Prevent the navigation
      alert('Please log in to view the menu.');
    }
  };

  return (
    <div className='header'>
      <img src={'data:image/jpeg;base64,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'} width={50} height={50} alt='fc Logo' />
      <div className='hc'>
        <h1><b>KEC Food-Court</b></h1>
      </div>
      <nav>
        <ul className='headerheading'>
          {/* <li>
            <Link to='/event' className='link' onClick={handleEventClick}>Event</Link>
          </li> */}
          <li>
            <Link to='/menu' className='link' onClick={handleMenuClick}>Menu</Link>
          </li>
          <li>
            <Link to='/about' className='link'>About</Link>
          </li>
          <li>
            <Link to='/contact' className='link'>Contact</Link>
          </li>
          {!user ? (
            <>
              <button className='login-btn'><Link to='/login'>LogIn</Link></button>
              <button className='register-btn'><Link to='/register'>Register</Link></button>
            </>
          ) : (
            <>
              {/* Display username as a button */}
              <button className='username-btn' onClick={handleUsernameClick}>
                {user.username}
              </button> 
              <button className='logout-btn' onClick={handleLogout}>Logout</button>
            </>
          )}
        </ul>
      </nav>
      {/* <div className='logo img'>
        <img src={halal} width={80} height={80} alt='Halal Logo' />
      </div> */}
    </div>
  );
}

export default Header;
