import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DataContext from './context/DataContext';
import { FaHome, FaPlusSquare, FaInfoCircle, FaSearch } from 'react-icons/fa';

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return 'active';
    if (path !== '/' && location.pathname.startsWith(path)) return 'active';
    return '';
  };

  return (
    <nav className='main-nav glass-panel'>
      <form className='search-form form-group' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" className="sr-only" style={{ display: 'none' }}>Search Posts</label>
        <div style={{ position: 'relative' }}>
          <FaSearch style={{ position: 'absolute', top: '15px', left: '15px', color: 'var(--text-muted)' }} />
          <input
            id="search"
            type='text'
            className='input-premium'
            style={{ paddingLeft: '40px' }}
            placeholder='Search posts...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      
      <ul className='nav-links'>
        <li>
          <Link to="/" className={isActive('/')}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/post" className={isActive('/post')}>
            <FaPlusSquare /> New Post
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about')}>
            <FaInfoCircle /> About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;