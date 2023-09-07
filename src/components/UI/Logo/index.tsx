import { FC } from 'react';
import { Link } from 'react-router-dom';


import './style.scss';

const Logo:FC = () => {
    return (
        <div className="logo">
            <Link to={"/"}>
                <img src="//themes.laborator.co/aurum/bookshop/wp-content/uploads/2015/01/logobookstore.png" />
            </Link>
        </div>
    );
};

export default Logo;