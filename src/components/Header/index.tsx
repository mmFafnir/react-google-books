
import { FC } from "react";
import Logo from "../UI/Logo";

import './style.scss'

const Header:FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper container">
                <div>
                    <Logo />
                </div>
                <div></div>
            </div>
        </header>
    );
};

export default Header;
