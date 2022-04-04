import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center ml-[500px] md:justify-between'>

            <div className='flex gap-4 text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>DashBoard</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;